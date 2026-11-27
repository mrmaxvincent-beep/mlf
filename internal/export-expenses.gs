/**
 * mlf os → Google Sheet "02. Finance": đổ chi tiêu sang tab "Chi tiêu mlf os" và sổ thu sang tab "Thu mlf os".
 * Dán vào Extensions → Apps Script của chính sheet 02. Finance.
 *
 * Cài một lần:
 *  1. Dán chuỗi mật khẩu (Tâm gửi riêng) vào giữa hai dấu nháy ở dòng SECRET bên dưới.
 *  2. Chọn hàm setup rồi bấm Run (cấp quyền khi được hỏi). Hàm này đổ dữ liệu ngay và đặt lịch chạy mỗi 15 phút.
 *  3. Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone), copy URL kết thúc bằng /exec
 *     và gửi cho Claude để gắn vào Supabase (app_secrets.sheet_webhook). Từ đó mỗi lần lưu/sửa/xoá sẽ đồng bộ trong vài giây.
 *
 * Mỗi lần chạy cũng đọc các số đã tính ở ba tab Cashflow, Sổ tiền, Công nợ rồi gửi sang mlf os
 * để hiện trên trang "thu chi". Chỉ gửi số đã tính, không bao giờ ghi ngược vào sổ thu / sổ chi.
 *
 * Mỗi lần chạy ghi đè toàn bộ tab "Chi tiêu mlf os" bằng dữ liệu mới nhất; đừng sửa tay trong tab này.
 * Tab "Thu mlf os" phải có sẵn (dòng 1 là tiêu đề A–G). Script chỉ ghi nội dung A2:G và ô I1,
 * giữ nguyên định dạng và danh sách chọn có sẵn ở các cột.
 * Các tab khác (Chi phí, Dashboard…) không bị đụng tới.
 */
var SECRET = '';
var SB_URL = 'https://rzwujcfmdtjbqmuizxcf.supabase.co';
var SB_KEY = 'sb_publishable_Tg6FMPioXLz1STbLa8Lw-g_lquNRVao';
var TAB = 'Chi tiêu mlf os';
var NAMES = { tam: 'Tâm', thuan: 'Thuận', vu: 'Vũ', mlf: 'TK mlf' };
var INCOME_TAB = 'Thu mlf os';

function fetchRows_(fn) {
  if (!SECRET) throw new Error('Chưa dán mật khẩu vào dòng SECRET ở đầu script.');
  var res = UrlFetchApp.fetch(SB_URL + '/rest/v1/rpc/' + fn, {
    method: 'post',
    contentType: 'application/json',
    headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY },
    payload: JSON.stringify({ p_secret: SECRET }),
    muteHttpExceptions: true
  });
  if (res.getResponseCode() !== 200) throw new Error('Supabase ' + res.getResponseCode() + ': ' + res.getContentText());
  return JSON.parse(res.getContentText());
}

function report_(ok, err, started) {
  try {
    UrlFetchApp.fetch(SB_URL + '/rest/v1/rpc/sheet_sync_report', {
      method: 'post',
      contentType: 'application/json',
      headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY },
      payload: JSON.stringify({ p_secret: SECRET, p_ok: ok, p_error: err || null, p_started: started || null }),
      muteHttpExceptions: true
    });
  } catch (e) {}
}

// started: thời điểm yêu cầu (chuỗi ISO) khi gọi từ webhook; trigger theo giờ truyền object nên bỏ qua.
// Cảnh báo (không chặn) khi ai đó sửa tay vùng dữ liệu: mọi chỉnh sửa sẽ bị ghi đè ở lần đồng bộ sau.
var WARN_DESC = 'mlf os tự đồng bộ';
function warn_(sh, cols) {
  sh.getProtections(SpreadsheetApp.ProtectionType.RANGE).forEach(function (p) {
    if (p.getDescription() === WARN_DESC) p.remove();
  });
  var rows = Math.max(sh.getMaxRows() - 1, 1);
  cols.forEach(function (c) {
    sh.getRange(2, c[0], rows, c[1]).protect().setDescription(WARN_DESC).setWarningOnly(true);
  });
}

function exportAll(started) {
  started = typeof started === 'string' ? started : new Date().toISOString();
  try {
    exportExpenses();
    exportIncomes();
    report_(true, null, started);
  } catch (e) {
    report_(false, String((e && e.message) || e), started);
    throw e;
  }
  // đẩy số đã tính ở Cashflow / Sổ tiền / Công nợ sang mlf os; lỗi ở đây không
  // làm hỏng trạng thái đồng bộ hai tab trên, app tự thấy qua giờ cập nhật.
  try { pushFinance_(); } catch (e) {}
}

/* ─── gửi số liệu Finance sang mlf os (một chiều, chỉ để hiển thị) ─── */
function fnum_(v) {
  if (typeof v === 'number') return v;
  var s = String(v == null ? '' : v).replace(/[^0-9.-]/g, '');
  return s && s !== '-' ? Number(s) : 0;
}
function fdate_(v) {
  if (v instanceof Date) return Utilities.formatDate(v, 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd');
  return String(v == null ? '' : v).trim();
}
function ftxt_(v) { return String(v == null ? '' : v).trim(); }
function frow_(vals, col, text, from) {
  var t = text.toLowerCase();
  for (var i = from || 0; i < vals.length; i++) {
    if (ftxt_(vals[i][col]).toLowerCase().indexOf(t) === 0) return i;
  }
  return -1;
}
// các dòng dữ liệu của một mục, bắt đầu sau dòng tiêu đề, dừng ở dòng trống
function fblock_(vals, head, map) {
  var out = [];
  for (var i = head + 2; i < vals.length; i++) {
    if (!ftxt_(vals[i][0])) break;
    out.push(map(vals[i]));
  }
  return out;
}
function finSoTien_(ss) {
  var sh = ss.getSheetByName('Sổ tiền');
  if (!sh) return null;
  var vals = sh.getRange(1, 1, Math.min(sh.getMaxRows(), 120), 8).getValues();
  function months(head) {
    var out = [];
    for (var i = 0; i < 12; i++) {
      var r = vals[head + 2 + i]; if (!r) break;
      // tháng chưa ghi sổ để trống hoàn toàn: bỏ qua, đừng gửi số 0 gây hiểu nhầm
      if (!ftxt_(r[1]) && !ftxt_(r[2]) && !ftxt_(r[3]) && !ftxt_(r[4]) && !ftxt_(r[5])) continue;
      out.push({ m: i + 1, open: fnum_(r[1]), inn: fnum_(r[2]), out: fnum_(r[3]), move: fnum_(r[4]), end: fnum_(r[5]), stmt: ftxt_(r[6]) === '' ? null : fnum_(r[6]), diff: ftxt_(r[7]) === '' ? null : fnum_(r[7]) });
    }
    return out;
  }
  var accs = [];
  for (var i = 8; i <= 10; i++) {
    var key = ftxt_(vals[i][0]); if (!key) continue;
    var head = frow_(vals, 0, key, 12);
    if (head < 0) continue;
    accs.push({ key: key, name: ftxt_(vals[i][3]) || key, months: months(head) });
  }
  var th = frow_(vals, 0, 'TỔNG CÁC TÀI KHOẢN', 12);
  return {
    year: fnum_(vals[4][2]), start: fdate_(vals[3][2]), no_account: fnum_(vals[5][2]),
    accounts: accs, total: th >= 0 ? months(th) : []
  };
}
function finCongNo_(ss) {
  var sh = ss.getSheetByName('Công nợ');
  if (!sh) return null;
  var vals = sh.getRange(1, 1, Math.min(sh.getMaxRows(), 120), 7).getValues();
  function one(label) { var i = frow_(vals, 0, label); return i < 0 ? 0 : fnum_(vals[i][2]); }
  var h1 = frow_(vals, 0, '1. KHÁCH CÒN NỢ'), h2 = frow_(vals, 0, '2. MLF CÒN NỢ KHÁCH');
  var h3 = frow_(vals, 0, '3. MLF CÒN NỢ NGƯỜI ỨNG'), h4 = frow_(vals, 0, '4. ĐỐI CHIẾU');
  return {
    guest_owes: one('Khách còn nợ mlf'),
    owe_guest: one('mlf còn nợ khách'),
    owe_advance: one('mlf còn nợ người ứng'),
    guests: h1 < 0 ? [] : fblock_(vals, h1, function (r) {
      return { id: ftxt_(r[0]), name: ftxt_(r[1]), date: fdate_(r[2]), total: fnum_(r[3]), paid: fnum_(r[4]), left: fnum_(r[5]) };
    }),
    services: h2 < 0 ? [] : fblock_(vals, h2, function (r) {
      return { name: ftxt_(r[0]), type: ftxt_(r[1]), date: fdate_(r[2]), value: fnum_(r[3]), used: fnum_(r[4]), left: fnum_(r[5]) };
    }),
    advancers: h3 < 0 ? [] : fblock_(vals, h3, function (r) {
      return { name: ftxt_(r[0]), count: fnum_(r[1]), amount: fnum_(r[2]) };
    }).filter(function (x) { return x.name.toLowerCase() !== 'tổng' }),
    recon: h4 < 0 ? [] : fblock_(vals, h4, function (r) {
      return { id: ftxt_(r[0]), name: ftxt_(r[1]), master: fnum_(r[2]), os: fnum_(r[3]), diff: fnum_(r[4]) };
    })
  };
}
function finCashflow_(ss) {
  var sh = ss.getSheetByName('Cashflow');
  if (!sh) return null;
  var vals = sh.getRange(1, 1, Math.min(sh.getMaxRows(), 60), 17).getValues();
  var hy = -1, hm = -1;
  for (var i = 0; i < vals.length; i++) {
    if (ftxt_(vals[i][0]) === 'Năm' && ftxt_(vals[i][1]).indexOf('Thực thu') === 0) hy = i;
    if (ftxt_(vals[i][0]) === 'Tháng' && ftxt_(vals[i][1]).indexOf('Thực thu') === 0) hm = i;
  }
  var years = [], total = null;
  if (hy >= 0) {
    for (var j = hy + 1; j < vals.length; j++) {
      var a = ftxt_(vals[j][0]); if (!a) break;
      var row = { year: fnum_(a), inn: fnum_(vals[j][1]), out: fnum_(vals[j][2]), net: fnum_(vals[j][3]), deduct: fnum_(vals[j][4]), receivable: fnum_(vals[j][5]) };
      if (a.toLowerCase().indexOf('tổng') === 0) { total = row; break; }
      years.push(row);
    }
    if (!total) { var ti = frow_(vals, 0, 'TỔNG', hy + 1); if (ti >= 0) total = { year: 0, inn: fnum_(vals[ti][1]), out: fnum_(vals[ti][2]), net: fnum_(vals[ti][3]), deduct: fnum_(vals[ti][4]), receivable: fnum_(vals[ti][5]) }; }
  }
  var blocks = [];
  if (hm > 0) {
    [1, 5, 9, 13].forEach(function (o) {
      var y = fnum_(vals[hm - 1][o]); if (!y) return;
      var ms = [];
      for (var k = 0; k < 12; k++) {
        var r = vals[hm + 1 + k]; if (!r) break;
        ms.push({ m: k + 1, inn: fnum_(r[o]), out: fnum_(r[o + 1]), net: fnum_(r[o + 2]), cum: fnum_(r[o + 3]) });
      }
      blocks.push({ year: y, months: ms });
    });
  }
  return { years: years, total: total, by_year: blocks };
}
function pushFinance_() {
  if (!SECRET) return;
  var ss = SpreadsheetApp.getActive();
  var data = {
    at: new Date().toISOString(),
    so_tien: finSoTien_(ss),
    cong_no: finCongNo_(ss),
    cashflow: finCashflow_(ss)
  };
  var res = UrlFetchApp.fetch(SB_URL + '/rest/v1/rpc/finance_snapshot_set', {
    method: 'post',
    contentType: 'application/json',
    headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY },
    payload: JSON.stringify({ p_secret: SECRET, p_data: data }),
    muteHttpExceptions: true
  });
  if (res.getResponseCode() >= 300) throw new Error('finance_snapshot_set ' + res.getResponseCode() + ': ' + res.getContentText());
}

// Web app: Supabase gọi vào đây sau mỗi lần lưu/sửa/xoá khoản thu chi và khi bấm "đồng bộ ngay".
function doPost(e) {
  var body = {};
  try { body = JSON.parse(e.postData.contents); } catch (x) {}
  if (!SECRET || body.secret !== SECRET) return ContentService.createTextOutput('unauthorized');
  exportAll(body.started);
  return ContentService.createTextOutput('ok');
}

function exportIncomes() {
  var rows = fetchRows_('export_incomes');
  var sh = SpreadsheetApp.getActive().getSheetByName(INCOME_TAB);
  if (!sh) throw new Error('Không thấy tab "' + INCOME_TAB + '".');
  var data = rows.map(function (r) {
    return [
      r.received_on, // chuỗi yyyy-mm-dd: Sheets tự nhận là ngày, không bị lệch múi giờ
      Number(r.amount),
      r.account,
      r.kind,
      r.booking_id || '',
      r.content,
      NAMES[r.created_by] || r.created_by
    ];
  });
  // chỉ xoá nội dung A2:G (giữ định dạng và danh sách chọn), rồi ghi lại
  var last = Math.max(sh.getMaxRows() - 1, 1);
  sh.getRange(2, 1, last, 7).clearContent();
  if (data.length) {
    if (sh.getMaxRows() < data.length + 1) sh.insertRowsAfter(sh.getMaxRows(), data.length + 1 - sh.getMaxRows());
    sh.getRange(2, 1, data.length, 7).setValues(data);
    sh.getRange(2, 1, data.length, 1).setNumberFormat('yyyy-mm-dd');
    sh.getRange(2, 2, data.length, 1).setNumberFormat('#,##0');
  }
  sh.getRange(1, 9).setValue('Cập nhật ' + Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm'));
  warn_(sh, [[1, 7]]);
}

function exportExpenses() {
  var rows = fetchRows_('export_expenses');

  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB) || ss.insertSheet(TAB);
  var head = ['Ngày', 'Số tiền', 'Nội dung', 'Thuộc về', 'Nhóm', 'Hạng mục', 'Người chi / nguồn tiền', 'Ghi chú', 'Hoàn lại', 'Ngày hoàn'];
  var vnDay = function (iso) {
    return Utilities.formatDate(new Date(iso), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd');
  };
  // A–J: nội dung hiển thị
  var data = rows.map(function (e) {
    var refund = e.kind === 'hoan_khach';
    return [
      e.spent_on,
      Number(e.amount),
      e.noi_dung || '',
      e.scope || 'Vận hành chung',
      e.grp,
      e.item,
      NAMES[e.paid_by] || e.paid_by,
      e.note || '',
      refund || e.kind === 'chuyen' || e.paid_by === 'mlf' ? 'không cần hoàn' : e.reimbursed ? 'đã hoàn' : 'chờ hoàn',
      e.reimbursed_at ? vnDay(e.reimbursed_at) : ''
    ];
  });
  // M–Q: cột cho các công thức bên Finance (Sổ tiền, Cashflow…)
  //   M Loại (chi | hoan_khach) · N TK chi · O Đến TK (để trống) · P Booking ID / tên khách hoàn · Q TK hoàn ứng
  var fin = rows.map(function (e) {
    var refund = e.kind === 'hoan_khach';
    return [
      refund ? 'hoan_khach' : e.kind === 'chuyen' ? 'chuyen' : 'chi',
      e.account || '',
      e.to_account || '',
      refund ? (e.noi_dung || '') : '',
      e.reimbursed ? (e.reimbursed_account || '') : ''
    ];
  });
  // chỉ xoá nội dung A2:J và M2:Q, giữ nguyên tiêu đề, định dạng, các cột K–L và công thức bên Finance
  var last = Math.max(sh.getMaxRows() - 1, 1);
  sh.getRange(2, 1, last, 10).clearContent();
  sh.getRange(2, 13, last, 5).clearContent();
  sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold');
  if (data.length) {
    if (sh.getMaxRows() < data.length + 1) sh.insertRowsAfter(sh.getMaxRows(), data.length + 1 - sh.getMaxRows());
    sh.getRange(2, 1, data.length, head.length).setValues(data);
    sh.getRange(2, 13, data.length, 5).setValues(fin);
    sh.getRange(2, 1, data.length, 1).setNumberFormat('yyyy-mm-dd');
    sh.getRange(2, 10, data.length, 1).setNumberFormat('yyyy-mm-dd');
    sh.getRange(2, 2, data.length, 1).setNumberFormat('#,##0');
  }
  sh.setFrozenRows(1);
  sh.getRange(1, 12).setValue('Cập nhật ' + Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm'));
  warn_(sh, [[1, 10], [13, 5]]);
}

function setup() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (['exportExpenses', 'exportAll'].indexOf(t.getHandlerFunction()) >= 0) ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('exportAll').timeBased().everyMinutes(15).create();
  exportAll();
}

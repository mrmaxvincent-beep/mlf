/**
 * mlf os → Google Sheet "02. Finance": đổ chi tiêu sang tab "Chi tiêu mlf os" và sổ thu sang tab "Thu mlf os".
 * Dán vào Extensions → Apps Script của chính sheet 02. Finance.
 *
 * Cài một lần:
 *  1. Dán chuỗi mật khẩu (Tâm gửi riêng) vào giữa hai dấu nháy ở dòng SECRET bên dưới.
 *  2. Chọn hàm setup rồi bấm Run (cấp quyền khi được hỏi). Hàm này đổ dữ liệu ngay và đặt lịch chạy mỗi ngày.
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

function exportAll() {
  exportExpenses();
  exportIncomes();
}

function exportIncomes() {
  var rows = fetchRows_('export_incomes');
  var sh = SpreadsheetApp.getActive().getSheetByName(INCOME_TAB);
  if (!sh) throw new Error('Không thấy tab "' + INCOME_TAB + '".');
  var data = rows.map(function (r) {
    return [
      new Date(r.received_on + 'T00:00:00'),
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
  }
  sh.getRange(1, 9).setValue('Cập nhật ' + Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm'));
}

function exportExpenses() {
  var rows = fetchRows_('export_expenses');

  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB) || ss.insertSheet(TAB);
  var head = ['Ngày', 'Số tiền', 'Nội dung', 'Thuộc về', 'Nhóm', 'Hạng mục', 'Người chi / nguồn tiền', 'Ghi chú', 'Hoàn lại', 'Ngày hoàn'];
  var vnDay = function (iso) {
    return new Date(Utilities.formatDate(new Date(iso), 'Asia/Ho_Chi_Minh', "yyyy-MM-dd'T'00:00:00"));
  };
  // A–J: nội dung hiển thị
  var data = rows.map(function (e) {
    var refund = e.kind === 'hoan_khach';
    return [
      new Date(e.spent_on + 'T00:00:00'),
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
    sh.getRange(2, 1, data.length, 1).setNumberFormat('dd/mm/yyyy');
    sh.getRange(2, 10, data.length, 1).setNumberFormat('dd/mm/yyyy');
    sh.getRange(2, 2, data.length, 1).setNumberFormat('#,##0');
  }
  sh.setFrozenRows(1);
  sh.getRange(1, 12).setValue('Cập nhật ' + Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm'));
}

function setup() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (['exportExpenses', 'exportAll'].indexOf(t.getHandlerFunction()) >= 0) ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('exportAll').timeBased().everyDays(1).atHour(6).inTimezone('Asia/Ho_Chi_Minh').create();
  exportAll();
}

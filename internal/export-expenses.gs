/**
 * mlf os → Google Sheet "02. Finance": đổ chi tiêu sang tab "Chi tiêu mlf os".
 * Dán vào Extensions → Apps Script của chính sheet 02. Finance.
 *
 * Cài một lần:
 *  1. Dán chuỗi mật khẩu (Tâm gửi riêng) vào giữa hai dấu nháy ở dòng SECRET bên dưới.
 *  2. Chọn hàm setup rồi bấm Run (cấp quyền khi được hỏi). Hàm này đổ dữ liệu ngay và đặt lịch chạy mỗi ngày.
 *
 * Mỗi lần chạy ghi đè toàn bộ tab "Chi tiêu mlf os" bằng dữ liệu mới nhất; đừng sửa tay trong tab này.
 * Các tab khác (Chi phí, Dashboard…) không bị đụng tới.
 */
var SECRET = '';
var SB_URL = 'https://rzwujcfmdtjbqmuizxcf.supabase.co';
var SB_KEY = 'sb_publishable_Tg6FMPioXLz1STbLa8Lw-g_lquNRVao';
var TAB = 'Chi tiêu mlf os';
var NAMES = { tam: 'Tâm', thuan: 'Thuận', vu: 'Vũ', mlf: 'Tài khoản mlf' };

function exportExpenses() {
  if (!SECRET) throw new Error('Chưa dán mật khẩu vào dòng SECRET ở đầu script.');
  var res = UrlFetchApp.fetch(SB_URL + '/rest/v1/rpc/export_expenses', {
    method: 'post',
    contentType: 'application/json',
    headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY },
    payload: JSON.stringify({ p_secret: SECRET }),
    muteHttpExceptions: true
  });
  if (res.getResponseCode() !== 200) throw new Error('Supabase ' + res.getResponseCode() + ': ' + res.getContentText());
  var rows = JSON.parse(res.getContentText());

  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB) || ss.insertSheet(TAB);
  var head = ['Ngày', 'Số tiền', 'Thuộc về', 'Nhóm', 'Hạng mục', 'Người chi / nguồn tiền', 'Ghi chú', 'Hoàn lại', 'Ngày hoàn'];
  var data = rows.map(function (e) {
    return [
      new Date(e.spent_on + 'T00:00:00'),
      Number(e.amount),
      e.scope || 'Vận hành chung',
      e.grp,
      e.item,
      NAMES[e.paid_by] || e.paid_by,
      e.note || '',
      e.paid_by === 'mlf' ? 'không cần hoàn' : e.reimbursed ? 'đã hoàn' : 'chờ hoàn',
      e.reimbursed_at ? new Date(Utilities.formatDate(new Date(e.reimbursed_at), 'Asia/Ho_Chi_Minh', "yyyy-MM-dd'T'00:00:00")) : ''
    ];
  });
  sh.clear();
  sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold');
  if (data.length) {
    sh.getRange(2, 1, data.length, head.length).setValues(data);
    sh.getRange(2, 1, data.length, 1).setNumberFormat('dd/mm/yyyy');
    sh.getRange(2, 9, data.length, 1).setNumberFormat('dd/mm/yyyy');
    sh.getRange(2, 2, data.length, 1).setNumberFormat('#,##0');
  }
  sh.setFrozenRows(1);
  sh.autoResizeColumns(1, head.length);
  sh.getRange(1, 11).setValue('Cập nhật ' + Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm'));
}

function setup() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'exportExpenses') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('exportExpenses').timeBased().everyDays(1).atHour(6).inTimezone('Asia/Ho_Chi_Minh').create();
  exportExpenses();
}

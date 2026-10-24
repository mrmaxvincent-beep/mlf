/**
 * mlf os → Google Sheet "02. Finance": đổ chi tiêu sang tab "Chi tiêu mlf os".
 * Dán vào Extensions → Apps Script của chính sheet 02. Finance.
 *
 * Cài một lần:
 *  1. Project Settings → Script properties → thêm SECRET = đúng chuỗi bí mật đang dùng cho script đồng bộ lịch.
 *  2. Chọn hàm setup rồi bấm Run (cấp quyền khi được hỏi). Hàm này đổ dữ liệu ngay và đặt lịch chạy mỗi ngày.
 *
 * Mỗi lần chạy ghi đè toàn bộ tab "Chi tiêu mlf os" bằng dữ liệu mới nhất; đừng sửa tay trong tab này.
 * Các tab khác (Chi phí, Dashboard…) không bị đụng tới.
 */
var SB_URL = 'https://rzwujcfmdtjbqmuizxcf.supabase.co';
var SB_KEY = 'sb_publishable_Tg6FMPioXLz1STbLa8Lw-g_lquNRVao';
var TAB = 'Chi tiêu mlf os';
var NAMES = { tam: 'Tâm', thuan: 'Thuận', vu: 'Vũ' };

function exportExpenses() {
  var secret = PropertiesService.getScriptProperties().getProperty('SECRET');
  if (!secret) throw new Error('Chưa có SECRET trong Script properties.');
  var res = UrlFetchApp.fetch(SB_URL + '/rest/v1/rpc/export_expenses', {
    method: 'post',
    contentType: 'application/json',
    headers: { apikey: SB_KEY, Authorization: 'Bearer ' + SB_KEY },
    payload: JSON.stringify({ p_secret: secret }),
    muteHttpExceptions: true
  });
  if (res.getResponseCode() !== 200) throw new Error('Supabase ' + res.getResponseCode() + ': ' + res.getContentText());
  var rows = JSON.parse(res.getContentText());

  var ss = SpreadsheetApp.getActive();
  var sh = ss.getSheetByName(TAB) || ss.insertSheet(TAB);
  var head = ['Ngày', 'Số tiền', 'Nhóm', 'Hạng mục', 'Người chi', 'Ghi chú', 'Hoàn lại', 'Ngày hoàn'];
  var data = rows.map(function (e) {
    return [
      e.spent_on,
      Number(e.amount),
      e.grp,
      e.item,
      NAMES[e.paid_by] || e.paid_by,
      e.note || '',
      e.reimbursed ? 'đã hoàn' : 'chờ hoàn',
      e.reimbursed_at ? Utilities.formatDate(new Date(e.reimbursed_at), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd') : ''
    ];
  });
  sh.clear();
  sh.getRange(1, 1, 1, head.length).setValues([head]).setFontWeight('bold');
  if (data.length) {
    sh.getRange(2, 1, data.length, head.length).setValues(data);
    sh.getRange(2, 1, data.length, 1).setNumberFormat('yyyy-mm-dd');
    sh.getRange(2, 2, data.length, 1).setNumberFormat('#,##0');
  }
  sh.setFrozenRows(1);
  sh.autoResizeColumns(1, head.length);
  sh.getRange(1, 10).setValue('Cập nhật ' + Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd HH:mm'));
}

function setup() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'exportExpenses') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('exportExpenses').timeBased().everyDays(1).atHour(6).inTimezone('Asia/Ho_Chi_Minh').create();
  exportExpenses();
}

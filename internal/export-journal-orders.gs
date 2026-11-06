/**
 * mlf journal · in chung: đổ đơn đặt in từ website (Supabase) sang tab "Đơn in chung" của Google Sheet.
 * Dán vào Tiện ích mở rộng → Apps Script của bất kỳ Google Sheet nào bạn muốn quản lý đơn.
 *
 * Cài một lần:
 *  1. Dán mật khẩu (Tâm gửi riêng) vào giữa hai dấu nháy ở dòng SECRET bên dưới. Lưu lại.
 *  2. Chọn hàm setupJournalSync rồi bấm Chạy (cấp quyền khi được hỏi). Hàm này đổ đơn ngay và đặt lịch tự cập nhật mỗi giờ.
 *  3. Từ đó trong Google Sheet có menu "mlf journal → Cập nhật đơn in từ website": bấm là cập nhật ngay.
 *
 * Mỗi lần cập nhật chỉ ghi lại các cột A–I (lấy từ website). Ba cột J–L (Đã thanh toán, Đã đặt in/gửi, Ghi chú mlf)
 * là của bạn: nhập tay tuỳ ý, script giữ nguyên theo từng đơn (nhận biết bằng Mã đơn ở cột A), không bị ghi đè.
 */
var SECRET = '';
var SB_URL = 'https://rzwujcfmdtjbqmuizxcf.supabase.co';
var SB_KEY = 'sb_publishable_Tg6FMPioXLz1STbLa8Lw-g_lquNRVao';
var TAB = 'Đơn in chung';
var HEAD = ['Mã đơn', 'Thời gian', 'Họ tên', 'Số điện thoại', 'Email', 'Địa chỉ nhận sách', 'Số lượng', 'Ghi chú của khách', 'Trạng thái (web)', 'Đã thanh toán', 'Đã đặt in / gửi', 'Ghi chú mlf'];
var STATUS = { moi: 'mới', da_thanh_toan: 'đã thanh toán', huy: 'huỷ' };

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('mlf journal')
    .addItem('Cập nhật đơn in từ website', 'syncJournalOrders')
    .addToUi();
}

function syncJournalOrders() {
  if (!SECRET) throw new Error('Chưa dán mật khẩu vào dòng SECRET ở đầu script.');
  var res = UrlFetchApp.fetch(SB_URL + '/rest/v1/rpc/export_journal_orders', {
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

  // giữ phần nhập tay (J–L) theo mã đơn
  var manual = {};
  var last = sh.getLastRow();
  if (last > 1) {
    sh.getRange(2, 1, last - 1, 12).getValues().forEach(function (r) {
      if (r[0]) manual[r[0]] = [r[9], r[10], r[11]];
    });
  }

  var data = rows.map(function (o) {
    var m = manual[o.id] || ['', '', ''];
    return [
      o.id,
      Utilities.formatDate(new Date(o.created_at), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm'),
      o.full_name,
      o.phone,
      o.email,
      o.address,
      Number(o.quantity),
      o.note || '',
      STATUS[o.status] || o.status,
      m[0], m[1], m[2]
    ];
  });

  sh.getRange(1, 1, 1, HEAD.length).setValues([HEAD]).setFontWeight('bold');
  sh.getRange(2, 1, Math.max(sh.getMaxRows() - 1, 1), 12).clearContent();
  if (data.length) {
    if (sh.getMaxRows() < data.length + 1) sh.insertRowsAfter(sh.getMaxRows(), data.length + 1 - sh.getMaxRows());
    sh.getRange(2, 4, data.length, 1).setNumberFormat('@'); // giữ số 0 đầu của số điện thoại
    sh.getRange(2, 1, data.length, 12).setValues(data);
  }
  sh.setFrozenRows(1);

  // tổng số quyển (không tính đơn huỷ), cập nhật tự động theo cột G và I
  sh.getRange('N1').setValue('Tổng số quyển (không tính đơn huỷ)').setFontWeight('bold');
  sh.getRange('N2').setFormula('=SUMIF(I2:I,"<>huỷ",G2:G)');
  sh.getRange('N4').setValue('Cập nhật ' + Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm'));
}

function setupJournalSync() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'syncJournalOrders') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('syncJournalOrders').timeBased().everyHours(1).create();
  syncJournalOrders();
}

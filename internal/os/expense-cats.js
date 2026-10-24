// mlf os · danh mục chi tiêu. Sửa ở đây là đủ: tên nhóm và hạng mục giữ đúng chính tả như tab "Chi phí" trong file 02. Finance.
// Cấu trúc: { 'thuộc về': [ ['tên nhóm', ['hạng mục', …]], … ] }; nhóm không có danh sách hạng mục thì chỉ chọn nhóm.
window.MLF_EXP_CATS = {
  'Vận hành chung': [
    ['1. Chi phí vận hành', ['Nguyên vật liệu', 'Đồ gia dụng bếp', 'Văn phòng phẩm', 'Hoá phẩm, gia dụng vệ sinh', 'Cây cối (giống, phân, nhân công...)', 'Ăn uống bên ngoài', 'Vé tham quan', 'Bảo hiểm du lịch']],
    ['2. Hoá đơn định kỳ', ['Thuê nhà', 'Hoá đơn điện', 'Hoá đơn nước', 'Hoá đơn internet', 'Hóa đơn điện thoại', 'Gas', 'Thuế']],
    ['3. Cơ sở vật chất', ['Sửa chữa (thay thế, nhân công)', 'Máy móc, trang thiết bị', 'Đồ đạc (tủ, bàn, ghế...)', 'Đồ trang trí']],
    ['4. Di chuyển', ['Xăng dầu', 'Bảo dưỡng', 'Taxi-Grab', 'Gửi xe', 'Giao hàng']],
    ['5. Nội bộ nhà Mộc', ['Sinh hoạt nhà Mộc', 'Hoạt động tập thể', 'Nhà hàng - cafe', 'Quà tặng nhân viên', 'Vật nuôi']],
    ['6. Quà tặng & Quyên góp', ['Quà tặng khách hàng/ đối tác', 'Từ thiện', 'Quỹ BAMM']],
    ['7. Lương', ['Lương Nhân viên', 'Bảo hiểm']],
    ['8. Chi khác', ['Chi phí khác']]
  ],
  // Tuần-du chỉ chọn nhóm (không có hạng mục con): bỏ phần danh sách hạng mục.
  'Tuần-du': [
    ['1. Di chuyển'],
    ['2. Lưu trú'],
    ['3. Ăn uống'],
    ['4. Vé tham quan & trải nghiệm'],
    ['5. Chi phí tổ chức'],
    ['6. Chi phí khác / phát sinh']
  ]
};

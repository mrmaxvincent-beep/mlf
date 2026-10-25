// mlf os · danh mục món hay mua (lấy từ tab "Shopping" của sheet mlf_weekly WIP).
// Chỉ lấy tên món, không lấy số lượng tồn (số tồn trong sheet là của lần cập nhật cũ). Sửa ở đây là đủ.
// Cấu trúc: [ ['tên nhóm', ['món', …]], … ]
window.MLF_SHOP_ITEMS = [
  ['Gia vị', ['Đường vàng', 'Muối hồng', 'Đường trắng', 'Muối trắng', 'Đường mía hà thủ ô', 'Đường thốt nốt', 'Nước mắm chay', 'Nước tương', 'Dầu phộng', 'Dầu chiên', 'Dầu oliu', 'Dầu mè', 'Ớt bột hàn quốc', 'Bơ đậu phộng', 'Gia vị bún bò', 'Gia vị phở', 'Gia vị mai quế lộ', 'Bột tảo xoắn', 'Mạch nha', 'Tương ớt Quảng Nam', 'Thảo quả', 'Muối hột', 'Bột sắn dây', 'Chao', 'Bột quế']],
  ['Đồ khô', ['Miến dong', 'Nui', 'Mì rau củ', 'Phở khô', 'Bánh đa khô', 'Mì quảng khô', 'Mì ý', 'Mì soba', 'Bún khô', 'Bún bò Huế', 'Bún xào khô', 'Mì tôm', 'Bánh canh', 'Bánh tráng cuốn', 'Rau câu sợi ngắn', 'Bột bánh bao', 'Bột phô mai', 'Bột bánh xèo', 'Bột nếp', 'Bột gạo', 'Bột năng', 'Bột bắp', 'Nếp than', 'Nếp sáp', 'Hạt thông', 'Đậu xanh cà vỏ', 'Đậu phộng', 'Hạt điều', 'Đậu đen', 'Đậu xanh', 'Hạt bắp nổ', 'Chân nấm', 'Măng khô', 'Tảo xoắn chile', 'Nấm hương', 'Nấm mèo', 'Rong mứt', 'Rong biển', 'Bánh ram Hà Tĩnh', 'Tiêu đen', 'Cốm dẹt trắng', 'Đậu kiếm trắng', 'Mì căn khô', 'Đậu nành']],
  ['Đồ chay', ['Sườn chay']],
  ['Nguyên liệu làm bánh', ['Bột mì đa dụng', 'Bột mì nguyên cám', 'Bơ Tường An', 'Men nở', 'Vanilla', 'Socola đen', 'Nho khô', 'Hạt bí', 'Hạt dẻ', 'Táo đỏ', 'Mứt gừng thẻ', 'Socola trắng', 'Đường đen', 'Đường vàng phổi', 'Đường bột', 'Bột cacao', 'Bơ anchor']],
  ['Trà, cafe, nước', ['Hoa đậu biếc', 'Trà đen', 'Sencha', 'Bancha', 'Matcha', 'Bột green tea', 'Trà houjicha', 'Trà yến mạch', 'Trà kiều mạch', 'Trà lúa mạch', 'Trà hoa cúc', 'Cafe kopic - Ro', 'Cafe of Chiêu', 'Cafe Phúc Ân - Ro', 'Cafe Puer Yunnan - A', 'Sữa đặc', 'Sữa tươi', 'Sữa chua', 'Trà lá dứa', 'Trà ngưu bàng']],
  ['Đồ dùng, nhu yếu phẩm', ['Hạt cho Mid9', 'Hạt cho June', 'Kem đánh răng', 'Xà phòng thảo mộc', 'Bàn chải đánh răng', 'Khăn giấy ăn', 'Giấy vs', 'Nến tealight', 'Bồ kết', 'Bồ hòn', 'Than', 'Cồn', 'Giấy bạc', 'Túi rác', 'Màng bọc thực phẩm', 'Bình gas mini']]
];

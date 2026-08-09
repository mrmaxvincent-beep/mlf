export const stories = [
  { label: "ảnh · cổng nhà đón nắng sớm", caption: "Bước qua cổng, tiếng ồn ngoài kia lùi lại một nhịp." },
  { label: "ảnh · bếp mở, ai cũng thấy nhau nấu nướng", caption: "Một đời sống thật đang diễn ra, và ai cũng có thể bước vào." },
  { label: "ảnh · buổi trà chiều ngoài hiên", caption: "Những buổi trà kéo tới khuya — chỉ vì hiếm khi người ta thật tâm ngồi xuống cùng nhau." },
  { label: "ảnh · phòng ngủ nhỏ như một chiếc kén", caption: "Vừa-đủ để nghỉ ngơi, chẳng cần gì nhiều hơn." },
  { label: "ảnh · nhà mộc về đêm, đèn vàng dịu", caption: "Đêm ở nhà mộc là lúc ngôi nhà thở chậm lại." },
];

export const spots = [
  { id: "spot-cong", name: "cổng nhà", label: "ảnh · cổng nhà mộc", desc: "Bước qua cổng, tiếng ồn ngoài kia lùi lại một nhịp. Đây là ranh giới đầu tiên — nơi khách để lại một phần vội vã trước khi bước vào." },
  { id: "spot-tra", name: "phòng trà", label: "ảnh · phòng trà", desc: "Nơi những vòng trà diễn ra mỗi tối — chỗ chuyện trò chậm lại, và những câu hỏi không cần trả lời ngay cũng được phép ở yên." },
  { id: "spot-workshop", name: "phòng workshop", label: "ảnh · phòng workshop", desc: "Không gian cho những buổi làm tay: viết, vẽ, gói bánh, thêu — nơi đôi tay bận rộn để tâm trí được nghỉ." },
  { id: "spot-bep", name: "nhà bếp", label: "ảnh · nhà bếp mở", desc: "Bếp luôn mở — khách đi ngang thấy hết ai đang nấu, ai đang rửa. Một đời sống thật đang diễn ra, và ai cũng có thể bước vào." },
  { id: "spot-hien", name: "ngoài hiên", label: "ảnh · ngoài hiên nhà", desc: "Hiên nhà là nơi những buổi chiều chẳng cần ai lên tiếng — chỉ cần một bàn tay đặt lên ấm trà, và gió núi thổi qua." },
  { id: "spot-doc-sach", name: "phòng đọc sách", label: "ảnh · phòng đọc sách tầng trên", desc: "Hơn 300 đầu sách nằm im trên giá, chờ một buổi chiều mưa hay một đêm không ngủ được của ai đó ghé qua." },
  { id: "spot-vuon-zen", name: "vườn zen & chòi", label: "ảnh · vườn zen và chòi nhỏ", desc: "Một góc cát trắng được cào thành sóng, một chiếc chòi nhỏ đủ cho một người ngồi — nơi để nhìn mà không cần nghĩ." },
  { id: "spot-ve-dem", name: "về đêm", label: "ảnh · nhà mộc về đêm", desc: "Đèn vàng dịu, nhạc mở khẽ. Đêm ở nhà mộc là lúc ngôi nhà thở chậm lại, và ai cũng được phép làm điều mình muốn." },
];

export const rooms = [
  { name: "xuân", glyph: "春", label: "ảnh · phòng xuân", aspect: "hướng ra vườn", mood: "Cửa sổ mở ra vườn, đón nắng sớm và tiếng chim đầu ngày." },
  { name: "hạ", glyph: "夏", label: "ảnh · phòng hạ", aspect: "hướng ra vườn", mood: "Gió lùa qua khe cửa những chiều nắng dài, mát rượi và trong." },
  { name: "thu", glyph: "秋", label: "ảnh · phòng thu", aspect: "hướng ra hành lang", mood: "Yên tĩnh hơn, ánh sáng dịu hắt vào từ hành lang chung." },
  { name: "đông", glyph: "冬", label: "ảnh · phòng đông", aspect: "hướng ra hành lang", mood: "Kín gió, ấm áp — nơi để cuộn mình lại trong những đêm se lạnh." },
];

export const sharedSpaces = ["Phòng workshop", "Phòng trà", "Nhà bếp", "Phòng giặt", "4 phòng ngủ (xuân-hạ-thu-đông)", "2 toilet riêng cho khách", "Phòng đọc sách (tầng trên) với hơn 300 đầu sách", "Phòng chiếu phim/tập yoga (nhà bên)"];
export const privateSpaces = ["Phòng ngủ nhà mộc (tầng trên)", "Nhà kho (tầng dưới)", "Toilet nhà mộc (tầng dưới)"];
export const vehicles = ["Di chuyển bằng xe 8 chỗ", "Có xe máy (tay ga, xe số)", "Xe đạp"];
export const amenities = [
  "Máy chiếu di động",
  "Wifi miễn phí",
  "Máy giặt, máy sấy",
  "Phòng tắm máy nước nóng & vòi rửa mặt nóng lạnh",
  "Đèn sưởi phòng tắm",
  "Đệm sưởi phòng ngủ",
  "Máy sấy tóc",
  "Bàn ủi hơi nước",
  "Máy sưởi",
  "Máy ép rau củ, máy xay sinh tố, lò nướng, nồi nấu chậm",
  "Quầy trà với hơn 20 loại trà & cafe (Robusta & Arabica)",
  "Nước nhà làm: Kombucha, nước sấu, nước mơ, chanh muối, tắc muối",
];

export const foodPoints = [
  "hơn 70% rau củ từ vườn nhà, canh tác theo phương pháp hữu cơ",
  "nước tương làm thủ công (không dùng gia vị công nghiệp, kể cả hạt nêm và bột ngọt)",
  "sử dụng đường phên, đường thốt nốt & muối hồng trong nấu ăn và pha chế",
];

export const foodGallery = [
  "ảnh · bàn ăn chay đầy màu sắc",
  "ảnh · đậu hũ nhà làm",
  "ảnh · rau củ hái từ vườn",
  "ảnh · bánh mỳ sourdough mới ra lò",
  "ảnh · mứt và đồ ngâm nhà làm",
  "ảnh · trà chiều ngoài hiên",
];

export const guestWhys = [
  "Mình muốn được chạm đất",
  "Mình muốn trở về với thiên nhiên và có thể làm những việc thiết yếu mỗi ngày bằng chính bàn tay của bản thân",
  "Sự bình an, sự thư thái sau những giờ lăn lộn, mệt mỏi giữa đời thường",
  "Mình muốn sống chậm lại, ý thức hơn về bản thân mình và hoà mình vào thiên nhiên cây cỏ",
  "Mình có linh cảm sẽ tìm được điều gì đó ở đây",
  "Trải nghiệm sự không vội vã trong từng khoảnh khắc",
  "Mình muốn đến để trải nghiệm những giá trị mà mộc mang lại trong từng sự chuẩn bị chỉnh chu",
];

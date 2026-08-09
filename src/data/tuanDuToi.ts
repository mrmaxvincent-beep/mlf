import type { Day } from "@/components/DayItinerary";

export const heroMeta = [
  { label: "địa điểm", value: "Ngọa Vân Am" },
  { label: "thời gian", value: "18 – 21.03.2027" },
  { label: "hành trình", value: "4 ngày · 3 đêm" },
  { label: "số lượng", value: "tối đa 10 người" },
];

export const loiNgo = [
  "Hồi tuần-du 03 — một nẻo Trúc Lâm, chúng tôi đi theo dấu chân các vị tiền bối thiền phái Trúc Lâm qua nhiều vùng đất: Bắc Giang, Quảng Ninh, Hải Dương, Hưng Yên, Bắc Ninh.",
  "Và có một hôm, chúng tôi ở lại Ngọa Vân Am.",
  "Vừa bước tới nơi này, đã thấy lòng mình dịu lại. Không khí ở đây gợi nhớ đến Măng Đen, nhưng lại khác. Nếu Măng Đen là sự hoang sơ, tinh mơ của đại ngàn, thì Ngọa Vân là sự trầm mặc, như có điều gì đó được bồi đắp qua những năm tháng dài.",
  "Vừa đặt chân tới chùa Thượng, trời đổ mưa. Sương vây kín cả ngọn núi. Cả đoàn ngồi xuống trước ban thờ, đó là một không gian hẹp nhưng kéo dài theo bề ngang, vừa đủ để mọi người cùng ở trong đó. Chúng tôi tụng một bài kinh, rồi ngồi yên để sương gió mờ ảo lẩn vào từng ô cửa. Đó là một khoảnh khắc tâm của cả đoàn chạm vào nhau, trong một sự tĩnh lặng sâu sắc.",
  "Rời Ngọa Vân, nhưng có thật nhiều điều còn vương lại. Chúng tôi thầm nhủ rằng mình sẽ sớm trở lại. Bởi hai ngày một đêm ở đây, dường như chưa đủ để cảm nhận được cái tĩnh lặng mang tính nâng đỡ của nơi này.",
];

export const features = [
  { icon: "sáng", title: "buổi cảm tâm", desc: "Chia sẻ, thơ và dẫn dắt theo chủ đề của ngày — trong rừng núi, bên suối, dưới hiên chùa." },
  { icon: "tối", title: "vòng-trà", desc: "Ngồi lại với những gì đã nổi lên trong ngày, để đối diện với những gì sâu nhất trong tâm mình." },
  { icon: "4", title: "bốn ngày", desc: "Ba buổi cảm tâm. Bốn vòng-trà. Một vùng đất đủ tĩnh để cái cảm được chạm tới." },
];

export const days: Day[] = [
  {
    n: "01",
    tam: "biết và cảm",
    title: "mây còn xa",
    desc: [
      "Ngày đầu tiên ở Ngọa Vân, mây vẫn còn ở xa. Mình vừa đến. Vướng mắc vẫn là vướng mắc. Sương chưa kịp len vào.",
      "Hai người cùng nghe tiếng chim hót. Người thứ nhất nghe và biết rằng có con chim đang kêu ở lùm cây ngoài đó. Người thứ hai nghe và cảm rằng tiếng hót như vang lên từ bên trong họ, như thể chính họ đang kêu.",
      `Phần lớn thời gian, ta là người thứ nhất — ngay cả khi ta đang cố gắng "cảm nhận".`,
    ],
    poem: ["Cư trần lạc đạo thả tuỳ duyên", "Cơ tắc xan hề khốn tắc miên", "Gia trung hữu bảo hưu tầm mịch", "Đối cảnh vô tâm mạc vấn thiền"],
    trans: ["Ở đời vui đạo cứ tùy duyên — đói thì ăn, mệt thì ngủ", "Báu vật sẵn trong nhà, thôi tìm kiếm đâu khác"],
    rows: [
      { time: "08:00", activity: "đón đoàn tại sân bay Nội Bài" },
      { time: "08:00 – 10:30", activity: "di chuyển về Đông Triều, Quảng Ninh" },
      { time: "10:30 – 12:00", activity: "nhận phòng · ăn trưa chay" },
      { time: "12:00 – 13:30", activity: "nghỉ trưa" },
      { time: "13:30 – 15:00", activity: "đi loanh quanh, làm quen không gian" },
      { time: "15:00 – 17:00", activity: `buổi cảm tâm 1 — biết và cảm · "Cư trần lạc đạo"`, highlight: true },
      { time: "17:00 – 19:30", activity: "ăn tối chay · tự do" },
      { time: "19:30 – 21:30", activity: "vòng-trà 1" },
    ],
  },
  {
    n: "02",
    tam: "thân thể là con đường",
    title: "dưới chân mây",
    desc: [
      "Ta thường bỏ qua điều này trong mọi hành trình tìm kiếm: thân thể. Ta đọc bằng mắt. Ta suy nghĩ bằng đầu. Ta thực hành bằng ý chí. Nhưng con đường đi vào bên trong không bắt đầu từ đầu — nó bắt đầu từ đây, từ cái đang chạm mặt đất ngay lúc này.",
      "Ngày thứ hai là ngày để thật sự chạm, để cơ thể ở đúng nơi nó đang đứng, không phải trong suy nghĩ hay kế hoạch.",
    ],
    poem: ["Thị phi niệm trục triêu hoa lạc", "Danh lợi tâm tùy dạ vũ hàn"],
    trans: ["Niệm thị-phi rụng theo hoa sớm", "Tâm danh-lợi tan theo mưa đêm lạnh"],
    rows: [
      { time: "06:00 – 07:00", activity: "thời gian riêng (thiền / đi bộ / trà một mình)" },
      { time: "07:00 – 09:30", activity: "ăn sáng · di chuyển đến chùa Quỳnh Lâm" },
      { time: "09:30 – 11:00", activity: "đi chậm, ngồi yên tại Quỳnh Lâm" },
      { time: "11:00 – 13:00", activity: "ghé chùa Hồ Thiên / đền An Sinh · ăn trưa" },
      { time: "13:00 – 15:00", activity: `buổi cảm tâm 2 — thân thể là con đường · "Sơn phòng mạn hứng"`, highlight: true },
      { time: "15:00 – 17:30", activity: "di chuyển về · tự do, nghỉ ngơi" },
      { time: "17:30 – 19:30", activity: "ăn tối chay · tự do" },
      { time: "19:30 – 21:30", activity: "vòng-trà 2" },
    ],
  },
  {
    n: "03",
    tam: "tâm tịnh",
    title: "mây nằm ngủ",
    desc: [
      "Ta thường không để ý, vì niệm này nối ngay vào niệm kia, không có chỗ hở. Nhưng khoảng trống đó vẫn ở đó. Vẫn luôn ở đó. Tâm tịnh không phải thứ cần tạo ra — mà là thứ ta chưa kịp nhận ra vì chưa bao giờ đủ yên.",
      `Hôm nay leo lên am Ngọa Vân thượng. Hai giờ đi trong rừng. Con đường lên am Thượng chính là buổi thực hành để cảm nhận "hiện hữu".`,
    ],
    poem: ["Vạn sự thuỷ lưu thuỷ", "Bách niên tâm ngữ tâm"],
    trans: ["Vạn sự như nước trôi theo nước", "Trăm năm, lòng tự nói với lòng"],
    attr: "— viết trên núi Bảo Đài, nơi am Ngọa Vân tựa lưng vào",
    rows: [
      { time: "05:00 – 05:30", activity: "dậy sớm, ăn nhẹ" },
      { time: "05:30 – 07:30", activity: "leo lên am Ngọa Vân thượng" },
      { time: "07:30 – 09:30", activity: `buổi cảm tâm 3 — hiện hữu không cần hiểu · "Đăng Bảo Đài sơn"`, highlight: true },
      { time: "09:30 – 13:00", activity: "ăn nhẹ mang theo · tiếp tục ở yên · xuống núi" },
      { time: "13:00 – 17:00", activity: "về Zen Village · ăn trưa · tự do phục hồi" },
      { time: "17:00 – 19:00", activity: "ăn tối chay · tự do" },
      { time: "19:00 – 21:00", activity: "vòng-trà 3" },
    ],
  },
  {
    n: "04",
    tam: "tâm rộng mở",
    title: "tan vào trời không",
    desc: ["Trước khi trời sáng, chúng ta lên đỉnh Bàn Cờ bằng cáp treo để đón bình minh trên biển mây. Cùng nhau uống một ly trà sớm, ngồi tĩnh lặng, nhìn ngắm đất trời và biển mây đang tan dần dưới nắng."],
    rows: [
      { time: "04:30 – 05:00", activity: "dậy sớm · di chuyển tới ga cáp treo" },
      { time: "05:00 – 06:30", activity: "lên cáp treo, ngắm bình minh — ngồi tĩnh lặng, không lời", highlight: true },
      { time: "06:30 – 08:30", activity: "xuống lại · về Zen Village · ăn sáng" },
      { time: "08:30 – 10:30", activity: "vòng-trà cuối — mỗi người mang gì về" },
      { time: "10:30 – 13:00", activity: "thu xếp · trả phòng · ăn trưa nhẹ" },
      { time: "13:00 – 15:00", activity: "ghé làng Nôm tham quan" },
      { time: "16:00 – 17:30", activity: "ăn chiều tại nhà Thuận, Song Tháp, Bắc Ninh — cơm chay làng quê" },
      { time: "18:00 – 20:00", activity: "ra sân bay Nội Bài · bay về" },
    ],
  },
];

export const practical = [
  { label: "đồng hành", value: "Tâm · Vũ · Thuận", note: "những người bạn tại mộc little farm" },
  { label: "chỗ nghỉ", value: "Ngọa Vân Zen Village", note: "phòng dorm · 3 đêm" },
  { label: "ăn uống", value: "chay đầy đủ", note: "toàn bộ bữa ăn trong hành trình" },
  { label: "thời tiết", value: "mát lạnh", note: "áo ấm · giày đi bộ · áo mưa nhẹ" },
  { label: "di chuyển", value: "xe limousine 11 chỗ", note: "đón trả tại sân bay Nội Bài" },
  { label: "liên lạc", value: "có sóng & wifi", note: "và quyền tự đặt điện thoại xuống" },
];

export const includes = [
  "Chi phí sinh hoạt chung suốt hành trình",
  "Hỗ trợ tổ chức và chia sẻ trong chuyến đi",
  "Phương tiện di chuyển toàn hành trình",
  "Toàn bộ bữa ăn chay",
  "Bảo hiểm chuyến đi",
];

export const milestones = [
  { when: "trước 30 ngày", what: "BTC xác nhận chuyến đi lần cuối — hoặc sớm hơn ngay khi nhận đủ số lượng tối thiểu — để người tham gia đặt vé di chuyển đến Hà Nội" },
  { when: "trước 2 tuần", what: "gửi các thông tin cần thiết cho hành trình" },
  { when: "trước 1 tuần", what: "gặp mặt online để làm quen, hướng dẫn chuẩn bị và các phương án dự phòng" },
  { when: "ngày 0", what: "hội ngộ tại Nội Bài · 08:00 · 18.03.2027" },
];

export const notes = [
  {
    title: "về tinh thần của tuần-du",
    body: [
      "Tuần-du không phải là chuyến du lịch thuần túy, mà là hoạt động trải nghiệm và chia sẻ không gian tinh thần dành cho một nhóm nhỏ. Chúng tôi không phải là đơn vị lữ hành. Các hoạt động thu phí không mang mục tiêu thương mại, mà nhằm chia sẻ các chi phí ăn ở, chi phí tổ chức trong suốt hành trình của chuyến đi.",
    ],
  },
  {
    title: "về ăn uống",
    body: [
      "Trong mỗi hành trình tuần-du, chúng tôi cố gắng hết sức để lựa chọn những điểm ăn uống tốt nhất có thể tại địa phương. Việc này phụ thuộc nhiều vào sự sẵn có của các quán chay, thói quen sinh hoạt và văn hóa ẩm thực bản địa ở từng vùng đất.",
      "Vì vậy, tuần-du mời bạn đến với sự cởi mở. Có bữa ăn rất tròn đầy, có bữa ăn đơn sơ hơn. Điều quan trọng không nằm ở sự cầu kỳ, mà ở cách ta hiện diện với bữa ăn ấy.",
      "Chúng tôi cũng mong mỗi người cùng thực tập ăn vừa đủ, tránh lãng phí thực phẩm. Khi bớt khắt khe trong việc ăn uống, thân nhẹ hơn và hành trình cũng nhẹ hơn.",
    ],
  },
  {
    title: "về chỗ ở",
    body: [
      "Nơi lưu trú trong tuần-du được lựa chọn theo tiêu chuẩn, phù hợp với những giá trị và trải nghiệm mà nhà mộc hướng đến. Đó là những nơi sạch sẽ, an toàn, có đủ không gian để nghỉ ngơi và trở về với mình.",
      "Có thể những nơi ở này không hoàn toàn trùng khớp với thói quen du lịch hay kỳ vọng quen thuộc của bạn. Và chính điều đó cũng là một phần của trải nghiệm. Tuần-du không tìm cách tạo ra sự tiện nghi tối đa, mà tạo ra điều kiện vừa đủ để ta lắng lại, chạm vào nhịp sống khác và quan sát những phản ứng rất thật của mình.",
    ],
  },
  {
    title: "về năng lượng chung của chuyến đi",
    body: [
      "Tuần-du là một hành trình tập thể. Năng lượng của chuyến đi không chỉ đến từ lịch trình hay không gian, mà được tạo nên từ sự hiện diện của từng người.",
      "Mỗi người đều đang góp phần vào bầu không khí chung ấy, bằng cách mình lắng nghe, mình bước đi, mình trò chuyện hay giữ im lặng. Vì vậy, chúng tôi mong bạn thật sự có mặt trong hành trình, hạn chế tách đoàn hoặc dành quá nhiều thời gian cho các hoạt động cá nhân riêng lẻ.",
    ],
  },
];

export const refunds = [
  { when: "trước 60 ngày", what: "hoàn 100% chi phí" },
  { when: "trước 30 ngày", what: "hoàn 50% chi phí" },
  { when: "trước 15 ngày", what: "hoàn 30% chi phí" },
  { when: "dưới 7 ngày hoặc không đến", what: "không hoàn tiền" },
];

export const faqs = [
  { q: "mlf tuần-du có phải là một tour du lịch thông thường không?", a: "Đây không phải một tour du lịch tham quan, mà là một hành trình trở về nguồn cội, kết nối với văn hóa và tâm linh Việt Nam một cách sâu sắc, từ đó học cách kết nối với chính mình. Chúng tôi không có hướng dẫn viên du lịch, không chạy theo điểm đến. Đây là hành trình của một nhóm nhỏ người cùng chia sẻ sở thích và trải nghiệm tinh thần cùng nhau." },
  { q: "Tôi chưa từng tham gia hoạt động thiền hay chánh niệm, liệu có phù hợp không?", a: "Hoàn toàn phù hợp. Các hoạt động thiền và chánh niệm trong hành trình rất nhẹ nhàng, đơn giản, không đòi hỏi kinh nghiệm trước đó." },
  { q: "Chương trình có yêu cầu gì đặc biệt về sức khỏe không?", a: "Hành trình không có các hoạt động quá sức như trekking dài hay vận động mạnh, nhưng sẽ di chuyển đến nhiều địa điểm. Vì vậy, bạn cần có thể trạng tốt để đi bộ thoải mái trong thời gian dài. Nếu bạn có vấn đề sức khỏe đặc biệt, cứ nhắn mlf trước để chúng tôi tư vấn thêm." },
  { q: "Tôi có thể tham gia một phần hành trình thay vì toàn bộ không?", a: "Hiện tại mlf chưa nhận tham gia một phần. Hành trình được thiết kế để mỗi người trải nghiệm trọn vẹn từ đầu đến cuối; việc tham gia nửa chừng có thể ảnh hưởng đến sự kết nối của cá nhân bạn cũng như của nhóm." },
  { q: "Tôi cần chuẩn bị gì trước chuyến đi?", a: "Bạn không cần chuẩn bị gì quá đặc biệt. Chúng tôi gợi ý: trang phục giản dị, thoải mái — ưu tiên quần áo dài tay, chất liệu tự nhiên, phù hợp khi vào chùa hoặc đền; một quyển sổ nhỏ và bút; một chiếc bình nước cá nhân; dép hoặc sandal dễ tháo khi vào các nơi linh thiêng; và một tâm thế rộng mở, sẵn sàng lắng nghe." },
  { q: "Chế độ ăn trong chuyến đi như thế nào?", a: "Tất cả các bữa ăn đều là chay hoặc thuần chay, được đặt riêng cho đoàn tại những quán ăn địa phương. Riêng bữa sáng phục vụ tại chỗ nghỉ, bạn có thể tự do lựa chọn tùy thực đơn. Nếu bạn có dị ứng hoặc yêu cầu ăn kiêng đặc biệt, cứ nhắn mlf trước để chúng tôi sắp xếp." },
  { q: "Có chính sách hoàn hủy không?", a: "Có. Bạn xem chi tiết ở phần chính sách hoàn hủy phía trên. Bạn cũng có thể nhượng lại suất tham gia cho người khác nếu tìm được người thay thế." },
  { q: "Hành trình có phù hợp với trẻ em không?", a: "mlf nhận trẻ từ 10 tuổi trở lên và cần đi cùng người lớn." },
  { q: "Chuyến đi này có phải là một khóa học hoặc hoạt động mang màu sắc tâm linh không?", a: "Chuyến đi này với tinh thần rất đơn thuần là kết nối với không gian lịch sử — văn hóa và từ đó kết nối với chính mình. Đây không phải là một khóa học, cũng không phải là khóa tu. Các hoạt động diễn ra rất nhẹ nhàng, tự nhiên, không mang màu sắc tâm linh huyền bí; ai cũng có thể dễ dàng tiếp nhận, không phân biệt tôn giáo." },
];

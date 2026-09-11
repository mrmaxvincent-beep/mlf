import type { Day } from "@/components/DayItinerary";

export const heroMeta = [
  { label: "hành trình", value: "5 ngày · 4 đêm" },
  { label: "đi qua", value: "Ninh Bình · Thái Bình · Hải Phòng · Quảng Ninh · Hải Dương · Bắc Ninh" },
  { label: "số lượng", value: "tối đa 10 người" },
  { label: "ăn uống", value: "chay suốt hành trình" },
];

export const loiNgo = [
  "Hôm lên chùa Thượng ở Ngọa Vân, trời đổ mưa.",
  "Sương vây kín cả ngọn núi, không còn nhìn thấy gì xa hơn vài bước chân. Cả đoàn ngồi lại, tụng một bài kinh, rồi ngồi thiền ngay trong lớp sương đó. Đó là một trong những lần tâm tĩnh sâu nhất chúng tôi từng có.",
  "Về sau, khi kể lại chuyện này, có người nói với tôi rằng họ từng có một buổi giống hệt như vậy — nhưng ở một nơi hoàn toàn khác. Trong một nhà thờ, buổi chiều, khi tiếng đàn vừa dứt và cả gian nhà còn đọng lại cái im.",
  "Tôi ngồi với điều đó khá lâu.",
  "Hai nơi ấy không có gì chung. Khác mái, khác tượng, khác kinh, khác cả cách gọi tên điều mình đang hướng về. Người bên này quỳ, người bên kia ngồi kiết già. Nhưng cái thứ đọng lại sau khi âm thanh tắt đi thì — nghe kể — giống nhau đến lạ.",
];

export const loiNgoAfter = [
  "Có lẽ nó vốn đã ở đó, và mỗi đạo chỉ dựng lên một mái nhà theo cách của mình để che nó lại, giữ nó khỏi bị gió thổi bay.",
  "Tuần-du lần này đi để thử điều đó.",
  "Năm ngày, đi qua những mái nhà rất khác nhau. Một ngôi chùa giữa núi đá nơi hàng vạn người mỗi năm về cầu xin. Một đan viện gạch đỏ nơi các đan sĩ giữ thinh lặng suốt đời. Một gác chuông gỗ bốn trăm tuổi giữa đồng bằng. Một nhà thờ vươn lên giữa ruộng lúa ven biển. Và cuối cùng, một cái am nhỏ trên núi, nơi một ông vua bỏ ngai vàng đã nằm xuống.",
  "Chúng ta không đi để so sánh. Không đi để tìm xem bên nào đúng hơn.",
  "Chỉ đi để nghe — xem sau mỗi tiếng chuông, cái còn lại có giống nhau không.",
];

export const forWhom = [
  "Nếu bạn là người Công giáo, sẽ có những buổi bạn đứng trong một ngôi chùa mà không biết phải làm gì với tay mình. Nếu bạn là Phật tử, sẽ có buổi bạn ngồi trong một đan viện và nghe một thứ kinh hoàn toàn xa lạ. Nếu bạn không thuộc về đâu cả, bạn sẽ đi qua cả hai như một người khách — và có khi đó lại là chỗ đứng thuận lợi nhất.",
  "Không ai phải quỳ. Không ai phải lạy. Không ai được yêu cầu tin điều gì.",
  "Điều duy nhất được mời gọi là: đứng yên lâu hơn bình thường một chút, ở một nơi không phải của mình, và xem trong người mình có gì động đậy.",
];

export const features = [
  { icon: "3", title: "buổi cảm tâm", desc: "Ba buổi ngồi lại, mỗi buổi ở một mái nhà khác — bên đầm, trong đan viện, và trên am giữa mây." },
  { icon: "mỗi tối", title: "vòng-trà", desc: "Ngồi lại với một ngày vừa qua, để những gì vừa chạm tới có chỗ được ở lại." },
  { icon: "36h", title: "tĩnh khẩu", desc: "Từ tối ngày ba đến sáng ngày năm, cả đoàn không ai nói với ai." },
];

export const routeStats = [
  { label: "cả hành trình", value: "~680 km" },
  { label: "tỉnh thành", value: "7" },
  { label: "nơi lưu trú", value: "3" },
  { label: "giờ tĩnh khẩu", value: "36" },
];

export const routeDays = [
  { n: "ngày 1", route: "Nội Bài → chùa Hương → đầm Vân Long", km: "~180km" },
  { n: "ngày 2", route: "Châu Sơn → Bác Trạch → Thái Bình", km: "~135km" },
  { n: "ngày 3", route: "chùa Keo → Hải Phòng → Ngọa Vân", km: "~165km" },
  { n: "ngày 4", route: "ở yên trên núi", km: "0km" },
  { n: "ngày 5", route: "Thanh Mai → Phù Lãng → Nội Bài", km: "~200km" },
];

export const destinations = [
  { place: "chùa Hương", location: "Mỹ Đức, Hà Nội", desc: "Đò gỗ trên suối Yến, động Hương Tích. Nơi đông nhất của cả hành trình, và điều đó là cố ý.", src: "/assets/chuahuong.webp" },
  { place: "đầm Vân Long", location: "Gia Viễn, Ninh Bình", desc: "Khu bảo tồn ngập nước dưới chân núi đá vôi. Chiều xuống, mặt nước phẳng như không có gì từng xảy ra.", src: "/assets/damvanlong.webp" },
  { place: "Đan viện Châu Sơn", location: "Nho Quan, Ninh Bình", desc: "Tu viện Xitô bằng gạch đỏ trần, không trát vữa. Các đan sĩ ở đây giữ thinh lặng cả đời.", src: "/assets/danvienchauson.webp" },
  { place: "nhà thờ Bác Trạch", location: "Tiền Hải, Thái Bình", desc: "Thánh đường vươn lên giữa đồng lúa ven biển, dựng bằng tiền và công của cả một xứ đạo." },
  { place: "chùa Keo", location: "Vũ Thư, Thái Bình", desc: "Gác chuông gỗ ba tầng dựng từ thế kỷ 17, ghép hoàn toàn bằng mộng, không một cái đinh sắt." },
  { place: "am Ngọa Vân", location: "Đông Triều, Quảng Ninh", desc: "Cái am nhỏ trên núi, nơi Trần Nhân Tông nằm xuống năm 1308. Mây đến đây thì nằm lại." },
  { place: "chùa Thanh Mai", location: "Chí Linh, Hải Dương", desc: "Dưới rừng phong, nơi Pháp Loa viên tịch. Chỗ tĩnh khẩu kết thúc và tiếng nói trở lại." },
  { place: "làng gốm Phù Lãng", location: "Quế Võ, Bắc Ninh", desc: "Men da lươn, lò củi. Một buổi trưa giữa đất, lửa và bàn tay người." },
];

export const days: Day[] = [
  {
    n: "01",
    tam: "cái mình đến để xin",
    title: "giữa dòng người",
    desc: [
      "Buổi sáng ở chùa Hương. Đây là nơi đông nhất trong cả hành trình, và điều đó là cố ý. Suối Yến, đò gỗ, dòng người, khói nhang, tiếng rao, tiếng khấn. Hàng vạn người mỗi năm về đây mang theo một điều muốn xin.",
      "Chúng ta cũng đi trong dòng người đó. Không đứng ngoài, không nhìn xuống.",
      "Chiều, về đầm Vân Long — nơi chiều xuống thì mặt nước phẳng như không có gì từng xảy ra. Từ chỗ hàng vạn tiếng khấn sang chỗ không một tiếng nào, chỉ trong một buổi.",
      "Sáng nay, giữa dòng người ở chùa Hương, có lúc nào bạn thấy mình đang muốn một điều gì đó không? Điều đó là gì — và nó có phải là điều bạn thiếu thật không?",
      "Chúng ta thường biết rất rõ mình muốn gì. Rất ít khi biết mình thiếu gì. Hai cái đó không phải lúc nào cũng là một.",
    ],
    rows: [
      { time: "08:00", activity: "Đón tại sân bay Nội Bài" },
      { time: "10:00", activity: "Bến Đục, chùa Hương" },
      { time: "10:30", activity: "Đò suối Yến vào Thiên Trù — lên động Hương Tích" },
      { time: "13:00", activity: "Cơm chay tại chùa" },
      { time: "14:30", activity: "Lên đường về Ninh Bình" },
      { time: "16:30", activity: "Nhận phòng Toki Vân Long, đầm Vân Long" },
      { time: "17:30", activity: "buổi cảm tâm 1 — bên đầm, lúc chiều xuống", highlight: true },
      { time: "19:00", activity: "Cơm chiều · vòng-trà" },
    ],
  },
  {
    n: "02",
    tam: "thinh lặng của người khác",
    title: "hai gương mặt",
    desc: [
      "Sáng, Đan viện Châu Sơn ở Nho Quan. Một tu viện Xitô bằng gạch đỏ trần, đứng giữa cánh đồng. Các đan sĩ ở đây sống đời chiêm niệm và giữ thinh lặng — không phải vài ngày, mà cả đời. Họ dậy từ rất sớm, hát kinh, lao động, rồi lại im.",
      "Chúng ta là khách. Được phép ngồi trong khuôn viên, nhưng không được phép làm ồn cái im của người khác.",
      "Đây có lẽ là buổi lạ nhất của cả chuyến với phần lớn mọi người — ngồi trong một sự thinh lặng mình không hiểu, do một tín ngưỡng mình không theo, giữ bởi những người mình không quen.",
      "Bạn đang ngồi giữa một sự im lặng được giữ bởi một đức tin không phải của bạn. Bạn không hiểu kinh họ đọc, không biết họ tin gì. Nhưng cái lặng thì bạn cảm được.",
      "Vậy cái bạn đang cảm là gì? Là sự im lặng của họ, hay là sự im lặng của chính bạn — thứ vốn vẫn ở đó, chỉ chờ một nơi đủ tĩnh để lộ ra?",
      "Chiều, sang nhà thờ Bác Trạch ở Tiền Hải — một thánh đường đồ sộ vươn lên giữa đồng lúa ven biển. Từ sự thinh lặng của vài chục đan sĩ sang niềm tin rực rỡ của cả một làng. Cùng một đạo, hai gương mặt.",
    ],
    rows: [
      { time: "06:30", activity: "Đò đầm Vân Long lúc sương chưa tan" },
      { time: "08:30", activity: "Ăn sáng, trả phòng" },
      { time: "09:30", activity: "Đan viện Châu Sơn, Nho Quan — buổi cảm tâm 2 · trong khuôn viên đan viện", highlight: true },
      { time: "12:00", activity: "Cơm trưa tại Ninh Bình" },
      { time: "13:15", activity: "Lên đường đi Tiền Hải, qua Nam Định" },
      { time: "15:30", activity: "Nhà thờ Bác Trạch, Vân Trường" },
      { time: "16:45", activity: "Về thành phố Thái Bình" },
      { time: "17:30", activity: "Nhận phòng Tru by Hilton Thái Bình" },
      { time: "19:00", activity: "Cơm chiều · vòng-trà" },
    ],
  },
  {
    n: "03",
    tam: "bốn trăm năm không một cái đinh",
    title: "trước khi lặng",
    desc: [
      "Sáng sớm, chùa Keo ở Vũ Thư. Gác chuông gỗ ba tầng, dựng từ thế kỷ 17, ghép hoàn toàn bằng mộng, không dùng một cái đinh sắt nào. Gần bốn trăm năm đứng giữa đồng bằng gió bão.",
      "Hôm qua là gạch đỏ và mái vòm. Hôm nay là gỗ lim và mái cong. Hai cách con người dựng nhà cho cái thiêng — một cái vươn thẳng lên trời, một cái nằm ngang ôm lấy đất.",
      "Ngày này không có buổi cảm tâm. Chỉ đi, chỉ nhìn, chỉ để mọi thứ ba ngày qua tự lắng xuống. Đến Ngọa Vân lúc đầu giờ chiều, còn cả một buổi để đi bộ, để ngồi, để không làm gì.",
      "Và tối nay, sau vòng-trà, cả đoàn bắt đầu tĩnh khẩu. Từ đây đến sáng ngày thứ năm, không ai nói với ai. Không phải vì lời nói là xấu. Chỉ vì trong ba ngày qua chúng ta đã nghe quá nhiều tiếng — tiếng khấn, tiếng kinh, tiếng chuông, tiếng đàn — và giờ là lúc để tất cả những tiếng đó lắng xuống đáy.",
    ],
    rows: [
      { time: "06:30", activity: "Ăn sáng, trả phòng" },
      { time: "07:00", activity: "Chùa Keo, Vũ Thư — gác chuông gỗ ba tầng, thế kỷ 17" },
      { time: "09:00", activity: "Lên đường, qua cầu Nghìn" },
      { time: "11:15", activity: "Cơm trưa tại thành phố Hải Phòng" },
      { time: "12:45", activity: "Lên đường đi Đông Triều" },
      { time: "14:45", activity: "Nhận phòng Ngọa Vân Zen Village — chiều để trống, không chương trình" },
      { time: "18:30", activity: "Cơm chay · vòng-trà · bắt đầu tĩnh khẩu", highlight: true },
    ],
  },
  {
    n: "04",
    tam: "leo lên bằng chân mình",
    title: "cư trần lạc đạo",
    desc: [
      "Sáu giờ sáng, cả đoàn bắt đầu đi bộ lên am Ngọa Vân. Có cáp treo. Chúng ta không đi cáp treo hôm nay.",
      "Đường hành hương cổ đi qua Đô Kiệu, qua rừng thông Thông Đàn nơi còn hai ngôi tháp đá, rồi lên dốc đá. Chừng ba tiếng, trong im lặng, không ai nói gì với ai.",
      "Đây là chỗ mà mọi lời giảng đều thừa. Chân mỏi thì biết là chân mỏi. Thở gấp thì biết là thở gấp. Không có cách nào hiểu con dốc này thay vì leo nó.",
      "Trên đỉnh là một cái am nhỏ. Năm 1308, Trần Nhân Tông — người đã bỏ ngai vàng đi tu — nằm xuống ở đây.",
      "Ba ngày qua bạn đi qua rất nhiều nơi thiêng, nghe rất nhiều cách gọi tên cái thiêng. Sáng nay bạn không nghe gì cả — chỉ leo. Vậy mà có lẽ đây là lúc bạn gần nó nhất.",
      "Chiều xuống núi — ai còn sức thì đi bộ, ai mỏi thì cáp treo. Đi lên là chuyện của ý chí, đi xuống là chuyện của đầu gối; không có gì phải chứng minh.",
    ],
    poem: ["Cư trần lạc đạo thả tùy duyên", "Cơ tắc xan hề khốn tắc miên"],
    trans: ["Ở đời vui đạo cứ tùy duyên", "Đói thì ăn, mệt thì ngủ"],
    attr: "— Trần Nhân Tông",
    rows: [
      { time: "05:30", activity: "Điểm tâm nhẹ" },
      { time: "06:00", activity: "Xuất phát đi bộ theo đường hành hương cổ — Đô Kiệu → rừng thông Thông Đàn → dốc đá" },
      { time: "09:00", activity: "Tới am Ngọa Vân — buổi cảm tâm 3 · trên am", highlight: true },
      { time: "12:00", activity: "Cơm chay" },
      { time: "chiều", activity: "Xuống núi — đi bộ hoặc cáp treo, tùy sức" },
      { time: "19:00", activity: "Vòng-trà trong im lặng" },
    ],
  },
  {
    n: "05",
    tam: "tiếng nói trở lại dưới rừng phong",
    title: "sau tĩnh khẩu",
    desc: [
      "Năm giờ sáng, cáp treo trong im lặng đón bình minh. Hôm qua bạn tự leo lên. Hôm nay bạn được đưa lên, không phải làm gì cả.",
      "Không có buổi nào. Không ai nói gì. Chỉ ngồi, và nhìn mặt trời lên trên một ngọn núi mà mây đã chọn nằm lại.",
      "Rồi xuống núi, và rời đi. Chín giờ, cả đoàn đến chùa Thanh Mai ở Chí Linh — nơi Pháp Loa, vị tổ thứ hai của Thiền phái Trúc Lâm, viên tịch. Hôm qua ta ở chỗ thầy nằm xuống. Hôm nay ta đến chỗ trò nằm xuống.",
      "Không phải tổng kết chuyến đi. Không phải rút ra bài học. Chỉ là: bạn mang gì về? Và cái lặng ở chùa Hương, ở Châu Sơn, ở Bác Trạch, ở chùa Keo, ở trên am — có phải là một thứ không?",
      "Trưa, ghé làng gốm Phù Lãng. Ăn cơm chay giữa làng, xem lò, xem đất được nặn thành hình rồi đưa vào lửa. Sau năm ngày đi giữa những nơi thiêng, một buổi trưa giữa đất và lửa và bàn tay người là một cách hạ xuống rất tử tế.",
      "Chiều, về Song Tháp — nhà anh Thuận, một người trong nhà mộc. Cơm chiều làng quê Bắc Bộ, nấu ở bếp nhà chứ không phải bếp hàng. Rồi ra sân bay.",
    ],
    rows: [
      { time: "05:00", activity: "Cáp treo trong im lặng đón bình minh — không buổi nào, chỉ ngồi", highlight: true },
      { time: "08:00", activity: "Xuống núi, ăn sáng, trả phòng" },
      { time: "09:15", activity: "Rời Ngọa Vân" },
      { time: "10:15", activity: "Chùa Thanh Mai, Chí Linh — buổi tổng kết dưới rừng phong · tĩnh khẩu kết thúc tại đây", highlight: true },
      { time: "11:45", activity: "Lên đường" },
      { time: "13:00", activity: "Làng gốm Phù Lãng, Quế Võ — cơm trưa chay tại làng, xem lò" },
      { time: "15:00", activity: "Lên đường đi Song Tháp" },
      { time: "15:45", activity: "Nhà anh Thuận, Song Tháp — cơm chiều làng quê Bắc Bộ" },
      { time: "17:45", activity: "Ra sân bay Nội Bài" },
      { time: "19:00", activity: "Có mặt tại sân bay" },
    ],
  },
];

export const stays = [
  { place: "Toki Vân Long", meta: "đêm 1 · Gia Viễn, Ninh Bình", desc: "Ngay bên đầm Vân Long, dưới chân núi đá vôi. Chiều xuống là lúc mặt nước đẹp nhất — buổi cảm tâm đầu tiên diễn ra ở đây, không cần đi đâu cả." },
  { place: "Tru by Hilton Thái Bình", meta: "đêm 2 · TP Thái Bình", desc: "Một đêm tiện nghi giữa hành trình, ngay trung tâm thành phố. Chỗ để tắm nước nóng, ngủ thẳng giấc và lấy sức cho hai ngày cuối." },
  { place: "Ngọa Vân Zen Village", meta: "đêm 3 & 4 · Đông Triều, Quảng Ninh", desc: "Dưới chân núi Ngọa Vân, phòng dorm, cơm chay, không ồn. Hai đêm ở đây là phần tĩnh nhất của cả chuyến — và cũng là nơi tĩnh khẩu bắt đầu." },
];

export const practical = [
  { label: "số người", value: "tối đa 10", note: "nhỏ là chủ ý" },
  { label: "ăn", value: "chay suốt hành trình", note: "phần lớn là cơm nhà và cơm chùa" },
  { label: "đi bộ", value: "ngày 4 lên am", note: "~3–4km đường dốc, 2,5–3 tiếng · xuống có thể đi cáp treo" },
  { label: "tĩnh khẩu", value: "khoảng 36 tiếng", note: "từ tối ngày 3 đến sáng ngày 5 · không bắt buộc tuyệt đối" },
  { label: "di chuyển", value: "một xe suốt hành trình", note: "ngày dài nhất khoảng 200km, không có đèo" },
  { label: "thời tiết", value: "lạnh hơn vài độ trên núi", note: "sương nhiều vào sáng sớm" },
];

export const includes = [
  "Chi phí sinh hoạt chung suốt hành trình",
  "Hỗ trợ tổ chức và chia sẻ trong chuyến đi",
  "Phương tiện di chuyển toàn hành trình",
  "Toàn bộ bữa ăn chay",
  "Bảo hiểm chuyến đi",
];

export const milestones = [
  { when: "sau khi đủ số lượng", what: "BTC xác nhận chuyến đi và gửi hướng dẫn đặt vé đến Nội Bài" },
  { when: "trước 2 tuần", what: "gửi các thông tin cần thiết cho hành trình" },
  { when: "trước 1 tuần", what: "gặp mặt online để làm quen, hướng dẫn chuẩn bị và các phương án dự phòng" },
  { when: "ngày 0", what: "hội ngộ tại sân bay Nội Bài, 08:00" },
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
      "Ba nơi lưu trú trong chuyến này rất khác nhau — từ mép nước, qua thành phố, lên chân núi — và sự khác nhau đó cũng là một phần của hành trình. Đó là những nơi sạch sẽ, an toàn, có đủ không gian để nghỉ ngơi và trở về với mình.",
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
  {
    q: "Tôi theo đạo Công giáo. Vào chùa tôi có phải lạy không?",
    a: "Không. Không ai phải lạy, phải quỳ, phải thắp nhang, phải đọc bất cứ điều gì. Bạn có thể chỉ đứng, hoặc ngồi, hoặc đi chậm. Điều được mời gọi là sự có mặt, không phải nghi thức. Điều này đúng với cả chiều ngược lại — người không theo Công giáo vào đan viện Châu Sơn cũng không phải làm gì ngoài giữ ý và giữ im.",
  },
  {
    q: "Tôi không theo đạo nào cả. Chuyến này có hợp với tôi không?",
    a: "Có, và có khi còn hợp hơn. Người không thuộc về đâu cả sẽ đi qua cả hai bờ như một người khách — không có gì phải bảo vệ, không có gì phải so sánh. Chuyến này không truyền đạo và không nhằm đưa ai về đâu. Nó chỉ hỏi một câu: cái lặng bạn cảm được ở những nơi rất khác nhau kia, có phải là một thứ không?",
  },
  {
    q: "Tĩnh khẩu 36 tiếng có bắt buộc không?",
    a: "Không tuyệt đối. Nếu cần nói điều gì cần thiết — về sức khoẻ, an toàn, việc gấp ở nhà — thì cứ nói. Nhưng phần lớn mọi người, sau vài giờ đầu thấy ngượng, sẽ nhận ra im dễ hơn nói. Tĩnh khẩu bắt đầu sau vòng-trà tối ngày 3 và kết thúc dưới rừng phong Thanh Mai sáng ngày 5.",
  },
  {
    q: "Tôi không quen leo núi. Ngày 4 có leo nổi không?",
    a: "Đường lên am dài chừng 3–4km, dốc vừa, đoạn cuối là bậc đá và rễ cây. Nhóm đi chậm mất 2,5–3 tiếng, có nhiều điểm dừng, không ai bị giục. Nếu bạn đi bộ được một tiếng liên tục trên đường bằng thì bạn leo được đoạn này. Chiều xuống có cáp treo cho ai mỏi gối — chuyện này bình thường và không cần ngại. Nếu bạn có vấn đề về tim mạch, huyết áp hay khớp gối, hãy nói với chúng tôi trước khi đăng ký để cùng tính phương án.",
  },
  {
    q: "Ăn uống thế nào?",
    a: "Chay suốt năm ngày. Các bữa được đặt trước tại chùa, tại nhà hàng chay hoặc do người nhà nấu. Bữa trưa ngày cuối ở làng gốm Phù Lãng và bữa chiều tại nhà anh Thuận ở Song Tháp đều là cơm nhà, không phải cơm hàng. Nếu bạn có dị ứng thực phẩm hoặc chế độ ăn đặc biệt, báo trước để chúng tôi thu xếp.",
  },
  {
    q: "Ở Đan viện Châu Sơn có gì cần lưu ý?",
    a: "Đây là nơi các đan sĩ đang sống đời chiêm niệm thật, không phải điểm tham quan. Chúng ta vào với tư cách khách: đi nhẹ, nói khẽ hoặc không nói, không chụp ảnh trong khu vực riêng của nhà dòng, mặc kín đáo. Buổi cảm tâm ở đây được thu xếp trước với nhà dòng.",
  },
  {
    q: "Đoàn bao nhiêu người?",
    a: "Tối đa 10. Nhỏ là chủ ý chứ không phải giới hạn kỹ thuật — một vòng-trà mười người còn nghe được nhau, mười lăm người thì không.",
  },
  {
    q: "Cần mang theo gì?",
    a: "Giày đi bộ bám tốt (bắt buộc cho ngày 4), một chai nước lớn, áo khoác mỏng cho buổi sáng trên núi, đồ kín đáo để vào chùa và nhà thờ, áo mưa mỏng. Gậy leo núi nếu gối bạn yếu. Không cần mang gì cho các buổi cảm tâm — chỉ cần đến.",
  },
  {
    q: "Vé máy bay nên đặt giờ nào?",
    a: "Chiều đi: có mặt tại Nội Bài trước 08:00 ngày đầu tiên. Chiều về: đoàn tới sân bay khoảng 19:00 ngày cuối cùng, nên đặt chuyến từ 21:00 trở đi để trừ hao giờ cao điểm trên đường từ Bắc Ninh về.",
  },
];

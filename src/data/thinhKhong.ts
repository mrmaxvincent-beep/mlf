export const needPairs = [
  { a: "Ngồi nhiều", b: "Phục hồi" },
  { a: "Stress thần kinh kéo dài", b: "Chăm sóc hệ thần kinh" },
  { a: "Hệ cơ xơ cứng", b: "Xoa bóp giải phóng tắc nghẽn" },
  { a: "Rối loạn nội tiết", b: "Phục hồi khí, năng lượng" },
  { a: "Mất ngủ", b: "Tác động trực tiếp lên huyệt đạo" },
  { a: "Căng thẳng mạn tính · thiếu khí", b: "Thanh lọc cơ thể & cảm xúc" },
];

export const yogaList = ["Chuyển động chậm", "Biên độ vừa phải", "Ưu tiên hệ thần kinh phó giao cảm", "Không đặt nặng hình thức", "Tập trung vào hơi thở", "Sự chú tâm quan sát, kết nối với cơ thể"];
export const therapyList = ["Xoa bóp cơ bản", "Matxa phục hồi", "Diện chẩn", "Tự chăm sóc không dùng thuốc"];

export const gth = [
  { n: 1, title: "GIÃN", intro: `Khi căng thẳng, cơ thể có xu hướng co rút. Vai nhô lên. Hàm siết lại. Hơi thở nông và ngắn. "Giãn" không phải kéo căng tối đa — giãn là làm mềm.`, points: ["Làm mềm cơ và khớp", "Làm dịu hệ thần kinh", "Giảm tích tụ căng thẳng", "Đưa cơ thể về trạng thái an toàn"], close: "Giãn là điều kiện đầu tiên để phục hồi." },
  { n: 2, title: "THÔNG", intro: `Khi cơ thể ít vận động hoặc chịu áp lực kéo dài, tuần hoàn và nhịp thở dễ bị trì trệ. "Thông" không phải tạo ra chuyển động mạnh — thông là khơi lại dòng chảy tự nhiên.`, points: ["Tăng lưu thông máu và bạch huyết", "Điều hòa nhịp thở", "Hỗ trợ hệ tiêu hóa và bài tiết", "Giải phóng vùng tắc nghẽn như cổ vai gáy, hông, lưng dưới"], close: "Thông giúp cơ thể tự điều chỉnh thay vì phụ thuộc vào can thiệp bên ngoài." },
  { n: 3, title: "HÒA", intro: "Khi thân đã giãn, khí huyết đã lưu thông, cơ thể bắt đầu tự cân bằng.", points: ["Hơi thở và chuyển động không còn tách rời", "Cơ thể và tâm trí không còn đối kháng", "Bên trong và bên ngoài không còn xung đột"], close: "Đó là trạng thái tự nhiên xuất hiện khi không còn ép buộc." },
];

export const changList = [
  {
    num: "1",
    name: "nền móng",
    range: "1–3",
    weeks: [
      { n: 1, title: "bàn chân và trục chân", points: ["Kích hoạt vòm bàn chân", "Điều chỉnh cách đứng", "Xây nền vững chãi"] },
      { n: 2, title: "đầu gối và hông", points: ["Giảm áp lực khớp", "Cân bằng lực hai chân", "Phục hồi khớp gối", "Cân chỉnh chân X-O"] },
      { n: 3, title: "xây nền vững chãi", points: ["Kết nối với mặt đất", "Xây nền vững chắc cho cơ thể", "Ổn định hệ thần kinh, nuôi dưỡng cảm giác an toàn"] },
    ],
  },
  {
    num: "2",
    name: "trục cơ thể",
    range: "4–6",
    weeks: [
      { n: 4, title: "khung chậu và cơ core bụng sâu", points: ["Cân chỉnh khung chậu", "Cải thiện đau lưng, thần kinh tọa", "Tăng kiểm soát trung tâm", "Săn chắc vùng bụng"] },
      { n: 5, title: "cột sống và nhận diện lệch trục", points: ["Làm mềm hai bên cơ lưng", "Cân bằng trái - phải", "Điều chỉnh thói quen ngồi"] },
      { n: 6, title: "vai khom và cổ rùa", points: ["Cân chỉnh lưng trên, giải phóng căng bó đau vai - gáy - cổ", "Mở lồng ngực, cải thiện hô hấp", "Điều chỉnh vị trí đầu", "Giảm căng thẳng hệ thần kinh"] },
    ],
  },
  {
    num: "3",
    name: "chăm sóc ngũ tạng",
    range: "7–9",
    weeks: [
      { n: 7, title: "chăm sóc tim phổi", points: ["Mở ngực, tăng dung tích phổi", "Cải thiện tuần hoàn – nhịp tim", "An định tâm qua hơi thở", "Thanh lọc làm sạch phổi"] },
      { n: 8, title: "chăm sóc hệ tiêu hóa - tỳ vị", points: ["Kích hoạt, massage vùng bụng", "Tăng sức mạnh cơ lõi vùng bụng", "Giảm đầy hơi, mệt mỏi, trì trệ", "Cải thiện hấp thu và chuyển hoá"] },
      { n: 9, title: "chăm sóc gan - thận", points: ["Giải phóng hông, thắt lưng", "Thanh lọc, thải độc lưu thông khí huyết", "Cân bằng cảm xúc, bồi dưỡng nội lực", "Bồi bổ tinh khí, xây nền tảng nội lực lâu dài"] },
    ],
  },
  {
    num: "4",
    name: "hệ thần kinh & cảm xúc",
    range: "10–12",
    weeks: [
      { n: 10, title: "stress và phục hồi thần kinh", points: ["Thở chậm", "Chuyển động phục hồi", "Cải thiện tình trạng rối loạn lo âu"] },
      { n: 11, title: "giấc ngủ và tái tạo năng lượng", points: ["Thực hành buổi tối", "Thư giãn sâu", "Lưu thông khí huyết"] },
      { n: 12, title: `tổng hòa — "giãn - thông - hòa"`, points: ["Ôn toàn bộ", "Tăng chất lượng cảm nhận", "Cân bằng năng lượng", "Cân bằng nội tiết"] },
    ],
  },
];

export const scheduleRows = [
  { time: "Ca sáng · T2, 4, 6", activity: "05h00 – 06h10" },
  { time: "Ca tối · T3, 5, 7", activity: "19h00 – 20h10" },
];

export const newcomerList = ["02 buổi tập riêng để làm quen + đánh giá thể trạng", "Gia nhập lớp chính thức", "Duy trì 12 buổi trong tháng đầu để tạo nền nếp"];

export const safetyGroups = [
  {
    title: "1. Cam kết an toàn",
    points: ["Mỗi bài tập đều có phương án điều chỉnh phù hợp với nhiều thể trạng khác nhau", "Người hướng dẫn quan sát và hỗ trợ để tránh quá tải cơ - khớp", "Không khuyến khích vượt quá giới hạn chịu đựng của cơ thể", "Không tạo áp lực so sánh giữa các học viên"],
    close: "An toàn không chỉ là tránh chấn thương, mà còn là tạo cảm giác ổn định cho hệ thần kinh.",
  },
  {
    title: "2. Giới hạn chuyên môn",
    points: ["Không thay thế điều trị y khoa", "Không chẩn đoán bệnh lý", "Không cam kết chữa khỏi các tình trạng sức khỏe"],
    close: "Các bài tập và kỹ thuật tự chăm sóc được thiết kế nhằm hỗ trợ cơ thể tự điều chỉnh, không phải để điều trị chuyên sâu.",
  },
  {
    title: "3. Trách nhiệm của học viên",
    points: ["Thông báo trước các vấn đề sức khỏe, chấn thương, bệnh nền", "Chủ động dừng lại khi có cảm giác đau nhói hoặc khó chịu bất thường", "Tham khảo ý kiến bác sĩ chuyên khoa nếu có bệnh lý tim mạch, xương khớp nặng, huyết áp không ổn định hoặc đang trong giai đoạn điều trị đặc biệt"],
    close: "Lắng nghe cơ thể là nguyên tắc quan trọng nhất của lớp học.",
  },
];

export const gearList = ["Thảm tập", "Gạch (block)", "Dây kháng lực"];

export const ptIssues = ["Cong vẹo cột sống", "Cân chỉnh khung chậu", "Chỉnh chân vòng kiềng, bàn chân bẹt", "Đau vai gáy cổ, cổ rùa", "Mất cân bằng nội tiết tố", "Stress & trầm cảm", "Mất cân bằng luân xa", "Tăng cường sức mạnh hệ cơ lõi", "Mất ngủ, rối loạn lo âu"];

export const testimonials = [
  {
    quote:
      "Tại lớp yoga của thầy Thuận không chỉ là nơi để tập cho sức khoẻ thêm dẻo dai mà còn là nơi nuôi dưỡng tinh thần.\n\nSau 1 năm học thầy Thuận, em đã có những thay đổi lớn về sức khoẻ:\n\n— Trước khi tập cơ thể luôn nhức mỏi, đặc biệt là trước khi đến chu kỳ kinh sẽ có cảm giác đau nhức ở vùng thắt lưng, cảm giác rất mỏi không thể ngồi lâu hay đứng lâu. Tích cực sau khi tập 1 năm, cảm giác đau nhức ở vùng lưng đã không còn khi đến chu kỳ kinh\n\n— Say máy bay: trước kia dù đi máy bay rất nhiều lần nhưng lúc nào cũng sẽ gặp tình trạng say, chóng mặt, khó chịu khi đi máy bay. Mà bây giờ đã không còn say máy bay nữa, dù máy bay có thay đổi độ cao đột ngột cũng không có cảm giác chóng mặt như trước\n\n— Trước dễ bị bệnh vặt: bệnh cảm, nhức đầu,… giờ đây số lần bệnh cảm đã giảm đi đáng kể dù không dùng thuốc\n\n— Có thể hoạt động cả ngày nhưng vẫn giữ được năng lượng\n\n— Ngoài ra yoga còn giúp em điều chỉnh cảm xúc dễ nóng nảy, dễ quạo mà sẽ điềm tĩnh để đối diện, để nhìn nhận lại vấn đề\n\n— Khi em có điều gì đó cần suy nghĩ nhiều, những căng thẳng, hay những cảm xúc tiêu cực tích tụ trong ngày đều được giải toả không ít thì nhiều sau mỗi buổi tập.\n\n— Sau mỗi buổi tập hơi thở sẽ nhẹ nhàng hơn, có thể so sánh giữa lúc bắt đầu tập và sau khi kết thúc buổi tập\n\nVới lớp của thầy Thuận không chỉ mang lại những tích cực về cơ thể dẻo dai, mà em còn cảm nhận được từng bước trở về với chính mình. Cũng nhờ những bài tập lắng nghe hơi thở, tự cảm nhận cơ thể mà em có thể nắm bắt được em đang gặp vấn đề gì và vấn đề đó ở đâu.",
    name: "Trần Kim Ngọc",
    meta: "27 tuổi · Kinh doanh tự do · Sài Gòn",
  },
  {
    quote:
      "Tôi đã theo tập được hơn 2 năm. Việc tập luyện thường xuyên không chỉ giúp tinh thần tôi trở nên nhẹ nhõm, thư thái mà còn mang lại rất nhiều lợi ích về mặt thể chất. Trước kia, mỗi khi ngồi làm việc lâu, tôi thường xuyên bị đau lưng, mỏi vai gáy, cảm giác cơ thể rất nặng nề và uể oải. Tuy nhiên, từ khi duy trì thói quen tập luyện đều đặn, những cơn đau nhức đó gần như biến mất.\n\nThể lực của tôi cũng cải thiện rõ rệt, tôi cảm thấy mình dẻo dai hơn, ít khi mệt mỏi hay kiệt sức như trước đây. Một điểm đáng mừng nữa là tôi hầu như không còn bị ốm vặt, cảm cúm hay các vấn đề sức khỏe lặt vặt, kể từ khi bắt đầu quá trình tập luyện đến nay. Điều đó giúp tôi duy trì năng lượng tích cực cho công việc và cuộc sống hằng ngày.\n\nTập luyện đã trở thành một phần không thể thiếu trong cuộc sống của tôi, không chỉ giúp nâng cao sức khỏe mà còn giúp tôi xây dựng được lối sống lành mạnh và tinh thần lạc quan hơn.",
    name: "Ngô Ngọc Thanh",
    meta: "44 tuổi · Kỹ sư thủy lợi, Bộ Nông nghiệp và Môi trường · Hà Nội",
  },
  {
    quote:
      "Tập luyện đều đặn mang lại cho tôi rất nhiều thay đổi tích cực. Ngay sau mỗi buổi tập, tôi cảm thấy cơ thể khỏe khoắn, tràn đầy năng lượng. Các cơn đau cổ, vai, gáy cũng giảm hẳn, cơ thể linh hoạt và dễ chịu hơn rất nhiều. Một lợi ích nữa mà tôi nhận thấy rõ rệt là hệ tiêu hóa hoạt động tốt hơn, đồng thời tinh thần cũng trở nên tỉnh táo, tập trung và chú ý nhiều hơn, đặc biệt là khi tôi chủ động điều chỉnh nhịp thở trong lúc tập.\n\nBuổi sáng, sau khi tập xong, tôi cảm nhận rõ sự tỉnh táo lan tỏa khắp cơ thể, giúp tôi bắt đầu ngày mới một cách đầy hứng khởi. Buổi tối, mỗi khi tập xong, tôi dễ dàng có được một giấc ngủ sâu và ngon hơn, không còn trằn trọc hay mệt mỏi như trước.\n\nThậm chí, có những ngày tôi cảm thấy như \"nghiện\" việc tập luyện; nếu không tập, trong lòng lại thấy thiếu thiếu điều gì đó. Cảm giác được vượt qua chính mình mỗi khi cố gắng hoàn thành từng phần tập luyện là một động lực rất lớn đối với tôi.\n\nDù bận rộn hay mệt mỏi, tôi luôn cố gắng duy trì thói quen này. Ý chí và quyết tâm luôn thôi thúc tôi: \"Hôm nay nhất định cũng phải tập cả buổi sáng lẫn buổi chiều!\" Và chính sự đều đặn đó đã dần dần làm thay đổi cả thể chất lẫn tinh thần của tôi theo hướng tích cực hơn mỗi ngày.",
    name: "Đỗ Thị Hồng Phượng",
    meta: "40 tuổi · Giáo viên · Hà Nội",
  },
  {
    quote:
      'Hôm nọ, người bạn ngẫu hứng rủ đi gội đầu dưỡng sinh. Tụi mình đi dọc khu Thảo Điền và dừng lại trước một cửa tiệm nhỏ xinh mà tụi mình ấn tượng. Đúng cái vibe của mình rồi. Tiệm trị liệu đông y của một bạn bác sĩ y học cổ truyền. Các góc trong tiệm đều được bày trí rất tinh tế, gọn gàng và mang hơi hướng Phật Giáo.\n\nVì vừa kết thúc ca trực xong nên mình đang trong một tâm thế rất là thoải mái và tận hưởng. Mình chọn gói dưỡng sinh cơ bản bao gồm gội đầu và massage cổ vai gáy. Mình nằm đó, đầu óc trống rỗng, dòng nước ấm len lỏi qua kẽ tóc, từng động tác xoa bóp, nhẹ nhàng day ấn làm mình cảm thấy thật dễ chịu. Ngay những giây phút đó, mình chợt tự hỏi "Ồ đã bao lâu rồi mình đã không còn ghé những nơi này thường xuyên nữa vậy?".\n\nCòn nhớ trước đây mình là một đứa rất nghiện massage. Do tính chất công việc ngồi lâu, từ sáng sớm đến tận tối trễ, vai mình luôn ở trong tình trạng bị căng cứng, cột sống, cổ cũng phải chịu một áp lực lớn do ngồi sai tư thế. Hầu như đến cuối ngày là cơ thể mình "báo động đỏ", phải đi "cấp cứu" liền. Mình đi trị liệu rất nhiều nơi, mua hết gói này đến gói khác, đô chịu lực massage cũng thuộc hàng thứ dữ, mấy bạn kỹ thuật viên mới mới không quen chỉ như là gãi ngứa cho mình. Có mấy hôm ê ẩm quá, tan làm muộn mình vẫn cố đi tìm chỗ massage khuya, 11 giờ đêm vô làm đến tận 1 giờ mới về nhà.\n\nKể lể một chút để thấy được tình trạng báo động trước đây mình. Thời gian sau mình gặp thầy Thuận và tham gia vào lớp yoga online của thầy. Mình chuyên cần tập tới nay cũng một năm rưỡi trôi qua, những buổi tập sáng sớm trước khi đi làm hay tối rảnh đã trở thành thói quen của mình. Mình duy trì luyện tập vì mình biết điều này tốt cho sức khỏe thể chất và tinh thần. Mình cũng không mong đợi tập yoga để giảm cân hay để điều chỉnh gì trên cơ thể. Chỉ là mình thích những giây phút mình được cảm nhận, được tiếp chạm sâu với cơ thể mình. Mình nghe được những lời thì thầm của từng bó cơ, ổ khớp, những điều mà khó thể nào cảm được trong những hoạt động bình thường, chỉ khi nào mà chúng bị quá tải, phải "la làng" lên thì chủ nhân chúng mới hay.\n\nThời gian cứ thế trôi qua, mình cũng không để ý quá nhiều đến sự thay đổi của cơ thể. Vậy mà, ngay tại giây phút đi gội đầu hôm đó. Mình chợt nhận ra rằng không biết từ lúc nào mình đã không còn thường xuyên lui tới các tiệm massage, không còn những gói trị liệu đắt đỏ, không còn những căng thẳng đau mỏi cuối ngày. Dĩ nhiên, hôm nào làm việc quá tải hoặc hơi chệch nhịp sinh học một chút thì mình vẫn cần can thiệp mang tính "cấp cứu" tạm thời. Nhưng thực sự là ngày càng ít và thưa dần hẳn. Mình nở "nụ cười hàm tiếu" và nhận ra rằng yoga đã âm thầm lấy đi những cơn đau mỏi ấy từ lúc nào không hay.\n\nThầy Thuận - mình không đánh giá người thầy ấy giỏi hay không. Mình chỉ cảm nhận thầy là người rất am hiểu về mặt cơ thể. Thầy nắm rõ các nguyên tắc, cơ chế của cơ thể, của từng động tác. Thầy cũng nhạy bén trong việc quan sát và thấu hiểu những vấn đề cả về cơ thể và tâm trí mà học viên đang gặp phải. Dù có đôi khi thầy cũng hơi "dữ" nhưng vẫn "dữ" trong sự đáng yêu, "dữ" vì sự chân thành và nhiệt huyết mong muốn đem lại lợi lạc cho mọi người. Biết ơn yoga, biết ơn thầy Thuận - người đã kết nối mình với bộ môn này một cách sâu lắng hơn.\n\nMình là Q.N, 32 tuổi, hiện là bác sĩ ở một bệnh viện dành cho trẻ em ở Sài Gòn. Nếu bạn muốn kết nối một cách nghiêm túc với yoga thì hãy vào tham gia vào lớp học thầy Thuận cùng mình nhé. Hẹn gặp bạn!',
    name: "Quỳnh Như",
    meta: "32 tuổi · Bác Sĩ nhi · Sài Gòn",
  },
];

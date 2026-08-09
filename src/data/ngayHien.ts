import { routes } from "@/lib/nav";

export const programs = [
  {
    tagline: "dành cho ai yêu thích sống chậm & khám phá",
    name: "stay + talk",
    duration: "3 ngày · 2 đêm · không lịch trình",
    desc: "ngủ ngon, ăn chay ngon, thư thả với mình một chút. có buổi ngồi chơi bên suối, buổi uống trà trò chuyện sâu, buổi xem phim nhẹ nhàng. chỉ vậy thôi. đủ để tâm được dưỡng.",
    href: routes.stayTalk,
    imgLabel: "ảnh · stay + talk",
  },
  {
    tagline: "private retreat · dành cho nhóm bạn hoặc gia đình để kết nối và hiểu nhau hơn",
    name: "retreat ở-yên",
    duration: "từ 2 khách · 4N3Đ hoặc 5N4Đ · lịch linh hoạt",
    desc: "private retreat cho nhóm từ 2 người, lịch linh hoạt. một không gian dịu-dàng để nghỉ ngơi và nhìn lại về đời sống, với lịch trình được thiết kế riêng.",
    href: routes.retreatOYen,
    imgLabel: "ảnh · retreat ở-yên",
  },
  {
    tagline: "retreat 4-mùa-hàm-dưỡng · dành cho người quan tâm sâu tới đời sống nội tâm của mình",
    name: "retreat hàm-dưỡng",
    duration: "chỉ 4 chuyến / năm · 5 ngày 4 đêm · nhịp trình nhàng",
    desc: "đi tìm lời giải cho điều mình còn băn khoăn, chưa nói thành lời — qua những ngày chậm lại, lắng nghe mình, và trò chuyện sâu.",
    href: routes.retreatHamDuong,
    imgLabel: "ảnh · retreat hàm-dưỡng",
  },
  {
    tagline: "dành cho người lớn tuổi đang học cách buông thư và tìm lại cảm hứng",
    name: "retreat an-vui",
    duration: "5 ngày · 4 đêm · nhịp chậm, ấm áp",
    desc: "cùng nấu ăn, gói bánh, thêu tay, vẽ tranh thiền, đi bộ thong thả. chia sẻ về chăm sóc sức khỏe, giải tỏa tinh thần — không cần bắt nhịp hay đổi mình để vừa với một thế giới đang đi quá nhanh.",
    href: routes.retreatAnVui,
    imgLabel: "ảnh · retreat an-vui",
  },
];

// variant cycles every 3: 0 = centered/stacked, 1 = image-left, 2 = image-right
export const moments = [
  { imgLabel: "ảnh · bàn ăn với hoa vườn", caption: `ở đây luôn có đủ thời gian để nấu ba bữa một ngày. trên bàn ăn bao giờ cũng có vài bông hoa nhỏ hái ngoài vườn. có người viết trong lưu bút: "mỗi lần vào bàn ăn, tớ như được trở lại với chính mình."` },
  { imgLabel: "ảnh · rót trà buổi tối", caption: "Vũ nhấc ấm, chuyền từ tay nọ sang tay kia, rót nước vào bình trà. Nước chảy mềm, thành một dòng, không xoắn, không xòe. Như thể mỗi giọt nước, đều biết chỗ của mình. Có những buổi trà kéo tới khuya — chỉ vì hiếm khi nào người ta thật tâm ngồi xuống cùng nhau." },
  { imgLabel: "ảnh · góc nhà quen thuộc", caption: `một cô gái từng lên đây hai lần, nhắn lúc tối muộn: "nhớ nhà mình ghê gớm. em chuẩn bị lên đây." Chúng tôi không biết từ lúc nào, người ta gọi nơi này là nhà mình.` },
  { imgLabel: "ảnh · June ra đón khách trước cổng", caption: "xe vừa dừng trước cổng, June từ trong nhà chạy ra. em đã mười tuổi, mắt đã đục hơn, răng đã rụng một chiếc — nhưng vẫn đón khách như một đứa trẻ. có người lên đây lần thứ ba, vẫn chưa nhớ đường vào nhà." },
  { imgLabel: "ảnh · một tối mưa, đọc sách bên đèn vàng", caption: "một tối tháng mười, ngoài trời mưa vì ảnh hưởng của một cơn bão. trong nhà, đèn vàng dịu, nhạc mở khẽ, và mọi người đang êm ả đọc sách. không ai bảo ai phải làm gì." },
  { imgLabel: "ảnh · quây quần bên bếp lửa", caption: "có những chiều tối lạnh, cả nhà ngồi quanh bếp lửa, nướng khoai trên vỉ than. không có chương trình gì. chỉ có lửa, khoai, và những câu chuyện tự đến rồi tự đi — như củi cháy hết thì thôi." },
  { imgLabel: "ảnh · mẩu giấy thông điệp mỗi sáng", caption: "mỗi buổi sáng, khách được bốc một mẩu giấy — thông điệp do một vị khách nào đó đi trước để lại. không ai biết ai viết. chỉ biết rằng, có một người từng ngồi đúng chỗ này, từng mang một nỗi niềm nào đó, và đã để lại vài dòng cho người đến sau." },
  { imgLabel: "ảnh · cắm hoa dại từ vườn mùa hạ", caption: "mùa hạ, có nắng, có gió và rất nhiều hoa cỏ. một sáng cuối tuần, có người dạo quanh khu vườn trước hiên, hái ít hoa dại, cắm một bình. vườn đang nở, và trong nhà nên có một chút của vườn." },
  { imgLabel: "ảnh · gian bếp mở, ai cũng thấy nhau nấu nướng", caption: `ở đây bếp, khách đi ngang thấy hết — ai đang nấu, ai đang rửa, ai đang lau bàn. có người viết trong lưu bút rằng, chỉ nhìn thấy cảnh mọi người nấu nướng rồi dọn dẹp trong bếp, "em đã hạnh phúc." hóa ra người ta không cần được phục vụ hoàn hảo. người ta cần thấy một đời sống thật đang diễn ra — và được ở trong đó.` },
];

export const testimonials = [
  { text: "Trước khi lên đây em nói em không ổn, bây giờ em nói em sẽ ổn thôi.", attribution: "C, 33 tuổi · Đà Lạt · dừng-chân-an-trú 30 ngày" },
  { text: "Em rất an tâm khi chọn mlf. Từ khi đặt chỗ xong em biết mình chỉ cần mang vali và đi thôi — không cần nghĩ gì, chỉ cần nghỉ ngơi.", attribution: "L, 28 tuổi · Sài Gòn · khách duy nhất của chuyến" },
  { text: "Vừa đủ tình thương, vừa đủ sự ân cần, vừa đủ những chăm chút. Vậy mà tất cả sự vừa đủ đó lại khiến trái tim cảm thấy thật tràn đầy.", attribution: "vợ chồng C & K · Đà Nẵng · ngày-dưỡng-tâm" },
  { text: "Mình tìm đến nhà mộc khi cuộc sống cảm thấy hoàn toàn bế tắc. Ấy vậy mà mình quyết định đi vỏn vẹn trong vòng 10 phút. Đầu óc mình thanh thản hẳn.", attribution: "Tr, 28 tuổi · Kiên Giang · retreat" },
  { text: "Mình đến lần thứ ba rồi nhưng vẫn không nhớ được đường vào nhà. Có lẽ vì những lần trước mình đã vô thức đặt trọn niềm tin vào những con người ở đây — họ đưa mình đi đâu mình đi đó, chẳng có chút lo sợ.", attribution: "Q.N · Sài Gòn · vị khách 3 lần tới mlf" },
];

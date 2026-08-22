import { routes } from "@/lib/nav";

export const programs = [
  {
    tagline: "dành cho ai yêu thích sống chậm & khám phá",
    name: "stay + talk",
    duration: "3 ngày · 2 đêm · không lịch trình",
    desc: "ngủ ngon, ăn chay ngon, thư thả với mình một chút. có buổi ngồi chơi bên suối, buổi uống trà trò chuyện sâu, buổi xem phim nhẹ nhàng. chỉ vậy thôi. đủ để tâm được dưỡng.",
    href: routes.stayTalk,
    imgLabel: "ảnh · stay + talk",
    imgSrc: "/assets/ngayhien_staytalk.webp",
    imgObjectFit: "contain" as const,
    imgScale: 0.91,
  },
  {
    tagline: "private retreat · dành cho nhóm bạn hoặc gia đình để kết nối và hiểu nhau hơn",
    name: "retreat ở-yên",
    duration: "từ 2 khách · 4N3Đ hoặc 5N4Đ · lịch linh hoạt",
    desc: "private retreat cho nhóm từ 2 người. một không gian dịu-dàng để nghỉ ngơi và nhìn lại về đời sống, với lịch trình được thiết kế riêng.",
    href: routes.retreatOYen,
    imgLabel: "ảnh · retreat ở-yên",
    imgSrc: "/assets/ngayhien_oyen.webp",
    imgObjectFit: "contain" as const,
    imgScale: 0.91,
  },
  {
    tagline: "retreat 4-mùa-hàm-dưỡng · dành cho người quan tâm sâu tới đời sống nội tâm của mình",
    name: "retreat hàm-dưỡng",
    duration: "chỉ 4 chuyến / năm · 5 ngày 4 đêm · sâu lắng",
    desc: "đi tìm lời giải cho điều mình còn băn khoăn, chưa nói thành lời — qua những ngày chậm lại, lắng nghe mình, và trò chuyện sâu.",
    href: routes.retreatHamDuong,
    imgLabel: "ảnh · retreat hàm-dưỡng",
    imgSrc: "/assets/ngayhien_hamduong.webp",
    imgObjectFit: "contain" as const,
    imgScale: 0.845,
  },
  {
    tagline: "dành cho người lớn tuổi đang học cách buông thư và tìm lại cảm hứng",
    name: "retreat an-vui",
    duration: "5 ngày · 4 đêm · nhịp chậm, ấm áp",
    desc: "cùng nấu ăn, gói bánh, thêu tay, vẽ tranh thiền, đi bộ thong thả. chia sẻ về chăm sóc sức khỏe, giải tỏa tinh thần — không cần đổi mình để vừa với một thế giới đang đi quá nhanh.",
    href: routes.retreatAnVui,
    imgLabel: "ảnh · retreat an-vui",
    imgSrc: "/assets/ngayhien_anvui.webp",
    imgObjectFit: "contain" as const,
    imgScale: 0.845,
  },
];

// variant cycles every 3: 0 = centered/stacked, 1 = image-left, 2 = image-right
export const moments = [
  { imgLabel: "ảnh · bàn ăn với hoa vườn", src: "/assets/ngayhien_mansuongsom.webp", caption: `Lắm lúc, có những bất an bên trong nổi lên, tớ lại chờ đợi, tớ nhìn màn sương phủ khắp vườn, tớ nhìn con chim đang chao liệng giữa nền trời xam xám. Tớ đơn giản là chấp nhận nó như một phần của cuộc sống, hết nắng lại mưa, mọi thứ cứ tuần tự mà thành, đợi cho nỗi bất an tới lúc vụn vỡ, tan ra, rồi bình an lại tới. Rồi bình an lại rảo bước rời đi, nỗi bất an lại ghé thăm trong dịu dàng.` },
  { imgLabel: "ảnh · rót trà buổi tối", src: "/assets/home_vedem.webp", caption: "Trời Măng Đen vẫn lúc nắng lúc mưa, gió sương vẫn bàng bạc núi đồi. Duy chỉ có một căn nhà tối tối thắp đèn, tiếng nhạc du dương, mùi bếp xông bồ kết, mùi bánh nướng, cốc nước thơm, những chồng sách, đóa hoa hái từ vườn, những tâm hồn thênh thang, một bầu không gian nội-tâm sâu sắc, có June luôn sẵn lòng yêu thương cứ lúi húi dưới chân, có Midnight nhẩn nhơ đối thoại với màn đêm, có những cuộc trò chuyện đi vào những chiều sâu tâm tưởng - lôi móc lên những điều cất giấu tận sâu bên trong... sự đan cài đã bện thành hơi thở, để chỉ thở thôi trong bầu không khí này, ta cũng tự thấy có điều gì đó đang ủi an." },
  { imgLabel: "ảnh · góc nhà quen thuộc", src: "/assets/ngayhien_demchuyentro.webp", caption: `Ai mà không muốn được nhàn nhã, ai mà không muốn được thong dong, không ép thúc. Và rồi, những đêm ngồi lại cùng nhau, chúng tớ nói về những mặt kia của cuộc sống, để tự bản thân mỗi người học cách kéo mình về phía vốn bị lệch quá xa. Nhận biết mình đang đi về đâu, không phải là điều dễ dàng, nếu không có ai đó khẽ khàng lắc nhẹ vào vai mình: "Quay lại thôi!".` },
  { imgLabel: "ảnh · June ra đón khách trước cổng", src: "/assets/ngayhien_june.webp", caption: "xe vừa dừng trước cổng, June từ trong nhà chạy ra. em đã mười tuổi, mắt đã đục hơn, răng đã rụng một chiếc — nhưng vẫn đón khách như một đứa trẻ. có người lên đây lần thứ ba, vẫn chưa nhớ đường vào nhà." },
  { imgLabel: "ảnh · một tối mưa, đọc sách bên đèn vàng", src: "/assets/ngayhien_docsach.webp", caption: "một tối tháng mười, ngoài trời mưa vì ảnh hưởng của một cơn bão. trong nhà, đèn vàng dịu, nhạc mở khẽ, và mọi người đang êm ả đọc sách." },
  { imgLabel: "ảnh · quây quần bên bếp lửa", src: "/assets/ngayhien_bongnang.webp", caption: "có những buổi chiều, bóng nắng đổ xuống. người ta chỉ muốn ngồi đó, nhìn mặt trời chầm chậm khuất dạng, cũng như những câu chuyện tự đến rồi tự đi." },
  { imgLabel: "ảnh · mẩu giấy thông điệp mỗi sáng", src: "/assets/ngayhien_buasang.webp", caption: "mỗi buổi sáng, khách được bốc một mẩu giấy — thông điệp do một vị khách nào đó đi trước để lại. không ai biết ai viết. chỉ biết rằng, có một người từng ngồi đúng chỗ này, từng mang một nỗi niềm nào đó, và đã để lại vài dòng cho người đến sau." },
  { imgLabel: "ảnh · cắm hoa dại từ vườn mùa hạ", src: "/assets/ngayhien_camhoa.webp", caption: "mùa hạ, có nắng, có gió và rất nhiều hoa cỏ. một sáng cuối tuần, có người dạo quanh khu vườn trước hiên, hái ít hoa dại, cắm một bình. vườn đang nở, và trong nhà nên có một chút của vườn." },
  { imgLabel: "ảnh · gian bếp mở, ai cũng thấy nhau nấu nướng", src: "/assets/ngayhien_bep.webp", caption: `ở đây bếp, khách đi ngang thấy hết — ai đang nấu, ai đang rửa, ai đang lau bàn. có người viết trong lưu bút rằng, chỉ nhìn thấy cảnh mọi người nấu nướng rồi dọn dẹp trong bếp, "em đã hạnh phúc." hóa ra người ta không cần được phục vụ hoàn hảo. người ta cần thấy một đời sống thật đang diễn ra — và được ở trong đó.` },
];

export const testimonials = [
  { text: "Trước khi lên đây em nói em không ổn, bây giờ em nói em sẽ ổn thôi.", attribution: "C, 33 tuổi · Đà Lạt · dừng-chân-an-trú 30 ngày" },
  { text: "Em rất an tâm khi chọn mlf. Từ khi đặt chỗ xong em biết mình chỉ cần mang vali và đi thôi — không cần nghĩ gì, chỉ cần nghỉ ngơi.", attribution: "L, 28 tuổi · Sài Gòn · khách duy nhất của chuyến" },
  { text: "Vừa đủ tình thương, vừa đủ sự ân cần, vừa đủ những chăm chút. Vậy mà tất cả sự vừa đủ đó lại khiến trái tim cảm thấy thật tràn đầy.", attribution: "vợ chồng C & K · Đà Nẵng · ngày-dưỡng-tâm" },
  { text: "Mình tìm đến nhà mộc khi cuộc sống cảm thấy hoàn toàn bế tắc. Ấy vậy mà mình quyết định đi vỏn vẹn trong vòng 10 phút. Đầu óc mình thanh thản hẳn.", attribution: "Tr, 28 tuổi · Kiên Giang · retreat" },
  { text: "Mình đến lần thứ ba rồi nhưng vẫn không nhớ được đường vào nhà. Có lẽ vì những lần trước mình đã vô thức đặt trọn niềm tin vào những con người ở đây — họ đưa mình đi đâu mình đi đó, chẳng có chút lo sợ.", attribution: "Q.N · Sài Gòn · vị khách 3 lần tới mlf" },
];

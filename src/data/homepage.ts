import { routes } from "@/lib/nav";

export const entries = [
  {
    href: routes.ngayHien,
    quote: "trú lại Măng Đen",
    name: "ngày-hiền",
    icon: "motif-mai-nha.webp",
  },
  {
    href: routes.giua,
    quote: "khoảng-dừng ở Huế",
    name: "giữa · middle",
    icon: "motif-to-my.webp",
  },
  {
    href: routes.tuanDu,
    quote: "du ngoạn đó đây",
    name: "tuần-du",
    icon: "motif-loi-mon.webp",
  },
  {
    href: routes.beStill,
    quote: "làm việc với tâm",
    name: "be-still",
    icon: "motif-gon-nuoc.webp",
  },
  {
    href: routes.teaMind,
    quote: "cái đẹp thường ngày",
    name: "tea · mind",
    icon: "motif-chen-tra.webp",
  },
  {
    href: routes.thinhKhong,
    quote: "thực hành yoga",
    name: "thinh · không",
    icon: "motif-thien-toa.webp",
  },
];

export const fallbackUpcoming = [
  {
    when: "THÁNG 9",
    name: "ngày-hiền",
    desc: "ba ngày trú lại giữa rừng và đất trời Măng Đen.",
    href: routes.ngayHien,
  },
  {
    when: "THÁNG 10",
    name: "tuần-du · miền Trung",
    desc: "một chuyến đi chậm rãi, nhìn đời sống mình từ một nhịp khác.",
    href: routes.tuanDu,
  },
  {
    when: "THÁNG 11",
    name: "be-still",
    desc: "một khoá làm việc sâu với tâm, cho ai đang ở ngã rẽ.",
    href: routes.beStill,
  },
];

export const veMlfIntro = [
  "2016 đến nay, đủ dài để một điều gì đó thành hình. Ban đầu là một quán nhỏ giữa lòng Sài Gòn, người ta ngồi lại một lát giữa những ngày cứ trôi. Bây giờ là một triền đồi ở Măng Đen - sương xuống sớm, mây đến rồi đi.",
  "Ở mlf, điều lạ lùng nhất, có lẽ là khi ngồi yên không làm gì cũng là làm thật nhiều.",
  "Một bếp lửa nhóm lên giữa nhà, tiếng tí tách và những điều đã cũ khẽ động lại. Một tách trà rót ra rồi để yên một lúc, chờ cho hơi nóng dịu xuống. Trong lúc chờ, lòng bỗng dịu. Hóa ra, nhóm củi là một việc, chờ trà nguội cũng là một việc. Những việc nhỏ, làm chậm, thì thành ra chuyện khác.",
  "Người đến rồi hay nói, ở mlf không có gì ngoài thời gian. Có lẽ đúng vậy, người ta có thể ngồi xuống lâu hơn mà tâm không vướng nhiều chộn rộn. Để có mặt thật sự với hơi ấm của chén trà, để nghe rõ cả những chỗ ngắt quãng trong câu chuyện kể cho nhau.",
  "Những điều nhỏ nhoi ấy vốn là cả một con đường.",
];

export const veMlfVanHanh = [
  "Tựa một mảnh vườn, mlf cũng nương theo mùa của đất, của trời.",
  "Một chuyến đi, một điều mlf làm… khi thấy lòng mình thuận. Chúng tôi không gieo nhu cầu, cũng không hứa hẹn kết quả.",
  "Ở mlf, chỉ có 3 người: Tâm ·  Thuận · Vũ, việc gì cũng đụng tay, nương đỡ nhau mà thành.",
  "Con đường này chậm, nhưng nhà mộc chọn nó, để lời mình nói ra và việc mình đang làm, là một.",
];

export const veOYenIntroA = [
  "ở-yên là một cách ở lại, ngay giữa những quay cuồng.",
  "Chiều, vội chạy đón con, đầu còn loạng choạng những việc. Tối, một mình cặm cụi với deadline. Khác với việc ngồi yên lặng lẽ, những lúc như thế... người ta không trốn, chỉ an trú ở đó.",
  "ở-yên khi ta dám ngồi lại với mình, để cho những mối rối đã âm ỉ trong lòng, được yên, không khuấy thêm nữa. Rồi tự nó, như bùn trong vại nước để qua đêm, chìm xuống đáy.",
  "Và giữa khoảng yên hiếm hoi ấy, người ta chợt nhận ra điều nọ điều kia, mà lâu lắm rồi, chẳng ai cho mình đủ tĩnh để nhớ lại.",
];

export const veMlfExits = [
  { href: routes.conDuongMlf, name: "con đường mlf", desc: "cách mlf bước đi" },
  { href: routes.veMlf, name: "về mlf", desc: "hành trình & cấu trúc của mlf" },
  { href: routes.bienThuChoHy, name: "biên-thư-cho-Hy", desc: "những lá thư riêng từ mlf" },
  { href: routes.chuyenVe, name: "chuyện về", desc: "những người bạn của mlf" },
  { href: routes.journal, name: "mlf journal", desc: "một tạp chí nhỏ đêm giao thừa" },
];

export const testimonials = [
  {
    text: "Vừa đủ tình thương, vừa đủ sự ân cần, vừa đủ những chăm chút. Vậy mà tất cả sự vừa đủ đó lại khiến trái tim cảm thấy thật tràn đầy.",
    attribution: "C & K · Đà Nẵng · trong stay+talk",
  },
  {
    text: "Những câu hỏi chưa kịp suy nghĩ mà như có một sức mạnh vô hình nào đó làm tâm can lung lay, rạn vỡ.",
    attribution: "M.C · trong hành trình khai tâm",
  },
  {
    text: "Tôi đã tham gia 3 chuyến retreat ở Măng Đen và 3 chuyến tuần-du đó đây của mlf. Mỗi chuyến đều khác biệt, đều mới mẻ, không chuyến nào giống chuyến nào. Đó là vì từng thời điểm khác nhau, trạng thái tâm bạn đã khác, ngày hôm nay đã không còn như hôm trước và hôm sau đã tiến bộ hơn hôm nay.\n\nĐó chính là nét riêng biệt, không lẫn vào đâu được của mlf. Điều đó không phải tự nhiên mà có được, đó là năng lực tu tập và sự gìn giữ kỷ luật ở chính những con người nơi đây.",
    attribution: "Q.N · Sài Gòn · sau 3 chuyến retreat và 3 chuyến tuần-du",
  },
  {
    text: "Có những ngày ở nhà mộc, nước mắt con đã suýt rơi vì cảm giác được đón nhận và thấu cảm, thậm chí hơn cả bản thân con hiểu mình. Và cả những khi đọc những dòng nhận xét của anh Tâm trong nhật ký chữ nghĩa, con cảm giác anh đã nhìn thấy con thực sự, nhưng không hề phán xét. Con biết ơn Người đã dẫn dắt con, đưa con vào trạng thái đêm đen của tâm hồn, để được gặp nhà mộc. Nếu không, con đã là một con rất khác ở hiện tại.",
    attribution: "K.T · lớp viết im lặng chữ nghĩa",
  },
];

export const bannerImages = [
  { id: "banner-01", type: "image" as const, src: "home_4p_01.webp", label: "ảnh · góc nhà mộc" },
  { id: "banner-02", type: "image" as const, src: "home_4p_02.webp", label: "ảnh · trang sổ tay" },
  { id: "banner-03", type: "video" as const, src: "home_sach.mp4", label: "video · home_sach" },
  { id: "banner-04", type: "image" as const, src: "home_4p_03.webp", label: "ảnh · buổi sáng" },
];

export const vibeImages = [
  { id: "vibe-01", type: "image" as const, src: "home_vibe01.webp", label: "ảnh · góc nhà mộc" },
  { id: "vibe-02", type: "image" as const, src: "home_vibe02.webp", label: "ảnh · trang sổ tay" },
  { id: "vibe-03", type: "video" as const, src: "home_moss.mp4", label: "video · home_moss" },
  { id: "vibe-04", type: "image" as const, src: "home_vibe04.webp", label: "ảnh · buổi sáng" },
  { id: "vibe-05", type: "video" as const, src: "home_mua.mp4", label: "video · mặt nước gợn sóng" },
  { id: "vibe-06", type: "image" as const, src: "vibe06.webp", label: "ảnh · hiên nhà" },
  { id: "vibe-07", type: "video" as const, src: "home_troi.mp4", label: "ảnh · góc nghỉ" },
  { id: "vibe-09", type: "image" as const, src: "vibe08.webp", label: "ảnh · vibe" },
  { id: "vibe-08", type: "image" as const, src: "vibe09.webp", label: "ảnh · vibe" },
];

import { routes } from "@/lib/nav";

export const entries = [
  {
    href: routes.ngayHien,
    quote: "trú lại giữa rừng và đất trời Măng Đen",
    name: "ngày-hiền",
    icon: "motif-mai-nha.png",
  },
  {
    href: routes.giua,
    quote: "gieo mlf ở Huế",
    name: "giữa · middle",
    icon: "motif-to-my.png",
  },
  {
    href: routes.tuanDu,
    quote: "du ngoạn đó đây",
    name: "tuần-du",
    icon: "motif-loi-mon.png",
  },
  {
    href: routes.beStill,
    quote: "làm việc sâu với tâm",
    name: "be-still",
    icon: "motif-gon-nuoc.png",
  },
  {
    href: routes.teaMind,
    quote: "trà, gốm, cái đẹp thường ngày",
    name: "tea · mind",
    icon: "motif-chen-tra.png",
  },
  {
    href: routes.thinhKhong,
    quote: "thực hành yoga",
    name: "thinh · không",
    icon: "motif-thien-toa.png",
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
  "như một mảnh vườn, nương theo mùa mà sống.",
  "mlf cũng chọn sống theo lẽ ở-yên.",
  "Không gieo nhu cầu, không vẽ ra hứa hẹn.",
  "Một chuyến đi, một điều mlf làm… khi lòng mình thấy thuận.",
  "Ở nhà, có Tâm, có Vũ, có Thuận — nương nhau mà làm, việc này rồi việc khác.",
  "Con đường này đi chậm. Nhưng nhà mộc chọn nó, vì chẳng biết cách nào khác để lời mình nói ra và việc mình đang làm, là một.",
];

export const veOYenIntroA = [
  "ở-yên là một cách ở lại, ngay giữa những điều không chọn được.",
  "Khác với ngồi yên một chỗ, ở-yên là những ngày vẫn đi làm, chiều vẫn vội đón con, có hôm còn kẹt giữa dòng xe giờ tan tầm, những tối một mình cặm cụi với deadline chưa xong. ở-yên nằm ngay trong điều thân quen ấy - chỉ khác, người ta không chạy trốn khỏi nó, mà an trú được, ngay ở đó.",
  "ở-yên không cần ta bỏ phố lên rừng để tìm một điều kiện lý tưởng hơn.",
  "ở-yên khi ta dám ngồi lại với mình, để cho mối rối đã âm ỉ trong lòng mấy hôm nay, được yên, không khuấy thêm nữa. Rồi tự nó, như bùn trong vại nước để qua đêm, chìm xuống đáy.",
  "Và giữa khoảng yên hiếm hoi ấy, người ta chợt nhận ra điều nọ điều kia, mà lâu lắm rồi, chẳng ai cho mình đủ tĩnh để nhớ lại.",
];

export const veMlfExits = [
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
    text: "Tôi đã tham gia 3 chuyến retreat ở Măng Đen và 3 chuyến tuần-du đó đây của mlf. Mỗi chuyến đều khác biệt, đều mới mẻ, không chuyến nào giống chuyến nào. Đó là vì từng thời điểm khác nhau, trạng thái tâm bạn đã khác, ngày hôm nay đã không còn như hôm trước và hôm sau đã tiến bộ hơn hôm nay. Đó chính là nét riêng biệt, không lẫn vào đâu được của mlf.",
    attribution: "Q.N · Sài Gòn · sau 3 chuyến retreat và 3 chuyến tuần-du",
  },
  {
    text: "Có những ngày ở nhà mộc, nước mắt con đã suýt rơi vì cảm giác được đón nhận và thấu cảm, thậm chí hơn cả bản thân con hiểu mình.",
    attribution: "K.T · lớp viết im lặng chữ nghĩa",
  },
];

export const vibeImages = [
  { id: "vibe-01", src: "vibe-01.webp", label: "ảnh · góc nhà mộc" },
  { id: "vibe-02", src: "vibe-02.webp", label: "ảnh · trang sổ tay" },
  { id: "vibe-04", src: "vibe-04.webp", label: "ảnh · buổi sáng" },
  { id: "vibe-06", src: "vibe-06.webp", label: "ảnh · hiên nhà" },
  { id: "vibe-07", src: "vibe-07.webp", label: "ảnh · góc nghỉ" },
  { id: "vibe-08", src: "vibe-08.webp", label: "ảnh · đọc sách" },
];

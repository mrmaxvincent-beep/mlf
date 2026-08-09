import { routes } from "@/lib/nav";

export const ngoLines = [
  "nhiều người nghĩ, sống giữa",
  "Măng Đen núi rừng đã là tự do bất tận.",
  "nhưng thật ra, có lúc lòng cũng chật.",
  "không phải vì thiếu,",
  "mà vì muốn được ở trong đời sống nhiều hơn.",
  "nên khi đặt bút viết ra hai chữ tuần-du,",
  "chúng tôi chỉ mong tạo ra",
  "một chuyến đi thật dịu dàng",
  "để thấy mình giữa",
  "những nhịp điệu biến hoá của đời sống.",
];

export const scheduleRows = [
  { time: "05:00 – 06:30", activity: "thời gian rỗng rang của bản thân · thiền, đi bộ, uống trà, tĩnh lặng" },
  { time: "06:30 – 07:30", activity: "ăn sáng" },
  { time: "07:30 – 17:00", activity: "ghé thăm các địa điểm văn hoá, kể chuyện & trà đàm", highlight: true },
  { time: "11:00 – 14:00", activity: "ăn trưa & nghỉ trưa" },
  { time: "17:00 – 19:00", activity: "ăn tối & về nơi nghỉ" },
  { time: "19:00", activity: "thời gian tự do · nghỉ ngơi, tự khám phá" },
];

export const kyList = [
  { num: "01", title: "bến chờ, bến đợi", places: "Hà Nội · Bắc Ninh · Phú Thọ · Ninh Bình", status: "đã đi qua", statusColor: "var(--color-stone)" },
  { num: "02", title: "qua miền tư lự", places: "Huế", status: "đã đi qua", statusColor: "var(--color-stone)" },
  { num: "03", title: "một nẻo Trúc Lâm", places: "Quảng Ninh · Bắc Giang · Hải Dương · Hưng Yên", status: "đã đi qua", statusColor: "var(--color-stone)" },
  { num: "04", title: "a pause in Saigon", places: "sắp tới", status: "sắp diễn ra", statusColor: "var(--color-moss)" },
];

export const testimonials = [
  { text: "các anh đã làm rất tốt, đây là chuyến tuần-du đầu tiên đôi lúc sẽ không diễn ra như dự định. nhưng đã giúp cho mọi người có một trải nghiệm không bao giờ quên.", attribution: "NGƯỜI THAM GIA · KỲ 01" },
  { text: "mỗi điểm đến đều có ấn tượng riêng sâu sắc. nhất là vùng đất Phú Thọ, cảm nhận rõ dòng chảy của cội nguồn tổ tiên — không chỉ đẹp mà còn thiêng liêng.", attribution: "NGƯỜI THAM GIA · KỲ 01" },
  { text: "sau chuyến đi này, em dần dần cảm nhận được mình là ai và mình cần phải làm gì trong cuộc đời này.", attribution: "NGƯỜI THAM GIA · KỲ 01" },
];

export const tuanDuSubnav = [
  { label: "tuần-du", href: routes.tuanDu },
  { label: "tuần-du tới", href: routes.tuanDuToi },
  { label: "chuỗi tuần-du", href: routes.chuoiTuanDu },
  { label: "người đi qua", href: routes.tuanDuBlog },
];

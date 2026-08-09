import { routes } from "@/lib/nav";

export const quickJumps = [
  { label: "khai tâm", href: routes.khaiTam },
  { label: "im lặng, chữ nghĩa", href: routes.imLangChuNghia },
  { label: "clari-tea", href: routes.clariTea },
  { label: "phía sáng", href: routes.phiaSang },
  { label: "nhất-hiện", href: routes.nhatHien },
];

export const practices = [
  { tag: "online retreat", name: "khai tâm", href: routes.khaiTam, desc: "về với sự rõ biết." },
  { tag: "khóa học viết", name: "từ im lặng đến chữ nghĩa", href: routes.imLangChuNghia, desc: "tìm lại mạch chữ của mình." },
  { tag: "chén trà tỏ tường", name: "clari-tea", href: routes.clariTea, desc: "ngồi xuống uống trà." },
  { tag: "trò chuyện", name: "phía sáng", href: routes.phiaSang, desc: "chuyện trò về phía cuối con đường." },
  { tag: "cộng đồng thực tập", name: "nhất-hiện", href: routes.nhatHien, desc: "trở về với ba phẩm chất tự nhiên nơi tâm: bình phàm · thuần tịnh · rõ biết." },
];

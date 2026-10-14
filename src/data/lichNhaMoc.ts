import { routes } from "@/lib/nav";

export type Program = { id: string; name: string; href: string };

/** `start`/`end` dạng YYYY-MM-DD; nếu chỉ biết tháng thì để `month` dạng YYYY-MM và bỏ trống start/end. */
export type CalEvent = {
  program: string;
  title: string;
  note?: string;
  start?: string;
  end?: string;
  month?: string;
  href?: string;
};

/** Chương trình thường nhật, đặt lúc nào cũng được — vẽ thành vạch liền suốt năm, ngắt ở các quãng nghỉ. */
export const ongoing: Program[] = [
  { id: "o-yen", name: "retreat ở-yên", href: routes.retreatOYen },
  { id: "stay-talk", name: "stay+talk", href: routes.stayTalk },
  { id: "khai-tam", name: "khai tâm", href: routes.khaiTam },
  { id: "phia-sang", name: "phía sáng", href: routes.phiaSang },
  { id: "clari-tea", name: "clari-tea", href: routes.clariTea },
  { id: "yoga-thuan-duong", name: "yoga online thuận dưỡng", href: routes.touchThuanDuong },
];

/** Những quãng nhà mộc nghỉ, vẽ thành dải phủ dọc qua mọi hàng. */
export type Closure = { label: string; title: string; note?: string; start: string; end: string };

export const closures: Closure[] = [
  { label: "nghỉ Tết", title: "nhà mộc nghỉ Tết Bính Ngọ", note: "25 tháng chạp – mùng 9 tháng giêng", start: "2026-02-12", end: "2026-02-25" },
  { label: "nghỉ Tết", title: "nhà mộc nghỉ Tết Đinh Mùi", note: "25 tháng chạp – mùng 9 tháng giêng", start: "2027-02-01", end: "2027-02-14" },
  { label: "nghỉ", title: "nhà mộc nghỉ tháng 10", note: "nghỉ trọn tháng", start: "2027-10-01", end: "2027-10-31" },
];

/** Thứ tự ở đây là thứ tự các hàng trên dải năm. */
export const programs: Program[] = [
  { id: "ham-duong", name: "retreat hàm-dưỡng", href: routes.retreatHamDuong },
  { id: "an-vui", name: "retreat an-vui", href: routes.retreatAnVui },
  { id: "trang-yen", name: "trăng-yên", href: routes.trangYen },
  { id: "cong-dong", name: "cộng đồng ở-yên", href: routes.congDongOYen },
  { id: "tuan-du", name: "tuần-du", href: routes.tuanDu },
  { id: "be-still", name: "be-still", href: routes.beStill },
  { id: "an-pham", name: "ấn phẩm", href: routes.sachOYen },
  { id: "podcast", name: "podcast ở-yên", href: routes.podcastOYen },
];

export const events: CalEvent[] = [
  { program: "an-pham", title: "mlf journal · quyển 01 · muôn nẻo về nhà", note: "phát hành ngày 30 tháng chạp", start: "2026-02-16", href: routes.journal },
  { program: "ham-duong", title: "retreat mùa xuân [77]", note: "xuân khẽ dưới tán rừng", start: "2026-03-13", end: "2026-03-17" },
  { program: "tuan-du", title: "tuần-du 03 · một nẻo Trúc Lâm", start: "2026-04-18", end: "2026-04-22" },
  { program: "ham-duong", title: "retreat mùa hạ [78]", note: "hạ về trên dòng nước mỏng", start: "2026-06-12", end: "2026-06-16" },
  { program: "be-still", title: "im lặng chữ nghĩa", note: "lớp học viết online", start: "2026-09-05", end: "2026-10-05", href: routes.imLangChuNghia },
  { program: "an-pham", title: "tuyển tập tin nhắn lúc 5 giờ sáng", note: "sách ở-yên · miễn phí", month: "2026-09", href: routes.sachOYen },
  { program: "ham-duong", title: "retreat mùa thu [79]", note: "mùa thay lá dịu", start: "2026-09-11", end: "2026-09-15" },
  { program: "tuan-du", title: "tuần-du 04 · a pause in Saigon", start: "2026-10-10", end: "2026-10-11" },
  { program: "an-pham", title: "lịch tea·mind 2027", note: "chén trà tâm", month: "2026-11", href: routes.teaMindLich },
  { program: "ham-duong", title: "retreat mùa đông [80]", note: "trắng trời đông sang", start: "2026-12-11", end: "2026-12-15" },
  { program: "be-still", title: "im lặng chữ nghĩa", note: "lớp học viết online", start: "2026-12-05", end: "2027-01-05", href: routes.imLangChuNghia },

  { program: "an-pham", title: "mlf journal · quyển 02 · xanh lại", note: "phát hành 18:00, ngày 30 tháng chạp", start: "2027-02-05", href: routes.journal },
  { program: "tuan-du", title: "tuần-du 05 · chuông vọng đôi bờ", start: "2027-03-26", end: "2027-03-30", href: routes.tuanDu05 },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-04-05", end: "2027-04-09" },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-08-02", end: "2027-08-06" },
  { program: "an-pham", title: "lịch tea·mind 2028", note: "chén trà tâm", month: "2027-11", href: routes.teaMindLich },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-12-06", end: "2027-12-10" },

  // meet-up cộng đồng ở-yên: chủ nhật đầu tiên mỗi tháng
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-01-03" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-02-07" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-03-07" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-04-04" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-05-02" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-06-06" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-07-04" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-08-01" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-09-05" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-10-03" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-11-07" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-12-05" },

  // podcast ở-yên: ngày 1 mỗi tháng
  { program: "podcast", title: "podcast ở-yên · tập tháng 01", note: "phát hành ngày 1 hằng tháng", start: "2027-01-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 02", note: "phát hành ngày 1 hằng tháng", start: "2027-02-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 03", note: "phát hành ngày 1 hằng tháng", start: "2027-03-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 04", note: "phát hành ngày 1 hằng tháng", start: "2027-04-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 05", note: "phát hành ngày 1 hằng tháng", start: "2027-05-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 06", note: "phát hành ngày 1 hằng tháng", start: "2027-06-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 07", note: "phát hành ngày 1 hằng tháng", start: "2027-07-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 08", note: "phát hành ngày 1 hằng tháng", start: "2027-08-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 09", note: "phát hành ngày 1 hằng tháng", start: "2027-09-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 10", note: "phát hành ngày 1 hằng tháng", start: "2027-10-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 11", note: "phát hành ngày 1 hằng tháng", start: "2027-11-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 12", note: "phát hành ngày 1 hằng tháng", start: "2027-12-01" },

  // hàm-dưỡng 2027: mới biết tháng, ngày cụ thể cập nhật sau
  { program: "ham-duong", title: "retreat mùa xuân", note: "ngày cụ thể sẽ cập nhật", month: "2027-03" },
  { program: "ham-duong", title: "retreat mùa hạ", note: "ngày cụ thể sẽ cập nhật", month: "2027-06" },
  { program: "ham-duong", title: "retreat mùa thu", note: "ngày cụ thể sẽ cập nhật", month: "2027-09" },
  { program: "ham-duong", title: "retreat mùa đông", note: "ngày cụ thể sẽ cập nhật", month: "2027-12" },

  // đêm rằm hằng tháng (ngày 15 âm lịch), tính theo âm lịch Việt Nam
  { program: "trang-yen", title: "trăng-yên · rằm tháng 2", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-03-22" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 3", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-04-21" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 4", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-05-20" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 5", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-06-19" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 6", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-07-18" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 7", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-08-16" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 8", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-09-15" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 10", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-11-12" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 11", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-12-12" },
];

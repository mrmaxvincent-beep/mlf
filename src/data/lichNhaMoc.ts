import { routes } from "@/lib/nav";

/** `ongoing`: hoạt động quanh năm, đặt lúc nào cũng được — vẽ thành vạch liền suốt năm, ngắt ở các quãng nghỉ. */
export type Program = { id: string; name: string; href?: string; group?: string; ongoing?: boolean };

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

/** Những quãng nhà mộc nghỉ, vẽ thành dải phủ dọc qua mọi hàng. */
export type Closure = { label: string; title: string; note?: string; start: string; end: string };

export const closures: Closure[] = [
  { label: "nghỉ Tết", title: "nhà mộc nghỉ Tết Bính Ngọ", note: "25 tháng chạp – mùng 9 tháng giêng", start: "2026-02-12", end: "2026-02-25" },
  { label: "nghỉ Tết", title: "nhà mộc nghỉ Tết Đinh Mùi", note: "25 tháng chạp – mùng 9 tháng giêng", start: "2027-02-01", end: "2027-02-14" },
  { label: "nghỉ an cư", title: "nhà mộc nghỉ an cư", note: "nghỉ trọn tháng 10", start: "2027-10-01", end: "2027-10-31" },
];

/** Nhóm hàng trên dải năm, theo đúng các nhóm trên menu của site. */
export const groups = [
  { id: "hoat-dong", name: "hoạt động" },
  { id: "cong-dong", name: "cộng đồng" },
  { id: "thu-vien", name: "thư viện" },
];

/** Thứ tự trong mỗi nhóm là thứ tự các hàng trên dải năm (theo thứ tự trên menu của site). */
export const programs: Program[] = [
  { id: "stay-talk", name: "stay+talk", href: routes.stayTalk, group: "hoat-dong", ongoing: true },
  { id: "nguoi-trong-nha", name: "người-trong-nhà", href: routes.nguoiTrongNha, group: "hoat-dong", ongoing: true },
  { id: "o-yen", name: "retreat ở-yên", href: routes.retreatOYen, group: "hoat-dong", ongoing: true },
  { id: "ham-duong", name: "retreat hàm-dưỡng", href: routes.retreatHamDuong, group: "hoat-dong" },
  { id: "an-vui", name: "retreat an-vui", href: routes.retreatAnVui, group: "hoat-dong" },
  { id: "tuan-du", name: "tuần-du", href: routes.tuanDu, group: "hoat-dong" },
  { id: "khai-tam", name: "khai tâm", href: routes.khaiTam, group: "hoat-dong", ongoing: true },
  { id: "be-still", name: "im lặng chữ nghĩa", href: routes.imLangChuNghia, group: "hoat-dong" },
  { id: "clari-tea", name: "clari-tea", href: routes.clariTea, group: "hoat-dong", ongoing: true },
  { id: "phia-sang", name: "phía sáng", href: routes.phiaSang, group: "hoat-dong", ongoing: true },
  { id: "yoga-thuan-duong", name: "yoga thuận dưỡng", href: routes.touchThuanDuong, group: "hoat-dong", ongoing: true },
  { id: "nhat-hien", name: "nhất-hiện", href: routes.nhatHien, group: "cong-dong" },
  { id: "cong-dong", name: "cộng đồng ở-yên", href: routes.congDongOYen, group: "cong-dong" },
  { id: "trang-yen", name: "trăng-yên", href: routes.trangYen, group: "cong-dong" },
  { id: "an-pham", name: "ấn phẩm", group: "thu-vien" },
  { id: "podcast", name: "podcast", href: routes.podcastOYen, group: "thu-vien" },
];

export const ongoing = programs.filter((p) => p.ongoing);

export const events: CalEvent[] = [
  { program: "an-pham", title: "mlf journal · quyển 01 · muôn nẻo về nhà", note: "phát hành ngày 30 tháng chạp", start: "2026-02-16", href: routes.journal },
  { program: "ham-duong", title: "retreat mùa xuân [77]", note: "xuân khẽ dưới tán rừng", start: "2026-03-13", end: "2026-03-17" },
  { program: "tuan-du", title: "tuần-du 03 · một nẻo Trúc Lâm", start: "2026-04-18", end: "2026-04-22" },
  { program: "ham-duong", title: "retreat mùa hạ [78]", note: "hạ về trên dòng nước mỏng", start: "2026-06-12", end: "2026-06-16" },
  { program: "be-still", title: "lớp học viết khóa 2", note: "online", start: "2026-09-05", end: "2026-10-05", href: routes.imLangChuNghia },
  { program: "an-pham", title: "tuyển tập tin nhắn lúc 5 giờ sáng", note: "sách ở-yên · miễn phí", month: "2026-09", href: routes.sachOYen },
  { program: "ham-duong", title: "retreat mùa thu [79]", note: "mùa thay lá dịu", start: "2026-09-11", end: "2026-09-15" },
  { program: "tuan-du", title: "tuần-du 04 · a pause in Saigon", start: "2026-10-10", end: "2026-10-11" },
  { program: "an-pham", title: "lịch tea·mind 2027", note: "chén trà tâm", month: "2026-11", href: routes.teaMindLich + "?nam=2027" },
  { program: "ham-duong", title: "retreat mùa đông [80]", note: "trắng trời đông sang", start: "2026-12-11", end: "2026-12-15" },
  { program: "be-still", title: "lớp học viết khóa 3", note: "online", start: "2026-12-05", end: "2027-01-05", href: routes.imLangChuNghia },

  { program: "an-pham", title: "mlf journal · quyển 02 · xanh lại", note: "phát hành 18:00, ngày 30 tháng chạp", start: "2027-02-05", href: routes.journal },
  { program: "tuan-du", title: "tuần-du 05 · chuông vọng đôi bờ", start: "2027-03-26", end: "2027-03-30", href: routes.tuanDu05 },
  { program: "tuan-du", title: "tuần-du 06 · điệu hoà phù sa", note: "An Giang – Thất Sơn · ngày cụ thể sẽ cập nhật", month: "2027-10", href: routes.chuoiTuanDu },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-04-05", end: "2027-04-09" },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-08-02", end: "2027-08-06" },
  { program: "an-pham", title: "lịch tea·mind 2028", note: "chén trà tâm", month: "2027-11", href: routes.teaMindLich },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-12-06", end: "2027-12-10" },

  // meet-up cộng đồng ở-yên: 2 tháng một lần, chủ nhật đầu tháng
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "2 tháng một lần · chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-01-03" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "2 tháng một lần · chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-03-07" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "2 tháng một lần · chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-05-02" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "2 tháng một lần · chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-07-04" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "2 tháng một lần · chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-09-05" },
  { program: "cong-dong", title: "online meet-up cộng đồng ở-yên", note: "2 tháng một lần · chủ nhật đầu tháng · 20:00 – 21:30", start: "2027-11-07" },

  // podcast ở-yên: ngày 1, hai tháng một tập, từ 01.01.2027
  { program: "podcast", title: "podcast ở-yên · tập tháng 01", note: "phát hành ngày 1 · hai tháng một tập", start: "2027-01-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 03", note: "phát hành ngày 1 · hai tháng một tập", start: "2027-03-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 05", note: "phát hành ngày 1 · hai tháng một tập", start: "2027-05-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 07", note: "phát hành ngày 1 · hai tháng một tập", start: "2027-07-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 09", note: "phát hành ngày 1 · hai tháng một tập", start: "2027-09-01" },
  { program: "podcast", title: "podcast ở-yên · tập tháng 11", note: "phát hành ngày 1 · hai tháng một tập", start: "2027-11-01" },

  // nhất-hiện 2027: các giai đoạn nối tiếp nhau, vẽ thành dải có ghi tên
  { program: "nhat-hien", title: "tuyển sinh", start: "2027-01-01", end: "2027-02-28" },
  { program: "nhat-hien", title: "thượng ngươn", start: "2027-03-01", end: "2027-05-31" },
  { program: "nhat-hien", title: "trung ngươn", start: "2027-06-01", end: "2027-08-31" },
  { program: "nhat-hien", title: "hạ ngươn", start: "2027-09-01", end: "2027-11-30" },
  { program: "nhat-hien", title: "hoàn ngươn", start: "2027-12-01", end: "2028-02-29" },

  // lớp học viết im lặng chữ nghĩa 2027
  { program: "be-still", title: "lớp học viết khóa 4", note: "online", start: "2027-06-05", end: "2027-07-05", href: routes.imLangChuNghia },
  { program: "be-still", title: "lớp học viết khóa 5", note: "online", start: "2027-10-02", end: "2027-11-02", href: routes.imLangChuNghia },

  // hàm-dưỡng 2027: mới biết tháng, ngày cụ thể cập nhật sau
  { program: "ham-duong", title: "retreat mùa xuân", note: "ngày cụ thể sẽ cập nhật", month: "2027-03" },
  { program: "ham-duong", title: "retreat mùa hạ", note: "ngày cụ thể sẽ cập nhật", month: "2027-06" },
  { program: "ham-duong", title: "retreat mùa thu", note: "ngày cụ thể sẽ cập nhật", month: "2027-09" },
  { program: "ham-duong", title: "retreat mùa đông", note: "ngày cụ thể sẽ cập nhật", month: "2027-12" },

  // đêm rằm (ngày 15 âm lịch), 2 tháng một lần từ tháng 4.2027 (bỏ tháng 10 nghỉ an cư), tính theo âm lịch Việt Nam
  { program: "trang-yen", title: "trăng-yên · rằm tháng 3", note: "2 tháng một lần · 18:00 – 21:00 · vườn mlf Huế", start: "2027-04-21" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 5", note: "2 tháng một lần · 18:00 – 21:00 · vườn mlf Huế", start: "2027-06-19" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 7", note: "2 tháng một lần · 18:00 – 21:00 · vườn mlf Huế", start: "2027-08-16" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 11", note: "2 tháng một lần · 18:00 – 21:00 · vườn mlf Huế", start: "2027-12-12" },
];

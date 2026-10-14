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

/** Thứ tự ở đây là thứ tự các hàng trên dải năm. */
export const programs: Program[] = [
  { id: "ham-duong", name: "retreat hàm-dưỡng", href: routes.retreatHamDuong },
  { id: "an-vui", name: "retreat an-vui", href: routes.retreatAnVui },
  { id: "trang-yen", name: "trăng-yên", href: routes.trangYen },
  { id: "tuan-du", name: "tuần-du", href: routes.tuanDu },
  { id: "be-still", name: "be-still", href: routes.beStill },
  { id: "journal", name: "mlf journal", href: routes.journal },
];

export const events: CalEvent[] = [
  { program: "journal", title: "quyển 01 · muôn nẻo về nhà", note: "phát hành ngày 30 tháng chạp", start: "2026-02-16" },
  { program: "ham-duong", title: "retreat mùa xuân [77]", note: "xuân khẽ dưới tán rừng", start: "2026-03-13", end: "2026-03-17" },
  { program: "tuan-du", title: "tuần-du 03 · một nẻo Trúc Lâm", start: "2026-04-18", end: "2026-04-22" },
  { program: "ham-duong", title: "retreat mùa hạ [78]", note: "hạ về trên dòng nước mỏng", start: "2026-06-12", end: "2026-06-16" },
  { program: "be-still", title: "im lặng chữ nghĩa", note: "lớp học viết online", start: "2026-09-05", end: "2026-10-05", href: routes.imLangChuNghia },
  { program: "ham-duong", title: "retreat mùa thu [79]", note: "mùa thay lá dịu", start: "2026-09-11", end: "2026-09-15" },
  { program: "tuan-du", title: "tuần-du 04 · a pause in Saigon", start: "2026-10-10", end: "2026-10-11" },
  { program: "ham-duong", title: "retreat mùa đông [80]", note: "trắng trời đông sang", start: "2026-12-11", end: "2026-12-15" },
  { program: "be-still", title: "im lặng chữ nghĩa", note: "lớp học viết online", start: "2026-12-05", end: "2027-01-05", href: routes.imLangChuNghia },

  { program: "journal", title: "quyển 02 · xanh lại", note: "phát hành 18:00, ngày 30 tháng chạp", start: "2027-02-05" },
  { program: "tuan-du", title: "tuần-du 05 · chuông vọng đôi bờ", start: "2027-03-26", end: "2027-03-30", href: routes.tuanDu05 },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-04-05", end: "2027-04-09" },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-08-02", end: "2027-08-06" },
  { program: "an-vui", title: "retreat an-vui", note: "Huế", start: "2027-12-06", end: "2027-12-10" },

  // đêm rằm hằng tháng (ngày 15 âm lịch), tính theo âm lịch Việt Nam
  { program: "trang-yen", title: "trăng-yên · rằm tháng 2", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-03-22" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 3", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-04-21" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 4", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-05-20" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 5", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-06-19" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 6", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-07-18" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 7", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-08-16" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 8", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-09-15" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 9", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-10-14" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 10", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-11-12" },
  { program: "trang-yen", title: "trăng-yên · rằm tháng 11", note: "18:00 – 21:00 · vườn mlf Huế", start: "2027-12-12" },
];

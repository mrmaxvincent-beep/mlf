// Central route map for the site. Slugs are clean ASCII (no diacritics/spaces)
// even though the design source file names use Vietnamese names — this keeps
// URLs readable and portable. Update here once a page.tsx lands at that route.
export const routes = {
  home: "/",
  ngayHien: "/ngay-hien",
  giua: "/giua",
  tuanDu: "/tuan-du",
  tuanDuToi: "/tuan-du/toi",
  tuanDuBlog: "/tuan-du/blog",
  beStill: "/be-still",
  khaiTam: "/be-still/khai-tam",
  imLangChuNghia: "/be-still/im-lang-chu-nghia",
  clariTea: "/be-still/clari-tea",
  phiaSang: "/be-still/phia-sang",
  nhatHien: "/be-still/nhat-hien",
  teaMind: "/tea-mind",
  teaMindTra: "/tea-mind/tra",
  teaMindGom: "/tea-mind/gom",
  teaMindTranh: "/tea-mind/tranh",
  teaMindLich: "/tea-mind/lich",
  thinhKhong: "/thinh-khong",
  thuVien: "/thu-vien",
  motNgayOYen: "/mot-ngay-o-yen",
  congDongOYen: "/cong-dong-o-yen",
  veMlf: "/ve-mlf",
  bienThuChoHy: "/bien-thu-cho-hy",
  chuyenVe: "/chuyen-ve",
  journal: "/journal",
  khoLoiNhanOYen: "/kho-loi-nhan-o-yen",
  soTayKhach: "/so-tay-khach",
  deMucChiTiet: "/de-muc-chi-tiet",
  daoMotVong: "/dao-mot-vong",
  luuBut: "/luu-but",
  stayTalk: "/stay-talk",
  retreatOYen: "/retreat/o-yen",
  retreatOYenLichTrinh: "/retreat/o-yen/lich-trinh",
  retreatHamDuong: "/retreat/ham-duong",
  retreatHamDuongLichTrinh: "/retreat/ham-duong/lich-trinh",
  retreatAnVui: "/retreat/an-vui",
} as const;

export const hoatDongMenu = [
  { label: "ngày-hiền", href: routes.ngayHien },
  { label: "giữa · middle", href: routes.giua },
  { label: "tuần-du", href: routes.tuanDu },
  { divider: true as const },
  { label: "be-still", href: routes.beStill },
  { label: "tea · mind", href: routes.teaMind },
  { label: "thinh · không", href: routes.thinhKhong },
];

export const congDongMenu = [
  { label: "một ngày ở-yên", href: routes.motNgayOYen },
  { label: "cộng đồng ở-yên", href: routes.congDongOYen },
];

export const mlfMenu = [
  { label: "về mlf", href: routes.veMlf },
  { label: "biên-thư-cho-Hy", href: routes.bienThuChoHy },
  { label: "chuyện-về", href: routes.chuyenVe },
  { label: "mlf journal", href: routes.journal },
];

export const programsPanel = [
  {
    group: "ngày-hiền",
    items: [
      { label: "stay+talk", href: routes.stayTalk },
      { label: "retreat ở-yên", href: routes.retreatOYen },
      { label: "retreat hàm-dưỡng", href: routes.retreatHamDuong },
      { label: "retreat an-vui", href: routes.retreatAnVui },
    ],
  },
  {
    group: "tuần-du",
    items: [{ label: "tuần-du tới", href: routes.tuanDuToi }],
  },
  {
    group: "be-still",
    items: [
      { label: "khai tâm", href: routes.khaiTam },
      { label: "im lặng, chữ nghĩa", href: routes.imLangChuNghia },
      { label: "clari-tea", href: routes.clariTea },
      { label: "phía sáng", href: routes.phiaSang },
      { label: "nhất-hiện", href: routes.nhatHien },
    ],
  },
  {
    group: "tea · mind",
    items: [
      { label: "trà", href: routes.teaMindTra },
      { label: "gốm", href: routes.teaMindGom },
      { label: "tranh", href: routes.teaMindTranh },
      { label: "lịch", href: routes.teaMindLich },
    ],
  },
  {
    group: "thinh · không",
    items: [{ label: "thinh · không", href: routes.thinhKhong }],
  },
];

export const mobileMenuSections = [
  {
    heading: "hoạt động",
    items: [
      { label: "ngày-hiền", href: routes.ngayHien },
      { label: "giữa · middle", href: routes.giua },
      { label: "tuần-du", href: routes.tuanDu },
      { label: "be-still", href: routes.beStill },
      { label: "tea · mind", href: routes.teaMind },
      { label: "thinh · không", href: routes.thinhKhong },
    ],
  },
  { heading: "thư viện", items: [{ label: "thư viện ở-yên", href: routes.thuVien }] },
  {
    heading: "cộng đồng",
    items: [
      { label: "một ngày ở-yên", href: routes.motNgayOYen },
      { label: "cộng đồng ở-yên", href: routes.congDongOYen },
    ],
  },
  {
    heading: "mlf",
    items: [
      { label: "về mlf", href: routes.veMlf },
      { label: "biên-thư-cho-Hy", href: routes.bienThuChoHy },
      { label: "chuyện-về", href: routes.chuyenVe },
      { label: "mlf journal", href: routes.journal },
    ],
  },
];

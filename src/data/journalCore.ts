export type CoreMember = {
  name: string;
  /** Ảnh chân dung. Để trống → avatar hiện chữ cái đầu của tên, khi có ảnh chỉ cần điền đường dẫn. */
  photo?: string;
};

/** Những người là thành viên nòng cốt của các số mlf journal — thứ tự hiển thị. */
export const coreMembers: CoreMember[] = [
  { name: "Khanh Trần", photo: "/assets/khanhtran.jpg" },
  { name: "Hồng Ân", photo: "/assets/hongan.jpg" },
  { name: "Vân Chi", photo: "/assets/vanchi.jpeg" },
  { name: "Gia Linh", photo: "/assets/gialinh.jpg" },
  { name: "Bé Thi", photo: "/assets/bethi.jpg" },
  { name: "Giang Đỗ" },
  { name: "Lan Chi" },
  { name: "Thành Tâm", photo: "/assets/thanhtam.jpg" },
  { name: "Lê Vũ", photo: "/assets/duongvu.jpg" },
  { name: "Văn Thuận", photo: "/assets/vanthuan.jpg" },
];

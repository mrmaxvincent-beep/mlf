export type CoreMember = {
  name: string;
  /** Ảnh chân dung. Để trống → avatar hiện chữ cái đầu của tên, khi có ảnh chỉ cần điền đường dẫn. */
  photo?: string;
};

/** Những người là thành viên nòng cốt của các số mlf journal — thứ tự hiển thị. */
export const coreMembers: CoreMember[] = [
  { name: "Khanh Trần" },
  { name: "Hồng Ân" },
  { name: "Vân Chi" },
  { name: "Gia Linh" },
  { name: "Bé Thi", photo: "/assets/bethi.jpg" },
  { name: "Giang Đỗ" },
  { name: "Thành Tâm", photo: "/assets/thanhtam.jpg" },
  { name: "Vũ", photo: "/assets/vu.webp" },
  { name: "Văn Thuận", photo: "/assets/vanthuan.jpg" },
];

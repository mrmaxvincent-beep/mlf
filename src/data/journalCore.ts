export type CoreMember = {
  name: string;
  /** Ảnh chân dung. Để trống → avatar hiện chữ cái đầu của tên, khi có ảnh chỉ cần điền đường dẫn. */
  photo?: string;
};

/** Những người là thành viên nòng cốt của các số mlf journal — thứ tự hiển thị. */
export const coreMembers: CoreMember[] = [
  { name: "Tâm", photo: "/assets/tam.webp" },
  { name: "Vũ", photo: "/assets/vu.webp" },
  { name: "Thuận", photo: "/assets/thuan.webp" },
  { name: "Hồng Ân" },
  { name: "Khanh Trần" },
  { name: "Vân Chi" },
  { name: "Gia Linh" },
  { name: "Lê Thi" },
];

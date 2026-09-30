export type Message = {
  id: string;
  text: string;
  /** Ảnh wallpaper thật (tỉ lệ dọc điện thoại). Để trống → hiện thẻ chữ dựng bằng CSS thay ảnh. */
  src?: string;
};

/** Mỗi lời nhắc là một tấm hình nền điện thoại — demo minh họa (chữ "ở-yên" tạm thay ảnh thật), thay bằng ảnh + lời nhắc thật khi có. */
export const messages: Message[] = [
  { id: "01", text: "ở-yên" },
  { id: "02", text: "ở-yên" },
  { id: "03", text: "ở-yên" },
  { id: "04", text: "ở-yên" },
  { id: "05", text: "ở-yên" },
  { id: "06", text: "ở-yên" },
  { id: "07", text: "ở-yên" },
  { id: "08", text: "ở-yên" },
  { id: "09", text: "ở-yên" },
  { id: "10", text: "ở-yên" },
  { id: "11", text: "ở-yên" },
  { id: "12", text: "ở-yên" },
  { id: "13", text: "ở-yên" },
  { id: "14", text: "ở-yên" },
  { id: "15", text: "ở-yên" },
  { id: "16", text: "ở-yên" },
];

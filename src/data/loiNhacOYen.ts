export type Message = {
  id: string;
  text: string;
  /** Ảnh wallpaper thật (tỉ lệ dọc điện thoại). Để trống → hiện thẻ chữ dựng bằng CSS thay ảnh. */
  src?: string;
};

/** Mỗi lời nhắc là một tấm hình nền điện thoại — demo minh họa, thay bằng ảnh thật khi có. */
export const messages: Message[] = [
  { id: "01", text: "chậm lại một chút, cũng không sao." },
  { id: "02", text: "ở-yên, không phải là không làm gì." },
  { id: "03", text: "hơi thở này, chỉ có một lần." },
  { id: "04", text: "để tâm được yên, trước khi vội vàng." },
  { id: "05", text: "một khoảng dừng, cũng là một câu trả lời." },
  { id: "06", text: "bạn không cần phải ổn ngay bây giờ." },
  { id: "07", text: "ngồi xuống, để nghe rõ chính mình." },
  { id: "08", text: "hôm nay, chỉ cần vừa đủ." },
];

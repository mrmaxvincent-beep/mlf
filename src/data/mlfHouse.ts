export const contactEmail = "hello@moclittlefarm.com";

/** Thư soạn sẵn: tiêu đề + vài dòng gợi ý để người gửi chỉ cần điền thêm. */
export type MailDraft = { subject: string; body: string };

/** Mở khung soạn thư của Gmail trên web (phần lớn người dùng dùng Gmail). */
export function gmailLink({ subject, body }: MailDraft) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Dành cho ai dùng ứng dụng mail cài trên máy (Outlook, Mail…). */
export function mailtoLink({ subject, body }: MailDraft) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const sign = "\n\nCảm ơn nhà mộc.";

export const drafts = {
  gioiThieu: (who?: string): MailDraft => ({
    subject: who ? `xin được giới thiệu: ${who}` : "xin được giới thiệu",
    body: `Chào nhà mộc,\n\nMình tên là: \nMình đang sống ở: \nMình muốn được giới thiệu với: ${who ?? "(một người, hoặc ai đó cùng nơi ở / cùng nghề)"}\nVì sao mình muốn gặp: ${sign}`,
  }),
  gopTay: (task: string): MailDraft => ({
    subject: `góp tay: ${task}`,
    body: `Chào nhà mộc,\n\nMình tên là: \nMình muốn góp tay cho việc: ${task}\nMình có thể góp bằng: \nThời gian mình có: ${sign}`,
  }),
  deXuat: (): MailDraft => ({
    subject: "đề xuất một việc cần góp tay",
    body: `Chào nhà mộc,\n\nMình tên là: \nViệc mình muốn rủ mọi người cùng làm: \nVì sao: \nĐang cần những gì: \nKhi nào: ${sign}`,
  }),
  nguoiCuaNha: (): MailDraft => ({
    subject: "mình là người của nhà",
    body: `Chào nhà mộc,\n\nMình tên là: \nMình gặp mộc vào: \nĐiều mình đã góp cho mộc: ${sign}`,
  }),
};

export const hero = {
  title: "mlf house",
  tagline: "những người làm nên mộc",
};

export const ghiNhan = {
  title: "ghi nhận",
};

export type Person = {
  id: string;
  name: string;
  place: string;
  job: string;
  /** mùa và năm gặp mộc, vd "mùa mưa 2023" */
  season: string;
  /** thứ tự theo mùa đến (cũ trước) */
  order: number;
  /** nơi gặp mộc, vd "Măng Đen" */
  metAt?: string;
  /** để trống nếu người ấy không muốn để ảnh; ảnh hiện trắng đen */
  img?: string;
  contributed: string;
  quote?: string;
  shares: string[];
};

/**
 * Danh sách người của nhà. Hiện là các ô mẫu để giữ chỗ, thay bằng người thật khi đã được từng người đồng ý.
 * Mỗi người: tên, nơi sống, nghề, mùa gặp mộc, điều đã góp, một câu chính người ấy viết, điều có thể chia sẻ.
 */
export const people: Person[] = Array.from({ length: 8 }, (_, i) => ({
  id: `mau-${i + 1}`,
  name: "[họ tên]",
  place: "[nơi sống]",
  job: "[nghề]",
  season: "mùa [mùa] [năm]",
  order: i,
  metAt: "[nơi gặp]",
  contributed: "[Vài dòng nhà mộc kể về điều người ấy đã góp, kể như kể chuyện, không liệt kê thành tích.]",
  quote: "[Một câu chính người ấy viết.]",
  shares: ["[điều có thể chia sẻ]"],
}));

export const ketNoi = {
  title: "kết nối",
  intro: "Bạn có thể tìm người theo nơi ở, theo nghề, hay theo điều họ có thể chia sẻ. Người ở Huế biết ai cũng đang ở Huế, người làm kiến trúc gặp được người cùng nghề…",
  rule: "Nhà không để số điện thoại hay email công khai. Muốn gặp ai, bạn nhắn mlf, mlf hỏi ý người kia rồi mới giới thiệu. Danh sách này không dùng để mời chào hay bán hàng.",
  offline: "Gặp nhau ngoài đời thì vẫn quý hơn, ở trăng-yên mỗi tháng tại Huế, ở các vòng-trà-tâm, hay ở một bữa cơm theo vùng mỗi năm một lần.",
};

export type Invitation = {
  id: string;
  title: string;
  status: "open" | "done";
  why: string;
  needs: string;
  how: string;
  form: string;
  closes: string;
};

export const gopTay = {
  title: "góp tay",
  intro: "Đây là chỗ mlf đặt những việc đang cần thêm người, và bạn cũng có thể đề xuất việc của mình. Mỗi lời mời ghi rõ việc gì, vì sao làm, đang cần gì, góp bằng cách nào, có thù lao hay là góp tay, và khi nào khép lại.",
};

export const invitations: Invitation[] = [
  {
    id: "mlf-hue-2027",
    title: "dựng mlf ở Huế, năm 2027",
    status: "open",
    why: "[vài dòng về ý nghĩa của việc này]",
    needs: "[người, chuyên môn, tài nguyên, tài chính]",
    how: "[cách tham gia]",
    form: "[có thù lao / góp tay]",
    closes: "[ngày]",
  },
];

export const closing = "Nếu bạn nghĩ mình là người của nhà mà chưa thấy tên ở đây, cứ nhắn nhà mộc một tiếng.";

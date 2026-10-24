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
  thanks: "Những người có mối liên hệ sâu sắc và đã đồng hành cùng mlf qua thời gian. Xin gửi lời cảm ơn chân thành tới những người bạn của mlf!",
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
  intro: "Để những người cùng kết nối với mlf có thể hữu duyên gặp gỡ nhau. Bạn có thể tìm người theo nơi ở, theo nghề, hay theo điều họ có thể chia sẻ.",
  rule: "Nhà không để số điện thoại hay email công khai. Muốn gặp ai, bạn nhắn mlf, mlf hỏi ý người kia rồi mới giới thiệu. Danh sách này không dùng để mời chào hay bán hàng.",
  circle: "Xin lưu ý: chúng tôi chỉ giới thiệu những người trong mlf circle với nhau (tức đã từng có kết nối với nhà mộc).",
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
  intro: "Đây là chỗ mlf đặt những việc đang cần thêm người góp tay, và bạn cũng có thể đề xuất việc của mình.",
};

/** Ba lời mời dưới đây là nội dung minh hoạ để xem bố cục, thay bằng lời mời thật trước khi dùng. */
export const invitations: Invitation[] = [
  {
    id: "mlf-hue-2027",
    title: "dựng mlf ở Huế, năm 2027",
    status: "open",
    why: "Một nếp nhà thứ hai để người ở miền Trung có chỗ về ở-yên, không phải đi tận lên Măng Đen.",
    needs: "kiến trúc sư, thợ mộc, gỗ cũ còn dùng được, tài chính theo từng đợt",
    how: "góp công trong những đợt dựng nhà, góp vật liệu, hoặc góp tài chính",
    form: "góp tay · có thù lao cho thợ chính",
    closes: "30.06.2027",
  },
  {
    id: "dich-sach-5am",
    title: "dịch sách “5am” sang tiếng Anh",
    status: "open",
    why: "Để bạn bè ở xa, không đọc được tiếng Việt, cũng chạm được vào những buổi sáng ở-yên.",
    needs: "người dịch Việt–Anh, một người biên tập tiếng Anh",
    how: "nhận dịch một vài chương, hoặc đọc và góp ý bản dịch",
    form: "góp tay",
    closes: "31.03.2027",
  },
  {
    id: "chan-dung-mlf-house",
    title: "chụp chân dung cho mlf house",
    status: "open",
    why: "Để những người của nhà có một tấm ảnh giản dị trên trang ghi nhận, chụp ở chính nơi họ đang sống.",
    needs: "người chụp ảnh ở Huế, Hà Nội, Sài Gòn",
    how: "chụp vài người của nhà ở thành phố bạn sống, ánh sáng tự nhiên",
    form: "có thù lao nhỏ",
    closes: "15.01.2027",
  },
];

export const closing = "Nếu bạn nghĩ mình là người của nhà mà chưa thấy tên ở đây, cứ nhắn nhà mộc một tiếng.";

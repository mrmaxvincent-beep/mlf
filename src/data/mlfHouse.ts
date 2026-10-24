export const contactEmail = "hello@moclittlefarm.com";

/** Thư soạn sẵn: tiêu đề + vài dòng gợi ý để người gửi chỉ cần điền thêm. */
export type MailDraft = { subject: string; body: string };

/** Mở ứng dụng mail với thư đã soạn sẵn (người nhận, tiêu đề, vài dòng gợi ý). */
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
  /** mỗi phần tử là một đoạn */
  thanks: [
    "Mỗi người đến với mlf bằng một cách khác nhau. Có người đã đồng hành từ những ngày đầu, có người góp sức trong một dự án, có người nâng đỡ Mộc bằng chuyên môn, nguồn lực hay một sự hiện diện đúng lúc.",
    "Chúng tôi muốn lưu lại những gương mặt ấy như một lời cảm ơn - dành cho những người đã góp một phần của mình để Mộc có thể tiếp tục lớn lên.",
  ],
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
  contributed: "[Vài dòng nhà mộc kể về điều người ấy đã góp.]",
  quote: "[Một câu chính người ấy viết.]",
  shares: ["[những chủ đề tôi có thể chia sẻ]"],
}));

export const ketNoi = {
  title: "kết nối",
  intro: "Để những người cùng kết nối với mlf có thể hữu duyên gặp gỡ nhau. Bạn có thể tìm người theo nơi ở, theo nghề, hay theo điều họ có thể chia sẻ.",
  rule: "Nhà không để số điện thoại hay email công khai. Muốn gặp ai, bạn nhắn mlf bằng cách bấm vào nút Xin được giới thiệu ở profile. mlf sẽ hỏi ý người kia rồi mới giới thiệu mọi người qua mail. Danh sách này không dùng để mời chào hay bán hàng.",
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
  /** khoảng thời gian thực hiện, vd "01.01.2027 – 01.03.2027"; có thì hiện thay cho "khép lại" */
  period?: string;
};

export const gopTay = {
  title: "góp tay",
};

export const invitations: Invitation[] = [
  {
    id: "chi-nguyet-moc-ngu",
    title: "xây dựng bộ chỉ-nguyệt và mộc-ngữ",
    status: "open",
    why: "Cùng nhà mộc phát triển bộ chỉ-nguyệt và quyển sách mộc-ngữ cho các hoạt động cộng đồng vòng-trà-tâm. (hoạt động miễn phí)",
    needs: "người có sự tu dưỡng, am hiểu Đạo",
    how: "phát triển nội dung dựa trên khung sườn gợi ý của mlf: bộ chỉ-nguyệt gồm 1000 câu hỏi, và quyển sách mộc-ngữ gồm 1000 lời gợi mở",
    form: "tặng bạn 01 chuyến retreat hàm-dưỡng của mlf",
    closes: "01.03.2027",
    period: "01.01.2027 – 01.03.2027",
  },
  {
    id: "loi-nhac-o-yen",
    title: "thiết kế bộ lời nhắc ở-yên",
    status: "open",
    why: "Bộ 50 hình nền điện thoại với những lời nhắc ở-yên để mọi người có thể tải về miễn phí.",
    needs: "graphic designer, họa sĩ",
    how: "thiết kế dựa trên concept và nội dung mà mlf đề xuất",
    form: "tặng bạn 01 chuyến retreat hàm-dưỡng của mlf",
    closes: "01.03.2027",
    period: "01.01.2027 – 01.03.2027",
  },
];

export const closing = "Nếu bạn nghĩ mình là người của nhà mà chưa thấy tên ở đây, cứ nhắn nhà mộc một tiếng.";

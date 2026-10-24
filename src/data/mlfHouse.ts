export const contactEmail = "hello@moclittlefarm.com";

/** Mở thư gửi nhà mộc, tiêu đề điền sẵn theo từng việc. */
export function mailto(subject: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;
}

export const hero = {
  title: "mlf house",
  tagline: "những người làm nên mộc",
  intro: [
    "Mộc được dựng nên từ nhiều bàn tay. Có người dựng giúp mái hiên, có người gửi trà từ quê lên, có người góp tiền khi nhà ở Huế còn chưa có móng, có người mở một vòng-trà ở tận tỉnh xa… Phần lớn họ không biết nhau, và nhiều khi nhà mộc cũng chưa kịp nói một lời cảm ơn cho đủ.",
    "mlf house là nơi ghi lại những người ấy, để mọi người tìm thấy nhau, rồi cùng nhau làm thêm vài việc tử tế.",
  ],
};

export const nguoiCuaNha = {
  title: "ai là người của nhà",
  text: "Là những ai đã góp cho mộc một phần của mình, bằng công sức, chuyên môn, tài chính, tài nguyên, một mối quen, hay đơn giản là đã ở cạnh mộc nhiều năm. Không có nghĩa vụ gì đi kèm. Góp một lần rồi thôi cũng được, ở lại lâu cũng được.",
};

export const ghiNhan = {
  title: "ghi nhận",
  note: "Không xếp hạng, không ghi số tiền, mọi người được xếp theo mùa đến. Trang nào cũng được người ấy đọc và đồng ý trước khi đăng.",
};

export type Person = {
  id: string;
  name: string;
  place: string;
  job: string;
  /** mùa và năm gặp mộc, vd "mùa mưa 2023"; dùng để xếp thứ tự */
  season: string;
  /** năm và thứ tự trong năm để sắp xếp (cũ trước) */
  order: number;
  /** nơi gặp mộc, vd "Măng Đen" */
  metAt?: string;
  /** để trống nếu người ấy không muốn để ảnh */
  img?: string;
  contributed: string;
  quote?: string;
  shares: string[];
  seeks: string[];
};

/**
 * Danh sách người của nhà. Hiện là các ô mẫu để giữ chỗ, thay bằng người thật khi đã được từng người đồng ý.
 * Mỗi người: tên, nơi sống, nghề, mùa gặp mộc, điều đã góp, một câu chính người ấy viết, điều có thể chia sẻ, điều đang tìm.
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
  seeks: ["[điều đang tìm]"],
}));

export const ketNoi = {
  title: "kết nối",
  intro: "Bạn có thể tìm người theo nơi ở, theo nghề, theo điều họ có thể chia sẻ hoặc điều họ đang tìm. Người ở Huế biết ai cũng đang ở Huế, người làm kiến trúc gặp được người cùng nghề…",
  rule: "Nhà không để số điện thoại hay email công khai. Muốn gặp ai, bạn nhắn mlf, mlf hỏi ý người kia rồi mới giới thiệu. Danh sách này không dùng để mời chào hay bán hàng.",
  offline: "Gặp nhau ngoài đời thì vẫn quý hơn, ở trăng-yên mỗi tháng tại Huế, ở các vòng-trà-tâm, hay ở một bữa cơm theo vùng mỗi năm một lần.",
};

export type Invitation = {
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
  intro: "Đây là chỗ mlf đặt những việc đang cần thêm người, và bạn cũng có thể đề xuất việc của mình. Mỗi lời mời ghi rõ việc gì, vì sao làm, đang cần gì, góp bằng cách nào, có thù lao hay là góp tay, và khi nào khép lại. Việc làm xong, nhà mộc sẽ kể lại chuyện đã thành ra sao, và những người góp tay được ghi vào phần ghi nhận.",
};

export const invitations: Invitation[] = [
  {
    title: "dựng mlf ở Huế, năm 2027",
    status: "open",
    why: "[vài dòng về ý nghĩa của việc này]",
    needs: "[người, chuyên môn, tài nguyên, tài chính]",
    how: "[cách tham gia]",
    form: "[có thù lao / góp tay]",
    closes: "[ngày]",
  },
];

export const doneWorks: { title: string; when: string; href?: string }[] = [
  { title: "[tên việc đã làm xong]", when: "[mùa, năm]" },
];

export const closing = "Nếu bạn nghĩ mình là người của nhà mà chưa thấy tên ở đây, cứ nhắn nhà mộc một tiếng.";

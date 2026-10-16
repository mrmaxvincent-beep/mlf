export type Vong = {
  /** tên vòng, ví dụ "Vạt Nắng" */
  name: string;
  /** thời gian sinh hoạt, ghi tự do — ví dụ "thứ bảy đầu tháng · 19:30 – 21:30" */
  when?: string;
  /** địa điểm */
  place?: string;
  /** người giữ vòng-trà */
  host?: string;
};

export type Mien = { id: string; name: string; vongs: Vong[] };

/** Thêm một vòng-trà vào đúng miền; miền chưa có vòng nào sẽ hiện "lịch đang được cập nhật". */
export const miens: Mien[] = [
  { id: "bac", name: "miền bắc", vongs: [{ name: "Vạt Nắng" }, { name: "Bờ Rêu" }] },
  { id: "trung", name: "miền trung", vongs: [{ name: "Vũng Mưa" }, { name: "Bóng Râm" }] },
  { id: "nam", name: "miền nam", vongs: [{ name: "Bờ Giậu" }, { name: "Đất Mềm" }] },
];

export const gioiThieu =
  "một vòng trà mỗi tháng, mười người ngồi cùng nhau uống trà, hỏi nhau những câu hỏi thật và cùng soi sáng câu trả lời, do người-giữ-vòng được mlf đào tạo giữ nhịp.";

export const khoiThongTin: { title: string; items: string[] }[] = [
  {
    title: "hình thức",
    items: [
      "miễn phí hoàn toàn. địa điểm, trà và bánh do mọi người tự góp và thu xếp.",
      "10 người một vòng, mỗi tháng một lần, mỗi buổi 2 tiếng 30 phút.",
      "người tham gia đăng ký và sinh hoạt trực tiếp với người-giữ-vòng. mlf không quản lý hay can thiệp vào từng vòng.",
    ],
  },
  {
    title: "người-giữ-vòng",
    items: [
      "là người nằm trong chương trình thực tập nhất-hiện trong 1 năm của mlf.",
      "được mlf hướng dẫn và đào tạo theo chương trình vòng-trà-tâm.",
      "là người duy nhất được truy cập chỉ-nguyệt và mộc-ngữ, hai nguồn online riêng của mlf.",
    ],
  },
  {
    title: "chỉ-nguyệt và mộc-ngữ",
    items: [
      "chỉ-nguyệt là bộ 1000 câu hỏi của mlf. mỗi vòng, người-giữ-vòng lấy xuống đúng 10 câu.",
      "mộc-ngữ là lời chỉ điểm cho từng câu hỏi, được người-giữ-vòng đọc to sau mỗi câu.",
      "cả hai không đưa ra bên ngoài vòng.",
    ],
  },
];

export const agenda = [
  { time: "0:00 – 0:20", part: "trà trong im lặng", desc: "mọi người ngồi vào vòng, cùng uống trà trong chánh niệm, không nói chuyện." },
  { time: "0:20 – 2:15", part: "vòng chia sẻ", desc: "mười lượt câu hỏi, mỗi lượt khoảng 11 phút." },
  { time: "2:15 – 2:30", part: "ngồi yên và kết thúc", desc: "cùng ngồi thiền trong im lặng, rồi khép vòng trà." },
];

export const luotChiaSe = [
  "người đến lượt bốc một câu từ 10 câu chỉ-nguyệt, rồi mời một người trong vòng cùng trả lời.",
  "hai người lần lượt trả lời.",
  "người-giữ-vòng và cả vòng hỏi sâu hơn, cùng phân tích, dẫn dắt để câu chuyện được nhìn từ nhiều chiều và được soi sáng.",
  "người-giữ-vòng đọc to đoạn mộc-ngữ của câu hỏi đó.",
  "người vừa được mời bốc câu tiếp theo và mời một người khác.",
];

export const luotGhiChu =
  "mỗi lượt phải mời một người chưa được mời, để ai trong vòng cũng được mời. người cuối cùng bốc câu thứ mười và mời lại người mở lượt đầu tiên, vòng khép lại ở nơi nó bắt đầu.";

export const nguyenTac = "điều được nói trong vòng ở lại trong vòng, và mỗi lúc chỉ một người nói.";

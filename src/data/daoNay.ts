export type Trace = {
  d: string; // "2026-09-12"
  body: string;
  photo?: string; // chỉ hiện ở tầng 1 — từ tầng 2 trở đi bỏ ảnh để trang không dài ra theo thời gian
};

/** Số dấu vết hiện đầy đủ (tầng 1) và thu còn một dòng (tầng 2). Phần còn lại gom theo tháng. */
export const T1 = 3;
export const T2 = 10;

/** Dùng khi Supabase chưa cấu hình hoặc chưa có bản ghi nào — xem supabase/schema.sql, bảng `traces`. */
export const tracesFallback: Trace[] = [
  { d: "2026-09-12", body: "mưa từ trưa, không ai ra vườn. bếp đỏ lửa sớm hơn mọi hôm." },
  { d: "2026-09-08", body: "trà sáng nay là shan tuyết năm ngoái. còn đúng hai ấm." },
  { d: "2026-09-05", body: "retreat vừa xong. mười hai người, ba ngày, đêm cuối không ai muốn đi ngủ." },
  { d: "2026-09-02", body: "cây hồng sau nhà bắt đầu đổi lá." },
  { d: "2026-08-29", body: "sửa lại mái hiên phía đông. mất hai ngày." },
  { d: "2026-08-26", body: "sương xuống lúc bốn giờ chiều, sớm chưa từng thấy." },
  { d: "2026-08-21", body: "có người gửi về một hộp gốm. không ghi tên." },
  { d: "2026-08-18", body: "đêm qua mất điện. thắp nến, ngồi im tới khuya." },
  { d: "2026-08-14", body: "hái được mẻ sả đầu tiên." },
  { d: "2026-08-10", body: "khách cũ quay lại sau hai năm. vẫn nhớ chỗ ngồi cũ." },
  { d: "2026-08-06", body: "dọn lại kệ sách. bỏ đi mười hai cuốn, giữ lại ba." },
  { d: "2026-08-01", body: "nắng cả tuần. đất nứt chân chim." },
  { d: "2026-07-28", body: "mèo hoang đẻ dưới gầm nhà kho. bốn con." },
  { d: "2026-07-24", body: "thay toàn bộ nến trong gian trà. mùi cũ đi mất." },
  { d: "2026-07-19", body: "gió lớn đêm qua, đổ một cây chuối." },
  { d: "2026-07-15", body: "pha hỏng ba ấm liền. để yên, mai pha lại." },
  { d: "2026-07-10", body: "có đoàn khách nhỏ ở lại tới chiều muộn, không ai nói gì nhiều." },
  { d: "2026-07-03", body: "bắt đầu phơi mẻ trà đầu mùa." },
  { d: "2026-06-27", body: "sửa cái ghế gãy chân từ năm ngoái. cuối cùng cũng làm." },
  { d: "2026-06-22", body: "sáng nay sương dày tới mức không thấy hàng rào." },
  { d: "2026-06-16", body: "một người khách để lại lá thư trên bàn, không ký tên." },
  { d: "2026-06-09", body: "trồng thêm hai luống rau. đất còn ướt." },
  { d: "2026-06-02", body: "mở cửa từ sớm, cả ngày không ai ghé. yên lạ thường." },
];

export function parseTraceDate(s: string) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** Mới → cũ. */
export function sortTraces(list: Trace[]) {
  return [...list].sort((a, b) => parseTraceDate(b.d).getTime() - parseTraceDate(a.d).getTime());
}

/** Thời gian tương đối — để khoảng trống giữa hai dấu vết hiện ra thành thật. */
export function relativeLabel(d: Date, now: Date) {
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.round((midnight.getTime() - d.getTime()) / 86400000);
  if (days <= 0) return "hôm nay";
  if (days === 1) return "hôm qua";
  if (days < 30) return `${days} ngày trước`;
  return `${Math.round(days / 30)} tháng trước`;
}

export function ddmm(d: Date) {
  const p = (v: number) => String(v).padStart(2, "0");
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}`;
}

export function groupByMonth(list: Trace[]) {
  const groups: { key: string; label: string; rows: Trace[] }[] = [];
  for (const t of list) {
    const d = parseTraceDate(t.d);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    let g = groups.find((x) => x.key === key);
    if (!g) {
      g = { key, label: `tháng ${d.getMonth() + 1} · ${d.getFullYear()}`, rows: [] };
      groups.push(g);
    }
    g.rows.push(t);
  }
  return groups;
}

export type Vong = {
  /** thời gian sinh hoạt, ghi tự do — ví dụ "thứ bảy đầu tháng · 19:30 – 21:30" */
  when: string;
  /** địa điểm */
  place: string;
  /** người quản vòng-trà */
  host: string;
};

export type Mien = { id: string; name: string; vongs: Vong[] };

/** Thêm một vòng-trà vào đúng miền; miền chưa có vòng nào sẽ hiện "lịch đang được cập nhật". */
export const miens: Mien[] = [
  { id: "bac", name: "miền bắc", vongs: [] },
  { id: "trung", name: "miền trung", vongs: [] },
  { id: "nam", name: "miền nam", vongs: [] },
];

/** Quyển 02 ra mắt lúc 18:00 ngày 05/02/2027, giờ Việt Nam (UTC+7). */
export const ISSUE_02_RELEASE = new Date("2027-02-05T18:00:00+07:00");

export type Remaining =
  | { mode: "days"; days: number }
  | { mode: "hours"; hours: number; minutes: number }
  | { mode: "minutes"; minutes: number }
  | { mode: "released" };

const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

/** Chỉ hiện đơn vị lớn nhất còn lại: ngày; dưới 24 giờ thì giờ + phút; dưới 1 giờ thì phút.
 *  Cố ý không có giây — một đồng hồ nhảy từng giây trái với nhịp của trang. */
export function remainingParts(ms: number): Remaining {
  if (ms <= 0) return { mode: "released" };
  if (ms >= DAY) return { mode: "days", days: Math.floor(ms / DAY) };
  if (ms >= HOUR) return { mode: "hours", hours: Math.floor(ms / HOUR), minutes: Math.floor((ms % HOUR) / MIN) };
  return { mode: "minutes", minutes: Math.max(1, Math.floor(ms / MIN)) };
}

import type { Data, Day, Shot, Slot } from "../types";

export const hhmm = (t: string | null) => (t ? t.slice(0, 5) : "");

export function fmtDate(d: string | null): string {
  if (!d) return "";
  const [, m, day] = d.split("-");
  return `${day}.${m}`;
}

export function localDateStr(now = new Date()): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}`;
}

export function nowMinutes(now = new Date()): number {
  return now.getHours() * 60 + now.getMinutes();
}

export function toMinutes(t: string | null): number | null {
  if (!t) return null;
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export function fmtClock(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

/** Khung theo thứ tự giờ; khung không giờ xuống cuối. */
export function sortSlots(slots: Slot[]): Slot[] {
  return [...slots].sort((a, b) => {
    const ta = toMinutes(a.start_time);
    const tb = toMinutes(b.start_time);
    if (ta !== tb) {
      if (ta === null) return 1;
      if (tb === null) return -1;
      return ta - tb;
    }
    return a.sort - b.sort;
  });
}

export function sortShots(shots: Shot[]): Shot[] {
  return [...shots].sort(
    (a, b) => a.sort - b.sort || (a.created_at ?? "").localeCompare(b.created_at ?? ""),
  );
}

export function slotsOfDay(data: Data, dayId: number): Slot[] {
  return sortSlots(data.slots.filter((s) => s.day_id === dayId));
}

export function shotsOfSlot(data: Data, slotId: string): Shot[] {
  return sortShots(data.shots.filter((s) => s.slot_id === slotId));
}

export function dayById(data: Data, id: number): Day | undefined {
  return data.days.find((d) => d.id === id);
}

/** Id ngày thuộc hôm nay (24–27.11) nếu có. */
export function todayDayId(days: Day[], now = new Date()): number | null {
  const t = localDateStr(now);
  return days.find((d) => d.date === t)?.id ?? null;
}

/** Khung giờ hiện tại: khung có giờ lớn nhất không vượt quá giờ máy. */
export function currentSlotId(daySlots: Slot[], now = new Date()): string | null {
  const m = nowMinutes(now);
  let cur: string | null = null;
  for (const s of daySlots) {
    const t = toMinutes(s.start_time);
    if (t !== null && t <= m) cur = s.id;
  }
  return cur;
}

/** Bỏ dấu tiếng Việt, hạ chữ thường — để tìm "ngam chan" ra "Ngâm chân". */
export function norm(s: string): string {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase();
}

import type { Data } from "../types";

export function exportJson(data: Data) {
  const payload = { app: "checklist-quay", version: 1, exported_at: new Date().toISOString(), ...data };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `checklist-quay-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-")}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

export function parseImport(text: string): Data {
  let o: unknown;
  try {
    o = JSON.parse(text);
  } catch {
    throw new Error("File không phải JSON hợp lệ.");
  }
  const d = o as Partial<Data>;
  if (!d || !Array.isArray(d.days) || !Array.isArray(d.slots) || !Array.isArray(d.shots))
    throw new Error("File thiếu days, slots hoặc shots.");
  const dayIds = new Set(d.days.map((x) => x.id));
  const slotIds = new Set(d.slots.map((x) => x.id));
  if (d.slots.some((s) => !dayIds.has(s.day_id))) throw new Error("Có khung giờ trỏ tới ngày không tồn tại.");
  if (d.shots.some((s) => !slotIds.has(s.slot_id))) throw new Error("Có cảnh trỏ tới khung giờ không tồn tại.");
  return { days: d.days, slots: d.slots, shots: d.shots };
}

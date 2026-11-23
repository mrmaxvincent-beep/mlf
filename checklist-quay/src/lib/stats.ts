import type { Data, Shot } from "../types";

export interface Stats {
  total: number;
  done: number;
  gemTotal: number;
  gemDone: number;
  gemMissing: number;
}

export const isDone = (s: Shot) => s.status !== "todo";
export const isGem = (s: Shot) => s.kind === "scene" && s.is_gem;
export const isMissingGem = (s: Shot) => isGem(s) && !isDone(s);

export function statsOf(shots: Shot[]): Stats {
  let done = 0;
  let gemTotal = 0;
  let gemDone = 0;
  for (const s of shots) {
    if (isDone(s)) done++;
    if (isGem(s)) {
      gemTotal++;
      if (isDone(s)) gemDone++;
    }
  }
  return { total: shots.length, done, gemTotal, gemDone, gemMissing: gemTotal - gemDone };
}

export function shotsOfDay(data: Data, dayId: number): Shot[] {
  const ids = new Set(data.slots.filter((s) => s.day_id === dayId).map((s) => s.id));
  return data.shots.filter((s) => ids.has(s.slot_id));
}

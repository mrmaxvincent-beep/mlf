import type { Data, Shot } from "../types";
import { fmtDate, shotsOfSlot, slotsOfDay } from "./util";
import { isGem, shotsOfDay, statsOf } from "./stats";

const label = (s: Shot) =>
  `${s.code != null ? `#${String(s.code).padStart(2, "0")} ` : ""}${s.title}${s.is_gem && s.kind === "scene" ? " ⭐" : ""}`;

export function daySummary(data: Data, dayId: number): string {
  const day = data.days.find((d) => d.id === dayId);
  if (!day) return "";
  const head = [day.date ? `${day.label.toUpperCase()} · ${fmtDate(day.date)}` : day.label.toUpperCase(), day.title]
    .filter(Boolean)
    .join(" · ");
  const shots = shotsOfDay(data, dayId);
  const st = statsOf(shots);
  const lines = [head, `Đã quay ${st.done}/${st.total} · ⭐ ${st.gemDone}/${st.gemTotal}`];

  for (const slot of slotsOfDay(data, dayId)) {
    const done = shotsOfSlot(data, slot.id).filter((s) => s.status !== "todo");
    if (done.length)
      lines.push(
        `✔ ${slot.title} · ${done.map((s) => label(s) + (s.status === "extra_take" ? " (quay dư)" : "")).join("; ")}`,
      );
  }

  const missing = shots.filter((s) => s.status === "todo");
  if (missing.length) {
    const ordered = [...missing.filter(isGem), ...missing.filter((s) => !isGem(s))];
    lines.push(`✘ Còn thiếu: ${ordered.map(label).join(", ")}`);
  }

  const extras = shots.filter((s) => s.is_extra);
  if (extras.length)
    lines.push(`Phát sinh: ${extras.map((s) => `${label(s)}${s.status !== "todo" ? " ✔" : ""}`).join(", ")}`);

  return lines.join("\n");
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    ta.remove();
    return ok;
  }
}

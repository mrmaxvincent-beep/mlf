import type { Shot } from "../types";
import type { Store } from "../lib/store";
import { fmtDate, hhmm, norm, shotsOfSlot, slotsOfDay } from "../lib/util";
import { ShotRow } from "./ShotRow";
import type { Actions } from "./DayView";

export function SearchResults({
  store,
  query,
  actions,
  onGoto,
}: {
  store: Store;
  query: string;
  actions: Actions;
  onGoto: (dayId: number, slotId: string) => void;
}) {
  const { data } = store;
  const tokens = norm(query).split(/\s+/).filter(Boolean);

  const matches = (shot: Shot, slotTitle: string) => {
    const code = shot.code == null ? "" : `#${String(shot.code).padStart(2, "0")} ${shot.code}`;
    const hay = norm(
      [shot.title, shot.description, shot.note, shot.done_by, slotTitle, code].filter(Boolean).join(" "),
    );
    return tokens.every((t) => hay.includes(t));
  };

  const groups = [...data.days]
    .sort((a, b) => a.sort - b.sort)
    .flatMap((day) =>
      slotsOfDay(data, day.id)
        .map((slot) => ({
          day,
          slot,
          shots: shotsOfSlot(data, slot.id).filter(
            (s) => matches(s, slot.title),
          ),
        }))
        .filter((g) => g.shots.length > 0),
    );
  const count = groups.reduce((n, g) => n + g.shots.length, 0);

  return (
    <div className="px-3 pb-6">
      <p className="px-1 py-3 font-semibold" role="status">
        {count > 0 ? `${count} cảnh khớp “${query.trim()}”` : `Không có cảnh nào khớp “${query.trim()}”`}
      </p>
      <div className="grid gap-3">
        {groups.map(({ day, slot, shots }) => (
          <section key={slot.id} className="overflow-hidden rounded-2xl border-2 border-sand bg-card">
            <button
              onClick={() => onGoto(day.id, slot.id)}
              className="flex min-h-12 w-full items-center justify-between gap-2 bg-sand/30 px-3 py-2 text-left active:bg-sand/60"
            >
              <span className="min-w-0">
                <span className="block text-xs font-bold tracking-wide text-moss uppercase">
                  {day.date ? `${day.label} · ${fmtDate(day.date)}` : day.label}
                </span>
                <span className="block font-bold">
                  {slot.start_time && <span className="mr-2 text-moss tabular-nums">{hhmm(slot.start_time)}</span>}
                  {slot.title}
                </span>
              </span>
              <span className="shrink-0 text-sm font-semibold text-moss">Đi tới ›</span>
            </button>
            <ul>
              {shots.map((s) => (
                <ShotRow
                  key={s.id}
                  shot={s}
                  onTick={() => void store.setStatus(s.id, s.status === "todo" ? "done" : "todo")}
                  onStatusMenu={() => actions.openStatus(s.id)}
                  onOpen={() => actions.openShot(s.id)}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

import type { Shot, Slot } from "../types";
import { hhmm } from "../lib/util";
import { statsOf } from "../lib/stats";
import { Progress } from "./ui";
import { ShotRow } from "./ShotRow";

export function SlotCard({
  slot,
  allShots,
  shots,
  current,
  open,
  onToggle,
  onTick,
  onStatusMenu,
  onOpenShot,
  onEdit,
  onAddShot,
}: {
  slot: Slot;
  allShots: Shot[];
  shots: Shot[];
  current: boolean;
  open: boolean;
  onToggle: () => void;
  onTick: (s: Shot) => void;
  onStatusMenu: (s: Shot) => void;
  onOpenShot: (s: Shot) => void;
  onEdit: () => void;
  onAddShot: () => void;
}) {
  const st = statsOf(allShots);
  const complete = st.total > 0 && st.done === st.total;

  return (
    <section
      id={`slot-${slot.id}`}
      className={`scroll-mt-40 overflow-hidden rounded-2xl border-2 bg-card ${
        current ? "border-moss ring-4 ring-moss/25" : "border-sand"
      }`}
    >
      <div className="flex items-stretch">
        <button
          onClick={onToggle}
          aria-expanded={open}
          className="min-w-0 flex-1 px-3 py-3 text-left active:bg-sand/30"
        >
          <div className="flex items-start gap-3">
            <span className="w-14 shrink-0 pt-0.5 font-serif text-2xl leading-none font-bold text-moss tabular-nums">
              {hhmm(slot.start_time) || "—"}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold leading-snug">
                {slot.title} {complete && <span className="text-moss">✓</span>}
              </h3>
              {current && (
                <span className="mt-0.5 inline-block rounded-md bg-moss px-2 py-0.5 text-xs font-bold text-cream">
                  Đang diễn ra
                </span>
              )}
              {slot.place && <p className="text-sm text-ink/75">📍 {slot.place}</p>}
              {slot.note && <p className="text-sm text-ink/75 italic">{slot.note}</p>}
              <div className="mt-2 flex items-center gap-2">
                <Progress done={st.done} total={st.total} className="flex-1" />
                <span className="text-sm font-semibold tabular-nums">
                  {st.done}/{st.total}
                </span>
                <span aria-hidden className="w-4 text-center text-ink/60">
                  {open ? "▴" : "▾"}
                </span>
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={onEdit}
          aria-label="Sửa khung giờ"
          className="w-12 shrink-0 text-lg text-ink/70 active:bg-sand/40"
        >
          ✎
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-sand">
          {shots.length > 0 && (
            <ul>
              {shots.map((s) => (
                <ShotRow
                  key={s.id}
                  shot={s}
                  onTick={() => onTick(s)}
                  onStatusMenu={() => onStatusMenu(s)}
                  onOpen={() => onOpenShot(s)}
                />
              ))}
            </ul>
          )}
          <button
            onClick={onAddShot}
            className="min-h-12 w-full border-t border-sand/70 px-3 text-left font-semibold text-moss active:bg-sand/30"
          >
            + Thêm cảnh
          </button>
        </div>
      )}
    </section>
  );
}

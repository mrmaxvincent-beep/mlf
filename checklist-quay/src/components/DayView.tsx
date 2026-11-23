import { useEffect, useRef, useState } from "react";
import type { Shot } from "../types";
import type { Store } from "../lib/store";
import { currentSlotId, fmtDate, shotsOfSlot, slotsOfDay } from "../lib/util";
import { shotsOfDay, statsOf } from "../lib/stats";
import { btnGhost, Progress } from "./ui";
import { SlotCard } from "./SlotCard";

export interface Actions {
  openShot: (id: string) => void;
  openStatus: (id: string) => void;
  editSlot: (id: string) => void;
  addShot: (slotId: string) => void;
  addSlot: (dayId: number) => void;
  editDay: (id: number) => void;
}

export function DayView({
  store,
  dayId,
  isToday,
  now,
  actions,
}: {
  store: Store;
  dayId: number;
  isToday: boolean;
  now: Date;
  actions: Actions;
}) {
  const { data } = store;
  const day = data.days.find((d) => d.id === dayId);
  const [overrides, setOverrides] = useState<Record<string, boolean>>({});
  const initiallyDone = useRef<Record<string, boolean>>({});
  const scrolled = useRef(false);

  const slots = slotsOfDay(data, dayId);
  const cur = isToday ? currentSlotId(slots, now) : null;

  useEffect(() => {
    if (scrolled.current || !cur) return;
    scrolled.current = true;
    document.getElementById(`slot-${cur}`)?.scrollIntoView({ block: "start" });
  }, [cur]);

  if (!day) return null;
  const dayStats = statsOf(shotsOfDay(data, dayId));

  const rows = slots.map((slot) => ({ slot, all: shotsOfSlot(data, slot.id) }));

  const onTick = (s: Shot) => void store.setStatus(s.id, s.status === "todo" ? "done" : "todo");

  return (
    <div>
      <div className="px-4 pt-4 pb-3">
        <p className="text-sm font-semibold tracking-wide text-moss uppercase">
          {day.date ? `${day.label} · ${fmtDate(day.date)}` : day.label}
        </p>
        <h2 className="font-serif text-3xl leading-tight font-bold">{day.title ?? day.label}</h2>
        {day.tone && (
          <span className="mt-1 inline-block rounded-full border border-sandd bg-sand/50 px-3 py-0.5 text-sm font-semibold">
            {day.tone}
          </span>
        )}
        <div className="mt-3 flex items-center gap-3">
          <Progress done={dayStats.done} total={dayStats.total} className="flex-1" />
          <span className="text-sm font-semibold tabular-nums">
            {dayStats.done}/{dayStats.total} · ⭐ đắt giá còn {dayStats.gemMissing}
          </span>
        </div>
        <button className={`${btnGhost} mt-3 w-full`} onClick={() => actions.editDay(dayId)}>
          ✎ Sửa thông tin ngày
        </button>
      </div>

      <div className="grid gap-3 px-3">
        {rows.map(({ slot, all }) => {
          const isCur = slot.id === cur;
          const st = statsOf(all);
          if (!(slot.id in initiallyDone.current)) initiallyDone.current[slot.id] = st.total > 0 && st.done === st.total && !isCur;
          const open = overrides[slot.id] ?? !initiallyDone.current[slot.id];
          return (
            <SlotCard
              key={slot.id}
              slot={slot}
              allShots={all}
              shots={all}
              current={isCur}
              open={open}
              onToggle={() => setOverrides((o) => ({ ...o, [slot.id]: !open }))}
              onTick={onTick}
              onStatusMenu={(s) => actions.openStatus(s.id)}
              onOpenShot={(s) => actions.openShot(s.id)}
              onEdit={() => actions.editSlot(slot.id)}
              onAddShot={() => actions.addShot(slot.id)}
            />
          );
        })}
        <button
          onClick={() => actions.addSlot(dayId)}
          className="min-h-14 rounded-2xl border-2 border-dashed border-moss font-bold text-moss active:bg-sand/30"
        >
          + Thêm khung giờ
        </button>
      </div>
    </div>
  );
}

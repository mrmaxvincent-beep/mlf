import { useState } from "react";
import type { Shot } from "../types";
import type { Store } from "../lib/store";
import { btnGhost, btnPrimary, input, Sheet } from "./ui";
import { fmtDate, hhmm, slotsOfDay } from "../lib/util";

export function MovePicker({ shot, store, onClose }: { shot: Shot; store: Store; onClose: () => void }) {
  const [dayId, setDayId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");
  const { data } = store;

  const finish = () => onClose();

  if (dayId == null) {
    return (
      <Sheet title="Dời tới… · chọn ngày" onClose={onClose}>
        <div className="grid gap-2">
          {[...data.days]
            .sort((a, b) => a.sort - b.sort)
            .map((d) => (
              <button key={d.id} className={`${btnGhost} text-left`} onClick={() => setDayId(d.id)}>
                {d.date ? `${d.label} · ${fmtDate(d.date)}` : d.label}
                {d.title && <span className="block text-sm font-normal text-ink/70">{d.title}</span>}
              </button>
            ))}
        </div>
      </Sheet>
    );
  }

  const day = data.days.find((d) => d.id === dayId);
  const slots = slotsOfDay(data, dayId);
  return (
    <Sheet title={`${day?.label ?? ""} · chọn khung giờ`} onClose={onClose}>
      <button className="mb-2 min-h-12 font-semibold underline" onClick={() => setDayId(null)}>
        ← Chọn ngày khác
      </button>
      <div className="grid gap-2">
        {slots.map((s) => (
          <button
            key={s.id}
            disabled={s.id === shot.slot_id}
            className={`${btnGhost} text-left`}
            onClick={() => {
              void store.moveShot(shot.id, s.id);
              finish();
            }}
          >
            {s.start_time && <span className="mr-2 font-bold text-moss tabular-nums">{hhmm(s.start_time)}</span>}
            {s.title}
            {s.id === shot.slot_id && <span className="text-sm font-normal"> (đang ở đây)</span>}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border-2 border-dashed border-sand p-3">
        <p className="mb-2 font-semibold">+ Khung mới</p>
        <input
          className={`${input} mb-2`}
          placeholder="Tên khung mới"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button
          className={`${btnPrimary} w-full`}
          disabled={!newName.trim()}
          onClick={() => {
            void store.moveShotToNewSlot(shot.id, dayId, newName.trim());
            finish();
          }}
        >
          Tạo khung và dời vào
        </button>
      </div>
    </Sheet>
  );
}

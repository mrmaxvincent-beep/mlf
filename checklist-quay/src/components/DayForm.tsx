import { useState } from "react";
import type { Day } from "../types";
import { btnPrimary, Field, input, Sheet } from "./ui";

export function DayForm({
  day,
  onSave,
  onClose,
}: {
  day: Day;
  onSave: (patch: { title: string | null; tone: string | null; date: string | null }) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState(day.title ?? "");
  const [tone, setTone] = useState(day.tone ?? "");
  const [date, setDate] = useState(day.date ?? "");
  return (
    <Sheet title={`Sửa ${day.label}`} onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave({ title: title.trim() || null, tone: tone.trim() || null, date: day.id === 5 ? null : date || null });
          onClose();
        }}
      >
        <Field label="Tiêu đề">
          <input className={input} value={title} onChange={(e) => setTitle(e.target.value)} />
        </Field>
        <Field label="Tone">
          <select className={input} value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="">(không)</option>
            <option>Chiều sâu tâm tưởng</option>
            <option>Duy mỹ</option>
          </select>
        </Field>
        {day.id !== 5 && (
          <Field label="Ngày">
            <input type="date" className={input} value={date} onChange={(e) => setDate(e.target.value)} />
          </Field>
        )}
        <button className={`${btnPrimary} w-full`} type="submit">
          Lưu
        </button>
      </form>
    </Sheet>
  );
}

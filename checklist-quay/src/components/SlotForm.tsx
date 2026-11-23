import { useState } from "react";
import type { Slot } from "../types";
import { btnDanger, btnPrimary, Field, input, Sheet } from "./ui";

export interface SlotValues {
  start_time: string | null;
  title: string;
  place: string | null;
  note: string | null;
}

export function SlotForm({
  slot,
  onSave,
  onDelete,
  onClose,
}: {
  slot?: Slot;
  onSave: (v: SlotValues) => void;
  onDelete?: () => void;
  onClose: () => void;
}) {
  const [time, setTime] = useState(slot?.start_time?.slice(0, 5) ?? "");
  const [title, setTitle] = useState(slot?.title ?? "");
  const [place, setPlace] = useState(slot?.place ?? "");
  const [note, setNote] = useState(slot?.note ?? "");

  return (
    <Sheet title={slot ? "Sửa khung giờ" : "Thêm khung giờ"} onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim()) return;
          onSave({
            start_time: time || null,
            title: title.trim(),
            place: place.trim() || null,
            note: note.trim() || null,
          });
          onClose();
        }}
      >
        <Field label="Giờ bắt đầu (bỏ trống nếu không cố định)">
          <input type="time" className={input} value={time} onChange={(e) => setTime(e.target.value)} />
        </Field>
        <Field label="Hoạt động">
          <input className={input} value={title} onChange={(e) => setTitle(e.target.value)} autoFocus={!slot} />
        </Field>
        <Field label="Địa điểm">
          <input className={input} value={place} onChange={(e) => setPlace(e.target.value)} />
        </Field>
        <Field label="Ghi chú">
          <textarea className={`${input} min-h-20`} value={note} onChange={(e) => setNote(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-2">
          <button type="submit" className={btnPrimary} disabled={!title.trim()}>
            Lưu
          </button>
          {onDelete ? (
            <button
              type="button"
              className={btnDanger}
              onClick={() => {
                if (confirm("Xóa khung giờ này và toàn bộ cảnh bên trong?")) {
                  onDelete();
                  onClose();
                }
              }}
            >
              Xóa khung
            </button>
          ) : (
            <span />
          )}
        </div>
      </form>
    </Sheet>
  );
}

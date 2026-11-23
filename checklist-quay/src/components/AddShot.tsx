import { useState } from "react";
import { btnPrimary, input, Sheet } from "./ui";

export function AddShot({
  onAdd,
  onClose,
}: {
  onAdd: (v: { title: string; is_gem: boolean; note: string }) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [gem, setGem] = useState(false);
  const [note, setNote] = useState("");
  return (
    <Sheet title="Thêm cảnh phát sinh" onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim()) return;
          onAdd({ title: title.trim(), is_gem: gem, note: note.trim() });
          onClose();
        }}
        className="grid gap-3"
      >
        <input className={input} placeholder="Tên cảnh" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <input className={input} placeholder="Ghi chú (tùy chọn)" value={note} onChange={(e) => setNote(e.target.value)} />
        <button
          type="button"
          aria-pressed={gem}
          onClick={() => setGem(!gem)}
          className={`flex min-h-12 items-center gap-3 rounded-xl border-2 px-4 font-semibold ${
            gem ? "border-sandd bg-sand" : "border-sand bg-white"
          }`}
        >
          <span className="text-xl">⭐</span>
          {gem ? "Cảnh đắt giá" : "Đánh dấu cảnh đắt giá (tùy chọn)"}
        </button>
        <button type="submit" className={btnPrimary} disabled={!title.trim()}>
          Thêm cảnh
        </button>
      </form>
    </Sheet>
  );
}

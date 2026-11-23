import { useEffect, useRef, useState } from "react";
import { KIND_LABEL, STATUS_LABEL, type Kind, type Shot, type Status } from "../types";
import type { Store } from "../lib/store";
import { btnDanger, btnGhost, Field, input, Sheet } from "./ui";
import { fmtClock } from "../lib/util";

export function ShotSheet({
  shot,
  store,
  onClose,
  onMove,
}: {
  shot: Shot;
  store: Store;
  onClose: () => void;
  onMove: () => void;
}) {
  const [draft, setDraft] = useState({
    title: shot.title,
    description: shot.description ?? "",
    note: shot.note ?? "",
    code: shot.code == null ? "" : String(shot.code),
  });
  const pending = useRef<Partial<Shot>>({});
  const timer = useRef<number | null>(null);
  const storeRef = useRef(store);
  storeRef.current = store;
  const id = shot.id;

  const flush = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
    if (Object.keys(pending.current).length) {
      void storeRef.current.patchShot(id, pending.current);
      pending.current = {};
    }
  };
  useEffect(() => flush, []); // eslint-disable-line react-hooks/exhaustive-deps

  const queue = (patch: Partial<Shot>) => {
    pending.current = { ...pending.current, ...patch };
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(flush, 600);
  };

  const text = (k: "title" | "description" | "note") => (v: string) => {
    setDraft((d) => ({ ...d, [k]: v }));
    if (k === "title") {
      if (v.trim()) queue({ title: v.trim() });
    } else queue({ [k]: v.trim() ? v : null });
  };

  const setKind = (kind: Kind) => store.patchShot(id, kind === "scene" ? { kind } : { kind, is_gem: false });

  const done = shot.status !== "todo";

  return (
    <Sheet
      title="Chi tiết cảnh"
      onClose={() => {
        flush();
        onClose();
      }}
    >
      <Field label="Tên cảnh">
        <input className={input} value={draft.title} onChange={(e) => text("title")(e.target.value)} />
      </Field>
      <Field label="Mô tả">
        <textarea className={`${input} min-h-20`} value={draft.description} onChange={(e) => text("description")(e.target.value)} />
      </Field>
      <Field label="Ghi chú (số clip, thẻ nhớ, đã ghi âm chưa…) · tự động lưu">
        <textarea
          className={`${input} min-h-24`}
          value={draft.note}
          placeholder="Ví dụ: 3 clip, thẻ A, đã ghi âm"
          onChange={(e) => text("note")(e.target.value)}
        />
      </Field>

      <div className="mb-3 grid grid-cols-[1fr_6rem] gap-2">
        <Field label="Loại">
          <select className={input} value={shot.kind} onChange={(e) => void setKind(e.target.value as Kind)}>
            {(Object.keys(KIND_LABEL) as Kind[]).map((k) => (
              <option key={k} value={k}>
                {KIND_LABEL[k]}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Mã #">
          <input
            className={input}
            inputMode="numeric"
            value={draft.code}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, "").slice(0, 3);
              setDraft((d) => ({ ...d, code: v }));
              queue({ code: v ? Number(v) : null });
            }}
          />
        </Field>
      </div>

      <button
        disabled={shot.kind !== "scene"}
        aria-pressed={shot.is_gem}
        onClick={() => void store.patchShot(id, { is_gem: !shot.is_gem })}
        className={`mb-3 flex min-h-12 w-full items-center gap-3 rounded-xl border-2 px-4 text-left font-semibold disabled:opacity-40 ${
          shot.is_gem && shot.kind === "scene" ? "border-sandd bg-sand" : "border-sand bg-white"
        }`}
      >
        <span className="text-xl">⭐</span>
        {shot.kind !== "scene" ? "Chỉ cảnh thường mới có ⭐" : shot.is_gem ? "Cảnh đắt giá (đang bật)" : "Đánh dấu cảnh đắt giá"}
      </button>

      <div className="mb-3 grid grid-cols-3 gap-2">
        {(["todo", "done", "extra_take"] as Status[]).map((s) => (
          <button
            key={s}
            onClick={() => void store.setStatus(id, s)}
            className={`min-h-12 rounded-xl border-2 px-1 text-sm leading-tight font-semibold ${
              shot.status === s ? "border-moss bg-moss text-cream" : "border-sand bg-white"
            }`}
          >
            {STATUS_LABEL[s]}
          </button>
        ))}
      </div>
      {done && shot.done_by && (
        <p className="mb-3 text-sm font-semibold text-moss">
          Ghi nhận: {shot.done_by} · {fmtClock(shot.done_at)}
        </p>
      )}

      <div className="grid grid-cols-2 gap-2">
        <button
          className={btnGhost}
          onClick={() => {
            flush();
            onMove();
          }}
        >
          Dời tới…
        </button>
        <button
          className={btnDanger}
          onClick={() => {
            if (confirm(`Xóa cảnh “${shot.title}”?`)) {
              pending.current = {};
              void store.deleteShot(id);
              onClose();
            }
          }}
        >
          Xóa cảnh
        </button>
      </div>
    </Sheet>
  );
}

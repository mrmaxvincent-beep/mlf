import { useRef } from "react";
import { KIND_LABEL, type Shot } from "../types";
import { fmtClock } from "../lib/util";

const code = (c: number | null) => (c == null ? "" : `#${String(c).padStart(2, "0")}`);

export function ShotRow({
  shot,
  onTick,
  onStatusMenu,
  onOpen,
}: {
  shot: Shot;
  onTick: () => void;
  onStatusMenu: () => void;
  onOpen: () => void;
}) {
  const timer = useRef<number | null>(null);
  const longPressed = useRef(false);

  const start = () => {
    longPressed.current = false;
    timer.current = window.setTimeout(() => {
      longPressed.current = true;
      navigator.vibrate?.(30);
      onStatusMenu();
    }, 500);
  };
  const cancel = () => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
  };

  const done = shot.status !== "todo";
  const gem = shot.kind === "scene" && shot.is_gem;

  return (
    <li className={`flex items-stretch gap-1 border-t border-sand/70 first:border-t-0 ${done ? "bg-moss/5" : ""}`}>
      <button
        aria-label={done ? "Bỏ tick" : "Đánh dấu đã quay"}
        aria-pressed={done}
        onPointerDown={start}
        onPointerUp={cancel}
        onPointerLeave={cancel}
        onPointerCancel={cancel}
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => {
          if (longPressed.current) return;
          onTick();
        }}
        className="grid w-14 shrink-0 place-items-center select-none"
      >
        <span
          className={`grid h-10 w-10 place-items-center rounded-xl border-2 text-2xl leading-none font-bold ${
            done ? "border-moss bg-moss text-cream" : "border-ink/60 bg-white text-transparent"
          }`}
        >
          {shot.status === "extra_take" ? "✓✓" : "✓"}
        </span>
      </button>

      <button onClick={onOpen} className="min-w-0 flex-1 py-3 pr-1 text-left">
        <div className="leading-snug">
          {shot.code != null && <span className="mr-2 font-bold text-moss tabular-nums">{code(shot.code)}</span>}
          <span className={`mr-2 font-semibold ${done ? "text-ink/60" : ""}`}>{shot.title}</span>
          {gem && (
            <span className="mr-2" aria-label="Cảnh đắt giá">
              ⭐
            </span>
          )}
          {shot.is_extra && <Tag>phát sinh</Tag>}
          {shot.kind !== "scene" && <Tag>{KIND_LABEL[shot.kind]}</Tag>}
        </div>
        {shot.description && <p className="mt-0.5 text-sm text-ink/75">{shot.description}</p>}
        {done && shot.done_by && (
          <p className="mt-0.5 text-sm font-semibold text-moss">
            {shot.done_by} · {fmtClock(shot.done_at)}
            {shot.status === "extra_take" && " · quay dư"}
          </p>
        )}
        {shot.note && <p className="mt-0.5 text-sm text-ink/75 italic">📝 {shot.note}</p>}
      </button>

      <button
        onClick={onStatusMenu}
        aria-label="Chọn trạng thái"
        className="grid w-11 shrink-0 place-items-center text-xl text-ink/70 active:bg-sand/40"
      >
        ⋯
      </button>
    </li>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-1 inline-block rounded-md border border-sandd bg-sand/40 px-1.5 py-0.5 align-middle text-xs font-semibold">{children}</span>
  );
}

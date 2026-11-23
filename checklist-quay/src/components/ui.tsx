import { useEffect, useRef, type ReactNode } from "react";

export const btn =
  "min-h-12 rounded-xl px-4 font-semibold text-base active:opacity-80 disabled:opacity-40";
export const btnPrimary = `${btn} bg-moss text-cream`;
export const btnGhost = `${btn} border-2 border-sand bg-card text-ink`;
export const btnDanger = `${btn} border-2 border-red-800 bg-card text-red-800`;
export const input =
  "w-full min-h-12 rounded-xl border-2 border-sand bg-white px-3 py-2 text-ink placeholder:text-ink/50 focus:border-moss focus:outline-none";

export function Progress({ done, total, className = "" }: { done: number; total: number; className?: string }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div
      className={`h-2 overflow-hidden rounded-full bg-sand/60 ${className}`}
      role="progressbar"
      aria-valuenow={done}
      aria-valuemax={total}
    >
      <div className="h-full bg-moss transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}

/** Ngăn kéo từ dưới lên (mobile) / hộp giữa màn hình (rộng). */
export function Sheet({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeRef.current();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, []);
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 sm:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-label={title}
        className="safe-b max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-card p-4 shadow-xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="font-serif text-2xl font-bold leading-tight">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-2xl active:bg-sand/50"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="mb-3 block">
      <span className="mb-1 block text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}

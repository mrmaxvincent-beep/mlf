"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type Room = { id: string; name: string; sub: string; content: ReactNode };

/**
 * Ngôi nhà ba gian: mặt tiền vẽ nét (mái + cột), mỗi gian là một tab.
 * Gian đang mở sáng nền cotton và nối liền xuống khung nội dung bên dưới, như bước vào trong.
 * Địa chỉ đổi theo gian (#ghi-nhan…) để gửi link đúng gian và nút Back hoạt động.
 */
export function MlfHouseRooms({ rooms }: { rooms: Room[] }) {
  const [active, setActive] = useState(rooms[0].id);
  const houseRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const fromHash = useCallback(
    (scroll: boolean) => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!rooms.some((r) => r.id === id)) return;
      setActive(id);
      if (scroll) houseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [rooms],
  );

  useEffect(() => {
    fromHash(true);
    const onHash = () => fromHash(true);
    const onPop = () => fromHash(false);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("popstate", onPop);
    };
  }, [fromHash]);

  const open = (id: string) => {
    if (id === active) return;
    setActive(id);
    try {
      window.history.pushState(null, "", `#${id}`);
    } catch {}
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % rooms.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + rooms.length) % rooms.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = rooms.length - 1;
    if (n < 0) return;
    e.preventDefault();
    open(rooms[n].id);
    tabRefs.current[n]?.focus();
  };

  return (
    <div className="mhr" ref={houseRef}>
      <div className="mhr-house">
        <svg className="mhr-roof" viewBox="0 0 1000 150" preserveAspectRatio="none" aria-hidden="true">
          {/* mái nhà: hai mái dốc, đầu đao cong lên ở hai bên */}
          <path d="M18 132 C 60 130, 92 118, 128 92 L 300 22 L 700 22 L 872 92 C 908 118, 940 130, 982 132" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          <path d="M282 22 C 274 14, 266 10, 258 9 M718 22 C 726 14, 734 10, 742 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d="M300 34 L 700 34" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" vectorEffect="non-scaling-stroke" />
          <path d="M70 132 L 930 132" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="mhr-bays" role="tablist" aria-label="ba gian của mlf house">
          {rooms.map((r, i) => {
            const on = r.id === active;
            return (
              <button
                key={r.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${r.id}`}
                aria-selected={on}
                aria-controls={`gian-${r.id}`}
                tabIndex={on ? 0 : -1}
                className={`mhr-bay${on ? " on" : ""}`}
                onClick={() => open(r.id)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="mhr-num">gian {String(i + 1).padStart(2, "0")}</span>
                <span className="mhr-name">{r.name}</span>
                <span className="mhr-sub">{r.sub}</span>
              </button>
            );
          })}
        </div>
      </div>

      {rooms.map((r) => (
        <div
          key={r.id}
          id={`gian-${r.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${r.id}`}
          hidden={r.id !== active}
          className="mhr-room"
          tabIndex={0}
        >
          {r.content}
        </div>
      ))}
    </div>
  );
}

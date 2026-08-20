"use client";

import { useEffect, useRef, useState } from "react";

export type Activity = { title: string; desc: string };

function DescBody({ desc }: { desc: string }) {
  if (!desc) {
    return <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>—</p>;
  }
  if (desc.includes("\n")) {
    const lines = desc.split("\n");
    return (
      <div>
        {lines.map((line, i) => (
          <div key={i} style={{ display: "flex", gap: "0.7rem", marginBottom: i < lines.length - 1 ? "0.8rem" : 0 }}>
            <span style={{ color: "var(--color-cham-dem)", flexShrink: 0 }}>·</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>{line}</p>
          </div>
        ))}
      </div>
    );
  }
  return <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>{desc}</p>;
}

/** Desktop: left list + right pane aligned to the selected row. Mobile: accordion, description expands in place below the tapped item. */
export function ActivityPicker({ items }: { items: Activity[] }) {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [activeTop, setActiveTop] = useState(0);
  const [listHeight, setListHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 701px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    function measure() {
      const btn = buttonRefs.current[active];
      if (btn && listRef.current) {
        setActiveTop(btn.getBoundingClientRect().top - listRef.current.getBoundingClientRect().top);
      }
      if (listRef.current) setListHeight(listRef.current.offsetHeight);
      if (contentRef.current) setContentHeight(contentRef.current.offsetHeight);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, items, isDesktop]);

  const current = items[active];
  const adjustedTop = listHeight && contentHeight ? Math.max(0, Math.min(activeTop, listHeight - contentHeight)) : activeTop;

  if (!isDesktop) {
    return (
      <div className="activity-picker">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <div key={item.title} style={{ borderBottom: "1px solid var(--color-mist)" }}>
              <button
                onClick={() => setActive(isActive ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.8rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.75rem 0",
                  textAlign: "left",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: isActive ? "var(--color-cham-dem)" : "var(--color-stone)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: isActive ? 600 : 400, fontSize: "0.95rem", color: isActive ? "var(--color-ink)" : "var(--color-stone-alt)" }}>
                  {item.title}
                </span>
              </button>
              {isActive ? (
                <div style={{ paddingBottom: "1.2rem" }}>
                  <DescBody desc={item.desc} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "16rem 1fr", gap: "3rem", alignItems: "start" }} className="activity-picker">
      <div ref={listRef} style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.title}
              ref={(el) => {
                buttonRefs.current[i] = el;
              }}
              onClick={() => setActive(i)}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.8rem",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--color-mist)",
                cursor: "pointer",
                padding: "0.75rem 0",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: isActive ? "var(--color-cham-dem)" : "var(--color-stone)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: isActive ? 600 : 400, fontSize: "0.95rem", color: isActive ? "var(--color-ink)" : "var(--color-stone-alt)" }}>
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      <div style={{ position: "relative", height: listHeight || undefined }}>
        <div
          ref={contentRef}
          style={{
            position: "absolute",
            top: adjustedTop,
            left: 0,
            right: 0,
            transition: "top .3s var(--ease-standard)",
          }}
        >
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "1.2rem" }}>
            {current.title}
          </span>
          <DescBody desc={current.desc} />
        </div>
      </div>
    </div>
  );
}

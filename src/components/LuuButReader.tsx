"use client";

import { useState, useRef } from "react";
import type { Entry } from "@/data/luuBut";

const pStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.2rem",
};

/** Numbered-grid entry picker + reading pane, with a brief fade on switch — lưu bút guestbook. */
export function LuuButReader({ entries }: { entries: Entry[] }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const dateRef = useRef<HTMLDivElement>(null);

  function select(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
      // Scroll to align with bottom of header image
      if (dateRef.current) {
        const rect = dateRef.current.getBoundingClientRect();
        const offset = window.scrollY + rect.top - 200; // Adjust 200px based on image height + margin
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 180);
  }

  const current = entries[active];

  return (
    <div className="lb-shell">
      <div className="lb-rail">
        <div className="lb-list">
          {entries.map((_, i) => (
            <button key={i} className={`lb-item${i === active ? " active" : ""}`} onClick={() => select(i)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div style={{ opacity: fading ? 0 : 1, transition: "opacity .18s ease" }}>
        <div ref={dateRef} style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.5rem" }}>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-stone)", display: "block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>{current.date}</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.5rem, 4vw, 2.1rem)", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 0.4rem" }}>
          lời thì thầm của {current.name}
        </h2>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.06em", color: "var(--color-stone)", marginBottom: "1.75rem" }}>{current.role}</span>

        {current.blocks.map((b, i) =>
          b.type === "p" ? (
            <p key={i} style={pStyle}>
              {b.text}
            </p>
          ) : (
            <span key={i} className="day-label">
              {b.text}
            </span>
          ),
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-mist)" }}>
          {active > 0 ? (
            <button
              onClick={() => select(active - 1)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              ← lưu bút trước
            </button>
          ) : (
            <span />
          )}
          {active < entries.length - 1 ? (
            <button
              onClick={() => select(active + 1)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              lưu bút sau →
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

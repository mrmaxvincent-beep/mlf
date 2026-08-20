"use client";

import { useRef, useState } from "react";
import type { Letter } from "@/data/bienThuChoHy";

/** idx-rail letter picker + reading pane — biên-thư-cho-Hy. */
export function LetterReader({ letters }: { letters: Letter[] }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  function select(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 200);
  }

  function selectAndScroll(i: number) {
    if (headerRef.current) {
      const top = window.scrollY + headerRef.current.getBoundingClientRect().top - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    select(i);
  }

  const current = letters[active];

  return (
    <div className="letters-shell">
      <div className="idx-rail">
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "0.3rem", top: "0.85rem", bottom: "0.85rem", width: "1px", background: "var(--color-mist)" }} />
          {letters.map((l, i) => {
            const isActive = i === active;
            return (
              <button key={l.date} className={`idx-item${isActive ? " active" : ""}`} onClick={() => select(i)} style={{ position: "relative", paddingLeft: "1.1rem" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "0.3rem",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: isActive ? 9 : 6,
                    height: isActive ? 9 : 6,
                    borderRadius: "50%",
                    background: isActive ? "var(--color-cham-dem)" : "var(--color-stone)",
                    transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease",
                  }}
                />
                <span className="idx-num">{String(i + 1).padStart(2, "0")}</span>
                {l.date}
              </button>
            );
          })}
        </div>
      </div>

      <div className="letter-fade" style={{ opacity: fading ? 0 : 1 }}>
        <div ref={headerRef} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-stone)", display: "block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>Măng Đen, {current.date}</span>
          </div>
        </div>

        {current.paragraphs.map((p, i) => (
          <p key={i} className="letter-para">
            {p}
          </p>
        ))}

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-ink)", textAlign: "right", margin: "2rem 0 0", maxWidth: "98ch" }}>— mộc, Măng Đen</p>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-mist)" }}>
          {active > 0 ? (
            <button
              onClick={() => selectAndScroll(active - 1)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "baseline", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              ← thư trước
            </button>
          ) : (
            <span />
          )}
          {active < letters.length - 1 ? (
            <button
              onClick={() => selectAndScroll(active + 1)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "baseline", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              thư cũ hơn →
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

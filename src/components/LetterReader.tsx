"use client";

import { useState } from "react";
import type { Letter } from "@/data/bienThuChoHy";

/** idx-rail letter picker + reading pane with a wax-stamp folio marker — biên-thư-cho-Hy. */
export function LetterReader({ letters }: { letters: Letter[] }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function select(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 200);
  }

  const current = letters[active];
  const num = String(active + 1).padStart(2, "0");

  return (
    <div className="letters-shell">
      <div className="idx-rail">
        {letters.map((l, i) => (
          <button key={l.date} className={`idx-item${i === active ? " active" : ""}`} onClick={() => select(i)}>
            <span className="idx-num">{String(i + 1).padStart(2, "0")}</span>
            {l.date}
          </button>
        ))}
      </div>

      <div className="letter-fade" style={{ opacity: fading ? 0 : 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-stone)", display: "block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>Măng Đen, {current.date}</span>
          </div>
          <div className="letter-stamp">
            <span className="stamp-place">mộc</span>
            <span className="stamp-num">thư {num}</span>
          </div>
        </div>

        {current.paragraphs.map((p, i) => (
          <p key={i} className="letter-para">
            {p}
          </p>
        ))}

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-ink)", textAlign: "right", margin: "2rem 0 0" }}>— mộc, Măng Đen</p>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-mist)" }}>
          {active > 0 ? (
            <button
              onClick={() => select(active - 1)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "baseline", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              ← thư trước
            </button>
          ) : (
            <span />
          )}
          {active < letters.length - 1 ? (
            <button
              onClick={() => select(active + 1)}
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

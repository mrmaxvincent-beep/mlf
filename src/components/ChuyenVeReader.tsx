"use client";

import { useEffect, useRef, useState } from "react";
import type { Episode } from "@/data/chuyenVe";

/** cv-shell episode picker + Q&A reading pane, with a brief fade on switch — chuyện-về interview series. */
export function ChuyenVeReader({ episodes }: { episodes: Episode[] }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const prevActive = useRef<number | null>(null);
  useEffect(() => {
    if (prevActive.current !== null && prevActive.current !== active) {
      const anchor = document.getElementById("cv-motif");
      if (anchor) {
        const top = window.scrollY + anchor.getBoundingClientRect().top - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    prevActive.current = active;
  }, [active]);

  function select(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 180);
  }

  const current = episodes[active];

  return (
    <div className="cv-shell" style={{ marginBottom: "5rem" }}>
      <div className="cv-rail">
        <div className="cv-list">
          {episodes.map((ep, i) => (
            <button key={ep.num} className={`cv-item${i === active ? " active" : ""}`} onClick={() => select(i)}>
              <span className="cv-num">
                kỳ {ep.num} · {ep.date}
              </span>
              <span className="cv-name">{ep.name}</span>
              <span className="cv-role">{ep.role}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ opacity: fading ? 0 : 1, transition: "opacity .18s ease" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.5rem" }}>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-stone)", display: "block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
            kỳ {current.num} - {current.date}
          </span>
        </div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 1.75rem" }}>
          {current.title}
        </h2>

        {current.intro.map((p, i) => (
          <p key={i} className="p">
            {p}
          </p>
        ))}

        {current.blocks.map((b, i) => {
          if (b.type === "q")
            return (
              <div key={i} className="qa-q">
                <span className="qa-mark">⸺</span>
                <span className="qa-q-text">{b.text}</span>
              </div>
            );
          if (b.type === "a")
            return (
              <p key={i} className="qa-a">
                {b.text}
              </p>
            );
          if (b.type === "interlude")
            return (
              <div key={i} className="interlude">
                •<span className="interlude-text">{b.text}</span>
              </div>
            );
          return (
            <span key={i} className="sub-label">
              {b.text}
            </span>
          );
        })}

        {current.outro.map((p, i) => (
          <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: i === 0 ? "2rem 0 0" : "1rem 0 0" }}>
            {p}
          </p>
        ))}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-mist)" }}>
          {active > 0 ? (
            <button
              onClick={() => select(active - 1)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              ← kỳ trước
            </button>
          ) : (
            <span />
          )}
          {active < episodes.length - 1 ? (
            <button
              onClick={() => select(active + 1)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              kỳ sau →
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Entry } from "@/data/thuGuiMoc";

const pStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.2rem",
};

/** Numbered-grid entry picker + reading pane, with a brief fade on switch — thư-gửi-mộc guestbook. URL là /thu-gui-moc/[no] nên share thẳng được một lá thư. */
export function ThuGuiMocReader({ entries: unsorted, initialNo }: { entries: Entry[]; initialNo: number }) {
  const router = useRouter();
  // Số thứ tự `no` là cố định của từng lá thư (1 = lâu nhất); luôn xếp theo số này, mở sẵn lá mới nhất.
  const entries = [...unsorted].sort((a, b) => a.no - b.no);
  const foundIndex = entries.findIndex((e) => e.no === initialNo);
  const active = foundIndex === -1 ? entries.length - 1 : foundIndex;
  const [fading, setFading] = useState(false);
  const dateRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  function select(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      router.push(`/thu-gui-moc/${entries[i].no}`, { scroll: false });
    }, 180);
  }

  useEffect(() => {
    setFading(false);
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // Scroll to align with bottom of header image
    if (dateRef.current) {
      const rect = dateRef.current.getBoundingClientRect();
      const offset = window.scrollY + rect.top - 200; // Adjust 200px based on image height + margin
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialNo]);

  const current = entries[active];

  return (
    <div className="lb-shell">
      <div className="lb-rail">
        <div className="lb-list">
          {entries.map((e, i) => (
            <button key={e.no} className={`lb-item${i === active ? " active" : ""}`} onClick={() => select(i)}>
              {e.no}
            </button>
          ))}
        </div>
      </div>

      <div className="lb-content" style={{ opacity: fading ? 0 : 1, transition: "opacity .18s ease" }}>
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
              ← thư trước
            </button>
          ) : (
            <span />
          )}
          {active < entries.length - 1 ? (
            <button
              onClick={() => select(active + 1)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              thư sau →
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

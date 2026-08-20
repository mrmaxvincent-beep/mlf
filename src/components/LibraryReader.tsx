"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Note } from "@/data/thuVien";

const paraStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.2rem",
};

/** Wraps the first case-insensitive match of `q` inside `text` in a styled <mark>. */
function highlightMatch(text: string, q: string) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark style={{ background: "var(--color-cotton)", color: "var(--color-cham-dem)", borderRadius: "2px" }}>{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  );
}

/** Searchable rail + centered reading pane for "thư viện ở-yên" — pick a numbered note, read it centered, step prev/next. */
export function LibraryReader({ notes }: { notes: Note[] }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const prevActive = useRef<number | null>(null);
  useEffect(() => {
    if (prevActive.current !== null && prevActive.current !== active) {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
    prevActive.current = active;
  }, [active]);

  const withNum = useMemo(() => notes.map((n, i) => ({ ...n, num: String(i + 1).padStart(2, "0"), idx: i })), [notes]);
  const q = query.trim().toLowerCase();
  const filtered = q ? withNum.filter((n) => n.title.toLowerCase().includes(q)) : withNum;
  const current = withNum[active];
  const total = withNum.length;

  function selectNote(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 400);
  }

  return (
    <div className="lib-shell">
      <div className="lib-rail">
        <input className="lib-search" type="text" placeholder="tìm theo tiêu đề…" value={query} onChange={(e) => setQuery(e.target.value)} />
        <span className="lib-count">
          {filtered.length} / {total} ghi chép
        </span>
        <div className="lib-list">
          {filtered.map((n) => (
            <button key={n.idx} className={`lib-item${n.idx === active ? " active" : ""}`} onClick={() => selectNote(n.idx)}>
              <span className="lib-item-num">{n.num}</span>
              {highlightMatch(n.title, q)}
            </button>
          ))}
        </div>
      </div>

      <div>
        {filtered.length ? (
          <div style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(-8px)" : "translateY(0)", transition: "opacity 0.4s ease, transform 0.4s ease", display: "flex", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", alignSelf: "flex-start", padding: "1.8rem 1.2rem", border: "1px solid var(--color-mist)" }}>
              {`${current.num}/${total}`.split("").map((ch, i) => (
                <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.05em", color: "var(--color-cham)", lineHeight: 1.7 }}>
                  {ch}
                </span>
              ))}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.25rem, 2.8vw, 1.6rem)", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 3.5rem", textAlign: "center" }}>
                {current.title}
              </h2>
              <div style={{ maxWidth: "38ch", margin: "0 auto" }}>
                {current.paragraphs.map((p, i) => (
                  <p key={i} style={paraStyle}>
                    {p}
                  </p>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", paddingTop: "1.5rem" }}>
                {active > 0 ? (
                  <button className="note-nav-btn" onClick={() => selectNote(active - 1)}>
                    ← ghi chép trước
                  </button>
                ) : (
                  <span />
                )}
                {active < total - 1 ? (
                  <button className="note-nav-btn" onClick={() => selectNote(active + 1)}>
                    ghi chép sau →
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--color-stone)", fontSize: "1.05rem" }}>không tìm thấy ghi chép nào khớp với từ khoá này.</p>
        )}
      </div>
    </div>
  );
}

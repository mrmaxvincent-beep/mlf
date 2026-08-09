"use client";

import { useState } from "react";
import type { Post } from "@/data/tuanDuBlog";

/** Sidebar post picker + reading pane, with a brief fade on switch — "người đi qua" blog. */
export function BlogReader({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function selectPost(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 180);
  }

  const current = posts[active];

  return (
    <div className="cv-shell" style={{ marginBottom: "5rem" }}>
      <div className="cv-rail">
        <div className="cv-list">
          {posts.map((p, i) => (
            <button key={p.title} className={`cv-item${i === active ? " active" : ""}`} onClick={() => selectPost(i)}>
              <span className="cv-num">
                {p.tag} · {p.date}
              </span>
              <span className="cv-name">{p.name}</span>
              <span className="cv-role">{p.role}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ width: "70%", maxWidth: "100%" }}>
        <div style={{ opacity: fading ? 0 : 1, transition: "opacity .18s ease" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.5rem" }}>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-stone)", display: "block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
              {current.tag} — {current.date}
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 1.75rem" }}>
            {current.title}
          </h2>

          {current.blocks.map((b, i) => {
            if (b.type === "p") return <p key={i} className="p">{b.text}</p>;
            if (b.type === "day") return <span key={i} className="day-label">{b.text}</span>;
            if (b.type === "poem") return <p key={i} className="poem-line">{b.text}</p>;
            if (b.type === "q")
              return (
                <div key={i} className="qa-q">
                  <span className="qa-mark">——</span>
                  <span className="qa-q-text">{b.text}</span>
                </div>
              );
            return <p key={i} className="qa-a">{b.text}</p>;
          })}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-mist)" }}>
            {active > 0 ? (
              <button
                onClick={() => selectPost(active - 1)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
              >
                ← bài trước
              </button>
            ) : (
              <span />
            )}
            {active < posts.length - 1 ? (
              <button
                onClick={() => selectPost(active + 1)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
              >
                bài sau →
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

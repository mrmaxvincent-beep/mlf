"use client";

import { useState } from "react";

export type Session = { n: string; title: string; items: string[] };

/** Round number-pill tab selector + content pane — course session breakdowns. */
export function SessionTabs({ sessions, total }: { sessions: Session[]; total?: number }) {
  const [active, setActive] = useState(sessions[0]?.n);
  const current = sessions.find((s) => s.n === active) ?? sessions[0];

  return (
    <div>
      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        {sessions.map((s) => {
          const isActive = active === s.n;
          return (
            <button
              key={s.n}
              onClick={() => setActive(s.n)}
              style={{
                width: "2.1rem",
                height: "2.1rem",
                borderRadius: "50%",
                border: `1px solid ${isActive ? "var(--color-cham-dem)" : "var(--color-mist)"}`,
                background: isActive ? "var(--color-cham-dem)" : "none",
                color: isActive ? "var(--color-paper-dem)" : "var(--color-stone)",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
              }}
            >
              {s.n}
            </button>
          );
        })}
      </div>
      {current ? (
        <div className="session-block">
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--color-cham-dem)", marginBottom: "0.4rem" }}>
            buổi {current.n} / {total ?? sessions.length}
          </span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.9rem" }}>
            {current.title}
          </span>
          {current.items.map((it) => (
            <div key={it} className="li-item">
              <span className="li-mark">·</span>
              <span>{it}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

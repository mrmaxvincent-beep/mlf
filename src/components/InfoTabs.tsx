"use client";

import { useState, type ReactNode } from "react";

/** Two-button tab switcher (phục hồi / an toàn & giới hạn) — thinh-không page. */
export function InfoTabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="wrap-wide" style={{ marginBottom: "2rem", maxWidth: "672px" }}>
        <div style={{ display: "flex", gap: "2rem", borderBottom: "1px solid var(--color-mist)" }}>
          {tabs.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className="tab-btn"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                borderBottom: `2px solid ${active === i ? "var(--color-cham-dem)" : "transparent"}`,
                cursor: "pointer",
                padding: "0.7rem 0",
                color: active === i ? "var(--color-ink)" : "var(--color-stone)",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="wrap-wide" style={{ marginBottom: "5rem", maxWidth: "672px" }}>
        {tabs[active].content}
      </div>
    </div>
  );
}

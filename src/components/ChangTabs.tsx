"use client";

import { useState } from "react";

export type Chang = {
  num: string;
  name: string;
  range: string;
  weeks: { n: number; title: string; points: string[] }[];
};

/** 4-tab "chặng" (stage) selector for the thinh-không 12-week curriculum. */
export function ChangTabs({ chang }: { chang: Chang[] }) {
  const [active, setActive] = useState(chang[0]?.num);
  const current = chang.find((c) => c.num === active) ?? chang[0];

  return (
    <div>
      <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderBottom: "1px solid var(--color-mist)", marginBottom: "1.5rem" }}>
        {chang.map((c) => {
          const isActive = active === c.num;
          return (
            <button
              key={c.num}
              onClick={() => setActive(c.num)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                borderBottom: `2px solid ${isActive ? "var(--color-cham-dem)" : "transparent"}`,
                cursor: "pointer",
                padding: "0.7rem 1.1rem 0.6rem",
                textAlign: "left",
                color: isActive ? "var(--color-ink)" : "var(--color-stone)",
                flex: 1,
              }}
            >
              chặng {c.num}
              <br />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", letterSpacing: 0, textTransform: "none", display: "block", marginTop: "0.2rem" }}>{c.name}</span>
            </button>
          );
        })}
      </div>
      {current ? (
        <div>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)", marginBottom: "1.5rem" }}>tuần {current.range}</span>
          {current.weeks.map((w) => (
            <div key={w.n} className="tuan-row" style={{ marginBottom: "0.6rem" }}>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.15rem" }}>
                tuần {w.n} — {w.title}
              </span>
              {w.points.map((p) => (
                <div key={p} className="li-item" style={{ padding: "0.05rem 0", lineHeight: 1.45 }}>
                  <span className="li-mark">·</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

"use client";

import { useState } from "react";

/** Two-tab switcher (phương tiện / trang thiết bị khác) — dạo một vòng page. */
export function AmenityTabs({ vehicles, amenities }: { vehicles: string[]; amenities: string[] }) {
  const [tab, setTab] = useState(0);
  const items = tab === 0 ? vehicles : amenities;

  return (
    <div>
      <div style={{ display: "flex", gap: "2rem", borderBottom: "1px solid var(--color-mist)", marginBottom: "1.5rem" }}>
        {["phương tiện", "trang thiết bị khác"].map((label, i) => (
          <button
            key={label}
            onClick={() => setTab(i)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0 0 0.9rem",
              color: tab === i ? "var(--color-ink)" : "var(--color-stone)",
              borderBottom: tab === i ? "1px solid var(--color-ink)" : "1px solid transparent",
              marginBottom: "-1px",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {items.map((item) => (
          <li key={item} style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-ink)", paddingLeft: "1rem", position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--color-moss)" }}>·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

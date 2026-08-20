"use client";

import { useState } from "react";

export function Testimonials({
  items,
  showDots = true,
  fontSize = "0.945rem",
}: {
  items: { text: string; attribution: string }[];
  showDots?: boolean;
  fontSize?: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem", textAlign: "center" }}>
      {showDots && (
        <div style={{ display: "flex", gap: "0.4rem" }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--color-moss)", display: "inline-block", opacity: 0.3 }}
            />
          ))}
        </div>
      )}

      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize,
          lineHeight: 1.45,
          color: "var(--color-ink)",
          maxWidth: "52ch",
          margin: 0,
          transition: "opacity .4s var(--ease-standard), filter .4s var(--ease-standard)",
        }}
      >
        “{items[active].text}”
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-stone)",
          }}
        >
          {items[active].attribution}
        </span>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                border: "none",
                background: "none",
                padding: "0.35rem 0.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.1em",
                  color: active === i ? "var(--color-ink)" : "var(--color-stone)",
                  transition: "color .3s var(--ease-standard)",
                }}
              >
                ( 0{i + 1} )
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

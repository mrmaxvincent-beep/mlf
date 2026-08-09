"use client";

import { useState } from "react";
import { Accordion } from "./Accordion";

export function FaqAccordion({ items, initialCount = 6 }: { items: { q: string; a: string }[]; initialCount?: number }) {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? items : items.slice(0, initialCount);
  const hasMore = items.length > initialCount;

  return (
    <Accordion label="câu hỏi thường gặp">
      <div style={{ display: "flex", flexDirection: "column" }}>
        {shown.map((item) => (
          <div key={item.q} style={{ borderTop: "1px solid var(--color-mist)", padding: "0.95rem 0" }}>
            <details>
              <summary style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.6, color: "var(--color-ink)" }}>{item.q}</span>
                <span className="acc-icon" style={{ fontSize: "0.95rem", marginTop: "0.1rem" }}>
                  +
                </span>
              </summary>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0.8rem 0 0", textAlign: "justify" }}>
                {item.a}
              </p>
            </details>
          </div>
        ))}
        {hasMore ? (
          <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "1.1rem", textAlign: "center" }}>
            <button
              className="go mono-link"
              onClick={() => setShowAll((v) => !v)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              {showAll ? "thu gọn" : `xem thêm ${items.length - initialCount} câu hỏi`} <span className="ar">↓</span>
            </button>
          </div>
        ) : null}
      </div>
    </Accordion>
  );
}

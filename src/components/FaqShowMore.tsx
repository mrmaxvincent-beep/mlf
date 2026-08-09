"use client";

import { useState } from "react";
import { Disclosure } from "./Disclosure";

/** Flat FAQ list, each row independently toggleable, with a "show more" reveal past the initial count. */
export function FaqShowMore({ items, initialCount = 6 }: { items: { q: string; a: string }[]; initialCount?: number }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, initialCount);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid var(--color-mist)", borderBottom: "1px solid var(--color-mist)", padding: "0.9rem 0", marginBottom: "1.6rem" }}>
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          câu hỏi thường gặp
        </span>
      </div>
      {shown.map((item) => (
        <Disclosure key={item.q} trigger={<span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.9rem", color: "var(--color-ink)" }}>{item.q}</span>}>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone)", margin: 0 }}>{item.a}</p>
        </Disclosure>
      ))}
      {!expanded && items.length > initialCount ? (
        <button
          onClick={() => setExpanded(true)}
          className="mono-link"
          style={{ display: "block", marginTop: "1.4rem", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
        >
          xem thêm câu hỏi <span className="ar">→</span>
        </button>
      ) : null}
    </div>
  );
}

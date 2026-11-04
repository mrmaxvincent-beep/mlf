"use client";

import { useState } from "react";
import { Disclosure } from "./Disclosure";

/** Flat FAQ list, each row independently toggleable, with a "show more" reveal past the initial count. */
export function FaqShowMore({ items, initialCount = 6 }: { items: { q: string; a: string }[]; initialCount?: number }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, initialCount);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.9rem 0", marginBottom: "1.6rem" }}>
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          câu hỏi thường gặp
        </span>
      </div>
      {shown.map((item) => (
        <div key={item.q} style={{ paddingLeft: "1.5rem" }}>
          <Disclosure trigger={<span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.9rem", color: "var(--color-ink)" }}>{item.q}</span>}>
            {item.a.split("\n\n").map((para, k) => {
              const head = para.startsWith("**") && para.endsWith("**");
              return (
                <p
                  key={k}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: head ? 500 : 300,
                    fontSize: "0.88rem",
                    lineHeight: 1.85,
                    color: head ? "var(--color-ink)" : "var(--color-stone)",
                    margin: k === 0 ? 0 : head ? "1.3rem 0 0" : "0.7rem 0 0",
                  }}
                >
                  {head ? para.slice(2, -2) : para}
                </p>
              );
            })}
          </Disclosure>
        </div>
      ))}
      {!expanded && items.length > initialCount ? (
        <button
          onClick={() => setExpanded(true)}
          className="mono-link faq-show-more"
          style={{ display: "block", marginTop: "1.4rem", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", transition: "color 0.2s ease" }}
        >
          xem thêm câu hỏi <span className="ar">→</span>
        </button>
      ) : null}
    </div>
  );
}

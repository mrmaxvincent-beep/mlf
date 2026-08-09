"use client";

import { useState } from "react";

/** Flat FAQ list with a "+" marker that rotates 45° on open — cộng đồng ở-yên FAQ. */
export function FaqPlusList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {items.map((item, i) => (
        <div key={item.q} className="faq-row">
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span style={{ flex: "none", transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .2s ease", fontFamily: "var(--font-sans)", color: "var(--color-stone)" }}>+</span>
          </button>
          {open === i ? <p className="faq-a">{item.a}</p> : null}
        </div>
      ))}
    </>
  );
}

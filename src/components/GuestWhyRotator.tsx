"use client";

import { useRef, useState } from "react";

/** Quote picker ("những vị khách tới mlf để làm gì?") with a fade/blur transition and clickable progress dots. */
export function GuestWhyRotator({ quotes }: { quotes: string[] }) {
  const [shown, setShown] = useState(0);
  const [fading, setFading] = useState(false);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSelect(i: number) {
    if (i === shown) return;
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    setFading(true);
    fadeTimeoutRef.current = setTimeout(() => {
      setShown(i);
      setFading(false);
    }, 800);
  }

  return (
    <div
      className="wrap"
      style={{ marginBottom: "5rem", maxWidth: "58ch", textAlign: "center", minHeight: "11rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "1.35rem",
          lineHeight: 1.7,
          color: "var(--color-ink)",
          margin: 0,
          transition: "opacity .8s var(--ease-standard), filter .8s var(--ease-standard)",
          opacity: fading ? 0 : 1,
          filter: fading ? "blur(3px)" : "blur(0px)",
        }}
      >
        &ldquo;{quotes[shown]}&rdquo;
      </p>
      <div style={{ display: "flex", gap: "0.6rem" }}>
        {quotes.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`xem câu ${i + 1}`}
            aria-current={i === shown}
            onClick={() => handleSelect(i)}
            style={{ background: "none", border: "none", padding: "0.4rem", margin: "-0.4rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: i === shown ? "var(--color-moss)" : "var(--color-mist)", transition: "background .5s var(--ease-standard)" }} />
          </button>
        ))}
      </div>
    </div>
  );
}

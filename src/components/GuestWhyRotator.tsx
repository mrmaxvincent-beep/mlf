"use client";

import { useEffect, useRef, useState } from "react";

/** Auto-rotating quote ("những vị khách tới mlf để làm gì?") with a fade/blur transition and progress dots. */
export function GuestWhyRotator({ quotes }: { quotes: string[] }) {
  const [shown, setShown] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setShown((s) => (s + 1) % quotes.length);
        setFading(false);
      }, 800);
    }, 4200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quotes.length]);

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
      <div style={{ display: "flex", gap: "0.4rem" }}>
        {quotes.map((_, i) => (
          <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i === shown ? "var(--color-moss)" : "var(--color-mist)", transition: "background .5s var(--ease-standard)" }} />
        ))}
      </div>
    </div>
  );
}

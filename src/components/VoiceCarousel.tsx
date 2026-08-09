"use client";

import { useState } from "react";

type Voice = { quote: string; attr: string };

/** Fading quote + numbered chip selector — "tiếng nói từ ở-yên" testimonial carousel. */
export function VoiceCarousel({ voices }: { voices: Voice[] }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  function select(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 250);
  }

  const current = voices[active];

  return (
    <div style={{ border: "1px solid var(--color-mist)", padding: "2.5rem 2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5rem", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "0.95rem",
            lineHeight: 1.85,
            color: "var(--color-ink)",
            maxWidth: "52ch",
            margin: 0,
            transition: "opacity .4s var(--ease-standard), filter .4s var(--ease-standard)",
            opacity: fading ? 0 : 1,
            filter: fading ? "blur(3px)" : "blur(0px)",
          }}
        >
          &ldquo;{current.quote}&rdquo;
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--color-stone)", transition: "opacity .5s var(--ease-standard)", opacity: fading ? 0 : 1 }}>{current.attr}</span>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            {voices.map((_, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                style={{ display: "flex", alignItems: "center", cursor: "pointer", border: "none", background: "none", padding: "0.35rem 0" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    height: "1.6rem",
                    padding: "0 0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    color: active === i ? "var(--color-ink)" : "var(--color-stone)",
                    transition: "color .3s var(--ease-standard)",
                  }}
                >
                  ( {String(i + 1).padStart(2, "0")} )
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

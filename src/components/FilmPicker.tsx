"use client";

import { useRef, useState } from "react";
import type { Phim } from "@/data/phimOYen";

const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  height: "2.2rem",
  padding: "0 1.1rem",
  borderRadius: "999px",
  border: "1px solid var(--color-mist)",
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--color-stone)",
};

/** Single-film card ("mlf giới thiệu những bộ phim để ở-yên") with a trailer embed slot, a feeling note,
 * and a button that swaps to another random pick from the list — mirrors GuestWhyRotator's fade transition. */
export function FilmPicker({ films }: { films: Phim[] }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const film = films[index];

  function pickAnother() {
    if (films.length <= 1) return;
    let next = index;
    while (next === index) next = Math.floor(Math.random() * films.length);
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    setFading(true);
    // 1.1s echoes a slow inhale/exhale rather than a snap-cut — matches the site's unhurried pacing
    fadeTimeoutRef.current = setTimeout(() => {
      setIndex(next);
      setFading(false);
    }, 1100);
  }

  return (
    <div style={{ border: "1px solid var(--color-mist)", borderRadius: "1rem", padding: "2rem" }}>
      <div
        style={{
          transition: "opacity 1.1s ease-in-out, filter 1.1s ease-in-out, transform 1.1s ease-in-out",
          opacity: fading ? 0 : 1,
          filter: fading ? "blur(4px)" : "blur(0px)",
          transform: fading ? "scale(0.985)" : "scale(1)",
        }}
      >
        <div style={{ position: "relative", marginBottom: "1.5rem" }}>
          {/* soft warm glow — the page's one use of --color-ember, the design system's emotional accent */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-10%",
              background: "radial-gradient(closest-side, var(--color-ember) 0%, transparent 72%)",
              opacity: 0.22,
              filter: "blur(28px)",
              pointerEvents: "none",
              transition: "opacity 1.1s ease-in-out",
            }}
          />
          <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "0.75rem", overflow: "hidden" }}>
            {film.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?modestbranding=1&rel=0&iv_load_policy=3`}
                title={`trailer · ${film.title}`}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div style={{ position: "absolute", inset: 0, background: "var(--color-cham-dem)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-paper)" }}>
                  ĐANG CẬP NHẬT
                </span>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.4rem", color: "var(--color-ink)" }}>
            {film.title}
          </span>
          <span style={pill}>{film.year}</span>
        </div>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.1rem" }}>
          {film.feeling}
        </p>

        <span style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.86rem", color: "var(--color-stone-alt)", marginBottom: "1.4rem" }}>
          hợp để xem cùng <span style={{ color: "var(--color-ink)" }}>{film.pairWith}</span>
        </span>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {film.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.06em",
                color: "var(--color-stone)",
                border: "1px solid var(--color-mist)",
                borderRadius: "999px",
                padding: "0.35rem 0.75rem",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          type="button"
          onClick={pickAnother}
          className="cta-btn cta-btn--outline"
          style={{ cursor: "pointer", borderRadius: "999px" }}
        >
          thử một bộ phim khác <span className="ar">→</span>
        </button>
      </div>
    </div>
  );
}

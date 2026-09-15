"use client";

import { useEffect, useRef, useState } from "react";
import type { Phim } from "@/data/phimOYen";

/**
 * Facade: shows a static poster + our own play button first, and only mounts the real
 * YouTube iframe on click — page stays light until someone actually wants to watch.
 * Also listens for the player's "ended" postMessage (enablejsapi=1) and unmounts the
 * iframe back to the poster, so the last frame is never YouTube's related-video grid
 * (rel=0 stopped working cross-channel since 2018 — this sidesteps it entirely).
 */
function TrailerFrame({ film }: { film: Phim }) {
  const [playing, setPlaying] = useState(false);

  // reset to the poster whenever the featured film changes (e.g. "thử một bộ phim khác")
  useEffect(() => {
    setPlaying(false);
  }, [film.youtubeId]);

  useEffect(() => {
    if (!playing) return;
    function onMessage(e: MessageEvent) {
      if (!e.origin.includes("youtube")) return;
      try {
        const data = JSON.parse(e.data);
        if (data.event === "onStateChange" && data.info === 0) setPlaying(false);
      } catch {
        // ignore non-JSON postMessages from other embeds/extensions
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [playing]);

  if (!film.youtubeId) {
    return (
      <div style={{ position: "absolute", inset: 0, background: "var(--color-cham-dem)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-paper)" }}>
          ĐANG CẬP NHẬT
        </span>
      </div>
    );
  }

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&enablejsapi=1&modestbranding=1&rel=0&iv_load_policy=3`}
        title={`trailer · ${film.title}`}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  const poster = film.posterSrc ?? `https://i.ytimg.com/vi/${film.youtubeId}/hqdefault.jpg`;

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`xem trailer · ${film.title}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        padding: 0,
        border: "none",
        cursor: "pointer",
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20, 18, 15, 0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "1.5px solid var(--color-paper)",
            background: "rgba(20, 18, 15, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: 0,
              height: 0,
              borderTop: "9px solid transparent",
              borderBottom: "9px solid transparent",
              borderLeft: "14px solid var(--color-paper)",
              marginLeft: "3px",
            }}
          />
        </span>
      </span>
    </button>
  );
}

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

/** Shuffles 0..n-1 (Fisher–Yates) so every film is shown once before any repeats. */
function shuffledOrder(n: number, avoidFirst?: number) {
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  // avoid the new queue starting with the film just shown, so back-to-back clicks never repeat
  if (avoidFirst !== undefined && order.length > 1 && order[0] === avoidFirst) {
    [order[0], order[1]] = [order[1], order[0]];
  }
  return order;
}

/** Single-film card ("mlf giới thiệu những bộ phim để ở-yên") with a trailer embed slot, a feeling note,
 * and a button that cycles to the next film in a shuffled order — every film is shown once before any repeats,
 * instead of a naive random pick which can resurface the same film after just one or two clicks. */
export function FilmPicker({ films }: { films: Phim[] }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const queueRef = useRef<number[]>([]);
  const film = films[index];

  function pickAnother() {
    if (films.length <= 1) return;
    if (queueRef.current.length === 0) {
      queueRef.current = shuffledOrder(films.length, index);
    }
    const next = queueRef.current.shift()!;
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    setFading(true);
    // 1.1s echoes a slow inhale/exhale rather than a snap-cut — matches the site's unhurried pacing
    fadeTimeoutRef.current = setTimeout(() => {
      setIndex(next);
      setFading(false);
    }, 1100);
  }

  return (
    <div>
      <div style={{ border: "1px solid var(--color-mist)", borderRadius: "1.25rem", padding: "clamp(1rem, 4vw, 2rem)", minHeight: "24rem", display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "clamp(1.25rem, 6vw, 3rem)",
            flexWrap: "wrap",
            transition: "opacity 1.1s ease-in-out, filter 1.1s ease-in-out, transform 1.1s ease-in-out",
            opacity: fading ? 0 : 1,
            filter: fading ? "blur(4px)" : "blur(0px)",
            transform: fading ? "scale(0.985)" : "scale(1)",
          }}
        >
          <div style={{ position: "relative", flex: "1.3 1 320px", minWidth: 260 }}>
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
            <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "1.25rem", overflow: "hidden" }}>
              <TrailerFrame film={film} />
            </div>
          </div>

          <div style={{ flex: "1 1 320px", minWidth: 260, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "0.75rem", flexWrap: "wrap", marginBottom: "clamp(0.7rem, 3vw, 1.3rem)" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.35rem, 5vw, 2rem)", color: "var(--color-ink)" }}>
                {film.title}
              </span>
              <span style={pill}>{film.year}</span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.82rem, 2.2vw, 0.92rem)",
                lineHeight: 1.65,
                color: "var(--color-ink)",
                margin: "0 0 clamp(0.7rem, 3vw, 1.1rem)",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {film.feeling}
            </p>

            {film.quote ? (
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(0.85rem, 2.6vw, 1rem)",
                  lineHeight: 1.55,
                  color: "var(--color-cham-dem)",
                  borderLeft: "2px solid var(--color-mist)",
                  padding: "0.2rem 0 0.2rem clamp(0.8rem, 3vw, 1.1rem)",
                  margin: "0 0 clamp(0.7rem, 3vw, 1.2rem)",
                }}
              >
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  &ldquo;{film.quote}&rdquo;
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontStyle: "normal", letterSpacing: "0.06em", color: "var(--color-stone)", marginTop: "0.5rem" }}>
                  — {film.quoteBy}
                </span>
              </p>
            ) : null}

            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(0.4rem, 2vw, 0.6rem)" }}>
              {film.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.55rem, 2vw, 0.62rem)",
                    letterSpacing: "0.06em",
                    color: "var(--color-stone)",
                    border: "1px solid var(--color-mist)",
                    borderRadius: "999px",
                    padding: "clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.6rem, 3vw, 0.85rem)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
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

"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";

/** Auto-advancing hero image story with caption overlay, prev/next arrows, pause-on-hover. */
export function ImageStoryCarousel({ stories, showCounter = true }: { stories: { label: string; src?: string; caption: string }[]; showCounter?: boolean }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function start() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % stories.length), 6000);
  }

  useEffect(() => {
    start();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function go(next: number) {
    setIndex((next + stories.length) % stories.length);
    start();
  }

  const current = stories[index];

  return (
    <div style={{ position: "relative", aspectRatio: "16/9" }} onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)} onMouseLeave={start}>
      <ImagePlaceholder label={current.label} src={current.src} aspectRatio="16/9" style={{ height: "100%" }} />
      <button
        onClick={() => go(index - 1)}
        aria-label="trước"
        style={{
          position: "absolute",
          left: "0.9rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "2.4rem",
          height: "2.4rem",
          borderRadius: "50%",
          border: "1px solid rgba(233,228,216,.7)",
          background: "rgba(35,46,63,.35)",
          color: "#E9E4D8",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          lineHeight: 1,
        }}
      >
        ←
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="tiếp"
        style={{
          position: "absolute",
          right: "0.9rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "2.4rem",
          height: "2.4rem",
          borderRadius: "50%",
          border: "1px solid rgba(233,228,216,.7)",
          background: "rgba(35,46,63,.35)",
          color: "#E9E4D8",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          lineHeight: 1,
        }}
      >
        →
      </button>
      {showCounter && (
        <span
          style={{
            position: "absolute",
            top: "0.9rem",
            right: "0.9rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.08em",
            color: "#E9E4D8",
            background: "rgba(35,46,63,.35)",
            padding: "0.25rem 0.55rem",
            borderRadius: 2,
          }}
        >
          {index + 1} / {stories.length}
        </span>
      )}
      {current.caption && (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, background: "rgba(35,46,63,.55)", padding: "1rem 1.5rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.98rem", lineHeight: 1.6, color: "#E9E4D8", textAlign: "center", margin: 0 }}>{current.caption}</p>
        </div>
      )}
    </div>
  );
}

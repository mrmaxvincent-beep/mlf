"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface CarouselImage {
  label: string;
  src?: string;
  aspectRatio?: string;
}

export function ImageCarousel({ images, showCounter = true, showDots = true }: { images: CarouselImage[]; showCounter?: boolean; showDots?: boolean }) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (i: number) => {
      setCurrent(((i % images.length) + images.length) % images.length);
    },
    [images.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length, current]);

  const img = images[current];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ position: "relative", width: "100%", overflow: "hidden", borderRadius: "0.4rem" }}>
        {img.src ? (
          <Image
            key={current}
            src={img.src}
            alt={img.label}
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <div
            key={current}
            style={{
              width: "100%",
              aspectRatio: img.aspectRatio || "4/3",
              backgroundColor: "var(--color-mist)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-stone)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
            }}
          >
            {img.label}
          </div>
        )}

        <button
          type="button"
          aria-label="ảnh trước"
          onClick={() => goTo(current - 1)}
          style={{
            position: "absolute",
            top: "50%",
            left: "0.8rem",
            transform: "translateY(-50%)",
            width: "2.2rem",
            height: "2.2rem",
            borderRadius: "50%",
            border: "1px solid var(--color-mist)",
            background: "var(--color-paper)",
            color: "var(--color-ink)",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ←
        </button>
        <button
          type="button"
          aria-label="ảnh kế tiếp"
          onClick={() => goTo(current + 1)}
          style={{
            position: "absolute",
            top: "50%",
            right: "0.8rem",
            transform: "translateY(-50%)",
            width: "2.2rem",
            height: "2.2rem",
            borderRadius: "50%",
            border: "1px solid var(--color-mist)",
            background: "var(--color-paper)",
            color: "var(--color-ink)",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          →
        </button>

        {showCounter && (
          <span
            style={{
              position: "absolute",
              bottom: "0.8rem",
              right: "0.9rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.06em",
              color: "var(--color-ink)",
              background: "var(--color-paper)",
              padding: "0.3rem 0.6rem",
              borderRadius: "999px",
              border: "1px solid var(--color-mist)",
            }}
          >
            {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        )}
      </div>

      {showDots && (
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.1rem", flexWrap: "wrap" }}>
          {images.map((im, i) => (
            <button
              key={im.label}
              type="button"
              aria-label={`xem ${im.label}`}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "1.6rem" : "0.4rem",
                height: "0.4rem",
                borderRadius: "999px",
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === current ? "var(--color-cham-dem)" : "var(--color-mist)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

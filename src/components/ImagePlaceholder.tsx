import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * Stand-in for a photo that hasn't been supplied yet — mirrors the design
 * source's <image-slot placeholder="..."> pattern. Pass `src` once the real
 * photo exists and this renders it instead, no caller changes needed.
 */
export function ImagePlaceholder({
  label,
  aspectRatio = "4/5",
  src,
  alt = "",
  style,
}: {
  label: string;
  aspectRatio?: string;
  src?: string;
  alt?: string;
  style?: CSSProperties;
}) {
  if (src) {
    return (
      <div style={{ position: "relative", width: "100%", aspectRatio, ...style }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        aspectRatio,
        background: "var(--color-photo-placeholder)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          letterSpacing: "0.08em",
          color: "var(--color-stone)",
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        {label}
      </span>
    </div>
  );
}

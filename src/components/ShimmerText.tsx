"use client";

import { CSSProperties, useState } from "react";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function ShimmerText({ children, className, style }: ShimmerTextProps) {
  const [isHovering, setIsHovering] = useState(false);

  const keyframes = `
    @keyframes shimmer {
      0% {
        backgroundPosition: -1000px 0;
      }
      100% {
        backgroundPosition: 1000px 0;
      }
    }
  `;

  const shimmerStyle: CSSProperties = {
    ...style,
    ...(isHovering && {
      backgroundImage: `linear-gradient(
        to right,
        currentColor 0%,
        rgba(255, 255, 255, 0.3) 40%,
        rgba(255, 255, 255, 0.3) 60%,
        currentColor 100%
      )`,
      backgroundSize: "1000px 100%",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animation: "shimmer 2s linear infinite",
    }),
  };

  return (
    <>
      <style>{keyframes}</style>
      <span
        className={className}
        style={shimmerStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {children}
      </span>
    </>
  );
}

export default ShimmerText;


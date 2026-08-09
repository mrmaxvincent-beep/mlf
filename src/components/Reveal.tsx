"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/** Fades a block up into place once it scrolls into view. */
export function Reveal({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} data-reveal={visible} className={className} style={style}>
      {children}
    </div>
  );
}

/** Reveals children one-by-one with a small stagger (vibe grid, stat rows, etc). */
export function RevealStagger({
  children,
  className,
  style,
  staggerMs = 80,
}: {
  children: ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  staggerMs?: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={className} style={style}>
      {children.map((child, i) => (
        <div
          key={i}
          data-reveal-child={visible}
          style={{ transitionDelay: visible ? `${i * staggerMs}ms` : "0ms" }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

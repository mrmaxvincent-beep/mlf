"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Dải cuộn ngang tự cuộn tới cuối khi mở, để mục mới nhất hiện trước trên màn hình hẹp. */
export function HScrollToEnd({ className, style, children }: { className?: string; style?: CSSProperties; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

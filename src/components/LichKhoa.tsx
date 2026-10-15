"use client";

import { useEffect, useState } from "react";

export type Khoa = { label: string; range: string; start: number; end: number };

const DAY = 86_400_000;

/** Danh sách các khóa học; trạng thái đã qua / đang diễn ra / sắp tới chỉ tính được sau khi mount vì site là static export. */
export function LichKhoa({ items }: { items: Khoa[] }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => setNow(Date.now()), []);

  const status = (k: Khoa) => {
    if (now === null) return null;
    if (now >= k.end + DAY) return "đã kết thúc";
    if (now >= k.start) return "đang diễn ra";
    return "sắp tới";
  };

  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {items.map((k, i) => {
        const st = status(k);
        const past = st === "đã kết thúc";
        return (
          <li
            key={k.label}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.2rem",
              flexWrap: "wrap",
              padding: "1rem 0",
              borderTop: i === 0 ? "1px solid var(--color-mist)" : "none",
              borderBottom: "1px solid var(--color-mist)",
              opacity: past ? 0.45 : 1,
            }}
          >
            <span style={{ flex: "none", width: "5.5rem", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", color: "var(--color-cham-dem)" }}>{k.label}</span>
            <span style={{ flex: "1 1 12rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.04em", color: "var(--color-ink)" }}>{k.range}</span>
            <span
              style={{
                marginLeft: "auto",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: st === "sắp tới" || st === "đang diễn ra" ? "var(--color-cham-dem)" : "var(--color-stone)",
              }}
            >
              {st ?? ""}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

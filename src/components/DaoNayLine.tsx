"use client";

import Link from "next/link";
import { ddmm, parseTraceDate, relativeLabel, type Trace } from "@/data/daoNay";
import { routes } from "@/lib/nav";
import { useToday, useTraces } from "@/lib/useTraces";

/** Dòng "dạo này" trên trang chủ — dấu vết mới nhất, thứ chứng minh nhà mộc còn đang thở. */
export function DaoNayLine({ fallback }: { fallback: Trace[] }) {
  const traces = useTraces(fallback, 1);
  const today = useToday();
  const newest = traces[0];

  if (!newest) return null;

  const date = parseTraceDate(newest.d);

  return (
    <div className="wrap" style={{ display: "flex", alignItems: "baseline", gap: "0.9rem", flexWrap: "wrap", paddingTop: "1.25rem" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ink)", flex: "none" }}>
        dạo này
      </span>
      <span style={{ flex: "1 1 16rem", minWidth: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.55, color: "var(--color-ink)" }}>
        {newest.body}
      </span>
      <Link href={routes.daoNay} className="go" style={{ flex: "none", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--color-stone)" }}>
        {today ? relativeLabel(date, today) : ddmm(date)} <span className="ar">→</span>
      </Link>
    </div>
  );
}

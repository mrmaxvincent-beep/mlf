"use client";

import Link from "next/link";
import { ddmm, parseTraceDate, relativeLabel, type Trace } from "@/data/daoNay";
import { routes } from "@/lib/nav";
import { useToday, useTraces } from "@/lib/useTraces";

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.1em",
  color: "var(--color-stone)",
};

/** Khung "dạo này" trên trang chủ — dấu vết mới nhất cùng một dòng cũ hơn, đủ để
 *  thấy đây là một dòng chảy đang tiếp diễn chứ không phải một câu trích lẻ. */
export function DaoNayLine({ fallback }: { fallback: Trace[] }) {
  const traces = useTraces(fallback, 2);
  const today = useToday();
  const [newest, previous] = traces;

  if (!newest) return null;

  const date = parseTraceDate(newest.d);

  return (
    <div className="wrap" style={{ paddingTop: "1.25rem" }}>
      <div className="dn-card">
        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginBottom: "0.9rem" }}>
          <span className="dn-dot" aria-hidden />
          <span style={{ ...mono, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ink)" }}>dạo này</span>
          <span style={{ ...mono, marginLeft: "auto", textAlign: "right" }}>nhà đang thở</span>
        </div>

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.05rem, 3vw, 1.25rem)", lineHeight: 1.55, color: "var(--color-ink)", margin: 0 }}>
          {newest.body}
        </p>

        {previous ? (
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "baseline", marginTop: "0.9rem", paddingTop: "0.9rem", borderTop: "1px solid var(--color-mist)" }}>
            <span style={{ ...mono, flex: "none" }}>{ddmm(parseTraceDate(previous.d))}</span>
            <span
              style={{
                flex: "1 1 auto",
                minWidth: 0,
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                lineHeight: 1.5,
                color: "var(--color-stone-alt)",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {previous.body}
            </span>
          </div>
        ) : null}

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginTop: "1.1rem" }}>
          <span style={mono}>cập nhật {today ? relativeLabel(date, today) : ddmm(date)}</span>
          <Link href={routes.daoNay} className="go" style={{ ...mono, color: "var(--color-ink)", flex: "none" }}>
            xem tất cả <span className="ar">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

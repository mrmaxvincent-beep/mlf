"use client";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ddmm, groupByMonth, parseTraceDate, relativeLabel, T1, T2, type Trace } from "@/data/daoNay";
import { useToday, useTraces } from "@/lib/useTraces";

const monoLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.62rem",
  letterSpacing: "0.1em",
  color: "var(--color-stone)",
};

/** Một dòng ở tầng 2 và tầng 3 — ngày cố định bên trái, nội dung co giãn bên phải. */
function Row({ trace, last }: { trace: Trace; last?: boolean }) {
  return (
    <div style={{ display: "flex", gap: "1.1rem", alignItems: "baseline", padding: "0.8rem 0", borderBottom: last ? "none" : "1px solid var(--color-mist)" }}>
      <span style={{ ...monoLabel, flex: "none", width: "2.9rem" }}>{ddmm(parseTraceDate(trace.d))}</span>
      <p style={{ flex: "1 1 auto", minWidth: 0, fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.65, color: "var(--color-ink)", margin: 0 }}>
        {trace.body}
      </p>
    </div>
  );
}

/** Ba tầng của "dạo này": gần nhất hiện đầy đủ, trước đó thu còn một dòng, xa hơn gom theo tháng. */
export function DaoNayFeed({ fallback }: { fallback: Trace[] }) {
  const traces = useTraces(fallback);
  const today = useToday();

  const recent = traces.slice(0, T1);
  const condensed = traces.slice(T1, T1 + T2);
  const archive = groupByMonth(traces.slice(T1 + T2));

  if (!traces.length) {
    return (
      <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-stone)", margin: 0 }}>
        chưa có dấu vết nào ở đây. ghé lại sau nhé.
      </p>
    );
  }

  return (
    <div>
      {recent.map((t, i) => {
        const date = parseTraceDate(t.d);
        return (
          <article key={t.d + t.body} className="dn-card" style={{ marginBottom: "1.1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.9rem" }}>
              <span className="dn-avatar">
                <img src="/icon.png" alt="" />
                {/* Chỉ dấu vết mới nhất còn thở — hai cái sau đã là chuyện vừa qua */}
                {i === 0 ? <span className="dn-dot dn-dot--badge" aria-hidden /> : null}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-ink)" }}>mộc little farm</span>
                {/* Trước khi mount chỉ có ngày thật; thời gian tương đối cần đồng hồ của người đọc. */}
                <span style={monoLabel}>{today ? relativeLabel(date, today) : ddmm(date)}</span>
              </div>
              <span style={{ ...monoLabel, marginLeft: "auto" }}>{ddmm(date)}</span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>{t.body}</p>
            {t.photo ? <ImagePlaceholder label="ảnh · dạo này" src={t.photo} alt={t.body} aspectRatio="4/3" style={{ marginTop: "1.2rem", borderRadius: "0.75rem" }} /> : null}
          </article>
        );
      })}

      {condensed.length ? (
        <section style={{ marginTop: "3.5rem" }}>
          <span style={{ ...monoLabel, display: "block", letterSpacing: "0.18em", marginBottom: "1.2rem", opacity: 0.8 }}>trước đó</span>
          <div className="dn-card">
            {condensed.map((t, i) => (
              <Row key={t.d + t.body} trace={t} last={i === condensed.length - 1} />
            ))}
          </div>
        </section>
      ) : null}

      {archive.length ? (
        <section style={{ marginTop: "3.5rem" }}>
          <span style={{ ...monoLabel, display: "block", letterSpacing: "0.18em", marginBottom: "1.2rem", opacity: 0.8 }}>xa hơn</span>
          <div className="dn-card" style={{ paddingTop: 0, paddingBottom: 0 }}>
            {archive.map((g) => (
              <details key={g.key} className="dn-month">
                <summary>
                  <span>{g.label}</span>
                  <span className="dn-count">{g.rows.length} dấu vết</span>
                </summary>
                <div style={{ paddingBottom: "1.2rem" }}>
                  {g.rows.map((t, i) => (
                    <Row key={t.d + t.body} trace={t} last={i === g.rows.length - 1} />
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

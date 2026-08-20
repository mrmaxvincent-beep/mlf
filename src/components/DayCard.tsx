import type { ScheduleRow } from "@/components/Schedule";

export function DayCard({ dayNum, title, note, rows }: { dayNum?: string; title?: string; note?: string; rows: ScheduleRow[] }) {
  return (
    <div style={{ marginBottom: "3.5rem", position: "relative" }}>
      {dayNum ? (
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: "4rem",
            lineHeight: 1,
            color: "var(--color-cham-dem)",
            marginBottom: title ? "0.2rem" : "0.5rem",
          }}
        >
          {dayNum.padStart(2, "0")}
        </span>
      ) : null}
      {title ? (
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "1rem" }}>
          {title}
        </span>
      ) : null}

      <div>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "7rem 1fr",
              gap: "2rem",
              padding: "0.85rem 0",
              borderTop: i === 0 ? "1px solid var(--color-stone)" : "none",
              borderBottom: "1px solid var(--color-stone)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-stone)",
                textAlign: "left",
                whiteSpace: "nowrap",
              }}
            >
              {r.time}
            </span>
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "1rem", lineHeight: 1.6, color: "var(--color-ink)", whiteSpace: "pre-line" }}>
              {r.activity}
            </span>
          </div>
        ))}
      </div>
      {note ? (
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0.8rem 0 0" }}>{note}</p>
      ) : null}
    </div>
  );
}

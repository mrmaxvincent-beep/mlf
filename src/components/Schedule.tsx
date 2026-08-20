export type ScheduleRow = { time: string; activity: string; highlight?: boolean };

/** Daily itinerary table — used on tuần-du and retreat "lịch trình" pages. */
export function Schedule({ rows }: { rows: ScheduleRow[] }) {
  return (
    <div style={{ border: "1px solid var(--color-mist)" }}>
      {rows.map((r, i) => (
        <div
          key={i}
          className="schedule-row"
          style={{
            display: "grid",
            gridTemplateColumns: "9rem 1fr",
            gap: "1rem",
            padding: "0.6rem 1.1rem",
            borderBottom: i < rows.length - 1 ? "1px solid var(--color-mist)" : "none",
            background: r.highlight ? "var(--color-cotton)" : "transparent",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.04em", color: "var(--color-ink)" }}>
            {r.time}
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              color: "var(--color-ink)",
              fontWeight: r.highlight ? 500 : 400,
            }}
          >
            {r.activity}
          </span>
        </div>
      ))}
    </div>
  );
}

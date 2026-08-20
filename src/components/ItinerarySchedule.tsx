export type TimeRow = { time?: string; title?: string; details?: string[]; variant?: "highlight" | "note" };
export type ItineraryDay = { id?: string; label: string; theme: string; rows: TimeRow[] };

/** Multi-day time-of-day schedule for retreat "lịch trình" pages (day label + theme + time rows).
 * `detailed` switches on the richer hàm-dưỡng styling: larger underlined day theme, wider time
 * column, italic detail lines, and highlight/note row variants.
 * `cottonPerDay` wraps each day in its own cotton-background card, visually separating days. */
export function ItinerarySchedule({ days, detailed, cottonPerDay }: { days: ItineraryDay[]; detailed?: boolean; cottonPerDay?: boolean }) {
  return (
    <>
      {days.map((d) => (
        <div
          key={d.label}
          id={d.id}
          className={["itin-day", detailed ? "itin-day--detailed" : "", cottonPerDay ? "itin-day--cotton" : ""].filter(Boolean).join(" ")}
        >
          <p className="itin-label">{d.label}</p>
          <p className="itin-theme">{d.theme}</p>
          {d.rows.map((r, i) => (
            <div key={i} className={r.variant ? `time-row time-row--${r.variant}` : "time-row"}>
              {r.time ? <time>{r.time}</time> : null}
              <div className="activity">
                {r.title ? <p className="title">{r.title}</p> : null}
                {r.details?.map((det) => (
                  <p key={det} className="detail">
                    {det}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

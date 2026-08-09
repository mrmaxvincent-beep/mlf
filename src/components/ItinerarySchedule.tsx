export type TimeRow = { time: string; title: string; details?: string[] };
export type ItineraryDay = { label: string; theme: string; rows: TimeRow[] };

/** Multi-day time-of-day schedule for retreat "lịch trình" pages (day label + theme + time rows). */
export function ItinerarySchedule({ days }: { days: ItineraryDay[] }) {
  return (
    <>
      {days.map((d) => (
        <div key={d.label} className="itin-day">
          <p className="itin-label">{d.label}</p>
          <p className="itin-theme">{d.theme}</p>
          {d.rows.map((r) => (
            <div key={r.time + r.title} className="time-row">
              <time>{r.time}</time>
              <div className="activity">
                <p className="title">{r.title}</p>
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

import { Reveal } from "./Reveal";
import { Schedule, type ScheduleRow } from "./Schedule";
import { Accordion } from "./Accordion";

export type Day = {
  n: string;
  tam?: string;
  title: string;
  desc: string[];
  poem?: string[];
  trans?: string[];
  attr?: string;
  rows: ScheduleRow[];
};

/** One day of a multi-day itinerary (tuần-du / retreat "lịch trình" pages): number, theme, title, prose, optional poem, schedule. */
export function DayItinerary({ day, first, total }: { day: Day; first?: boolean; total?: number }) {
  return (
    <Reveal className="day-block" style={{ borderTop: first ? "none" : "2px solid var(--color-ink)", paddingTop: first ? 0 : "4rem", paddingBottom: "3.5rem" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1.1rem", marginBottom: "1.1rem" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 6vw, 3.2rem)", lineHeight: 1, color: "var(--color-cham-dem)" }}>
          {day.n}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          ngày {day.n}{total ? ` / ${String(total).padStart(2, "0")}` : ""}
        </span>
      </div>
      {day.tam ? (
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-cham-dem)", marginBottom: "0.4rem" }}>{day.tam}</span>
      ) : null}
      <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.9rem, 5vw, 2.8rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 1.75rem" }}>{day.title}</h3>
      <div style={{ maxWidth: "56ch", marginBottom: "2rem" }}>
        {day.desc.map((p) => (
          <p key={p} style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1rem", textAlign: "justify" }}>
            {p}
          </p>
        ))}
      </div>
      {day.poem && day.poem.length > 0 ? (
        <div style={{ border: "1px solid var(--color-mist)", padding: "1.85rem 2rem", textAlign: "center", marginBottom: "2rem" }}>
          {day.poem.map((line) => (
            <span key={line} style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", lineHeight: 1.65, color: "var(--color-ink)" }}>
              {line}
            </span>
          ))}
          <div style={{ width: 32, height: 1, background: "var(--color-mist)", margin: "1.15rem auto" }} />
          {day.trans?.map((line) => (
            <span key={line} style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.8rem", lineHeight: 1.75, color: "var(--color-stone-alt)" }}>
              {line}
            </span>
          ))}
          {day.attr ? (
            <span style={{ display: "block", marginTop: "1rem", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.75rem", color: "var(--color-stone)" }}>{day.attr}</span>
          ) : null}
        </div>
      ) : null}
      <Accordion label="giờ giấc chi tiết">
        <Schedule rows={day.rows} />
      </Accordion>
    </Reveal>
  );
}

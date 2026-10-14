"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { events, programs, type CalEvent } from "@/data/lichNhaMoc";

const DAY = 86_400_000;

function parse(d: string) {
  const [y, m, dd] = d.split("-").map(Number);
  return Date.UTC(y, m - 1, dd ?? 1);
}

/** [ngày đầu, ngày cuối] tính bằng ms UTC; sự kiện chỉ biết tháng thì phủ cả tháng. */
function span(e: CalEvent): [number, number] {
  if (e.month) {
    const [y, m] = e.month.split("-").map(Number);
    return [Date.UTC(y, m - 1, 1), Date.UTC(y, m, 1) - DAY];
  }
  return [parse(e.start!), parse(e.end ?? e.start!)];
}

const pad = (n: number) => String(n).padStart(2, "0");

function fmt(e: CalEvent) {
  if (e.month) {
    const [y, m] = e.month.split("-");
    return `tháng ${m}.${y}`;
  }
  const [a, b] = span(e).map((ms) => new Date(ms));
  const dm = (d: Date) => `${pad(d.getUTCDate())}.${pad(d.getUTCMonth() + 1)}`;
  if (+a === +b) return `${dm(a)}.${a.getUTCFullYear()}`;
  if (a.getUTCMonth() === b.getUTCMonth()) return `${pad(a.getUTCDate())} – ${dm(b)}.${b.getUTCFullYear()}`;
  return `${dm(a)} – ${dm(b)}.${b.getUTCFullYear()}`;
}

const keyOf = (e: CalEvent) => `${e.program}-${e.start ?? e.month}`;
const programOf = (id: string) => programs.find((p) => p.id === id)!;

const years = Array.from(new Set(events.map((e) => new Date(span(e)[0]).getUTCFullYear()))).sort();

/** Dải năm: mỗi chương trình một hàng, 12 tháng trải ngang, mỗi sự kiện một vạch đúng ngày; bên dưới là danh sách theo tháng. */
export function LichNam() {
  const [year, setYear] = useState(years[0]);
  const [now, setNow] = useState<number | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const t = Date.now();
    setNow(t);
    const y = new Date(t).getFullYear();
    if (years.includes(y)) setYear(y);
  }, []);

  const y0 = Date.UTC(year, 0, 1);
  const y1 = Date.UTC(year + 1, 0, 1);
  const pct = (ms: number) => ((ms - y0) / (y1 - y0)) * 100;

  const yearEvents = useMemo(
    () => events.filter((e) => new Date(span(e)[0]).getUTCFullYear() === year).sort((a, b) => span(a)[0] - span(b)[0]),
    [year],
  );
  const rows = programs.filter((p) => yearEvents.some((e) => e.program === p.id));
  const months = Array.from({ length: 12 }, (_, m) => ({ m, start: pct(Date.UTC(year, m, 1)), mid: pct(Date.UTC(year, m, 15)) }));
  const todayPct = now !== null && now >= y0 && now < y1 ? pct(now) : null;
  const isPast = (e: CalEvent) => now !== null && span(e)[1] + DAY <= now;

  const byMonth = months
    .map(({ m }) => ({ m, list: yearEvents.filter((e) => new Date(span(e)[0]).getUTCMonth() === m) }))
    .filter((g) => g.list.length);

  return (
    <div className="lnm">
      <div className="lnm-years" role="tablist" aria-label="chọn năm">
        {years.map((y) => (
          <button key={y} role="tab" aria-selected={y === year} className={y === year ? "active" : ""} onClick={() => setYear(y)}>
            {y}
          </button>
        ))}
      </div>

      <div className="lnm-strip" style={{ gridTemplateRows: `auto repeat(${rows.length}, auto)` }}>
        <span className="lnm-corner">{yearEvents.length} chương trình</span>
        <div className="lnm-months" aria-hidden="true">
          {months.map(({ m, mid }) => (
            <span key={m} style={{ left: `${mid}%` }}>
              {pad(m + 1)}
            </span>
          ))}
        </div>

        <div className="lnm-grid" style={{ gridRow: `1 / span ${rows.length + 1}` }} aria-hidden="true">
          {months.map(({ m, start }) => (
            <i key={m} style={{ left: `${start}%` }} />
          ))}
          {todayPct !== null ? (
            <b className="lnm-today" style={{ left: `${todayPct}%` }}>
              <span>hôm nay</span>
            </b>
          ) : null}
        </div>

        {rows.map((p, i) => (
          <div key={p.id} className="lnm-row">
            <Link href={p.href} className="lnm-name" style={{ gridRow: i + 2 }}>
              {p.name}
            </Link>
            <div className="lnm-track" style={{ gridRow: i + 2 }}>
              {yearEvents
                .filter((e) => e.program === p.id)
                .map((e) => {
                  const [a, b] = span(e);
                  const k = keyOf(e);
                  const left = pct(a);
                  const tipSide = left < 18 ? "start" : left > 78 ? "end" : "mid";
                  return (
                    <button
                      key={k}
                      className={`lnm-mark${e.month ? " lnm-mark--month" : ""}${isPast(e) ? " past" : ""}${hover === k ? " active" : ""}`}
                      style={{ left: `${left}%`, width: `${pct(b + DAY) - left}%` }}
                      onMouseEnter={() => setHover(k)}
                      onMouseLeave={() => setHover(null)}
                      onFocus={() => setHover(k)}
                      onBlur={() => setHover(null)}
                      onClick={() => document.getElementById(`lnm-${k}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                      aria-label={`${e.title}, ${fmt(e)}`}
                    >
                      {hover === k ? (
                        <span className={`lnm-tip lnm-tip--${tipSide}`}>
                          {e.title} · {fmt(e)}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      <div className="lnm-list">
        {byMonth.map(({ m, list }) => (
          <section key={m} className="lnm-month">
            <span className="lnm-month-name">tháng {pad(m + 1)}</span>
            <div>
              {list.map((e) => {
                const k = keyOf(e);
                const p = programOf(e.program);
                return (
                  <Link
                    key={k}
                    id={`lnm-${k}`}
                    href={e.href ?? p.href}
                    className={`lnm-item${isPast(e) ? " past" : ""}${hover === k ? " active" : ""}`}
                    onMouseEnter={() => setHover(k)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <span className="lnm-item-date">{fmt(e)}</span>
                    <span className="lnm-item-title">{e.title}</span>
                    <span className="lnm-item-meta">
                      {p.name}
                      {e.note ? ` · ${e.note}` : ""}
                      {isPast(e) ? " · đã qua" : ""}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

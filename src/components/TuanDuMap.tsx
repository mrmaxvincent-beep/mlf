"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { chuoiList } from "@/data/chuoiTuanDu";
import {
  home,
  islands,
  landmarks,
  outlines,
  regions,
  trips,
  tripsOf,
  type Landmark,
  type LonLat,
  type TripStatus,
} from "@/data/tuanDuMap";

const W = 940;
const H = 600;
const K = 20;
const COS = Math.cos((20 * Math.PI) / 180);

type Box = [number, number, number, number];

function proj([lon, lat]: LonLat): [number, number] {
  return [(lon - 67) * K * COS, (36 - lat) * K];
}

function polyPath(points: LonLat[]) {
  return (
    points
      .map(
        (p, i) =>
          `${i ? "L" : "M"}${proj(p)
            .map((v) => v.toFixed(2))
            .join(",")}`,
      )
      .join("") + "Z"
  );
}

function boundsBox(bounds: [LonLat, LonLat], pad: number): Box {
  const [x1, y1] = proj([bounds[0][0], bounds[1][1]]);
  const [x2, y2] = proj([bounds[1][0], bounds[0][1]]);
  let w = (x2 - x1) * pad;
  let h = (y2 - y1) * pad;
  if (w / h > W / H) h = w / (W / H);
  else w = h * (W / H);
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2;
  return [cx - w / 2, cy - h / 2, w, h];
}

const FULL = boundsBox(
  [
    [76, 6.5],
    [117.5, 32.5],
  ],
  1,
);
const regionBox = (id: string) =>
  boundsBox(regions.find((x) => x.id === id)!.bounds, 1.18);

const statusRank: Record<TripStatus, number> = {
  done: 0,
  upcoming: 1,
  planned: 2,
};
const statusLabel: Record<TripStatus, string> = {
  done: "đã đi qua",
  upcoming: "sắp diễn ra",
  planned: "dự định",
};
const tripStatus = (num: string) => trips.find((t) => t.num === num)!.status;
const tripTitle = (num: string) =>
  chuoiList.find((c) => c.num === num)?.title ?? "";
const byId = (id: string) => landmarks.find((l) => l.id === id)!;
/** Số thứ tự chung 1..N theo lần đầu điểm xuất hiện trong các chuyến; điểm đi lại giữ nguyên số. */
const placeNum: Record<string, number> = {};
for (const t of trips) for (const id of t.stops) placeNum[id] ??= Object.keys(placeNum).length + 1;
const landmarkStatus = (l: Landmark) =>
  tripsOf(l.id)
    .map(tripStatus)
    .sort((a, b) => statusRank[a] - statusRank[b])[0];

function centroid(points: LonLat[]): LonLat {
  const n = points.length;
  return [
    points.reduce((s, p) => s + p[0], 0) / n,
    points.reduce((s, p) => s + p[1], 0) / n,
  ];
}

/** Bản đồ vẽ tay hai tầng: toàn cảnh châu Á với các cụm điểm, bấm một cụm để trượt vào vùng đó và xem từng danh thắng. */
export function TuanDuMap() {
  const [view, setView] = useState<string | null>(null);
  const [box, setBox] = useState<Box>(FULL);
  const [activeTrip, setActiveTrip] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const boxRef = useRef<Box>(FULL);
  const rafRef = useRef(0);
  const frameRef = useRef<HTMLDivElement>(null);
  const [frameW, setFrameW] = useState(760);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) =>
      setFrameW(entry.contentRect.width),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  function animateTo(target: Box) {
    cancelAnimationFrame(rafRef.current);
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const from = boxRef.current;
    if (reduce) {
      boxRef.current = target;
      setBox(target);
      return;
    }
    const t0 = performance.now();
    const dur = 900;
    const fc = [from[0] + from[2] / 2, from[1] + from[3] / 2];
    const tc = [target[0] + target[2] / 2, target[1] + target[3] / 2];
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const w = Math.exp(
        Math.log(from[2]) + (Math.log(target[2]) - Math.log(from[2])) * e,
      );
      const h = w * (H / W);
      const cx = fc[0] + (tc[0] - fc[0]) * e;
      const cy = fc[1] + (tc[1] - fc[1]) * e;
      const b: Box = [cx - w / 2, cy - h / 2, w, h];
      boxRef.current = b;
      setBox(b);
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }

  function openRegion(id: string) {
    setView(id);
    setSelected(null);
    animateTo(regionBox(id));
  }

  function backToOverview() {
    setView(null);
    setSelected(null);
    animateTo(FULL);
  }

  function focusLandmark(id: string) {
    const l = byId(id);
    if (view !== l.region) openRegion(l.region);
    setSelected(id);
    frameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function chooseTrip(num: string) {
    if (activeTrip === num) {
      setActiveTrip(null);
      return;
    }
    setActiveTrip(num);
    setSelected(null);
    const first = byId(trips.find((t) => t.num === num)!.stops[0]);
    if (first && first.region !== view) openRegion(first.region);
  }

  const s = box[2] / FULL[2];
  // chữ và chấm phóng to dần trên màn hình hẹp để vẫn đọc và bấm được
  const ui = Math.min(2.3, Math.max(1, 640 / frameW));
  const u = s * ui;
  const compact = frameW < 560;
  const zoomed = view !== null;
  const regionLandmarks = useMemo(
    () => (view ? landmarks.filter((l) => l.region === view) : []),
    [view],
  );
  const selectedLandmark = landmarks.find((l) => l.id === selected) ?? null;

  const tripCentroids = useMemo(
    () =>
      trips.map((t) => ({
        num: t.num,
        status: t.status,
        c: centroid(t.stops.map((id) => byId(id).pos)),
      })),
    [],
  );

  const regionRoutes = useMemo(() => {
    if (!view) return [];
    return trips
      .map((t) => ({
        num: t.num,
        status: t.status,
        pts: t.stops
          .map(byId)
          .filter((l) => l.region === view)
          .map((l) => proj(l.pos)),
      }))
      .filter((r) => r.pts.length > 1);
  }, [view]);

  const dotFill = (st: TripStatus) =>
    st === "done" ? "var(--color-cham-dem)" : "var(--color-paper)";
  const dotStroke = (st: TripStatus) =>
    st === "planned" ? "var(--color-stone)" : "var(--color-cham-dem)";

  return (
    <div>
      <div className="tdm-frame" ref={frameRef}>
        <svg
          viewBox={box.join(" ")}
          className="tdm-svg"
          role="img"
          aria-label="bản đồ những nơi tuần-du đã và sẽ đi qua"
        >
          <defs>
            <filter id="tdm-rough" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency={0.04 / s}
                numOctaves={2}
                seed={7}
              />
              <feDisplacementMap in="SourceGraphic" scale={3.2 * s} />
            </filter>
          </defs>

          <g filter="url(#tdm-rough)">
            {outlines.map((o) => (
              <g key={o.name}>
                <path
                  d={polyPath(o.points)}
                  fill="var(--color-cotton)"
                  stroke="var(--color-cham)"
                  strokeWidth={1.1 * s}
                  strokeLinejoin="round"
                />
                <path
                  d={polyPath(o.points)}
                  fill="none"
                  stroke="var(--color-cham)"
                  strokeOpacity={0.35}
                  strokeWidth={0.7 * s}
                  transform={`translate(${1.4 * s} ${1.1 * s})`}
                />
              </g>
            ))}
          </g>

          {outlines.map((o) => {
            const [x, y] = proj(o.label);
            return (
              <text
                key={o.name}
                x={x}
                y={y}
                textAnchor="middle"
                fontSize={15 * u}
                className="tdm-country"
                opacity={zoomed ? 0 : 1}
              >
                {o.name}
              </text>
            );
          })}

          {islands.map((isl) => {
            const pts = isl.dots.map(proj);
            const [lx, ly] = pts[0];
            return (
              <g key={isl.name}>
                {pts.map(([x, y], i) => (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={1.3 * u}
                    fill="var(--color-cham)"
                  />
                ))}
                <text
                  x={lx + 7 * u}
                  y={ly - 5 * u}
                  fontSize={8.5 * u}
                  className="tdm-small"
                >
                  {isl.name}
                </text>
              </g>
            );
          })}

          <g opacity={zoomed ? 0 : 1} style={{ transition: "opacity 0.4s" }}>
            {tripCentroids.slice(1).map((t, i) => {
              const prev = tripCentroids[i];
              const [x1, y1] = proj(prev.c);
              const [x2, y2] = proj(t.c);
              const mx = (x1 + x2) / 2;
              const my = (y1 + y2) / 2;
              const dx = x2 - x1;
              const dy = y2 - y1;
              const bend = i % 2 ? -0.22 : 0.22;
              const cx = mx - dy * bend;
              const cy = my + dx * bend;
              const done = t.status === "done";
              return (
                <path
                  key={t.num}
                  d={`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`}
                  fill="none"
                  stroke={done ? "var(--color-cham)" : "var(--color-stone)"}
                  strokeOpacity={done ? 0.55 : 0.5}
                  strokeWidth={1}
                  strokeDasharray={done ? "1 4" : "4 5"}
                  strokeLinecap="round"
                />
              );
            })}
          </g>

          {!zoomed
            ? landmarks.map((l) => {
                const [x, y] = proj(l.pos);
                const st = landmarkStatus(l);
                const on = activeTrip
                  ? tripsOf(l.id).includes(activeTrip)
                  : true;
                return (
                  <circle
                    key={l.id}
                    cx={x}
                    cy={y}
                    r={1.9 * ui}
                    fill={dotFill(st)}
                    stroke={dotStroke(st)}
                    strokeWidth={0.7}
                    opacity={on ? 1 : 0.25}
                  />
                );
              })
            : null}

          {(() => {
            const [x, y] = proj(home.pos);
            const r = 6 * u;
            const star = Array.from({ length: 8 }, (_, i) => {
              const a = (Math.PI / 4) * i - Math.PI / 2;
              const rr = i % 2 ? r * 0.38 : r;
              return `${x + Math.cos(a) * rr},${y + Math.sin(a) * rr}`;
            }).join(" ");
            return (
              <g>
                <polygon points={star} fill="var(--color-cham-dem)" />
                {compact ? null : (
                  <text
                    x={x + 8 * u}
                    y={y + 3 * u}
                    fontSize={9 * u}
                    className="tdm-small"
                  >
                    {home.name}
                  </text>
                )}
              </g>
            );
          })()}

          {!zoomed
            ? regions.map((r) => {
                const pts = landmarks.filter((l) => l.region === r.id);
                const [ax, ay] = proj(r.anchor);
                const [cx, cy] = proj(centroid(pts.map((p) => p.pos)));
                const tripNums = Array.from(
                  new Set(pts.flatMap((p) => tripsOf(p.id))),
                ).sort();
                return (
                  <g
                    key={r.id}
                    className="tdm-cluster"
                    role="button"
                    tabIndex={0}
                    aria-label={`xem ${r.name}, ${pts.length} điểm`}
                    onClick={() => openRegion(r.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openRegion(r.id);
                      }
                    }}
                  >
                    {compact ? null : (
                      <line
                        x1={cx}
                        y1={cy}
                        x2={ax}
                        y2={ay}
                        stroke="var(--color-cham)"
                        strokeOpacity={0.45}
                        strokeWidth={0.8}
                        strokeDasharray="2 3"
                      />
                    )}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={5}
                      fill="none"
                      stroke="var(--color-cham)"
                      strokeOpacity={0.6}
                      strokeWidth={0.8}
                    />
                    <g
                      transform={`translate(${compact ? cx : ax} ${compact ? cy : ay}) scale(${ui})`}
                    >
                      <rect
                        x={-17}
                        y={-17}
                        width={compact ? 34 : 150}
                        height={34}
                        fill="transparent"
                      />
                      <circle r={15} className="tdm-badge" />
                      <text
                        y={4}
                        textAnchor="middle"
                        fontSize={11.5}
                        className="tdm-badge-num"
                      >
                        {pts.length}
                      </text>
                      {compact ? null : (
                        <>
                          <text
                            x={21}
                            y={-2}
                            fontSize={12}
                            className="tdm-badge-name"
                          >
                            {r.name}
                          </text>
                          <text
                            x={21}
                            y={11}
                            fontSize={8.5}
                            className="tdm-small"
                          >
                            tuần-du {tripNums.join(" · ")}
                          </text>
                        </>
                      )}
                    </g>
                  </g>
                );
              })
            : null}

          {zoomed ? (
            <g>
              {regionRoutes.map((r) => {
                const on = !activeTrip || activeTrip === r.num;
                return (
                  <polyline
                    key={r.num}
                    points={r.pts.map((p) => p.join(",")).join(" ")}
                    fill="none"
                    stroke={
                      r.status === "done"
                        ? "var(--color-cham)"
                        : "var(--color-stone)"
                    }
                    strokeOpacity={on ? (activeTrip ? 0.85 : 0.4) : 0.08}
                    strokeWidth={(activeTrip === r.num ? 1.6 : 1) * s}
                    strokeDasharray={
                      r.status === "done" ? undefined : `${4 * s} ${4 * s}`
                    }
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                );
              })}

              {regionLandmarks.map((l) => {
                const [x, y] = proj(l.pos);
                const st = landmarkStatus(l);
                const on = !activeTrip || tripsOf(l.id).includes(activeTrip);
                const isSel = selected === l.id;
                const isHover = hovered === l.id;
                const r = (isSel ? 9.5 : 8) * u;
                return (
                  <g
                    key={l.id}
                    className="tdm-point"
                    role="button"
                    tabIndex={0}
                    aria-label={l.name}
                    opacity={on ? 1 : 0.22}
                    onClick={() => setSelected(isSel ? null : l.id)}
                    onMouseEnter={() => setHovered(l.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(l.id)}
                    onBlur={() => setHovered(null)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(isSel ? null : l.id);
                      }
                    }}
                  >
                    <circle
                      cx={x}
                      cy={y}
                      r={r}
                      fill={dotFill(st)}
                      stroke={dotStroke(st)}
                      strokeWidth={1.1 * s}
                      strokeDasharray={
                        st === "planned" ? `${2 * s} ${2 * s}` : undefined
                      }
                    />
                    <text
                      x={x}
                      y={y + 2.8 * u}
                      textAnchor="middle"
                      fontSize={7.5 * u}
                      className={st === "done" ? "tdm-num tdm-num--light" : "tdm-num"}
                    >
                      {placeNum[l.id]}
                    </text>
                    {isSel || isHover ? (
                      <text
                        x={x + r + 4 * u}
                        y={y + 3.5 * u}
                        fontSize={11 * u}
                        className="tdm-label"
                      >
                        {l.name}
                      </text>
                    ) : null}
                  </g>
                );
              })}
            </g>
          ) : null}
        </svg>

        {zoomed ? (
          <button className="tdm-back" onClick={backToOverview}>
            ← toàn cảnh
          </button>
        ) : (
          <span className="tdm-hint">chạm một cụm để xem từng điểm</span>
        )}
        {zoomed ? (
          <span className="tdm-region-name">
            {regions.find((r) => r.id === view)?.name}
          </span>
        ) : null}
      </div>

      {compact && !zoomed ? (
        <div className="tdm-region-chips">
          {regions.map((r) => (
            <button
              key={r.id}
              className="tdm-region-chip"
              onClick={() => openRegion(r.id)}
            >
              {r.name}{" "}
              <span>{landmarks.filter((l) => l.region === r.id).length}</span>
            </button>
          ))}
        </div>
      ) : null}

      <div className="tdm-legend">
        <span>
          <i className="tdm-key tdm-key--done" /> đã đi qua
        </span>
        <span>
          <i className="tdm-key tdm-key--upcoming" /> sắp diễn ra
        </span>
        <span>
          <i className="tdm-key tdm-key--planned" /> dự định
        </span>
        <span>✦ nhà mộc</span>
      </div>

      {zoomed && selectedLandmark ? (
        <div className="tdm-card">
          <span className="tdm-card-name">{selectedLandmark.name}</span>
          <span className="tdm-card-area">{selectedLandmark.area}</span>
          <div className="tdm-card-trips">
            {tripsOf(selectedLandmark.id).map((num) => (
              <span key={num} className="tdm-card-trip">
                tuần-du {num} · {tripTitle(num)}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="tdm-all">
        <p className="tdm-all-total">
          <span>{landmarks.length}</span> điểm đến qua {trips.length} chuyến
          tuần-du
        </p>
        <div className="tdm-groups">
          {trips.map((t) => (
            <section
              key={t.num}
              className={`tdm-group tdm-group--${t.status}${activeTrip === t.num ? " active" : ""}`}
            >
              <button
                className="tdm-group-head"
                onClick={() => chooseTrip(t.num)}
                aria-pressed={activeTrip === t.num}
              >
                <span className="tdm-trip-num">{t.num}</span>
                <span className="tdm-group-title">{tripTitle(t.num)}</span>
                <span className="tdm-trip-status">
                  {statusLabel[t.status]} · {t.stops.length} điểm
                </span>
              </button>
              <ul className="tdm-group-list">
                {t.stops.map((id) => {
                  const l = byId(id);
                  return (
                    <li key={id}>
                      <button
                        className={`tdm-group-item${selected === id ? " active" : ""}`}
                        onClick={() => focusLandmark(id)}
                        onMouseEnter={() => setHovered(id)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <span className={`tdm-group-num tdm-group-num--${landmarkStatus(l)}`}>
                          {placeNum[id]}
                        </span>
                        {l.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

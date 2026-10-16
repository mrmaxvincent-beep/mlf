import type { CSSProperties } from "react";

type Phase = { time: string; part: string; desc: string };

const TOTAL = 150;
const R = 120;
const C = 160;

const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

function point(min: number, r = R) {
  const a = ((min / TOTAL) * 360 - 90) * (Math.PI / 180);
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
}

function arc(from: number, to: number, gap = 1.6) {
  const [x1, y1] = point(from + gap);
  const [x2, y2] = point(to - gap);
  const large = to - from > TOTAL / 2 ? 1 : 0;
  return `M${x1.toFixed(1)},${y1.toFixed(1)} A${R},${R} 0 ${large} 1 ${x2.toFixed(1)},${y2.toFixed(1)}`;
}

const styles: CSSProperties[] = [
  { stroke: "var(--color-moss)", strokeWidth: 5, opacity: 0.75 },
  { stroke: "var(--color-cham-dem)", strokeWidth: 7 },
  { stroke: "var(--color-stone)", strokeWidth: 4, opacity: 0.8 },
];

/** Vòng tròn ensō 2 tiếng 30 phút: mỗi phần là một cung đúng tỷ lệ thời gian, mười lượt chia sẻ là mười chấm quanh cung giữa. */
export function EnsoAgenda({ phases }: { phases: Phase[] }) {
  const spans = phases.map((p) => {
    const [a, b] = p.time.split("–").map((s) => toMin(s.trim()));
    return { ...p, a, b };
  });
  const share = spans[1];
  const turns = share ? Array.from({ length: 10 }, (_, i) => share.a + ((i + 0.5) * (share.b - share.a)) / 10) : [];

  return (
    <div className="enso">
      <svg viewBox="0 0 320 320" className="enso-svg" role="img" aria-label="một buổi vòng-trà-tâm kéo dài 2 tiếng 30 phút, chia ba phần">
        <circle cx={C} cy={C} r={R} fill="none" stroke="var(--color-mist)" strokeWidth={1} />
        {spans.map((s, i) => (
          <path key={s.part} d={arc(s.a, s.b)} fill="none" strokeLinecap="round" style={styles[i % styles.length]} />
        ))}
        {turns.map((m, i) => {
          const [x, y] = point(m, R - 20);
          return <circle key={i} cx={x} cy={y} r={2.6} fill="var(--color-cham-dem)" opacity={0.7} />;
        })}
        <text x={C} y={C - 6} textAnchor="middle" className="enso-total">
          2:30
        </text>
        <text x={C} y={C + 18} textAnchor="middle" className="enso-sub">
          một vòng trà
        </text>
      </svg>

      <ol className="enso-legend">
        {spans.map((s, i) => (
          <li key={s.part}>
            <i style={{ background: (styles[i % styles.length].stroke as string) ?? "" }} />
            <div>
              <span className="enso-time">{s.time}</span>
              <span className="enso-part">{s.part}</span>
              <span className="enso-desc">{s.desc}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

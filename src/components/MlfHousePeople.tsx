"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { mailto, people, type Person } from "@/data/mlfHouse";

type Dim = "all" | "place" | "job" | "shares" | "seeks";

const DIMS: { id: Dim; label: string }[] = [
  { id: "all", label: "tất cả" },
  { id: "place", label: "nơi ở" },
  { id: "job", label: "nghề" },
  { id: "shares", label: "có thể chia sẻ" },
  { id: "seeks", label: "đang tìm" },
];

function valuesOf(p: Person, d: Dim): string[] {
  if (d === "place") return [p.place];
  if (d === "job") return [p.job];
  if (d === "shares") return p.shares;
  if (d === "seeks") return p.seeks;
  return [];
}

/** Lưới chân dung (ghi nhận) + bộ lọc (kết nối) + chi tiết mở ngay trên trang. */
export function MlfHousePeople() {
  const [dim, setDim] = useState<Dim>("all");
  const [val, setVal] = useState<string | null>(null);
  const [open, setOpen] = useState<Person | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const sorted = useMemo(() => [...people].sort((a, b) => a.order - b.order), []);
  const values = useMemo(() => {
    if (dim === "all") return [];
    return Array.from(new Set(sorted.flatMap((p) => valuesOf(p, dim)))).sort((a, b) => a.localeCompare(b, "vi"));
  }, [dim, sorted]);
  const shown = dim === "all" || !val ? sorted : sorted.filter((p) => valuesOf(p, dim).includes(val));

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <>
      <div className="mh-filter" role="group" aria-label="lọc người của nhà">
        {DIMS.map((d) => (
          <button
            key={d.id}
            type="button"
            className={`mh-chip${dim === d.id ? " on" : ""}`}
            aria-pressed={dim === d.id}
            onClick={() => {
              setDim(d.id);
              setVal(null);
            }}
          >
            {d.label}
          </button>
        ))}
      </div>
      {values.length > 0 ? (
        <div className="mh-values" role="group" aria-label="chọn một giá trị">
          {values.map((v) => (
            <button key={v} type="button" className={`mh-val${val === v ? " on" : ""}`} aria-pressed={val === v} onClick={() => setVal(val === v ? null : v)}>
              {v}
            </button>
          ))}
        </div>
      ) : null}

      <p className="mh-count">{shown.length} người</p>

      <ul className="mh-grid">
        {shown.map((p) => (
          <li key={p.id}>
            <button type="button" className="mh-card" onClick={() => setOpen(p)} aria-haspopup="dialog">
              <ImagePlaceholder label={p.img ? p.name : "ảnh chân dung"} aspectRatio="4/5" src={p.img} alt={p.name} style={{ width: "100%", height: "auto" }} />
              <span className="mh-where">
                {p.place} · {p.job}
              </span>
              <span className="mh-name">{p.name}</span>
              <span className="mh-season">{p.season}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className="mh-dialog" onClose={() => setOpen(null)} onClick={(e) => e.target === e.currentTarget && setOpen(null)} aria-label={open ? open.name : "người của nhà"}>
        {open ? (
          <div className="mh-sheet">
            <button type="button" className="mh-close" onClick={() => setOpen(null)} aria-label="đóng">
              ×
            </button>
            <div className="mh-sheet-img">
              <ImagePlaceholder label="ảnh chân dung 4:5" aspectRatio="4/5" src={open.img} alt={open.name} style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="mh-sheet-body">
              <span className="mh-where">
                {open.place} · {open.job}
              </span>
              <h3 className="mh-sheet-name">{open.name}</h3>
              <span className="mh-season">
                gặp mộc · {open.season}
                {open.metAt ? `, ${open.metAt}` : ""}
              </span>

              <span className="mh-label">điều đã góp</span>
              <p className="mh-text">{open.contributed}</p>

              {open.quote ? <p className="mh-quote">“{open.quote}”</p> : null}

              <dl className="mh-rows">
                <div>
                  <dt>có thể chia sẻ</dt>
                  <dd>{open.shares.join(" · ")}</dd>
                </div>
                <div>
                  <dt>đang tìm</dt>
                  <dd>{open.seeks.join(" · ")}</dd>
                </div>
              </dl>

              <a className="cta-btn cta-btn--solid mh-intro-btn" href={mailto(`xin được giới thiệu: ${open.name}`)}>
                xin được giới thiệu <span className="ar">→</span>
              </a>
              <span className="mh-hint">mlf sẽ hỏi ý người ấy trước khi giới thiệu.</span>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

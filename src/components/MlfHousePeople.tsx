"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MailChoice } from "@/components/MailChoice";
import { drafts, people, type Person } from "@/data/mlfHouse";

type Dim = "all" | "place" | "job";

/** Bộ lọc chỉ hiện khi danh sách đủ dài để cần lọc; lúc còn ít người, gian ghi nhận để thoáng. */
const FILTER_MIN = 12;

const DIMS: { id: Dim; label: string }[] = [
  { id: "all", label: "tất cả" },
  { id: "place", label: "nơi ở" },
  { id: "job", label: "nghề" },
];

function valuesOf(p: Person, d: Dim): string[] {
  if (d === "place") return [p.place];
  if (d === "job") return [p.job];
  return [];
}

/** Chữ lồng từ hai chữ cái đầu, dùng khi người ấy không để ảnh. */
function monogram(name: string) {
  const words = name
    .replace(/[^\p{L}\s]/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!words.length) return "·";
  const pick =
    words.length > 1 ? [words[0], words[words.length - 1]] : [words[0]];
  return pick.map((w) => w.charAt(0).toUpperCase()).join("");
}

function Portrait({ p }: { p: Person }) {
  return (
    <span className="mh-portrait">
      {p.img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.img} alt={p.name} loading="lazy" />
      ) : (
        <span className="mh-mono" aria-hidden="true">
          {monogram(p.name)}
        </span>
      )}
    </span>
  );
}

/** Ghi nhận: lưới chân dung nhỏ, trắng đen, xếp theo mùa đến. Bấm một người để đọc chuyện, ngay trên trang. */
export function MlfHousePeople() {
  const [dim, setDim] = useState<Dim>("all");
  const [val, setVal] = useState<string | null>(null);
  const [open, setOpen] = useState<Person | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const sorted = useMemo(
    () => [...people].sort((a, b) => a.order - b.order),
    [],
  );
  const values = useMemo(() => {
    if (dim === "all") return [];
    return Array.from(new Set(sorted.flatMap((p) => valuesOf(p, dim)))).sort(
      (a, b) => a.localeCompare(b, "vi"),
    );
  }, [dim, sorted]);
  const showFilter = sorted.length >= FILTER_MIN;
  const shown =
    !showFilter || dim === "all" || !val
      ? sorted
      : sorted.filter((p) => valuesOf(p, dim).includes(val));

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <>
      {showFilter ? (
        <>
          <div
            className="mh-filter"
            role="group"
            aria-label="lọc người của nhà"
          >
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
            <div
              className="mh-values"
              role="group"
              aria-label="chọn một giá trị"
            >
              {values.map((v) => (
                <button
                  key={v}
                  type="button"
                  className={`mh-val${val === v ? " on" : ""}`}
                  aria-pressed={val === v}
                  onClick={() => setVal(val === v ? null : v)}
                >
                  {v}
                </button>
              ))}
            </div>
          ) : null}
        </>
      ) : null}

      <p className="mh-count">{shown.length} người · xếp theo mùa đến</p>

      <ul className="mh-grid">
        {shown.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              className="mh-card"
              onClick={() => setOpen(p)}
              aria-haspopup="dialog"
            >
              <Portrait p={p} />
              <span className="mh-name">{p.name}</span>
              <span className="mh-season">
                {p.place} · {p.job}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="mh-dialog"
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        aria-label={open ? open.name : "người của nhà"}
      >
        {open ? (
          <div className="mh-sheet">
            <button
              type="button"
              className="mh-close"
              onClick={() => setOpen(null)}
              aria-label="đóng"
            >
              ×
            </button>
            <div className="mh-sheet-img">
              <Portrait p={open} />
            </div>
            <div className="mh-sheet-body">
              <div className="mh-sheet-head">
                <span className="mh-where">
                  {open.place} · {open.job}
                </span>
                <h3 className="mh-sheet-name">{open.name}</h3>
                <span className="mh-season">
                  gặp mộc · {open.season}
                  {open.metAt ? `, ${open.metAt}` : ""}
                </span>
              </div>

              <div className="mh-sheet-main">
                <span className="mh-label">điều đã góp</span>
                <p className="mh-text">{open.contributed}</p>

                {open.quote ? <p className="mh-quote">“{open.quote}”</p> : null}

                <dl className="mh-rows">
                  <div>
                    <dt>có thể chia sẻ</dt>
                    <dd>{open.shares.join(" · ")}</dd>
                  </div>
                </dl>

                <div className="mh-intro-btn">
                  <MailChoice
                    label="xin được giới thiệu"
                    draft={drafts.gioiThieu(open.name)}
                  />
                </div>
                <span className="mh-hint">
                  mlf sẽ hỏi ý người ấy trước khi giới thiệu.
                </span>
                <button
                  type="button"
                  className="mh-close-bottom"
                  onClick={() => setOpen(null)}
                >
                  đóng
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

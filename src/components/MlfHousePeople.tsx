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

/** Xếp theo thứ tự abc của tên gọi (từ cuối), sau đó đến họ và tên đệm, theo cách sắp chữ tiếng Việt. */
function byName(a: Person, b: Person) {
  const key = (n: string) => {
    const w = n.trim().split(/\s+/);
    return [w[w.length - 1], w.slice(0, -1).join(" ")];
  };
  const [ga, ra] = key(a.name);
  const [gb, rb] = key(b.name);
  return ga.localeCompare(gb, "vi") || ra.localeCompare(rb, "vi");
}

/** Chữ cái đầu của tên gọi (từ cuối), bỏ dấu để các chữ a ă â… cùng nhóm A. */
function letterOf(name: string) {
  const w = name
    .replace(/[^\p{L}\s]/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const last = w[w.length - 1] ?? "";
  const base = last
    .charAt(0)
    .replace(/[đĐ]/g, "d")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  return (base || "·").toUpperCase();
}

/** Ghi nhận: danh sách tên theo abc, không dùng ảnh. Bấm một người để đọc chuyện, ngay trên trang. */
export function MlfHousePeople() {
  const [dim, setDim] = useState<Dim>("all");
  const [val, setVal] = useState<string | null>(null);
  const [open, setOpen] = useState<Person | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const sorted = useMemo(() => [...people].sort(byName), []);
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

  const groups = useMemo(() => {
    const out: { letter: string; items: Person[] }[] = [];
    for (const p of shown) {
      const l = letterOf(p.name);
      const g = out[out.length - 1];
      if (g && g.letter === l) g.items.push(p);
      else out.push({ letter: l, items: [p] });
    }
    return out;
  }, [shown]);

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

      <div className="mh-az">
        {groups.map((g) => (
          <section
            key={g.letter}
            className="mh-grp"
            aria-label={`chữ ${g.letter}`}
          >
            <h3 className="mh-letter" aria-hidden="true">
              {g.letter}
            </h3>
            <ul className="mh-names">
              {g.items.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className="mh-row"
                    onClick={() => setOpen(p)}
                    aria-haspopup="dialog"
                  >
                    <span className="mh-name">{p.name}</span>
                    <span className="mh-pj">
                      {p.place} · {p.job}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

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

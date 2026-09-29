"use client";

import { useState } from "react";
import Link from "next/link";
import type { Section } from "@/data/oYenGiuaDoi";

/** Two-pane picker: 5 phần bên trái, danh sách bài nhỏ của phần đang chọn bên phải — mỗi bài dẫn ra trang riêng để đọc trọn vẹn. */
export function OYenGiuaDoiPicker({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(0);
  const current = sections[active];

  return (
    <div className="hd-shell">
      <div className="hd-rail">
        {sections.map((s, i) => (
          <button key={s.id} className={`hd-topic${i === active ? " active" : ""}`} onClick={() => setActive(i)}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", marginRight: "0.6rem", opacity: 0.6 }}>
              {s.num}
            </span>
            {s.name}
          </button>
        ))}
      </div>

      <div className="hd-content">
        <span className="eyebrow" style={{ marginBottom: "1.6rem" }}>
          {current.num} · {current.name} · {current.articles.length} bài
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {current.articles.map((a) => (
            <Link
              key={a.slug}
              href={`/o-yen-giua-doi/${current.id}/${a.slug}`}
              className="link-sweep"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "1rem",
                padding: "0.95rem 0",
                borderTop: "1px solid var(--color-mist)",
              }}
            >
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.6, color: "var(--color-ink)" }}>
                {a.title}
              </span>
              <span className="ar" style={{ flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-stone)" }}>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

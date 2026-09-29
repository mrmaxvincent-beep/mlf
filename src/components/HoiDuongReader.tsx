"use client";

import { useState } from "react";
import type { Topic } from "@/data/hoiDuong";

/** Two-pane picker: chủ đề bên trái, câu hỏi + câu trả lời của chủ đề đang chọn bên phải — mô phỏng cấu trúc thư-gửi-mộc. */
export function HoiDuongReader({ topics }: { topics: Topic[] }) {
  const [active, setActive] = useState(0);
  const current = topics[active];

  return (
    <div className="hd-shell">
      <div className="hd-rail">
        {topics.map((t, i) => (
          <button key={t.id} className={`hd-topic${i === active ? " active" : ""}`} onClick={() => setActive(i)}>
            {t.name}
          </button>
        ))}
      </div>

      <div className="hd-content">
        <span className="eyebrow" style={{ marginBottom: "1.6rem" }}>{current.name}</span>
        {current.qas.map((qa, i) => (
          <div key={i} style={{ marginBottom: i === current.qas.length - 1 ? 0 : "2.4rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 0.7rem" }}>
              {qa.q}
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-stone)", margin: 0 }}>
              {qa.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

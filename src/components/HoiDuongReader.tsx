"use client";

import { useRouter } from "next/navigation";
import type { CSSProperties } from "react";
import type { Topic } from "@/data/hoiDuong";

/** Two-pane picker: chủ đề bên trái, câu hỏi + câu trả lời của chủ đề đang chọn bên phải. URL là /hoi-duong/[chủ đề] nên share thẳng được. */
export function HoiDuongReader({ topics, initialTopicId, style }: { topics: Topic[]; initialTopicId: string; style?: CSSProperties }) {
  const router = useRouter();
  const current = topics.find((t) => t.id === initialTopicId) ?? topics[0];

  return (
    <div className="hd-shell" style={style}>
      <div className="hd-rail">
        {topics.map((t) => (
          <button
            key={t.id}
            className={`hd-topic${t.id === current.id ? " active" : ""}`}
            onClick={() => router.push(`/hoi-duong/${t.id}`, { scroll: false })}
          >
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

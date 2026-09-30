"use client";

import { useState } from "react";
import type { Story } from "@/data/vuonTam";

/** Two-pane reader: tựa đề bên trái, khung nội dung bên phải — những câu chuyện gửi về vườn-tâm. */
export function VuonTamStories({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState(0);
  const current = stories[active];

  return (
    <div className="hd-shell">
      <div className="hd-rail">
        {stories.map((s, i) => (
          <button key={s.id} className={`hd-topic${i === active ? " active" : ""}`} onClick={() => setActive(i)}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", marginRight: "0.6rem", opacity: 0.6 }}>
              {s.id}
            </span>
            {s.title}
          </button>
        ))}
      </div>

      <div className="hd-content">
        <span className="eyebrow" style={{ marginBottom: "1.6rem" }}>{current.title}</span>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0 }}>
          {current.body}
        </p>
      </div>
    </div>
  );
}

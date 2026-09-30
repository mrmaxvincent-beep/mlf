"use client";

import { useRouter } from "next/navigation";
import type { Story } from "@/data/vuonTam";

/** Two-pane reader: tựa đề bên trái, khung nội dung bên phải. URL là /vuon-tam/[bài] nên share thẳng được một câu chuyện. */
export function VuonTamStories({ stories, initialSlug }: { stories: Story[]; initialSlug: string }) {
  const router = useRouter();
  const current = stories.find((s) => s.slug === initialSlug) ?? stories[0];

  return (
    <div className="hd-shell">
      <div className="hd-rail">
        {stories.map((s) => (
          <button
            key={s.slug}
            className={`hd-topic${s.slug === current.slug ? " active" : ""}`}
            onClick={() => router.push(`/vuon-tam/${s.slug}`, { scroll: false })}
          >
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

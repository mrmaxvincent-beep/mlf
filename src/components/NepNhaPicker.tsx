"use client";

import { useRouter } from "next/navigation";
import type { Section } from "@/data/nepNha";

/** Two-pane picker: 6 mục bên trái, nội dung bên phải. URL là /nep-nha/[mục] nên share thẳng được một mục. */
export function NepNhaPicker({ sections, initialSectionId }: { sections: Section[]; initialSectionId: string }) {
  const router = useRouter();
  const current = sections.find((s) => s.id === initialSectionId) ?? sections[0];

  return (
    <div className="hd-shell">
      <div className="hd-rail">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`hd-topic${s.id === current.id ? " active" : ""}`}
            onClick={() => router.push(`/nep-nha/${s.id}`, { scroll: false })}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", marginRight: "0.6rem", opacity: 0.6 }}>
              {s.roman}
            </span>
            {s.name}
          </button>
        ))}
      </div>

      <div className="hd-content">
        <span className="eyebrow" style={{ marginBottom: "1.6rem" }}>
          {current.roman} · {current.name}
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0 }}>
          {current.body}
        </p>
      </div>
    </div>
  );
}

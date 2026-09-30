"use client";

import { useRouter } from "next/navigation";
import type { Part } from "@/data/oYenCanBan";

/** Two-pane picker: 4 phần bên trái, danh sách bài học bên phải — chọn bài đọc ngay trong khung, không rời trang. URL là /o-yen-can-ban/[phần]/[bài] nên share thẳng được một bài. */
export function OYenCanBanPicker({
  parts,
  initialPartId,
  initialLessonSlug,
}: {
  parts: Part[];
  initialPartId: string;
  initialLessonSlug: string | null;
}) {
  const router = useRouter();
  const current = parts.find((p) => p.id === initialPartId) ?? parts[0];
  const lesson = initialLessonSlug ? (current.lessons.find((l) => l.slug === initialLessonSlug) ?? null) : null;

  function goPart(id: string) {
    router.push(`/o-yen-can-ban/${id}`, { scroll: false });
  }
  function goLesson(slug: string) {
    router.push(`/o-yen-can-ban/${current.id}/${slug}`, { scroll: false });
  }
  function backToList() {
    router.push(`/o-yen-can-ban/${current.id}`, { scroll: false });
  }

  return (
    <div className="hd-shell">
      <div className="hd-rail">
        {parts.map((p) => (
          <button key={p.id} className={`hd-topic${p.id === current.id ? " active" : ""}`} onClick={() => goPart(p.id)}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", marginRight: "0.6rem", opacity: 0.6 }}>
              {p.roman}
            </span>
            {p.name}
          </button>
        ))}
      </div>

      <div className="hd-content">
        {lesson ? (
          <>
            <button
              onClick={backToList}
              style={{
                display: "block",
                marginBottom: "1.6rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-stone)",
              }}
            >
              ← quay lại danh sách bài
            </button>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.9rem" }}>
              phần {current.roman} · {current.name} · bài {String(lesson.num).padStart(2, "0")}
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.4, color: "var(--color-ink)", margin: lesson.subtitle ? "0 0 0.4rem" : "0 0 1.4rem" }}>
              {lesson.title}
            </h2>
            {lesson.subtitle ? (
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: "0.9rem", color: "var(--color-stone)", marginBottom: "1.4rem" }}>
                {lesson.subtitle}
              </span>
            ) : null}
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.98rem", lineHeight: 1.95, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
              {lesson.body}
            </p>
          </>
        ) : (
          <>
            <span className="eyebrow" style={{ marginBottom: "1.6rem" }}>
              phần {current.roman} · {current.name} · {current.lessons.length} bài
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {current.lessons.map((l) => (
                <button
                  key={l.slug}
                  onClick={() => goLesson(l.slug)}
                  className="link-sweep"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "1rem",
                    padding: "0.95rem 0",
                    borderTop: "1px solid var(--color-mist)",
                    background: "none",
                    border: "none",
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                    borderTopColor: "var(--color-mist)",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left",
                    font: "inherit",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-stone)" }}>
                      {String(l.num).padStart(2, "0")}
                    </span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.6, color: "var(--color-ink)" }}>
                      {l.title}
                      {l.subtitle ? <span style={{ color: "var(--color-stone)" }}> — {l.subtitle}</span> : null}
                    </span>
                  </span>
                  <span className="ar" style={{ flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-stone)" }}>
                    →
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

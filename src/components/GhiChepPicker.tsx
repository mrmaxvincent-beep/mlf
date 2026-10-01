"use client";

import { useRouter } from "next/navigation";
import type { Note } from "@/data/ghiChep";

/** Hai cột: trái là danh sách tựa bài, phải là nội dung bài đang chọn. Mỗi bài có URL riêng /ghi-chep/[slug] nên share thẳng được một bài. */
export function GhiChepPicker({ notes, initialSlug }: { notes: Note[]; initialSlug: string | null }) {
  const router = useRouter();
  const withNum = notes.map((n, i) => ({ ...n, num: String(i + 1).padStart(2, "0") }));
  const active = initialSlug ? withNum.find((n) => n.slug === initialSlug) ?? null : withNum[0] ?? null;
  const activeIndex = active ? withNum.findIndex((n) => n.slug === active.slug) : -1;

  function select(slug: string) {
    router.push(`/ghi-chep/${slug}`, { scroll: false });
  }

  if (!withNum.length) {
    return (
      <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--color-stone)", fontSize: "1.05rem" }}>
        ghi chép đang được viết. sẽ sớm có ở đây.
      </p>
    );
  }

  return (
    <div className="lib-shell">
      <div className="lib-rail">
        <span className="lib-count">{withNum.length} ghi chép</span>
        <div className="lib-list">
          {withNum.map((n) => (
            <button key={n.slug} className={`lib-item${n.slug === active?.slug ? " active" : ""}`} onClick={() => select(n.slug)}>
              <span className="lib-item-num">{n.num}</span>
              {n.title}
            </button>
          ))}
        </div>
      </div>

      <div>
        {active ? (
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.25rem, 2.8vw, 1.6rem)", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 2rem" }}>
              {active.title}
            </h2>
            {active.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "var(--color-ink)",
                  textAlign: "justify",
                  margin: "0 0 1.2rem",
                }}
              >
                {p}
              </p>
            ))}

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", paddingTop: "1.5rem" }}>
              {activeIndex > 0 ? (
                <button className="note-nav-btn" onClick={() => select(withNum[activeIndex - 1].slug)}>
                  ← ghi chép trước
                </button>
              ) : (
                <span />
              )}
              {activeIndex < withNum.length - 1 ? (
                <button className="note-nav-btn" onClick={() => select(withNum[activeIndex + 1].slug)}>
                  ghi chép sau →
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

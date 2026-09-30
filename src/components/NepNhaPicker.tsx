"use client";

import { useRouter } from "next/navigation";
import type { Section } from "@/data/nepNha";

/** Two-pane picker: 6 mục bên trái, danh sách bài của mục đang chọn bên phải — chọn bài đọc ngay trong khung, không rời trang. URL là /nep-nha/[mục]/[bài] nên share thẳng được một bài. */
export function NepNhaPicker({
  sections,
  initialSectionId,
  initialArticleSlug,
}: {
  sections: Section[];
  initialSectionId: string;
  initialArticleSlug: string | null;
}) {
  const router = useRouter();
  const current = sections.find((s) => s.id === initialSectionId) ?? sections[0];
  const article = initialArticleSlug ? (current.articles.find((a) => a.slug === initialArticleSlug) ?? null) : null;

  function goSection(id: string) {
    router.push(`/nep-nha/${id}`, { scroll: false });
  }
  function goArticle(slug: string) {
    router.push(`/nep-nha/${current.id}/${slug}`, { scroll: false });
  }
  function backToList() {
    router.push(`/nep-nha/${current.id}`, { scroll: false });
  }

  return (
    <div className="hd-shell">
      <div className="hd-rail">
        {sections.map((s) => (
          <button key={s.id} className={`hd-topic${s.id === current.id ? " active" : ""}`} onClick={() => goSection(s.id)}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", marginRight: "0.6rem", opacity: 0.6 }}>
              {s.roman}
            </span>
            {s.name}
          </button>
        ))}
      </div>

      <div className="hd-content">
        {article ? (
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
              {current.roman} · {current.name}
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.4, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
              {article.title}
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.98rem", lineHeight: 1.95, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
              {article.body}
            </p>
          </>
        ) : (
          <>
            <span className="eyebrow" style={{ marginBottom: "1.6rem" }}>
              {current.roman} · {current.name} · {current.articles.length} bài
            </span>
            {current.articles.length ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {current.articles.map((a, i) => (
                  <button
                    key={a.slug}
                    onClick={() => goArticle(a.slug)}
                    className="link-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "1rem",
                      padding: "0.95rem 0",
                      background: "none",
                      border: "none",
                      borderTop: "1px solid var(--color-mist)",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left",
                      font: "inherit",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-stone)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.6, color: "var(--color-ink)" }}>
                        {a.title}
                      </span>
                    </span>
                    <span className="ar" style={{ flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-stone)" }}>
                      →
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0 }}>
                nội dung đang cập nhật.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

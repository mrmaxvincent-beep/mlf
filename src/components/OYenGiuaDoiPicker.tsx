"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Section } from "@/data/oYenGiuaDoi";

/** Two-pane picker: 5 phần bên trái, nội dung bên phải — chọn bài đọc ngay trong khung, không rời trang, để 01–05 luôn trong tầm tay. Lựa chọn được đồng bộ vào URL (?phan=&bai=) để share được thẳng tới một bài. */
export function OYenGiuaDoiPicker({ sections }: { sections: Section[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sectionParam = searchParams.get("phan");
  const articleParam = searchParams.get("bai");

  const activeSectionIndex = useMemo(() => {
    const i = sections.findIndex((s) => s.id === sectionParam);
    return i === -1 ? 0 : i;
  }, [sections, sectionParam]);

  const current = sections[activeSectionIndex];
  const article = articleParam ? (current.articles.find((a) => a.slug === articleParam) ?? null) : null;

  const setParams = useCallback(
    (next: { phan?: string; bai?: string | null }) => {
      const params = new URLSearchParams(searchParams.toString());
      if (next.phan !== undefined) params.set("phan", next.phan);
      if (next.bai === null) params.delete("bai");
      else if (next.bai !== undefined) params.set("bai", next.bai);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  function selectSection(i: number) {
    setParams({ phan: sections[i].id, bai: null });
  }

  function selectArticle(slug: string) {
    setParams({ phan: current.id, bai: slug });
  }

  function backToList() {
    setParams({ phan: current.id, bai: null });
  }

  return (
    <div className="hd-shell">
      <div className="hd-rail">
        {sections.map((s, i) => (
          <button key={s.id} className={`hd-topic${i === activeSectionIndex ? " active" : ""}`} onClick={() => selectSection(i)}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", marginRight: "0.6rem", opacity: 0.6 }}>
              {s.num}
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
              {current.num} · {current.name}
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
              {current.num} · {current.name} · {current.articles.length} bài
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {current.articles.map((a) => (
                <button
                  key={a.slug}
                  onClick={() => selectArticle(a.slug)}
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
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.6, color: "var(--color-ink)" }}>
                    {a.title}
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

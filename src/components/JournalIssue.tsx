"use client";

import { useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { Issue } from "@/data/journal";
import { pageSpreads } from "@/data/journal";

/** Issue cover spread + "kho tạp chí" picker + "trích trang" preview — all share the active-issue state. */
export function JournalIssue({ issues, defaultIndex }: { issues: Issue[]; defaultIndex: number }) {
  const [active, setActive] = useState(defaultIndex);
  const [fading, setFading] = useState(false);
  const issue = issues[active];

  function selectIssue(i: number) {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 260);
  }

  return (
    <>
      <div className="wrap-wide" style={{ padding: "0.9rem 1.5rem", borderTop: "1px solid var(--color-ink)", borderBottom: "1px solid var(--color-ink)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span className="folio">{issue.folioNum}</span>
          <span className="folio">phát hành 30 tháng chạp · hàng năm</span>
        </div>
      </div>
      <div className="wrap-wide" style={{ padding: "3.5rem 1.5rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.6rem, 11vw, 7.5rem)", lineHeight: 0.9, color: "var(--color-ink)", margin: 0, letterSpacing: "-0.01em" }}>mlf journal</h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "52ch", margin: "1.5rem auto 0" }}>
          một quyển tạp chí được ươm mầm bởi mlf, những ghi chép về ở-yên. Viết ra từ mong ước giữ lại một nhịp sống ở-yên giữa những tất bật thường ngày  — ở lại, ngay trong đời sống đang diễn ra.
        </p>
      </div>

      <div
        className="wrap-wide cover-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
          gap: 0,
          padding: 0,
          alignItems: "start",
          borderBottom: "1px solid var(--color-mist)",
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.26s var(--ease-standard), transform 0.26s var(--ease-standard)",
        }}
      >
        <div style={{ width: "70%", position: "relative", minWidth: 0, aspectRatio: "3/4", margin: "0 auto" }}>
          <ImagePlaceholder label={issue.coverPlaceholder} aspectRatio="3/4" src={issue.coverImageSrc} style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={{ padding: "2.5rem 0 2.5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span className="folio" style={{ marginBottom: "1rem" }}>
            bìa · {issue.label}
          </span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 6vw, 3.6rem)", lineHeight: 1.05, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>{issue.title}</h2>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.65, color: "var(--color-ink)", maxWidth: "34ch", margin: "0 0 2rem" }}>{issue.pullQuote}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              className="cta-btn cta-btn--solid"
              href={issue.published ? issue.ebookHref : undefined}
              aria-disabled={!issue.published}
              target={issue.published ? "_blank" : undefined}
              rel={issue.published ? "noopener noreferrer" : undefined}
            >
              {issue.published ? "tải ebook" : "sắp ra mắt"}
            </a>
          </div>
        </div>
      </div>

      <div className="wrap-wide" style={{ marginTop: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--color-mist)" }}>
        <span className="folio" style={{ display: "block", marginBottom: "1rem" }}>
          kho tạp chí
        </span>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {issues.map((iss, i) => (
            <button
              key={iss.num}
              onClick={() => selectIssue(i)}
              style={{ display: "flex", gap: "0.75rem", alignItems: "center", background: "none", border: "none", padding: "0.4rem", cursor: "pointer", textAlign: "left", opacity: i === active ? 1 : 0.55 }}
            >
              <div style={{ width: "5rem", aspectRatio: "3/4", position: "relative", flex: "none" }}>
                <ImagePlaceholder label={iss.coverPlaceholder} aspectRatio="3/4" src={iss.coverImageSrc} style={{ width: "100%", height: "100%" }} />
              </div>
              <span style={{ textAlign: "left" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)" }}>{iss.label}</span>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)", marginTop: "0.3rem" }}>{iss.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="wrap-wide" data-reveal style={{ marginBottom: "4.5rem" }}>
        <div style={{ borderTop: "1px solid var(--color-mist)", marginBottom: "1.5rem" }}></div>
        <span className="folio" style={{ display: "block", marginBottom: "1.5rem" }}>
          trích trang · quyển 01
        </span>
        <div className="journal-spread-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          {pageSpreads.slice(0, 2).map((s) => (
            <div key={s.pages}>
              <div style={{ aspectRatio: s.aspectRatio, position: "relative", marginBottom: "0.75rem" }}>
                <ImagePlaceholder label={s.placeholder} aspectRatio={s.aspectRatio} src={s.imageSrc} style={{ width: "100%", height: "100%" }} />
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>{s.pages}</span>
            </div>
          ))}
        </div>
        <div className="journal-spread-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "1.5rem" }}>
          {pageSpreads.slice(2, 4).map((s) => (
            <div key={s.pages}>
              <div style={{ aspectRatio: s.aspectRatio, position: "relative", marginBottom: "0.75rem" }}>
                <ImagePlaceholder label={s.placeholder} aspectRatio={s.aspectRatio} src={s.imageSrc} style={{ width: "100%", height: "100%" }} />
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>{s.pages}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

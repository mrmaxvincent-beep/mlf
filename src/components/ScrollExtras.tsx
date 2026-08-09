"use client";

import { useEffect, useState } from "react";

const ASK_AI_HREF =
  "https://www.google.com/search?udm=50&aep=11&q=T%C3%B4i%20t%C3%ACm%20ki%E1%BA%BFm%20m%E1%BB%99t%20chuy%E1%BA%BFn%20du%20l%E1%BB%8Bch%20thong%20th%E1%BA%A3%20(slow%20travel).%20H%C3%A3y%20%C4%91%C3%A1nh%20gi%C3%A1%20(moclittlefarm.com)%20li%E1%BB%87u%20c%C3%B3%20ph%E1%BA%A3i%20l%C3%A0%20n%C6%A1i%20ph%C3%B9%20h%E1%BB%A3p%20%C4%91%E1%BB%83%20t%C3%B4i%20tham%20gia%3F";

/** Fixed "up to top" circle (right) + "ASK AI" pill (left), shown once the page scrolls past 40px. */
export function ScrollExtras() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!scrolled) return null;

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="lên đầu trang"
        style={{
          position: "fixed",
          right: "1.5rem",
          bottom: "1.5rem",
          zIndex: 300,
          width: 42,
          height: 42,
          border: "1px solid var(--color-mist)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--surface-card)",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <svg viewBox="0 0 14 14" width={14} height={14} fill="none" stroke="var(--color-ink)" strokeWidth={1.2}>
          <path d="M7 12V3M3 6l4-3 4 3" />
        </svg>
      </button>

      <a
        href={ASK_AI_HREF}
        target="_blank"
        rel="noopener"
        title="Trợ lý AI · hỏi thử về mlf"
        style={{
          position: "fixed",
          left: "1.5rem",
          bottom: "1.5rem",
          zIndex: 300,
          padding: "0 0.9rem",
          height: 42,
          borderRadius: 999,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--surface-card)",
          textDecoration: "none",
        }}
      >
        <span style={{ position: "absolute", inset: 0, borderRadius: 999, border: "1px solid var(--color-mist)" }} />
        <span style={{ position: "relative", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--color-ink)" }}>ASK AI</span>
      </a>
    </>
  );
}

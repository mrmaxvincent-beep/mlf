"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { routes } from "@/lib/nav";

const branches = [
  { tagline: "trú lại Măng Đen", name: "ngày-hiền", href: routes.ngayHien },
  { tagline: "khoảng-dừng ở Huế", name: "giữa · middle", href: routes.giua },
  { tagline: "du ngoạn đó đây", name: "tuần-du", href: routes.tuanDu },
  { tagline: "làm việc với tâm", name: "be-still", href: routes.beStill },
  { tagline: "cái đẹp thường ngày", name: "tea · mind", href: routes.teaMind },
  { tagline: "thực hành yoga", name: "thinh · không", href: routes.thinhKhong },
];

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

/** Esc-to-close + focus trap, matching the pattern used by Header's ProgramsPanel. */
function useModalA11y(open: boolean, onClose: () => void) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    triggerRef.current = document.activeElement as HTMLElement;

    const panel = panelRef.current;
    const focusable = panel ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)) : [];
    focusable[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return panelRef;
}

export function QuickTour() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const panelRef = useModalA11y(open, close);
  const total = 3;

  function close() {
    setOpen(false);
    setSlide(0);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("qt-open", open);
    return () => document.documentElement.classList.remove("qt-open");
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "1.4rem",
          padding: "0.5rem 1rem",
          background: "transparent",
          border: "1px solid var(--color-cham-suong)",
          borderRadius: "999px",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "0.58rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-paper-dem)",
        }}
      >
        quick tour <span aria-hidden>→</span>
      </button>

      <div
        onClick={close}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(20, 18, 15, 0.5)",
          zIndex: 399,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity var(--duration-panel) var(--ease-standard)",
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="quick tour · mộc little farm"
        ref={panelRef}
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: open ? "translate(-50%, -50%)" : "translate(-50%, -46%)",
          zIndex: 400,
          width: "min(90vw, 480px)",
          maxHeight: "85vh",
          overflowY: "auto",
          background: "var(--color-paper)",
          borderRadius: "4px",
          padding: "2.5rem 2rem 2rem",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity var(--duration-panel) var(--ease-standard), transform var(--duration-panel) var(--ease-standard)",
        }}
      >
        <button
          onClick={close}
          aria-label="đóng"
          style={{ position: "absolute", top: "0.6rem", right: "0.6rem", minWidth: 44, minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}
        >
          đóng ✕
        </button>

        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.5rem" }}>
          quick tour · {slide + 1}/{total}
        </span>

        {slide === 0 ? (
          <>
            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.7rem", color: "var(--color-ink)", margin: "0 0 1.1rem" }}>
              mlf là gì
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.1rem" }}>
              mộc little farm — một không gian tinh thần dựa trên triết lý ở-yên.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone-alt)", margin: 0 }}>
              Từ đây bạn có thể đến Măng Đen để sống những ngày ở-yên, hay theo chân mlf du ngoạn đó đây, hoặc các chương trình online, các nguồn tài nguyên về ở-yên...
            </p>
          </>
        ) : null}

        {slide === 1 ? (
          <>
            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.7rem", color: "var(--color-ink)", margin: "0 0 1.1rem" }}>
              ở-yên là gì
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.1rem" }}>
              ở-yên là một cách ở lại, ngay nơi mình đứng, một cách trọn vẹn.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone-alt)", margin: 0 }}>
              Bạn có thể tham khảo Thư viện ở-yên bao gồm: sách, podcast, tạp chí mlf journal... và các hoạt động thuộc cộng đồng ở-yên để hiểu và cùng thực tập.
            </p>
          </>
        ) : null}

        {slide === 2 ? (
          <>
            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.7rem", color: "var(--color-ink)", margin: "0 0 1.1rem" }}>
              những cách để bắt đầu
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-stone-alt)", margin: "0 0 1.2rem" }}>
              khám phá 6 nhánh hoạt động của mlf:
            </p>
            <div style={{ marginBottom: "1.6rem" }}>
              {branches.map((b) => (
                <Link
                  key={b.href}
                  href={b.href}
                  onClick={close}
                  className="link-row"
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", padding: "0.7rem 0", borderBottom: "1px solid var(--color-mist)" }}
                >
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-stone-alt)" }}>{b.tagline}</span>
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>{b.name}</span>
                </Link>
              ))}
            </div>
            <button onClick={close} className="cta-btn cta-btn--solid" style={{ width: "100%", justifyContent: "center" }}>
              bắt đầu nào!
            </button>
          </>
        ) : null}

        {slide < 2 ? (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
            <button
              onClick={close}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}
            >
              bỏ qua
            </button>
            <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`slide ${i + 1}`}
                    style={{ padding: "0.4rem", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <span style={{ width: i === slide ? 9 : 6, height: i === slide ? 9 : 6, borderRadius: "50%", background: i === slide ? "var(--color-cham-dem)" : "var(--color-mist)", transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease", display: "block" }} />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSlide((s) => Math.min(s + 1, total - 1))}
                className="cta-btn"
                style={{ padding: "0.55rem 1.1rem" }}
              >
                tiếp <span className="ar">→</span>
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "1.4rem" }}>
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`slide ${i + 1}`}
                style={{ padding: "0.4rem", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <span style={{ width: i === slide ? 9 : 6, height: i === slide ? 9 : 6, borderRadius: "50%", background: i === slide ? "var(--color-cham-dem)" : "var(--color-mist)", display: "block" }} />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

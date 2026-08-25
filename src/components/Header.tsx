"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { routes, hoatDongMenu, thuVienMenu, congDongMenu, mlfMenu, programsPanel, mobileMenuSections } from "@/lib/nav";

type DropdownKey = "hoatDong" | "thuVien" | "congDong" | "mlf" | null;

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

/** Esc-to-close + focus trap for a slide-in panel: moves focus in on open, cycles Tab within it, restores focus to the trigger on close. */
function usePanelA11y(open: boolean, onClose: () => void) {
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

/**
 * Site header. `overlay` pages start with a transparent bar + light text over
 * a full-bleed hero and flip to a solid white bar once scrolled past it (only
 * the homepage uses this today). Everything else renders the solid bar always.
 */
export function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(!overlay);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 680px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const solid = !overlay || scrolled;
  const navTextColor = solid ? "var(--color-ink)" : "var(--color-paper-dem)";

  return (
    <div
      className="site-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.1rem 1.5rem",
        background: solid ? "var(--color-paper)" : "transparent",
        borderBottom: solid ? "1px solid var(--color-mist)" : "1px solid transparent",
        transition: "background .3s var(--ease-standard), border-color .3s var(--ease-standard)",
      }}
    >
      <Link
        href={routes.home}
        style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: navTextColor }}
      >
        mộc little farm
      </Link>

      <div className="mobile-toggle-group" style={{ alignItems: "center", gap: "0.75rem" }}>
        <button
          className="mobile-toggle"
          aria-label="menu"
          onClick={() => {
            setProgramsOpen(false);
            setMobileOpen((v) => !v);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "16px 12px",
            margin: "-16px -12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            color: navTextColor,
          }}
        >
          <span style={{ width: 20, height: 1, background: "currentColor", display: "block" }} />
          <span style={{ width: 20, height: 1, background: "currentColor", display: "block" }} />
          <span style={{ width: 20, height: 1, background: "currentColor", display: "block" }} />
        </button>

        <button
          aria-label="chương trình"
          title="Truy cập nhanh chương trình"
          onClick={() => {
            setMobileOpen(false);
            setProgramsOpen((v) => !v);
          }}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "16px 6px",
            margin: "-16px 0",
            display: "inline-flex",
            alignItems: "center",
            color: navTextColor,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1" />
            <rect x="12" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1" />
            <rect x="2" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1" />
            <rect x="12" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </div>

      <div className="nav-links" style={{ gap: "2rem", alignItems: "baseline", flexWrap: "wrap" }}>
        <Link href={routes.home} aria-label="trang chủ" className="link-sweep" style={{ display: "inline-flex", alignItems: "center", alignSelf: "center", color: navTextColor }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2 7L7.5 2.2L13 7" stroke="currentColor" strokeWidth="1" />
            <path d="M3.4 6V12.4H11.6V6" stroke="currentColor" strokeWidth="1" />
          </svg>
        </Link>

        <NavDropdown
          label="hoạt động"
          items={hoatDongMenu}
          color={navTextColor}
          open={openDropdown === "hoatDong"}
          onOpen={() => setOpenDropdown("hoatDong")}
          onClose={() => setOpenDropdown(null)}
        />

        <NavDropdown
          label="thư viện"
          items={thuVienMenu}
          color={navTextColor}
          open={openDropdown === "thuVien"}
          onOpen={() => setOpenDropdown("thuVien")}
          onClose={() => setOpenDropdown(null)}
        />

        <NavDropdown
          label="cộng đồng"
          items={congDongMenu}
          color={navTextColor}
          align="right"
          open={openDropdown === "congDong"}
          onOpen={() => setOpenDropdown("congDong")}
          onClose={() => setOpenDropdown(null)}
        />

        <NavDropdown
          label="mlf"
          items={mlfMenu}
          color={navTextColor}
          align="right"
          open={openDropdown === "mlf"}
          onOpen={() => setOpenDropdown("mlf")}
          onClose={() => setOpenDropdown(null)}
        />

        <button
          onClick={() => setProgramsOpen(true)}
          title="Truy cập nhanh chương trình"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "inline-flex",
            alignItems: "center",
            color: navTextColor,
            width: 20,
            height: 20,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1" />
            <rect x="12" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1" />
            <rect x="2" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1" />
            <rect x="12" y="12" width="6" height="6" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </div>

      <ProgramsPanel open={programsOpen} onClose={() => setProgramsOpen(false)} isMobile={isMobile} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </div>
  );
}

function navLabelStyle(color: string): React.CSSProperties {
  return {
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color,
  };
}

function NavDropdown({
  label,
  items,
  color,
  align = "left",
  open,
  onOpen,
  onClose,
}: {
  label: string;
  items: ({ label: string; href: string; divider?: false } | { divider: true; label?: undefined; href?: undefined })[];
  color: string;
  align?: "left" | "right";
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div style={{ position: "relative" }} onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        onClick={() => (open ? onClose() : onOpen())}
        style={{
          ...navLabelStyle(color),
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.35rem",
          padding: 0,
        }}
      >
        {label} <span style={{ fontSize: "0.55rem", transform: open ? "rotate(180deg)" : "none" }}>▾</span>
      </button>
      {open ? (
        <div style={{ position: "absolute", top: "100%", [align]: 0, paddingTop: "0.9rem" }}>
          <div
            style={{
              minWidth: "13rem",
              background: "var(--color-paper)",
              border: "1px solid var(--color-mist)",
              borderRadius: "var(--radius-sharp)",
              padding: "0.35rem 0",
            }}
          >
            {items.map((item, i) =>
              item.divider ? (
                <div key={i} style={{ height: 1, background: "var(--color-mist)", margin: "0.35rem 0" }} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mono-link"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    color: "var(--color-stone)",
                    padding: "0.55rem 1.1rem",
                  }}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ProgramsPanel({ open, onClose, isMobile }: { open: boolean; onClose: () => void; isMobile: boolean }) {
  const panelRef = usePanelA11y(open, onClose);
  const panelStyle: React.CSSProperties = isMobile
    ? {
        position: "fixed",
        top: 56,
        left: 0,
        right: 0,
        bottom: 0,
        width: "auto",
        background: "var(--color-cham-dem)",
        zIndex: 300,
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem",
        overflowY: "auto",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-12px)",
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--duration-panel) var(--ease-standard), transform var(--duration-panel) var(--ease-standard)",
      }
    : {
        position: "fixed",
        right: 0,
        top: 0,
        bottom: 0,
        width: "min(33.33%, 427px)",
        background: "var(--color-cham-dem)",
        zIndex: 300,
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem",
        overflowY: "auto",
        opacity: open ? 1 : 0,
        transform: open ? "translateX(0)" : "translateX(100%)",
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--duration-panel) var(--ease-standard), transform var(--duration-panel) var(--ease-standard)",
      };

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.3)",
          zIndex: 299,
          backdropFilter: "blur(2px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity var(--duration-panel) var(--ease-standard)",
        }}
      />
      <div ref={panelRef} role="dialog" aria-modal="true" aria-label="Truy cập nhanh chương trình" style={panelStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "#fff" }}>
            lối tắt tới chương trình
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem 2.5rem", fontSize: "0.75rem" }}>
          {programsPanel.map((section) => (
            <div key={section.group}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.5rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-on-night-secondary)",
                  marginBottom: "0.6rem",
                  fontWeight: 600,
                }}
              >
                {section.group}
              </span>
              <div>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: "block",
                      color: "#fff",
                      padding: "0.45rem 0",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = usePanelA11y(open, onClose);
  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu điều hướng"
      style={{
        position: "fixed",
        top: 56,
        left: 0,
        right: 0,
        bottom: 0,
        background: "var(--color-cham-suong)",
        zIndex: 250,
        overflowY: "auto",
        padding: "1.5rem",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-12px)",
        pointerEvents: open ? "auto" : "none",
        transition: "opacity var(--duration-panel) var(--ease-standard), transform var(--duration-panel) var(--ease-standard)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>
          menu
        </span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "var(--font-mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
          }}
        >
          ✕
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem 2.5rem", fontSize: "0.75rem" }}>
        {mobileMenuSections.map((section) => (
          <div key={section.heading}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-cham-dem)",
                marginBottom: "0.6rem",
                fontWeight: 600,
                display: "block",
              }}
            >
              {section.heading}
            </span>
            <div>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  style={{
                    color: "var(--color-ink)",
                    padding: "0.45rem 0",
                    fontSize: "0.75rem",
                    display: "block",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { routes, hoatDongMenu, congDongMenu, mlfMenu, programsPanel, mobileMenuSections } from "@/lib/nav";

type DropdownKey = "hoatDong" | "congDong" | "mlf" | null;

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
      style={{
        position: overlay ? "fixed" : "sticky",
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

      <button
        className="mobile-toggle"
        aria-label="menu"
        onClick={() => setMobileOpen((v) => !v)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          flexDirection: "column",
          gap: 5,
          color: navTextColor,
        }}
      >
        <span style={{ width: 20, height: 1, background: "currentColor", display: "block" }} />
        <span style={{ width: 20, height: 1, background: "currentColor", display: "block" }} />
        <span style={{ width: 20, height: 1, background: "currentColor", display: "block" }} />
      </button>

      <div className="nav-links" style={{ display: "flex", gap: "2rem", alignItems: "baseline", flexWrap: "wrap" }}>
        <NavDropdown
          label="hoạt động"
          items={hoatDongMenu}
          color={navTextColor}
          open={openDropdown === "hoatDong"}
          onOpen={() => setOpenDropdown("hoatDong")}
          onClose={() => setOpenDropdown(null)}
        />

        <Link className="mono-link" href={routes.thuVien} style={navLabelStyle(navTextColor)}>
          thư viện
        </Link>

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
          title="Điều hướng chương trình"
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

      {programsOpen ? <ProgramsPanel onClose={() => setProgramsOpen(false)} /> : null}
      {mobileOpen ? <MobileMenu onClose={() => setMobileOpen(false)} /> : null}
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

function ProgramsPanel({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 299, backdropFilter: "blur(2px)" }}
      />
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          width: "min(50%, 640px)",
          background: "rgba(20,20,20,0.98)",
          zIndex: 300,
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "#fff" }}>
            chương trình
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
              color: "var(--color-mist)",
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
                  color: "var(--color-moss)",
                  marginBottom: "0.6rem",
                  fontWeight: 600,
                }}
              >
                {section.group}
              </span>
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)", paddingLeft: "0.8rem" }}>
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    style={{
                      display: "block",
                      color: "#fff",
                      padding: "0.3rem 0",
                      fontSize: "0.75rem",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
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

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 56,
        left: 0,
        right: 0,
        bottom: 0,
        background: "var(--color-paper)",
        zIndex: 250,
        overflowY: "auto",
        padding: "1.5rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        {mobileMenuSections.map((section) => (
          <div key={section.heading}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-moss)",
                margin: "0.6rem 0 0.3rem",
                display: "block",
              }}
            >
              {section.heading}
            </span>
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--color-ink)",
                  padding: "0.5rem 0",
                  display: "block",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

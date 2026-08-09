"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { IndexGroup } from "@/data/deMucChiTiet";

type Door = {
  key: string;
  icon: string;
  name: string;
  feel: string;
  articles: { title: string; desc: string; href: string }[];
};

/** "3 cửa vào" door accordions + a toggle for the full curriculum index (space groups → units → parts → items). */
export function DeMucIndex({ doors, spaceGroups }: { doors: Door[]; spaceGroups: IndexGroup[] }) {
  const [openDoor, setOpenDoor] = useState<string | null>(null);
  const [openPart, setOpenPart] = useState<string | null>(null);
  const [showFullIndex, setShowFullIndex] = useState(false);

  return (
    <>
      <Reveal className="wrap" style={{ marginBottom: "3.5rem" }}>
        {doors.map((d) => {
          const isOpen = openDoor === d.key;
          return (
            <div key={d.key}>
              <button
                onClick={() => setOpenDoor(isOpen ? null : d.key)}
                style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer", padding: "1.4rem 0", borderTop: "1px solid var(--color-mist)" }}
              >
                <span style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.4rem" }}>
                  <span style={{ fontSize: "1.1rem", color: "var(--color-moss)" }}>{d.icon}</span>
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.35rem", color: "var(--color-ink)" }}>{d.name}</span>
                  <span style={{ marginLeft: "auto", fontSize: "0.9rem", color: "var(--color-stone)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .2s ease" }}>+</span>
                </span>
                <span style={{ display: "block", fontSize: "0.92rem", lineHeight: 1.7, color: "var(--color-stone-alt)", maxWidth: "52ch" }}>{d.feel}</span>
              </button>
              {isOpen ? (
                <div style={{ padding: "0.4rem 0 1.6rem 1.85rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {d.articles.map((art) => (
                    <Link key={art.title} href={art.href} className="mono-link" style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", padding: "0.6rem 0" }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.02rem", color: "var(--color-ink)" }}>{art.title}</span>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-stone)", flex: 1 }}>{art.desc}</span>
                      <span style={{ color: "var(--color-moss)", fontSize: "0.85rem", flex: "none" }}>→</span>
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </Reveal>

      {showFullIndex
        ? spaceGroups.map((grp) => (
            <div key={grp.name}>
              <div className="wrap" style={{ marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)" }}>{grp.name}</span>
              </div>
              <div className="wrap" style={{ marginBottom: "3.5rem" }}>
                {grp.units.map((u) => (
                  <div key={u.key} style={{ padding: "1.5rem 0", borderTop: "1px solid var(--color-mist)" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.75rem" }}>{u.title}</span>
                    {u.subtitle ? <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.75rem" }}>{u.subtitle}</p> : null}
                    <p style={{ fontSize: "0.85rem", color: "var(--color-ink)", lineHeight: 1.8, margin: "0 0 1.25rem", textAlign: "justify" }}>{u.intro}</p>
                    {u.parts.map((p) => {
                      const pKey = `${u.key}-${p.roman}`;
                      const pOpen = openPart === pKey;
                      return (
                        <div key={pKey} className="part-row">
                          <button className="part-btn" onClick={() => setOpenPart(pOpen ? null : pKey)}>
                            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-moss)" }}>
                              phần {p.roman} — {p.title}
                            </span>
                            <span style={{ fontSize: "0.95rem", color: "var(--color-stone)", flex: "none", transform: pOpen ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .2s ease" }}>+</span>
                          </button>
                          {pOpen ? (
                            <div style={{ paddingBottom: "1.25rem" }}>
                              <span style={{ display: "block", fontSize: "0.78rem", color: "var(--color-stone-alt)", fontStyle: "italic", marginBottom: "0.25rem" }}>{p.stage}</span>
                              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>{p.goal}</span>
                              <span style={{ display: "block", fontSize: "0.8rem", color: "var(--color-stone-alt)", marginBottom: "1rem" }}>{p.focus}</span>
                              {p.items.map((it, i) => (
                                <div key={i} className="item-row">
                                  <span style={{ flex: "none", width: "1.1rem", color: "var(--color-moss)", fontSize: "0.85rem" }}>{it.ic}</span>
                                  <span style={{ fontSize: "0.85rem", color: "var(--color-ink)", lineHeight: 1.7 }}>
                                    {i + 1}. {it.t}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))
        : null}

      <div className="wrap" style={{ marginBottom: "4rem", textAlign: "center" }}>
        <Link href="/cong-dong-o-yen" style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffffff", background: "var(--color-ink)", borderRadius: 2, padding: "0.9rem 2rem" }}>
          ← quay về cộng đồng ở-yên
        </Link>
        <div style={{ marginTop: "1.75rem" }}>
          <button
            onClick={() => setShowFullIndex((v) => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-mist)" }}
          >
            {showFullIndex ? "thu gọn đề mục ←" : "xem toàn bộ đề mục →"}
          </button>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { PricingPanel } from "@/components/PricingPanel";
import { routes } from "@/lib/nav";
import {
  introLines,
  offeringOne,
  offeringTwo,
  journeyInfo,
} from "@/data/specialRetreat";

export const metadata: Metadata = {
  title: "special treat",
  description: "dành cho những ai đã từng trải qua một retreat tại nhà Mộc",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.95rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.3rem",
};

export default function SpecialTreatPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: "special treat" }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          special treat
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 0.75rem" }}>
          cho những ai đã bước vào nhà mộc
        </p>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · special treat 1" aspectRatio="16/12" src="/assets/specialtreat_1.webp" alt="special-treat" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · special treat 2" aspectRatio="16/12" src="/assets/specialtreat_2.webp" alt="special-treat" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · special treat 3" aspectRatio="16/12" src="/assets/specialtreat_3.webp" alt="special-treat" style={{ width: "100%", height: "auto" }} />
      </div>

      <div style={{ height: "2rem" }}></div>

      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        {introLines.map((line) => (
          <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1rem" }}>
            {line}
          </p>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <Reveal style={{ marginBottom: "4rem" }}>
          <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "2rem" }}>
            <span className="eyebrow" style={{ color: "var(--color-ink)", marginBottom: "1rem", display: "block" }}>
              {offeringOne.title}
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.8rem", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 1.5rem", fontWeight: 300 }}>
              {offeringOne.desc}
            </h2>
            <div style={{ marginBottom: "2rem" }}>
              {offeringOne.details.map((detail) => (
                <p key={detail} style={proseP}>
                  {detail}
                </p>
              ))}
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <span className="eyebrow" style={{ color: "var(--color-ink)", marginBottom: "1rem", display: "block" }}>
                chi phí
              </span>
              {offeringOne.pricing.map((p) => (
                <div key={p.desc} style={{ marginBottom: "1rem" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 600, color: "var(--color-ink)", margin: "0 0 0.3rem" }}>
                    {p.desc}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-chau)", margin: 0 }}>
                    {p.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal style={{ marginBottom: "4rem" }}>
          <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "2rem" }}>
            <span className="eyebrow" style={{ color: "var(--color-ink)", marginBottom: "1rem", display: "block" }}>
              {offeringTwo.title}
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.8rem", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 1.5rem", fontWeight: 300 }}>
              {offeringTwo.desc}
            </h2>
            <div style={{ marginBottom: "2rem" }}>
              {offeringTwo.details.map((detail) => (
                <p key={detail} style={proseP}>
                  {detail}
                </p>
              ))}
            </div>
            {offeringTwo.note && (
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "1rem 0 2rem" }}>
                {offeringTwo.note}
              </p>
            )}
            <div style={{ marginBottom: "2rem" }}>
              <span className="eyebrow" style={{ color: "var(--color-ink)", marginBottom: "1rem", display: "block" }}>
                chi phí
              </span>
              {offeringTwo.pricing.map((p) => (
                <div key={p.desc} style={{ marginBottom: "1rem" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 600, color: "var(--color-ink)", margin: "0 0 0.3rem" }}>
                    {p.desc}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--color-chau)", margin: 0 }}>
                    {p.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center", marginTop: "4rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify" }}>
          Hãy nhắn cho mộc biết qua cho Zalo nhé!
        </p>
      </div>

      <Footer />
    </>
  );
}

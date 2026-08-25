import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { quickJumps, practices } from "@/data/touch";

export const metadata: Metadata = {
  title: "touch · không gian của Thuận",
  description: "touch là không gian riêng của Thuận tại mộc little farm — nơi ở lại với cơ thể mình qua yoga, và ở lại với những vật cũ quanh mình qua upcycle.",
  keywords: "touch, thinh không, yoga, thuần upcycle, mộc little farm",
  openGraph: {
    title: "touch · không gian của Thuận · mộc little farm",
    description: "touch là không gian riêng của Thuận tại mộc little farm — nơi ở lại với cơ thể mình qua yoga, và ở lại với những vật cũ quanh mình qua upcycle.",
    type: "website",
    url: "https://moclittlefarm.com/touch",
  },
  alternates: {
    canonical: "https://moclittlefarm.com/touch",
  },
};

export default function TouchPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="touch" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
          touch
        </h1>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone-alt)", marginBottom: "1.6rem" }}>
          chạm vào thuần nhất
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "center", gap: "0.9rem", marginBottom: "2.5rem" }}>
          {quickJumps.map((q, i) => (
            <span key={q.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              <Link href={q.href} className="mono-link" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-stone)" }}>
                {q.label}
              </Link>
              {i < quickJumps.length - 1 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>/</span> : null}
            </span>
          ))}
        </div>
        <div className="hero-personal" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", alignItems: "center" }}>
          <div className="hero-portrait" style={{ width: "9.5rem", flexShrink: 0 }}>
            <ImagePlaceholder label="ảnh chân dung · Thuận" src="/assets/thuan.webp" aspectRatio="1/1" style={{ borderRadius: "50%", overflow: "hidden" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 0.9rem" }}>
              Tôi là Thuận, touch là cách tôi thực hành ở lại — với cơ thể mình qua yoga, và với những vật cũ quanh mình qua upcycle.
            </p>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-stone-alt)" }}>— Thuận</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · không gian touch 1" aspectRatio="16/12" src="/assets/cham01.webp" alt="touch" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · không gian touch 2" aspectRatio="16/12" src="/assets/cham02.webp" alt="touch" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · không gian touch 3" aspectRatio="16/12" src="/assets/cham03.webp" alt="touch" style={{ width: "100%", height: "auto" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
          chạm vào, chậm lại, và để mọi thứ trở về thuần nhất.
        </p>
      </Reveal>

      <RevealStagger className="wrap" style={{ marginTop: "3.5rem", marginBottom: "5rem" }}>
        {practices.map((p) => (
          <div key={p.name} style={{ paddingBottom: "1.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--color-mist)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.6rem" }}>
              {p.tag}
            </span>
            <span style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <Link href={p.href} className="mono-link" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-ink)" }}>
                {p.name}
              </Link>
            </span>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-stone-alt)", maxWidth: "52ch" }}>{p.desc}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid var(--color-mist)", paddingTop: "1.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>thuần upcycle</span>
            <a
              href="https://www.instagram.com/thuan.upcycle/"
              target="_blank"
              rel="noopener"
              className="mono-link"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink)" }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
              instagram
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>thinh không</span>
            <a
              href="tel:0988039296"
              className="mono-link"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.06em", color: "var(--color-ink)" }}
            >
              098 803 92 96
            </a>
            <a
              href="mailto:thinhkhong.hub@gmail.com"
              className="mono-link"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.06em", color: "var(--color-ink)" }}
            >
              thinhkhong.hub@gmail.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

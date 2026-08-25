import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { RevealStagger } from "@/components/Reveal";
import { practices } from "@/data/touch";

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
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone-alt)", marginBottom: "2.5rem" }}>
          chạm vào thuần nhất
        </span>
        <div className="hero-personal" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", alignItems: "center" }}>
          <div className="hero-portrait" style={{ width: "9.5rem", flexShrink: 0 }}>
            <ImagePlaceholder label="ảnh chân dung · Thuận" src="/assets/thuan.webp" aspectRatio="1/1" style={{ borderRadius: "50%", overflow: "hidden" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 0.9rem" }}>
              Tôi là Thuận. touch là nơi tôi ở lại với những gì có thể chạm tới — cơ thể mình, và những vật cũ quanh mình.
            </p>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-stone-alt)" }}>— Thuận</span>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>2 sản phẩm</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem" }}>
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

      <Footer />
    </>
  );
}

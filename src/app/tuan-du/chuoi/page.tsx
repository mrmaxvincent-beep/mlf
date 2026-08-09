import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";
import { chuoiList } from "@/data/chuoiTuanDu";

export const metadata: Metadata = {
  title: "chuỗi tuần-du",
  description: "mỗi tuần-du như một hành trình dẫn mở ra nhiều cánh cửa bên trong.",
};

export default function ChuoiTuanDuPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "2rem", flexWrap: "wrap" }}>
          <Link href={routes.home} style={{ color: "var(--color-stone)" }}>
            trang chủ
          </Link>
          <span>/</span>
          <Link href={routes.tuanDu} style={{ color: "var(--color-stone)" }}>
            tuần-du
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-ink)" }}>chuỗi tuần-du</span>
        </div>
        <span className="eyebrow">chuỗi</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          tuần-du
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: 0 }}>
          mỗi tuần-du như một hành trình dẫn mở ra nhiều cánh cửa bên trong.
        </p>
      </div>

      <div style={{ marginTop: "2.5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · chuỗi tuần-du qua các miền đất" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "1rem" }}>
        {chuoiList.map((c) => (
          <div key={c.num} className={`chuoi-row${c.badge ? "" : " upcoming"}`}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", color: "var(--color-stone-alt)" }}>{c.num}</span>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.02rem", fontWeight: 500, color: "var(--color-ink)" }}>{c.title}</span>
                {c.badge ? (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0.22rem 0.6rem",
                      border: "1px solid var(--color-mist)",
                      borderRadius: "var(--radius-sharp)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-moss)",
                      lineHeight: 1,
                    }}
                  >
                    {c.badge}
                  </span>
                ) : null}
              </div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.05em", color: "var(--color-stone)", marginBottom: "0.5rem" }}>
                {c.places} · {c.duration}
              </span>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.92rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0, maxWidth: "42ch" }}>{c.tagline}</p>
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal className="wrap" style={{ margin: "4.5rem auto 5rem", textAlign: "center", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          nếu bạn cảm thấy một trong những nẻo đường này là chuyến đi của mình — nhắn cho nhà mộc.
        </p>
        <Link href={routes.tuanDu} className="cta-btn">
          về trang tuần-du <span className="ar">→</span>
        </Link>
      </Reveal>

      <Footer />
    </>
  );
}

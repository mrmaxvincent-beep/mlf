import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
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
        <Breadcrumb trail={[{ label: "tuần-du", href: routes.tuanDu }, { label: "chuỗi tuần-du" }]} />
        <span className="eyebrow">chuỗi</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          tuần-du
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: 0 }}>
          mỗi tuần-du như một hành trình dẫn mở ra nhiều cánh cửa bên trong.
        </p>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · chuỗi tuần-du 1" aspectRatio="16/12" src="/assets/chuoituandu1.jpg" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · chuỗi tuần-du 2" aspectRatio="16/12" src="/assets/chuoituandu2.jpg" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · chuỗi tuần-du 3" aspectRatio="16/12" src="/assets/chuoituandu3.jpg" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "1rem" }}>
        <div style={{ position: "relative", maxWidth: "580px", margin: "0 auto" }}>
          <div style={{ position: "absolute", left: "1rem", top: "0.6rem", bottom: "0.6rem", width: "1px", background: "var(--color-mist)" }} />

          {chuoiList.map((c) => {
            const isDone = c.badge === "đã đi qua";
            return (
              <Reveal key={c.num} style={{ display: "flex", gap: "1.5rem", padding: "1.7rem 0", opacity: c.badge ? 1 : 0.5 }}>
                <div style={{ position: "relative", flexShrink: 0, width: "2rem", display: "flex", justifyContent: "center", paddingTop: "0.4rem" }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: isDone ? "var(--color-ink)" : "var(--color-paper)",
                      border: isDone ? "none" : "1.5px solid var(--color-ink)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.06em", color: "var(--color-stone)" }}>{c.num}</span>
                    <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.25rem", color: "var(--color-ink)" }}>{c.title}</span>
                    {c.badge ? (
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.22rem 0.6rem",
                          border: "1px solid var(--color-ink)",
                          borderRadius: "999px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.55rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--color-cham-dem)",
                          lineHeight: 1,
                        }}
                      >
                        {c.badge}
                      </span>
                    ) : null}
                  </div>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.05em", color: "var(--color-stone)", marginBottom: "0.6rem" }}>
                    {c.places} · {c.duration}
                  </span>
                  <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.02rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0, maxWidth: "42ch" }}>{c.tagline}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal className="wrap" style={{ margin: "4.5rem auto 5rem", textAlign: "center", maxWidth: "56ch" }}>
        <Link href={routes.tuanDu} className="cta-btn cta-btn--solid">
          về trang tuần-du <span className="ar">→</span>
        </Link>
      </Reveal>

      <Footer />
    </>
  );
}

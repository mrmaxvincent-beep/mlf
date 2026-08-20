import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { Testimonials } from "@/components/Testimonials";
import { routes } from "@/lib/nav";
import { programs, moments, testimonials } from "@/data/ngayHien";

export const metadata: Metadata = {
  title: "ngày-hiền · măng đen",
  description:
    "một không gian ở-yên — mộc little farm · Măng Đen. mlf là một khoảng dừng dịu dàng giữa những lao xao, một không gian để mình được hàm dưỡng lại chính mình.",
  keywords: "ngày-hiền, retreat, Măng Đen, ở-yên, wellness, slow stay",
  openGraph: {
    title: "ngày-hiền · măng đen · mộc little farm",
    description: "một không gian ở-yên — mộc little farm · Măng Đen",
    type: "website",
    url: "https://moclittlefarm.com/ngay-hien",
  },
  alternates: {
    canonical: "https://moclittlefarm.com/ngay-hien",
  },
};

export default function NgayHienPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem", textAlign: "center" }}>
        <div style={{ textAlign: "left" }}>
          <Breadcrumb label="ngày-hiền" />
        </div>
        <span className="eyebrow" style={{ textAlign: "center", color: "var(--color-ink)" }}>
          sống những ngày-hiền ở
        </span>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(2.4rem, 7vw, 4rem)",
            lineHeight: 1.1,
            color: "var(--color-ink)",
            margin: "0 0 1.6rem",
          }}
        >
          măng đen
        </h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginBottom: "1.6rem" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)", borderBottom: "1px solid var(--color-ink)", paddingBottom: "0.1rem" }}>
            đường về
          </span>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>/</span>
          <Link href={routes.daoMotVong} className="mono-link" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-stone)" }}>
            dạo một vòng
          </Link>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>/</span>
          <Link href={routes.luuBut} className="mono-link" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-stone)" }}>
            lưu bút
          </Link>
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 auto 0.75rem" }}>
          <br />
          <br />
          ngày-hiền,
          <br />
          <br />
          là những ngày ta tập sống chậm,
          <br />
          <br />
          nhẹ và lành với chính mình.
        </p>
      </div>

      <div style={{ marginTop: "2.5rem", height: "60vh", minHeight: 360, maxHeight: 580, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image src="/assets/ngayhien_01.jpg" alt="nhà mộc giữa sương Măng Đen" fill style={{ objectFit: "contain" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-ink)" }}>
          NƠI AN TRÚ DỊU DÀNG
        </span>
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.2rem" }}>
          có người đến mlf để nghỉ ngơi. có người chỉ cần một khoảng không gian cho riêng mình.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.2rem" }}>
          mlf không phải là nơi chữa lành hay trị liệu, và không thay cho sự hỗ trợ y tế hay tư vấn chuyên môn.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          điều có thể làm,  là tạo một không gian an trú, để mỗi người tự thấy rõ mình hơn một chút.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "4rem", maxWidth: "48ch", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2.4rem", lineHeight: 1, color: "var(--color-cham)", marginBottom: "0.5rem" }} aria-hidden>
          &ldquo;
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.3rem, 3.2vw, 1.7rem)", lineHeight: 1.6, color: "var(--color-cham-dem)", margin: "0 0 1.2rem" }}>
          chúng tôi không tìm lời giải cho cuộc sống bằng những điều cao siêu, thay vào đó quay về những điều giản đơn.
        </p>
        <Motif name="dom-muc" size={28} />
      </Reveal>

      <div style={{ padding: "3rem 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "180px", height: "140px" }}>
          <Image src="/assets/home_rem.png" alt="home_rem" fill sizes="180px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ marginBottom: "0.4rem", color: "var(--color-ink)" }}>
          mộc little farm giới thiệu cùng bạn
        </span>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-stone)" }}>
          bốn nhịp lưu trú, tuỳ theo điều bạn đang cần
        </span>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", display: "flex", flexDirection: "column", gap: "2.4rem" }}>
        {programs.map((p, idx) => (
          <Reveal
            key={p.name}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2.5rem",
              alignItems: "center",
              paddingTop: idx > 0 ? "2.4rem" : 0,
              borderTop: idx > 0 ? "1px solid var(--color-ink)" : "none",
            }}
          >
            <div style={{ width: "270px", maxWidth: "100%", flex: "0 0 auto", borderRadius: "50%", overflow: "hidden" }}>
              <ImagePlaceholder label={p.imgLabel} aspectRatio="1/1" src={p.imgSrc} objectFit={p.imgObjectFit} scale={p.imgScale} />
            </div>
            <div style={{ flex: "1 1 280px", maxWidth: "100%" }}>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.35rem" }}>
                {p.tagline}
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.25rem", color: "var(--color-ink)", margin: 0 }}>
                  {p.name}
                </h3>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.05em", color: "var(--color-cham-dem)" }}>
                  {p.duration}
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.6rem", maxWidth: "42ch" }}>
                {p.desc}
              </p>
              <Link className="go" href={p.href} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)" }}>
                {p.name} <span className="ar">→</span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto 6rem", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-ink)" }}>
            chín khoảnh khắc ở nhà mộc
          </span>
        </div>
        {moments.map((m, i) => {
          const n = i + 1;
          const num = String(n).padStart(2, "0");
          const variant = i % 3;
          return (
            <div key={m.imgLabel}>
              {variant === 0 ? (
                <div style={{ marginBottom: "5.5rem" }}>
                  <div style={{ maxWidth: 640, margin: "0 auto 1.5rem" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-stone)", marginBottom: "0.9rem" }}>
                      {num} / 09
                    </span>
                    <ImagePlaceholder label={m.imgLabel} aspectRatio="3/2" src={m.src} />
                  </div>
                  <div style={{ maxWidth: "46ch", margin: "0 auto", textAlign: "center" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
                      {m.caption}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="ed-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: variant === 1 ? "5fr 7fr" : "7fr 5fr",
                    gap: "3rem",
                    alignItems: "center",
                    marginBottom: "5.5rem",
                  }}
                >
                  <div style={variant === 2 ? { order: 2 } : undefined}>
                    <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-stone)", marginBottom: "0.9rem" }}>
                      {num} / 09
                    </span>
                    <ImagePlaceholder label={m.imgLabel} aspectRatio="4/5" src={m.src} />
                  </div>
                  <div style={variant === 1 ? { paddingRight: "1.5rem" } : { order: 1, paddingLeft: "1.5rem", textAlign: "right" }}>
                    <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
                      {m.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
          ⸺ Khi ta thật tâm đặt mọi thứ xuống, để trả mọi thứ về sự đơn thuần,… thì niềm vui sẽ hiển hiện.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>lời thì thầm từ người đã đến</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "58ch" }}>
        <div style={{ padding: "2.5rem 2rem" }}>
          <Testimonials items={testimonials} showDots={false} fontSize="1.2rem" />
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link className="go mono-link" href={routes.luuBut} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            đọc thêm lưu bút <span className="ar">→</span>
          </Link>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}

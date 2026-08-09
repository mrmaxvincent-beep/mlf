import type { Metadata } from "next";
import Link from "next/link";
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
};

export default function NgayHienPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem", textAlign: "center" }}>
        <div style={{ textAlign: "left" }}>
          <Breadcrumb label="ngày-hiền" />
        </div>
        <span className="eyebrow" style={{ textAlign: "center" }}>
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
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-mist)" }}>/</span>
          <Link href={routes.daoMotVong} className="mono-link" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-stone)" }}>
            dạo một vòng
          </Link>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-mist)" }}>/</span>
          <Link href={routes.luuBut} className="mono-link" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-stone)" }}>
            lưu bút
          </Link>
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 auto 0.75rem" }}>
          một không gian ở-yên — mộc little farm · Măng Đen. mlf là một khoảng dừng dịu dàng giữa những lao xao, một không gian để mình được hàm dưỡng lại chính mình.
        </p>
      </div>

      <div style={{ marginTop: "2.5rem", height: "60vh", minHeight: 360, maxHeight: 580 }}>
        <ImagePlaceholder label="ảnh · nhà mộc giữa sương Măng Đen" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Motif name="hien-nha" size={34} />
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          mlf là...
        </span>
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.2rem" }}>
          có người đến mlf để nghỉ ngơi. có người chỉ cần một khoảng không gian cho riêng mình. ở đây, ngày ngày sống cùng chánh niệm, những bữa cơm chay và những khoảng chạm sâu hơn vào đời sống tinh thần.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.2rem" }}>
          mlf không phải là nơi chữa lành hay trị liệu, không phải chuyên gia tâm lý, và không thay cho sự hỗ trợ y tế hay tư vấn chuyên môn.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.98rem", lineHeight: 1.85, color: "var(--color-stone-alt)", textAlign: "justify", margin: 0 }}>
          điều mlf có thể làm, đơn giản chỉ là — tạo một không gian an trú, để mỗi người tự thấy rõ mình hơn một chút.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span className="eyebrow" style={{ marginBottom: "0.3rem" }}>
          mộc little farm giới thiệu cùng bạn //
        </span>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-stone)" }}>
          bốn nhịp lưu trú, tuỳ theo điều bạn đang cần
        </span>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        {programs.map((p) => (
          <div key={p.name} className="prog-card">
            <ImagePlaceholder label={p.imgLabel} aspectRatio="4/5" />
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.5rem" }}>
                {p.tagline}
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", color: "var(--color-ink)", margin: "0 0 0.5rem" }}>
                {p.name}
              </h3>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.06em", color: "var(--color-moss)", marginBottom: "0.9rem" }}>
                {p.duration}
              </span>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.2rem", maxWidth: "42ch" }}>
                {p.desc}
              </p>
              <Link className="go" href={p.href} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)" }}>
                {p.name} <span className="ar">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto 6rem", padding: "0 1.5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <span className="eyebrow" style={{ marginBottom: 0 }}>
            chín khoảnh khắc ở nhà mộc //
          </span>
        </div>
        {moments.map((m, i) => {
          const n = i + 1;
          const num = String(n).padStart(2, "0");
          const variant = i % 3;
          return (
            <div key={m.imgLabel}>
              {n === 5 ? (
                <div style={{ textAlign: "center", marginBottom: "5.5rem" }}>
                  <Motif name="dom-muc" size={42} />
                </div>
              ) : null}
              {variant === 0 ? (
                <div style={{ marginBottom: "5.5rem" }}>
                  <div style={{ maxWidth: 640, margin: "0 auto 1.5rem" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-stone)", marginBottom: "0.9rem" }}>
                      {num} / 09
                    </span>
                    <ImagePlaceholder label={m.imgLabel} aspectRatio="3/2" />
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
                    <ImagePlaceholder label={m.imgLabel} aspectRatio="4/5" />
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

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow">lời thì thầm từ người đã đến //</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "58ch" }}>
        <div style={{ border: "1px solid var(--color-mist)", padding: "2.5rem 2rem" }}>
          <Testimonials items={testimonials} />
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

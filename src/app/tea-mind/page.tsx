import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { doors } from "@/data/teaMind";

export const metadata: Metadata = {
  title: "tea · mind",
  description: "một góc nhỏ nơi hơi thở chậm lại, tâm mình lắng lại, qua các hành động giản dị: pha trà, nặn gốm, vẽ tranh.",
};

export default function TeaMindPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="tea · mind" />
        <span className="eyebrow">ở lại với cái đẹp giản dị — trà, gốm, tranh, lịch</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 2rem" }}>
          tea · mind
        </h1>
        <div className="hero-personal" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", alignItems: "center" }}>
          <div className="hero-portrait" style={{ width: "9.5rem", flexShrink: 0 }}>
            <ImagePlaceholder label="ảnh chân dung · Vũ" aspectRatio="1/1" style={{ borderRadius: "50%", overflow: "hidden" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "44ch", margin: "0 0 0.9rem" }}>
              Tôi là Vũ, người hướng dẫn trà — gốm — tranh tại mộc little farm. tea·mind là không gian mà tôi &ldquo;chưng cất&rdquo; từ những trải nghiệm của mình.
            </p>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-stone)" }}>— Vũ</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", height: "52vh", minHeight: 320, maxHeight: 500 }}>
        <ImagePlaceholder label="ảnh · góc trà, gốm, tranh của vũ" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow">về tea · mind</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>
          Một góc nhỏ nơi hơi thở chậm lại, tâm mình lắng lại, qua các hành động giản dị: pha trà, nặn gốm, vẽ tranh.
        </p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>Ở đây, có mùi đất, mùi lửa, mùi lá trà khẽ bay trong chiều tĩnh.</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          tea·mind kể chuyện — bằng màu, bằng men gốm, bằng tiếng nước sôi. Những mẩu chuyện nhặt nhạnh từ hành trình tìm cái-đẹp.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>
          Cái-đẹp không ồn ào. Nó ẩn mình trong dáng ngồi yên, ánh sáng rơi qua kẽ lá, trong vệt men chảy tự nhiên như nước mắt, trong một chén trà nóng đặt lặng lẽ giữa ngày.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          tea·mind là nơi để lắng nghe bản thân qua bốn mạch: trà, gốm, tranh, lịch — và từ đó, hiểu rằng: cái-đẹp không phải để giữ, mà để cảm.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", textAlign: "center", maxWidth: "48ch", marginLeft: "auto", marginRight: "auto" }}>
        <span className="eyebrow" style={{ textAlign: "center" }}>
          tinh thần của tea · mind
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1rem" }}>&ldquo;lắng nghe rõ hơn&rdquo;</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          tea·mind không tạo ra một sản phẩm hoàn hảo, mà tạo ra một không gian để bạn được lắng nghe chính mình.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <div className="balance-rule">
          <span />
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">bốn mạch của tea · mind</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem" }}>
        {doors.map((d) => (
          <div key={d.name} className="prog-card">
            <ImagePlaceholder label={d.imgLabel} aspectRatio="4/5" />
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.5rem" }}>{d.tagline}</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", color: "var(--color-ink)", margin: "0 0 0.9rem" }}>{d.name}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.2rem", maxWidth: "42ch" }}>{d.desc}</p>
              <Link className="go" href={d.href} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)" }}>
                {d.cta} <span className="ar">→</span>
              </Link>
            </div>
          </div>
        ))}
      </RevealStagger>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { quickJumps, practices } from "@/data/beStill";

export const metadata: Metadata = {
  title: "be-still · làm việc với tâm",
  description: "be-still không phải nơi chữa lành, cũng không phải nơi tu học — mà là một không gian đủ an tĩnh để bạn tự thấy rõ, tự quyết định, tự chịu trách nhiệm cho con đường của mình.",
  keywords: "be-still, mindfulness, writing, self-discovery, retreat programs",
  openGraph: {
    title: "be-still · làm việc với tâm · mộc little farm",
    description: "be-still không phải nơi chữa lành, cũng không phải nơi tu học — mà là một không gian đủ an tĩnh để bạn tự thấy rõ, tự quyết định",
    type: "website",
    url: "https://moclittlefarm.com/be-still",
  },
  alternates: {
    canonical: "https://moclittlefarm.com/be-still",
  },
};

export default function BeStillPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="be-still" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
          be-still
        </h1>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone-alt)", marginBottom: "1.6rem" }}>
          làm việc với tâm
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.9rem", marginBottom: "2.5rem" }}>
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
            <ImagePlaceholder label="ảnh chân dung · Hồ Thành Tâm" src="/assets/tam.webp" aspectRatio="1/1" style={{ borderRadius: "50%", overflow: "hidden" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 0.9rem" }}>
              Giữa thời đại AI, con người được trao nhiều tự do sáng tạo hơn bao giờ hết - nhưng cũng rất dễ đánh mất trụ nội tâm của mình. Thêm kiến thức, thêm kỹ năng là cần thiết, nhưng chạy mải mê theo những điều biến chuyển vô chừng dễ khiến ta lạc mình, quên mất cách ta đang sống, đang hiện diện.
            </p>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-stone-alt)" }}>— Tâm</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · không gian tĩnh, be-still 1" aspectRatio="16/12" src="/assets/bestill01.webp" alt="be-still" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · không gian tĩnh, be-still 2" aspectRatio="16/12" src="/assets/bestill02.webp" alt="be-still" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · không gian tĩnh, be-still 3" aspectRatio="16/12" src="/assets/bestill03.webp" alt="be-still" style={{ width: "100%", height: "auto" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>be-still không phải nơi chữa lành, cũng không phải nơi tu học.</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          be-still là một không gian đủ an tĩnh — để bạn tự thấy rõ, tự quyết định, tự chịu trách nhiệm cho con đường của mình.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
          Người hướng dẫn không phải chuyên gia, không phải guru — chỉ là người đã đi được một đoạn, và vẫn đang sống giữa đời thường.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>các không gian thực hành</span>
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

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>người hướng dẫn</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "52ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.5rem" }}>
          tôi là Hồ Thành Tâm, người sáng lập mộc little farm.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "center", margin: "0 0 1.5rem" }}>
          có những con đường không do ta chọn,
          <br />
          mà chính con đường ấy chọn ta.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "center", margin: "0 0 1.25rem" }}>
          vận dụng những điều mình thấy trong ĐẠO để đưa vào ĐỜI.
          <br />
          không tách đời sống khỏi đạo học,
          <br />
          cũng không mang đạo học ra khỏi đời sống.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          nếu đủ duyên, ta cùng đồng hành để tự thấy rõ chính mình và quanh mình.
        </p>
        <span style={{ display: "block", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone-alt)", marginTop: "1.5rem" }}>
          tâm · mộc little farm
        </span>
      </Reveal>
      <div className="wrap" style={{ marginBottom: "2rem", maxWidth: "52ch" }}>
        <a className="go mono-link" href="https://www.bestill.life/" target="_blank" rel="noopener" style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink)" }}>
          đọc tâm quán <span className="ar">→</span>
        </a>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0.6rem 0 0" }}>
          tâm quán là blog cá nhân của tôi — nơi tôi ghi lại những điều mình thấy trên đường.
        </p>
      </div>

      <Footer />
    </>
  );
}

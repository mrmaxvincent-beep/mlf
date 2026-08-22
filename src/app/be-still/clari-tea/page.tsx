import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { routes } from "@/lib/nav";
import { teaSteps, tone, infoRows } from "@/data/clariTea";

export const metadata: Metadata = {
  title: "clari-tea · mây tan, nước lắng",
  description: "clari-tea là những buổi gặp 1-1, ngồi xuống - chuyện trò bên chén trà, để mọi thứ tỏ tường dưới sự bén nhạy của một cái tâm chân thật.",
};

export default function ClariTeaPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", textAlign: "center" }}>
        <div style={{ textAlign: "left" }}>
          <Breadcrumb trail={[{ label: "be-still", href: routes.beStill }, { label: "clari-tea" }]} />
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          clari-tea
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, color: "var(--color-stone)", maxWidth: "32ch", margin: "0 auto" }}>
          mây tan, nước lắng
        </p>
      </div>

      <div className="wrap" style={{ margin: "4rem auto", maxWidth: 420 }}>
        <ImagePlaceholder label="ảnh · chén trà, clari-tea" aspectRatio="4/5" src="/assets/claritea.webp" alt="clari-tea" />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "6rem", maxWidth: "42ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 2, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          clari-tea là những buổi gặp 1-1, ngồi xuống - chuyện trò bên chén trà, để mọi thứ tỏ tường dưới sự bén nhạy của một cái tâm chân thật.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 2, color: "var(--color-stone)", margin: 0 }}>
          dành cho những ai đang mất phương hướng, trong trạng thái rối ren và cần nhìn lại mọi thứ một cách thấu đáo.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "6rem", maxWidth: "38ch", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham-dem)", display: "block", marginBottom: "1.5rem" }}>
          một buổi trà gồm
        </span>
        {teaSteps.map((item) => (
          <p key={item} style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 2.2, color: "var(--color-ink)", margin: 0 }}>
            {item}
          </p>
        ))}
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "6rem", maxWidth: "38ch", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham-dem)", display: "block", marginBottom: "1.5rem" }}>
          ngôn ngữ của buổi gặp
        </span>
        {tone.map((item) => (
          <p key={item} style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 2.2, color: "var(--color-ink)", margin: 0 }}>
            {item}
          </p>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={35} />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "4rem", maxWidth: "38ch", textAlign: "center" }}>
        {infoRows.map((item) => (
          <div key={item.label} className="inc-row">
            <span className="inc-label">{item.label}</span>
            <span className="inc-val">{item.val}</span>
          </div>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "6rem", textAlign: "center" }}>
        <a href="https://calendar.app.google/peGShtZA8AVwe17w6" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
          đặt lịch <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "44ch", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "0.88rem", color: "var(--color-ink)", display: "block", marginBottom: "1.2rem" }}>
          một điều cần biết trước khi đặt lịch
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "var(--color-stone-alt)", margin: "0 0 1rem" }}>
          clari-tea không phải là buổi trị liệu tâm lý hay tư vấn y khoa, và không thay thế cho điều đó khi cần. những gì chia sẻ trong buổi gặp được giữ kín, trong phạm vi cho phép của pháp luật.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "var(--color-stone-alt)", margin: 0 }}>
          nếu bạn đang trong một khủng hoảng tâm lý cấp tính — có ý nghĩ muốn tự làm hại bản thân, hoặc cảm thấy không an toàn với chính mình — xin hãy liên hệ ngay với đường dây hỗ trợ khẩn cấp hoặc người có chuyên môn gần bạn nhất, trước khi đặt lịch ở đây.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "4rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.4rem" }}>
          tham khảo thêm hành trình khác
        </span>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
          <Link className="mono-link" href={routes.khaiTam} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            khai tâm
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.imLangChuNghia} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            im lặng, chữ nghĩa
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.phiaSang} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            phía sáng
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.nhatHien} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            nhất-hiện
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link className="go mono-link" href={routes.beStill} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          về trang be-still <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

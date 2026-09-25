import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ThuGuiMocReader } from "@/components/ThuGuiMocReader";
import { Reveal } from "@/components/Reveal";
import { entries } from "@/data/thuGuiMoc";

export const metadata: Metadata = {
  title: "thư-gửi-mộc",
  description: "những lời thì thầm gửi tới nhà mộc.",
};

const mailtoHref = "mailto:hello@moclittlefarm.com?subject=" + encodeURIComponent("thư gửi mộc");

export default function ThuGuiMocPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="thư-gửi-mộc" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          thư-gửi-mộc
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>những lời thì thầm gửi tới nhà mộc</span>
      </div>

      {/* MỜI GỬI THƯ — thư nhận qua email (không giới hạn độ dài), được chọn và đăng thủ công vào khung đọc bên dưới */}
      <Reveal className="wrap" style={{ marginTop: "3.5rem", maxWidth: "40rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>gửi thư tới mộc</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.3rem, 4vw, 1.7rem)", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          bạn có thể viết cho mộc.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 auto 2rem", maxWidth: "46ch" }}>
          có điều gì bạn muốn gửi tới nhà mộc, hãy soạn thư cho chúng tôi tới email hello@moclittlefarm.com. lá thư ấy sẽ được đăng tải ở đây, như một sự lưu dấu giữa bạn và mlf.
        </p>
        <a href={mailtoHref} className="cta-btn cta-btn--outline" style={{ borderRadius: "999px" }}>
          viết thư cho mộc <span className="ar">→</span>
        </a>
      </Reveal>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · trang thư viết tay" aspectRatio="16/12" src="/assets/ngayhien_luubut1.webp" alt="thư-gửi-mộc" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · thư-gửi-mộc 2" aspectRatio="16/12" src="/assets/ngayhien_luubut2.webp" alt="thư-gửi-mộc" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · thư-gửi-mộc 3" aspectRatio="16/12" src="/assets/ngayhien_luubut3.webp" alt="thư-gửi-mộc" style={{ width: "100%", height: "auto" }} />
      </div>

      <Reveal style={{ marginTop: "3.5rem", marginBottom: "5rem" }}>
        <ThuGuiMocReader entries={entries} />
      </Reveal>

      <Footer />
    </>
  );
}

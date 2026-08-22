import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WorkGallery } from "@/components/WorkGallery";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "gốm · tea·mind",
  description: "những hình khối nặn từ đất, giữ lại dáng tay và nhịp thở của người làm ra chúng.",
};

const works = [
  { label: "ảnh · Chawan wabi", title: "Chawan wabi", src: "/assets/gom1.webp" },
  { label: "ảnh · Chawan Shigaraki", title: "Chawan Shigaraki", src: "/assets/gom2.webp" },
  { label: "ảnh · Chawan grey", title: "Chawan grey", src: "/assets/gom3.webp" },
  { label: "ảnh · Chawan Cánh Anh Đào", title: "Chawan Cánh Anh Đào", src: "/assets/gom4.webp" },
];

export default function TeaMindGomPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem" }}>
        <Breadcrumb trail={[{ label: "tea · mind", href: routes.teaMind }, { label: "gốm" }]} />
        <span className="eyebrow">tác phẩm · tea.mind</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.6rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.6rem" }}>
          gốm
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 3rem" }}>
          những hình khối nặn từ đất, giữ lại dáng tay và nhịp thở của người làm ra chúng. dưới đây là một vài tác phẩm đại diện.
        </p>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "2.5rem" }}>
        <WorkGallery works={works} />
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>còn nhiều tác phẩm khác được cập nhật thường xuyên tại Instagram.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "4rem", textAlign: "center" }}>
        <a href="http://instagram.com/tea.mind/" target="_blank" rel="noopener" className="cta-btn">
          theo dõi tại ig <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.4rem" }}>
          tham khảo thêm
        </span>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
          <Link className="mono-link" href={routes.teaMindTra} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            trà
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.teaMindTranh} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            tranh
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.teaMindLich} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            lịch
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Link className="mono-link" href={routes.teaMind} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          ← xem lại tea.mind
        </Link>
      </div>

      <Footer />
    </>
  );
}

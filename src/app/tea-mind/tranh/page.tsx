import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WorkGallery } from "@/components/WorkGallery";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "tranh · tea·mind",
  description: "màu và nét kể lại những mẩu chuyện nhặt nhạnh trên hành trình tìm cái-đẹp.",
};

const works = [
  { label: "ảnh · tranh màu nước", title: "chiều mưa mộc thất" },
  { label: "ảnh · tranh phong cảnh", title: "măng mô, mùa hạ vàng" },
  { label: "ảnh · tranh tĩnh vật trà", title: "tĩnh vật — chén trà" },
  { label: "ảnh · tranh chân dung", title: "một dáng ngồi yên" },
];

export default function TeaMindTranhPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem" }}>
        <Breadcrumb trail={[{ label: "tea · mind", href: routes.teaMind }, { label: "tranh" }]} />
        <span className="eyebrow">tác phẩm · tea.mind</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.6rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.6rem" }}>
          tranh
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 3rem" }}>
          màu và nét kể lại những mẩu chuyện nhặt nhạnh trên hành trình tìm cái-đẹp. dưới đây là một vài tác phẩm đại diện.
        </p>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "2.5rem" }}>
        <WorkGallery works={works} />
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-stone-alt)", margin: 0 }}>còn nhiều tác phẩm khác được cập nhật thường xuyên tại Instagram.</p>
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
          <Link className="mono-link" href={routes.teaMindGom} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            gốm
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

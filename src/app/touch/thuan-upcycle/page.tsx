import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WorkGallery } from "@/components/WorkGallery";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "thuần upcycle · touch",
  description: "đồ cũ kể chuyện mới — hồi sinh những vật cũ, để chúng kể một câu chuyện mới. Sản phẩm thuộc touch, không gian của Thuận tại mộc little farm.",
};

const works = [
  { label: "ảnh · sản phẩm upcycle 1", src: "/assets/thuan1.webp" },
  { label: "ảnh · sản phẩm upcycle 2", src: "/assets/thuan2.webp" },
  { label: "ảnh · sản phẩm upcycle 3", src: "/assets/thuan3.webp" },
  { label: "ảnh · sản phẩm upcycle 4", src: "/assets/thuan4.webp" },
];

export default function ThuanUpcyclePage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem" }}>
        <Breadcrumb trail={[{ label: "touch", href: routes.touch }, { label: "thuần upcycle" }]} />
        <span className="eyebrow">đồ cũ kể chuyện mới</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.6rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.6rem" }}>
          thuần upcycle
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 3rem" }}>
          hồi sinh những vật cũ, để chúng kể một câu chuyện mới. dưới đây là một vài sản phẩm đại diện.
        </p>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "2.5rem" }}>
        <WorkGallery works={works} />
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>mời bạn xem thêm các sản phẩm upcycle tại Instagram thuần upcycle.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "4rem", textAlign: "center" }}>
        <a href="https://www.instagram.com/thuan.upcycle/" target="_blank" rel="noopener" className="cta-btn">
          theo dõi tại ig <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Link className="mono-link" href={routes.touch} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          ← xem lại touch
        </Link>
      </div>

      <Footer />
    </>
  );
}

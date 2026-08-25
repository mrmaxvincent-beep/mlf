import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "thuần upcycle · đồ cũ kể chuyện mới",
  description: "thuần upcycle — hồi sinh những vật cũ, để chúng kể một câu chuyện mới. Sản phẩm thuộc touch, không gian của Thuận tại mộc little farm.",
};

const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  height: "2.2rem",
  padding: "0 1.1rem",
  borderRadius: "999px",
  border: "1px solid var(--color-mist)",
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--color-stone)",
};

export default function ThuanUpcyclePage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "touch", href: routes.touch }, { label: "thuần upcycle" }]} />
        <span className="eyebrow">đồ cũ kể chuyện mới</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 2rem" }}>
          thuần upcycle
        </h1>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "620px" }}>
        <div style={{ border: "1px solid var(--color-mist)", borderRadius: "1rem", padding: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
            nội dung trang này đang được chuẩn bị.
          </p>
          <span style={pill}>sắp ra mắt</span>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LichNam } from "@/components/LichNam";

const title = "lịch nhà mộc";

export const metadata: Metadata = {
  title,
  description: "lịch các chương trình của nhà mộc trong năm — retreat, tuần-du, be-still.",
};

export default function LichNhaMocPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label={title} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          {title}
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "48ch", margin: 0 }}>
          một năm ở nhà mộc, trải trên một dải.
        </p>
      </div>

      <div className="wrap-wide" style={{ marginTop: "3rem", marginBottom: "6rem" }}>
        <LichNam />
      </div>

      <Footer />
    </>
  );
}

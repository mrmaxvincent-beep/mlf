import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { LuuButReader } from "@/components/LuuButReader";
import { routes } from "@/lib/nav";
import { entries } from "@/data/luuBut";

export const metadata: Metadata = {
  title: "lưu bút",
  description: "những lời thì thầm của người đã đến ở nhà mộc.",
};

export default function LuuButPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: "lưu bút" }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          lưu bút
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>những lời thì thầm của người đã đến ở nhà mộc</span>
      </div>

      <div style={{ marginTop: "2.5rem", height: "50vh", minHeight: 320, maxHeight: 500 }}>
        <ImagePlaceholder label="ảnh · trang lưu bút viết tay" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div style={{ marginTop: "3.5rem", marginBottom: "5rem" }}>
        <LuuButReader entries={entries} />
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link href={routes.ngayHien} className="cta-btn">
          về trang ngày-hiền <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

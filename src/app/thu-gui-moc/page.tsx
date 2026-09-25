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

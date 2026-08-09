import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { LibraryReader } from "@/components/LibraryReader";
import { notes } from "@/data/thuVien";

export const metadata: Metadata = {
  title: "thư viện ở-yên",
  description: "ghi chép về ở-yên. Mỗi ghi chép là một góc nhìn về việc ở lại với chính mình.",
};

export default function ThuVienPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="thư viện ở-yên" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          thư viện ở-yên
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>ghi chép về ở-yên</span>
      </div>

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 560 }}>
        <ImagePlaceholder label="ảnh · kệ sách, ánh sáng cửa sổ" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="lib-shell" style={{ marginTop: "3.5rem", marginBottom: "3rem" }}>
        <div />
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "left", margin: 0, maxWidth: "60ch" }}>
          Mỗi ghi chép là một góc nhìn về việc ở lại với chính mình. Gõ từ khoá để tìm, hoặc chọn một số bên trái.
        </p>
      </div>

      <div style={{ marginBottom: "5rem" }}>
        <LibraryReader notes={notes} />
      </div>

      <Footer />
    </>
  );
}

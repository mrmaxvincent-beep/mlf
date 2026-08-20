import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { LibraryReader } from "@/components/LibraryReader";
import { Reveal } from "@/components/Reveal";
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

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · kệ sách, ánh sáng cửa sổ 1" aspectRatio="16/12" src="/assets/thuvienoyen01.webp" alt="thu-vien" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · kệ sách, ánh sáng cửa sổ 2" aspectRatio="16/12" src="/assets/thuvienoyen02.webp" alt="thu-vien" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · kệ sách, ánh sáng cửa sổ 3" aspectRatio="16/12" src="/assets/thuvienoyen03.webp" alt="thu-vien" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="lib-shell" style={{ marginTop: "3.5rem", marginBottom: "3rem" }}>
        <div />
        <Reveal>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "left", margin: 0, maxWidth: "60ch" }}>
            Mỗi ghi chép là một góc nhìn về việc ở lại với chính mình. Gõ từ khoá để tìm, hoặc chọn một số bên trái.
          </p>
        </Reveal>
      </div>

      <div style={{ marginBottom: "5rem" }}>
        <LibraryReader notes={notes} />
      </div>

      <Footer />
    </>
  );
}

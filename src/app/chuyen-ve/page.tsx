import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ChuyenVeReader } from "@/components/ChuyenVeReader";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { episodes } from "@/data/chuyenVe";

export const metadata: Metadata = {
  title: "chuyện-về",
  description: "những cuộc trò chuyện cùng người bạn thân quen của mlf.",
};

export default function ChuyenVePage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="chuyện-về" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          chuyện-về
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>những cuộc trò chuyện cùng người bạn thân quen của mlf</span>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · hai người ngồi trò chuyện, ánh đèn vàng 1" aspectRatio="16/12" src="/assets/chuyenve01.jpg" alt="chuyen-ve" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · hai người ngồi trò chuyện, ánh đèn vàng 2" aspectRatio="16/12" src="/assets/chuyenve02.jpg" alt="chuyen-ve" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · hai người ngồi trò chuyện, ánh đèn vàng 3" aspectRatio="16/12" src="/assets/chuyenve03.jpg" alt="chuyen-ve" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="cv-shell" style={{ marginTop: "3.5rem", marginBottom: "3rem" }}>
        <div />
        <Reveal style={{ maxWidth: "60ch" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
            Mỗi kỳ, mlf ngồi lại cùng một người bạn thân quen — người đã ghé mlf nhiều lần, mang theo một câu chuyện riêng. Chọn một kỳ ở khung bên trái để đọc.
          </p>
          <div id="cv-motif" style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Motif name="dom-muc" size={32} />
          </div>
        </Reveal>
      </div>

      <ChuyenVeReader episodes={episodes} />

      <Footer />
    </>
  );
}

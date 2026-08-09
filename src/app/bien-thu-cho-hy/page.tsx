import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { LetterReader } from "@/components/LetterReader";
import { Motif } from "@/components/Motif";
import { letters } from "@/data/bienThuChoHy";

export const metadata: Metadata = {
  title: "biên-thư-cho-Hy",
  description: "những lá thư riêng, gửi một người bạn tên Hy.",
};

export default function BienThuChoHyPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="biên-thư-cho-Hy" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          biên-thư-cho-Hy
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>những lá thư riêng, gửi một người bạn tên Hy</span>
      </div>

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 560 }}>
        <ImagePlaceholder label="ảnh · bàn viết, ánh đèn, đêm Măng Đen" aspectRatio="auto" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "3.5rem", marginBottom: "3rem", maxWidth: "60ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          Từ 2023, cứ mỗi độ ở mlf có điều gì lắng lại đủ sâu, người sáng lập mlf lại ngồi xuống viết một lá thư gửi Hy — một người bạn trong tâm tưởng, để mà kể lại những gì đang diễn ra ở nhà mộc. Những lá thư dưới đây được xếp theo dòng thời gian, mới nhất ở trên. Chọn một ngày ở khung bên trái để đọc.
        </p>
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Motif name="dom-muc" size={32} />
        </div>
      </div>

      <div style={{ marginBottom: "5rem" }}>
        <LetterReader letters={letters} />
      </div>

      <Footer />
    </>
  );
}

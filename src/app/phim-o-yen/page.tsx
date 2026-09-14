import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { FilmPicker } from "@/components/FilmPicker";
import { phimList } from "@/data/phimOYen";

export const metadata: Metadata = {
  title: "phim ở-yên",
  description: "mlf giới thiệu những bộ phim để ở-yên.",
};

export default function PhimOYenPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="phim ở-yên" />
        <div style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ color: "var(--color-ink)" }}>xem & lắng</span>
          <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
            phim ở-yên
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 auto" }}>
            mlf giới thiệu cùng bạn
          </p>
        </div>
      </div>

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "12rem", maxWidth: "1080px" }}>
        <FilmPicker films={phimList} />
      </Reveal>

      <Footer />
    </>
  );
}

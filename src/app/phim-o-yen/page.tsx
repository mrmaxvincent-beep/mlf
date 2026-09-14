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

      <div className="wrap" style={{ paddingTop: "5.25rem", paddingBottom: "0.25rem" }}>
        <Breadcrumb label="phim ở-yên" />
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.7rem", flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.6rem", lineHeight: 1.15, color: "var(--color-ink)", margin: 0 }}>
            phim ở-yên
          </h1>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-stone)" }}>
            mlf giới thiệu cùng bạn
          </span>
        </div>
      </div>

      <Reveal className="wrap" style={{ marginTop: "1.1rem", marginBottom: "2rem", maxWidth: "820px" }}>
        <FilmPicker films={phimList} />
      </Reveal>

      <Footer />
    </>
  );
}

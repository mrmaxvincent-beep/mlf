import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { books } from "@/data/sachOYen";

export const metadata: Metadata = {
  title: "sách ở-yên",
  description: "những cuốn sách nhỏ của mộc little farm — đọc, tải về và mang theo bên mình.",
};

export default function SachOYenPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="sách ở-yên" />
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>đọc & giữ lại</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          sách ở-yên
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "48ch", margin: 0 }}>
          những cuốn sách nhỏ của mộc little farm.
        </p>
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "5rem", display: "flex", flexDirection: "column", gap: "4rem" }}>
        {books.map((book) => (
          <Reveal
            key={book.id}
            style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "2.5rem", alignItems: "center", paddingBottom: "4rem", borderBottom: "1px solid var(--color-mist)" }}
          >
            <ImagePlaceholder label={`ảnh · bìa ${book.title}`} aspectRatio="3/4" src={book.cover} />
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>
                {book.tag}
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.7rem", color: "var(--color-ink)", margin: "0 0 1rem" }}>
                {book.title}
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem", textAlign: "justify" }}>
                {book.desc}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.7rem", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>
                  {book.format}
                </span>
                <span style={{ color: "var(--color-mist)" }}>·</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>
                  phát hành {book.release}
                </span>
              </div>
              {book.comingSoon ? (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: "2.4rem",
                    padding: "0 1.3rem",
                    borderRadius: "999px",
                    border: "1px solid var(--color-mist)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-stone)",
                  }}
                >
                  sắp ra mắt
                </span>
              ) : (
                <a href={book.downloadHref} target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
                  tải xuống <span className="ar">→</span>
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Footer />
    </>
  );
}

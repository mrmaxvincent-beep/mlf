import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { episodes } from "@/data/podcastOYen";

export const metadata: Metadata = {
  title: "podcast ở-yên",
  description: "chương trình podcast của mộc little farm, phát hành ngày 1 hàng tháng trên Spotify.",
};

const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  height: "2.2rem",
  padding: "0 1.1rem",
  borderRadius: "999px",
  border: "1px solid var(--color-mist)",
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--color-stone)",
};

export default function PodcastOYenPage() {
  const [first] = episodes;

  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="podcast ở-yên" />
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>nghe & cảm</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          podcast ở-yên
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-stone)", maxWidth: "44ch", margin: "0 0 0.9rem" }}>
          những cuộc trò chuyện về đời sống ở-yên.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", maxWidth: "48ch", margin: 0 }}>
          phát hành vào ngày 1 hàng tháng, trên Spotify.
        </p>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · podcast ở-yên 1" aspectRatio="16/12" src="/assets/podcast1.webp" alt="podcast ở-yên" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · podcast ở-yên 2" aspectRatio="16/12" src="/assets/podcast_2.webp" alt="podcast ở-yên" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · podcast ở-yên 3" aspectRatio="16/12" src="/assets/podcast3.webp" alt="podcast ở-yên" style={{ width: "100%", height: "auto" }} />
      </div>

      {/* featured episode / player */}
      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "4.5rem", maxWidth: "620px" }}>
        <div style={{ border: "1px solid var(--color-mist)", borderRadius: "1rem", padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: "1.4rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
              tập {first.n}
            </span>
            <span style={pill}>sắp ra mắt</span>
          </div>

          {/* spotify embed placeholder — swap for a real <iframe src="https://open.spotify.com/embed/episode/..."> once the first episode is live */}
          <div
            style={{
              height: "152px",
              borderRadius: "0.75rem",
              background: "var(--color-cham-dem)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-paper)" }}>
              ĐANG CẬP NHẬT
            </span>
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}

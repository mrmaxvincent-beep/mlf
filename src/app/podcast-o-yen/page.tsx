import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
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

      {/* featured episode / player */}
      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "4.5rem", maxWidth: "620px" }}>
        <div style={{ border: "1px solid var(--color-mist)", borderRadius: "1rem", padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", marginBottom: "1.4rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
              tập {first.n}
            </span>
            <span style={pill}>sắp ra mắt</span>
          </div>

          <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.4rem", color: "var(--color-ink)", margin: "0 0 0.7rem" }}>
            {first.title}
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.6rem", maxWidth: "48ch" }}>
            {first.desc}
          </p>

          {/* spotify embed placeholder — swap for a real <iframe src="https://open.spotify.com/embed/episode/..."> once the first episode is live */}
          <div
            style={{
              height: "152px",
              borderRadius: "0.75rem",
              background: "var(--color-photo-placeholder)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--color-stone)" }}>
              spotify player
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.06em", color: "var(--color-stone)", opacity: 0.75 }}>
              sẽ hiển thị ở đây khi tập đầu tiên phát hành
            </span>
          </div>
        </div>
      </Reveal>

      {/* about */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-ink)" }}>về podcast</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          mỗi tập, mộc little farm ngồi lại cùng một người khách, một người bạn, hoặc chính những người đang sống ở nhà mộc - để trò chuyện chậm rãi về một đời sống ở-yên: cách người ta dừng lại, cách người ta lắng nghe mình, và những khoảng lặng giữa đời thường.
        </p>
      </Reveal>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";

const description = "mỗi người đều đang chăm một khu vườn bên trong mình — vườn-tâm là nơi chia sẻ những câu chuyện gieo trồng, chăm sóc hạt giống ấy.";

export const metadata: Metadata = {
  title: "vườn-tâm",
  description,
};

export default function VuonTamPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="vườn-tâm" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          vườn-tâm
        </h1>
      </div>

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "3.5rem", maxWidth: "40rem" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem, 3vw, 1.4rem)", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          mỗi người đều đang chăm một khu vườn bên trong mình. có hạt đã nảy, có hạt còn nằm yên dưới đất, có những mùa tưới mãi chẳng thấy gì, rồi một sáng bỗng thấy mầm xanh.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          nếu bạn có một câu chuyện về việc gieo trồng, chăm sóc những hạt giống ấy, một thói quen nhỏ, một lần dừng lại được, một điều chợt nhận ra, hãy gửi về cho nhà mộc.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          gửi về <strong style={{ fontWeight: 600 }}>hello@moclittlefarm.com</strong>, chia sẻ của bạn sẽ được gieo xuống khu vườn chung ở đây.
        </p>
      </Reveal>

      <Footer />
    </>
  );
}

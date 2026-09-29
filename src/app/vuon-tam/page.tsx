import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";

const description = "vườn-tâm là nơi mọi người chia sẻ những câu chuyện chăm sóc những hạt giống tâm của mình.";

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

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "6rem", maxWidth: "40rem" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem, 3vw, 1.4rem)", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          vườn-tâm là nơi mọi người chia sẻ những câu chuyện chăm sóc những hạt giống tâm của mình.
        </p>
      </Reveal>

      <Footer />
    </>
  );
}

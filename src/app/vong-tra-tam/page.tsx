import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";

const description = "vòng-trà-tâm là nơi mọi người ngồi lại với tâm mình.";

export const metadata: Metadata = {
  title: "vòng-trà-tâm",
  description,
};

export default function VongTraTamPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="vòng-trà-tâm" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          vòng-trà-tâm
        </h1>
      </div>

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "6rem", maxWidth: "40rem" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem, 3vw, 1.4rem)", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          vòng-trà-tâm là nơi mọi người ngồi lại với tâm mình.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          mlf mong muốn mang ngày càng nhiều vòng-trà-tâm đến nhiều nơi.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          và chúng tôi đang chuẩn bị cho hành trình đó.
        </p>
      </Reveal>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TuDienReader } from "@/components/TuDienReader";
import { entries } from "@/data/tuDien";

export const metadata: Metadata = {
  title: "từ điển ở-yên",
  description: "tra cứu các từ trong hệ ngôn ngữ ở-yên, theo thứ tự A, B, C.",
};

export default function TuDienOYenPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="từ điển ở-yên" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          từ điển ở-yên
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>tra từ theo thứ tự A, B, C</span>
      </div>

      <div style={{ marginTop: "3.5rem", marginBottom: "5rem" }}>
        <TuDienReader entries={entries} />
      </div>

      <Footer />
    </>
  );
}

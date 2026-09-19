import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { DaoNayFeed } from "@/components/DaoNayFeed";
import { tracesFallback } from "@/data/daoNay";

export const metadata: Metadata = {
  title: "dạo này",
  description: "Những dấu vết ngắn từ nhà mộc — hôm nay ở đây có gì đang xảy ra.",
};

export default function DaoNayPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="dạo này" />
        <span className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--color-ink)" }}>
          <span className="dn-dot" aria-hidden />
          mộc little farm · nhà đang thở
        </span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 1rem" }}>
          dạo này
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", lineHeight: 1.6, color: "var(--color-stone)", maxWidth: "30em", margin: 0 }}>
          Không phải tin tức. Chỉ là những gì vừa xảy ra ở đây, ghi lại một dòng, rồi thôi.
        </p>
      </div>

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "5rem" }}>
        <DaoNayFeed fallback={tracesFallback} />
      </Reveal>

      <Footer />
    </>
  );
}

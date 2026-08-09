import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KhoLoiNhan } from "@/components/KhoLoiNhan";
import { routes } from "@/lib/nav";
import { notesFallback } from "@/data/motNgayOYen";

export const metadata: Metadata = {
  title: "kho lời nhắn ở-yên",
  description: "những dòng người đến trước đã để lại, cho người đến sau.",
};

export default function KhoLoiNhanOYenPage() {
  return (
    <>
      <Header />

      <div style={{ maxWidth: 620, margin: "0 auto", padding: "6.5rem 1.5rem 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.5rem" }}>
          <Link href={routes.home} className="mono-link" style={{ color: "var(--color-stone)" }}>
            trang chủ
          </Link>
          <span>/</span>
          <Link href={routes.motNgayOYen} className="mono-link" style={{ color: "var(--color-stone)" }}>
            một ngày ở-yên
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-ink)" }}>kho lời nhắn</span>
        </div>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 1.5rem 6rem" }}>
        <KhoLoiNhan notesFallback={notesFallback} />

        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link className="mono-link" href={routes.motNgayOYen} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "var(--color-stone)", borderBottom: "1px solid var(--color-mist)", paddingBottom: "0.15rem" }}>
            để lại lời nhắn của riêng bạn →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OneDayOYen } from "@/components/OneDayOYen";
import { routes } from "@/lib/nav";
import { hints, notesFallback, dayPoem, startingTotal } from "@/data/motNgayOYen";

export const metadata: Metadata = {
  title: "một ngày ở-yên",
  description: "cùng những người bạn khác, sống chậm lại một ngày — ai ở đâu cứ ở đó.",
};

export default function MotNgayOYenPage() {
  return (
    <>
      <Header />

      <div style={{ maxWidth: 620, margin: "0 auto", padding: "6.5rem 1.5rem 0" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.5rem" }}>
          <Link href={routes.home} className="mono-link" style={{ color: "var(--color-stone)" }}>
            trang chủ
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-ink)" }}>một ngày ở-yên</span>
        </div>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 1.5rem 2rem" }}>
        <OneDayOYen hints={hints} notesFallback={notesFallback} dayPoem={dayPoem} startingTotal={startingTotal} />
      </div>

      <Footer />
    </>
  );
}

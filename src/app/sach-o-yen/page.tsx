import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "sách ở-yên",
  description: "đang cập nhật...",
};

export default function SachOYenPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="sách ở-yên" />
      </div>

      <div className="wrap" style={{ minHeight: "40vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", lineHeight: 1.5, color: "var(--color-ink)", margin: 0, maxWidth: "40ch" }}>
          đang cập nhật...
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Link className="go mono-link" href={routes.thuVien} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          về thư viện ở-yên <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

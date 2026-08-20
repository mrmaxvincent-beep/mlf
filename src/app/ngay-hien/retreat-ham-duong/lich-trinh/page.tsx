import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { ItinerarySchedule } from "@/components/ItinerarySchedule";
import { routes } from "@/lib/nav";
import { days, journeyNav } from "@/data/retreatHamDuongLichTrinh";

export const metadata: Metadata = {
  title: "retreat hàm-dưỡng · lịch trình",
  description: "hành trình 5 ngày — lịch trình tham khảo. mộc little farm, măng đen.",
};

export default function RetreatHamDuongLichTrinhPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "retreat hàm-dưỡng", href: routes.retreatHamDuong }, { label: "lịch trình tham khảo" }]} />
        <span className="eyebrow">mộc little farm · retreat hàm-dưỡng</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 2.9rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
          lịch trình retreat
        </h1>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.06em", color: "var(--color-stone)", marginBottom: "1.4rem" }}>
          hành trình 5 ngày — lịch trình tham khảo
        </span>
      </div>

      <div className="wrap" style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", padding: "1.4rem 0", borderTop: "1px solid var(--color-mist)", borderBottom: "1px solid var(--color-mist)" }}>
          {journeyNav.map((d) => (
            <a key={d.anchor} href={d.anchor} style={{ textAlign: "center" }}>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", color: "var(--color-cham-dem)", marginBottom: "0.3rem" }}>{d.num}</span>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>{d.short}</span>
            </a>
          ))}
        </div>
      </div>

      <Reveal className="wrap itin-ink" style={{ marginBottom: "3rem" }}>
        <ItinerarySchedule days={days} detailed cottonPerDay />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link href={routes.retreatHamDuong} className="go mono-link" style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", border: "1px solid var(--color-mist)", borderRadius: 2, padding: "0.85rem 1.4rem" }}>
          ← xem lại retreat hàm-dưỡng
        </Link>
        <a href="https://forms.gle/RL8yW96QMBZm7UxD9" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
          đăng ký <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "44ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          &ldquo;không cần chuẩn bị gì — chỉ cần một tâm thế rộng mở và để mọi thứ tự nhiên xảy đến, dẫn dắt và mở ra... từng chút, từng chút một.&rdquo;
        </p>
      </div>

      <Footer />
    </>
  );
}

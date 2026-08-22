import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { ItinerarySchedule } from "@/components/ItinerarySchedule";
import { routes } from "@/lib/nav";
import { days, journeyNav } from "@/data/retreatOYenLichTrinh";

export const metadata: Metadata = {
  title: "retreat ở-yên · lịch trình",
  description: "5 ngày 4 đêm — lịch trình tham khảo. từng ngày, ta buông bớt một chút nặng nề, để trở về với sự nhẹ nhàng vốn có.",
};

export default function RetreatOYenLichTrinhPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "retreat ở-yên", href: routes.retreatOYen }, { label: "lịch trình tham khảo" }]} />
        <span className="eyebrow">mộc little farm · retreat ở-yên</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 2.9rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
          lịch trình retreat
        </h1>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.06em", color: "var(--color-stone)", marginBottom: "1.4rem" }}>
          5 ngày 4 đêm — lịch trình tham khảo
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
        <ItinerarySchedule days={days} cottonPerDay />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "4rem", maxWidth: "44ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.85, color: "var(--color-stone-alt)", margin: 0 }}>
          lưu ý: đây là lịch trình tham khảo cho một chủ đề cụ thể. mỗi chuyến retreat ở-yên đều được thiết kế riêng theo nhóm khách - lịch trình chi tiết sẽ được gửi vào từng ngày diễn ra retreat, để giữ tính thong thả, uyển chuyển.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link href={routes.retreatOYen} className="go mono-link" style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", border: "1px solid var(--color-mist)", borderRadius: 2, padding: "0.85rem 1.4rem" }}>
          ← xem lại retreat ở-yên
        </Link>
        <a href="https://forms.gle/Ra77c8s5cH6WeL5e7" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
          đăng ký <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "44ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          &ldquo;chỉ cần một tâm thế rộng mở và để mọi thứ tự nhiên xảy đến, dẫn dắt và mở ra... từng chút, từng chút một.&rdquo;
        </p>
      </div>

      <Footer />
    </>
  );
}

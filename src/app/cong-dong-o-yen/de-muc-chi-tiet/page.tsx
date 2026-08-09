import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DeMucIndex } from "@/components/DeMucIndex";
import { routes } from "@/lib/nav";
import { doors, spaceGroups } from "@/data/deMucChiTiet";

export const metadata: Metadata = {
  title: "đề mục",
  description: "ba cửa vào — khơi gợi, chiêm nghiệm, khai mở.",
};

export default function DeMucChiTietPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: 0 }}>
        <Breadcrumb trail={[{ label: "cộng đồng ở-yên", href: routes.congDongOYen }, { label: "đề mục" }]} />
        <span className="eyebrow">ba cửa vào</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 2rem" }}>
          đề mục
        </h1>
      </div>

      <DeMucIndex doors={doors} spaceGroups={spaceGroups} />

      <Footer />
    </>
  );
}

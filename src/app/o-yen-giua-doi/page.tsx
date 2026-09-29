import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { OYenGiuaDoiPicker } from "@/components/OYenGiuaDoiPicker";
import { sections } from "@/data/oYenGiuaDoi";

const title = "ở-yên giữa đời";

export const metadata: Metadata = {
  title,
  description: "ở-yên giữa đời — 5 phần: với chính mình, trong gia đình, nơi công sở, giữa xã hội, khi biến cố.",
};

export default function Page() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label={title} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          {title}
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "48ch", margin: 0 }}>
          ở-yên không chỉ khi ngồi lặng một mình, mà ở ngay giữa những nơi ta va chạm mỗi ngày.
        </p>
      </div>

      <Reveal style={{ marginTop: "3.5rem", marginBottom: "6rem" }}>
        <Suspense fallback={null}>
          <OYenGiuaDoiPicker sections={sections} />
        </Suspense>
      </Reveal>

      <Footer />
    </>
  );
}

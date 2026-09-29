import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { HoiDuongReader } from "@/components/HoiDuongReader";
import { topics } from "@/data/hoiDuong";

const title = "hỏi-đường";

export const metadata: Metadata = {
  title,
  description: "thực tập là một con đường, và khi lạc thì người ta hỏi đường.",
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
      </div>

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "6rem", maxWidth: "40rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          thực tập là một con đường, và khi lạc thì người ta hỏi đường. người chỉ đường không phải thầy, chỉ là người đã đi qua đoạn ấy, chỉ một hướng rồi để người hỏi tự bước tiếp.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          hãy hỏi đường ở đây: <strong style={{ fontWeight: 600 }}>hello@moclittlefarm.com</strong>
        </p>
      </Reveal>

      <Reveal style={{ marginBottom: "6rem" }}>
        <HoiDuongReader topics={topics} />
      </Reveal>

      <Footer />
    </>
  );
}

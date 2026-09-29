import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { LoiNhacGallery } from "@/components/LoiNhacGallery";
import { messages } from "@/data/loiNhacOYen";

const title = "lời nhắc ở-yên";
const description = "những lời nhắc nhỏ về ở-yên, trình bày như hình nền điện thoại — chạm để xem, tải về hoặc chia sẻ.";

export const metadata: Metadata = {
  title,
  description,
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
          những lời nhắc nhỏ, mang theo trên màn hình điện thoại mỗi ngày. chạm vào một tấm để xem trọn, tải về làm hình nền hoặc chia sẻ cho ai đó.
        </p>
      </div>

      <Reveal style={{ marginTop: "2rem", marginBottom: "4rem" }}>
        <LoiNhacGallery messages={messages} />
      </Reveal>

      <Footer />
    </>
  );
}

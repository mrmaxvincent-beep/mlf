import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { BlogReader } from "@/components/BlogReader";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";
import { posts } from "@/data/tuanDuBlog";

export const metadata: Metadata = {
  title: "người đi qua",
  description: "ghi chép & chia sẻ từ những chuyến tuần-du.",
};

export default function TuanDuBlogPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "2rem", flexWrap: "wrap" }}>
          <Link href={routes.home} style={{ color: "var(--color-stone)" }}>
            trang chủ
          </Link>
          <span>/</span>
          <Link href={routes.tuanDu} style={{ color: "var(--color-stone)" }}>
            tuần-du
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-ink)" }}>người đi qua</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          người đi qua
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>ghi chép &amp; chia sẻ từ những chuyến tuần-du</span>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · người đi qua trên đường tuần-du 1" aspectRatio="16/12" src="/assets/blogtuandu01.jpg" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · người đi qua trên đường tuần-du 2" aspectRatio="16/12" src="/assets/blogtuandu2.jpg" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · người đi qua trên đường tuần-du 3" aspectRatio="16/12" src="/assets/blogtuandu3.jpg" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="cv-shell" style={{ margin: "3.5rem auto 3rem" }}>
        <div />
        <Reveal>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0, maxWidth: "60ch" }}>
            Sau mỗi chuyến tuần-du, luôn còn lại những dòng chữ — ghi chép của người đồng hành, nhật ký của người đi qua từng vùng đất. Chọn một bài ở khung bên trái để đọc.
          </p>
        </Reveal>
      </div>

      <BlogReader posts={posts} />

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link href={routes.tuanDu} className="cta-btn">
          về trang tuần-du <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

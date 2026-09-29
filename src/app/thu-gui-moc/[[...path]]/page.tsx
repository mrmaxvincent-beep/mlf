import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ThuGuiMocReader } from "@/components/ThuGuiMocReader";
import { Reveal } from "@/components/Reveal";
import { entries } from "@/data/thuGuiMoc";

const title = "thư-gửi-mộc";
const baseDescription = "những lời thì thầm gửi tới nhà mộc.";
const maxNo = Math.max(...entries.map((e) => e.no));

function resolve(path: string[]) {
  if (!path[0]) return entries.find((e) => e.no === maxNo) ?? null;
  const no = Number(path[0]);
  return entries.find((e) => e.no === no) ?? null;
}

export function generateStaticParams() {
  return [{ path: [] }, ...entries.map((e) => ({ path: [String(e.no)] }))];
}

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }): Promise<Metadata> {
  const { path = [] } = await params;
  const entry = resolve(path);
  if (!entry) return {};
  return {
    title: path.length ? `lời thì thầm của ${entry.name} · ${title}` : title,
    description: baseDescription,
  };
}

export default async function ThuGuiMocPage({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  const entry = resolve(path);
  if (!entry) notFound();

  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="thư-gửi-mộc" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          thư-gửi-mộc
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>những lời thì thầm gửi tới nhà mộc</span>
      </div>

      {/* MỜI GỬI THƯ — thư nhận qua email (không giới hạn độ dài), được chọn và đăng thủ công vào khung đọc bên dưới */}
      <Reveal className="wrap" style={{ marginTop: "3.5rem", maxWidth: "40rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)", marginBottom: "1.4rem" }}>gửi thư tới mộc</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 auto", maxWidth: "46ch" }}>
          có điều gì bạn muốn gửi tới nhà mộc, hãy soạn thư tới{" "}
          <strong style={{ fontWeight: 600 }}>hello@moclittlefarm.com</strong>. lá thư ấy sẽ được đăng tải ở đây, như một sự lưu dấu giữa bạn và mlf.
        </p>
      </Reveal>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · trang thư viết tay" aspectRatio="16/12" src="/assets/ngayhien_luubut1.webp" alt="thư-gửi-mộc" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · thư-gửi-mộc 2" aspectRatio="16/12" src="/assets/ngayhien_luubut2.webp" alt="thư-gửi-mộc" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · thư-gửi-mộc 3" aspectRatio="16/12" src="/assets/ngayhien_luubut3.webp" alt="thư-gửi-mộc" style={{ width: "100%", height: "auto" }} />
      </div>

      <Reveal style={{ marginTop: "3.5rem", marginBottom: "5rem" }}>
        <ThuGuiMocReader entries={entries} initialNo={entry.no} />
      </Reveal>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { GhiChepPicker } from "@/components/GhiChepPicker";
import { Reveal } from "@/components/Reveal";
import { editor, notes } from "@/data/ghiChep";

const title = "ghi chép ở-yên";
const baseDescription = "ghi chép về ở-yên. Mỗi ghi chép là một góc nhìn về việc ở lại với chính mình.";

function resolve(path: string[]) {
  const [slug] = path;
  if (!slug) return { slug: null };
  const note = notes.find((n) => n.slug === slug);
  return note ? { slug } : null;
}

export function generateStaticParams() {
  const params: { path: string[] }[] = [{ path: [] }];
  for (const n of notes) params.push({ path: [n.slug] });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }): Promise<Metadata> {
  const { path = [] } = await params;
  const resolved = resolve(path);
  if (!resolved) return {};
  if (resolved.slug) {
    const note = notes.find((n) => n.slug === resolved.slug)!;
    return { title: `${note.title} · ${title}`, description: baseDescription };
  }
  return { title, description: baseDescription };
}

export default async function GhiChepPage({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  const resolved = resolve(path);
  if (!resolved) notFound();

  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label={title} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          {title}
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>muôn vàn khoảnh khắc được gìn giữ trong chữ, giữa những xoay chuyển của đời sống.</span>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · kệ sách, ánh sáng cửa sổ 1" aspectRatio="16/12" src="/assets/thuvienoyen01.webp" alt="ghi chép ở-yên" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · kệ sách, ánh sáng cửa sổ 2" aspectRatio="16/12" src="/assets/thuvienoyen02.webp" alt="ghi chép ở-yên" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · kệ sách, ánh sáng cửa sổ 3" aspectRatio="16/12" src="/assets/thuvienoyen03.webp" alt="ghi chép ở-yên" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="wrap" style={{ marginTop: "3.5rem", marginBottom: "3rem", display: "flex", gap: "1.6rem", alignItems: "center", flexWrap: "wrap" }}>
        <ImagePlaceholder
          label="ảnh · chủ biên"
          aspectRatio="1/1"
          alt={editor.name}
          style={{ width: "6.5rem", height: "6.5rem", borderRadius: "50%", flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: "16rem" }}>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.2rem" }}>
            {editor.name}
          </span>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.9rem" }}>
            {editor.role}
          </span>
          {editor.bio.map((p, i) => (
            <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", margin: i === 0 ? 0 : "0.6rem 0 0", maxWidth: "60ch" }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "2rem" }}>
        <Reveal>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "left", margin: 0, maxWidth: "60ch" }}>
            Mỗi ghi chép là một góc nhìn về việc ở lại với chính mình. Chọn một tựa bài bên trái để đọc.
          </p>
        </Reveal>
      </div>

      <div style={{ marginBottom: "5rem" }}>
        <GhiChepPicker notes={notes} initialSlug={resolved.slug} />
      </div>

      <Footer />
    </>
  );
}

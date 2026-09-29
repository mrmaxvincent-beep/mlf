import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { OYenGiuaDoiPicker } from "@/components/OYenGiuaDoiPicker";
import { sections } from "@/data/oYenGiuaDoi";

const title = "ở-yên giữa đời";
const baseDescription = "ở-yên giữa đời — 5 phần: với chính mình, trong gia đình, nơi công sở, giữa xã hội, khi biến cố.";

function resolve(path: string[]) {
  const [sectionId, slug] = path;
  const section = sectionId ? sections.find((s) => s.id === sectionId) : sections[0];
  if (!section) return null;
  if (!slug) return { section, article: null };
  const article = section.articles.find((a) => a.slug === slug);
  return article ? { section, article } : null;
}

export function generateStaticParams() {
  const params: { path: string[] }[] = [{ path: [] }];
  for (const s of sections) {
    params.push({ path: [s.id] });
    for (const a of s.articles) params.push({ path: [s.id, a.slug] });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }): Promise<Metadata> {
  const { path = [] } = await params;
  const resolved = resolve(path);
  if (!resolved) return {};
  if (resolved.article) {
    return {
      title: `${resolved.article.title} · ${title}`,
      description: resolved.article.body.slice(0, 140),
    };
  }
  return { title, description: baseDescription };
}

export default async function Page({ params }: { params: Promise<{ path?: string[] }> }) {
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
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "48ch", margin: 0 }}>
          ở-yên không chỉ khi ngồi lặng một mình, mà ở ngay giữa những nơi ta va chạm mỗi ngày.
        </p>
      </div>

      <Reveal style={{ marginTop: "3.5rem", marginBottom: "6rem" }}>
        <OYenGiuaDoiPicker sections={sections} initialSectionId={resolved.section.id} initialArticleSlug={resolved.article?.slug ?? null} />
      </Reveal>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { OYenCanBanPicker } from "@/components/OYenCanBanPicker";
import { parts } from "@/data/oYenCanBan";

const title = "ở-yên căn bản";
const baseDescription = "một hệ thống thực tập để học cách không bị cuốn đi bởi chính mình.";

function resolve(path: string[]) {
  const [partId, lessonSlug] = path;
  const part = partId ? parts.find((p) => p.id === partId) : parts[0];
  if (!part) return null;
  if (!lessonSlug) return { part, lesson: null };
  const lesson = part.lessons.find((l) => l.slug === lessonSlug);
  return lesson ? { part, lesson } : null;
}

export function generateStaticParams() {
  const params: { path: string[] }[] = [{ path: [] }];
  for (const p of parts) {
    params.push({ path: [p.id] });
    for (const l of p.lessons) params.push({ path: [p.id, l.slug] });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }): Promise<Metadata> {
  const { path = [] } = await params;
  const resolved = resolve(path);
  if (!resolved) return {};
  if (resolved.lesson) {
    return {
      title: `${resolved.lesson.title} · ${title}`,
      description: baseDescription,
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
          một hệ thống thực tập để học cách không bị cuốn đi bởi chính mình.
        </p>
      </div>

      <Reveal style={{ marginTop: "3.5rem", marginBottom: "6rem" }}>
        <OYenCanBanPicker parts={parts} initialPartId={resolved.part.id} initialLessonSlug={resolved.lesson?.slug ?? null} />
      </Reveal>

      <Footer />
    </>
  );
}

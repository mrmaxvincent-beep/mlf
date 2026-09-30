import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { NepNhaPicker } from "@/components/NepNhaPicker";
import { sections } from "@/data/nepNha";

const title = "nếp nhà";
const baseDescription = "đưa ở-yên vào không gian và nếp sống.";

function resolve(path: string[]) {
  if (!path[0]) return sections[0] ?? null;
  return sections.find((s) => s.id === path[0]) ?? null;
}

export function generateStaticParams() {
  return [{ path: [] }, ...sections.map((s) => ({ path: [s.id] }))];
}

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }): Promise<Metadata> {
  const { path = [] } = await params;
  const section = resolve(path);
  if (!section) return {};
  return {
    title: path.length ? `${section.name} · ${title}` : title,
    description: baseDescription,
  };
}

export default async function Page({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  const section = resolve(path);
  if (!section) notFound();

  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label={title} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          {title}
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "48ch", margin: 0 }}>
          đưa ở-yên vào không gian và nếp sống.
        </p>
      </div>

      <Reveal style={{ marginTop: "3.5rem", marginBottom: "6rem" }}>
        <NepNhaPicker sections={sections} initialSectionId={section.id} />
      </Reveal>

      <Footer />
    </>
  );
}

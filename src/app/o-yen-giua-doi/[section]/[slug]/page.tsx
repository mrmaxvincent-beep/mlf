import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { sections } from "@/data/oYenGiuaDoi";
import { routes } from "@/lib/nav";

function findArticle(sectionId: string, slug: string) {
  const section = sections.find((s) => s.id === sectionId);
  const article = section?.articles.find((a) => a.slug === slug);
  return section && article ? { section, article } : null;
}

export function generateStaticParams() {
  return sections.flatMap((s) => s.articles.map((a) => ({ section: s.id, slug: a.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string; slug: string }> }): Promise<Metadata> {
  const { section, slug } = await params;
  const found = findArticle(section, slug);
  if (!found) return {};
  return {
    title: `${found.article.title} · ở-yên giữa đời`,
    description: found.article.body.slice(0, 140),
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section: sectionId, slug } = await params;
  const found = findArticle(sectionId, slug);
  if (!found) notFound();
  const { section, article } = found;

  const others = section.articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem", maxWidth: "40rem" }}>
        <Breadcrumb
          trail={[
            { label: "ở-yên giữa đời", href: routes.thucTapOYenGiuaDoi },
            { label: section.name },
          ]}
        />
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)", margin: "1.4rem 0 0.9rem" }}>
          {section.num} · {section.name}
        </span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.9rem, 5vw, 2.6rem)", lineHeight: 1.3, color: "var(--color-ink)", margin: 0 }}>
          {article.title}
        </h1>
      </div>

      <Reveal className="wrap" style={{ marginTop: "2.6rem", marginBottom: "4rem", maxWidth: "40rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          {article.body}
        </p>
      </Reveal>

      <div className="wrap" style={{ maxWidth: "40rem", marginBottom: "3rem" }}>
        <Link className="go mono-link" href={routes.thucTapOYenGiuaDoi} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)" }}>
          ← về ở-yên giữa đời
        </Link>
      </div>

      {others.length > 0 ? (
        <div className="wrap" style={{ maxWidth: "40rem", marginBottom: "6rem", paddingTop: "2rem", borderTop: "1px solid var(--color-mist)" }}>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.2rem" }}>
            bài khác trong &ldquo;{section.name}&rdquo;
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/o-yen-giua-doi/${section.id}/${a.slug}`}
                className="link-sweep"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", padding: "0.7rem 0", borderTop: "1px solid var(--color-mist)" }}
              >
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-ink)" }}>{a.title}</span>
                <span className="ar" style={{ flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-stone)" }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  );
}

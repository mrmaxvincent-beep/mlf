import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { VuonTamGarden } from "@/components/VuonTamGarden";
import { VuonTamCompose } from "@/components/VuonTamCompose";
import { AwakenButton } from "@/components/AwakenButton";
import { species, stories } from "@/data/vuonTam";
import { routes } from "@/lib/nav";

const title = "vườn-tâm";
const baseDescription = "mỗi người đều đang nuôi một hạt mầm trong mình — vườn-tâm là nơi gieo và đọc những hạt ấy.";

type Resolved = { kind: "garden" } | { kind: "species"; speciesId: string } | { kind: "story"; speciesId: string; slug: string };

function resolve(path: string[]): Resolved | null {
  const [speciesId, slug] = path;
  if (!speciesId) return { kind: "garden" };
  const sp = species.find((s) => s.id === speciesId);
  if (!sp) return null;
  if (!slug) return { kind: "species", speciesId };
  const story = stories.find((st) => st.speciesId === speciesId && st.slug === slug);
  if (!story) return null;
  return { kind: "story", speciesId, slug };
}

export function generateStaticParams() {
  const params: { path: string[] }[] = [{ path: [] }];
  for (const s of species) {
    params.push({ path: [s.id] });
    for (const st of stories.filter((x) => x.speciesId === s.id)) params.push({ path: [s.id, st.slug] });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }): Promise<Metadata> {
  const { path = [] } = await params;
  const resolved = resolve(path);
  if (!resolved) return {};
  if (resolved.kind === "story") {
    const story = stories.find((s) => s.slug === resolved.slug)!;
    return { title: `${story.seedName} · ${title}`, description: baseDescription };
  }
  if (resolved.kind === "species") {
    const sp = species.find((s) => s.id === resolved.speciesId)!;
    return { title: `${sp.name} · ${title}`, description: baseDescription };
  }
  return { title, description: baseDescription };
}

export default async function VuonTamPage({ params }: { params: Promise<{ path?: string[] }> }) {
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
      </div>

      {resolved.kind === "garden" ? (
        <>
          <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "3.5rem", maxWidth: "40rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem, 3vw, 1.4rem)", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
              mỗi người đều đang nuôi một hạt mầm trong mình. có khi là một chút kiên nhẫn, có khi là học cách nghỉ ngơi, có khi là tha thứ cho một người đã cũ.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
              ở đây, mỗi người gieo một hạt: viết vài dòng về điều mình đang nuôi dưỡng, vì sao, và đang nuôi nó thế nào.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
              đọc chuyện của người khác, nếu thấy hạt ấy cũng đang nảy trong mình, hãy để lại một dấu nhỏ. biết đâu, câu chuyện của bạn cũng sẽ đánh thức một hạt mầm ở ai đó.
            </p>
          </Reveal>

          <Reveal className="wrap" style={{ marginBottom: "4rem" }}>
            <VuonTamCompose />
          </Reveal>

          <Reveal className="wrap" style={{ marginBottom: "6rem" }}>
            <span className="eyebrow" style={{ marginBottom: "1.6rem", display: "block" }}>kho hạt</span>
            <VuonTamGarden species={species} stories={stories} />
          </Reveal>
        </>
      ) : null}

      {resolved.kind === "species"
        ? (() => {
            const sp = species.find((s) => s.id === resolved.speciesId)!;
            const list = stories.filter((s) => s.speciesId === sp.id);
            return (
              <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "6rem", maxWidth: "40rem" }}>
                <Link href={routes.vuonTam} className="mono-link" style={{ display: "block", marginBottom: "1.6rem", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
                  ← về khu vườn
                </Link>
                <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.6rem", color: "var(--color-ink)", margin: "0 0 2rem" }}>
                  {sp.name}
                </h2>
                {list.length ? (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {list.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/vuon-tam/${sp.id}/${s.slug}`}
                        className="link-row"
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", padding: "0.95rem 0", borderTop: "1px solid var(--color-mist)" }}
                      >
                        <span>
                          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--color-ink)" }}>{s.seedName}</span>
                          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.06em", color: "var(--color-stone)", marginTop: "0.3rem" }}>— {s.author}</span>
                        </span>
                        <span className="ar" style={{ flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-stone)" }}>→</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0 }}>
                    chưa có ai kể chuyện ở đây.
                  </p>
                )}
              </Reveal>
            );
          })()
        : null}

      {resolved.kind === "story"
        ? (() => {
            const sp = species.find((s) => s.id === resolved.speciesId)!;
            const story = stories.find((s) => s.slug === resolved.slug)!;
            return (
              <>
                <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "3.5rem", maxWidth: "40rem" }}>
                  <Link href={`/vuon-tam/${sp.id}`} className="mono-link" style={{ display: "block", marginBottom: "1.6rem", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
                    ← về {sp.name}
                  </Link>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.9rem" }}>
                    {sp.name}
                  </span>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.6rem", color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
                    {story.seedName}
                  </h2>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "2rem" }}>— {story.author}</span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
                    {story.body}
                  </p>
                </Reveal>

                <Reveal className="wrap" style={{ marginBottom: "6rem" }}>
                  <AwakenButton speciesId={sp.id} />
                </Reveal>
              </>
            );
          })()
        : null}

      <Footer />
    </>
  );
}

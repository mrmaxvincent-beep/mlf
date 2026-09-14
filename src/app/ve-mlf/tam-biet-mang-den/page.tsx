import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { routes } from "@/lib/nav";
import { meta, chapters, authorNote, type Block } from "@/data/tamBietMangDen";

export const metadata: Metadata = {
  title: "tạm biệt mlf Măng Đen",
  description: "Những ghi chép từ một trái tim đang sống — mộc little farm ở Măng Đen, những ngày cuối hạ trước khi nhà mộc về Huế.",
  robots: { index: false, follow: false },
};

const label: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-stone)",
};

function Blocks({ blocks }: { blocks: Block[] }) {
  let firstParaSeen = false;
  return (
    <>
      {blocks.map((b, i) => {
        if (b.t === "break") {
          return (
            <div key={i} style={{ display: "flex", justifyContent: "center", margin: "3.5rem 0" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", letterSpacing: "0.6em", color: "var(--color-stone)", paddingLeft: "0.6em" }}>
                …
              </span>
            </div>
          );
        }

        if (b.t === "img") {
          const inner = (
            <figure style={{ margin: 0 }}>
              <ImagePlaceholder label={b.label} aspectRatio={b.ratio ?? "3/2"} />
              <figcaption style={{ ...label, marginTop: "0.7rem", color: "var(--color-stone)", letterSpacing: "0.08em", textTransform: "none" }}>
                {b.label}
              </figcaption>
            </figure>
          );
          return b.full ? (
            <Reveal key={i} style={{ margin: "3.5rem 0", width: "100vw", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
              {inner}
            </Reveal>
          ) : (
            <Reveal key={i} className="mag-wrap" style={{ margin: "3rem auto" }}>
              {inner}
            </Reveal>
          );
        }

        if (b.t === "quote") {
          return (
            <Reveal key={i} className="mag-wrap">
              <p className="mag-quote">{b.text}</p>
            </Reveal>
          );
        }

        const isLead = !firstParaSeen;
        if (isLead) firstParaSeen = true;
        return (
          <div key={i} className="mag-wrap">
            <p className={isLead ? "mag-p drop-cap" : "mag-p"}>{b.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default function TamBietMangDenPage() {
  return (
    <>
      <Header />

      {/* ============ MASTHEAD ============ */}
      <div className="mag-wrap" style={{ paddingTop: "6.5rem" }}>
        <Breadcrumb trail={[{ label: "về mlf", href: routes.veMlf }, { label: "tạm biệt Măng Đen" }]} />
        <span style={{ ...label, color: "var(--color-cham-dem)", marginBottom: "1.4rem" }}>{meta.kicker}</span>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(2.6rem, 9vw, 4.6rem)",
            lineHeight: 1.05,
            color: "var(--color-ink)",
            margin: "0 0 1.25rem",
          }}
        >
          {meta.title}
        </h1>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-stone-alt)" }}>
            {meta.season}
          </span>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-stone-alt)" }}>
            {meta.dedication}
          </span>
        </div>
      </div>

      {/* ============ COVER IMAGE ============ */}
      <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", marginBottom: "2.5rem" }}>
        <ImagePlaceholder label="ảnh bìa · mộc little farm, Măng Đen" aspectRatio="16/9" />
      </div>

      <div className="mag-wrap" style={{ marginBottom: "5rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0, paddingLeft: "1.1rem", borderLeft: "2px solid var(--color-mist)" }}>
          {meta.disclaimer}
        </p>
      </div>

      {/* ============ CHAPTERS ============ */}
      {chapters.map((c, ci) => (
        <section key={c.n} style={{ marginBottom: "5.5rem" }}>
          <Reveal className="mag-wrap" style={{ marginBottom: "3rem" }}>
            <div className="mag-rule" style={{ marginBottom: "2rem" }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", flexWrap: "wrap" }}>
              <span className="mag-chapter-num">{c.n}</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(1.9rem, 5vw, 2.8rem)",
                  lineHeight: 1.15,
                  color: "var(--color-ink)",
                  margin: 0,
                }}
              >
                {c.title}
              </h2>
            </div>
          </Reveal>

          <Blocks blocks={c.blocks} />

          {ci === chapters.length - 1 ? null : (
            <div className="mag-wrap" style={{ marginTop: "4rem", textAlign: "center" }}>
              <Motif name="gon-nuoc" size={30} />
            </div>
          )}
        </section>
      ))}

      {/* ============ AUTHOR'S NOTE ============ */}
      <div className="mag-wrap" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", letterSpacing: "0.4em", color: "var(--color-stone)", paddingLeft: "0.4em" }}>
          ..
        </span>
      </div>
      <Reveal className="mag-wrap" style={{ marginBottom: "6rem" }}>
        <div style={{ border: "1px solid var(--color-mist)", background: "var(--color-paper)", padding: "2.25rem 2rem" }}>
          <span style={{ ...label, color: "var(--color-cham-dem)", marginBottom: "1rem" }}>{authorNote.label}</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
            {authorNote.text}
          </p>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}

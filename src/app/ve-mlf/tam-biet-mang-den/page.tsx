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
      </div>

      <Reveal style={{ maxWidth: 900, margin: "0 auto", padding: "4.5rem 1.5rem 7rem", textAlign: "center" }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.32em",
            lineHeight: 1.9,
            color: "var(--color-stone)",
            paddingLeft: "0.32em",
            marginBottom: "3.25rem",
          }}
        >
          {meta.kicker}
        </span>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            fontSize: "clamp(2.9rem, 8.5vw, 5.4rem)",
            lineHeight: 1.06,
            color: "var(--color-ink)",
            maxWidth: "13ch",
            margin: "0 auto",
          }}
        >
          {meta.title}
        </h1>

        <div style={{ width: 56, height: 1, background: "var(--color-stone)", margin: "3.25rem auto 1.75rem" }} />

        <span
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-stone-alt)",
            paddingLeft: "0.22em",
          }}
        >
          {meta.season}
        </span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1.05rem",
            color: "var(--color-stone-alt)",
            marginTop: "0.85rem",
          }}
        >
          {meta.dedication}
        </span>
      </Reveal>

      {/* ============ COVER IMAGE ============ */}
      <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>
        <ImagePlaceholder label="ảnh bìa · mộc little farm, Măng Đen" aspectRatio="16/9" />
      </div>

      {/* ============ WHITE SHEET — toàn bộ phần chữ ============ */}
      <div style={{ background: "var(--color-paper)", paddingTop: "4rem", paddingBottom: "5rem" }}>
        <div className="mag-wrap" style={{ marginBottom: "1rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0, paddingLeft: "1.1rem", borderLeft: "2px solid var(--color-mist)" }}>
            {meta.disclaimer}
          </p>
        </div>

        {/* ============ CHAPTERS ============ */}
        {chapters.map((c, ci) => (
          <section key={c.n}>
            <Reveal className="mag-wrap" style={{ margin: ci === 0 ? "4.5rem auto 3.5rem" : "6.5rem auto 3.5rem" }}>
              <div
                style={{
                  border: "1px solid var(--color-mist)",
                  background: "var(--color-cotton)",
                  padding: "2.75rem 1.5rem",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.38em",
                    textTransform: "uppercase",
                    color: "var(--color-stone)",
                    paddingLeft: "0.38em",
                  }}
                >
                  phần {c.n.padStart(2, "0")}
                </span>
                <div style={{ width: 28, height: 1, background: "var(--color-mist)", margin: "1.2rem auto" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 400,
                    fontSize: "clamp(0.92rem, 2.6vw, 1.1rem)",
                    letterSpacing: "0.3em",
                    lineHeight: 1.6,
                    color: "var(--color-ink)",
                    margin: 0,
                    paddingLeft: "0.3em",
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
        <div className="mag-wrap" style={{ margin: "4.5rem auto 1.5rem", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", letterSpacing: "0.4em", color: "var(--color-stone)", paddingLeft: "0.4em" }}>
            ..
          </span>
        </div>
        <Reveal className="mag-wrap">
          <div style={{ border: "1px solid var(--color-mist)", background: "var(--color-cotton)", padding: "2.25rem 2rem" }}>
            <span style={{ ...label, color: "var(--color-cham-dem)", marginBottom: "1rem" }}>{authorNote.label}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
              {authorNote.text}
            </p>
          </div>
        </Reveal>
      </div>

      <Footer />
    </>
  );
}

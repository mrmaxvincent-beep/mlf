import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { Disclosure } from "@/components/Disclosure";
import { sections } from "@/data/oYenGiuaDoi";

const title = "ở-yên giữa đời";

export const metadata: Metadata = {
  title,
  description: "ở-yên giữa đời — 5 phần: với chính mình, trong gia đình, nơi công sở, giữa xã hội, khi biến cố.",
};

export default function Page() {
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

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "6rem", maxWidth: "44rem" }}>
        {sections.map((s, i) => (
          <Reveal key={s.id} style={{ position: "relative", borderTop: i === 0 ? "1px solid var(--color-mist)" : undefined, borderBottom: "1px solid var(--color-mist)" }}>
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: "0.6rem",
                right: 0,
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "3.4rem",
                lineHeight: 1,
                color: "var(--color-cham-dem)",
                opacity: 0.07,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {s.num}
            </span>
            <Disclosure
              trigger={
                <div>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.4rem" }}>
                    {s.num}
                  </span>
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.4rem", color: "var(--color-ink)" }}>
                    {s.name}
                  </span>
                </div>
              }
              triggerStyle={{ padding: "1.6rem 0" }}
              border={false}
            >
              <div style={{ paddingBottom: "1.6rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {s.articles.map((a, j) => (
                  <p key={j} style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.8, color: "var(--color-stone)", margin: 0 }}>
                    {a.title}
                  </p>
                ))}
              </div>
            </Disclosure>
          </Reveal>
        ))}
      </div>

      <Footer />
    </>
  );
}

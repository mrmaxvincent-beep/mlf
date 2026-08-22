import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { routes } from "@/lib/nav";
import { poemLines, milestones, branches } from "@/data/veMlf";

export const metadata: Metadata = {
  title: "về mlf",
  description: "mộc little farm — một hành trình, một cấu trúc.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.75rem",
};

export default function VeMlfPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="về mlf" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          mộc little farm
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>một hành trình, một cấu trúc</span>
      </div>

      <div className="wrap" style={{ marginTop: "3rem" }}>
        <div style={{ width: "100%", aspectRatio: "16/8", minHeight: 280, maxHeight: 460 }}>
          <ImagePlaceholder label="ảnh · toàn cảnh mlf qua các năm" aspectRatio="auto" src="/assets/vemlf.webp" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", maxWidth: "60ch", margin: "0 auto 3rem" }}>
          mlf là một khoảng dừng dịu dàng giữa những lao xao, một không gian để mình được hàm dưỡng lại chính mình.
        </p>
        <div style={{ textAlign: "center", maxWidth: "32ch", margin: "0 auto" }}>
          {poemLines.map((line) => (
            <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 2.1, color: "var(--color-ink)", margin: 0 }}>
              {line}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "2rem", textAlign: "center", display: "flex", justifyContent: "center" }}>
        <div style={{ color: "#000000", opacity: 1 }}>
          <Motif name="mam-la" size={90} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5.5rem", maxWidth: "60ch" }}>
        <p style={proseP}>
          chúng tôi tin rằng, có một cách sống giản dị mà không sơ sài, yên mà không buông xuôi, ở giữa đời mà không lạc mất mình. Một cách sống mà mỗi bước chân đều là trở về, mỗi việc làm đều là một nghi lễ nhỏ để gần hơn với chính mình.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>chúng tôi gọi mộc little farm là một nông trại nhỏ, nơi mọi thứ nảy mầm.</p>
      </Reveal>

      {/* HÀNH TRÌNH */}
      <div className="wrap" style={{ marginBottom: "1.25rem" }}>
        <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-ink)" }}>
          hành trình — mlf đã đi qua
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "6rem" }}>
        <div style={{ position: "relative", maxWidth: "640px" }}>
          <div style={{ position: "absolute", left: "1rem", top: "0.7rem", bottom: "0.7rem", width: "1px", background: "var(--color-mist)" }} />

          {milestones.map((m, i) => {
            const isUpcoming = !m.desc;
            return (
              <Reveal key={m.year} style={{ display: "flex", gap: "1.7rem", padding: i === 0 ? "0 0 3rem" : "3rem 0", opacity: isUpcoming ? 0.6 : 1 }}>
                <div style={{ position: "relative", flexShrink: 0, width: "2rem", display: "flex", justifyContent: "center", paddingTop: "0.5rem" }}>
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: isUpcoming ? "var(--color-paper)" : "var(--color-cham-dem)",
                      border: isUpcoming ? "1.5px solid var(--color-cham-dem)" : "none",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "2.2rem", lineHeight: 1, color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>{m.year}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "0.65rem" }}>{m.title}</span>
                  {m.desc ? (
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: 0, maxWidth: "52ch" }}>{m.desc}</p>
                  ) : null}
                  {m.tag ? (
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "0.3rem",
                        padding: "0.22rem 0.6rem",
                        border: "1px solid var(--color-cham-dem)",
                        borderRadius: "999px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.58rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-cham-dem)",
                      }}
                    >
                      {m.tag}
                    </span>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div style={{ padding: "3rem 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "140px", height: "140px" }}>
          <Image src="/assets/home_ghe.webp" alt="home_ghe" fill sizes="140px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      {/* CẤU TRÚC */}
      <div className="wrap" style={{ marginBottom: "1.25rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>cấu trúc — vì sao có nhiều nhánh?</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "60ch" }}>
        <p style={proseP}>mlf có một gốc — gọi là ở-yên: một cách sống hiện diện, thong dong, thấy rõ. Và có nhiều cách khác nhau để chạm vào gốc đó, tùy vào nơi bạn đang đứng trong đời sống mình.</p>
        <p style={proseP}>
          Trước khi đi vào bất cứ nhánh nào - có{" "}
          <Link href={routes.congDongOYen} style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)" }}>
            cộng đồng ở-yên
          </Link>
          , nơi bạn có thể ở cùng những người cũng đang sống chậm giữa đời thường, qua những bài viết, những chia sẻ tích lũy qua năm tháng.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>Từ đó, mlf rẽ theo 03 hướng:</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: "2.4rem",
            padding: "0 1.3rem",
            borderRadius: "999px",
            border: "1px solid var(--color-mist)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--color-cham-dem)",
            whiteSpace: "nowrap",
          }}
        >
          gốc: ở-yên
        </span>
        <div style={{ width: "1px", height: "2.4rem", background: "var(--color-cham-dem)", margin: "0 auto" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "5.5rem" }}>
        <div style={{ position: "relative", maxWidth: "640px" }}>
          <div style={{ position: "absolute", left: "1.35rem", top: "1rem", bottom: "1rem", width: "1px", background: "var(--color-mist)" }} />

          {branches.map((b) => (
          <Reveal key={b.num} style={{ display: "flex", gap: "1.6rem", marginBottom: "4rem" }} className="mlf-branch-block">
            <div style={{ position: "relative", flexShrink: 0, width: "2.7rem", display: "flex", justifyContent: "center", paddingTop: "0.3rem" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.7rem",
                  height: "2.7rem",
                  borderRadius: "50%",
                  background: "var(--color-paper)",
                  border: "1px solid var(--color-cham-dem)",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "1.1rem",
                  color: "var(--color-cham-dem)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {b.num}
              </span>
            </div>
            <div style={{ flex: 1, paddingTop: "0.35rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ink)", marginBottom: "0.9rem" }}>{b.name}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem", maxWidth: "56ch" }}>{b.lead}</p>
            {b.programs.map((p) => (
              <div key={p.name}>
                <Link href={p.href} className="mlf-prog-row">
                  <span style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                    <span className="nm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.05rem", color: "var(--color-ink)" }}>
                      {p.name}
                    </span>
                    {p.place ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-stone)" }}>{p.place}</span> : null}
                    <span className="ar" style={{ color: "var(--color-cham)", fontSize: "0.85rem" }}>
                      →
                    </span>
                  </span>
                  <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", maxWidth: "52ch" }}>{p.desc}</span>
                </Link>
                {p.subs ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", margin: "0.75rem 0 1.25rem 0.2rem" }}>
                    {p.subs.map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.03em", color: "var(--color-ink)" }}>
                        — {s}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            </div>
          </Reveal>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "2.4rem", textAlign: "center" }}>
        <div style={{ width: "1px", height: "2.4rem", background: "var(--color-cham-dem)", margin: "0 auto" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "6rem", maxWidth: "60ch" }}>
        <div style={{ border: "1px solid var(--color-mist)", borderRadius: "1.2rem", padding: "2.4rem 2.2rem" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-stone)", display: "block" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>một gốc, ba cách trở về</span>
          </div>
          <p style={proseP}>
            Có người chỉ cần đọc vài dòng trong cộng đồng ở-yên. Có người cần dừng lại 5 ngày ở Măng Đen. Có người cần một chuyến đi xa để thấy lại mình. Có người chỉ cần ở lại với cơ thể mình 60 phút mỗi sáng.
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
            Không có một con đường nào là duy nhất. Chúng tôi giữ những cửa khác nhau - dừng, đi, ở lại - để khi bạn cần, sẽ có một cửa vừa với bạn.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { routes } from "@/lib/nav";
import { poemLines, milestones, branches } from "@/data/veMlf";

export const metadata: Metadata = {
  title: "về mlf",
  description: "mộc little farm — một hành trình, một cấu trúc.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.95rem",
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
        <div style={{ aspectRatio: "16/8", minHeight: 280, maxHeight: 460 }}>
          <ImagePlaceholder label="ảnh · toàn cảnh mlf qua các năm" aspectRatio="16/8" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", maxWidth: "60ch", margin: "0 auto 3rem" }}>
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

      <div className="wrap" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={42} />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5.5rem", maxWidth: "60ch" }}>
        <p style={proseP}>
          chúng tôi tin rằng, có một cách sống giản dị mà không sơ sài, yên mà không buông xuôi, ở giữa đời mà không lạc mất mình. Một cách sống mà mỗi bước chân đều là trở về, mỗi việc làm đều là một nghi lễ nhỏ — để gần hơn với chính mình.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>chúng tôi gọi mộc little farm là một nông trại nhỏ, nơi mọi thứ nảy mầm.</p>
      </Reveal>

      {/* HÀNH TRÌNH */}
      <div className="wrap" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Motif name="mam-la" size={35} />
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          hành trình — mlf đã đi qua
        </span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "6rem" }}>
        {milestones.map((m) => (
          <div key={m.year} className={`mlf-tl-row${m.desc ? "" : " upcoming"}`}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "2.4rem", lineHeight: 1, color: "var(--color-stone-alt)" }}>{m.year}</span>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 700, color: "var(--color-ink)", marginBottom: "0.65rem" }}>{m.title}</span>
              {m.desc ? (
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: 0, maxWidth: "52ch" }}>{m.desc}</p>
              ) : null}
              {m.tag ? (
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)" }}>{m.tag}</span>
              ) : null}
            </div>
          </div>
        ))}
      </RevealStagger>

      {/* CẤU TRÚC */}
      <div className="wrap" style={{ marginBottom: "1.25rem" }}>
        <span className="eyebrow">cấu trúc — vì sao có nhiều nhánh?</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "60ch" }}>
        <p style={proseP}>mlf có một gốc — gọi là ở-yên: một cách sống hiện diện, thong dong, thấy rõ. Và có nhiều cách khác nhau để chạm vào gốc đó, tùy vào nơi bạn đang đứng trong đời sống mình.</p>
        <p style={proseP}>
          Trước khi đi vào bất cứ nhánh nào — có{" "}
          <Link className="mono-link" href={routes.congDongOYen} style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)" }}>
            cộng đồng ở-yên
          </Link>
          , nơi bạn có thể ở cùng những người cũng đang sống chậm giữa đời thường, qua những bài viết, những chia sẻ tích lũy qua năm tháng.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>Từ đó, mlf rẽ theo 03 hướng:</p>
      </Reveal>

      <RevealStagger className="wrap" style={{ marginBottom: "5.5rem" }}>
        {branches.map((b) => (
          <div key={b.num} className="mlf-branch-block">
            <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem", marginBottom: "1rem" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3rem, 8vw, 4.5rem)", lineHeight: 0.8, color: "var(--color-stone-alt)" }}>{b.num}</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ink)", paddingBottom: "0.4rem" }}>{b.name}</span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem", maxWidth: "56ch" }}>{b.lead}</p>
            {b.programs.map((p) => (
              <div key={p.name}>
                <Link href={p.href} className="mlf-prog-row go">
                  <span style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.2rem" }}>
                    <span className="nm" style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.95rem", color: "var(--color-ink)" }}>
                      {p.name}
                    </span>
                    {p.place ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-stone)" }}>{p.place}</span> : null}
                    <span className="ar" style={{ color: "var(--color-cham)", fontSize: "0.85rem" }}>
                      →
                    </span>
                  </span>
                  <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-stone-alt)", maxWidth: "52ch" }}>{p.desc}</span>
                </Link>
                {p.subs ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", margin: "0.75rem 0 1.25rem 0.2rem" }}>
                    {p.subs.map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.03em", color: "var(--color-stone-alt)" }}>
                        — {s}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={42} />
      </div>

      <div className="wrap" style={{ marginBottom: "6rem", maxWidth: "60ch" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1.25rem" }}>
          <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-stone)", display: "block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>một gốc, ba cách trở về //</span>
        </div>
        <p style={proseP}>
          Có người chỉ cần đọc vài dòng trong cộng đồng ở-yên. Có người cần dừng lại 5 ngày ở Măng Đen. Có người cần một chuyến đi xa để thấy lại mình. Có người chỉ cần ở lại với cơ thể mình 60 phút mỗi sáng.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
          Không có một con đường nào là duy nhất. Chúng tôi giữ những cửa khác nhau — dừng, đi, ở lại — để khi bạn cần, sẽ có một cửa vừa với bạn.
        </p>
      </div>

      <Footer />
    </>
  );
}

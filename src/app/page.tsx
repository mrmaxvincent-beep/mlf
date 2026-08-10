import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { ArrowLink } from "@/components/Button";
import { Testimonials } from "@/components/Testimonials";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { HeroClock } from "@/components/HeroClock";
import { LineArt } from "@/components/LineArt";
import { routes } from "@/lib/nav";
import {
  entries,
  fallbackUpcoming,
  veMlfIntro,
  veMlfVanHanh,
  veOYenIntroA,
  veMlfExits,
  testimonials,
  vibeImages,
} from "@/data/homepage";

export const metadata: Metadata = {
  title: "mộc little farm — slow stay & retreat ở-yên, Măng Đen",
  description:
    "Retreat farm giữa Măng Đen, theo triết lý ở-yên — cho ai muốn một chuyến đi chậm (slow stay), không lịch trình dày. Hơn 80 chuyến đã diễn ra.",
};

export default function HomePage() {
  return (
    <>
      <Header overlay />

      {/* HERO */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 460,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // shows while the video loads, and stays as the fallback if it can't play
          background:
            "radial-gradient(circle at 30% 20%, var(--color-cham) 0%, var(--color-cham-dem) 60%)",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/video/home-hero.mp4" type="video/mp4" />
        </video>
        <div
          className="wrap hero-bottom"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "3.5rem",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <span
              className="hero-logo"
              style={{
                position: "relative",
                width: 152,
                height: 190,
                display: "block",
                margin: "-1.6rem 0 -0.9rem -1.2rem",
              }}
            >
              <Image
                src="/assets/logo-moc.png"
                alt="mộc little farm"
                fill
                sizes="152px"
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "left",
                  filter:
                    "brightness(0) saturate(100%) invert(94%) sepia(6%) saturate(383%) hue-rotate(357deg) brightness(101%) contrast(94%)",
                  opacity: 0.95,
                }}
              />
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.735rem", lineHeight: 1.4, color: "var(--color-paper-dem)", margin: "0 0 0.2rem", maxWidth: "22ch" }}>
              một không gian tinh thần dựa trên triết lý ở yên.
            </p>
            <span style={{ fontFamily: "var(--font-sans)", color: "var(--color-paper-dem)", fontSize: "0.56rem", lineHeight: 1.4 }}>
              nơi mọi thứ nảy mầm
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "2.4rem", marginBottom: "1.4rem" }}>
              <span style={{ color: "var(--color-paper-dem)", position: "relative", paddingBottom: "0.5rem" }}>
                vietnamese
                <span style={{ position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", width: 3, height: 3, borderRadius: "50%", background: "var(--color-paper-dem)", display: "block" }} />
              </span>
              <span style={{ color: "var(--color-cham-suong)" }}>|</span>
              <span style={{ color: "var(--color-paper-dem)" }}>english</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-paper-dem)", display: "block", marginBottom: "0.4rem" }}>
              Măng Đen · Kon Tum
            </span>
            <HeroClock />
          </div>
        </div>

        <div className="scroll-hint-wrap" style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem", color: "var(--color-paper-dem)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>cuộn xuống</span>
          <span className="scroll-hint-line" />
        </div>

        {/* demo: organic wave divider — swap this path if a different curve is wanted */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ width: "100%", height: 40, display: "block" }}>
            <path d="M0,22 C360,40 1080,4 1440,26 L1440,40 L0,40 Z" fill="var(--color-paper)" />
          </svg>
        </div>
      </div>

      <div style={{ padding: "2.2rem 0" }} />

      {/* 06 cửa ngõ */}
      <div className="wrap" style={{ paddingTop: "1rem" }}>
        <Reveal className="section-number">
          <span className="num">06</span>
          <span className="label">cửa ngõ</span>
        </Reveal>
        {entries.map((e) => (
          <Link key={e.href} className="go" href={e.href} style={{ display: "flex", alignItems: "center", gap: "1.1rem", padding: "1.1rem 0" }}>
            <span
              aria-hidden
              style={{
                width: "4.4rem",
                height: "4.4rem",
                flex: "none",
                filter: "brightness(0)",
                opacity: 0.8,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(/assets/${e.icon})`,
              }}
            />
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--color-stone-alt)", display: "block", marginBottom: "0.2rem" }}>
                {e.quote}
              </span>
              <span style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", fontSize: "0.85rem", flexWrap: "wrap" }}>
                <span className="nm" style={{ fontWeight: 500, color: "var(--color-ink)" }}>
                  {e.name}
                </span>
              </span>
            </span>
          </Link>
        ))}
      </div>

      <div style={{ padding: "2rem 0" }} />
      <div style={{ padding: "1.5rem 0", textAlign: "center" }}>
        <Motif name="dom-muc" size={30} />
      </div>
      <div style={{ padding: "0.5rem 0 2rem" }} />

      {/* sắp diễn ra */}
      <div>
        <div className="wrap" style={{ paddingTop: "2.5rem" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham)", display: "block", marginBottom: "1.5rem" }}>
            sắp diễn ra //
          </span>
        </div>
        <UpcomingEvents fallback={fallbackUpcoming} />
      </div>

      <div style={{ padding: "2.2rem 0" }} />

      <div style={{ aspectRatio: "21/9", minHeight: 340, position: "relative" }}>
        <Image src="/assets/split-ve-mlf.webp" alt="nhà mộc, măng đen" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>

      <div style={{ padding: "2.2rem 0" }} />

      {/* về mlf */}
      <div className="wrap" style={{ padding: "2.5rem 1.5rem 3rem", position: "relative" }}>
        {/* demo: placeholder line-art, diagonal like the reference (top-left / bottom-right) — swap for real illustration assets later */}
        <LineArt flip style={{ top: "1rem", left: "-100px" }} />
        <LineArt style={{ bottom: "2rem", right: "-100px" }} />
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <Reveal className="section-number">
            <span className="num">01</span>
            <span className="label">về mlf</span>
          </Reveal>
          <Prose paragraphs={veMlfIntro} />
        </div>

        <div style={{ margin: "2.5rem 0 3rem" }}>
          <div className="wrap" style={{ marginBottom: "1.5rem", paddingLeft: 0, paddingRight: 0 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
              một ngày ở-yên //
            </span>
          </div>
          <RevealStagger
            className="vibe-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--color-mist)", maxWidth: 1100, margin: "0 auto" }}
          >
            {vibeImages.map((v, i) => (
              <div key={v.id} style={{ background: "var(--color-paper)", padding: "0.9rem 0.9rem 1.1rem" }}>
                <div style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden", background: "var(--color-photo-placeholder)", position: "relative" }}>
                  {v.type === "video" ? (
                    <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                      <source src="/video/home-hero.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={`/assets/${v.src}`} alt={v.label} fill sizes="(max-width: 600px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                  )}
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--color-stone)", display: "block", marginTop: "0.7rem" }}>
                  ( {String(i + 1).padStart(2, "0")} )
                </span>
              </div>
            ))}
          </RevealStagger>
        </div>
      </div>

      <div style={{ padding: "1.5rem 0" }} />

      <div className="wrap" style={{ padding: "0 1.5rem" }}>
        <div style={{ position: "relative", overflow: "hidden", padding: "4.5rem 2.5rem 6.68rem", textAlign: "center" }}>
          <p style={{ maxWidth: "60ch", margin: "0 auto", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", lineHeight: 1.5, color: "var(--color-ink)", fontWeight: 300 }}>
            /&nbsp;&nbsp;Chúng tôi tin rằng có một cách sống, giản dị mà không sơ sài, yên mà không buông xuôi, ở giữa đời mà không lạc mất mình.&nbsp;&nbsp;/
          </p>
        </div>

        <div className="side-grid" style={{ margin: "2rem 0", display: "grid", gridTemplateColumns: "5fr 7fr", gap: "2rem", alignItems: "end" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", letterSpacing: "0.04em", lineHeight: 1.7 }}>
            ở đây luôn có đủ thời gian để nấu ba bữa một ngày · trên bàn ăn bao giờ cũng có vài bông hoa nhỏ hái ngoài vườn
          </span>
          <div style={{ position: "relative", width: "100%", aspectRatio: "4/5" }}>
            <Image src="/assets/photo-ban-an.jpg" alt="bàn ăn nhà mộc" fill sizes="(max-width: 600px) 100vw, 420px" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="side-grid" style={{ margin: "3.5rem 0", display: "grid", gridTemplateColumns: "7fr 5fr", gap: "2rem", alignItems: "start" }}>
          <div style={{ fontSize: "0.88rem", lineHeight: 1.85, paddingTop: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", letterSpacing: "0.04em", display: "block", lineHeight: 1.7 }}>
              &ldquo;Vũ nhấc ấm, chuyền từ tay nọ sang tay kia, rót nước vào bình trà. Nước chảy mềm, thành một dòng, không xoắn, không xòe. Như thể mỗi giọt nước, đều biết chỗ của mình.&rdquo;
              <br />
              <span style={{ fontStyle: "normal" }}>có những buổi trà kéo tới khuya - chỉ vì hiếm khi nào người ta thật tâm ngồi xuống cùng nhau.</span>
            </span>
          </div>
          <div className="reorder-first-desktop" style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
            <Image src="/assets/photo-rot-tra.jpg" alt="rót trà" fill sizes="(max-width: 600px) 100vw, 420px" style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className="side-grid" style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "4fr 7fr", gap: "2rem", alignItems: "center" }}>
          <div style={{ fontSize: "0.88rem", lineHeight: 1.85 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", letterSpacing: "0.04em", lineHeight: 1.7, margin: "0 0 1rem" }}>
              một cô gái từng lên đây hai lần, nhắn lúc tối muộn: &ldquo;nhớ nhà mình ghê gớm. em chuẩn bị lên đây.&rdquo;
            </p>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", letterSpacing: "0.04em", display: "block", lineHeight: 1.7 }}>
              chúng tôi không biết từ lúc nào, người ta gọi nơi này là nhà mình.
            </span>
          </div>
          <div style={{ position: "relative", width: "100%", aspectRatio: "5/6" }}>
            <Image src="/assets/photo-nha-moc.jpg" alt="nhà mộc · măng đen" fill sizes="(max-width: 600px) 100vw, 420px" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>

      <div style={{ padding: "1.5rem 0" }} />
      <div className="wrap" style={{ padding: "0 1.5rem" }}>
        <div style={{ marginTop: "1.5rem" }}>
          <Prose paragraphs={veMlfVanHanh} leadDash />
        </div>
      </div>

      <div style={{ padding: "1.5rem 0" }} />
      <div className="wrap" style={{ padding: "0 1.5rem 3rem" }}>
        <div style={{ marginTop: "1.5rem", border: "1px solid var(--color-mist)", padding: "2.5rem 2rem" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham)", display: "block", marginBottom: "2.5rem" }}>
            những người đã bước vào //
          </span>
          <Testimonials items={testimonials} />
        </div>

        <div className="wrap" style={{ marginTop: "2.5rem", marginBottom: "1.5rem", paddingLeft: 0, paddingRight: 0 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
            dạo bước cùng mlf //
          </span>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          {veMlfExits.map((x) => (
            <Link key={x.href} className="go" href={x.href} style={{ display: "block", padding: "0.6rem 0", backgroundImage: "linear-gradient(var(--color-mist), var(--color-mist))", backgroundRepeat: "no-repeat", backgroundSize: "320px 1px", backgroundPosition: "bottom left" }}>
              <span style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "0.1rem", flexWrap: "wrap" }}>
                <span style={{ color: "var(--color-stone)" }}>–</span>
                <span className="nm" style={{ fontWeight: 500, fontSize: "0.88rem", color: "var(--color-ink)" }}>
                  {x.name}
                </span>
                <span className="ar" style={{ color: "var(--color-cham)", fontSize: "0.85rem" }}>
                  →
                </span>
              </span>
              <span style={{ fontSize: "0.78rem", color: "var(--color-ink)", lineHeight: 1.55, display: "block" }}>{x.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ aspectRatio: "21/9", minHeight: 340, position: "relative" }}>
        <Image src="/assets/split-ve-oyen.webp" alt="khoảnh khắc ở-yên" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>

      <Reveal
        style={{ padding: "2.5rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.75rem" }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)" }}>chậm lại</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)" }}>để nghe</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)" }}>chính mình</span>
      </Reveal>

      <div style={{ padding: "4.5rem 0" }}>
        <div className="wrap" style={{ maxWidth: "34rem", marginLeft: "auto", marginRight: "auto" }}>
          {[
            '"tôi không biết gọi mlf là gì cho đúng.',
            "không phải homestay, không phải trung tâm thiền. chỉ biết rằng — sau khi đọc qua từng trang, từng lời người đã đến — có điều gì đó khiến tôi dừng lại.",
            "ở đây, cách họ nấu bữa cơm, ngồi uống trà, và dẫn dắt mỗi người trong từng chuyến đi là cách họ đang sống, cách họ đang tu dưỡng.",
            'và họ cũng đang cố trả lời một câu hỏi rất khó: làm thế nào để sống thong dong, giữa một thế giới đang chạy rất nhanh? câu trả lời này khó lòng thấy được nếu ta xem đó là một sản phẩm. đó có thể là — không gian, thực hành, chữ nghĩa, trà, cộng đồng, những chuyến đi... tất cả đều từ cùng một gốc rễ."',
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: i === 3 ? 0 : "0 0 1.2rem", textAlign: "justify" }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div style={{ padding: "2rem 0" }} />

      {/* về ở-yên */}
      <div className="wrap" style={{ padding: "3rem 1.5rem", position: "relative" }}>
        {/* demo: placeholder line-art, mirrored to the left for asymmetry — swap for real illustration asset later */}
        <LineArt flip style={{ top: "0.5rem", left: "-100px" }} />
        <Reveal className="section-number">
          <span className="num">02</span>
          <span className="label">về ở-yên</span>
        </Reveal>
        <Prose paragraphs={veOYenIntroA} />

        <div style={{ marginTop: "2rem" }}>
          <ArrowLink href={routes.thuVien} eyebrow="tự đọc & ngẫm" title="thư viện ở-yên" />
        </div>
        <div>
          <ArrowLink href={routes.motNgayOYen} eyebrow="thử ở-yên một ngày" title="một ngày ở-yên" />
          <ArrowLink href={routes.congDongOYen} eyebrow="cùng nhau ở-yên" title="cộng đồng ở-yên" />
        </div>
      </div>

      <div style={{ padding: "2.2rem 0" }} />

      <div className="wrap" style={{ padding: "4rem 1.5rem", position: "relative", textAlign: "center" }}>
        <span className="vertical-label">khoảng dừng giữa hai suy nghĩ</span>
        <span className="mobile-label" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)", textAlign: "center", marginBottom: "1.5rem" }}>
          khoảng dừng giữa hai suy nghĩ
        </span>
        <div style={{ maxWidth: 420, margin: "0 auto" }}>
          <div style={{ position: "relative", aspectRatio: "5/4", overflow: "hidden" }}>
            <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
              <source src="/video/home-hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.5, color: "var(--color-ink)", display: "block" }}>
            chúng tôi tạo ra những khoảng dừng —<br />để nước được lắng.
          </span>
        </div>
      </div>

      <div style={{ padding: "2.5rem 0 1rem" }} />

      <Footer />
    </>
  );
}

function Prose({ paragraphs, leadDash = false }: { paragraphs: string[]; leadDash?: boolean }) {
  return (
    <div style={{ fontSize: "0.7em" }}>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.05rem",
            lineHeight: "var(--leading-body)",
            color: "var(--color-ink)",
            maxWidth: "var(--measure-body)",
            margin: "0 0 1.2rem",
          }}
        >
          {leadDash && i === 0 ? "— " : null}
          {p}
        </p>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { Testimonials } from "@/components/Testimonials";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { HeroClock } from "@/components/HeroClock";
import { DropRipple } from "@/components/DropRipple";
import { QuickTour } from "@/components/QuickTour";
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
  bannerImages,
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
                src="/assets/logo-moc.webp"
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
              nơi mọi thứ nảy mầm
            </p>
            <span style={{ fontFamily: "var(--font-sans)", color: "var(--color-paper-dem)", fontSize: "0.56rem", lineHeight: 1.4 }}>
              một không gian tinh thần dựa trên triết lý ở-yên.
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "2.4rem", marginBottom: "1.4rem" }}>
              <span style={{ color: "var(--color-paper-dem)", position: "relative", paddingBottom: "0.5rem" }}>
                vietnamese
                <span style={{ position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", width: 3, height: 3, borderRadius: "50%", background: "var(--color-paper-dem)", display: "block" }} />
              </span>
              <span style={{ color: "var(--color-cham-suong)" }}>|</span>
              <Link href={routes.en} style={{ color: "var(--color-paper-dem)" }}>
                english
              </Link>
            </div>
            <QuickTour />
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-paper-dem)", display: "block", marginBottom: "0.4rem" }}>
              Măng Đen
            </span>
            <HeroClock />
          </div>
        </div>

        <div className="scroll-hint-wrap" style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem", color: "var(--color-paper-dem)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>scroll</span>
          <span className="scroll-hint-line" />
        </div>
      </div>

      <div style={{ padding: "2.2rem 0" }} />

      {/* cửa ngõ + sắp diễn ra — one journey stop */}
      <div>
        <div className="wrap" style={{ paddingTop: "1rem" }}>
          <Reveal className="section-number">
            <span className="label">cửa ngõ</span>
          </Reveal>
        </div>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem 1.25rem", padding: "0.5rem 1.5rem 0" }}>
          {entries.map((e) => (
            <div key={e.href} style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <Link href={e.href} className="link-sweep" aria-label={e.name} style={{ display: "block", position: "relative", width: "5.6rem", height: "5.6rem", flex: "none" }}>
                <span
                  aria-hidden
                  style={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    filter: "brightness(0)",
                    opacity: 0.8,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundImage: `url(/assets/${e.icon})`,
                  }}
                />
              </Link>
              <Link href={e.href} className="link-sweep" style={{ display: "block" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", lineHeight: 1.4, color: "var(--color-stone-alt)", display: "block", marginBottom: "0.3rem" }}>
                  {e.quote}
                </span>
                <span className="nm" style={{ fontWeight: 500, fontSize: "0.82rem", color: "var(--color-ink)", display: "block" }}>
                  {e.name}
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ padding: "1.25rem 0" }} />
        <div style={{ padding: "0.75rem 0", textAlign: "center" }}>
          <Motif name="dom-muc" size={30} />
        </div>
        <div style={{ padding: "0.5rem 0 1rem" }} />

        {/* sắp diễn ra */}
        <div>
          <div className="wrap" style={{ paddingTop: "1.25rem" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ink)", display: "block", marginBottom: "1rem" }}>
              sắp diễn ra
            </span>
          </div>
          <UpcomingEvents fallback={fallbackUpcoming} />
        </div>
      </div>

      <div style={{ padding: "2.2rem 0" }} />

      {/* ảnh banner — 4 ảnh dọc ghép liền */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
        {bannerImages.map((v) => (
          <div key={v.id} style={{ position: "relative", aspectRatio: "3/4" }}>
            {v.type === "video" ? (
              <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                <source src={v.src ? `/assets/${v.src}` : "/video/home-hero.mp4"} type="video/mp4" />
              </video>
            ) : (
              <Image src={`/assets/${v.src}`} alt={v.label} fill sizes="(max-width: 600px) 25vw, 25vw" style={{ objectFit: "cover" }} />
            )}
          </div>
        ))}
      </div>

      <div style={{ padding: "2.2rem 0" }} />

      {/* về mlf — journey stop */}
      <div className="wrap" style={{ padding: "2.5rem 1.5rem 3rem", position: "relative" }}>
        <span className="home-bantra-img home-bantra-desktop" style={{ position: "absolute", bottom: "3rem", right: "-5rem", width: 405, height: 324, display: "block" }}>
          <Image src="/assets/home_bantra1.webp" alt="home_bantra" fill sizes="405px" style={{ objectFit: "contain" }} />
        </span>
        <div style={{ maxWidth: "42rem", margin: "0 auto", position: "relative" }}>
          <Reveal className="section-number">
            <span className="label">về mlf</span>
          </Reveal>
          <Prose paragraphs={veMlfIntro} leadDash />
        </div>
        <div className="home-bantra-mobile" style={{ width: 280, height: 224, margin: "2rem auto 0", display: "none", position: "relative" }}>
          <Image src="/assets/home_bantra1.webp" alt="home_bantra" fill sizes="280px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      <div style={{ padding: "1.5rem 0" }} />

      {/* một ngày ở-yên — journey stop */}
      <div style={{ padding: "1.5rem 0 3rem" }}>
        <div className="wrap" style={{ marginBottom: "1.25rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink)" }}>
            một ngày ở-yên
          </span>
        </div>
        <RevealStagger
          className="vibe-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, maxWidth: 860, margin: "0 auto" }}
        >
          {vibeImages.map((v, i) => (
            <div key={v.id} style={{ background: "transparent", padding: "0.6rem 0.6rem 0.75rem" }}>
              <div style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden", background: "var(--color-photo-placeholder)", position: "relative" }}>
                {v.type === "video" ? (
                  <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
                    <source src={v.src ? `/assets/${v.src}` : "/video/home-hero.mp4"} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={`/assets/${v.src}`} alt={v.label} fill sizes="(max-width: 600px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                )}
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--color-stone)", display: "block", marginTop: "0.4rem" }}>
                ( {String(i + 1).padStart(2, "0")} )
              </span>
            </div>
          ))}
        </RevealStagger>
      </div>

      <div style={{ padding: "1.5rem 0" }} />

      <div className="wrap" style={{ padding: "0 1.5rem" }}>
        <div style={{ padding: "4rem 0 4rem" }}>
          <p style={{ maxWidth: "36rem", marginLeft: "auto", marginRight: "auto", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", lineHeight: 1.5, color: "var(--color-ink)", fontWeight: 300, textAlign: "center" }}>
            Chúng tôi tin rằng có một cách sống, giản dị mà không sơ sài, yên mà không buông xuôi, ở giữa đời mà không lạc mất mình.
          </p>
        </div>

        <div style={{ padding: "2rem 0", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "101px", height: "78px" }}>
            <Image src="/assets/home_la.webp" alt="home_la" fill sizes="101px" style={{ objectFit: "contain" }} />
          </div>
        </div>

        <div style={{ margin: "4rem 0 0 0", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "2rem", gridAutoRows: "auto" }}>
          {/* Row 1 - Column 1: Chữ nhật ngang - Uống trà */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}>
            <div style={{ position: "relative", width: "100%", height: "280px", marginBottom: "1rem", flex: "none" }}>
              <Image src="/assets/home_phatra.webp" alt="rót trà" fill sizes="(max-width: 600px) 100vw, 280px" style={{ objectFit: "cover" }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-ink)", letterSpacing: "0.04em", display: "block", lineHeight: 1.7 }}>
              &ldquo;Vũ nhấc ấm, chuyền từ tay nọ sang tay kia, rót nước vào bình trà. Nước chảy mềm, thành một dòng, không xoắn, không xòe. Như thể mỗi giọt nước, đều biết chỗ của mình.&rdquo;
              <br />
              <span style={{ fontStyle: "normal" }}>có những buổi trà kéo tới khuya - chỉ vì hiếm khi nào người ta thật tâm ngồi xuống cùng nhau.</span>
            </span>
          </div>

          {/* Row 1 - Column 2: Vuông - Bữa ăn */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}>
            <div style={{ position: "relative", width: "100%", height: "280px", marginBottom: "1rem", flex: "none" }}>
              <Image src="/assets/home_anhchieu.webp" alt="bàn ăn nhà mộc" fill sizes="(max-width: 600px) 100vw, 280px" style={{ objectFit: "cover" }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-ink)", letterSpacing: "0.04em", lineHeight: 1.7 }}>
              Trong cái bầu không khí ấy, một buổi chiều nắng vàng ươm rọi xuống khung cửa, trong tiếng nhạc dịu êm, trong sự tĩnh lặng và dịu dàng đó, có ai đó thả mình mà nghe tiếng lòng chảy thành từng giọt.
            </span>
          </div>

          {/* Row 2 - Column 1: Vuông - Cô gái */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}>
            <div style={{ position: "relative", width: "100%", height: "280px", marginBottom: "1rem", flex: "none" }}>
              <Image src="/assets/home_cogai.webp" alt="nhà mộc · măng đen" fill sizes="(max-width: 600px) 100vw, 280px" style={{ objectFit: "cover" }} />
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-ink)", letterSpacing: "0.04em", lineHeight: 1.7, margin: 0 }}>
              một cô gái từng lên đây hai lần, nhắn lúc tối muộn: &ldquo;nhớ nhà mình ghê gớm. em chuẩn bị lên đây.&rdquo;
              <br />
              <span style={{ display: "block" }}>chúng tôi không biết từ lúc nào, người ta gọi nơi này là nhà mình.</span>
            </p>
          </div>

          {/* Row 2 - Column 2: Chữ nhật ngang - Vibes */}
          <div style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}>
            <div style={{ position: "relative", width: "100%", height: "280px", marginBottom: "1rem", flex: "none" }}>
              <Image src="/assets/home_buaan.webp" alt="hiên nhà" fill sizes="(max-width: 600px) 100vw, 280px" style={{ objectFit: "cover" }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-ink)", letterSpacing: "0.04em", lineHeight: 1.7 }}>
              ở đây luôn có đủ thời gian để nấu ba bữa một ngày · trên bàn ăn bao giờ cũng có vài bông hoa nhỏ hái ngoài vườn.
            </span>
          </div>
        </div>
      </div>

      <div style={{ padding: "1.5rem 0" }} />
      <div className="wrap" style={{ padding: "0 1.5rem" }}>
        <div style={{ marginTop: "1.5rem" }}>
          <Prose paragraphs={veMlfVanHanh} />
        </div>
      </div>

      <div style={{ padding: "1.5rem 0" }} />
      <div className="wrap" style={{ padding: "0 1.5rem 3rem" }}>
        <div style={{ marginTop: "1.5rem", borderTop: "1px solid var(--color-mist)", paddingTop: "2.5rem" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ink)", display: "block", marginBottom: "2.5rem" }}>
            những người đã bước vào
          </span>
          <Testimonials items={testimonials} showDots={false} />
        </div>

        <div style={{ marginTop: "2.5rem", marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
          <span style={{ position: "relative", width: 120, height: 140, display: "block" }}>
            <Image src="/assets/motif-dep.webp" alt="đôi dép" fill sizes="120px" style={{ objectFit: "contain" }} />
          </span>
        </div>

        <div className="wrap" style={{ marginBottom: "1.5rem", paddingLeft: 0, paddingRight: 0 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink)", display: "flex", justifyContent: "center" }}>
            dạo bước cùng mlf
          </span>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          {veMlfExits.map((x) => (
            <div key={x.href} style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start", padding: "0.7rem 0" }}>
              <Link href={x.href} className="link-sweep" aria-label={x.name} style={{ display: "block" }}>
                <DotIcon />
              </Link>
              <Link href={x.href} className="link-sweep" style={{ display: "block" }}>
                <span className="nm" style={{ fontWeight: 500, fontStyle: "italic", fontSize: "0.88rem", color: "var(--color-ink)", display: "block", marginBottom: "0.1rem" }}>
                  {x.name}
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--color-ink)", lineHeight: 1.55, display: "block" }}>{x.desc}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div style={{ aspectRatio: "21/9", minHeight: 340, position: "relative" }}>
        <Image src="/assets/home_split.webp" alt="khoảnh khắc ở-yên" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>

      <Reveal
        style={{ padding: "2.5rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.75rem" }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)" }}>chậm lại</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)" }}>để nghe</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)" }}>chính mình</span>
      </Reveal>

      <div style={{ padding: "4.5rem 1.5rem", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "22.5rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
              "tôi không biết gọi mlf là gì cho đúng.
            </p>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
              ở đây, cách họ nấu bữa cơm, ngồi uống trà, và dẫn dắt mỗi người trong từng chuyến đi là cách họ đang sống, cách họ đang tu dưỡng.
            </p>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
              không phải homestay, không phải trung tâm thiền. chỉ biết rằng có điều gì đó khiến tôi dừng lại, sau khi đọc qua từng trang, từng lời người đã đến.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
              và họ cũng đang cố trả lời một câu hỏi rất khó: làm thế nào để sống thong dong, giữa một thế giới đang chạy rất nhanh? câu trả lời này khó lòng thấy được nếu ta xem đó là một sản phẩm. đó có thể là: không gian, thực hành, chữ nghĩa, trà, cộng đồng, những chuyến đi... tất cả đều từ cùng một gốc rễ."
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "2rem 0" }} />

      <div className="wrap" style={{ padding: "0 1.5rem" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: 180, aspectRatio: "5/4", margin: "0 auto" }}>
          <Image src="/assets/home_meo.webp" alt="home_meo" fill sizes="(max-width: 180px) 100vw, 180px" style={{ objectFit: "cover" }} />
        </div>
      </div>

      <div style={{ padding: "2rem 0" }} />

      {/* về ở-yên */}
      <div className="wrap" style={{ padding: "3rem 1.5rem", position: "relative" }}>
        <Reveal className="section-number">
          <span className="label">về ở-yên</span>
        </Reveal>
        <Prose paragraphs={veOYenIntroA} leadDash />

        <div style={{ marginTop: "2rem" }}>
          <IconLink href={routes.thuVien} eyebrow="tự đọc & ngẫm" title="thư viện ở-yên" />
          <IconLink href={routes.podcastOYen} eyebrow="nghe & cảm" title="podcast ở-yên" />
          <IconLink href={routes.sachOYen} eyebrow="chiêm nghiệm" title="sách ở-yên" />
        </div>
        <div>
          <IconLink href={routes.motNgayOYen} eyebrow="thử ở-yên một ngày" title="một ngày ở-yên" />
          <IconLink href={routes.congDongOYen} eyebrow="cùng nhau ở-yên" title="cộng đồng ở-yên" />
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
              <source src="/assets/home_bongnang.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0 0" }}>
          <DropRipple />
        </div>
        <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
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
          {leadDash && i === 0 ? "⸺ " : null}
          {p}
        </p>
      ))}
    </div>
  );
}

/** demo: replaces the arrow + underline divider with a small ring-and-dot mark per row — swap or refine once approved */
function DotIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden style={{ flex: "none", marginTop: "0.35rem", opacity: 0.6 }}>
      <circle cx="7" cy="7" r="6" stroke="var(--color-ink)" strokeWidth="1" />
      <circle cx="7" cy="7" r="1.4" fill="var(--color-ink)" />
    </svg>
  );
}

function IconLink({ href, eyebrow, title, description }: { href: string; eyebrow?: string; title: string; description?: string }) {
  return (
    <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start", padding: "0.7rem 0" }}>
      <Link href={href} className="link-sweep" aria-label={title} style={{ display: "block" }}>
        <DotIcon />
      </Link>
      <Link href={href} className="link-sweep" style={{ display: "block" }}>
        {eyebrow ? (
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--color-stone-alt)", display: "block", marginBottom: "0.2rem" }}>
            {eyebrow}
          </span>
        ) : null}
        <span className="nm" style={{ fontWeight: 500, fontSize: "0.85rem", color: "var(--color-ink)", display: "block" }}>
          {title}
        </span>
      </Link>
    </div>
  );
}

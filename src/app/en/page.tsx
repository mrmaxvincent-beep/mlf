import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "mộc little farm — a slow living retreat, Măng Đen",
  description:
    "mộc little farm is a small retreat farm rooted in ở-yên — a way of living that is present, unhurried, clear-eyed. Slow stays, journeys, and online practices from the Central Highlands of Vietnam.",
  keywords: "mlf, mộc little farm, retreat, Măng Đen, slow living, Vietnam retreat, English retreat",
  openGraph: {
    title: "mộc little farm — a slow living retreat, Măng Đen",
    description: "A small retreat farm rooted in ở-yên — a way of living that is present, unhurried, clear-eyed.",
    type: "website",
    url: "https://moclittlefarm.com/en",
  },
  alternates: {
    canonical: "https://moclittlefarm.com/en",
  },
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.3rem",
};

const services = [
  {
    href: routes.ngayHien,
    name: "ngày-hiền",
    tagline: "slow stays · Măng Đen",
    desc: "Retreats and slow stays tucked into the pine forest of Măng Đen — stay+talk, retreat ở-yên, retreat hàm-dưỡng, and retreat an-vui for guests 50+.",
  },
  {
    href: routes.tuanDu,
    name: "tuần-du",
    tagline: "mystery journeys",
    desc: "Slow journeys across Vietnam's land, history and culture — used as material to look inward, not to sightsee.",
  },
  {
    href: routes.beStill,
    name: "be-still",
    tagline: "online · sitting with the mind",
    desc: "Online programs to sit with your own mind — khai tâm, writing from the heart, clari-tea conversations, the nhất-hiện practice community, and phía sáng, a companion for end-of-life conversations.",
  },
  {
    href: routes.teaMind,
    name: "tea.mind",
    tagline: "everyday beauty",
    desc: "Staying with the quiet beauty of what your hands touch each day — tea, ceramics, painting.",
  },
  {
    href: routes.thinhKhong,
    name: "thinh.không",
    tagline: "online yoga",
    desc: "Online yoga to come home to your own body — breath as the center, posture only as the vehicle.",
  },
  {
    href: routes.giua,
    name: "giữa · middle",
    tagline: "opening in Huế, 2027",
    desc: "A small café and retreat corner in the middle of daily life — where stillness meets everyday culture.",
  },
  {
    href: routes.congDongOYen,
    name: "cộng đồng ở-yên",
    tagline: "essays & reflections",
    desc: "Writing and reflections from people practicing a slower, more present life in the middle of the ordinary.",
  },
];

export default function EnglishPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="english" />
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>in english</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.2rem" }}>
          mộc little farm
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 0.8rem" }}>
          a small retreat farm rooted in <em style={{ fontStyle: "italic" }}>ở-yên</em> — a way of living that is present, unhurried, clear-eyed.
        </p>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>Măng Đen, Quang Ngai · Vietnam</span>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="photo · ngày-hiền, Măng Đen" aspectRatio="16/12" src="/assets/ngayhien_daomotvong01.webp" alt="mộc little farm" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="photo · tuần-du" aspectRatio="16/12" src="/assets/tuandu01.webp" alt="mộc little farm" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="photo · thinh-không" aspectRatio="16/12" src="/assets/thinhkhong02.webp" alt="mộc little farm" style={{ width: "100%", height: "auto" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "5rem", marginBottom: "5rem", maxWidth: "60ch" }}>
        <p style={proseP}>
          mộc little farm began in 2016 as a small home bakery in Saigon. It grew into a quiet retreat café tucked into the city, and in 2023 moved to the highlands of Măng Đen — becoming a retreat farm surrounded by pine forest, mist, and the slow rhythm of mountain weather.
        </p>
        <p style={proseP}>
          We believe there is a way of living that is simple without being careless, still without giving up, present in the middle of life without losing yourself. We call mộc little farm a small farm — a place where everything is left to grow.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
          Everything here grows from one root — ở-yên — and branches out in different directions, depending on where you are standing in your own life.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={34} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>what we offer</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5.5rem", maxWidth: "62ch" }}>
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="link-row"
            style={{ display: "block", padding: "1.5rem 0", borderBottom: "1px solid var(--color-mist)" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
              <span className="link-sweep" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.4rem", color: "var(--color-ink)" }}>{s.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>{s.tagline}</span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0, maxWidth: "56ch" }}>{s.desc}</p>
          </Link>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>for english speakers</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          For guests who don&rsquo;t read Vietnamese, mlf also runs dedicated retreat programs — guided, hosted, and explained in English from arrival to departure.
        </p>
        <p style={{ ...proseP, margin: 0 }}>Please reach out to us to learn more — dates, group size, and what a stay looks like for you.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)", margin: "0 0 1.8rem" }}>
          get in touch with us
        </span>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="mailto:hello@moclittlefarm.com" className="cta-btn cta-btn--solid">
            hello@moclittlefarm.com <span className="ar">→</span>
          </a>
          <a href="https://www.instagram.com/moclittlefarm/" target="_blank" rel="noopener" className="cta-btn cta-btn--outline">
            instagram <span className="ar">→</span>
          </a>
          <a href="https://www.facebook.com/MLFMangden/" target="_blank" rel="noopener" className="cta-btn cta-btn--outline">
            facebook <span className="ar">→</span>
          </a>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link className="go mono-link" href={routes.home} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          xem bản tiếng việt <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

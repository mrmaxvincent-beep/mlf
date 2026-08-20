import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Schedule } from "@/components/Schedule";
import { PricingPanel } from "@/components/PricingPanel";
import { FaqShowMore } from "@/components/FaqShowMore";
import { Disclosure } from "@/components/Disclosure";
import { DayCard } from "@/components/DayCard";
import { routes } from "@/lib/nav";
import { includesList, whoList, days, pricingItems, poemLines, stayTalkLa, policyLines, faqs, travelGroups } from "@/data/stayTalk";

export const metadata: Metadata = {
  title: "stay + talk",
  description: "một khoảng nghỉ ngắn. để nhịp mình chậm lại, đủ để nói chuyện, đủ để tâm được yên một chút. đến, ở, và để mọi thứ diễn ra tự nhiên.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.85,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.1rem",
};

const journeySubnav = [
  { label: "stay+talk", href: routes.stayTalk },
  { label: "retreat ở-yên", href: routes.retreatOYen },
  { label: "retreat hàm-dưỡng", href: routes.retreatHamDuong },
  { label: "retreat an-vui", href: routes.retreatAnVui },
];

export default function StayTalkPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: "stay+talk" }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          stay + talk
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 0.75rem" }}>
          đến, ở, và để mọi thứ diễn ra tự nhiên.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {journeySubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>/</span> : null}
              {item.href === routes.stayTalk ? (
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)", borderBottom: "1px solid var(--color-ink)", paddingBottom: "0.1rem" }}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="mono-link" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-stone)" }}>
                  {item.label}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · stay+talk 1" aspectRatio="16/12" src="/assets/staytalk1.webp" alt="stay+talk" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · stay+talk 2" aspectRatio="16/12" src="/assets/staytalk2.webp" alt="stay+talk" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · stay+talk 3" aspectRatio="16/12" src="/assets/staytalk3.webp" alt="stay+talk" style={{ width: "100%", height: "auto" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "12rem", marginBottom: "5rem", maxWidth: "42ch", margin: "0 auto 5rem" }}>
        {poemLines.map((line, i) => (
          <p key={i} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 0.3rem", textAlign: "center", minHeight: line === "" ? "1.5rem" : "auto" }}>
            {line}
          </p>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <span className="eyebrow" style={{ marginBottom: "0.6rem", color: "var(--color-cham-dem)" }}>stay+talk là</span>
        {stayTalkLa.map((item) => (
          <div key={item} className="who-item" style={{ opacity: 1, transform: "none", padding: "0.1rem 0", justifyContent: "center" }}>
            <span className="who-mark">⸺</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>ai phù hợp</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {whoList.map((item) => (
          <div key={item} className="who-item">
            <span className="who-mark">⸺</span>
            <span>{item}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>bao gồm</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "500px" }}>
        {includesList.map((item) => (
          <div key={item.label} className="info-row">
            <span className="info-label">{item.label}</span>
            <span className="info-val">{item.val}</span>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>người đón bạn</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Tâm · Vũ · Thuận</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>mỗi đợt tối đa 6 khách, luôn có 3 người ở nhà đón cùng.</p>
      </Reveal>

      <div style={{ marginBottom: "4.5rem", maxWidth: "126ch", margin: "0 auto 4.5rem", width: "100%" }}>
        <ImagePlaceholder label="ảnh · stay+talk" aspectRatio="16/9" src="/assets/ngayhien_staytalk05.webp" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>lịch trình đề nghị</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        {days.map((d) => (
          <Reveal key={d.n} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ backgroundColor: "#faf8f3", padding: "2.5rem", borderRadius: "0.5rem", maxWidth: "73ch", width: "100%" }}>
              <div style={{ marginBottom: "-3.5rem" }}>
                <DayCard dayNum={d.n} rows={d.rows} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>chi phí</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "26rem" }}>
        <PricingPanel
          label="stay + talk"
          subtitle="3 ngày 2 đêm · tối đa 6 khách / chuyến"
          price="3.200.000đ / người"
          items={pricingItems}
          note="Bữa trưa các ngày tự túc. Nếu dùng toàn bộ các bữa ăn tại mlf: 3.500.000đ / người."
          ctaLabel="liên hệ đặt chỗ"
          ctaHref="https://m.me/mlfmangden"
        />
      </Reveal>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>Trẻ em đi cùng bố mẹ: dưới 5 tuổi — phí 50% · dưới 10 tuổi — phí 80%.</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0.6rem 0 0" }}>
          Nếu muốn ở thêm dài ngày hơn, sau stay+talk bạn có thể chọn hình thức homestay (nhà mộc cung cấp bữa ăn, phòng ngủ, xe máy). Hãy dành chút thời gian tham khảo{" "}
          <Link className="mono-link" href={routes.daoMotVong} style={{ fontFamily: "var(--font-sans)", display: "inline", overflow: "visible" }}>
            nếp nhà mộc little farm
          </Link>{" "}
          để hiểu hơn về nếp sống nơi này.
        </p>
      </div>

      <div style={{ padding: "3rem 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "180px", height: "140px" }}>
          <Image src="/assets/home_ghe.webp" alt="home_ghe" fill sizes="180px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.1rem", fontStyle: "italic" }}>
          .... đó sẽ là những bữa ngồi xuống ăn cơm chung, những buổi trà chánh niệm hay buổi trò chuyện lãng đãng bên suối.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.1rem", fontStyle: "italic" }}>
          mỗi ngày, nhà mộc nấu 2 bữa chay sáng-tối còn buổi trưa bạn có thể chạy xe ra ngoài và thử các món địa phương.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.1rem", fontStyle: "italic" }}>
          thiết nghĩ trong stay+talk, người tham gia có thể được đi chơi thong dong theo ý mình, vừa có lúc neo mình lại giữa những điều giản dị. để đến Măng Đen không chỉ là những chuyến đi nối dài từ điểm này sang điểm khác, mà còn có những khoảng lặng, những lúc thảnh thơi, có ai đó đợi cơm mình. nơi đó cũng đủ cái nhẫn để lắng nghe một ai tâm sự, đủ thì giờ kể cho mình nghe chuyện núi đồi, chuyện thương nhớ, chuyện nọ chuyện kia.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: 0, fontStyle: "italic" }}>
          stay+talk, chút đủ đầy của giản đơn.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <FaqShowMore items={faqs} />
      </div>

      <div className="wrap" style={{ marginBottom: "1rem" }}>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>CHÍNH SÁCH HỦY / HOÀN</span>}>
          <div>
            {policyLines.map((line) => (
              <p key={line} style={{ ...proseP, fontSize: "0.85rem" }}>
                {line}
              </p>
            ))}
          </div>
        </Disclosure>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>CÁCH DI CHUYỂN TỚI MĂNG ĐEN</span>}>
          <div>
            {travelGroups.map((group) => (
              <div key={group.title} style={{ marginBottom: "1.4rem" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                  {group.title}
                </span>
                {group.lines.map((line) => (
                  <p key={line} style={{ ...proseP, fontSize: "0.85rem" }}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Disclosure>
        <Link href={routes.specialTreat} style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)", textDecoration: "none", marginTop: "0.8rem", paddingBottom: "0.8rem", borderBottom: "1px solid var(--color-mist)" }} className="mono-link">
          special treat: dành cho khách quen <span className="ar">→</span>
        </Link>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "4rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://m.me/mlfmangden" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            liên hệ qua fanpage <span className="ar">→</span>
          </a>
          <Link href={routes.soTayKhach} className="cta-btn cta-btn--outline">
            đọc guest guide <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ display: "block", marginBottom: "0.9rem", color: "var(--color-ink)" }}>
          tham khảo thêm hành trình khác
        </span>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.6rem 1rem" }}>
          <Link className="mono-link" href={routes.retreatOYen} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat ở-yên
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link" href={routes.retreatHamDuong} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat hàm-dưỡng
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link" href={routes.retreatAnVui} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat an-vui
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link href={routes.ngayHien} className="go mono-link" style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          về trang ngày-hiền <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

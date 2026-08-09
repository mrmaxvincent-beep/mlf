import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Schedule } from "@/components/Schedule";
import { PricingPanel } from "@/components/PricingPanel";
import { FaqShowMore } from "@/components/FaqShowMore";
import { Disclosure } from "@/components/Disclosure";
import { routes } from "@/lib/nav";
import { includesList, whoList, days, pricingItems, poemLines, policyLines, faqs, travelGroups } from "@/data/stayTalk";

export const metadata: Metadata = {
  title: "stay + talk",
  description: "một khoảng nghỉ ngắn. để nhịp mình chậm lại, đủ để nói chuyện, đủ để tâm được yên một chút. đến, ở, và để mọi thứ diễn ra tự nhiên.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
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
          một khoảng nghỉ ngắn. để nhịp mình chậm lại, đủ để nói chuyện, đủ để tâm được yên một chút. đến, ở, và để mọi thứ diễn ra tự nhiên.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {journeySubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-mist)" }}>/</span> : null}
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

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 540 }}>
        <ImagePlaceholder label="ảnh · picnic bên suối, stay+talk" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow">bao gồm</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem" }}>
        {includesList.map((item) => (
          <div key={item.label} className="info-row">
            <span className="info-label">{item.label}</span>
            <span className="info-val">{item.val}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">ai phù hợp</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {whoList.map((item) => (
          <div key={item} className="who-item">
            <span className="who-mark">——</span>
            <span>{item}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">người đón bạn</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Tâm · Vũ · Thuận</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>mỗi đợt tối đa 6 khách, luôn có 3 người ở nhà đón cùng.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">lịch trình đề nghị</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        {days.map((d) => (
          <div key={d.n} className="day-block">
            <span className="day-num" style={{ fontSize: "1.6rem" }}>
              ngày {d.n}
            </span>
            <Schedule rows={d.rows} />
          </div>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">chi phí</span>
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
          <Link className="mono-link" href={routes.daoMotVong}>
            nếp nhà mộc little farm
          </Link>{" "}
          để hiểu hơn về nếp sống nơi này.
        </p>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "42ch", margin: "0 auto 5rem" }}>
        {poemLines.map((line) => (
          <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 0.3rem", textAlign: "center" }}>
            {line}
          </p>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <FaqShowMore items={faqs} />
      </div>

      <div className="wrap" style={{ marginBottom: "1rem", maxWidth: "56ch" }}>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--color-ink)" }}>chính sách hủy / hoàn</span>}>
          <div>
            {policyLines.map((line) => (
              <p key={line} style={proseP}>
                {line}
              </p>
            ))}
          </div>
        </Disclosure>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--color-ink)" }}>cách di chuyển tới măng đen</span>}>
          <div>
            {travelGroups.map((group) => (
              <div key={group.title} style={{ marginBottom: "1.4rem" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-moss)", marginBottom: "0.5rem" }}>
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
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "4rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://m.me/mlfmangden" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            liên hệ qua fanpage <span className="ar">→</span>
          </a>
          <Link href={routes.soTayKhach} className="cta-btn">
            đọc guest guide <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ display: "block", marginBottom: "0.9rem" }}>
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

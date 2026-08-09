import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { PricingPanel } from "@/components/PricingPanel";
import { FaqShowMore } from "@/components/FaqShowMore";
import { Disclosure } from "@/components/Disclosure";
import { routes } from "@/lib/nav";
import {
  introLines,
  whoList,
  formatList,
  pricingItemsBase,
  activities,
  themes,
  faqs,
  policyLines,
  travelGroups,
} from "@/data/retreatOYen";

export const metadata: Metadata = {
  title: "retreat ở-yên",
  description: "những ngày thật thà — để sống và cảm nhận từ những điều rất thật, rất đỗi giản đơn.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.95rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.3rem",
};

const journeySubnav = [
  { label: "stay+talk", href: routes.stayTalk },
  { label: "retreat ở-yên", href: routes.retreatOYen },
  { label: "retreat hàm-dưỡng", href: routes.retreatHamDuong },
  { label: "retreat an-vui", href: routes.retreatAnVui },
];

export default function RetreatOYenPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: "retreat ở-yên" }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          retreat ở-yên
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 0.75rem" }}>
          những ngày thật thà — để sống và cảm nhận từ những điều rất thật, rất đỗi giản đơn.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {journeySubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-mist)" }}>/</span> : null}
              {item.href === routes.retreatOYen ? (
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

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 560 }}>
        <ImagePlaceholder label="ảnh · retreat ở-yên" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "2.5rem", marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="mam-la" size={35} />
      </div>
      <Reveal className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="eyebrow" style={{ textAlign: "center" }}>
          lời ngỏ
        </span>
        <div style={{ textAlign: "center", maxWidth: "40ch", margin: "0 auto" }}>
          {introLines.map((line) => (
            <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 0.4rem" }}>
              {line}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow">dành cho ai</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "4rem", maxWidth: "56ch" }}>
        {whoList.map((item) => (
          <div key={item} className="who-item">
            <span className="who-mark">·</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-ink)" }}>{item}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow">hình thức</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {formatList.map((row) => (
          <div key={row.label} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: "0.85rem 0", borderBottom: "1px solid var(--color-mist)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>{row.label}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-ink)", textAlign: "right" }}>{row.val}</span>
          </div>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ textAlign: "center" }}>
          chi phí tham gia
        </span>
      </div>
      <Reveal className="wrap pp-grid" style={{ marginBottom: "5rem" }}>
        <PricingPanel
          label="4 ngày 3 đêm"
          subtitle="mỗi người"
          price="6.000.000đ"
          items={pricingItemsBase}
          ctaLabel="đăng ký 4N3Đ"
          ctaHref="https://forms.gle/Ra77c8s5cH6WeL5e7"
        />
        <PricingPanel
          label="5 ngày 4 đêm"
          subtitle="mỗi người"
          price="8.000.000đ"
          items={pricingItemsBase}
          ctaLabel="đăng ký 5N4Đ"
          ctaHref="https://forms.gle/Ra77c8s5cH6WeL5e7"
        />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow">những gì diễn ra trong chuyến đi</span>
      </div>
      <RevealStagger className="wrap act-grid" style={{ marginBottom: "5rem" }}>
        {activities.map((item) => (
          <div key={item.title} className="act-card">
            <span className="act-title">{item.title}</span>
            {item.desc ? <span className="act-desc">{item.desc}</span> : null}
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={38} />
      </div>
      <div className="wrap" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ textAlign: "center" }}>
          mỗi chuyến mang một chủ đề riêng
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "60ch" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem 0.8rem" }}>
          {themes.map((theme) => (
            <span key={theme} className="theme-chip">
              {theme}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-moss)", margin: "0 0 0.3rem" }}>+80</p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", margin: 0 }}>
          chuyến retreat đã diễn ra tại mlf
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "0.5rem" }}>
        <span className="eyebrow">trợ duyên</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "1rem", maxWidth: "56ch" }}>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--color-ink)" }}>những gì cần chuẩn bị trước khi đến</span>}>
          <div>
            <p style={proseP}>hành lý gọn nhẹ — quần áo ấm, giày đi bộ đường rừng, đồ dùng cá nhân. mlf đã chuẩn bị sẵn nơi ở, bữa ăn, và các vật dụng cần thiết cho chương trình.</p>
            <p style={proseP}>mang theo một tâm thế cởi mở, sẵn sàng đón nhận những gì đến — kể cả những điều không nằm trong dự tính.</p>
          </div>
        </Disclosure>
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
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "3rem" }}>
        <FaqShowMore items={faqs} />
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)", margin: "0 0 2rem" }}>
          nếu bạn cảm thấy đây là chuyến đi của mình — hãy để nhà mộc chuẩn bị chỗ cho bạn.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://forms.gle/Ra77c8s5cH6WeL5e7" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            đăng ký retreat ở-yên <span className="ar">→</span>
          </a>
          <Link href={routes.soTayKhach} className="cta-btn">
            đọc sổ tay khách <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { Schedule } from "@/components/Schedule";
import { PricingPanel } from "@/components/PricingPanel";
import { FaqShowMore } from "@/components/FaqShowMore";
import { Disclosure } from "@/components/Disclosure";
import { routes } from "@/lib/nav";
import {
  anVuiLa,
  threeSpaces,
  rhythmBlocks,
  days,
  programInfo,
  pricingItems,
  schedule2026,
  medicalFaqs,
  faqs,
  policyLines,
  travelGroups,
} from "@/data/retreatAnVui";

export const metadata: Metadata = {
  title: "retreat an-vui",
  description: "có những năm tháng ta sống cho con, cho cháu, cho cả gia đình — an-vui là những ngày để dừng lại, chăm lại sức khỏe và đời sống tinh thần của chính mình.",
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

export default function RetreatAnVuiPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: "retreat an-vui" }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          retreat an-vui
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 0.75rem" }}>
          có những năm tháng ta sống cho con, cho cháu, cho cả gia đình — đến mức quên rằng thời gian của riêng mình cũng đang trôi. an-vui là những ngày để dừng lại — để thả lỏng gánh nặng đã mang theo lâu, chăm lại sức khỏe và đời sống tinh thần của chính mình, và tìm lại niềm vui, niềm cảm hứng đã có lúc bị gác sang một bên.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {journeySubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-mist)" }}>/</span> : null}
              {item.href === routes.retreatAnVui ? (
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
        <ImagePlaceholder label="ảnh · buổi trò chuyện an-vui giữa thiên nhiên" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow">an-vui là</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {anVuiLa.map((item) => (
          <div key={item} className="who-item">
            <span className="who-mark">——</span>
            <span>{item}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span className="eyebrow" style={{ marginBottom: "0.3rem" }}>
          03 không gian
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        {threeSpaces.map((s) => (
          <div key={s.title} className="space-card">
            <span className="space-title">{s.title}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-ink)" }}>{s.desc}</span>
          </div>
        ))}
      </Reveal>

      <RevealStagger className="wrap" style={{ marginBottom: "5rem" }}>
        {rhythmBlocks.map((b) => (
          <div key={b.title} className="rhythm-block">
            <span className="rhythm-title">{b.title}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>{b.body}</p>
          </div>
        ))}
      </RevealStagger>

      <div style={{ marginBottom: "4.5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · làm bánh quê cùng cô chú" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>đây là không gian để 4 người cùng tuổi, cùng một đoạn đời — gặp nhau để chia sẻ và thấu hiểu.</p>
        <p style={{ ...proseP, margin: 0 }}>
          toàn bộ hành trình là ăn chay thanh nhẹ — các bữa ăn, bánh, thức uống đều tự tay làm bởi mlf. tại mlf, không sử dụng các gia vị công nghiệp trong chế biến, chú trọng hài hòa nguyên tắc ăn uống âm-dương.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">lịch trình</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        {days.map((d) => (
          <div key={d.n} className="day-block">
            <span className="day-num">ngày {d.n}</span>
            <span className="day-title">{d.title}</span>
            <Schedule rows={d.rows} />
            {d.note ? (
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0.8rem 0 0" }}>{d.note}</p>
            ) : null}
          </div>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">thông tin chương trình</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2rem" }}>
        {programInfo.map((item) => (
          <div key={item.label} className="info-row">
            <span className="info-label">{item.label}</span>
            <span className="info-val">{item.val}</span>
          </div>
        ))}
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "26rem" }}>
        <PricingPanel
          label="retreat an-vui"
          subtitle="5 ngày 4 đêm · tối đa 4 khách / chuyến"
          price="8.000.000đ / người"
          items={pricingItems}
          note="Phù hợp với người có thể tự đi lại, ăn uống, sinh hoạt cá nhân — không cần hỗ trợ thường xuyên. *có chính sách trợ duyên cho người cần hỗ trợ về tài chính."
          ctaLabel="đăng ký"
          ctaHref="https://forms.gle/EFyZNdUjt4zFo7fR9"
        />
      </Reveal>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1rem" }}>
          nếu bạn đang đọc trang này cho bố mẹ mình — an-vui chỉ 4 khách mỗi chuyến, thong dong và luôn có người ở cạnh: Thuận, Tâm, Vũ — là người đồng hành theo sát suốt hành trình. 3 người đã đi dẫn dắt hơn 80 chuyến retreat, trong đó có rất nhiều người lớn tuổi.
        </p>
        <p style={{ ...proseP, margin: 0 }}>mlf là nơi đủ an toàn, dịu dàng để bố mẹ được là chính mình một chút.</p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">lịch retreat trong năm 2026</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        {schedule2026.map((s) => (
          <div key={s} className="info-row">
            <span className="info-label">retreat an vui</span>
            <span className="info-val">{s}</span>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://forms.gle/EFyZNdUjt4zFo7fR9" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            đăng ký <span className="ar">→</span>
          </a>
          <Link href={routes.soTayKhach} className="cta-btn">
            đọc guest guide <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={38} />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.6rem, 10vw, 5.5rem)", lineHeight: 0.85, color: "var(--color-moss)", marginBottom: "0.5rem" }}>+80</span>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-ink)", marginBottom: "0.4rem" }}>chuyến retreat</span>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.6rem" }}>trong 3 năm qua</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          mlf không hứa hẹn một điều gì lớn lao. chỉ là một không gian đủ dịu dàng, để cô chú tự khám phá điều mình thực sự cần.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0.8rem 0 0" }}>
          mỗi chuyến retreat đều có một chủ đề riêng, tạo nên bầu không khí và trải nghiệm riêng — dựa trên sự tham gia của cô chú, nhà mộc sẽ thiết kế lịch trình để thật sự xuôi dòng.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0.8rem 0 0" }}>
          lưu ý: lịch trình chi tiết sẽ được gửi vào từng ngày diễn ra retreat, để giữ tính thong thả, uyển chuyển.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem", maxWidth: "56ch" }}>
        <span className="eyebrow">các vấn đề về y tế — an toàn</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {medicalFaqs.map((item) => (
          <Disclosure key={item.q} trigger={<span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.9rem", color: "var(--color-ink)" }}>{item.q}</span>}>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone)", margin: 0 }}>{item.a}</p>
          </Disclosure>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <FaqShowMore items={faqs} />
      </div>

      <div className="wrap" style={{ marginBottom: "1rem", maxWidth: "56ch" }}>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--color-ink)" }}>chính sách trợ duyên</span>}>
          <div>
            <p style={proseP}>
              Chúng tôi mong rằng các chương trình của mộc little farm ít nhiều sẽ mang lại sự lợi lạc cho mọi người. Nếu bạn cảm thấy có sự kết nối và muốn góp phần lan tỏa hành trình của mlf đến với nhiều người hơn, bạn có thể chung tay trợ duyên cho người hữu duyên thông qua các chương trình retreat hàm-dưỡng, ở-yên, an-vui &amp; online retreat khai tâm.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
              <b>tài trợ tùy duyên</b> — bạn có thể trợ duyên cho các chương trình retreat giúp mlf mở rộng vòng tay đến nhiều người cần sự bình an và chuyển hóa hơn.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
              <b>nhận hỗ trợ</b> — những ai thật sự cần đến retreat có thể nhận trợ duyên để tham gia các chương trình của mlf.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 0.6rem" }}>
              Để tài trợ: mọi đóng góp, dù lớn dù nhỏ, đều có ý nghĩa rất lớn đối với chúng tôi. Xin hoan hỷ ghi rõ nội dung đóng góp &ldquo;trợ duyên mlf&rdquo; khi chuyển khoản tới: Ngân hàng Vietcombank · STK: 7945672381 · Chủ TK: Hồ Thành Tâm.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
              Để nhận hỗ trợ: khi đăng ký chương trình retreat, bạn có thể cân nhắc lựa chọn các mức hỗ trợ (10% – 20%) phù hợp với nhu cầu của bản thân. Chúng tôi sẽ xác nhận việc hỗ trợ dựa trên mức sẵn có của quỹ trợ duyên.
            </p>
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
      </div>

      <div className="wrap" style={{ marginBottom: "2.5rem", marginTop: "4rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ display: "block", marginBottom: "0.9rem" }}>
          tham khảo thêm hành trình khác
        </span>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.6rem 1rem" }}>
          <Link className="mono-link" href={routes.stayTalk} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            stay+talk
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link" href={routes.retreatOYen} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat ở-yên
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link" href={routes.retreatHamDuong} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat hàm-dưỡng
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

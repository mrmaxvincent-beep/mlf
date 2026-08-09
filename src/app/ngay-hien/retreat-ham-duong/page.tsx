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
  hamDuongLa,
  threeSpaces,
  whySoftens,
  touchPoints,
  teaSessions,
  seasons,
  pricingItems,
  faqs,
  policyLines,
  travelGroups,
} from "@/data/retreatHamDuong";

export const metadata: Metadata = {
  title: "retreat hàm-dưỡng",
  description: "chương trình retreat 4-mùa-hàm-dưỡng, gồm 4 retreat trong năm dành cho những ai muốn đến để tìm lời hồi đáp cho câu hỏi của mình.",
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

export default function RetreatHamDuongPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: "retreat hàm-dưỡng" }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          retreat hàm-dưỡng
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 0.75rem" }}>
          chương trình retreat 4-mùa-hàm-dưỡng, gồm 4 retreat trong năm dành cho những ai muốn đến để tìm lời hồi đáp cho câu hỏi của mình.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {journeySubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-mist)" }}>/</span> : null}
              {item.href === routes.retreatHamDuong ? (
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
        <ImagePlaceholder label="ảnh · retreat hàm-dưỡng, rừng thông măng đen" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "4rem", marginBottom: "5rem", maxWidth: "52ch" }}>
        {introLines.map((line) => (
          <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.95, color: "var(--color-ink)", margin: "0 0 1.3rem", textAlign: "center" }}>
            {line}
          </p>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span className="eyebrow" style={{ marginBottom: "0.3rem" }}>
          mộc little farm — nơi ươm mầm cho những lời giải
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "2rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.6rem" }}>
          hàm-dưỡng là
        </span>
        {hamDuongLa.map((item) => (
          <div key={item} className="who-item" style={{ opacity: 1, transform: "none" }}>
            <span className="who-mark">·</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.6rem" }}>
          cùng ba không gian
        </span>
        {threeSpaces.map((s) => (
          <div key={s.title} style={{ padding: "1.6rem 0", borderBottom: "1px solid var(--color-mist)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)", display: "block", marginBottom: "0.4rem" }}>{s.title}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-ink)" }}>{s.desc}</span>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">vì sao tới?</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          có lẽ vì trong nhịp sống cũ, ta khó mà tự chuyển hóa. tâm không thể an khi vẫn còn bị cuốn vào những vòng quay quen thuộc: vội vã, bận rộn, ồn ã, nhiều kích thích, nhiều màn hình, nhiều mong đợi. hàm-dưỡng mở ra một hệ sinh thái khác, nơi thân - tâm - nếp sống cùng trở về sự đủ đầy:
        </p>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem" }}>
        {whySoftens.map((item) => (
          <div key={item} style={{ padding: "0.9rem 0", borderBottom: "1px solid var(--color-mist)" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)" }}>{item}</span>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          khi ấy câu trả lời thường đến trong những khoảnh khắc rất mộc mạc: khi ta ngồi bên suối, lắng tiếng nước; khi bước dưới rừng thông và nghe lại nhịp chân mình; khi ngồi quanh lửa tối và một câu hỏi khẽ chạm vào lòng.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.98rem", lineHeight: 1.9, color: "var(--color-stone-alt)", textAlign: "justify", margin: 0 }}>
          mọi câu trả lời đều có sẵn. chỉ cần một nơi đủ hiền để chúng tự mở ra. mộc little farm không phải là nơi tổ chức chương trình — mà là một nơi để sống với những điều mình có.
        </p>
      </div>

      <div style={{ marginBottom: "4.5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · vòng tròn trò chuyện tâm thức" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">tinh thần của retreat: sống — chung — trong — hiền</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>retreat này không phải là chuyến nghỉ dưỡng, ta sẽ cùng sống, nấu những bữa ăn đơn giản, chuẩn bị và thu dọn, chạm vào từng việc nhỏ bằng sự có mặt.</p>
        <p style={proseP}>
          bởi trong đời sống thường ngày, những điều đẹp nhất thường nằm ở những khoảnh khắc rất bình dị: một ánh nhìn hiểu nhau, tiếng dao chạm thớt buổi sớm, làn khói bếp lúc chiều, hay một phút im lặng chung giữa những người chưa từng quen biết.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.98rem", lineHeight: 1.9, color: "var(--color-stone-alt)", textAlign: "justify", margin: 0 }}>
          retreat này nhằm nuôi dưỡng những rung động thật nhỏ, những rung động đủ hiền và đủ sâu để khẽ lay nhẹ trái tim.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "2rem" }}>
        <span className="eyebrow">03 điểm chạm</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0.4rem 0 0", maxWidth: "56ch" }}>
          dù không có lớp học, hàm-dưỡng vẫn có một nhịp rất rõ:
        </p>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "58ch" }}>
        {touchPoints.map((t) => (
          <div key={t.time} style={{ marginBottom: "3rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-moss)", marginBottom: "0.5rem" }}>{t.time}</span>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-ink)", marginBottom: "0.8rem" }}>{t.title}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>{t.body}</p>
            {t.bullets.map((b) => (
              <div key={b} className="who-item" style={{ padding: "0.3rem 0", opacity: 1, transform: "none" }}>
                <span className="who-mark">·</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        ))}
      </RevealStagger>

      <div style={{ marginBottom: "4.5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · đêm kết nối tại mlf" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          retreat này không giống bất kỳ chương trình nào — vì ta không đi &ldquo;học&rdquo;, ta chỉ đi sống. vì không đi tìm &ldquo;giải pháp&rdquo;, ta chỉ nhìn lại sự thật trong lòng mình. và cũng không tạm rời khỏi đời sống, ta chỉ đang tập sống lại hiền hơn, chậm hơn, tỉnh hơn, và từ bi với chính mình.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">03 buổi uống trà — 03 cửa ngõ để hiểu chính mình</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {teaSessions.map((t) => (
          <div key={t.who} style={{ display: "flex", gap: "1rem", padding: "0.9rem 0", borderBottom: "1px solid var(--color-mist)", alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)", minWidth: "11ch" }}>{t.who}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-stone-alt)" }}>{t.theme}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <span className="eyebrow">bộ công án</span>
        <p style={{ ...proseP, margin: 0 }}>
          trong mỗi chuyến retreat hàm-dưỡng, sẽ có một bộ 5 công án — được thiết kế riêng cho từng retreat. mỗi bộ là một mạch dẫn tinh tế, chạm đúng điều cần được thấy, là sợi chỉ xuyên suốt dẫn ta qua 5 ngày tại mlf.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span className="eyebrow" style={{ marginBottom: "0.3rem" }}>
          retreat 4-mùa-hàm-dưỡng
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>05 ngày 04 đêm</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "2rem" }}>
        {seasons.map((s) => (
          <div key={s.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid var(--color-mist)", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)" }}>
              {s.name} — {s.theme}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.04em", color: "var(--color-moss)" }}>{s.dates}</span>
          </div>
        ))}
      </RevealStagger>
      <div className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
          nhà mộc nhận giới hạn 06 khách cho 01 chuyến retreat. (việc ở cùng phòng sẽ được sắp xếp tùy vào số lượng khách).
        </p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "26rem" }}>
        <PricingPanel
          label="retreat 4-mùa-hàm-dưỡng"
          subtitle="05 ngày 04 đêm · tối đa 6 khách / chuyến"
          price="8.000.000đ / người"
          items={pricingItems}
          note="Chương trình chỉ nhận khách từ 15 tuổi trở lên. Trợ duyên cho người hữu duyên: gặp khó khăn tài chính, xin viết thư gửi hello@moclittlefarm.com để được hỗ trợ."
          ctaLabel="đăng ký retreat hàm-dưỡng"
          ctaHref="https://forms.gle/RL8yW96QMBZm7UxD9"
        />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={38} />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.6rem, 10vw, 5.5rem)", lineHeight: 0.85, color: "var(--color-moss)", marginBottom: "0.5rem" }}>+80</span>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-ink)", marginBottom: "0.4rem" }}>chuyến retreat</span>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.6rem" }}>trong 3 năm qua</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.2rem" }}>
          nhà mộc không hứa hẹn một điều gì lớn lao. chỉ là một không gian đủ dịu dàng, để bạn tự khám phá điều mình thực sự cần.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          mỗi chuyến retreat đều có một chủ đề riêng, tạo nên bầu không khí và trải nghiệm riêng — dựa trên sự tham gia của bạn, nhà mộc sẽ thiết kế lịch trình để thật sự xuôi dòng.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0.8rem 0 0" }}>
          lưu ý: lịch trình chi tiết sẽ được gửi vào từng ngày diễn ra retreat, để giữ tính thong thả, uyển chuyển.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Link href={routes.retreatHamDuongLichTrinh} className="cta-btn">
          xem lịch trình tham khảo <span className="ar">→</span>
        </Link>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "0" }}>
        <FaqShowMore items={faqs} />
      </div>

      <div className="wrap" style={{ marginBottom: "1rem", maxWidth: "56ch" }}>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--color-ink)" }}>chính sách trợ duyên</span>}>
          <div>
            <p style={proseP}>
              Nhà mộc mong rằng các chương trình của mlf little farm ít nhiều sẽ mang lại sự lợi lạc cho mọi người. Nếu bạn cảm thấy có sự kết nối và muốn góp phần lan tỏa hành trình của mlf đến với nhiều người hơn, bạn có thể chung tay trợ duyên cho người hữu duyên thông qua các chương trình retreat hàm-dưỡng &amp; online retreat khai tâm, im lặng-chữ nghĩa.
            </p>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-moss)", marginBottom: "0.6rem" }}>
              trợ duyên cho người hữu duyên
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
              <b>tài trợ tùy duyên</b> — bạn có thể trợ duyên cho các chương trình retreat hàm-dưỡng &amp; online retreat khai tâm, im lặng-chữ nghĩa, giúp mlf mở rộng vòng tay đến nhiều người cần sự bình an và chuyển hóa hơn.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
              <b>nhận hỗ trợ</b> — những ai thật sự cần đến retreat ngày-hiền &amp; online retreat khai tâm có thể nhận trợ duyên để tham gia các chương trình của mlf.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 0.6rem" }}>
              Để tài trợ: mọi đóng góp, dù lớn dù nhỏ, đều có ý nghĩa rất lớn đối với chúng tôi. Xin hoan hỷ ghi rõ nội dung đóng góp &ldquo;trợ duyên mlf&rdquo; khi chuyển khoản tới: Ngân hàng Vietcombank · STK: 7945672381 · Chủ TK: Hồ Thành Tâm.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
              Để nhận hỗ trợ: khi đăng ký chương trình retreat hàm-dưỡng &amp; online retreat khai tâm, im lặng-chữ nghĩa, bạn có thể cân nhắc lựa chọn các mức hỗ trợ (10% – 20%) phù hợp với nhu cầu của bản thân. Chúng tôi sẽ xác nhận việc hỗ trợ dựa trên mức sẵn có của quỹ trợ duyên.
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

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "4rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://forms.gle/RL8yW96QMBZm7UxD9" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            đăng ký retreat hàm-dưỡng <span className="ar">→</span>
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
          <Link className="mono-link" href={routes.stayTalk} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            stay+talk
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link" href={routes.retreatOYen} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat ở-yên
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

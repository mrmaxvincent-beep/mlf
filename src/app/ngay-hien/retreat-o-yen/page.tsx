import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { PricingPanel } from "@/components/PricingPanel";
import { FaqShowMore } from "@/components/FaqShowMore";
import { Disclosure } from "@/components/Disclosure";
import { ActivityPicker } from "@/components/ActivityPicker";
import { RegistrationLink } from "@/components/RegistrationLink";
import { routes } from "@/lib/nav";
import {
  introLines,
  oYenLa,
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
  description: "một hành trình nhàn du",
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
          một hành trình nhàn du
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {journeySubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>/</span> : null}
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

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · retreat ở-yên 1" aspectRatio="16/12" src="/assets/ngayhien_oyen_01.webp" alt="retreat ở-yên" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · retreat ở-yên 2" aspectRatio="16/12" src="/assets/ngayhien_oyen_02.webp" alt="retreat ở-yên" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · retreat ở-yên 3" aspectRatio="16/12" src="/assets/ngayhien_oyen_03.webp" alt="retreat ở-yên" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="wrap" style={{ marginTop: "2.5rem", marginBottom: "0.5rem", textAlign: "center" }}>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "4rem" }}>
        <div style={{ textAlign: "center", maxWidth: "40ch", margin: "0 auto" }}>
          {introLines.map((line) => (
            <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 0.4rem" }}>
              {line}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <span className="eyebrow" style={{ marginBottom: "0.6rem", color: "var(--color-cham-dem)" }}>ở-yên là</span>
        {oYenLa.map((item) => (
          <div key={item} className="who-item" style={{ opacity: 1, transform: "none", padding: "0.1rem 0", justifyContent: "center" }}>
            <span className="who-mark">⸺</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "3rem 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "180px", height: "140px" }}>
          <Image src="/assets/caibat.webp" alt="caibat" fill sizes="180px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1rem" }}>
          <strong>retreat tại mlf không bó buộc theo lịch trình nặng nề</strong>
        </p>
        <ul style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.2rem", paddingLeft: "1.5rem" }}>
          <li style={{ marginBottom: "0.8rem" }}>chỉ đơn giản là thuận theo dòng chảy, để mọi thứ xảy đến</li>
          <li style={{ marginBottom: 0 }}>tập hồn nhiên như cây cỏ, linh hoạt như nước, bao dung như đất, thấu tỏ như ánh sáng.</li>
        </ul>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>dành cho ai</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "4rem", maxWidth: "56ch" }}>
        {whoList.map((item) => (
          <div key={item} className="who-item">
            <span className="who-mark">⸺</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)" }}>{item}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>nhịp một ngày</span>
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto 5rem", padding: "0 1.5rem", position: "relative" }}>
        {/* dòng chảy âm–dương xuyên suốt ngày */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "13px",
            left: "10%",
            right: "10%",
            height: "1px",
            backgroundImage: "linear-gradient(to right, var(--color-mist), var(--color-stone) 50%, var(--color-mist))",
          }}
        />

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2.5rem" }}>
          {[
            {
              time: "buổi sáng",
              title: "ra ngoài thiên nhiên",
              tag: "động · dương",
              body: "các hoạt động cảm hứng như tản bộ trong rừng, dã ngoại,... mang ta ra bên ngoài, trở lại kết nối với tự nhiên.",
              mark: "yang" as const,
            },
            {
              time: "buổi trưa",
              title: "vào trong thân mình",
              tag: "tĩnh · âm",
              body: "các hoạt động thủ công, sáng tạo: làm bánh, thêu thùa, may vá, đan len, vẽ, luyện chữ...",
              mark: "yin" as const,
            },
            {
              time: "buổi tối",
              title: "đêm nối kết",
              tag: "cân bằng âm – dương",
              body: "các hoạt động kết nối: đọc sách, xem phim, vòng tròn trò chuyện, hát ca bồng bềnh, xem nhân tướng, tarot,...",
              mark: "balance" as const,
            },
          ].map((item) => (
            <Reveal key={item.time} style={{ flex: "1 1 220px", maxWidth: "300px", textAlign: "center", position: "relative", paddingTop: "2.2rem" }}>
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}>
                {item.mark === "yang" ? (
                  <span style={{ display: "block", width: 14, height: 14, borderRadius: "50%", border: "1.5px solid var(--color-ink)", background: "var(--color-paper)" }} />
                ) : item.mark === "yin" ? (
                  <span style={{ display: "block", width: 14, height: 14, borderRadius: "50%", background: "var(--color-ink)" }} />
                ) : (
                  <span
                    style={{
                      display: "block",
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      border: "1.5px solid var(--color-ink)",
                      background: "linear-gradient(to right, var(--color-paper) 50%, var(--color-ink) 50%)",
                    }}
                  />
                )}
              </div>

              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.8rem" }}>
                {item.time}
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: "0 0 0.5rem" }}>
                {item.title}
              </h3>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem" }}>
                {item.tag}
              </span>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "4.5rem", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "126ch", width: "100%" }}>
          <ImagePlaceholder label="ảnh · retreat ở-yên" aspectRatio="32/9" src="/assets/ngayhien_oyen04.webp" objectPosition="center 70%" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>những gì diễn ra trong chuyến đi</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        <ActivityPicker items={activities} />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Link href={routes.retreatOYenLichTrinh} className="cta-btn">
          xem lịch trình tham khảo <span className="ar">→</span>
        </Link>
      </div>

      <div className="wrap" style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={38} />
      </div>
      <div className="wrap" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ textAlign: "center", color: "var(--color-cham-dem)" }}>
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

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>hình thức</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "500px" }}>
        {formatList.map((row) => (
          <div key={row.label} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: "0.85rem 0", borderBottom: "1px solid var(--color-mist)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>{row.label}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-ink)", textAlign: "right" }}>{row.val}</span>
          </div>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ textAlign: "center", color: "var(--color-cham-dem)" }}>
          chi phí tham gia
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <div style={{ textAlign: "center", padding: "2.5rem 2rem", border: "1px solid var(--color-mist)", borderRadius: "0.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.6rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>6.000.000đ</span>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>4 ngày 3 đêm</span>
            </div>
            <div style={{ color: "var(--color-mist)" }}>·</div>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.6rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>8.000.000đ</span>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>5 ngày 4 đêm</span>
            </div>
          </div>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.5rem" }}>mỗi người</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 1.5rem" }}>
            trẻ em đi cùng bố mẹ , &lt;5 tuổi: 50% phí · &lt; 10 tuổi: 80% phí
          </p>
          <RegistrationLink href="https://forms.gle/Ra77c8s5cH6WeL5e7" programName="retreat ở-yên" className="cta-btn">
            đăng ký retreat ở-yên <span className="ar">→</span>
          </RegistrationLink>
        </div>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.6rem, 10vw, 5.5rem)", lineHeight: 0.85, color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>+80</span>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-ink)", marginBottom: "0.4rem" }}>chuyến retreat</span>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.6rem" }}>trong 3 năm qua</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.2rem" }}>
          mlf không hứa hẹn một điều gì lớn lao. chỉ là một không gian đủ dịu dàng, để bạn tự khám phá điều mình thực sự cần.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          mỗi chuyến retreat đều có một chủ đề riêng, tạo nên bầu không khí và trải nghiệm riêng — dựa trên sự tham gia của bạn, nhà mộc sẽ thiết kế lịch trình để thật sự xuôi dòng. khi bạn nhắn cho nhà mộc, sẽ có một buổi trao đổi ngắn để cùng thiết kế lịch trình và chủ đề riêng cho nhóm của bạn, trước khi xác nhận ngày.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "1rem 0 0" }}>
          lưu ý: lịch trình chi tiết sẽ được gửi vào từng ngày diễn ra retreat, để giữ tính thong thả, uyển chuyển.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0.6rem 0 0" }}>
          Hãy dành chút thời gian tham khảo{" "}
          <a
            className="mono-link"
            href="https://drive.google.com/drive/folders/1-7MjR-JgDzeJun3yySYNlU4GnXwwxJmq?usp=sharing"
            target="_blank"
            rel="noopener"
            style={{ fontFamily: "var(--font-sans)", display: "inline", overflow: "visible" }}
          >
            nếp nhà mộc little farm
          </a>{" "}
          để hiểu hơn về nếp sống nơi này.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "3rem" }}>
        <FaqShowMore items={faqs} />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "1rem" }}>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>CHÍNH SÁCH TRỢ DUYÊN</span>}>
          <div>
            <p style={proseP}>
              Nhà mộc mong rằng các chương trình của mlf little farm ít nhiều sẽ mang lại sự lợi lạc cho mọi người. Nếu bạn cảm thấy có sự kết nối và muốn góp phần lan tỏa hành trình của mlf đến với nhiều người hơn, bạn có thể chung tay trợ duyên cho người hữu duyên thông qua các chương trình retreat hàm-dưỡng, retreat ở-yên, retreat an-vui &amp; online retreat khai tâm.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
              <b>tài trợ tùy duyên</b> - bạn có thể trợ duyên cho các chương trình retreat giúp mlf mở rộng vòng tay đến nhiều người cần sự bình an và chuyển hóa hơn.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
              <b>nhận hỗ trợ</b> - những ai thật sự cần đến retreat có thể nhận trợ duyên để tham gia các chương trình của mlf.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
              Để tài trợ: mọi đóng góp, dù lớn dù nhỏ, đều có ý nghĩa rất lớn đối với chúng tôi. Xin hoan hỷ ghi rõ nội dung đóng góp &ldquo;trợ duyên mlf&rdquo; khi chuyển khoản tới: Ngân hàng Vietcombank · STK: 7945672381 · Chủ TK: Hồ Thành Tâm.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
              Để nhận hỗ trợ: khi đăng ký chương trình retreat, bạn có thể cân nhắc lựa chọn các mức hỗ trợ (10% – 20%) phù hợp với nhu cầu của bản thân. Chúng tôi sẽ xác nhận việc hỗ trợ dựa trên mức sẵn có của quỹ trợ duyên.
            </p>
          </div>
        </Disclosure>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>CHÍNH SÁCH HỦY / HOÀN</span>}>
          <div>
            {policyLines.map((line) => (
              <p key={line} style={proseP}>
                {line}
              </p>
            ))}
          </div>
        </Disclosure>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>CÁCH DI CHUYỂN TỚI MĂNG ĐEN</span>}>
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
        <Link href={routes.specialTreat} style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)", textDecoration: "none", marginTop: "0.8rem", paddingBottom: "0.8rem", borderBottom: "1px solid var(--color-mist)" }} className="mono-link">
          special treat: dành cho khách quen <span className="ar">→</span>
        </Link>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "4rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <RegistrationLink href="https://forms.gle/Ra77c8s5cH6WeL5e7" programName="retreat ở-yên" className="cta-btn">
            đăng ký retreat ở-yên <span className="ar">→</span>
          </RegistrationLink>
          <Link href={routes.soTayKhach} className="cta-btn cta-btn--outline">
            đọc guest guide <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ display: "block", marginBottom: "0.9rem", color: "var(--color-cham-dem)" }}>
          tham khảo thêm hành trình khác
        </span>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.6rem 1rem" }}>
          <Link className="mono-link" href={routes.stayTalk} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            stay+talk
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

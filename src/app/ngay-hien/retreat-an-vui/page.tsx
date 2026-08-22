import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { DayCard } from "@/components/DayCard";
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
  fontSize: "1.05rem",
  lineHeight: 1.9,
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
          buông · thả lỏng · vui lại
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {journeySubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>/</span> : null}
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

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · retreat an-vui 1" aspectRatio="16/12" src="/assets/ngayhien_anvui_01.webp" alt="retreat an-vui" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · retreat an-vui 2" aspectRatio="16/12" src="/assets/ngayhien_anvui_02.webp" alt="retreat an-vui" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · retreat an-vui 3" aspectRatio="16/12" src="/assets/ngayhien_anvui_03.webp" alt="retreat an-vui" style={{ width: "100%", height: "auto" }} />
      </div>

      <div style={{ height: "2rem" }}></div>

      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1rem" }}>
          ta từng sống cho con cháu, cho gia đình đến mức quên rằng thời gian của riêng mình cũng đang trôi.
        </p>

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          an-vui là những ngày dừng-lại. để thả lỏng gánh nặng đã mang, chăm lại sức khỏe và đời sống tinh thần, tìm lại niềm vui và cảm hứng.
        </p>
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <span className="eyebrow" style={{ marginBottom: "0.6rem", color: "var(--color-cham-dem)" }}>an-vui là</span>
        {anVuiLa.map((item) => (
          <div key={item} className="who-item" style={{ opacity: 1, transform: "none", padding: "0.1rem 0", justifyContent: "center" }}>
            <span className="who-mark">⸺</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: "3rem 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "180px", height: "140px" }}>
          <Image src="/assets/nauan.webp" alt="nauan" fill sizes="180px" style={{ objectFit: "contain" }} />
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

      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "760px", width: "100%" }}>
        <span className="eyebrow" style={{ marginBottom: "2rem", color: "var(--color-cham-dem)", textAlign: "center", display: "block" }}>
          03 không gian
        </span>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {threeSpaces.map((s, idx) => (
            <Reveal key={s.title} style={{ flex: "1 1 200px", maxWidth: "240px", padding: "0 1.6rem", textAlign: "center", borderLeft: idx > 0 ? "1px solid var(--color-mist)" : "none" }}>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--color-stone)", marginBottom: "0.8rem" }}>
                0{idx + 1}
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.6rem", color: "var(--color-ink)", marginBottom: "0.7rem" }}>
                {s.title}
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)" }}>
                {s.desc}
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>nhịp của một chuyến đi</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {rhythmBlocks.map((b, idx) => (
          <Reveal key={b.title} style={{ display: "flex", gap: "1.4rem", padding: "1.5rem 0", borderBottom: idx < rhythmBlocks.length - 1 ? "1px solid var(--color-mist)" : "none" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-stone)", flexShrink: 0, paddingTop: "0.2rem" }}>
              0{idx + 1}
            </span>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.1rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
                {b.title}
              </span>
              <div>
                {Array.isArray(b.body) ? (
                  b.body.map((para, i) => (
                    <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: i > 0 ? "1rem 0 0" : 0 }}>
                      {para}
                    </p>
                  ))
                ) : (
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>{b.body}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div style={{ marginBottom: "4.5rem", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "126ch", width: "100%" }}>
          <ImagePlaceholder label="ảnh · làm bánh quê cùng cô chú" aspectRatio="32/9" src="/assets/ngayhienanvui44.webp" objectPosition="center bottom" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "48ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.2rem, 3vw, 1.5rem)", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
          đây là không gian để 4 người cùng tuổi, cùng một đoạn đời — gặp nhau để chia sẻ và thấu hiểu.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ ...proseP, margin: 0 }}>
          toàn bộ hành trình là ăn chay thanh nhẹ — các bữa ăn, bánh, thức uống đều tự tay làm bởi mlf. tại mlf, không sử dụng các gia vị công nghiệp trong chế biến, chú trọng hài hòa nguyên tắc ăn uống âm-dương.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>lịch trình</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        {days.map((d) => (
          <Reveal key={d.n} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div style={{ backgroundColor: "#faf8f3", padding: "2.5rem", borderRadius: "0.5rem", maxWidth: "83ch", width: "100%" }}>
              <div style={{ marginBottom: "-3.5rem" }}>
                <DayCard dayNum={d.n} title={d.title} note={d.note} rows={d.rows} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>thông tin chương trình</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2rem", maxWidth: "500px" }}>
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

      <div className="wrap" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>lịch retreat trong năm 2026</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "560px" }}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {schedule2026.map((s, idx) => {
            const match = s.match(/^(\d+)\s*–\s*(\d+)\.(\d+)\.(\d+)\s*\((.+)\)$/);
            const [, dayFrom, dayTo, month, year, weekday] = match ?? ["", "", "", "", "", s];
            return (
              <Reveal key={s} style={{ flex: "1 1 220px", maxWidth: "260px", padding: "0 2rem", textAlign: "center", borderLeft: idx > 0 ? "1px solid var(--color-mist)" : "none" }}>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "2.4rem", lineHeight: 1, color: "var(--color-cham-dem)", marginBottom: "0.6rem" }}>
                  {dayFrom}–{dayTo}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink)", marginBottom: "0.8rem" }}>
                  tháng {month} · {year}
                </span>
                <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-stone-alt)", padding: "0.3rem 0.8rem", border: "1px solid var(--color-mist)", borderRadius: "999px" }}>
                  {weekday}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={38} />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.6rem, 10vw, 5.5rem)", lineHeight: 0.85, color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>+80</span>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-ink)", marginBottom: "0.4rem" }}>chuyến retreat</span>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.6rem" }}>trong 3 năm qua</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          mlf không hứa hẹn một điều gì lớn lao. chỉ là một không gian đủ dịu dàng, để cô chú tự khám phá điều mình thực sự cần.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0.8rem 0 0" }}>
          mỗi chuyến retreat đều có một chủ đề riêng, tạo nên bầu không khí và trải nghiệm riêng — dựa trên sự tham gia của cô chú, nhà mộc sẽ thiết kế lịch trình để thật sự xuôi dòng.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone-alt)", margin: "0.8rem 0 0" }}>
          lưu ý: lịch trình chi tiết sẽ được gửi vào từng ngày diễn ra retreat, để giữ tính thong thả, uyển chuyển.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone-alt)", margin: "0.6rem 0 0" }}>
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

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>các vấn đề về y tế — an toàn</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        {medicalFaqs.map((item) => (
          <div key={item.q} style={{ paddingLeft: "1.5rem" }}>
            <Disclosure trigger={<span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.9rem", color: "var(--color-ink)" }}>{item.q}</span>}>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone)", margin: 0 }}>{item.a}</p>
            </Disclosure>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <FaqShowMore items={faqs} />
      </div>

      <div className="wrap" style={{ marginBottom: "1rem" }}>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>CHÍNH SÁCH TRỢ DUYÊN</span>}>
          <div>
            <p style={proseP}>
              Chúng tôi mong rằng các chương trình của mộc little farm ít nhiều sẽ mang lại sự lợi lạc cho mọi người. Nếu bạn cảm thấy có sự kết nối và muốn góp phần lan tỏa hành trình của mlf đến với nhiều người hơn, bạn có thể chung tay trợ duyên cho người hữu duyên thông qua các chương trình retreat hàm-dưỡng, retreat ở-yên, retreat an-vui &amp; online retreat khai tâm.
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
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "4rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="https://forms.gle/EFyZNdUjt4zFo7fR9" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            đăng ký <span className="ar">→</span>
          </a>
          <Link href={routes.soTayKhach} className="cta-btn cta-btn--outline">
            đọc guest guide <span className="ar">→</span>
          </Link>
        </div>

        <span className="eyebrow" style={{ display: "block", marginBottom: "0.9rem", color: "var(--color-ink)" }}>
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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { DayCard } from "@/components/DayCard";
import { PricingPanel } from "@/components/PricingPanel";
import { FaqShowMore } from "@/components/FaqShowMore";
import { Disclosure } from "@/components/Disclosure";
import { routes } from "@/lib/nav";
import {
  introLines,
  hamDuongLa,
  baKhongGian,
  baNguoiDanDuong,
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
  description: "ươm mầm lời giải",
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
          ươm mầm lời giải
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {journeySubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>/</span> : null}
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

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · retreat hàm-dưỡng 1" aspectRatio="16/12" src="/assets/ngayhien_hamduong_01.webp" alt="retreat hàm-dưỡng" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · retreat hàm-dưỡng 2" aspectRatio="16/12" src="/assets/ngayhien_hamduong_2.webp" alt="retreat hàm-dưỡng" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · retreat hàm-dưỡng 3" aspectRatio="16/12" src="/assets/ngayhien_hamduong_03.webp" alt="retreat hàm-dưỡng" style={{ width: "100%", height: "auto" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "4rem", marginBottom: "5rem", maxWidth: "52ch" }}>
        {introLines.map((line) => (
          <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.95, color: "var(--color-ink)", margin: "0 0 1.3rem", textAlign: "center" }}>
            {line}
          </p>
        ))}
      </Reveal>

      <div style={{ padding: "3rem 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: "180px", aspectRatio: "180/140" }}>
          <Image src="/assets/chentra.webp" alt="chentra" fill sizes="180px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "6rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1rem" }}>
          <strong>retreat tại mlf không bó buộc theo lịch trình nặng nề</strong>
        </p>
        <ul style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.2rem", paddingLeft: "1.5rem" }}>
          <li style={{ marginBottom: "0.8rem" }}>chỉ đơn giản là thuận theo dòng chảy, để mọi thứ xảy đến</li>
          <li style={{ marginBottom: 0 }}>tập hồn nhiên như cây cỏ, linh hoạt như nước, bao dung như đất, thấu tỏ như ánh sáng.</li>
        </ul>
      </Reveal>

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "3.5rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.3rem, 3vw, 1.7rem)", lineHeight: 1.5, color: "var(--color-ink)" }}>
          mộc little farm — nơi ươm mầm cho những lời giải
        </span>
      </Reveal>

      <div style={{ marginBottom: "3rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ marginBottom: "4.5rem" }}>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.4rem" }}>
            hàm-dưỡng là
          </span>
          {hamDuongLa.map((item) => (
            <div key={item} className="who-item" style={{ opacity: 1, transform: "none", padding: "0.1rem 0", justifyContent: "center" }}>
              <span className="who-mark">⸺</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="wrap" style={{ marginBottom: "2rem", maxWidth: "760px", width: "100%" }}>
          <span className="eyebrow" style={{ marginBottom: "2rem", color: "var(--color-cham-dem)", textAlign: "center", display: "block" }}>
            03 không gian
          </span>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {baKhongGian.map((item, idx) => (
              <Reveal key={item.label} style={{ flex: "1 1 200px", maxWidth: "240px", padding: "0 1.6rem", borderLeft: idx > 0 ? "1px solid var(--color-mist)" : "none" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--color-stone)", marginBottom: "0.8rem" }}>
                  0{idx + 1}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.6rem", color: "var(--color-ink)", marginBottom: "0.7rem" }}>
                  {item.label}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-stone-alt)" }}>
                  {item.desc}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="wrap" style={{ marginBottom: "2rem", marginTop: "4rem", maxWidth: "760px", width: "100%" }}>
          <span className="eyebrow" style={{ marginBottom: "2rem", color: "var(--color-cham-dem)", textAlign: "center", display: "block" }}>
            03 người dẫn đường
          </span>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {baNguoiDanDuong.map((item, idx) => (
              <Reveal key={item.label} style={{ flex: "1 1 200px", maxWidth: "240px", padding: "0 1.6rem", borderLeft: idx > 0 ? "1px solid var(--color-mist)" : "none" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--color-stone)", marginBottom: "0.8rem" }}>
                  0{idx + 1}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.6rem", color: "var(--color-ink)", marginBottom: "0.7rem" }}>
                  {item.label}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-stone-alt)" }}>
                  {item.desc}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "52ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.2rem, 3vw, 1.5rem)", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1.6rem" }}>
          đây không phải một khóa học,<br />cũng không phải một chuyến nghỉ dưỡng.
        </p>

        <Motif name="dom-muc" size={30} />

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "1.6rem 0 1.2rem" }}>
          <strong>ta cùng sống</strong> —
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginBottom: "1.8rem" }}>
          {["nấu những bữa ăn đơn giản", "chuẩn bị", "thu dọn", "chạm vào từng việc nhỏ bằng sự có mặt"].map((tag) => (
            <span key={tag} style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-ink)", padding: "0.45rem 0.9rem", border: "1px solid var(--color-mist)", borderRadius: "999px" }}>
              {tag}
            </span>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-stone)", margin: 0 }}>
          không đi tìm giải pháp,<br />ta chỉ nhìn lại sự thật trong lòng mình.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "3rem", display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "#faf8f3", padding: "2.5rem", borderRadius: "0.5rem", maxWidth: "73ch", width: "100%" }}>
          <div style={{ marginBottom: "-3.5rem" }}>
          <DayCard
            title="một ngày ở mlf"
            rows={[
              { time: "5:00", activity: "thức dậy" },
              { time: "5:30–6:30", activity: "cùng nấu bữa sáng" },
              { time: "6:30–7:30", activity: "ăn sáng & nhận thông điệp đầu ngày" },
              { time: "8:00–11:00", activity: "đi ra để đi vào — rừng, bản làng, suối" },
              { time: "11:30–12:30", activity: "ăn trưa trong chánh niệm — một mình, im lặng" },
              { time: "12:30–17:00", activity: "thực tập ngồi với mình & thời gian tự do" },
              { time: "17:00–19:30", activity: `đạo của bếp & tiệc tối "đêm thương mình"` },
              { time: "19:30–21:00", activity: "kết nối — xem phim / đọc sách / hát ca" },
              { time: "21:00–21:30", activity: "soi chiếu, ngồi lại và chia sẻ" },
              { time: "21:30", activity: "đi ngủ" },
            ]}
          />
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <span className="eyebrow" style={{ marginBottom: "3rem", color: "var(--color-cham-dem)", textAlign: "center", display: "block" }}>
          03 điểm chạm
        </span>

        <div style={{ position: "relative" }}>
          {/* day-arc line */}
          <div style={{ position: "absolute", top: "6px", left: "6%", right: "6%", height: "1px", background: "var(--color-mist)" }} />

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2.2rem" }}>
            {[
              { time: "sáng", mark: { size: 8, fill: "none" }, body: "đi ra để đi vào: ra rừng, ra đồi, ra suối, trò chuyện sâu" },
              { time: "trưa", mark: { size: 15, fill: "var(--color-ink)" }, body: "ngồi với mình: chọn một thực hành chậm (viết tự do, vẽ, pha trà, nằm nghe hơi thở, làm thủ công, vào bếp)" },
              { time: "tối", mark: { size: 8, fill: "var(--color-cham-dem)" }, body: "đêm kết nối: xem phim hoặc đọc sách cùng nhau, rồi ngồi lại trở về hơi thở" },
            ].map((item) => (
              <Reveal key={item.time} style={{ flex: "1 1 200px", maxWidth: "260px", position: "relative", paddingTop: "1.8rem", textAlign: "center" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    width: item.mark.size,
                    height: item.mark.size,
                    borderRadius: "50%",
                    background: item.mark.fill,
                    border: item.mark.fill === "none" ? "1.5px solid var(--color-ink)" : "none",
                    transform: "translateX(-50%)",
                  }}
                />
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>
                  {item.time}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.75, color: "var(--color-ink)" }}>
                  {item.body}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "500px" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.2rem" }}>
          03 buổi uống trà
        </span>
        <div>
          {[
            { label: "uống trà cùng Thuận", val: "trở về thân" },
            { label: "cùng Vũ", val: "trở về nếp sống" },
            { label: "cùng Tâm", val: "soi chiếu & thấy rõ" },
          ].map((item) => (
            <div key={item.label} className="info-row">
              <span className="info-label" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9rem", textTransform: "none", letterSpacing: 0, color: "var(--color-ink)" }}>{item.label}</span>
              <span className="info-val">{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.2rem" }}>
          bộ công án
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          mỗi chuyến retreat có một bộ 5 công án thiết kế riêng — mạch dẫn xuyên suốt 5 ngày tại mlf.
        </p>
      </div>

      <div style={{ marginBottom: "4.5rem", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "126ch", width: "100%" }}>
          <ImagePlaceholder label="ảnh · đêm kết nối tại mlf" aspectRatio="32/9" src="/assets/ngayhien_hamduong_44.webp" objectPosition="center 70%" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch", textAlign: "left" }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
            thiên nhiên làm mềm tâm
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
            nếp sống chậm làm mềm thân
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
            sự có mặt của mọi người làm mềm cái tôi
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
            những điểm chạm trong ngày nhẹ nhàng đưa tâm trở về
          </p>
        </div>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "1.2rem 0" }}>
          khi ấy câu trả lời thường đến trong những khoảnh khắc rất mộc mạc:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "1.2rem" }}>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-stone)", minWidth: "fit-content" }}>•</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)" }}>khi ngồi bên suối, lắng tiếng nước,</span>
          </div>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-stone)", minWidth: "fit-content" }}>•</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)" }}>khi bước dưới rừng thông và nghe lại nhịp chân mình,</span>
          </div>
          <div style={{ display: "flex", gap: "0.8rem" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-stone)", minWidth: "fit-content" }}>•</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)" }}>khi ngồi quanh lửa tối và một câu hỏi khẽ chạm vào lòng.</span>
          </div>
        </div>

        <div>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
            mọi câu trả lời đều có sẵn.
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
            chỉ cần một nơi đủ hiền để chúng tự mở ra.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          retreat này không giống bất kỳ chương trình nào
        </p>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "1rem 0 0" }}>
          vì ta không đi "học",<br/>
          ta chỉ đi sống.
        </p>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "1rem 0 0" }}>
          vì không đi tìm "giải pháp",<br/>
          ta chỉ nhìn lại sự thật trong lòng mình.
        </p>

      </div>

      <div className="wrap" style={{ marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
        <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          <span className="eyebrow" style={{ marginBottom: "0.3rem", color: "var(--color-cham-dem)", display: "block" }}>
            retreat 4-mùa-hàm-dưỡng
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>05 ngày 04 đêm</span>
        </div>

        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Timeline line - centered */}
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0, bottom: 0, width: "1px", background: "var(--color-mist)" }} />

          {/* Timeline items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "400px", width: "100%" }}>
            {seasons.map((s, idx) => (
              <Reveal key={s.name}>
                <div style={{ display: "flex", gap: "1.5rem", position: "relative", alignItems: "flex-start" }}>
                  {/* Timeline dot - centered */}
                  <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "0.35rem", width: "10px", height: "10px", background: "var(--color-ink)", borderRadius: "50%", border: "3px solid white", boxShadow: "0 0 0 1px var(--color-ink)", zIndex: 1 }} />

                  {/* Content - left side */}
                  <div style={{ width: "50%", paddingRight: "1.5rem", textAlign: "right" }}>
                    <div style={{ marginBottom: "0.6rem" }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)", display: "block", marginBottom: "0.3rem" }}>
                        {s.name}
                      </span>
                      <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-stone)", display: "block", marginBottom: "0.4rem" }}>
                        {s.theme}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.04em", color: "var(--color-cham-dem)" }}>
                        {s.dates}
                      </span>
                    </div>
                  </div>

                  {/* Empty space for right side */}
                  <div style={{ width: "50%" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", marginTop: "8rem", maxWidth: "500px" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.64rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.2rem" }}>
          thông tin chương trình
        </span>
        <div>
          {[
            { label: "thời gian", val: "5 ngày 4 đêm" },
            { label: "giới hạn", val: "6 khách / chuyến" },
            { label: "bao gồm", val: "bảo hiểm du lịch" },
            { label: "độ tuổi", val: "từ 15 tuổi" },
            { label: "đón/trả khách", val: "tại thị trấn Măng Đen" },
          ].map((item) => (
            <div key={item.label} className="info-row">
              <span className="info-label">{item.label}</span>
              <span className="info-val">{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "26rem" }}>
        <PricingPanel
          label="5 ngày 4 đêm"
          subtitle="mỗi người"
          price="8.000.000đ"
          items={pricingItems}
          note="việc ở cùng phòng sẽ được sắp xếp tùy vào số lượng khách"
          ctaLabel="đăng ký retreat hàm-dưỡng"
          ctaHref="https://forms.gle/RL8yW96QMBZm7UxD9"
        />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={38} />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.6rem, 10vw, 5.5rem)", lineHeight: 0.85, color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>+80</span>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-ink)", marginBottom: "0.4rem" }}>chuyến retreat</span>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.6rem" }}>trong 3 năm qua</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.2rem" }}>
          nhà mộc không hứa hẹn một điều gì lớn lao. chỉ là một không gian đủ dịu dàng, để bạn tự khám phá điều mình thực sự cần.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          mỗi chuyến retreat đều có một chủ đề riêng, tạo nên bầu không khí và trải nghiệm riêng — dựa trên sự tham gia của bạn, nhà mộc sẽ thiết kế lịch trình để thật sự xuôi dòng.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone-alt)", margin: "0.8rem 0 0" }}>
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

      <div className="wrap" style={{ marginBottom: "1rem" }}>
        <Disclosure trigger={<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>CHÍNH SÁCH TRỢ DUYÊN</span>}>
          <div>
            <p style={proseP}>
              Nhà mộc mong rằng các chương trình của mlf little farm ít nhiều sẽ mang lại sự lợi lạc cho mọi người. Nếu bạn cảm thấy có sự kết nối và muốn góp phần lan tỏa hành trình của mlf đến với nhiều người hơn, bạn có thể chung tay trợ duyên cho người hữu duyên thông qua các chương trình retreat hàm-dưỡng, ở-yên, an-vui &amp; online retreat khai tâm.
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
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>
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
          <a href="https://forms.gle/RL8yW96QMBZm7UxD9" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            đăng ký retreat hàm-dưỡng <span className="ar">→</span>
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

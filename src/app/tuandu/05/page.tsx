import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { DayItinerary } from "@/components/DayItinerary";
import { Accordion } from "@/components/Accordion";
import { FaqAccordion } from "@/components/FaqAccordion";
import { routes } from "@/lib/nav";
import {
  heroMeta,
  loiNgoAfterTitle,
  loiNgoAfter,
  loiNgoStops,
  loiNgoClose,
  forWhom,
  features,
  routeStats,
  routeDays,
  destinations,
  days,
  stays,
  practical,
  includes,
  milestones,
  notes,
  refunds,
  faqs,
} from "@/data/tuanDuToi";

export const metadata: Metadata = {
  title: "tuần-du tới · chuông vọng hai bờ",
  description: "tuần-du 05 · chuông vọng hai bờ — 26.03 – 30.03.2027, 5 ngày 4 đêm qua Hà Nội, Ninh Bình, Thái Bình, Hải Phòng, Quảng Ninh, Hải Dương, Bắc Ninh. Đi giữa hai tiếng chuông, để nghe cái lặng ở sau cả hai.",
};

const bodyP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.95,
  color: "var(--color-ink)",
  margin: "0 0 1.15rem",
  textAlign: "justify",
};

const label: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "0.58rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--color-stone)",
};

export default function TuanDu05Page() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "tuần-du", href: routes.tuanDu }, { label: "tuần-du tới" }]} />
        <span className="eyebrow">26.03 – 30.03.2027 · <span style={{ color: "var(--color-cham-dem)" }}>sắp diễn ra</span></span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
          chuông vọng hai bờ
        </h1>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--color-stone-alt)", marginBottom: "2rem" }}>
          chuông ngân giữa cõi, người về giữa tâm.
        </span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))", gap: "1.5rem", borderTop: "1px solid var(--color-mist)", paddingTop: "1.5rem" }}>
          {heroMeta.map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={label}>{m.label}</span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", lineHeight: 1.4, color: "var(--color-ink)" }}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 540 }}>
        <ImagePlaceholder label="ảnh · suối Yến, chùa Hương" aspectRatio="auto" src="/assets/suoiyen.webp" alt="suối Yến, chùa Hương" style={{ height: "100%" }} />
      </div>

      {/* ============ LỜI NGỎ ============ */}
      <div className="wrap" style={{ marginTop: "4.5rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow">lời ngỏ</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          {loiNgoAfterTitle}
        </p>
        {loiNgoAfter.map((p) => (
          <p key={p} style={bodyP}>
            {p}
          </p>
        ))}
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        {loiNgoStops.map((s) => (
          <div key={s.place} style={{ display: "flex", gap: "0.8rem", padding: "0.55rem 0" }}>
            <span style={{ color: "var(--color-stone)", flexShrink: 0 }}>·</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.02rem", lineHeight: 1.8, color: "var(--color-ink)" }}>
              <strong style={{ fontWeight: 600, color: "var(--color-ink)" }}>{s.place}</strong>, {s.location} — {s.desc}
            </span>
          </div>
        ))}
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {loiNgoClose.map((p, i) => (
          <p key={p} style={{ ...bodyP, margin: i === loiNgoClose.length - 1 ? 0 : "0 0 1.15rem" }}>
            {p}
          </p>
        ))}
      </Reveal>

      {/* ============ DÀNH CHO AI ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">dành cho ai</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 3.6vw, 2.2rem)", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          Không đòi bạn theo đạo nào, cũng không đòi bạn không theo đạo nào.
        </h2>
        {forWhom.map((p) => (
          <p key={p} style={bodyP}>
            {p}
          </p>
        ))}
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
          Cái động đậy đó chính là bài.
        </p>
      </Reveal>

      {/* ============ MỘT HÀNH TRÌNH CÓ LỚP LANG ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">một hành trình có lớp lang</span>
      </div>
      <Reveal className="wrap feat-grid" style={{ marginTop: "1.5rem", marginBottom: "5rem" }}>
        {features.map((f) => (
          <div key={f.title}>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.6rem", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>{f.icon}</span>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink)", marginBottom: "0.5rem" }}>{f.title}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.75, color: "var(--color-stone-alt)", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </Reveal>

      {/* ============ CUNG ĐƯỜNG ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">cung đường</span>
      </div>
      <Reveal className="wrap" style={{ maxWidth: "56ch", marginBottom: "2.5rem" }}>
        <p style={{ ...bodyP, margin: 0 }}>
          Ba ngày đầu đi qua đồng bằng, nơi con người dựng nhà cho cái thiêng: chùa gỗ, nhà thờ gạch, đan viện, tháp chuông. Hai ngày cuối đi lên núi, nơi cái thiêng ẩn hiện trong mây ngàn.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ position: "relative", paddingLeft: "2.4rem", marginBottom: "3.5rem" }}>
        <div style={{ position: "absolute", left: "1.05rem", top: "0.6rem", bottom: "2.4rem", width: 1, background: "var(--color-mist)" }} />
        {routeDays.map((d) => (
          <div key={d.n} style={{ position: "relative", paddingBottom: "2rem" }}>
            <span
              style={{
                position: "absolute",
                left: "-2.4rem",
                top: "0.05rem",
                width: "2.1rem",
                height: "2.1rem",
                borderRadius: "50%",
                border: `1px solid ${d.pause ? "var(--color-cham-dem)" : "var(--color-stone)"}`,
                background: d.pause ? "var(--color-cham-dem)" : "var(--color-paper)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                color: d.pause ? "var(--color-paper)" : "var(--color-stone)",
              }}
            >
              {d.n}
            </span>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", flexWrap: "wrap", paddingTop: "0.3rem" }}>
              <span
                style={{
                  fontFamily: d.pause ? "var(--font-serif)" : "var(--font-sans)",
                  fontStyle: d.pause ? "italic" : "normal",
                  fontSize: d.pause ? "1.05rem" : "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--color-ink)",
                }}
              >
                {d.route}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-stone)", whiteSpace: "nowrap" }}>{d.km}</span>
            </div>
          </div>
        ))}
      </Reveal>

      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))", gap: "1.5rem", borderTop: "1px solid var(--color-mist)", paddingTop: "1.5rem", marginBottom: "5rem" }}>
        {routeStats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "1.9rem", color: "var(--color-ink)", lineHeight: 1.1 }}>{s.value}</span>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)", marginTop: "0.5rem" }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ============ NƠI ĐẾN ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">nơi đến</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.25, color: "var(--color-ink)", margin: 0 }}>
          nơi chạm tâm
        </h2>
      </Reveal>
      <RevealStagger className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.25rem 1.75rem", marginBottom: "5rem" }}>
        {destinations.map((d) => (
          <div key={d.place}>
            <ImagePlaceholder label={`ảnh · ${d.place}`} aspectRatio="4/3" src={d.src} alt={d.place} style={{ marginBottom: "1rem" }} />
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-ink)", marginBottom: "0.2rem" }}>{d.place}</span>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.6rem" }}>{d.location}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.75, color: "var(--color-stone-alt)", margin: 0 }}>{d.desc}</p>
          </div>
        ))}
      </RevealStagger>

      <div style={{ marginBottom: "5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · am Ngọa Vân trong sương" aspectRatio="auto" src="/assets/langthiengoavan.webp" alt="am Ngọa Vân trong sương" style={{ height: "100%" }} />
      </div>

      {/* ============ NĂM NGÀY, NĂM LỚP ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">năm ngày, năm lớp</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.25, color: "var(--color-ink)", margin: 0 }}>
          Câu chuyện của mỗi ngày
        </h2>
      </Reveal>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        {days.map((d, i) => (
          <DayItinerary key={d.n} day={d} first={i === 0} />
        ))}
      </div>

      {/* ============ LƯU TRÚ ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">nơi lưu trú</span>
      </div>
      <RevealStagger className="wrap stays-grid" style={{ marginBottom: "5rem" }}>
        {stays.map((s) => (
          <div key={s.place}>
            <div className="flip-card" style={{ aspectRatio: "4/3", marginBottom: "1rem" }}>
              <div className="flip-card-inner">
                <div className="flip-face">
                  <ImagePlaceholder label={`ảnh · ${s.place}`} aspectRatio="4/3" src={s.src} alt={s.place} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="flip-face flip-face-back">
                  <ImagePlaceholder label="ảnh · phòng nghỉ" aspectRatio="4/3" src={s.roomSrc} alt={`phòng nghỉ · ${s.place}`} style={{ width: "100%", height: "100%" }} />
                </div>
              </div>
            </div>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--color-ink)", marginTop: "0.3rem", marginBottom: "0.3rem" }}>{s.place}</span>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.7rem" }}>{s.meta}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.75, color: "var(--color-stone-alt)", margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </RevealStagger>

      {/* ============ VÀI ĐIỀU THỰC TẾ ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">vài điều thực tế</span>
      </div>
      <div className="wrap info-grid" style={{ marginBottom: "2.25rem" }}>
        {practical.map((p) => (
          <div key={p.label}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.45rem" }}>{p.label}</span>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-ink)", lineHeight: 1.4 }}>{p.value}</span>
            {p.note ? (
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.76rem", color: "var(--color-stone-alt)", marginTop: "0.25rem" }}>{p.note}</span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="wrap" style={{ marginBottom: "2rem" }}>
        <div style={{ border: "1px solid var(--color-mist)", padding: "1.75rem 2rem" }}>
          {includes.map((i) => (
            <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0 0 0.45rem", paddingLeft: "1rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--color-stone)" }}>—</span>
              {i}
            </p>
          ))}
        </div>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem" }}>
        <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.1rem 1.5rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
            Người tham gia tự sắp xếp vé máy bay đến và rời Hà Nội theo lịch trình. Điểm đón đoàn tại sân bay Nội Bài lúc 08:00 sáng 26.03.2027 · trả đoàn tại sân bay Nội Bài lúc 19:00 tối 30.03.2027.
          </p>
        </div>
      </div>

      {/* ============ ĐIỀU LÀM NÊN HÀNH TRÌNH NÀY ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">điều làm nên hành trình này</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <div style={{ marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid var(--color-mist)" }}>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>vòng-trà</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
            Mỗi cuối ngày là một vòng-trà. Mọi người cùng ngồi xuống — nghe kể chuyện, nhìn lại một ngày vừa đi qua: đã đến những nơi nào, điều gì đã chạm tới mình, đã thấy ra điều gì. Rồi cùng ở yên trong đó, để cảm nhận rõ hơn những gì tâm mình vừa mở ra.
          </p>
        </div>
        <div>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>tuần-du ký</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
            Một quyển sách nhỏ được biên soạn riêng cho chuyến đi — giới thiệu câu chuyện văn hóa và lịch sử của những nơi đi qua, từ chùa Hương, Châu Sơn, chùa Keo, đến am Ngọa Vân và Thiền phái Trúc Lâm. Bên trong cũng có những gợi ý để cảm nhận, thực hành và ghi chép trong từng ngày của hành trình.
          </p>
        </div>
      </div>

      {/* ============ THÔNG TIN VÀ ĐĂNG KÝ ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">thông tin và đăng ký</span>
      </div>
      <div className="wrap info-grid" style={{ marginBottom: "2.5rem" }}>
        <div>
          <span style={label}>chi phí</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--color-ink)", marginTop: "0.45rem" }}>đang cập nhật</span>
          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.76rem", color: "var(--color-stone-alt)", marginTop: "0.25rem" }}>sẽ công bố cùng lịch trình chính thức</span>
        </div>
        <div>
          <span style={label}>số lượng tối đa</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--color-ink)", marginTop: "0.45rem" }}>10 người</span>
          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.76rem", color: "var(--color-stone-alt)", marginTop: "0.25rem" }}>nhóm nhỏ, tương tác sâu</span>
        </div>
      </div>
      <div className="wrap" style={{ marginBottom: "1rem" }}>
        <span className="eyebrow">các mốc cần lưu ý</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem" }}>
        {milestones.map((m) => (
          <div key={m.when} className="tl-row">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-stone)", lineHeight: 1.6 }}>{m.when}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-ink)" }}>{m.what}</span>
          </div>
        ))}
      </Reveal>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.1rem 1.5rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
            Nếu không nhận đủ tối thiểu 7 người tham gia, BTC sẽ hoãn hoặc hủy chương trình. Chi tiết lịch trình, vật dụng cần chuẩn bị, bảo hiểm và các cập nhật sẽ được gửi trong nhóm chat chung (Zalo) sau khi hoàn tất đăng ký.
          </p>
        </div>
      </div>

      {/* ============ CHÚ Ý ============ */}
      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-stone)" }}>
          chú ý
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {notes.map((n) => (
          <div key={n.title} style={{ paddingBottom: "2.25rem", marginBottom: "2.25rem", borderBottom: "1px solid var(--color-mist)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.6rem" }}>{n.title}</span>
            {n.body.map((p) => (
              <p key={p} style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 0.9rem", textAlign: "justify" }}>
                {p}
              </p>
            ))}
          </div>
        ))}
        <div style={{ borderLeft: "2px solid var(--color-cham-dem)", padding: "1.6rem 1.9rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.65, color: "var(--color-ink)", margin: 0 }}>
            &ldquo;Khi cùng nhau đi, cùng nhau dừng, cùng nhau cảm, tuần-du mới thực sự trở thành một dòng chảy. Và trong dòng chảy ấy, mỗi người đều được nâng đỡ một cách rất tự nhiên.&rdquo;
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3.5rem" }}>
        <Accordion label="chính sách hoàn hủy">
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.9rem" }}>
              1. huỷ từ phía người tham gia
            </span>
            {refunds.map((r) => (
              <div key={r.when} className="tl-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-stone)", lineHeight: 1.6 }}>{r.when}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-ink)" }}>{r.what}</span>
              </div>
            ))}
            <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.1rem 1.5rem", marginTop: "1.5rem" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 0.5rem" }}>Người tham gia có thể chuyển suất cho người khác (thông báo trước ít nhất 7 ngày).</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>Có thể bảo lưu chi phí để tham gia chuyến khác — áp dụng cho các trường hợp huỷ từ 30 ngày trở lên.</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "2.5rem", marginBottom: "2.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>2. huỷ do bất khả kháng</span>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--color-stone)", margin: "0 0 1.25rem" }}>Dịch bệnh, thiên tai, chiến tranh, chính sách nhà nước…</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="info-grid">
              <div style={{ padding: "1.5rem", border: "1px solid var(--color-mist)" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>từ phía BTC</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>Nếu BTC buộc phải huỷ chương trình, 100% chi phí sẽ được bảo lưu hoặc hoàn lại theo lựa chọn của người tham gia.</p>
              </div>
              <div style={{ padding: "1.5rem", border: "1px solid var(--color-mist)" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>từ phía người tham gia</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0 0 0.7rem" }}>Nếu không thể đến do lệnh cấm di chuyển hoặc lý do bất khả kháng, 100% chi phí được bảo lưu cho chương trình sau.</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>Nếu tự quyết định huỷ do lo ngại cá nhân, áp dụng chính sách huỷ thông thường ở mục 1.</p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "2.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.6rem" }}>
              3. huỷ từ phía BTC do không đủ số lượng
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.25rem", textAlign: "justify" }}>
              Trong trường hợp không nhận đủ tối thiểu 7 người tham gia, BTC sẽ hoãn hoặc huỷ chương trình. BTC sẽ xác nhận chuyến đi lần cuối trước 30 ngày khởi hành. Sau khi nhận xác nhận, người tham gia có thể sắp xếp đặt vé di chuyển đến Hà Nội.
            </p>
            <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.1rem 1.5rem" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 0.5rem" }}>Trường hợp huỷ chuyến, toàn bộ chi phí đặt cọc sẽ được BTC trả lại 100% trong vòng 7 ngày sau khi thông báo.</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
                BTC không khuyến cáo người tham gia đặt vé di chuyển đến Hà Nội trước khi nhận thông báo chính thức. Trong trường hợp phải huỷ vé, BTC không chịu trách nhiệm về chi phí hoàn vé tàu, máy bay.
              </p>
            </div>
          </div>
        </Accordion>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <FaqAccordion items={faqs} />
      </div>

      {/* ============ CTA ============ */}
      <div className="wrap" style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={38} />
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.6rem, 3.6vw, 2.2rem)", lineHeight: 1.5, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
          chuông ngân giữa cõi, người về giữa tâm.
        </h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--color-stone)", margin: "0 0 2rem" }}>26.03 – 30.03.2027 · tối đa 10 người</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span className="cta-btn cta-btn--solid">
            đăng ký tuần-du 05 <span className="ar">→</span>
          </span>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link className="go mono-link" href={routes.tuanDu} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          về trang tuần-du <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

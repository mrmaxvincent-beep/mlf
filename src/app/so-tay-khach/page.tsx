import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { routes } from "@/lib/nav";
import {
  tocItems,
  philosophy,
  steps,
  busLines,
  personalItemsLine,
  clothingLine,
  providedLine,
  weatherCells,
  activityGroups,
  houseRulesLine,
  roomCells,
  roomInfo,
  vehicleTags,
  indoorAmenitiesLine,
  kitchenAmenitiesLine,
  foodInfo,
  homemadeFoodLine,
  heartLines,
} from "@/data/soTayKhach";

export const metadata: Metadata = {
  title: "sổ tay khách",
  description: "trước khi bạn đến mộc. một quyển sổ nhỏ dành cho người đến mộc little farm.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.92rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.2rem",
};

const kvRow: React.CSSProperties = { display: "flex", justifyContent: "space-between", gap: "1rem" };
const kvKey: React.CSSProperties = { fontFamily: "var(--font-mono)", fontSize: "0.66rem", color: "var(--color-stone)", flexShrink: 0 };
const kvVal: React.CSSProperties = { fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-ink)", textAlign: "right" };
const tagStyle: React.CSSProperties = { fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-stone)", border: "1px solid var(--color-mist)", padding: "0.3rem 0.6rem", borderRadius: 2 };
const subLabel: React.CSSProperties = { display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-moss)", marginBottom: "0.6rem" };

export default function SoTayKhachPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: "sổ tay khách" }]} />
        <span className="eyebrow">guest guide · sổ tay khách</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6.5vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 1.2rem" }}>
          trước khi bạn đến mộc.
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-stone-alt)", maxWidth: "44ch", margin: 0 }}>một quyển sổ nhỏ dành cho người đến mộc little farm.</p>
      </div>

      {/* TOC */}
      <div className="wrap" style={{ marginTop: "3rem", marginBottom: "5rem", maxWidth: "56ch" }}>
        <span className="eyebrow">nội dung</span>
        {tocItems.map((t) => (
          <a key={t.anchor} href={`#${t.anchor}`} className="row-b" style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", color: "var(--color-ink)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--color-stone)" }}>{t.num}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem" }}>{t.label}</span>
            <span style={{ flex: 1, borderBottom: "1px dotted var(--color-mist)", transform: "translateY(-3px)" }} />
          </a>
        ))}
      </div>

      {/* TRƯỚC TIÊN */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow">trước tiên</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        <p style={proseP}>một lúc, ta chợt nhận ra hình như trên bước đường của mình, ta đã đánh rơi một điều gì đó.</p>
        <p style={proseP}>trong khi cứ mải miết chạy theo nhịp của deadline, mục tiêu, bao vai trò và kỳ vọng chồng lên nhau, ngày này qua ngày khác.</p>

        <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-moss)", display: "inline-block" }} />
        </div>

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.02rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1rem" }}>– những ngày-hiền ở mlf là khoảng thời gian để ở-yên</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.9, color: "var(--color-stone-alt)", margin: "0 0 1.5rem" }}>
          ở-yên, với thân thể đang mang mỏi mệt
          <br />
          ở-yên, với những cảm xúc chưa có dịp lắng xuống.
          <br />
          ở-yên, với những câu hỏi chưa cần một câu trả lời ngay.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.75rem 0" }}>
          <span style={{ flex: 1, height: 1, background: "var(--color-mist)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>và rồi</span>
          <span style={{ flex: 1, height: 1, background: "var(--color-mist)" }} />
        </div>

        <p style={proseP}>
          chỉ khi thật sự chịu để mình yên, một khoảng dừng mới hé mở để ta nhìn lại rằng mình đang thực sự ở đâu và đang đi về đâu.
          <br />
          <br />
          mlf không phải một chương trình wellness, một con đường tôn giáo hay một kỹ thuật tâm lý, trị liệu, năng lượng.
        </p>

        <div style={{ borderLeft: "2px solid var(--color-moss)", padding: "0.2rem 0 0.2rem 1.1rem", margin: "1.5rem 0" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.65, color: "var(--color-ink)", margin: 0 }}>mlf là một chốn để hàm dưỡng, cho lòng lắng lại - từ đó thấy rõ.</p>
        </div>

        <p style={{ ...proseP, margin: 0 }}>những ngày-hiền với một chút chủ ý - từ nội dung, nhịp sống, đến từng bữa ăn, giấc ngủ - để mọi thứ vơi đi. và trong cái vơi ấy, có lẽ, ta sẽ thấy rõ hơn mình đã đánh rơi điều gì?</p>
      </Reveal>

      {/* TRIẾT LÝ */}
      <div className="wrap" style={{ marginBottom: "1.5rem", marginTop: "2.5rem" }}>
        <span className="eyebrow">triết lý</span>
        <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.7rem", color: "var(--color-ink)", margin: 0 }}>05 chữ của mlf.</h2>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {philosophy.map((p) => (
          <div key={p.word} className="row-b" style={{ display: "grid", gridTemplateColumns: "5rem 1fr", alignItems: "baseline", gap: "1rem" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-moss)" }}>{p.word}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-stone-alt)", lineHeight: 1.7 }}>{p.desc}</span>
          </div>
        ))}
      </Reveal>

      {/* PHẦN 1 */}
      <div id="phan-1" className="wrap part-divider">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)" }}>phần một</span>
        <h2 className="part-title" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.7rem, 5vw, 2.3rem)", color: "var(--color-ink)", margin: "0.4rem 0 0" }}>
          ① trước khi đến
        </h2>
      </div>

      {/* 01 HÀNH TRÌNH */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>01</span>
        <span className="eyebrow">hành trình đến mộc little farm</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: 0 }}>từ khi đặt chỗ đến khi bắt đầu.</h3>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        {steps.map((s) => (
          <div key={s.title} className="row-b" style={{ display: "grid", gridTemplateColumns: "1.5rem 1fr", gap: "0.9rem", alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-moss)" }}>→</span>
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", fontWeight: 500, color: "var(--color-ink)", marginBottom: "0.3rem" }}>{s.title}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-stone-alt)", lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <div style={{ border: "1px solid var(--color-mist)", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1.1rem" }}>
          <div style={{ flex: "none", width: "3rem", height: "3rem", background: "var(--color-cotton)", border: "1px solid var(--color-mist)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: "0.5rem", color: "var(--color-stone)", textAlign: "center" }}>
            QR
          </div>
          <div>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.56rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-moss)", marginBottom: "0.3rem" }}>zalo</span>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-ink)", marginBottom: "0.2rem" }}>mộc little farm</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-stone)", lineHeight: 1.6 }}>thông tin chuyến đi, lịch trình, liên lạc trực tiếp với nhà mlf</div>
          </div>
        </div>
      </Reveal>

      {/* 02 DI CHUYỂN */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>02</span>
        <span className="eyebrow">hướng dẫn di chuyển đến Măng Đen</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: 0 }}>đường đến đây cũng là một phần của chuyến đi.</h3>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        <div className="row-b">
          <span style={subLabel}>máy bay</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-ink)", margin: "0 0 0.5rem" }}>Điểm đến: sân bay Pleiku, Gia Lai.</p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-stone-alt)", lineHeight: 1.7, margin: 0 }}>Từ sân bay về Măng Đen: khoảng 100km, 2 giờ đi xe. Bạn có thể đặt xe khách hoặc thuê xe riêng. mlf có thể hỗ trợ kết nối nếu cần.</p>
        </div>
        <div className="row-b">
          <span style={subLabel}>xe khách</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-ink)", margin: "0 0 0.7rem" }}>Nhiều nhà xe chạy tuyến TP.HCM – Măng Đen qua đêm:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.8rem" }}>
            {busLines.map((b) => (
              <span key={b} style={tagStyle}>
                {b}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-stone-alt)", margin: 0 }}>Đón tại Bến xe Miền Đông cũ.</p>
        </div>
        <div className="row-b">
          <span style={subLabel}>xe cá nhân</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-ink)", lineHeight: 1.75, margin: "0 0 0.5rem" }}>Theo Quốc lộ QL24 từ thành phố Kon Tum lên Măng Đen. Cung đường đèo đẹp, nên đi ban ngày để thưởng thức.</p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-stone-alt)", margin: 0 }}>Lưu ý: đường có thể trơn vào mùa mưa. Kiểm tra xe kỹ trước khi đi.</p>
        </div>
        <div className="row-b" style={kvRow}>
          <span style={{ ...kvKey, fontSize: "0.68rem" }}>điểm hẹn</span>
          <span style={kvVal}>Cổng Chợ Măng Đen</span>
        </div>
        <div className="row-b" style={kvRow}>
          <span style={{ ...kvKey, fontSize: "0.68rem" }}>google maps pin</span>
          <span style={{ ...kvVal, color: "var(--color-moss)" }}>mlf sẽ gửi qua Zalo</span>
        </div>
      </Reveal>

      {/* 03 MANG THEO */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>03</span>
        <span className="eyebrow">những điều cần mang theo</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: 0 }}>mang vừa đủ để nhẹ bước.</h3>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <span style={subLabel}>đồ dùng cá nhân</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          {personalItemsLine} — <span style={{ color: "var(--color-moss)", fontStyle: "italic" }}>hạn chế đồ dùng một lần và rác thải nhựa.</span>
        </p>

        <span style={subLabel}>trang phục</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>Thời tiết hay thay đổi, hãy mang đủ: {clothingLine}.</p>

        <span style={subLabel}>nhà mộc đã chuẩn bị sẵn</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", lineHeight: 1.85, color: "var(--color-stone)", margin: 0 }}>{providedLine}</p>
      </Reveal>

      {/* 04 THỜI TIẾT */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>04</span>
        <span className="eyebrow">thời tiết Măng Đen</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: "0 0 0.6rem" }}>cao nguyên. sương. gió.</h3>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-stone)", margin: 0 }}>Măng Đen mát quanh năm, hay có sương, và rất nhiều gió.</p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        <div className="grid2">
          {weatherCells.map((w) => (
            <div key={w.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>{w.label}</span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 300, color: "var(--color-ink)", textAlign: "right" }}>
                {w.val} <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--color-stone)" }}>· {w.note}</span>
              </span>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        <div className="row-b" style={kvRow}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-ink)" }}>Mùa mưa</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-stone)" }}>tháng 5 – 10 · chiều &amp; tối</span>
        </div>
        <div className="row-b" style={kvRow}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-ink)" }}>Mùa khô</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-stone)" }}>tháng 11 – 4 · trời trong xanh</span>
        </div>
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", color: "var(--color-stone)", margin: 0 }}>Dù đến mùa nào, hãy mang áo khoác. Buổi sáng và đêm lúc nào cũng khá lạnh.</p>
      </Reveal>

      {/* PHẦN 2 */}
      <div id="phan-2" className="wrap part-divider">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)" }}>phần hai</span>
        <h2 className="part-title" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.7rem, 5vw, 2.3rem)", color: "var(--color-ink)", margin: "0.4rem 0 0" }}>
          ② khi ở
        </h2>
      </div>

      {/* 05 NHỊP NGÀY */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>05</span>
        <span className="eyebrow">nhịp ngày tại mlf</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: 0 }}>một ngày ở mlf.</h3>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>Một ngày thường bắt đầu trước khi mặt trời lên cao.</p>
        <p style={proseP}>Sáng sớm, khi sương còn đọng là lúc yên tĩnh nhất. Nhiều người chọn ngồi thiền, viết nhật ký, hay ngồi với tách trà nhìn ra vườn.</p>

        <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
          <Motif name="am-tra" size={35} />
        </div>

        <p style={proseP}>Bữa sáng được dọn ra sau khi mọi người thức dậy và sẵn sàng.</p>
        <p style={proseP}>Buổi sáng thường có một hoạt động: đi rừng, đi suối, thăm bản làng.</p>
        <p style={proseP}>Buổi chiều thường yên hơn: các buổi trà, workshop, buổi trò chuyện sâu.</p>
        <p style={{ ...proseP, marginBottom: "2rem" }}>Tối - ăn cùng nhau, ngồi lại trước khi ngủ, và đi ngủ khi chuông đã điểm.</p>

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <Motif name="dom-muc" size={38} />
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.6, color: "var(--color-ink)", textAlign: "center", margin: 0 }}>
          sẽ ngủ sớm, ngủ sâu,
          <br />
          và thức dậy nhẹ nhàng hơn.
        </p>
      </Reveal>

      {/* 06 CÓ THỂ LÀM */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>06</span>
        <span className="eyebrow">những gì có thể làm</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: "0 0 0.6rem" }}>chọn điều mình cần.</h3>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-stone)", margin: 0 }}>Khoảng tự do trong ngày, đây là những gì sẵn có:</p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        {activityGroups.map((g) => (
          <div key={g.label} className="row-b">
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.5rem" }}>{g.label}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>{g.line}</p>
          </div>
        ))}
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--color-moss)", display: "inline-block", marginBottom: "1.5rem" }} />
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
          Hoặc không làm gì cả.
          <br />
          Đôi khi, đó là điều cần thiết nhất.
        </p>
      </Reveal>

      {/* 07 NẾP NHÀ */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>07</span>
        <span className="eyebrow">những điều cùng giữ</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: 0 }}>một vài nếp nhà</h3>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>{houseRulesLine}</p>
      </Reveal>

      {/* PHẦN 3 */}
      <div id="phan-3" className="wrap part-divider">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)" }}>phần ba</span>
        <h2 className="part-title" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.7rem, 5vw, 2.3rem)", color: "var(--color-ink)", margin: "0.4rem 0 0" }}>
          ③ không gian
        </h2>
      </div>

      {/* 08 BẢN ĐỒ */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>08</span>
        <span className="eyebrow">bản đồ mlf</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: 0 }}>bạn sẽ được nhà mộc dẫn tham quan ngay sau khi đến.</h3>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <div style={{ background: "var(--color-cotton)", border: "1px solid var(--color-mist)", padding: "1.1rem 0.9rem" }}>
          <svg width="100%" viewBox="0 0 320 240" fill="none">
            <rect width="320" height="240" fill="#F3EEE5" />
            <ellipse cx="265" cy="75" rx="48" ry="36" fill="#7D9B8A" opacity=".1" />
            <ellipse cx="42" cy="195" rx="32" ry="25" fill="#7D9B8A" opacity=".09" />
            <path d="M60 230 L155 175 L195 125 L215 88" stroke="#9A9590" strokeWidth="1" strokeDasharray="4 3" opacity=".4" />
            <rect x="16" y="20" width="175" height="55" rx="2" fill="#E2DDD7" stroke="#9A9590" strokeWidth=".7" />
            <text x="103" y="39" fontFamily="JetBrains Mono,monospace" fontSize="6" fill="#9A9590" textAnchor="middle" letterSpacing=".5">
              SINH HOẠT CHUNG
            </text>
            <text x="103" y="52" fontFamily="JetBrains Mono,monospace" fontSize="5" fill="#9A9590" textAnchor="middle" opacity=".7">
              Workshop · Trà · Bếp · Giặt
            </text>
            <text x="103" y="64" fontFamily="JetBrains Mono,monospace" fontSize="5" fill="#9A9590" textAnchor="middle" opacity=".7">
              Đọc sách · Chiếu phim
            </text>
            <rect x="16" y="90" width="40" height="40" rx="2" fill="#7D9B8A" opacity=".18" stroke="#7D9B8A" strokeWidth=".7" />
            <text x="36" y="107" fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="#7D9B8A" textAnchor="middle">
              xuân
            </text>
            <rect x="62" y="90" width="40" height="40" rx="2" fill="#7D9B8A" opacity=".18" stroke="#7D9B8A" strokeWidth=".7" />
            <text x="82" y="107" fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="#7D9B8A" textAnchor="middle">
              hạ
            </text>
            <rect x="108" y="90" width="40" height="40" rx="2" fill="#7D9B8A" opacity=".12" stroke="#7D9B8A" strokeWidth=".7" />
            <text x="128" y="107" fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="#7D9B8A" textAnchor="middle">
              thu
            </text>
            <rect x="154" y="90" width="40" height="40" rx="2" fill="#7D9B8A" opacity=".12" stroke="#7D9B8A" strokeWidth=".7" />
            <text x="174" y="107" fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="#7D9B8A" textAnchor="middle">
              đông
            </text>
            <text x="97" y="143" fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#9A9590" textAnchor="middle" letterSpacing=".5">
              4 phòng ngủ
            </text>
            <rect x="210" y="20" width="95" height="60" rx="2" fill="#E2DDD7" stroke="#9A9590" strokeWidth=".7" />
            <text x="257" y="40" fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#9A9590" textAnchor="middle" letterSpacing=".3">
              KHU VỰC
            </text>
            <text x="257" y="52" fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#9A9590" textAnchor="middle" letterSpacing=".3">
              NHÀ MỘC
            </text>
            <text x="257" y="64" fontFamily="JetBrains Mono,monospace" fontSize="4.5" fill="#9A9590" textAnchor="middle" opacity=".6">
              Phòng ngủ · Kho
            </text>
            <rect x="16" y="158" width="55" height="30" rx="2" fill="#E2DDD7" stroke="#9A9590" strokeWidth=".7" />
            <text x="43" y="171" fontFamily="JetBrains Mono,monospace" fontSize="5.5" fill="#9A9590" textAnchor="middle">
              TOILET
            </text>
            <text x="43" y="181" fontFamily="JetBrains Mono,monospace" fontSize="4.5" fill="#9A9590" textAnchor="middle" opacity=".6">
              2 phòng
            </text>
            <ellipse cx="245" cy="165" rx="55" ry="42" fill="#7D9B8A" opacity=".1" stroke="#7D9B8A" strokeWidth=".7" strokeDasharray="3 2" />
            <text x="245" y="162" fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="#7D9B8A" textAnchor="middle">
              VƯỜN
            </text>
            <text x="245" y="174" fontFamily="JetBrains Mono,monospace" fontSize="5" fill="#7D9B8A" textAnchor="middle" opacity=".7">
              Hữu cơ
            </text>
            <text x="16" y="232" fontFamily="JetBrains Mono,monospace" fontSize="5" fill="#9A9590" opacity=".55">
              * Bản đồ minh họa — không theo tỉ lệ
            </text>
          </svg>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1rem", marginTop: "0.8rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.06em", color: "var(--color-stone)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-moss)", display: "block" }} />
              phòng ngủ
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.06em", color: "var(--color-stone)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-stone)", display: "block" }} />
              sinh hoạt chung
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.06em", color: "var(--color-stone)", display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-moss)", opacity: 0.4, border: "1px dashed var(--color-moss)", display: "block" }} />
              vườn
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)" }}>cái kén nằm im</span>
      </Reveal>
      <div className="wrap" style={{ marginBottom: "1.2rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-stone)", margin: 0 }}>Phòng ngủ được thiết kế vừa-đủ như một chiếc kén nhỏ để nghỉ ngơi.</p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        <div className="grid2">
          {roomCells.map((r) => (
            <div key={r.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-moss)" }}>{r.name}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.56rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-stone)" }}>{r.view}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "3.5rem", maxWidth: "56ch" }}>
        {roomInfo.map((i) => (
          <div key={i.k} className="row-b" style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", color: "var(--color-stone)", flex: "none" }}>{i.k}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-ink)", textAlign: "right" }}>{i.v}</span>
          </div>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Motif name="mam-la" size={32} />
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          các trang bị
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <span style={{ ...subLabel, color: "var(--color-stone)", marginBottom: "0.7rem" }}>di chuyển</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
          {vehicleTags.map((v) => (
            <span key={v} style={tagStyle}>
              {v}
            </span>
          ))}
        </div>

        <span style={{ ...subLabel, color: "var(--color-stone)" }}>trong nhà</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>{indoorAmenitiesLine}</p>

        <span style={{ ...subLabel, color: "var(--color-stone)" }}>bếp &amp; pha chế</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>{kitchenAmenitiesLine}</p>
      </Reveal>

      {/* 09 NẾP ĂN */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.2rem" }}>09 · nếp ăn tại mlf</span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", margin: 0 }}>bữa ăn ở đây là một phần của retreat.</h3>
      </div>
      <div className="wrap" style={{ marginBottom: "0.8rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-stone)", margin: 0 }}>để nhắc lại mối quan hệ giữa mình với thức ăn, với đất, với mùa.</p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        {foodInfo.map((i) => (
          <div key={i.k} className="row-b" style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", color: "var(--color-stone)", flex: "none" }}>{i.k}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-ink)", textAlign: "right" }}>{i.v}</span>
          </div>
        ))}
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <span style={subLabel}>nhà mộc tự tay làm</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", lineHeight: 1.85, color: "var(--color-stone)", margin: 0 }}>{homemadeFoodLine}</p>
      </Reveal>

      {/* PHẦN 4 */}
      <div id="phan-4" className="wrap part-divider">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)" }}>phần bốn</span>
        <h2 className="part-title" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.7rem, 5vw, 2.3rem)", color: "var(--color-ink)", margin: "0.4rem 0 0" }}>
          ④ retreat / stay+talk
        </h2>
      </div>

      {/* 10 CHUẨN BỊ TÂM */}
      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-stone)", marginBottom: "0.3rem" }}>10</span>
        <span className="eyebrow">những điều nên chuẩn bị cho tâm</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        {heartLines.map((h) => (
          <p key={h} className="row-b" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0, padding: "0.9rem 0" }}>
            {h}
          </p>
        ))}
      </Reveal>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>Những ngày-hiền ở mlf mầu nhiệm ở chỗ:</p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.02em", color: "var(--color-stone)", margin: 0 }}>là khoảng lặng để ta nghe thấy điều mình vốn biết, mà đã quên.</p>
      </Reveal>

      {/* CLOSING */}
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-ink)", margin: "0 0 1.2rem" }}>Hẹn gặp bạn ở Măng Đen.</p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}>
          <Motif name="dom-muc" size={42} />
        </div>
        <Link className="mono-link" href={routes.ngayHien} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          về trang ngày-hiền →
        </Link>
      </Reveal>

      <Footer />
    </>
  );
}

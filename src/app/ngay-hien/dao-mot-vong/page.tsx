import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { ImageStoryCarousel } from "@/components/ImageStoryCarousel";
import { GuestWhyRotator } from "@/components/GuestWhyRotator";
import { AmenityTabs } from "@/components/AmenityTabs";
import { routes } from "@/lib/nav";
import { stories, spots, rooms, sharedSpaces, privateSpaces, vehicles, amenities, foodPoints, foodGallery, guestWhys } from "@/data/daoMotVong";

export const metadata: Metadata = {
  title: "dạo một vòng",
  description: "tinh thần tại mlf — dạo một vòng quanh nhà mộc little farm.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.92rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.2rem",
};

export default function DaoMotVongPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: "dạo một vòng" }]} />
        <span className="eyebrow">tinh thần tại mlf</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: 0 }}>
          dạo một vòng
        </h1>
      </div>

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 560 }}>
        <ImagePlaceholder label="ảnh · toàn cảnh nhà mộc giữa núi rừng" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ margin: "5rem 0", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", color: "var(--color-ink)" }}>điểm nhìn</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          retreat ở mlf chưa từng là chương trình chữa lành, chương trình thiền, cũng chưa bao giờ là một dạng nghỉ dưỡng. Nó luôn đứng ở một khoảng giữa rất khác, nơi con người sống trong sự nương đỡ của bầu không khí nơi đây, để tự thấy điều đang có mặt trong mình.
        </p>
        <p style={proseP}>
          retreat ở mlf cũng không phải wellness, chương trình tôn giáo, đào sâu kỹ thuật tâm lý, trị liệu hay năng lượng. retreat theo đúng nghĩa của nó là lùi lại. lùi khỏi nhịp sống dồn dập. lùi khỏi những câu chuyện mình kể về chính mình. lùi khỏi thôi thúc phải làm gì đó cho &ldquo;có ích&rdquo;. để ở yên.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.98rem", lineHeight: 1.9, color: "var(--color-stone-alt)", textAlign: "justify", margin: "0 0 1.2rem" }}>
          ở yên với thân thể. ở yên với hơi thở. ở yên với những cảm xúc chưa từng được ngồi xuống cùng. ở yên với những câu hỏi không cần trả lời ngay.
        </p>
        <p style={{ ...proseP, margin: 0 }}>
          trong khoảng lùi ấy, ta có cơ hội nhìn lại: mình đang thực sự ở đâu? mình đang đi về đâu? điều gì đang bám víu lấy mình khiến bước chân trở nên nặng? mlf tạo ra một không gian mang tính nuôi dưỡng, cho phép sự thật bên trong được hiển lộ, và từ đó, sự thay đổi — nếu cần — tự diễn ra một cách hiền lành.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={42} />
      </div>

      <div className="wrap" style={{ margin: "0 0 2.5rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", color: "var(--color-ink)", display: "block", marginBottom: "0.6rem" }}>
          hiểu về mlf
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>kể chuyện bằng hình ảnh</span>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: 800 }}>
        <ImageStoryCarousel stories={stories} />
      </Reveal>

      <div className="wrap" style={{ margin: "5rem 0", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", color: "var(--color-ink)" }}>cùng thăm mlf</span>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow">sơ đồ không gian</span>
      </div>
      <div className="sodo-grid" style={{ maxWidth: 1080, margin: "0 auto 5rem", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "7fr 5fr", gap: "3rem", alignItems: "start" }}>
        <ImagePlaceholder label="ảnh · sơ đồ không gian mộc little farm" aspectRatio="16/10" style={{ width: "100%" }} />
        <ul style={{ listStyle: "none", padding: 0, margin: "0.3rem 0 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {spots.map((s, i) => (
            <li key={s.id} style={{ display: "flex", alignItems: "baseline", gap: "0.8rem" }}>
              <span style={{ flex: "none", width: "1.5rem", height: "1.5rem", borderRadius: "50%", background: "var(--color-cham-dem)", color: "var(--color-paper-dem)", fontFamily: "var(--font-mono)", fontSize: "0.65rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <a
                className="mono-link"
                href={`#tour-${s.id}`}
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.98rem", color: "var(--color-ink)", borderBottom: "1px solid var(--color-mist)", paddingBottom: "0.1rem" }}
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: 900, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div style={{ display: "flex", gap: "0.4rem 0.6rem", flexWrap: "wrap", alignItems: "baseline" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>chung ·</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-stone-alt)", lineHeight: 1.6 }}>{sharedSpaces.join(" · ")}</span>
        </div>
        <div style={{ display: "flex", gap: "0.4rem 0.6rem", flexWrap: "wrap", alignItems: "baseline" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>riêng ·</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-stone-alt)", lineHeight: 1.6 }}>{privateSpaces.join(" · ")}</span>
        </div>
      </Reveal>

      <div style={{ maxWidth: 1080, margin: "2.5rem auto 5rem", padding: "0 1.5rem" }}>
        {spots.map((s, i) => (
          <div key={s.id} id={`tour-${s.id}`} className={`spot-row${i % 2 === 1 ? " rev" : ""}`}>
            <div className="spot-img">
              <ImagePlaceholder label={s.label} aspectRatio="4/3" style={{ width: "100%" }} />
            </div>
            <div className="spot-text">
              <span className="spot-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.4rem", color: "var(--color-ink)", margin: "0 0 0.9rem" }}>{s.name}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0, maxWidth: "44ch" }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={42} />
      </div>

      <div className="wrap" style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Motif name="hien-nha" size={32} />
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          cái kén nằm im
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.6rem", color: "var(--color-ink)" }}>bốn phòng, bốn mùa</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        <p style={{ ...proseP, margin: 0 }}>
          Không gian phòng ngủ được thiết kế vừa-đủ như một chiếc kén nhỏ để nghỉ ngơi — bốn phòng, mang tên bốn mùa, mỗi phòng một sắc thái riêng nhưng chung một sự vừa-đủ.
        </p>
      </Reveal>

      <div className="rooms-grid" style={{ maxWidth: 1080, margin: "0 auto 3.5rem", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.75rem", alignItems: "start" }}>
        {rooms.map((r) => (
          <div key={r.name}>
            <div style={{ width: "100%", aspectRatio: "3/4", marginBottom: "1rem" }}>
              <ImagePlaceholder label={r.label} aspectRatio="3/4" style={{ width: "100%", height: "100%" }} />
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.4rem" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-stone-alt)" }}>{r.glyph}</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.2rem", color: "var(--color-ink)", margin: 0 }}>phòng {r.name}</h3>
            </div>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.6rem" }}>{r.aspect}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>{r.mood}</p>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", display: "flex", flexWrap: "wrap", gap: "0.5rem 1.2rem", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.02em", color: "var(--color-stone-alt)" }}>
        <span>7,4m² (3,2m x 2,3m)</span>
        <span style={{ color: "var(--color-mist)" }}>·</span>
        <span>giường gỗ 1,4m x 2,0m, nệm cao su, drap linen</span>
        <span style={{ color: "var(--color-mist)" }}>·</span>
        <span>gối cao su bọc vải nhuộm chàm tự nhiên</span>
        <span style={{ color: "var(--color-mist)" }}>·</span>
        <span>chăn chần bông Muji, vỏ chăn linen may tay theo chủ đề từng phòng</span>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Motif name="mam-la" size={32} />
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          các trang bị
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <AmenityTabs vehicles={vehicles} amenities={amenities} />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Motif name="am-tra" size={32} />
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          trải nghiệm ẩm thực tại mlf
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "1.5rem", maxWidth: "56ch" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {foodPoints.map((item) => (
            <li key={item} style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-ink)", paddingLeft: "1rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--color-moss)" }}>·</span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="food-marquee" style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", marginBottom: "3.5rem", overflow: "hidden" }}>
        <div className="food-marquee-track" style={{ display: "flex", gap: "1rem", width: "max-content", padding: "0 1.5rem" }}>
          {[...foodGallery, ...foodGallery].map((label, i) => (
            <div key={i} style={{ flex: "none", width: "min(60vw, 320px)", aspectRatio: "4/5" }}>
              <ImagePlaceholder label={label} aspectRatio="4/5" style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.8rem" }}>
          tự tay làm
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          nước mắm chay từ nấm và dứa · đậu hũ · bánh mỳ sourdough lên men tự nhiên · sữa hạt · rau củ ngâm thảo mộc · mứt dâu, mứt cà chua · thực phẩm lên men (kim chi, cải chua) · tương ớt · nước sấu, nước mơ, chanh muối, tắc muối, kombucha, chanh đào, rượu sấu · dấm ăn
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow">những vị khách tới mlf để làm gì?</span>
      </div>
      <GuestWhyRotator quotes={guestWhys} />

      <div className="wrap" style={{ marginBottom: "1.5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>một thước phim ngắn, để bạn hình dung nhịp sống ở đây trước khi ghé qua.</p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3.5rem", maxWidth: 800 }}>
        <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--color-cotton)", border: "1px solid var(--color-mist)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
            <span style={{ width: "2.6rem", height: "2.6rem", border: "1px solid var(--color-stone)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ width: 0, height: 0, borderTop: "0.45rem solid transparent", borderBottom: "0.45rem solid transparent", borderLeft: "0.7rem solid var(--color-stone)", marginLeft: "0.15rem" }} />
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>video · một vòng quanh nhà mộc</span>
          </div>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>nếu bạn cũng đang tìm một khoảng lùi như thế — nhà mộc luôn ở đây.</p>
        <Link href={routes.ngayHien} className="cta-btn">
          về trang ngày-hiền <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

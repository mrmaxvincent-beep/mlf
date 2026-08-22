import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { ImageStoryCarousel } from "@/components/ImageStoryCarousel";
import { GuestWhyRotator } from "@/components/GuestWhyRotator";
import { AmenityTabs } from "@/components/AmenityTabs";
import { LazyYoutubeEmbed } from "@/components/LazyYoutubeEmbed";
import { routes } from "@/lib/nav";
import { stories, spots, rooms, sharedSpaces, privateSpaces, vehicles, amenities, foodPoints, foodGallery, guestWhys } from "@/data/daoMotVong";

export const metadata: Metadata = {
  title: "dạo một vòng",
  description: "tinh thần tại mlf — dạo một vòng quanh nhà mộc little farm.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
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
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>tinh thần tại mlf</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: 0 }}>
          dạo một vòng
        </h1>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · toàn cảnh nhà mộc 1" aspectRatio="16/12" src="/assets/ngayhien_daomotvong01.webp" alt="dao-mot-vong" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · toàn cảnh nhà mộc 2" aspectRatio="16/12" src="/assets/ngayhien_daomotvong02.webp" alt="dao-mot-vong" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · toàn cảnh nhà mộc 3" aspectRatio="16/12" src="/assets/ngayhien_daomotvong03.webp" alt="dao-mot-vong" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="wrap" style={{ margin: "5rem 0", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", color: "var(--color-ink)" }}>điểm nhìn</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          ⸺ <strong>retreat</strong> là tạm thời rời khỏi cuộc sống bận rộn thường nhật, bước vào một không gian dịu dàng để nghỉ ngơi, để thở, để suy ngẫm, để tưởng tượng, để nạp lại năng lượng… hoặc đơn giản là ngồi im.
        </p>
        <p style={{ ...proseP, fontWeight: 500 }}>retreat ở mlf:</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem 2rem", margin: "0 0 1.2rem", alignItems: "start" }}>
          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify" }}>không phải là một khóa học để luyện tập, khai sáng</div>
          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify" }}>chỉ là sống chậm lại</div>

          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify" }}>không thực hành các nghi lễ, thực tập khắt khe</div>
          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify" }}>chỉ để tâm lắng xuống và mở rộng cảm nhận</div>

          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify" }}>không tách biệt đời thường</div>
          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify" }}>chỉ thêm sâu sắc, tự nhiên, nhẹ nhàng hơn</div>

          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify" }}>không giảng dạy</div>
          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify" }}>chỉ cùng nhau tạo một không gian để mỗi người lắng nghe chính mình</div>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <div style={{ position: "relative", width: "180px", height: "140px", margin: "0 auto" }}>
          <Image src="/assets/home_meo2.webp" alt="home_meo2" fill sizes="180px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      <div className="wrap" style={{ margin: "0 0 2.5rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", color: "var(--color-ink)", display: "block", marginBottom: "0.6rem" }}>
          hiểu về mlf
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>kể chuyện bằng hình ảnh</span>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: 800 }}>
        <ImageStoryCarousel stories={stories} showCounter={false} />
      </Reveal>

      <div className="wrap" style={{ margin: "5rem 0", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)", color: "var(--color-ink)" }}>cùng thăm mlf</span>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>sơ đồ không gian</span>
      </div>
      <div className="sodo-grid" style={{ maxWidth: 1080, margin: "0 auto 5rem", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "7fr 5fr", gap: "3rem", alignItems: "start" }}>
        <ImagePlaceholder label="ảnh · sơ đồ không gian mộc little farm" src="/assets/sodonha.webp" aspectRatio="16/10" style={{ width: "100%" }} />
        <ul style={{ listStyle: "none", padding: 0, margin: "0.3rem 0 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {spots.map((s) => (
            <li key={s.id} style={{ display: "flex", alignItems: "baseline", gap: "0.8rem" }}>
              <span style={{ flex: "none", width: "0.6rem", height: "0.6rem", borderRadius: "50%", background: "var(--color-cham-dem)" }} />
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
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink)" }}>chung ·</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-ink)", lineHeight: 1.6 }}>{sharedSpaces.join(" · ")}</span>
        </div>
        <div style={{ display: "flex", gap: "0.4rem 0.6rem", flexWrap: "wrap", alignItems: "baseline" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink)" }}>riêng ·</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-ink)", lineHeight: 1.6 }}>{privateSpaces.join(" · ")}</span>
        </div>
      </Reveal>

      <div style={{ maxWidth: 1080, margin: "2.5rem auto 5rem", padding: "0 1.5rem" }}>
        {spots.map((s, i) => (
          <div key={s.id} id={`tour-${s.id}`} className={`spot-row${i % 2 === 1 ? " rev" : ""}`}>
            <div className="spot-img">
              <ImagePlaceholder label={s.label} src={s.src} aspectRatio="4/3" style={{ width: "100%" }} />
            </div>
            <div className="spot-text">
              <span className="spot-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.4rem", color: "var(--color-ink)", margin: "0 0 0.9rem" }}>{s.name}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0, maxWidth: "44ch" }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={42} />
      </div>

      <div className="wrap" style={{ marginBottom: "0.5rem" }}>
        <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-ink)" }}>
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
              <ImagePlaceholder label={r.label} src={r.src} aspectRatio="3/4" style={{ width: "100%", height: "100%" }} />
            </div>
            <div style={{ marginBottom: "0.4rem" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.2rem", color: "var(--color-ink)", margin: 0 }}>phòng {r.name}</h3>
            </div>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.6rem" }}>{r.aspect}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>{r.mood}</p>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        {[
          "7,4m² (3,2m x 2,3m)",
          "giường gỗ 1,4m x 2,0m, nệm cao su, drap linen",
          "gối cao su bọc vải nhuộm chàm tự nhiên",
          "chăn chần bông Muji, vỏ chăn linen may tay theo chủ đề từng phòng",
        ].map((item) => (
          <span
            key={item}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.02em",
              color: "var(--color-stone-alt)",
              padding: "0.45rem 0.9rem",
              border: "1px solid var(--color-mist)",
              borderRadius: "999px",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-ink)" }}>
          các trang bị
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <AmenityTabs vehicles={vehicles} amenities={amenities} />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-ink)" }}>
          trải nghiệm ẩm thực tại mlf
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "1.5rem", maxWidth: "56ch" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {foodPoints.map((item) => (
            <li key={item} style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", paddingLeft: "1rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--color-moss)" }}>·</span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="food-marquee" style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw", marginBottom: "3.5rem", overflow: "hidden" }}>
        <div className="food-marquee-track" style={{ display: "flex", gap: "1rem", width: "max-content", padding: "0 1.5rem" }}>
          {[...foodGallery, ...foodGallery].map((item, i) => (
            <div key={i} style={{ flex: "none", width: "min(59.5vw, 336px)", height: "min(79.1vw, 448px)", aspectRatio: "4/5" }}>
              <ImagePlaceholder label={item.label} src={item.src} aspectRatio="4/5" style={{ width: "100%", height: "100%" }} />
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.8rem" }}>
          tự tay làm
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          nước mắm chay từ nấm và dứa · đậu hũ · bánh mỳ sourdough lên men tự nhiên · sữa hạt · rau củ ngâm thảo mộc · mứt dâu, mứt cà chua · thực phẩm lên men (kim chi, cải chua) · tương ớt · nước sấu, nước mơ, chanh muối, tắc muối, kombucha, chanh đào · dấm ăn
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>những vị khách tới mlf để làm gì?</span>
      </div>
      <GuestWhyRotator quotes={guestWhys} />

      <div className="wrap" style={{ marginBottom: "1.5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>một thước phim ngắn, để bạn hình dung nhịp sống ở đây trước khi ghé qua.</p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3.5rem", maxWidth: 800 }}>
        <LazyYoutubeEmbed
          videoId="rXQopzfv3vw"
          thumbnailSrc="/assets/ngayhien_daomotvong02.webp"
          thumbnailLabel="một vòng quanh nhà mộc"
          aspectRatio="16/9"
        />
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <Link href={routes.ngayHien} className="cta-btn">
          về trang ngày-hiền <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

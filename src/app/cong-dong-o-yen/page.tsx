import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { VoiceCarousel } from "@/components/VoiceCarousel";
import { OyenAppShowcase } from "@/components/OyenAppShowcase";
import { Disclosure } from "@/components/Disclosure";
import { routes } from "@/lib/nav";
import { pillars, spaces, reasons, keepers, voices, webAppTabs, membershipTerms, membershipTermsTitle } from "@/data/congDongOYen";

export const metadata: Metadata = {
  title: "cộng đồng ở-yên",
  description: "một tổ ấm tinh thần, cho những ai muốn ở-yên với mình.",
};

export default function CongDongOYenPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="cộng đồng ở-yên" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.2, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          một tổ ấm tinh thần
        </h1>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · góc ngồi yên, ánh sáng dịu 1" aspectRatio="16/12" src="/assets/congdongoyen01.webp" alt="cong-dong-o-yen" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · góc ngồi yên, ánh sáng dịu 2" aspectRatio="16/12" src="/assets/congdongoyen02.webp" alt="cong-dong-o-yen" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · góc ngồi yên, ánh sáng dịu 3" aspectRatio="16/12" src="/assets/congdongoyen03.webp" alt="cong-dong-o-yen" style={{ width: "100%", height: "auto" }} />
      </div>

      {/* POEM */}
      <Reveal className="wrap" style={{ marginTop: "2.6rem", marginBottom: "2.6rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", textAlign: "center", maxWidth: "42ch", margin: "0 auto" }}>
          <p style={{ margin: 0 }}>giữa một ngày dài, phố xá vội vã, bất giác thấy lòng mình vơi đi.</p>
          <p style={{ margin: 0 }}>ngôi nhà đủ đầy nhưng không làm ta thấy ấm áp.</p>
          <p style={{ margin: 0 }}>những buổi tập luyện làm ta thấy khỏe, mà có gì đó vẫn chưa thật sự được chạm tới.</p>
          <p style={{ margin: 0 }}>một tâm trí nhạy bén, nhưng lắm lúc cũng chòng chành.</p>
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "center", margin: "1.6rem 0 1.4rem" }}>
          Chính từ những khoảng lưng chừng ấy, <strong style={{ fontWeight: 500 }}>ở-yên ra đời.</strong>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "120px", height: "92px" }}>
            <Image src="/assets/comnam.webp" alt="comnam" fill sizes="120px" style={{ objectFit: "contain" }} />
          </div>
        </div>
      </Reveal>

      {/* WEB APP Ở-YÊN */}
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <span className="sec-label" style={{ textAlign: "center" }}>web app ở-yên</span>
        <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 5vw, 2.6rem)", lineHeight: 1.3, color: "var(--color-ink)", textAlign: "center", margin: "0 0 1rem" }}>
          ở-yên, nằm gọn trong túi áo bạn
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.02rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "center", maxWidth: "46ch", margin: "0 auto 2.8rem" }}>
          Một nơi để ở-yên thêm một chút: ngồi, đọc, viết, uống trà, gặp gỡ.
        </p>
        <OyenAppShowcase tabs={webAppTabs} />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.2rem", flexWrap: "wrap", marginTop: "2.8rem" }}>
          <a className="cta-btn" href="https://forms.gle/uPn47wFfNREZU2FFA" target="_blank" rel="noopener">
            tham gia ở-yên
          </a>
          <a href="https://oyen.moclittlefarm.com/dang-nhap/" target="_blank" rel="noopener" style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-ink)", textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>
            đã là thành viên? mở web app →
          </a>
        </div>
      </div>

      {/* 4 GIÁ TRỊ */}
      <div className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="sec-label">4 giá trị nền tảng</span>
        <RevealStagger className="pillar-grid-reveal" staggerMs={120}>
          {pillars.map((p) => (
            <div key={p.vi} style={{ height: "100%", background: "#ffffff", border: "1px solid var(--color-mist)", borderRadius: 4, padding: "1.75rem 1.5rem", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "normal", fontSize: "1.6rem", color: "var(--color-cham-dem)", marginBottom: "0.75rem" }}>{p.mark}</span>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>{p.vi}</span>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--color-stone-alt)", lineHeight: 1.65 }}>{p.desc}</span>
            </div>
          ))}
        </RevealStagger>
      </div>

      {/* 4 KHÔNG GIAN */}
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <span className="sec-label" style={{ textAlign: "center" }}>4 không gian ở-yên</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.92rem", color: "var(--color-stone)", textAlign: "center", margin: "0 0 2.6rem" }}>
          từ nếp sống bên ngoài, dần lắng vào bên trong
        </p>

        <div style={{ position: "relative", maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ position: "absolute", left: "5px", top: "0.6rem", bottom: "0.6rem", width: "1px", background: "var(--color-mist)" }} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            {spaces.map((s, i) => (
              <Reveal key={s.num} style={{ display: "flex", gap: "1.5rem", padding: i === 0 ? "0 0 2.6rem" : i === spaces.length - 1 ? "2.6rem 0 0" : "2.6rem 0" }}>
                <div style={{ position: "relative", flexShrink: 0, width: "0.7rem", display: "flex", justifyContent: "center", paddingTop: "0.3rem" }}>
                  <span
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: "var(--color-cham-dem)",
                      opacity: 0.25 + i * 0.25,
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--color-stone)", marginBottom: "0.6rem" }}>
                    {s.num} · {s.en}
                  </span>
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.4rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>
                    {s.vi}
                  </span>
                  <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)" }}>
                    {s.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* 200+ ĐỀ MỤC */}
      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <span className="sec-label" style={{ textAlign: "center" }}>đề mục nội dung</span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(5rem, 18vw, 8.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
            margin: "0.6rem 0 1.4rem",
          }}
        >
          200+
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", maxWidth: "34ch", margin: "0 auto" }}>
          Nội dung được tổ chức theo 4 không gian, mỗi không gian gồm nhiều unit.
        </p>
        <div aria-hidden style={{ width: "2.5rem", height: "1px", background: "var(--color-cham-dem)", opacity: 0.5, margin: "1.8rem auto" }} />
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "52ch", margin: "0 auto 2.2rem" }}>
          Nội dung đang được phát triển và hoàn thiện dần. Không phải tất cả 200 bài đều có mặt ngay khi bạn tham gia, nhưng sẽ được cập nhật liên tục theo thời gian.
        </p>
        <Link className="cta-btn" href={routes.deMucChiTiet}>
          xem đầy đủ 200+ đề mục <span className="ar">→</span>
        </Link>
      </div>

      {/* VÌ SAO CÓ Ở-YÊN */}
      <div className="wrap" style={{ marginBottom: "5.5rem" }}>
        <span className="sec-label" style={{ textAlign: "center" }}>vì sao có ở-yên</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-stone)", textAlign: "center", margin: "0 0 3rem" }}>
          ba lý do ở-yên ra đời
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "3.8rem" }}>
          {reasons.map((r, i) => (
            <Reveal key={r.en} style={{ position: "relative" }}>
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: "-1.5rem",
                  right: 0,
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "7rem",
                  lineHeight: 1,
                  color: "var(--color-cham-dem)",
                  opacity: 0.07,
                  userSelect: "none",
                }}
              >
                0{i + 1}
              </span>
              <div style={{ position: "relative", maxWidth: "58ch" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "0.9rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink)" }}>{r.en}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.4rem", color: "var(--color-ink)", margin: "0 0 0.9rem" }}>{r.title}</h3>
                <p style={{ fontSize: "1rem", color: "var(--color-ink)", lineHeight: 1.85, textAlign: "justify", margin: 0 }}>{r.desc}</p>
              </div>
              {i < reasons.length - 1 ? (
                <div style={{ marginTop: "1.9rem", height: "1px", background: "var(--color-mist)" }} />
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>

      {/* NGƯỜI GIỮ LỬA */}
      <div className="wrap" style={{ marginBottom: "4rem", paddingBottom: "3rem", paddingTop: "3rem" }}>
        <span className="sec-label" style={{ textAlign: "center", marginBottom: "3rem" }}>những người giữ lửa cho ở-yên</span>

        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ position: "absolute", top: "5px", left: "8%", right: "8%", height: "1px", background: "var(--color-mist)" }} />
          <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: "1rem" }}>
            {keepers.map((k, i) => (
              <Reveal key={k.name} style={{ flex: "1 1 0", maxWidth: "150px", textAlign: "center", position: "relative", paddingTop: "1.6rem" }}>
                <span style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: "var(--color-cham-dem)" }} />
                <div style={{ width: "100%", maxWidth: "110px", aspectRatio: "3/4", margin: "0 auto 1.2rem", borderRadius: "0.5rem", overflow: "hidden" }}>
                  <ImagePlaceholder label={k.label} src={k.src} aspectRatio="3/4" style={{ width: "100%", height: "100%" }} />
                </div>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", lineHeight: 1.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.6rem", minHeight: "1.75rem" }}>
                  0{i + 1} · {k.role}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.7rem", color: "var(--color-ink)", marginBottom: "0.7rem" }}>{k.name}</span>
              </Reveal>
            ))}
          </div>
        </div>

      </div>

      {/* TIẾNG NÓI */}
      <Reveal className="wrap" style={{ marginBottom: "4rem", marginTop: "2rem" }}>
        <span className="sec-label">tiếng nói từ ở-yên</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 2rem" }}>
          Những dòng dưới đây là phản hồi thật, được viết bởi người đang tham gia cộng đồng ở-yên, sau khi đọc các bài viết trong web app ở-yên.
        </p>
        <VoiceCarousel voices={voices} />
      </Reveal>

      {/* BREATHING SPACE */}
      <div className="wrap" style={{ marginBottom: "9rem", marginTop: "8rem" }}>
        <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", justifyContent: "center", flexWrap: "wrap" }}>
          <span style={{ writingMode: "vertical-rl", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.9, color: "var(--color-ink)", letterSpacing: "0.05em", paddingTop: "0.5rem" }}>
            một khoảng dừng giữa những điều đang diễn ra
          </span>
          <div style={{ width: 340, maxWidth: "100%", aspectRatio: "4/5" }}>
            <ImagePlaceholder label="ảnh · một khoảnh khắc ở-yên" aspectRatio="4/5" src="/assets/congdongoyen4.webp" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "center", maxWidth: "36ch", margin: "3rem auto 0" }}>
          ở lại một chút với mình.
        </p>
      </div>

      {/* MEMBERSHIP */}
      <Reveal className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="sec-label">lifetime membership</span>
        <div className="mem-box">
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--color-ink)", marginBottom: "0.3rem" }}>990.000đ</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--color-stone)", marginBottom: "1.5rem" }}>Thành viên đóng phí một lần và được hưởng các quyền lợi:</span>
          <div style={{ marginBottom: "1.5rem" }}>
            <p className="mem-item">truy cập không thời hạn vào cộng đồng ở-yên</p>
            <p className="mem-item">truy cập các nội dung, tài liệu và thư viện thực hành dành cho thành viên</p>
            <p className="mem-item">tham gia các hoạt động trực tuyến dành cho cộng đồng</p>
            <p className="mem-item">được tiếp cận những nội dung mới được mlf bổ sung trong quá trình vận hành cộng đồng</p>
            <p className="mem-item">không phải đóng phí duy trì hoặc gia hạn thành viên hằng năm</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a className="cta-btn" href="https://forms.gle/uPn47wFfNREZU2FFA" target="_blank" rel="noopener">
              tham gia ở-yên
            </a>
          </div>
          <p style={{ margin: "1.2rem 0 0", textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-stone)" }}>
            đã là thành viên?{" "}
            <a href="https://oyen.moclittlefarm.com/dang-nhap/" target="_blank" rel="noopener" style={{ color: "var(--color-ink)", textDecoration: "underline", textUnderlineOffset: "3px", whiteSpace: "nowrap" }}>
              mở web app ở-yên →
            </a>
          </p>
        </div>

        <div style={{ marginTop: "1.6rem" }}>
          <Disclosure
            trigger={<span className="eyebrow" style={{ marginBottom: 0, flex: 1, textAlign: "center", paddingLeft: "1.6rem" }}>{membershipTermsTitle}</span>}
          >
            {membershipTerms.map((para, k) => {
              const head = para.startsWith("**") && para.endsWith("**");
              if (para.startsWith("* ")) {
                return (
                  <p
                    key={k}
                    style={{ position: "relative", paddingLeft: "1.1rem", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0.4rem 0 0" }}
                  >
                    <span aria-hidden style={{ position: "absolute", left: 0, color: "var(--color-cham)" }}>—</span>
                    {para.slice(2)}
                  </p>
                );
              }
              return (
                <p
                  key={k}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: head ? 700 : 300,
                    fontSize: "0.9rem",
                    lineHeight: 1.85,
                    color: "var(--color-ink)",
                    margin: k === 0 ? 0 : head ? "1.4rem 0 0" : "0.7rem 0 0",
                  }}
                >
                  {head ? para.slice(2, -2) : para}
                </p>
              );
            })}
          </Disclosure>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}

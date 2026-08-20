import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { VoiceCarousel } from "@/components/VoiceCarousel";
import { FaqShowMore } from "@/components/FaqShowMore";
import { routes } from "@/lib/nav";
import { pillars, spaces, unitGroups, reasons, keepers, voices, faqs } from "@/data/congDongOYen";

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
      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "4rem" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "center", maxWidth: "44ch", margin: "0 auto 1.5rem" }}>
          giữa một ngày dài, phố xá vội vã, bất giác thấy lòng mình vơi đi.
          <br />
          <br />
          ngôi nhà đủ đầy nhưng không làm ta thấy ấm áp.
          <br />
          <br />
          những buổi tập luyện làm ta thấy khỏe, mà có gì đó vẫn chưa thật sự được chạm tới.
          <br />
          <br />
          một tâm trí nhạy bén, nhưng lắm lúc cũng chòng chành.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "center", marginTop: "2.5rem", marginBottom: "2.5rem" }}>
          Chính từ những khoảng lưng chừng ấy, <strong style={{ fontWeight: 500 }}>ở-yên ra đời.</strong>
        </p>
      </Reveal>

      <div className="wrap" style={{ display: "flex", justifyContent: "center", marginBottom: "4rem" }}>
        <div style={{ position: "relative", width: "180px", height: "140px" }}>
          <Image src="/assets/comnam.webp" alt="comnam" fill sizes="180px" style={{ objectFit: "contain" }} />
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
      <div className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="sec-label">đề mục nội dung</span>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.2rem, 8vw, 4.8rem)", lineHeight: 1, color: "var(--color-ink)" }}>200+</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0, maxWidth: "34ch" }}>Nội dung được tổ chức theo 4 không gian, mỗi không gian gồm nhiều unit.</p>
        </div>

        {unitGroups.map((grp) => (
          <div key={grp.title} style={{ padding: "1.4rem 0", borderTop: "1px solid var(--color-mist)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.9rem" }}>{grp.title}</span>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>{grp.unitNames}</p>
          </div>
        ))}

        <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
          <Link className="go mono-link" href={routes.deMucChiTiet} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)" }}>
            xem đầy đủ 200+ đề mục <span className="ar">→</span>
          </Link>
        </div>
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
        <span className="sec-label" style={{ textAlign: "center" }}>những người giữ lửa cho ở-yên</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "center", maxWidth: "48ch", margin: "0 auto 3.5rem" }}>
          ở-yên có ba người bạn đồng hành — mỗi người một vai, một sắc thái, cùng hoà thành một dòng chảy chung.
        </p>

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
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)" }}>{k.desc}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", maxWidth: "58ch", margin: "3.5rem auto 0" }}>
          Cùng nhau, ba người giữ cho ở-yên không chỉ là một group online, mà thật sự là một tổ ấm chung — nơi họ chia sẻ những gì mình đang học được: về cách sống với tâm yên hơn, về cách dừng lại giữa sự vội vã, về cách ở lại với chính mình. Cả ba đều đang sống tại mộc little farm, thực hành đời sống chánh niệm, và sống thong dong giữa một cuộc đời đầy những biến chuyển.
        </p>
      </div>

      {/* TIẾNG NÓI */}
      <Reveal className="wrap" style={{ marginBottom: "4rem", marginTop: "2rem" }}>
        <span className="sec-label">tiếng nói từ ở-yên</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 2rem" }}>
          Những dòng dưới đây là phản hồi thật, được viết bởi người đang tham gia cộng đồng ở-yên, sau khi đọc các bài viết trong nhóm.
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
        <p style={{ fontFamily: "var(--font-sans)", fontStyle: "normal", fontSize: "1.15rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>một lần bước vào, bất cứ khi nào cũng có chỗ để trở về.</p>
        <div className="mem-box">
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--color-ink)", marginBottom: "0.3rem" }}>990.000đ</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--color-stone)", marginBottom: "1.5rem" }}>quyền truy cập trọn đời · private facebook group</span>
          <div style={{ marginBottom: "1.5rem" }}>
            <p className="mem-item">hơn 200 bài viết được hệ thống theo 4 không gian</p>
            <p className="mem-item">thực hành định kỳ</p>
            <p className="mem-item">workshop &amp; livestream hỏi đáp cùng mlf</p>
            <p className="mem-item">cộng đồng thành viên: chia sẻ, kết nối, đồng hành</p>
          </div>
          <a className="cta-solid" href="https://forms.gle/uPn47wFfNREZU2FFA" target="_blank" rel="noopener">
            tham gia ở-yên
          </a>
        </div>
      </Reveal>

      {/* FAQ */}
      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "3rem" }}>
        <FaqShowMore items={faqs} />
      </div>

      <Footer />
    </>
  );
}

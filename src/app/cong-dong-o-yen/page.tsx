import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { VoiceCarousel } from "@/components/VoiceCarousel";
import { FaqPlusList } from "@/components/FaqPlusList";
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
          một tổ ấm tinh thần,
          <br />
          cho những ai muốn ở-yên với mình
        </h1>
      </div>

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 560 }}>
        <ImagePlaceholder label="ảnh · góc ngồi yên, ánh sáng dịu" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      {/* POEM */}
      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "4rem" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "center", maxWidth: "44ch", margin: "0 auto 1.5rem" }}>
          /&nbsp; có lẽ bạn đã từng trải qua những khoảnh khắc này: giữa một ngày dài, phố xá vội vã, công việc dồn dập, bất giác thấy lòng mình rỗng đi.
          <br />
          <br />
          ngôi nhà đủ tiện nghi, nhưng thiếu một làn hơi ấm. cơ thể khỏe mạnh, nhưng chưa từng được lắng nghe. tâm trí tinh anh, nhưng vẫn chòng chành trong những nỗi niềm không gọi thành tên. &nbsp;/
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "center", marginTop: "2.5rem", marginBottom: "2.5rem" }}>
          Chính từ những khoảng lưng chừng ấy, <strong style={{ fontWeight: 500 }}>ở-yên ra đời.</strong>
        </p>
      </Reveal>

      <div className="wrap" style={{ display: "flex", justifyContent: "center", marginBottom: "4rem" }}>
        <Motif name="hien-nha" size={76} />
      </div>

      {/* 4 GIÁ TRỊ */}
      <div className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="sec-label">4 giá trị nền tảng //</span>
        <RevealStagger className="pillar-grid-reveal" staggerMs={120}>
          {pillars.map((p) => (
            <div key={p.vi} style={{ background: "#ffffff", border: "1px solid var(--color-mist)", borderRadius: 4, padding: "1.75rem 1.5rem", textAlign: "center" }}>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "normal", fontSize: "1.6rem", color: "var(--color-moss)", marginBottom: "0.75rem" }}>{p.mark}</span>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>{p.vi}</span>
              <span style={{ display: "block", fontSize: "0.82rem", color: "var(--color-stone-alt)", lineHeight: 1.65 }}>{p.desc}</span>
            </div>
          ))}
        </RevealStagger>
      </div>

      {/* 4 KHÔNG GIAN */}
      <Reveal className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="sec-label">4 không gian ở-yên //</span>
        <div className="space-grid-4">
          {spaces.map((s, i) => (
            <div
              key={s.num}
              style={{ position: "relative", overflow: "hidden", padding: "2rem 1.75rem", borderRight: i % 2 === 0 ? "1px solid var(--color-mist)" : "none", borderBottom: i < 2 ? "1px solid var(--color-mist)" : "none" }}
            >
              <span style={{ position: "absolute", top: "0.5rem", right: "1rem", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "4.5rem", lineHeight: 1, color: "var(--color-mist)" }}>{s.num}</span>
              <div style={{ position: "relative" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-moss)", marginBottom: "0.5rem" }}>{s.en}</span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)", marginBottom: "0.6rem" }}>{s.vi}</span>
                <span style={{ display: "block", fontSize: "0.85rem", color: "var(--color-stone-alt)", lineHeight: 1.7, maxWidth: "26ch" }}>{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 200+ ĐỀ MỤC */}
      <div className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="sec-label">đề mục nội dung //</span>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.2rem, 8vw, 4.8rem)", lineHeight: 1, color: "var(--color-ink)" }}>200+</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0, maxWidth: "34ch" }}>Nội dung được tổ chức theo 4 không gian, mỗi không gian gồm nhiều unit.</p>
        </div>

        {unitGroups.map((grp) => (
          <div key={grp.title} style={{ padding: "1.4rem 0", borderTop: "1px solid var(--color-mist)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.9rem" }}>{grp.title}</span>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>{grp.unitNames}</p>
          </div>
        ))}

        <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
          <Link className="go mono-link" href={routes.deMucChiTiet} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            xem đầy đủ 200+ đề mục <span className="ar">→</span>
          </Link>
        </div>
      </div>

      {/* VÌ SAO CÓ Ở-YÊN */}
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        <span className="sec-label">vì sao có ở-yên //</span>
        <div style={{ borderTop: "1px solid var(--color-mist)" }}>
          {reasons.map((r) => (
            <div key={r.en} style={{ display: "grid", gridTemplateColumns: "5rem 1fr", gap: "1.5rem", padding: "2.25rem 0", borderBottom: "1px solid var(--color-mist)" }}>
              <span style={{ display: "inline-block", transform: r.motif === "nui-suong" ? "rotate(-90deg)" : "none" }}>
                <Motif name={r.motif as "am-tra" | "nui-suong" | "mam-la"} size={56} />
              </span>
              <div>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.5rem" }}>{r.en}</span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "1.02rem", fontWeight: 500, color: "var(--color-ink)", marginBottom: "0.6rem" }}>{r.title}</span>
                <span style={{ display: "block", fontSize: "0.88rem", color: "var(--color-ink)", lineHeight: 1.8, textAlign: "justify", maxWidth: "56ch" }}>{r.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* NGƯỜI GIỮ LỬA */}
      <div className="wrap" style={{ marginBottom: "4rem", paddingBottom: "3rem", paddingTop: "3rem" }}>
        <span className="sec-label">những người giữ lửa cho ở-yên //</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 2.5rem" }}>
          ở-yên có ba người bạn đồng hành — mỗi người một vai, một sắc thái, cùng hoà thành một dòng chảy chung.
        </p>
        {keepers.map((k, i) => {
          const isRight = i % 2 === 1;
          return (
            <div key={k.name} style={{ position: "relative", marginBottom: i < keepers.length - 1 ? "3.5rem" : 0 }}>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1rem", textAlign: isRight ? "right" : "left" }}>
                {k.role}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap", flexDirection: isRight ? "row-reverse" : "row" }}>
                <div style={{ width: 180, height: 220, flexShrink: 0 }}>
                  <ImagePlaceholder label={k.label} aspectRatio="180/220" style={{ width: "100%", height: "100%" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 220, alignItems: isRight ? "flex-end" : "flex-start", textAlign: isRight ? "right" : "left" }}>
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem, 5vw, 2.8rem)", lineHeight: 1.1, color: "var(--color-ink)", marginBottom: "0.9rem" }}>{k.name}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.75, color: "var(--color-stone-alt)", maxWidth: "32ch" }}>{k.desc}</span>
                </div>
              </div>
            </div>
          );
        })}
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", marginTop: "3.25rem" }}>
          Cùng nhau, ba người giữ cho ở-yên không chỉ là một group online, mà thật sự là một tổ ấm chung — nơi họ chia sẻ những gì mình đang học được: về cách sống với tâm yên hơn, về cách dừng lại giữa sự vội vã, về cách ở lại với chính mình. Cả ba đều đang sống tại mộc little farm, thực hành đời sống chánh niệm, và sống thong dong giữa một cuộc đời đầy những biến chuyển.
        </p>
      </div>

      {/* TIẾNG NÓI */}
      <Reveal className="wrap" style={{ marginBottom: "4rem", marginTop: "2rem" }}>
        <span className="sec-label">tiếng nói từ ở-yên //</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 2rem" }}>
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
            <ImagePlaceholder label="ảnh · một khoảnh khắc ở-yên" aspectRatio="4/5" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "center", maxWidth: "36ch", margin: "3rem auto 0" }}>
          chúng tôi không vội đưa bạn đi đâu cả — chỉ mời bạn ở lại một chút, và nhìn lại chính mình.
        </p>
      </div>

      {/* MEMBERSHIP */}
      <Reveal className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="sec-label">lifetime membership //</span>
        <p style={{ fontFamily: "var(--font-sans)", fontStyle: "normal", fontSize: "1.15rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>một lần bước vào — bất cứ khi nào cũng có chỗ để trở về.</p>
        <div className="mem-box">
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--color-ink)", marginBottom: "0.3rem" }}>990.000đ</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--color-stone)", marginBottom: "1.5rem" }}>quyền truy cập trọn đời · private facebook group</span>
          <div style={{ marginBottom: "1.5rem" }}>
            <p className="mem-item">hơn 200 bài viết được hệ thống theo 4 không gian</p>
            <p className="mem-item">thực hành định kỳ</p>
            <p className="mem-item">workshop &amp; livestream hỏi đáp cùng mlf</p>
            <p className="mem-item">cộng đồng thành viên — chia sẻ, kết nối, đồng hành</p>
          </div>
          <a className="cta-solid" href="https://forms.gle/uPn47wFfNREZU2FFA" target="_blank" rel="noopener">
            tham gia ở-yên
          </a>
        </div>
      </Reveal>

      {/* FAQ */}
      <div className="wrap" style={{ marginBottom: "4rem" }}>
        <span className="sec-label">những câu hỏi hay gặp //</span>
        <FaqPlusList items={faqs} />
      </div>

      <Footer />
    </>
  );
}

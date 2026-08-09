import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { tiers, creditUses, spaceCriteria } from "@/data/giua";

export const metadata: Metadata = {
  title: "giữa · middle",
  description: "chúng tôi sắp về Huế. mộc little farm sẽ có một không gian ở đó — retreat, ngày-dưỡng-tâm, và một quán cafe nhỏ mang tên giữa.",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  lineHeight: 1.85,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.1rem",
};

export default function GiuaPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="giữa · middle" />
        <span className="eyebrow">Huế · 2027</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.2rem" }}>
          giữa
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 0.8rem" }}>
          chúng tôi sắp về Huế.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 0.8rem" }}>
          mộc little farm sẽ có một không gian ở đó. một nơi để thỉnh thoảng tổ chức các chương trình ngày-hiền — retreat, ngày-dưỡng-tâm như hồi ở Măng Đen.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: 0 }}>
          khi về Huế, đường đi lại sẽ thuận tiện hơn để mọi người đến với mlf.
        </p>
      </div>

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 540 }}>
        <ImagePlaceholder label="ảnh · không gian dự kiến ở Huế" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "2rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-ink)", marginBottom: "0.4rem" }}>
          stillness + culture
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-moss)" }}>
          câu chuyện của mộc little farm ở Huế
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <p style={{ ...bodyText, textAlign: "center" }}>
          sự an tĩnh trong tâm gặp những giá trị văn hóa truyền đời. cái chậm gặp cái sâu. những gì chúng tôi học được ở Sài Gòn, Măng Đen mang về Huế, gặp những gì Huế vốn có.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.98rem", lineHeight: 1.9, color: "var(--color-stone-alt)", margin: 0 }}>
          không gian ở Huế sẽ là nơi hai điều này gặp nhau.
        </p>
      </Reveal>

      <div style={{ marginBottom: "4.5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · quán cafe giữa" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">giữa</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={bodyText}>
          một điều thú vị chúng tôi sẽ làm ở Huế:{" "}
          <a className="mono-link" href="https://www.instagram.com/giua.middle" target="_blank" rel="noopener">
            ÷ giữa
          </a>
        </p>
        <p style={bodyText}>
          một không gian cafe nhỏ. để mọi người ghé qua. đây sẽ là cách chúng tôi đưa hơi thở tĩnh tại chạm vào đời sống thường ngày: cà phê, đồ chay, và một chỗ ngồi yên.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-stone-alt)", textAlign: "center", margin: "1.5rem 0 0" }}>
          giữa — ở giữa mọi điều.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span className="eyebrow" style={{ marginBottom: "0.3rem" }}>
          cùng gieo mlf ở Huế
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p style={bodyText}>
          để về Huế, chúng tôi cần khá nhiều nguồn lực để xây dựng lại một nơi mới. bạn có thể góp sức cùng mlf bằng cách mua trước các sản phẩm và dịch vụ của mộc little farm.
        </p>
        <p style={bodyText}>
          số tiền bạn đặt trước sẽ trở thành credit, dùng được cho tất cả chương trình và dịch vụ của chúng tôi — trong hiện tại và tương lai. không có thời hạn. và được giảm 20%.
        </p>
        <p style={{ ...bodyText, margin: 0 }}>bạn mua trước những gì bạn sẽ dùng, mà từ đó giúp chúng tôi có nguồn lực để xây dựng nên mlf ở Huế.</p>
      </div>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          các mức tham gia
        </span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "2.5rem" }}>
        {tiers.map((t) => (
          <div
            key={t.pay}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", padding: "1.1rem 0", borderBottom: "1px solid var(--color-mist)", flexWrap: "wrap" }}
          >
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-ink)" }}>{t.pay}</span>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-moss)" }}>→ credit {t.credit}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          credit dùng được cho
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        {creditUses.map((item) => (
          <div key={item} style={{ display: "flex", gap: "0.7rem", padding: "0.5rem 0", fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-ink)" }}>
            <span style={{ color: "var(--color-moss)", flexShrink: 0 }}>•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
          không có hạn sử dụng. có thể chuyển nhượng.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <a href="https://forms.gle/JWwJoysTiyxGh2XL6" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
          tham gia gieo mlf ở Huế <span className="ar">→</span>
        </a>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.6rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>
          2027
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1rem" }}>
          chúng tôi dự kiến mở cửa vào năm 2027.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.98rem", lineHeight: 1.9, color: "var(--color-stone-alt)", margin: "0 0 1rem" }}>
          xin chân thành cảm ơn vì đã luôn ở bên cạnh mlf.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", color: "var(--color-ink)", margin: 0 }}>đợi chúng tôi ở Huế nhé.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">một chút giúp đỡ</span>
      </div>
      <div className="wrap" style={{ marginBottom: "1.5rem", maxWidth: "56ch" }}>
        <p style={{ ...bodyText, margin: 0 }}>nếu anh chị biết một nơi nào đó ở Huế có không gian phù hợp cho mlf, xin hãy gợi ý hoặc giới thiệu giúp chúng tôi nhé:</p>
      </div>
      <div className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        {spaceCriteria.map((item) => (
          <div key={item} style={{ display: "flex", gap: "0.7rem", padding: "0.5rem 0", fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-ink)" }}>
            <span style={{ color: "var(--color-moss)", flexShrink: 0 }}>•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={bodyText}>trường hợp anh chị có một ngôi nhà như thế ở Huế, rất mong anh chị tạo điều kiện trợ duyên để mlf được chăm sóc và tôn tạo không gian đó.</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--color-stone-alt)", margin: 0 }}>chân thành cảm ơn.</p>
      </div>

      <div style={{ marginBottom: "4.5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · vùng đồi Huế nơi mlf tìm không gian" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <Footer />
    </>
  );
}

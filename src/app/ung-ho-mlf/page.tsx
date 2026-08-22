import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { routes } from "@/lib/nav";
import { tiers, creditUses } from "@/data/giua";

export const metadata: Metadata = {
  title: "ủng hộ mlf",
  description: "bạn có thể đồng hành cùng mlf bằng cách mua trước dịch vụ, hoặc trợ duyên cho người hữu duyên.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.1rem",
};

export default function UngHoMlfPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="ủng hộ mlf" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          ủng hộ mlf
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "48ch", margin: 0 }}>
          có hai cách bạn có thể đồng hành cùng mlf — mua trước dịch vụ, hoặc trợ duyên cho người hữu duyên.
        </p>
      </div>

      <div className="wrap" style={{ marginTop: "3.5rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>01 · mua trước dịch vụ</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          để về Huế, chúng tôi cần khá nhiều nguồn lực để xây dựng lại một nơi mới. bạn có thể góp sức cùng mlf bằng cách mua trước các sản phẩm và dịch vụ của mộc little farm.
        </p>
        <p style={proseP}>
          số tiền bạn đặt trước sẽ trở thành credit, dùng được cho tất cả chương trình và dịch vụ của chúng tôi — trong hiện tại và tương lai. không có thời hạn. và được giảm 20%.
        </p>
        <p style={{ ...proseP, margin: 0 }}>bạn mua trước những gì bạn sẽ dùng, mà từ đó giúp chúng tôi có nguồn lực để xây dựng nên mlf ở Huế.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
          các mức tham gia
        </span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "500px" }}>
        {tiers.map((t) => (
          <div
            key={t.pay}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", padding: "1.1rem 0", borderBottom: "1px solid var(--color-mist)", flexWrap: "wrap" }}
          >
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--color-cham-dem)" }}>{t.pay}</span>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-cham-dem)" }}>→ credit {t.credit}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
          credit dùng được cho
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "1.5rem", maxWidth: "56ch" }}>
        {creditUses.map((item) => (
          <div key={item} style={{ display: "flex", gap: "0.7rem", padding: "0.5rem 0", fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-ink)" }}>
            <span style={{ color: "var(--color-cham-dem)", flexShrink: 0 }}>•</span>
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
        <div style={{ marginTop: "1rem" }}>
          <Link className="go mono-link" href={routes.giua} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            đọc thêm về giữa · Huế <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>02 · trợ duyên</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
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
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem 1rem", flexWrap: "wrap" }}>
          <Link className="mono-link" href={routes.retreatOYen} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat ở-yên
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link" href={routes.retreatHamDuong} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat hàm-dưỡng
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link" href={routes.retreatAnVui} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat an-vui
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link" href={routes.khaiTam} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            khai tâm
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

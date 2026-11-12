import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { RegistrationLink } from "@/components/RegistrationLink";
import { routes } from "@/lib/nav";
import { tiers, creditUses } from "@/data/giua";

export const metadata: Metadata = {
  title: "góp cùng mlf",
  description: "bạn có thể đồng hành cùng mlf bằng cách mua trước, hoặc trợ duyên cho người hữu duyên.",
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
        <Breadcrumb label="góp cùng mlf" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          góp cùng mlf
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "48ch", margin: 0 }}>
          có hai cách bạn có thể đồng hành cùng mlf: mua trước, hoặc trợ duyên cho người hữu duyên.
        </p>
      </div>

      <div className="wrap" style={{ marginTop: "3.5rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>01 · mua trước</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p className="pj" style={proseP}>
          để về Huế, nhà mộc cần khá nhiều nguồn lực để dựng lại một nơi mới. bạn có thể góp sức bằng cách mua trước những chương trình của mộc little farm mà mình sẽ dùng.
        </p>
        <p className="pj" style={proseP}>
          số tiền bạn đặt trước sẽ trở thành credit, được cộng thêm 20%, dùng cho các chương trình của nhà mộc bây giờ và sau này. credit không có ngày hết hạn.
        </p>
        <p style={{ ...proseP, margin: 0 }}>bạn mua trước những gì mình sẽ dùng, và từ đó nhà mộc có thêm nguồn lực để dựng nên mlf ở Huế.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "0.6rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
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
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
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
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
          thời hạn hiệu lực: credit sẽ được kích hoạt sau 45 ngày kể từ khi giao dịch mua trước thành công. credit không có thời gian hết hạn.
        </p>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <RegistrationLink href="https://forms.gle/JWwJoysTiyxGh2XL6" programName="góp cùng mlf" className="cta-btn cta-btn--solid">
          tham gia gieo mlf ở Huế <span className="ar">→</span>
        </RegistrationLink>
        <div style={{ marginTop: "1rem" }}>
          <Link className="go mono-link tap" href={routes.giua} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            đọc thêm về giữa · Huế <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>02 · trợ duyên</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "56ch" }}>
        <p style={{ ...proseP, margin: 0 }}>
          nhà mộc mong rằng các chương trình của mộc little farm ít nhiều sẽ mang lại sự lợi lạc cho mọi người. nếu bạn thấy có sự kết nối và muốn mlf đến được với nhiều người hơn, bạn có thể trợ duyên cho người hữu duyên qua các chương trình retreat hàm-dưỡng, retreat ở-yên, retreat an-vui và online retreat khai tâm.
        </p>
      </Reveal>

      <Reveal className="wrap-wide" style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="info-grid">
          <div style={{ padding: "1.5rem", border: "1px solid var(--color-mist)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>
              muốn tài trợ
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0 0 1rem" }}>
              tài trợ tùy duyên: bạn có thể trợ duyên cho các chương trình retreat, để thêm nhiều người đang cần một khoảng dừng có thể đến được với mlf.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0 0 0.7rem" }}>
              mỗi đóng góp, dù lớn hay nhỏ, đều quý với nhà mộc. khi chuyển khoản, bạn ghi giúp nội dung &ldquo;trợ duyên mlf&rdquo; nhé.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
              Ngân hàng Vietcombank
              <br />
              STK: 7945672381
              <br />
              Chủ TK: Hồ Thành Tâm
            </p>
          </div>
          <div style={{ padding: "1.5rem", border: "1px solid var(--color-mist)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>
              muốn nhận hỗ trợ
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0 0 1rem" }}>
              nhận hỗ trợ: những ai thật sự cần đến retreat có thể nhận trợ duyên để tham gia các chương trình của mlf.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>
              khi đăng ký retreat, bạn có thể chọn mức hỗ trợ từ 10% đến 20% tùy nhu cầu của mình. nhà mộc sẽ xác nhận dựa trên số tiền hiện có trong quỹ trợ duyên.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <span className="eyebrow" style={{ display: "block", marginBottom: "0.9rem", color: "var(--color-ink)" }}>
          tham khảo thêm các chương trình được trợ duyên
        </span>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem 1rem", flexWrap: "wrap" }}>
          <Link className="mono-link tap" href={routes.retreatOYen} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat ở-yên
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link tap" href={routes.retreatHamDuong} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat hàm-dưỡng
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link tap" href={routes.retreatAnVui} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            retreat an-vui
          </Link>
          <span style={{ color: "var(--color-mist)" }}>·</span>
          <Link className="mono-link tap" href={routes.khaiTam} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            khai tâm
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)", margin: 0 }}>
          cảm ơn bạn đã góp cùng mlf.
        </p>
      </div>

      <Footer />
    </>
  );
}

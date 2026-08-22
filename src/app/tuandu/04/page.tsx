import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Schedule } from "@/components/Schedule";
import { RegistrationLink } from "@/components/RegistrationLink";
import { routes } from "@/lib/nav";
import { day1, day2, priceTiers } from "@/data/tuanDu04";

export const metadata: Metadata = {
  title: "tuần-du 04 · a pause in Saigon",
  description: "một khoảng dừng giữa những lao xao. 10.10 - 11.10.2026 · An The Village, Châu Đức, Bà Rịa - Vũng Tàu.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.95,
  color: "var(--color-ink)",
  margin: "0 0 1.15rem",
};

export default function TuanDu04Page() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "tuần-du", href: routes.tuanDu }, { label: "tuần-du 04" }]} />
        <span className="eyebrow">10.10.2026 – 11.10.2026</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
          tuần-du 04
        </h1>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>
          a pause in Saigon
        </span>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-stone-alt)", marginBottom: "2rem" }}>
          một khoảng dừng giữa những lao xao
        </span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))", gap: "1.5rem", borderTop: "1px solid var(--color-mist)", paddingTop: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)" }}>địa điểm</span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--color-ink)" }}>An The Village · Thôn 2, Xã Suối Rao, Huyện Châu Đức, Tỉnh Bà Rịa - Vũng Tàu</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)" }}>thời gian</span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-ink)" }}>10.10 - 11.10.2026</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 540 }}>
        <ImagePlaceholder label="ảnh · a pause in Saigon" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <Reveal className="wrap" style={{ marginTop: "4.5rem", marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p style={proseP}>Bữa cơm. Căn bếp. Việc ngồi cạnh một người mà không phải đóng vai gì.</p>
        <p style={{ ...proseP, margin: 0 }}>Chất liệu của chuyến này — là chính mình, khi được để yên.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "3.5rem" }}>
        <div style={{ borderLeft: "2px solid var(--color-cham-dem)", padding: "1.75rem 2rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
            đó là một khoảng dừng đủ thật để con người trở lại làm người.
          </p>
        </div>
      </div>

      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p style={proseP}>bạn có nhận ra rằng phần lớn thời gian, ta chỉ đóng vai một con người: vai công việc, vai người hiểu biết, vai người đang cố gắng trở nên tốt hơn…</p>
        <p style={proseP}>nhiều khi ta nói chuyện, nhưng không thật sự nói điều mình nghĩ.</p>
        <p style={proseP}>cười, nhưng không biết mình có đang vui không.</p>
        <p style={proseP}>mệt, nhưng không dừng lại, vì &ldquo;ai cũng vậy&rdquo;.</p>
        <p style={proseP}>dần dần,</p>
        <p style={proseP}>mình không còn biết:</p>
        <p style={{ ...proseP, margin: 0 }}>cảm giác &ldquo;chỉ là mình&rdquo; nó như thế nào.</p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p style={proseP}>cũng mấy khi ta chủ động dừng lại để nghỉ ngơi, nhưng:</p>
        <p style={proseP}>hình như vẫn đang cố trở thành một phiên bản tốt hơn</p>
        <p style={{ ...proseP, margin: 0 }}>lúc đó, thật ra mình chỉ đổi vai.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.04em", color: "var(--color-cham-dem)" }}>
          / a pause /: tự nhiên, khoảng trống, không hoàn hảo, không healing, không cao trào cảm xúc
        </span>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3.5rem", maxWidth: "56ch" }}>
        <p style={proseP}>chỉ:</p>
        <div style={{ marginBottom: "1.15rem" }}>
          {["ăn khi đói", "nói khi muốn nói", "im khi không muốn nói", "ở cạnh người khác mà không phải dè chừng"].map((item) => (
            <div key={item} style={{ display: "flex", gap: "0.7rem", padding: "0.3rem 0", fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)" }}>
              <span style={{ color: "var(--color-stone)", flexShrink: 0 }}>·</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p style={{ ...proseP, margin: 0 }}>
          và lạ là, chỉ khi trở lại được như vậy, mình mới thật sự nghỉ.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "3.5rem" }}>
        <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.75rem 2rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
            &ldquo;một cuối tuần không cố gắng để &lsquo;trở thành ai khác&rsquo;. chỉ chậm lại, ăn cùng nhau, và ở cạnh những con người rất thật.&rdquo;
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">lịch trình</span>
      </div>
      <div className="wrap" style={{ marginBottom: "3.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.9rem" }}>
          ngày 01 · thứ 7
        </span>
        <Schedule rows={day1} />
      </div>
      <div className="wrap" style={{ marginBottom: "1rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.9rem" }}>
          ngày 02 · chủ nhật
        </span>
        <Schedule rows={day2} />
      </div>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", lineHeight: 1.7, color: "var(--color-stone-alt)", margin: "1rem 0 0" }}>
          *Tâm, Thuận, Vũ là những người đồng hành tại mộc little farm.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem", marginTop: "3.5rem" }}>
        <span className="eyebrow">thông tin và đăng ký</span>
      </div>
      <div className="wrap" style={{ marginBottom: "1.5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          Chi phí: 3.800.000đ/người
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0.4rem 0 0" }}>
          bao gồm chỗ ở (2 người/phòng), các bữa ăn, và toàn bộ không gian 2 ngày, xe di chuyển đi-về từ trung tâm TP.HCM đến địa điểm tổ chức.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0.4rem 0 0" }}>
          Giới hạn: 15 người
        </p>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <div style={{ border: "1px solid var(--color-mist)" }}>
          {priceTiers.map((t, i) => (
            <div
              key={t.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "1rem",
                padding: "0.9rem 1.1rem",
                borderBottom: i < priceTiers.length - 1 ? "1px solid var(--color-mist)" : "none",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-ink)" }}>{t.label}</span>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-cham-dem)" }}>{t.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 2rem" }}>
          nếu bạn cảm thấy mình cần một khoảng dừng, đây có thể là nơi để bắt đầu.
        </p>
        <RegistrationLink href="https://forms.gle/fBbYr3dUDHqZkh9bA" programName="tuần-du 04 · a pause in Saigon" className="cta-btn cta-btn--solid">
          đăng ký <span className="ar">→</span>
        </RegistrationLink>
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

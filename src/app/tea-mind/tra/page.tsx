import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "trà · workshop tea·mind",
  description: "một buổi ngồi lại bên chén trà — chậm tay, chậm lời, để tâm mình lắng theo từng ngụm nước.",
};

const steps = [
  { num: "01", title: "ngồi xuống, thở chậm", desc: "buông những gì vừa mang theo, để cơ thể thật sự có mặt." },
  { num: "02", title: "chọn trà, đun nước", desc: "không vội — quan sát nước sôi, nghe tiếng lửa reo." },
  { num: "03", title: "rót và mời", desc: "một cử chỉ nhỏ, được làm chậm và trọn vẹn." },
  { num: "04", title: "ngồi lại cùng nhau", desc: "uống trong im lặng, hoặc chia sẻ nếu lòng muốn." },
];

export default function TeaMindTraPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem" }}>
        <Breadcrumb trail={[{ label: "tea · mind", href: routes.teaMind }, { label: "trà" }]} />
        <span className="eyebrow">workshop · tea.mind</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.6rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.6rem" }}>
          trà
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 2.5rem" }}>
          một buổi ngồi lại bên chén trà — chậm tay, chậm lời, để tâm mình lắng theo từng ngụm nước.
        </p>
      </div>

      <div style={{ height: "48vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · pha trà" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "3.5rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow">về buổi trà</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          Không phải một lớp học pha trà đúng cách — mà là một khoảng lặng để nhìn lại nhịp tay mình đang vội vã đến đâu.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          Vũ sẽ đồng hành cùng bạn qua từng bước — chọn trà, đun nước, rót và mời — không có gì đúng-sai, chỉ có việc ở lại trọn vẹn trong từng cử chỉ.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">một buổi diễn ra như thế nào</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        {steps.map((s) => (
          <div key={s.num} className="step-row">
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-moss)", flex: "none", width: "2rem" }}>{s.num}</span>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.95rem", color: "var(--color-ink)", marginBottom: "0.3rem" }}>{s.title}</span>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-stone-alt)", margin: 0 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "44ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>&ldquo;cái-đẹp không phải để giữ, mà để cảm.&rdquo;</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "4rem", textAlign: "center" }}>
        <a href="http://instagram.com/tea.mind/" target="_blank" rel="noopener" className="cta-btn">
          theo dõi tại ig <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.4rem" }}>
          tham khảo thêm
        </span>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
          <Link className="mono-link" href={routes.teaMindGom} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            gốm
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.teaMindTranh} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            tranh
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.teaMindLich} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            lịch
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Link className="mono-link" href={routes.teaMind} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          ← xem lại tea.mind
        </Link>
      </div>

      <Footer />
    </>
  );
}

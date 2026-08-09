import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { FaqList } from "@/components/FaqList";
import { TroDuyen } from "@/components/TroDuyen";
import { routes } from "@/lib/nav";
import { notList, requireList, specialList, methods, faqs, writeups } from "@/data/khaiTam";

export const metadata: Metadata = {
  title: "khai tâm · một không gian để hiểu rõ tâm mình",
  description: "khai tâm là chương trình thực hành nội tâm dựa trên các phương pháp từ thiền học Phật giáo (Vipassana, công án Thiền tông) và triết lý Đông phương. 10 buổi 1-1, 30 ngày.",
};

const li: React.CSSProperties = { display: "flex", gap: "0.7rem", padding: "0.5rem 0", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-ink)" };

export default function KhaiTamPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem" }}>
        <Breadcrumb trail={[{ label: "be-still", href: routes.beStill }, { label: "khai tâm" }]} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-mist)", display: "block", marginBottom: "1.2rem" }}>
          chương trình online retreat (1-1) trong 30 ngày
        </span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          khai tâm
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, color: "var(--color-stone)", maxWidth: "42ch", margin: "0 0 1.75rem" }}>
          là một không gian để hiểu rõ tâm mình
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 2.5rem" }}>
          khai tâm là chương trình thực hành nội tâm dựa trên các phương pháp từ thiền học Phật giáo (Vipassana, công án Thiền tông) và triết lý Đông phương.
        </p>
      </div>

      <div style={{ height: "44vh", minHeight: 280, maxHeight: 420 }}>
        <ImagePlaceholder label="ảnh · nhật ký khai tâm" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "3.5rem", marginBottom: "3.5rem", maxWidth: "56ch", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.06em", color: "var(--color-stone)" }}>10 buổi 1-1 (90 phút/buổi) · 30 đề mục phản chiếu trong 30 ngày</span>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
        <div>
          <span className="eyebrow-serif">đây không phải</span>
          {notList.map((item) => (
            <div key={item} style={li}>
              <span className="li-mark">·</span>
              <span style={{ color: "var(--color-stone)" }}>{item}</span>
            </div>
          ))}
        </div>
        <div>
          <span className="eyebrow-serif">mà là một thực hành đòi hỏi</span>
          {requireList.map((item) => (
            <div key={item} style={li}>
              <span className="li-mark">·</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow-serif">điều đặc biệt trong khai tâm</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "4rem", maxWidth: "56ch" }}>
        {specialList.map((item) => (
          <div key={item} style={li}>
            <span className="li-mark">——</span>
            <span>{item}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow-serif">phương pháp làm việc</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <div style={{ position: "relative", paddingLeft: "1.8rem" }}>
          <div style={{ position: "absolute", left: "0.5rem", top: "0.4rem", bottom: "1.8rem", width: 1, background: "var(--color-mist)" }} />
          {methods.map((m, i) => (
            <div key={i} className="method-block" style={{ position: "relative" }}>
              {m.n ? (
                <span
                  style={{
                    position: "absolute",
                    left: "-1.8rem",
                    top: "0.05rem",
                    width: "1.4rem",
                    height: "1.4rem",
                    borderRadius: "50%",
                    border: "1px solid var(--color-moss)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    color: "var(--color-moss)",
                  }}
                >
                  {m.n}
                </span>
              ) : null}
              {m.title ? (
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.02rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>{m.title}</span>
              ) : null}
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>{m.body}</p>
              {m.points ? (
                <div style={{ marginTop: "0.75rem" }}>
                  {m.points.map((p) => (
                    <div key={p} style={{ ...li, padding: "0.3rem 0" }}>
                      <span className="li-mark">·</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="wrap" style={{ padding: "2rem 1.5rem 5rem", textAlign: "center" }}>
        <p style={{ maxWidth: "52ch", margin: "0 auto", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.35rem", lineHeight: 1.5, color: "var(--color-ink)", fontWeight: 300 }}>
          /&nbsp;&nbsp;bên trong mỗi người vốn có một dòng chảy của sự sáng tỏ — chỉ là có những &ldquo;tảng đá&rdquo; đang chặn nó lại.&nbsp;&nbsp;/
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow-serif">nhật ký khai tâm</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>với những hướng dẫn cụ thể để tương tác và làm việc trong 30 ngày</p>
      </div>

      <div style={{ marginBottom: "2.5rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
        {[1, 2, 3, 4].map((i) => (
          <ImagePlaceholder key={i} label={`ảnh · trang nhật ký ${i}`} aspectRatio="3/4" />
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        <a
          className="go mono-link"
          href="https://docs.google.com/presentation/d/e/2PACX-1vTSUJQnuXngdmcoKqpqr8_4HjOdcrWWIwslJt8aemivIfPYCmCiGdfcUOem6VvFc7MBgn4Jrji0FgrI/pub?start=false&loop=false&delayms=3000"
          target="_blank"
          rel="noopener"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink)" }}
        >
          chi tiết chương trình mở liên kết mới tại đây <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow-serif">những ghi chép về khai tâm</span>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        {writeups.map((w) => (
          <div key={w.href} style={li}>
            <span className="li-mark">—</span>
            <a className="go mono-link" href={w.href} target="_blank" rel="noopener" style={{ fontFamily: "var(--font-sans)", color: "var(--color-ink)" }}>
              {w.title} <span className="ar">→</span>
            </a>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <a href="https://forms.gle/n5QQHnsqcjHWRVKy9" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
          đăng ký <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "58ch", borderTop: "1px solid var(--color-mist)", paddingTop: "2rem" }}>
        <span className="eyebrow-serif">! một điều cần biết trước khi bước vào hành trình</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.85, color: "var(--color-stone-alt)", textAlign: "justify", margin: "0 0 1rem" }}>
          Khai tâm là một không gian sâu, không phải trị liệu tâm lý, và người đồng hành không phải là nhà trị liệu. Những gì được viết trong nhật ký khai tâm và chia sẻ trong các buổi 1-1 được giữ kín, trong phạm vi cho phép của pháp luật.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.85, color: "var(--color-stone-alt)", textAlign: "justify", margin: 0 }}>
          Mọi quyết định đưa ra trong hoặc sau hành trình là của riêng người tham gia. khai tâm chỉ đồng hành để nhìn rõ hơn, không dẫn dắt hay chịu trách nhiệm cho những lựa chọn ấy.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow-serif">câu hỏi thường gặp</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "58ch" }}>
        <FaqList items={faqs} />
      </div>

      <TroDuyen />

      <div className="wrap" style={{ marginBottom: "4rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.4rem" }}>
          tham khảo thêm hành trình khác
        </span>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
          <Link className="mono-link" href={routes.imLangChuNghia} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            im lặng, chữ nghĩa
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.clariTea} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            clari-tea
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.phiaSang} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            phía sáng
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.nhatHien} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            nhất-hiện
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link className="go mono-link" href={routes.beStill} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          về trang be-still <span className="ar">→</span>
        </Link>
      </div>

      <Footer />
    </>
  );
}

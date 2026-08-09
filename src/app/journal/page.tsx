import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { JournalIssue } from "@/components/JournalIssue";
import { issues, defaultIssueIndex, columns } from "@/data/journal";

export const metadata: Metadata = {
  title: "mlf journal",
  description: "một quyển tạp chí được ươm mầm bởi mlf — những ghi chép về ở-yên.",
};

export default function JournalPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "0.5rem" }}>
        <Breadcrumb label="mlf journal" />
      </div>

      <JournalIssue issues={issues} defaultIndex={defaultIssueIndex} />

      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "4rem", maxWidth: "60ch" }}>
        <span className="folio" style={{ display: "block", marginBottom: "1.25rem" }}>
          về mlf journal //
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>một ghi chép để ở yên.</p>
        <p className="drop-cap" style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          Đi qua nhiều nhà, nhiều người, nhiều vùng đất — nhưng rốt cuộc là đi sâu vào mình.
        </p>
      </Reveal>

      <div className="wrap-wide" style={{ marginBottom: "4rem" }}>
        <span className="folio" style={{ display: "block", marginBottom: "1rem" }}>
          mục lục //
        </span>
        <RevealStagger staggerMs={80}>
          {columns.map((c) => (
            <div key={c.num} className="toc-row">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-stone)", flex: "none", width: "1.6rem" }}>{c.num}</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)", flex: "none" }}>{c.name}</span>
              <span className="toc-leader" />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.92rem", color: "var(--color-stone-alt)", flex: "none", maxWidth: "32ch", textAlign: "right" }}>{c.tagline}</span>
            </div>
          ))}
        </RevealStagger>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "60ch" }}>
        <div style={{ background: "var(--color-paper-dem)", borderRadius: "2px", padding: "2rem 2.25rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)", display: "block", marginBottom: "1rem" }}>chuyên mục nhỏ · gửi mlf</span>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
            Bạn có thể gửi cho chúng tôi một lá thư, như một người bạn viết cho một người quen hiền — về{" "}
            <a href="mailto:hello@moclittlefarm.com" style={{ color: "var(--color-ink)", textDecoration: "underline" }}>
              hello@moclittlefarm.com
            </a>
            .
          </p>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "60ch" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>lời mời cộng tác · quyển 02 //</span>
        </div>
        <p className="drop-cap" style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.5rem" }}>
          Chúng tôi tin rằng mỗi con người đều mang trong mình một ngọn lửa nhỏ — đủ để thắp sáng những điều tốt lành quanh mình. Nếu bạn cũng đang sống, đang quan sát, đang lắng nghe cuộc đời bằng một trái tim mở — hãy cùng chúng tôi góp một tiếng nói, một góc nhìn, một mảnh cảm xúc cho mlf journal quyển 02, phát hành Tết 2027 (29 tháng Chạp).
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 1.5rem" }}>
          Chúng tôi không tìm kiếm những cây bút chuyên nghiệp, chỉ mong được lắng nghe những câu chuyện chân thành. Đây là hoạt động cộng đồng, không có nhuận bút — quyền tác giả vẫn thuộc về bạn.
        </p>
        <a className="cta-btn" href="mailto:hello@moclittlefarm.com">
          gửi bài / ý tưởng cộng tác
        </a>
      </div>

      <Footer />
    </>
  );
}

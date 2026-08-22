import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Disclosure } from "@/components/Disclosure";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "cách tiếp cận của khóa học · im lặng chữ nghĩa",
  description: "phương pháp tiếp cận độc quyền của khóa học viết từ tâm im lặng chữ nghĩa",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.3rem",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "1.8rem",
  lineHeight: 1.3,
  color: "var(--color-ink)",
  margin: "2rem 0 1.5rem",
};

const subsectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 700,
  fontSize: "1.05rem",
  color: "var(--color-ink)",
  margin: "1.5rem 0 0.8rem",
};

export default function CachTiepCanPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "be-still", href: routes.beStill }, { label: "im lặng chữ nghĩa", href: routes.imLangChuNghia }, { label: "cách tiếp cận của khóa học" }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem, 5.5vw, 3rem)", lineHeight: 1.2, color: "var(--color-ink)", margin: "0 0 1.6rem", textAlign: "left" }}>
          cách tiếp cận của khóa học
        </h1>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        <h2 style={sectionTitle}>các vấn đề phổ biến của học viên</h2>
        <p style={proseP}>
          Những điểm kẹt thường gặp được phân loại theo 6 lĩnh vực. Nhận biết vấn đề của mình là bước đầu tiên để vượt qua.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "70ch" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
          <div style={{ borderTop: "2px solid var(--color-cham-dem)", paddingTop: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem", fontWeight: 600 }}>01 · Tâm</span>
            <ul style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0", paddingLeft: "0", listStyle: "none" }}>
              <li style={{ marginBottom: "0.7rem" }}>· Sợ viết dở, sợ bị đánh giá</li>
              <li style={{ marginBottom: "0.7rem" }}>· Cố viết hay → chữ gồng</li>
              <li style={{ marginBottom: "0.7rem" }}>· Thu mình lại, không dám thể hiện</li>
              <li>· Biết cảm xúc nhưng không diễn đạt</li>
            </ul>
          </div>

          <div style={{ borderTop: "2px solid var(--color-cham-dem)", paddingTop: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem", fontWeight: 600 }}>02 · Thân</span>
            <ul style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0", paddingLeft: "0", listStyle: "none" }}>
              <li style={{ marginBottom: "0.7rem" }}>· Không nghe và cảm được chữ</li>
              <li style={{ marginBottom: "0.7rem" }}>· Hơi thở không hòa với nhịp câu</li>
              <li style={{ marginBottom: "0.7rem" }}>· Mất kết nối với tạng phủ</li>
              <li>· Thân mệt → chữ yếu</li>
            </ul>
          </div>

          <div style={{ borderTop: "2px solid var(--color-cham-dem)", paddingTop: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem", fontWeight: 600 }}>03 · Kỹ Thuật</span>
            <ul style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0", paddingLeft: "0", listStyle: "none" }}>
              <li style={{ marginBottom: "0.7rem" }}>· Viết lan man – thiếu trụ</li>
              <li style={{ marginBottom: "0.7rem" }}>· Nhiều chữ thừa – câu dài</li>
              <li style={{ marginBottom: "0.7rem" }}>· Một nhịp đều – không tĩnh/động</li>
              <li>· Nhầm lẫn thể loại</li>
            </ul>
          </div>

          <div style={{ borderTop: "2px solid var(--color-cham-dem)", paddingTop: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem", fontWeight: 600 }}>04 · Khí</span>
            <ul style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0", paddingLeft: "0", listStyle: "none" }}>
              <li style={{ marginBottom: "0.7rem" }}>· Chữ phẳng – thiếu lực</li>
              <li style={{ marginBottom: "0.7rem" }}>· Một màu: chỉ mềm/tĩnh/lý trí</li>
              <li style={{ marginBottom: "0.7rem" }}>· Không đồng bộ thân – khí – tâm</li>
              <li>· Chữ không vang, không ngân</li>
            </ul>
          </div>

          <div style={{ borderTop: "2px solid var(--color-cham-dem)", paddingTop: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem", fontWeight: 600 }}>05 · Tốc Độ</span>
            <ul style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0", paddingLeft: "0", listStyle: "none" }}>
              <li style={{ marginBottom: "0.7rem" }}>· Viết lâu nhưng không ra chữ</li>
              <li style={{ marginBottom: "0.7rem" }}>· Quá kiểm soát → nghẽn flow</li>
              <li>· Chữ đẹp nhưng không sống</li>
            </ul>
          </div>

          <div style={{ borderTop: "2px solid var(--color-cham-dem)", paddingTop: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem", fontWeight: 600 }}>06 · Bản Ngã</span>
            <ul style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0", paddingLeft: "0", listStyle: "none" }}>
              <li style={{ marginBottom: "0.7rem" }}>· Không cảm thấy "thuộc về" chữ</li>
              <li style={{ marginBottom: "0.7rem" }}>· Nhìn thấy nhưng không sống cùng</li>
              <li>· Quan sát mà không nhập vai</li>
            </ul>
          </div>
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "2rem" }}>
        <h2 style={sectionTitle}>phương pháp tiếp cận</h2>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 1rem", maxWidth: "60ch" }}>
          Viết không chỉ là dùng ngôn từ. <strong>Viết là tiến trình thân-tâm-khí</strong> — chữ sống được bao nhiêu tùy vào mức độ bạn hiện diện trong chính mình.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "70ch" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
          <div style={{ borderLeft: "3px solid var(--color-cham-dem)", paddingLeft: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.8rem", fontWeight: 600 }}>01 · Hơi Thở</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Breath-based Writing</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
              Hơi thở là đơn vị nhịp đầu tiên của chữ. Luyện gắn nhịp câu với nhịp thở, nhận ra đoạn nào "nghẽn", để chữ theo một hơi thở trọn vẹn.
            </p>
          </div>

          <div style={{ borderLeft: "3px solid var(--color-cham-dem)", paddingLeft: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.8rem", fontWeight: 600 }}>02 · Thân</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Body-based Writing</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
              Kích hoạt bốn trung tâm: tim (ấm, mở, mềm), bụng (vững, có trụ), gan (mạnh, quyết đoán), phổi (thoáng, nhẹ). Chữ không còn đơn điệu.
            </p>
          </div>

          <div style={{ borderLeft: "3px solid var(--color-cham-dem)", paddingLeft: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.8rem", fontWeight: 600 }}>03 · Khí</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Energy-based Writing</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
              Khí là năng lượng sống trong câu chữ. Luyện nghe khí: có đẩy, có trụ, có ngân không. Chỉnh khí trước khi chỉnh kỹ thuật.
            </p>
          </div>

          <div style={{ borderLeft: "3px solid var(--color-cham-dem)", paddingLeft: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.8rem", fontWeight: 600 }}>04 · Cây Sống</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Living Tree Model</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
              Gốc (tâm) → Thân (khí) → Cành (kỹ thuật) → Lá (thể loại). Nếu gốc yếu, thân gãy. Giữ sự đồng bộ thân-khí-chữ.
            </p>
          </div>

          <div style={{ borderLeft: "3px solid var(--color-cham-dem)", paddingLeft: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.8rem", fontWeight: 600 }}>05 · Thiên Nhiên</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Elemental Writing</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
              Chuyển đổi khí tính: Đất (trầm, vững), Nước (mềm, trôi), Lửa (dồn, bật), Gió (thoáng, nhẹ). Bài viết linh hoạt và giàu biểu cảm.
            </p>
          </div>

          <div style={{ borderLeft: "3px solid var(--color-cham-dem)", paddingLeft: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.8rem", fontWeight: 600 }}>06 · Nghe</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Listening to Words</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
              Nghe thân khi đọc chữ. Cảm nhịp tim, ngực, bụng. Phân biệt chữ có điểm rơi, điểm sáng, điểm trụ. Định vị năng lượng trong văn bản.
            </p>
          </div>

          <div style={{ borderLeft: "3px solid var(--color-cham-dem)", paddingLeft: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.8rem", fontWeight: 600 }}>07 · Tạng Phủ</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Organ-based Writing</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
              Viết từ tim (cảm xúc), bụng (chắc), gan (lực), phổi (rộng, nhẹ). Bài viết giàu sắc thái, có sức nén/bung, chiều sâu cảm xúc.
            </p>
          </div>

          <div style={{ borderLeft: "3px solid var(--color-cham-dem)", paddingLeft: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.8rem", fontWeight: 600 }}>08 · Im Lặng</span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.8rem" }}>Silence as Method</h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0" }}>
              Kỹ thuật quan trọng nhất. Im lặng giúp thu năng lượng, lắng vào phần sâu, nghe chữ rơi. <strong>Không có im lặng → không thể có chữ thật.</strong>
            </p>
          </div>
        </div>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        <h2 style={sectionTitle}>mục tiêu cuối cùng</h2>

        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 2rem", maxWidth: "50ch", marginLeft: "auto", marginRight: "auto" }}>
            không phải <strong>viết hay</strong>, mà <strong>viết thật</strong>
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", maxWidth: "60ch", margin: "0 auto 2.5rem" }}>
            <div style={{ textAlign: "left" }}>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem" }}>tiêu chí</span>
              <ul style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0", paddingLeft: "0", listStyle: "none" }}>
                <li style={{ marginBottom: "0.8rem" }}>· chữ phải sống</li>
                <li style={{ marginBottom: "0.8rem" }}>· chữ phải thở</li>
                <li style={{ marginBottom: "0.8rem" }}>· chữ phải có khí</li>
                <li>· chữ phải mang năng lượng của bạn</li>
              </ul>
            </div>

            <div style={{ textAlign: "left" }}>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1rem" }}>hành trình</span>
              <ul style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0", paddingLeft: "0", listStyle: "none" }}>
                <li style={{ marginBottom: "0.8rem" }}>· trở về cơ thể</li>
                <li style={{ marginBottom: "0.8rem" }}>· kết nối với tâm</li>
                <li style={{ marginBottom: "0.8rem" }}>· nhận biết dòng khí</li>
                <li>· viết từ nơi sống thật nhất</li>
              </ul>
            </div>
          </div>
        </div>

        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-stone)", textAlign: "center", margin: "0" }}>
          mỗi bài viết trở thành một sinh thể, giúp bạn truyền tải mọi thứ sống động.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        <h2 style={sectionTitle}>chia sẻ từ học viên</h2>
      </Reveal>

      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "70ch" }}>
        <Disclosure
          trigger={
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.05rem", color: "var(--color-ink)" }}>
              Học viên 1: thả lỏng - lắng nghe - chạm
            </span>
          }
        >
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)" }}>
            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Phần nào bạn thấy chạm đến bạn nhiều nhất?</p>
            <p style={{ marginBottom: "1rem" }}>
              Buổi học nào em cũng thấy chạm hết ạ. Nhưng buổi 3 "nhận diện và chuyển hóa" chắc có lẽ là buổi em thấy chạm nhất. Có một số đoạn em thấy rất chạm với mình:
            </p>
            <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
              <li>- Dùng chữ để soi tâm - uốn nắn tâm</li>
              <li>- Mình có thực hiện diện với bản thân và câu chữ không?</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              Em nhận thấy đa phần em viết dựa trên hoặc rất lý trí, hoặc sẽ rất cảm xúc chứ chưa có sự hiện diện thực sự.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Ngoài ra các buổi 1:1 với anh Tâm em cũng thấy chạm được nhiều thứ trong mình. Em nhận thấy mô thức của mình khi viết. Trước đó em nghĩ nó là tính cách của mình, nhưng em thấy có gì đó dường như không đúng. Càng ngày em càng thấy mình tự tách mình ra khỏi thế giới và trở nên cô độc.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Buổi trò chuyện với anh Tâm em nhận ra đã đến lúc mình cần phá vỡ các giới hạn của mình. Cảm ơn anh.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Phần nào bạn thấy khó nhất khi học?</p>
            <p style={{ marginBottom: "1rem" }}>
              Càng về sau em thấy càng khó. Làm thế nào để có thể viết bằng góc nhìn của bầu trời mà không phải đám mây? Em cảm thấy đoạn đầu khi viết em có thể nhìn rộng hơn, đến đoạn sau năng lượng và sự tập trung, cảm nhận lại trở nên yếu.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Còn khó nhất với em chắc có lẽ là viết bằng nhiều thể loại và viết số lượng chữ nhiều. Em thấy mình bị một màu, chưa quen với các thể loại khác nên khi viết một thể loại xa lạ em không biết cách để mang khí vào.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Sau khóa học, bạn có nhận ra sự thay đổi nào?</p>
            <p style={{ marginBottom: "1rem" }}>
              Biết dừng lại và quan sát mình hơn. Có khả năng ở lại với cảm xúc, em thấy rất rõ sự một màu của mình.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Khoảnh khắc "à, ra là vậy"?</p>
            <p style={{ marginBottom: "1rem" }}>
              Em nghĩ là nội dung rút ngắn để chữ có khí lực.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Lời nhắn cho người hướng dẫn:</p>
            <p>
              Em cảm ơn anh thiệt nhiều ạ. Lớp Viết này có lẽ là một trong những lớp học chất lượng với người hướng dẫn có tâm.
            </p>
          </div>
        </Disclosure>

        <Disclosure
          trigger={
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.05rem", color: "var(--color-ink)" }}>
              Học viên 2: Trở về nhà
            </span>
          }
        >
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)" }}>
            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Phần nào bạn thấy chạm đến bạn nhiều nhất?</p>
            <p style={{ marginBottom: "1rem" }}>
              Đưa chữ về với mình. Chữ trong tâm, trong thân. Không còn chỉ là một công cụ nữa.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Phần nào bạn thấy khó nhất khi học?</p>
            <p style={{ marginBottom: "1rem" }}>
              Về khí trong chữ.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Sau khóa học, bạn có nhận ra sự thay đổi nào?</p>
            <p style={{ marginBottom: "1rem" }}>
              Biết dừng lại và quan sát mình hơn. Ít phán xét bản thân hơn. Dễ chấp nhận trạng thái lên – xuống.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Khoảnh khắc "à, ra là vậy"?</p>
            <p style={{ marginBottom: "1rem" }}>
              Khi đọc những nhận xét của anh Tâm. Em nghĩ, sao anh có thể nhìn ra được vấn đề mình không muốn nhìn nhận.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Sau khóa học, bạn có tiếp tục viết không?</p>
            <p style={{ marginBottom: "1rem" }}>
              Viết không đều nhưng có ý thức.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Lời nhắn cho người hướng dẫn:</p>
            <p>
              Cảm ơn anh đã đưa chữ trở về trong em. Rất mong có thể được anh dẫn dắt tiếp trên con đường thông qua chữ viết.
            </p>
          </div>
        </Disclosure>

        <Disclosure
          trigger={
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.05rem", color: "var(--color-ink)" }}>
              Học viên 3: mở mang, chạm, hiểu
            </span>
          }
        >
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)" }}>
            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Phần nào bạn thấy chạm đến bạn nhiều nhất?</p>
            <p style={{ marginBottom: "1rem" }}>
              Khi viết không chỉ dùng tay và đầu mà phải từ tâm mà ra và dùng thân để cảm nhận.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Phần nào bạn thấy khó nhất khi học?</p>
            <p style={{ marginBottom: "1rem" }}>
              Nghệ thuật đặt tâm khi viết.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Sau khóa học, bạn có nhận ra sự thay đổi nào?</p>
            <p style={{ marginBottom: "1rem" }}>
              Biết dừng lại và quan sát mình hơn. Ít phán xét bản thân hơn. Dễ chấp nhận trạng thái lên – xuống.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Khoảnh khắc "à, ra là vậy"?</p>
            <p style={{ marginBottom: "1rem" }}>
              Chữ nhạt không phải là lỗi, chỉ cần học cách chấp nhận, quay về hiện diện trọn vẹn để cảm nhận sự sống động của chữ.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Sau khóa học, bạn có tiếp tục viết không?</p>
            <p style={{ marginBottom: "1rem" }}>
              Hiện tại chưa viết nhưng muốn quay lại.
            </p>

            <p style={{ marginBottom: "1rem", fontWeight: 600 }}>Lời nhắn cho người hướng dẫn:</p>
            <p>
              Cảm ơn anh vì rất nhiều điều em đã học được trong khóa học này, cảm ơn sự tâm huyết và kiên nhẫn của anh.
            </p>
          </div>
        </Disclosure>
      </RevealStagger>

      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        <h2 style={sectionTitle}>phản hồi đề mục</h2>
        <p style={proseP}>
          Dưới đây là những phản hồi chi tiết dành cho các tình huống viết phổ biến, giúp bạn nhận ra điểm kẹt của mình và cách vượt qua.
        </p>
      </Reveal>

      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "70ch" }}>
        <Disclosure
          trigger={
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.05rem", color: "var(--color-ink)" }}>
              Khi học viên có tiềm năng viết tốt, nhưng ngại diễn đạt bản thân
            </span>
          }
        >
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", paddingTop: "1rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Năng lượng trong bài:</strong> Vừa sắc sảo, vừa uể oải. "Tỉnh" nhưng "mỏi".
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Em có sự quan sát và cảm thụ tốt, nhưng bị rối giữa các thái cực:
            </p>
            <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
              <li>Chấp nhận buồn và vui là 2 mặt của đồng xu không tách biệt. Chấp nhận thành công và thất bại là 2 điều tất yếu.</li>
              <li>Từ trạng thái chấp nhận cuộc sống, không có nghĩa là ta sống mặc kệ, sống trôi nổi.</li>
              <li>Học về "khí lực" của chữ, để em hiểu được bên trong mình hơn, cho phép người đọc chạm vào những phần sâu của em.</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Điểm kẹt:</strong> Em có nội lực mạnh, có ngòi bút diễn đạt được bên trong mình. Nhưng bị quấn trong chính trí tuệ của mình - "nghiện nhìn sâu quá mức đến mức không sống được trong điều mình thấy."
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Năng lượng tổng thể giống như "một người đang tỉnh trong giấc mơ của chính mình": biết là mơ, biết là đang tỉnh, nhưng vẫn chưa bước ra được. Do còn chấp nhận sự thả lỏng, buông lung của mình.
            </p>
            <p>
              <strong>Hướng phát triển:</strong> Trong con đường Trung đạo, không có sự thả lỏng hoàn toàn cũng không có sự dính mắc hoàn toàn. Đó có thể là điểm kẹt của em.
            </p>
          </div>
        </Disclosure>

        <Disclosure
          trigger={
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.05rem", color: "var(--color-ink)" }}>
              Khi học viên viết bị nửa vời, không có dấu ấn
            </span>
          }
        >
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", paddingTop: "1rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Năng lượng bài này:</strong> Vừa thật, vừa mong manh.
            </p>
            <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
              <li><strong>Thật:</strong> Em đang dám đối diện với cảm xúc và suy nghĩ của mình, hãy tiếp tục khai thác sâu hơn nữa.</li>
              <li><strong>Mong manh:</strong> Vì còn đang run rẩy.</li>
            </ul>
            <p style={{ marginBottom: "1rem" }}>
              Sự khởi đầu rất tốt - có khí lực khi nó khởi từ tâm và thân mình. Nhưng sau đó phần trí xem vào và dẫn đi → dòng khí bị tán. Tuy nhiên, đoạn cuối lại tụ về tâm được.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Điểm tích cực:</strong> Điều đó cho thấy em đang bắt nhịp. Em đang ở giai đoạn "lắng" của nước, chưa "trong", nhưng đã dừng xoáy. Đó là bước ngoặt quan trọng của hành trình viết.
            </p>
            <p>
              <strong>Lời khuyên:</strong> Hãy tiếp tục thành thật với bản thân, với trạng thái đang có, không cần chữ đẹp. Lúc không cố gắng làm đẹp chữ, mà cho phép chữ được tự nhiên khí lực mới được tự do.
            </p>
          </div>
        </Disclosure>

        <Disclosure
          trigger={
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.05rem", color: "var(--color-ink)" }}>
              Khi học viên gặp tâm lý sợ "quá sâu", không dám mở lòng
            </span>
          }
        >
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.85, color: "var(--color-ink)", paddingTop: "1rem" }}>
            <p style={{ marginBottom: "1rem" }}>
              Sợ viết sâu vào tâm vì sợ bản thân sẽ bị tổn thương, sợ người khác sẽ nhìn thấy những phần yếu đuối.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Nhận xét:</strong> Em có sự quan sát sâu sắc nhưng quan sát xong rồi thì bỏ ngỏ câu trả lời, chưa chạm đến tầng sâu nhất.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              Em vừa muốn cho người ta thấy, nhưng vừa không muốn cho người ta thấy, nên cứ đánh lận qua lại giữa 2 cực.
            </p>
            <p>
              <strong>Đường đi:</strong> Để viết có khí, phải có sự dũng cảm để mở cửa trái tim. Không có sự dũng cảm đó, chữ sẽ mãi mãi bị kẹt trong ý tưởng.
            </p>
          </div>
        </Disclosure>
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "5rem", marginTop: "3rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
        <Link href={routes.imLangChuNghia} className="mono-link" style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-ink)", display: "inline-block", padding: "0.45rem 0.9rem", border: "1px solid var(--color-mist)", borderRadius: "999px", textDecoration: "none" }}>
          VỀ TRANG IM LẶNG CHỮ NGHĨA
        </Link>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-mist)" }}>/</span>
        <a href="https://forms.gle/9GBHwSoY1Xu7vA9LA" target="_blank" rel="noopener noreferrer" className="register-button" style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "#fff", display: "inline-block", padding: "0.45rem 0.9rem", background: "var(--color-cham-dem)", border: "1px solid var(--color-cham-dem)", borderRadius: "999px", textDecoration: "none", transition: "all 0.2s ease" }}>
          ĐĂNG KÝ THAM GIA
        </a>
      </div>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { DayItinerary } from "@/components/DayItinerary";
import { Accordion } from "@/components/Accordion";
import { FaqAccordion } from "@/components/FaqAccordion";
import { routes } from "@/lib/nav";
import { heroMeta, loiNgo, features, days, practical, includes, milestones, notes, refunds, faqs } from "@/data/tuanDuToi";

export const metadata: Metadata = {
  title: "tuần-du tới · mây nằm ngủ",
  description: "tuần-du 05 · Ngọa Vân Am, 18–21.03.2027 · 4 ngày 3 đêm, tối đa 10 người.",
};

export default function TuanDu05Page() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "tuần-du", href: routes.tuanDu }, { label: "tuần-du tới" }]} />
        <span className="eyebrow">tuần-du 05 · 18 – 21.03.2027 · <span style={{ color: "var(--color-cham-dem)" }}>sắp diễn ra</span></span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
          mây nằm ngủ
        </h1>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-stone-alt)", marginBottom: "2rem" }}>
          lên nơi mây ở, tan vào trời không
        </span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))", gap: "1.5rem", borderTop: "1px solid var(--color-mist)", paddingTop: "1.5rem" }}>
          {heroMeta.map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)" }}>{m.label}</span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "var(--color-ink)" }}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", height: "56vh", minHeight: 340, maxHeight: 540 }}>
        <ImagePlaceholder label="ảnh · Ngọa Vân Am trong sương" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "4.5rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow">lời ngỏ</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        {loiNgo.map((p) => (
          <p key={p} style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: "0 0 1.15rem", textAlign: "justify" }}>
            {p}
          </p>
        ))}
      </Reveal>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <div style={{ borderLeft: "2px solid var(--color-cham-dem)", padding: "1.75rem 2rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
            Thế nên lần tuần-du này, chúng tôi trở lại Ngọa Vân Am cùng một lịch trình dài hơn: 4 ngày 3 đêm.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">dành cho ai</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "1.75rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: "0 0 1.15rem" }}>
          Bạn không cần có nền tảng tín ngưỡng, không cần hiểu về đạo Phật hay Thiền phái Trúc Lâm hay Trần Nhân Tông.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0 }}>Chỉ cần một điều thôi:</p>
      </Reveal>
      <div className="wrap" style={{ marginBottom: "1.75rem" }}>
        <div style={{ borderLeft: "2px solid var(--color-cham-dem)", padding: "2rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>Có một khoảnh khắc mà ta nhận ra —</p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>
            Mình đã đọc, đã học, đã thực hành, đã tìm kiếm. Không phải ít. Có thể là rất nhiều. Nhưng dường như, mọi thứ vẫn mãi ở đó.
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>
            Không phải vì ta chưa đủ chăm chỉ. Mà có lẽ vì ta đang dùng sai cửa. Toàn bộ hành trình tìm kiếm ấy — nếu đến từ phần đầu, thì cũng chỉ nuôi thêm phần đầu. Ta hiểu nhiều hơn về tâm. Nhưng hiểu về tâm và ở trong tâm, là hai điều rất khác nhau.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 1.5rem" }}>
            &ldquo;Tôi đã hiểu điều này từ lâu.&rdquo; — Và đó chính xác là chỗ ta bị kẹt lại.
          </p>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--color-cham-dem)", marginBottom: "1.5rem" }}>
            Con đường đi vào bên trong, không bằng sự hiểu.
          </span>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
            Tuần-du 05 — bốn ngày trong một vùng đất đủ tĩnh, đủ lặng, để những lớp bên ngoài bắt đầu lắng xuống một cách tự nhiên. Cái cảm được chạm tới. Cái biết tự nhiên hiển lộ.
          </p>
        </div>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0 }}>Tuần-du sẽ có không gian, có con người để làm nảy nở những điều đó.</p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">vì sao là Ngọa Vân</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.25, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          Ngọa Vân nghĩa là <em style={{ fontStyle: "italic" }}>mây nằm ngủ</em>
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: "0 0 1.15rem", textAlign: "justify" }}>
          Ở độ cao này, sương không đến rồi đi như những nơi khác. Một dãy núi phía Bắc chặn hơi ẩm từ biển lại, ngưng thành mây — và mây ở lại đây, ngày này qua ngày khác.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>Có lẽ Ngọa Vân là nơi bầu trời chọn để ở-yên.</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">một hành trình có lớp lang</span>
      </div>
      <div className="wrap" style={{ maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: "0 0 1.15rem", textAlign: "justify" }}>
          Bốn ngày ở Ngọa Vân có một nhịp đơn giản: mỗi sáng là một buổi cảm tâm — chia sẻ, thơ, dẫn dắt. Mỗi tối, một vòng-trà để những gì đã nổi lên có chỗ được ngồi lại.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
          Cái khó không nằm ở lịch trình. Cái khó, và cũng là cái thú, là ở lại đủ lâu với một điều, thay vì lướt qua nhiều điều.
        </p>
      </div>
      <Reveal className="wrap feat-grid" style={{ marginTop: "2.5rem", marginBottom: "5rem" }}>
        {features.map((f) => (
          <div key={f.title}>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.9rem", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>{f.icon}</span>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink)", marginBottom: "0.5rem" }}>{f.title}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.75, color: "var(--color-stone-alt)", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </Reveal>

      <div style={{ marginBottom: "4.5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · đường lên am Ngọa Vân" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">hành trình 4 ngày</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        {days.map((d, i) => (
          <DayItinerary key={d.n} day={d} first={i === 0} />
        ))}
      </div>

      <div style={{ marginBottom: "4.5rem", height: "46vh", minHeight: 300, maxHeight: 460 }}>
        <ImagePlaceholder label="ảnh · biển mây từ đỉnh Bàn Cờ" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">vài điều thực tế</span>
      </div>
      <div className="wrap info-grid" style={{ marginBottom: "2.25rem" }}>
        {practical.map((p) => (
          <div key={p.label}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.45rem" }}>{p.label}</span>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--color-ink)", lineHeight: 1.4 }}>{p.value}</span>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.76rem", color: "var(--color-stone-alt)", marginTop: "0.25rem" }}>{p.note}</span>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ marginBottom: "2rem" }}>
        <div style={{ border: "1px solid var(--color-mist)", padding: "1.75rem 2rem" }}>
          {includes.map((i) => (
            <p key={i} style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0 0 0.45rem", paddingLeft: "1rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--color-stone)" }}>—</span>
              {i}
            </p>
          ))}
        </div>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem" }}>
        <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.1rem 1.5rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
            Người tham gia tự sắp xếp vé máy bay đến và rời Hà Nội theo lịch trình. Điểm đón đoàn tại sân bay Nội Bài lúc 08:00 ngày 18.03.2027 · trả đoàn lúc 19:00 ngày 21.03.2027.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">điều làm nên hành trình này</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <div style={{ marginBottom: "1.75rem", paddingBottom: "1.75rem", borderBottom: "1px solid var(--color-mist)" }}>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>vòng-trà</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
            Mỗi cuối ngày là một vòng-trà. Mọi người cùng ngồi xuống — nghe kể chuyện, nhìn lại một ngày vừa đi qua: đã đến những nơi nào, điều gì đã chạm tới mình, đã thấy ra điều gì. Rồi cùng ở yên trong đó, để cảm nhận rõ hơn những gì tâm mình vừa mở ra.
          </p>
        </div>
        <div>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>tuần-du ký</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0, textAlign: "justify" }}>
            Một quyển sách nhỏ được biên soạn riêng cho chuyến đi — giới thiệu câu chuyện văn hóa và lịch sử của Ngọa Vân Am, Thiền phái Trúc Lâm và Trần Nhân Tông. Bên trong cũng có những gợi ý để cảm nhận, thực hành và ghi chép trong từng ngày của hành trình.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">không gian nghỉ</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <div style={{ gridColumn: "1 / -1" }}>
            <ImagePlaceholder label="ảnh · Ngọa Vân Zen Village" aspectRatio="16/9" />
          </div>
          <ImagePlaceholder label="ảnh · phòng nghỉ" aspectRatio="4/3" />
          <ImagePlaceholder label="ảnh · sân trong, hiên" aspectRatio="4/3" />
        </div>
      </Reveal>
      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)" }}>Ngọa Vân Zen Village · chỗ nghỉ suốt 3 đêm của hành trình</span>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">thông tin và đăng ký</span>
      </div>
      <div className="wrap info-grid" style={{ marginBottom: "2.5rem" }}>
        <div>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.45rem" }}>chi phí</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--color-ink)" }}>12.000.000 đ / người</span>
          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.76rem", color: "var(--color-stone-alt)", marginTop: "0.25rem" }}>phòng dorm 4 người</span>
        </div>
        <div>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.45rem" }}>số lượng tối đa</span>
          <span style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "var(--color-ink)" }}>10 người</span>
          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.76rem", color: "var(--color-stone-alt)", marginTop: "0.25rem" }}>nhận trẻ từ 10 tuổi, đi cùng người lớn</span>
        </div>
      </div>
      <div className="wrap" style={{ marginBottom: "1rem" }}>
        <span className="eyebrow">các mốc cần lưu ý</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem" }}>
        {milestones.map((m) => (
          <div key={m.when} className="tl-row">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-stone)", lineHeight: 1.6 }}>{m.when}</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-ink)" }}>{m.what}</span>
          </div>
        ))}
      </Reveal>
      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.1rem 1.5rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
            Nếu không nhận đủ tối thiểu 7 người tham gia, BTC sẽ hoãn hoặc hủy chương trình. Chi tiết lịch trình, vật dụng cần chuẩn bị, bảo hiểm và các cập nhật sẽ được gửi trong nhóm chat chung (Zalo) sau khi hoàn tất đăng ký.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-stone)" }}>
          chú ý
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        {notes.map((n) => (
          <div key={n.title} style={{ paddingBottom: "2.25rem", marginBottom: "2.25rem", borderBottom: "1px solid var(--color-mist)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.6rem" }}>{n.title}</span>
            {n.body.map((p) => (
              <p key={p} style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 0.9rem", textAlign: "justify" }}>
                {p}
              </p>
            ))}
          </div>
        ))}
        <div style={{ borderLeft: "2px solid var(--color-cham-dem)", padding: "1.6rem 1.9rem" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.65, color: "var(--color-ink)", margin: 0 }}>
            Khi cùng nhau đi, cùng nhau dừng, cùng nhau cảm, tuần-du mới thực sự trở thành một dòng chảy. Và trong dòng chảy ấy, mỗi người đều được nâng đỡ một cách rất tự nhiên.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3.5rem" }}>
        <Accordion label="chính sách hoàn hủy">
          <div style={{ marginBottom: "2.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.9rem" }}>
              1. huỷ từ phía người tham gia
            </span>
            {refunds.map((r) => (
              <div key={r.when} className="tl-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-stone)", lineHeight: 1.6 }}>{r.when}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-ink)" }}>{r.what}</span>
              </div>
            ))}
            <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.1rem 1.5rem", marginTop: "1.5rem" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 0.5rem" }}>Người tham gia có thể chuyển suất cho người khác (thông báo trước ít nhất 7 ngày).</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>Có thể bảo lưu chi phí để tham gia chuyến khác — áp dụng cho các trường hợp huỷ từ 30 ngày trở lên.</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "2.5rem", marginBottom: "2.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.5rem" }}>2. huỷ do bất khả kháng</span>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--color-stone)", margin: "0 0 1.25rem" }}>Dịch bệnh, thiên tai, chiến tranh, chính sách nhà nước…</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="info-grid">
              <div style={{ padding: "1.5rem", border: "1px solid var(--color-mist)" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>từ phía BTC</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>Nếu BTC buộc phải huỷ chương trình, 100% chi phí sẽ được bảo lưu hoặc hoàn lại theo lựa chọn của người tham gia.</p>
              </div>
              <div style={{ padding: "1.5rem", border: "1px solid var(--color-mist)" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>từ phía người tham gia</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0 0 0.7rem" }}>Nếu không thể đến do lệnh cấm di chuyển hoặc lý do bất khả kháng, 100% chi phí được bảo lưu cho chương trình sau.</p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>Nếu tự quyết định huỷ do lo ngại cá nhân, áp dụng chính sách huỷ thông thường ở mục 1.</p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "2.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.6rem" }}>
              3. huỷ từ phía BTC do không đủ số lượng
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.25rem", textAlign: "justify" }}>
              Trong trường hợp không nhận đủ tối thiểu 7 người tham gia, BTC sẽ hoãn hoặc huỷ chương trình. BTC sẽ xác nhận chuyến đi lần cuối trước 30 ngày khởi hành. Sau khi nhận xác nhận, người tham gia có thể sắp xếp đặt vé di chuyển đến Hà Nội.
            </p>
            <div style={{ borderLeft: "2px solid var(--color-stone)", padding: "1.1rem 1.5rem" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 0.5rem" }}>Trường hợp huỷ chuyến, toàn bộ chi phí đặt cọc sẽ được BTC trả lại 100% trong vòng 7 ngày sau khi thông báo.</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: 0 }}>
                BTC không khuyến cáo người tham gia đặt vé di chuyển đến Hà Nội trước khi nhận thông báo chính thức. Trong trường hợp phải huỷ vé, BTC không chịu trách nhiệm về chi phí hoàn vé tàu, máy bay.
              </p>
            </div>
          </div>
        </Accordion>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <FaqAccordion items={faqs} />
      </div>

      <div className="wrap" style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={38} />
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.7rem, 4vw, 2.4rem)", lineHeight: 1.3, color: "var(--color-ink)", margin: "0 0 0.8rem" }}>
          Hẹn tại Ngọa Vân — nơi mây nằm ngủ
        </h2>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--color-stone)", margin: "0 0 2rem" }}>18 – 21.03.2027 · tối đa 10 người</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span className="cta-btn cta-btn--solid">
            đăng ký tham gia <span className="ar">→</span>
          </span>
        </div>
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

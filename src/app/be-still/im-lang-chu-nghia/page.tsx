import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { SessionTabs } from "@/components/SessionTabs";
import { routes } from "@/lib/nav";
import { essayParas, essayParas2, forList, methods, journey, sessions, overview, after30, afterClassList } from "@/data/imLangChuNghia";

export const metadata: Metadata = {
  title: "im lặng, chữ nghĩa · 30 ngày tìm lại mạch chữ của mình",
  description: "khoá học viết từ tâm — im lặng, chữ nghĩa là thực tập viết để đưa sự hiện diện của mình về với câu chữ. Khi tâm có mặt, chữ tự nhiên có lực.",
};

export default function ImLangChuNghiaPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", textAlign: "center" }}>
        <div style={{ textAlign: "left" }}>
          <Breadcrumb trail={[{ label: "be-still", href: routes.beStill }, { label: "im lặng, chữ nghĩa" }]} />
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)", display: "block", marginBottom: "1.2rem" }}>
          khoá học viết từ tâm
        </span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem, 5.5vw, 3rem)", lineHeight: 1.2, color: "var(--color-ink)", margin: "0 auto 1.6rem", maxWidth: "16ch" }}>
          từ im lặng đến chữ nghĩa
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-stone)", maxWidth: "38ch", margin: "0 auto" }}>
          30 ngày tìm lại mạch chữ của mình
        </p>
      </div>

      <div className="wrap" style={{ margin: "4.5rem auto", maxWidth: 440 }}>
        <ImagePlaceholder label="ảnh · trang giấy, chữ viết" aspectRatio="4/5" src="/assets/imlangchunghia.webp" />
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "70ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.02rem", lineHeight: 2, color: "var(--color-ink)", margin: 0 }}>
          đôi khi ngồi hàng giờ trước trang trống mà chữ không tới.
          <br />
          có lúc viết đầy mặt giấy, bỗng chùng lại giữa chừng, rồi thôi.
          <br />
          có lẽ, chữ đang viết ra từ một chỗ chưa thật.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", lineHeight: 1.25, color: "var(--color-ink)", marginBottom: "1.4rem", textAlign: "center" }}>
          chữ thật cần người thật
        </span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "58ch" }}>
        {essayParas.map((text, i) => (
          <p key={text} className={i === 0 ? "essay-p drop-cap" : "essay-p"}>
            {text}
          </p>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <Motif name="dep" size={42} className="motif-flip" opacity={1} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", lineHeight: 1.25, color: "var(--color-ink)", marginBottom: "1.4rem", textAlign: "center" }}>
          vì sao viết thật lại khó
        </span>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "58ch" }}>
        {essayParas2.map((text) => (
          <p key={text} className="essay-p">
            {text}
          </p>
        ))}
      </div>

      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch", textAlign: "center" }}>
        <span aria-hidden style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem", lineHeight: 1, color: "var(--color-cham)", marginBottom: "0.4rem" }}>
          &ldquo;
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", lineHeight: 1.55, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 auto 1.5rem" }}>
          im lặng - chữ nghĩa là thực tập viết để đưa sự hiện diện của mình về với câu chữ. Khi tâm có mặt, chữ tự nhiên có lực.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontStyle: "normal", fontSize: "0.72rem", lineHeight: 2, letterSpacing: "0.02em", color: "var(--color-cham-dem)", textAlign: "center", margin: 0 }}>
          &ldquo;Lặng nghe chữ nở trong lòng,
          <br />
          Không cần tìm kiếm, chữ mong ta về.&rdquo;
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem", textAlign: "center" }}>
        <span className="sec-title">khóa học này dành cho</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "58ch" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem" }}>
          {forList.map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                color: "var(--color-ink)",
                padding: "0.6rem 1.1rem",
                border: "1px solid var(--color-mist)",
                borderRadius: "999px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="sec-title">khí trong chữ là gì?</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2rem", maxWidth: "58ch" }}>
        <p className="essay-p">Không phải chuyện huyền bí. Khí là dấu vết của một người có thật đứng sau câu chữ.</p>
        <p className="essay-p">Chữ có khí vì người viết có mặt. Chữ vắng khí vì người viết đang vắng mặt với chính mình. Học nghe khí, là học nhận ra lúc nào mình đang thật, lúc nào mình đang trốn.</p>
      </Reveal>
      <div className="wrap" style={{ marginBottom: "2rem", maxWidth: "52ch" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontStyle: "normal", fontSize: "0.72rem", lineHeight: 2, letterSpacing: "0.02em", color: "var(--color-cham-dem)", margin: "0 0 1.25rem" }}>
          Trời lặng không có gió và không có lá rung,
          <br />
          nhưng tôi vẫn cảm thấy lòng mình không yên.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontStyle: "normal", fontSize: "0.72rem", lineHeight: 2, letterSpacing: "0.02em", color: "var(--color-cham-dem)", textAlign: "center", margin: 0 }}>
          Không gió.
          <br />
          Không lá động.
          <br />
          Mà lòng – bỗng chênh.
        </p>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "58ch" }}>
        <p className="essay-p">Cùng một ý, hai cách viết. Bản thứ hai có lực hơn vì có khí.</p>
        <p className="essay-p">04 tuần này là để học nghe được cái khác biệt đó, trong chữ của người khác và trong chữ của chính mình. Mà tôi hay gọi là đọc vị chữ nghĩa.</p>
        <p className="essay-p">Đọc để hiểu được sắc thái của ngôn từ, đọc được trạng thái tâm của người viết và năng lượng khi họ viết ra.</p>
        <p className="essay-p">
          Viết thật không cản trở sự bay bổng, cũng không loại trừ lối viết logic hay hư cấu. &ldquo;Thật&rdquo; không phải một kiểu viết, nó là sự có mặt của người viết, dù họ đang viết gì.
        </p>
        <p className="essay-p">Vì vậy điều học được ở đây không bị giới hạn trong một thể loại nào. Nó đi theo bạn vào email công việc, vào bài PR, vào content, vào trang nhật ký, vào một truyện ngắn hay một kịch bản và cả một bản báo cáo khô khan nhất.</p>
        <p className="essay-p">Khi viết thật, nó có khí lực. Đó là năng lượng của người viết, chảy qua câu chữ.</p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="sec-title">phương pháp độc quyền — viết bằng khí lực</span>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "44ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          trong truyền thống phương Đông, &ldquo;khí&rdquo; là sinh lực vận hành toàn thể con người. với chữ, cũng vậy — một dòng chảy nối tiếp nhau, không đứt đoạn.
        </p>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link href={routes.imLangChuNghia + "/cach-tiep-can"} className="cta-btn">
          cách tiếp cận của khóa học <span className="ar">→</span>
        </Link>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch" }}>
        <div style={{ position: "relative", paddingLeft: "1.8rem" }}>
          <div style={{ position: "absolute", left: "0.5rem", top: "0.4rem", bottom: "1.8rem", width: 1, background: "var(--color-mist)" }} />
          {methods.map((m) => (
            <div key={m.n} className="method-block" style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "-1.8rem",
                  top: "0.05rem",
                  width: "1.4rem",
                  height: "1.4rem",
                  borderRadius: "50%",
                  border: "1px solid var(--color-cham-dem)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  color: "var(--color-cham-dem)",
                }}
              >
                {m.n}
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>{m.title}</span>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>{m.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, marginBottom: "4rem" }}>
        <ImagePlaceholder label="ảnh · im lặng chữ nghĩa 1" aspectRatio="16/12" src="/assets/ilcn01.webp" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · im lặng chữ nghĩa 2" aspectRatio="16/12" src="/assets/ilcn02.webp" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · im lặng chữ nghĩa 3" aspectRatio="16/12" src="/assets/ilcn3.webp" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="sec-title">chi tiết hành trình</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "#faf8f3", padding: "2.5rem", borderRadius: "0.5rem", maxWidth: "73ch", width: "100%" }}>
          <RevealStagger>
            {journey.map((w) => (
              <div key={w.n} className="week-block" style={{ display: "grid", gridTemplateColumns: "3.5rem 1fr", gap: "1.5rem", borderTop: "1px solid var(--color-mist)", paddingTop: "1.5rem" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "2.2rem", color: "var(--color-ink)", lineHeight: 1 }}>{w.n}</span>
                <div>
                  <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.4rem" }}>{w.week}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.05rem", color: "var(--color-ink)", marginBottom: "0.7rem" }}>{w.title}</span>
                  {w.items.map((it) => (
                    <div key={it} className="li-item" style={{ padding: "0.3rem 0" }}>
                      <span className="li-mark">·</span>
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </RevealStagger>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="sec-title">chương trình học — 8 buổi zoom nhóm</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2rem" }}>
        <p className="essay-p">Mỗi buổi 120 phút, diễn ra vào tối thứ 7 &amp; Chủ nhật (19:30 - 21:30)</p>
      </div>
      <div className="wrap" style={{ marginBottom: "4rem" }}>
        <SessionTabs sessions={sessions} total={8} />
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="sec-title">tổng quan</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {overview.map((item, i) => {
            const match = item.match(/^(\d+\s+\S+)\s+(.*)$/);
            const count = match ? match[1] : item;
            const body = match ? match[2] : "";
            return (
              <Reveal key={item} style={{ flex: "1 1 220px", maxWidth: "260px", padding: "0 1.6rem", borderLeft: i > 0 ? "1px solid var(--color-mist)" : "none" }}>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--color-stone)", marginBottom: "0.8rem" }}>
                  0{i + 1}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", color: "var(--color-cham-dem)", marginBottom: "0.7rem" }}>
                  {count}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-ink)" }}>
                  {body}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", textAlign: "justify", margin: 0, fontStyle: "italic" }}>
          *Trong trường hợp vì lý do bất khả kháng, bạn bỏ lỡ bất kỳ buổi học nào, chúng tôi sẽ gửi bạn tài liệu và bản ghi của buổi học đó.
        </p>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem" }}>
        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--color-ink)", marginBottom: "0.4rem" }}>Lớp học giới hạn cho 10 người</span>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", color: "var(--color-cham-dem)" }}>Học phí: 05 triệu đồng</span>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="sec-title">sau 30 ngày</span>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem" }}>
        {after30.map((item) => (
          <div key={item} className="li-item">
            <span className="li-mark">·</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="sec-title">đồng hành sau lớp viết</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2rem" }}>
        <p className="essay-p">Nếu bạn muốn tiếp tục duy trì việc viết và soi chiếu tâm mình thông qua chữ viết. Tôi có thể tiếp tục đồng hành cùng bạn trong các chương trình 3-6-9-12 tháng.</p>
        {afterClassList.map((item) => (
          <div key={item} className="li-item">
            <span className="li-mark">›</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "620px" }}>
        <span className="sec-title" style={{ display: "block", marginBottom: "1.6rem" }}>các gói viết-đọc vị đồng hành</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--color-mist)", border: "1px solid var(--color-mist)" }}>
          {[
            { d: "3 tháng", p: "5 triệu đồng" },
            { d: "6 tháng", p: "9 triệu đồng" },
            { d: "9 tháng", p: "12 triệu đồng" },
            { d: "12 tháng", p: "15 triệu đồng" },
          ].map((tier) => (
            <div key={tier.d} style={{ background: "var(--color-paper)", padding: "1.6rem", textAlign: "center" }}>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.4rem" }}>{tier.p}</span>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>{tier.d}</span>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-stone-alt)", textAlign: "justify", margin: "1.25rem 0 0", fontStyle: "italic" }}>
          *Chương trình đồng hành này chỉ dành cho người sau khi đã học lớp im lặng, chữ nghĩa.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="sec-title">học viên nói gì</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        <div style={{ padding: "2.25rem 2rem", maxWidth: "56ch", textAlign: "center", margin: "0 auto" }}>
          <span aria-hidden style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem", lineHeight: 1, color: "var(--color-cham)", marginBottom: "0.5rem" }}>
            &ldquo;
          </span>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.02rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
            Trước khóa học, em viết rất logic.
            <br />
            Nhưng đọc lại... em thấy chữ của mình rất khô.
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.02rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
            Sau 30 ngày, em biết dừng lại và quan sát mình hơn.
            <br />
            Ít phán xét bản thân hơn.
            <br />
            Viết giúp em quay về, không còn là áp lực.
            <br />
            Anh Tâm đã đưa chữ trở về trong em.
          </p>
          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>— học viên khóa một</span>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)", margin: "0 0 2rem" }}>tìm lại mạch chữ của chính mình?</p>
        <a href="https://forms.gle/9GBHwSoY1Xu7vA9LA" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
          đăng ký <span className="ar">→</span>
        </a>
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem" }}>
        <span className="sec-title">người hướng dẫn</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-ink)", marginBottom: "0.75rem" }}>Hồ Thành Tâm</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1rem" }}>Người sáng lập mộc little farm.</p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>
          &ldquo;Tôi không dạy kỹ thuật viết. Tôi đồng hành để bạn tìm lại mạch chữ của chính mình.&rdquo;
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "4rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "1.4rem" }}>
          tham khảo thêm hành trình khác
        </span>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
          <Link className="mono-link" href={routes.khaiTam} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            khai tâm
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

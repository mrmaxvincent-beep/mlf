import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { ChangTabs } from "@/components/ChangTabs";
import { InfoTabs } from "@/components/InfoTabs";
import { Disclosure } from "@/components/Disclosure";
import { Schedule } from "@/components/Schedule";
import { routes } from "@/lib/nav";
import { needPairs, yogaList, therapyList, gth, changList, scheduleRows, newcomerList, safetyGroups, gearList, ptIssues, testimonials } from "@/data/thinhKhong";

export const metadata: Metadata = {
  title: "thinh không · yoga dưỡng sinh & phục hồi",
  description: "gốc rễ vẫn là Hatha Yoga cổ điển — nơi hơi thở là trung tâm, tư thế chỉ là phương tiện, và tâm mới là đích đến. Kết hợp yoga dưỡng sinh và phục hồi trị liệu tự nhiên.",
};

export default function ThinhKhongPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "về mlf", href: routes.veMlf }, { label: "thinh · không" }]} />
        <span className="eyebrow">ở lại với cơ thể mình — yoga dưỡng sinh &amp; phục hồi</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 2rem" }}>
          thinh không
        </h1>
        <div className="hero-personal" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", alignItems: "center" }}>
          <div className="hero-portrait" style={{ width: "9.5rem", flexShrink: 0 }}>
            <ImagePlaceholder label="ảnh chân dung · Thuận" aspectRatio="1/1" style={{ borderRadius: "50%", overflow: "hidden" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "44ch", margin: "0 0 0.9rem" }}>
              Tôi là Thuận, người hướng dẫn yoga tại mộc little farm. thinh-không là con đường được tôi &ldquo;chưng cất&rdquo; từ chính những trải nghiệm của mình.
            </p>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-stone)" }}>— Thuận</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", height: "52vh", minHeight: 320, maxHeight: 500 }}>
        <ImagePlaceholder label="ảnh · thầy Thuận hướng dẫn lớp yoga thinh-không" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow">cốt lõi triết lý</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "52ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>
          gốc rễ vẫn là Hatha Yoga cổ điển — nơi hơi thở là trung tâm, tư thế chỉ là phương tiện, và tâm mới là đích đến.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2.2rem", marginTop: "1.6rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-moss)" }}>thở</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-moss)" }}>asana</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-moss)" }}>tâm</span>
        </div>
      </Reveal>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
          Nhưng qua nhiều năm trải nghiệm thực hành, tôi nhận ra: trong đời sống hiện đại, chỉ yoga cổ điển là chưa đủ.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">điều cơ thể hôm nay đang mang, và điều nó cần</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "60ch" }}>
        {needPairs.map((pair) => (
          <div key={pair.a} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1rem", alignItems: "baseline", padding: "0.7rem 0", borderBottom: "1px dashed var(--color-mist)" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-stone)", textAlign: "right" }}>{pair.a}</span>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--color-moss)", fontSize: "0.9rem" }}>→</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-ink)" }}>{pair.b}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">trục kết hợp</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1.5rem", alignItems: "start" }}>
          <div style={{ borderTop: "2px solid var(--color-moss)", paddingTop: "1rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>yoga dưỡng sinh</span>
            {yogaList.map((item) => (
              <div key={item} className="li-item">
                <span className="li-mark">·</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.4rem", color: "var(--color-stone-alt)", alignSelf: "center" }}>+</span>
          <div style={{ borderTop: "2px solid var(--color-moss)", paddingTop: "1rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.95rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>phục hồi &amp; trị liệu tự nhiên</span>
            {therapyList.map((item) => (
              <div key={item} className="li-item">
                <span className="li-mark">·</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.92rem", color: "var(--color-stone)", textAlign: "center", margin: "1.5rem 0 0" }}>
          hai trục cùng hướng về một tổng hoà: giãn — thông — hòa.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">giãn — thông — hòa</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2rem" }}>
        {gth.map((s) => (
          <div key={s.n} style={{ position: "relative", paddingLeft: "1.6rem", marginBottom: "2rem" }}>
            <span style={{ position: "absolute", left: "-0.1rem", top: "0.35rem", width: 9, height: 9, borderRadius: "50%", background: "var(--color-moss)" }} />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "2rem", color: "var(--color-stone-alt)", display: "block", marginBottom: "0.5rem" }}>
              {s.n}. {s.title}
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", maxWidth: "56ch", margin: "0 0 0.9rem" }}>{s.intro}</p>
            {s.points.map((p) => (
              <div key={p} className="li-item">
                <span className="li-mark">——</span>
                <span>{p}</span>
              </div>
            ))}
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-ink)", margin: "0.9rem 0 0" }}>{s.close}</p>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "52ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.75, color: "var(--color-ink)", textAlign: "center", margin: 0 }}>
          giãn mở đường cho thông, thông dẫn tới hòa — ba bước của cùng một dòng chảy, không tách rời.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center", maxWidth: "48ch", marginLeft: "auto", marginRight: "auto" }}>
        <span className="eyebrow" style={{ textAlign: "center" }}>
          tinh thần của lớp
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1rem" }}>&ldquo;lắng nghe rõ hơn&rdquo;</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>yoga thinh-không không tạo ra một hình mẫu cơ thể, mà tạo ra một không gian để cơ thể tự hồi phục.</p>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <div className="balance-rule">
          <span />
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">một buổi tập online trông như thế nào</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: 640 }}>
        <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--color-cotton)", border: "1px solid var(--color-mist)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>video · buổi tập online</span>
        </div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", lineHeight: 1.7, color: "var(--color-stone)", margin: "0.8rem 0 0", textAlign: "center" }}>
          một trích đoạn buổi tập online cùng Thuận — để bạn hình dung nhịp lớp trước khi tham gia.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">lộ trình 12 tuần tập</span>
      </div>
      <div className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          Lớp vận hành theo chu kỳ lặp 12 tuần, đi sâu vào một chủ đề cụ thể mỗi tuần. Học viên có thể bắt đầu ở bất kỳ tuần nào — sau 12 tuần, chu kỳ quay lại từ đầu nhưng đi sâu hơn.
        </p>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <ChangTabs chang={changList} />
      </div>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <span className="eyebrow" style={{ marginBottom: "1.5rem" }}>
          để bắt đầu, theo từng bước
        </span>
        <div style={{ marginBottom: "2.2rem" }}>
          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-ink)", marginBottom: "0.9rem" }}>1 · lịch tập</span>
          <div style={{ marginBottom: "1.2rem" }}>
            <Schedule rows={scheduleRows} />
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
            + 1 buổi tập PT 1-1 với từng học viên/trong tháng — để giải quyết những vấn đề riêng mà buổi tập chung chưa giải quyết hết được, và để trao đổi về sức khỏe, tinh thần, giấc ngủ, chế độ ăn uống và các phương pháp dưỡng sinh.
          </p>
        </div>
        <div style={{ marginBottom: "2.2rem" }}>
          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-ink)", marginBottom: "0.9rem" }}>2 · tiến trình người mới</span>
          {newcomerList.map((item) => (
            <div key={item} className="li-item">
              <span className="li-mark">——</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div>
          <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-ink)", marginBottom: "0.9rem" }}>3 · vật dụng chuẩn bị cho lớp học</span>
          {gearList.map((item) => (
            <div key={item} className="li-item">
              <span className="li-mark">——</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "2.5rem", textAlign: "center", maxWidth: "44ch", marginLeft: "auto", marginRight: "auto" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0 0 0.4rem" }}>
          Nếu bạn cần một nơi để cơ thể mình được lắng nghe — tôi ở đây, sẵn lòng đồng hành.
        </p>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9rem", color: "var(--color-stone)" }}>— Thuận</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <a href="https://forms.gle/7NwcxWbmcCBrdc11A" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
          đăng ký lớp <span className="ar">→</span>
        </a>
      </div>

      <InfoTabs
        tabs={[
          {
            label: "phục hồi",
            content: (
              <>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1rem" }}>
                  Chúng tôi không đo tiến bộ bằng độ sâu tư thế, mà bằng: hơi thở có đều hơn không, hệ thần kinh có dịu lại không, cơ thể có thấy an toàn không.
                </p>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>Không ép buộc, không so sánh, không chạy theo thành tích.</p>
              </>
            ),
          },
          {
            label: "an toàn & giới hạn",
            content: (
              <>
                {safetyGroups.map((g) => (
                  <div key={g.title} style={{ marginBottom: "1.8rem" }}>
                    <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.9rem", color: "var(--color-ink)", marginBottom: "0.5rem" }}>{g.title}</span>
                    {g.points.map((p) => (
                      <div key={p} className="li-item">
                        <span className="li-mark">·</span>
                        <span>{p}</span>
                      </div>
                    ))}
                    <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.88rem", color: "var(--color-ink)", margin: "0.5rem 0 0" }}>{g.close}</p>
                  </div>
                ))}
              </>
            ),
          },
        ]}
      />

      <div style={{ height: "44vh", minHeight: 280, maxHeight: 420, marginBottom: "5rem" }}>
        <ImagePlaceholder label="ảnh · lớp học thinh-không, thảm tập ngoài hiên" aspectRatio="auto" style={{ height: "100%" }} />
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "60ch" }}>
        <div style={{ border: "1px solid var(--color-mist)", padding: "2.5rem 2rem" }}>
          <span className="eyebrow">tập luyện cá nhân (PT)</span>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 2rem" }}>
            Lớp PT được thiết kế riêng dựa trên mục tiêu, thể trạng và nhu cầu cá nhân của từng học viên — đảm bảo hiệu quả cao hơn so với các lớp cộng đồng có chương trình chung cho nhiều người. Thời gian tập: 03 buổi/tuần, mỗi buổi 1 tiếng 15 phút, linh hoạt theo thời gian của người tập, trong 01 đến 03 tháng.
          </p>
          <span className="eyebrow">tập trung giải quyết</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1.5rem", marginBottom: "2rem" }}>
            {ptIssues.map((item) => (
              <div key={item} className="li-item">
                <span className="li-mark">·</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", flexWrap: "wrap", borderTop: "1px solid var(--color-mist)", paddingTop: "1.2rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)" }}>học phí lớp cá nhân hoá</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--color-ink)" }}>600.000 đ / buổi</span>
          </div>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.82rem", color: "var(--color-stone)", margin: "0.6rem 0 0" }}>Lớp nhóm: 2 người — 4,2 triệu/người/12 buổi · 3 người — 3,6 triệu/người/12 buổi.</p>
        </div>
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <a href="mailto:thinhkhong.hub@gmail.com" className="cta-btn">
            liên hệ tư vấn <span className="ar">→</span>
          </a>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <a className="mono-link" href="tel:0988039296" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.06em", color: "var(--color-ink)" }}>
              098 803 92 96 · zalo/sms/call
            </a>
            <a className="mono-link" href="mailto:thinhkhong.hub@gmail.com" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.06em", color: "var(--color-ink)" }}>
              thinhkhong.hub@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">học viên — nói về trải nghiệm cùng thinh-không</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem" }}>
        {testimonials.map((t) => (
          <Disclosure
            key={t.name}
            trigger={
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.95rem", color: "var(--color-ink)" }}>
                {t.name} <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.04em", color: "var(--color-stone)", fontWeight: 400 }}>— {t.meta}</span>
              </span>
            }
          >
            {t.quote.split("\n\n").map((para) => (
              <p key={para} style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1rem" }}>
                {para}
              </p>
            ))}
          </Disclosure>
        ))}
      </RevealStagger>

      <Footer />
    </>
  );
}

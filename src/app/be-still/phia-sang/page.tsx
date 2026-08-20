import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "phía sáng · một buổi ngồi lại để nhìn về cái chết an nhiên hơn",
  description: "buổi trò chuyện 1-1 đi qua những hiểu biết về cái chết — từ góc độ khoa học, tâm lý, và tâm linh — để đối diện với nó bằng sự hiểu biết và tình thương.",
};

export default function PhiaSangPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", textAlign: "center" }}>
        <div style={{ textAlign: "left" }}>
          <Breadcrumb trail={[{ label: "be-still", href: routes.beStill }, { label: "phía sáng" }]} />
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          phía sáng
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, color: "var(--color-stone)", maxWidth: "38ch", margin: "0 auto" }}>
          một buổi ngồi lại, để nhìn về cái chết một cách an nhiên hơn
        </p>
      </div>

      <div className="wrap" style={{ margin: "4rem auto", maxWidth: 440 }}>
        <ImagePlaceholder label="ảnh · buổi trò chuyện phía sáng" aspectRatio="4/5" src="/assets/phiasang.webp" />
      </div>

      <Reveal className="wrap letter" style={{ marginTop: "1rem", marginBottom: "2.5rem", maxWidth: "58ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--color-ink)", marginBottom: "2rem" }}>gửi bạn,</p>
        <p className="drop-cap">
          hồi năm ngoái, một người thân trong gia đình tôi ra đi và mãi tới khi ấy tôi mới nhận ra mình chưa từng thực sự chuẩn bị cho điều này. cái chết, dù là điều ai cũng biết rồi sẽ tới, nhưng người ta thường cho rằng nó ở một tương lai nào đó và hiếm khi dám nhìn thẳng vào nó.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "40ch", textAlign: "center" }}>
        <span aria-hidden style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem", lineHeight: 1, color: "var(--color-cham)", marginBottom: "0.4rem" }}>
          &ldquo;
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
          vì sợ.
        </p>
      </Reveal>

      <Reveal className="wrap letter" style={{ marginBottom: "2.5rem", maxWidth: "58ch" }}>
        <p>
          tuy nhiên phần lớn nỗi sợ lại không hẳn đến từ cái chết, sợ vì những khoảng trống mơ hồ. thân này sẽ trải qua điều gì trong những giờ phút cuối? còn tâm thức thì sao? y học ngày nay đã quan sát khá kỹ những gì xảy ra nơi thân và não lúc lâm chung. đặc biệt, những nghiên cứu về trải nghiệm cận tử trong vài thập kỷ qua cũng đã hé lộ nhiều điều bất ngờ về ý thức con người trong thời khắc cuối đời. từ hàng ngàn năm trước, đạo Phật cũng đã có những ghi chép chi tiết hướng dẫn cho các tiến trình này. không có gì thực sự sinh ra, cũng không có gì thực sự mất đi, chỉ có sự tiếp nối không ngừng. thiền sư Thích Nhật Hạnh từng dạy rằng: đám mây không bao giờ chết, nó chỉ trở thành mưa, thành dòng suối, thành một hình tướng khác.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "40ch", textAlign: "center" }}>
        <span aria-hidden style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem", lineHeight: 1, color: "var(--color-cham)", marginBottom: "0.4rem" }}>
          &ldquo;
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
          khi đối diện với cái chết bằng sự hiểu biết và tình thương, nỗi sợ từ đó sẽ dần tan.
        </p>
      </Reveal>

      <Reveal className="wrap letter" style={{ marginBottom: "3.5rem", maxWidth: "58ch" }}>
        <p>
          buổi trò chuyện cùng tôi, sẽ đi qua những hiểu biết — từ góc độ khoa học về những gì xảy ra với thân tâm lúc lâm chung, từ góc nhìn tâm lý về những gì còn vướng víu trong tâm, và từ chiều tâm linh về nghiệp lực và trạng thái tâm.
        </p>
        <p>
          ở những thời khắc cuối cùng của cuộc đời, con người cũng cần đối diện với một điều quan trọng khác: tâm mình. liệu mình đã nhẹ lòng chưa? những yêu thương chưa từng bày tỏ, những nặng lòng chưa thể nói ra, những điều chưa thể tha thứ được cho người và cho chính mình? buổi trò chuyện này cũng để nhìn nhận lại những điều chưa thể buông, xoa dịu và làm thấu tỏ những chất chứa bấy lâu.
        </p>
        <p>
          buổi ngồi lại cũng dành không gian cho những điều rất thực tế: những lưu ý khi lo hậu sự, những giai đoạn quan trọng mà người ra đi sẽ đi qua và cách những người ở lại có thể đồng hành trong từng giai đoạn ấy — để khi việc đến, lòng đã có chuẩn bị, tay chân đỡ luống cuống.
        </p>
        <p>
          đây không hẳn là một cuộc trò chuyện mang màu sắc tôn giáo hay tâm linh, cũng không hẳn là khoa học thuần túy. có lẽ khi đứng trước cái chết thì tất cả sự phân định, khái niệm vốn không còn quan trọng nữa. tôi mong bằng một cách rất con người, bằng sự hiểu biết, thấu cảm và sự an tĩnh của bản thân sẽ giúp ai đó đi qua một đoạn đường trong sự bình an và rõ biết.
        </p>
        <p>tôi đã ấp ủ điều này khá lâu, và rằng mình cần một định lực đủ lớn để thực hiện công việc khó khăn này. may thay, giờ tôi đã sẵn sàng.</p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", marginTop: "2.5rem" }}>
          thương,
          <br />
          tâm
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={35} />
      </div>

      <Reveal className="wrap letter" style={{ marginBottom: "5rem", maxWidth: "58ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--color-ink)", marginBottom: "1.2rem" }}>tái bút —</p>
        <p style={{ fontSize: "0.88rem", color: "var(--color-ink)" }}>
          buổi trò chuyện diễn ra online qua Zoom, khoảng 120 phút. dành cho những ai đang ở gần cái chết theo một cách nào đó — đang mang bệnh, vừa tiễn người thân, đang ngồi bên một người sắp đi, hoặc muốn chuẩn bị khi tâm còn an.
        </p>
        <p style={{ fontSize: "0.88rem", color: "var(--color-ink)" }}>
          một điều tiên quyết quan trọng: người tham gia cần thật sự mở lòng đón nhận và biết mình cần sự giúp đỡ này. phí tùy tâm — nếu lúc này chưa thuận về tài chính, xin đừng bận tâm. vui lòng điền thông tin vào phiếu đăng ký, tôi sẽ hẹn lịch lại qua email.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <a href="https://forms.gle/5kFVB5EKRXNioKC89" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
          đăng ký <span className="ar">→</span>
        </a>
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
          <Link className="mono-link" href={routes.imLangChuNghia} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            im lặng, chữ nghĩa
          </Link>
          <span style={{ color: "var(--color-mist)", fontSize: "0.7rem" }}>·</span>
          <Link className="mono-link" href={routes.clariTea} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            clari-tea
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

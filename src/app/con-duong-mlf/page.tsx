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
  title: "con đường mlf",
  description: "con đường của mộc little farm — hiện diện, thong dong, và thấy rõ.",
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.3rem",
};

export default function ConDuongMlfPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="con đường mlf" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          con đường mlf
        </h1>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>hiện diện, thong dong, thấy rõ</span>
      </div>

      <div className="wrap" style={{ marginTop: "3rem" }}>
        <div style={{ width: "100%", aspectRatio: "16/8", minHeight: 280, maxHeight: 460 }}>
          <ImagePlaceholder label="ảnh · con đường mlf" aspectRatio="auto" src="/assets/conduongmlf.webp" style={{ width: "100%", height: "100%" }} />
        </div>
      </div>

      <Reveal className="wrap" style={{ marginTop: "2.5rem", marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          qua các hoạt động như ngày-hiền, tuần-du, be-still, tea · mind, thinh · không, giữa · middle, và cộng đồng ở-yên, mlf gieo những hạt mầm <strong>hiện diện</strong>, <strong>thong dong</strong>, và <strong>thấy rõ</strong> — để sống giản dị giữa đời thường.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Motif name="nui-suong" size={90} />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "48ch", textAlign: "center" }}>
        <span aria-hidden style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem", lineHeight: 1, color: "var(--color-cham)", marginBottom: "0.4rem" }}>
          &ldquo;
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
          ở-yên, ngay giữa đời sống này
        </p>
      </Reveal>

      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "max(0.6rem, calc(50% - 370px + 0.6rem))", top: "0.5rem", bottom: "0.5rem", width: "1px", background: "var(--color-mist)" }} />

        <div className="wrap" style={{ marginBottom: "1.25rem", position: "relative" }}>
          <span style={{ position: "absolute", left: "0.6rem", top: "50%", transform: "translateY(-50%)", width: 7, height: 7, borderRadius: "50%", background: "var(--color-cham-dem)", opacity: 0.25 }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>về ở-yên</span>
        </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          ở-yên, nào phải chuyện lên non tìm chốn thanh vắng, cũng không hẳn là mười ngày giữ im lặng.
        </p>
        <p style={proseP}>
          bình thường, giữa hơi thở này và hơi thở kia, có một khe rất mỏng mà mình ít khi để ý tới. ở-yên, là trở về, đứng lại nơi cái quãng ấy - một cõi rất nhỏ, nhưng đủ chỗ cho một người.
        </p>
        <p style={proseP}>
          tại mlf, cõi ấy hiện ra qua những việc rất bình thường: nấu một bữa cơm, rót một tách trà, rửa một cái bát. khi nấu cơm, mình chỉ nấu cơm. khi rót trà, mình chỉ rót trà. khi rửa bát, mình chỉ rửa bát.
        </p>
        <p style={proseP}>
          đó đã là một con đường - con đường này chẳng cần chuông mõ, chẳng cần kinh kệ, bởi đây là một cách sống.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.25rem", position: "relative" }}>
        <span style={{ position: "absolute", left: "0.6rem", top: "50%", transform: "translateY(-50%)", width: 7, height: 7, borderRadius: "50%", background: "var(--color-cham-dem)", opacity: 0.5 }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>về khởi nguồn</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          mộc little farm bắt đầu từ những người rời phố lên núi, trồng rau, nấu cơm, để nhìn thấy mình.
        </p>
        <p style={proseP}>
          ở núi, một ngày trôi chậm. trong cái giãn ra từ từ ấy, khoảng trống dần hiển lộ. đây là miền đất màu mỡ để người ta đối diện với những điều lạ: một đêm sâu không đáy, một cơn mưa rừng không hẹn ngày tạnh, một sự im lặng chưa từng dung. và cũng từ những khoảng ấy, bên trong họ, một điều gì đó cũng dần dày lên — một chiều sâu, một cái thấy — được bồi đắp.
        </p>
        <p style={proseP}>
          những đêm ngồi một mình, mà kỳ thực không một mình. có ta và thiên nhiên — một người thầy không tôn xưng, mà tự khắc khả kính. người thầy đã ở đó, lặng lẽ đổi thay, không buông một lời mà thâm sâu diệu vợi. nhìn một cội cây qua bốn mùa, nghe một cơn gió đổi hướng, người ta dần thấy, cái thấy về chính mình.
        </p>
        <p style={proseP}>
          và cái rõ ra ấy, chẳng phải điều học được, mà là điều đã từng sống qua.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.25rem", position: "relative" }}>
        <span style={{ position: "absolute", left: "0.6rem", top: "50%", transform: "translateY(-50%)", width: 7, height: 7, borderRadius: "50%", background: "var(--color-cham-dem)", opacity: 0.75 }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>về vị trí giữa</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          nhiều người nghĩ rằng, muốn đi sâu thì phải rời đi thật xa.
        </p>
        <p style={proseP}>
          chúng tôi thì nghĩ khác. rời đi thì dễ. ở một nơi bình yên, ta thấy được nâng đỡ và dễ trú trong đó. nhưng cái khó là mang sự bình an ấy về giữa bộn bề công việc và những bổn phận chưa xong.
        </p>
        <p style={proseP}>
          vì vậy, mlf không phải một cõi riêng biệt, tách rời khỏi đời sống.
        </p>
        <p style={proseP}>
          mlf chọn ở giữa — giữa đời và đạo.
        </p>
        <p style={proseP}>
          để ở-yên ngay tại nơi mình đứng. ở nơi đó, mình không cần rời bỏ con người mình đang là, cũng không cần gắng trở thành một ai khác tốt hơn. chỉ cần trở về, là đủ.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          thường thì, hiếm khi nào ta chịu ngồi yên. một nỗi buồn ghé qua và ta tìm cách cho hết buồn. một vấn đề xảy đến và ta tới lui tìm giải pháp. mấy ai chịu để yên, cho nước đục lắng trong.
        </p>
        <p style={proseP}>
          bởi ta quen nhìn mọi thứ: cao - thấp, trước - sau. khi có thang đo, tiến trình, con người bắt đầu leo. mà ở-yên thì không nằm ở trên cao, nơi cần chạm tới, nó nằm ngay nơi ta đứng.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          trong mỗi người, đều có sẵn khả năng trở-về, như hạt giống vẫn nằm sẵn trong đất, chờ đúng mùa. có khi mình chỉ quên mất đường về, vì bận rộn cứ phủ lên như cỏ dại, lâu ngày che khuất lối đi.
        </p>
        <p style={proseP}>
          để tìm lại lối đi ấy, có thể bắt đầu từ một điều nhỏ: khi đang làm việc gì đó, dừng lại vài giây, nhìn thật kỹ, cảm thật rõ. nếu trong giây phút ấy, lòng mình dịu lại — thì đó chính là ở-yên. phần còn lại, chỉ là để sự dịu ấy được tiếp nối, ngày này qua ngày khác, như nước thấm vào đất.
        </p>
        <p style={proseP}>
          không ai giục được một hạt giống nảy mầm. việc của người làm vườn, chỉ là giữ cho đất tốt, rồi lùi lại, để yên và tin.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "48ch", textAlign: "center" }}>
        <span aria-hidden style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem", lineHeight: 1, color: "var(--color-cham)", marginBottom: "0.4rem" }}>
          &ldquo;
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
          mlf là một chốn để trở về
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.25rem", position: "relative" }}>
        <span style={{ position: "absolute", left: "0.6rem", top: "50%", transform: "translateY(-50%)", width: 7, height: 7, borderRadius: "50%", background: "var(--color-cham-dem)", opacity: 1 }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>về sự tin tưởng</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          khi một mô hình được dựng lên, ai cũng có một vai để đóng. rồi người ta bắt đầu diễn — vai người hiểu biết, người bình an, người tử tế… một nơi mà ai cũng phải diễn, thì không còn là nơi để trở về.
        </p>
        <p style={proseP}>
          ở mlf, bếp đỏ lửa mỗi ngày, vì tới giờ cơm.
        </p>
      </Reveal>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.3rem" }}>
          nơi này, trước hết là một nơi để sống.
        </p>
        <p style={proseP}>
          và người ta ghé qua, để trở về — thành thật với chính mình.
        </p>
        <p style={proseP}>
          mlf ngồi bên, lắng nghe cùng. nhưng đường đi, vẫn là của người lữ hành. vì bước chân mượn của người khác, sẽ không đưa ai về đến nhà mình.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.3rem" }}>
          khoảng cách vừa gần vừa xa ấy, đó là sự tôn trọng. biết khi nào nên bước tới, khi nào nên lùi lại, để mỗi người có một khoảng ở-yên của riêng mình.
        </p>
        <p style={proseP}>
          đó là chủ ý.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={proseP}>
          còn chúng tôi, chỉ giữ cho nơi này đủ yên. như giữ mặt hồ không gợn sóng, để một ngày, ai đó tự thấy điều vốn đã ở sẵn trong mình.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <Link
          href={routes.veMlf}
          className="mono-link"
          style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.12rem", color: "var(--color-ink)" }}
        >
          mộc little farm
        </Link>
      </div>

      <Footer />
    </>
  );
}

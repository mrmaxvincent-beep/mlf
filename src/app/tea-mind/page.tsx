import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { doors } from "@/data/teaMind";

export const metadata: Metadata = {
  title: "tea · mind",
  description: "một góc nhỏ nơi hơi thở chậm lại, tâm mình lắng lại, qua các hành động giản dị: pha trà, nặn gốm, vẽ tranh.",
  keywords: "tea, mind, trà, gốm, tranh, mindfulness, workshop",
  openGraph: {
    title: "tea · mind · mộc little farm",
    description: "một góc nhỏ nơi hơi thở chậm lại, tâm mình lắng lại, qua các hành động giản dị: pha trà, nặn gốm, vẽ tranh.",
    type: "website",
    url: "https://moclittlefarm.com/tea-mind",
  },
  alternates: {
    canonical: "https://moclittlefarm.com/tea-mind",
  },
};

export default function TeaMindPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="tea · mind" />
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>hơi ấm trong tay • tĩnh lặng trong lòng</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 7vw, 3.8rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 2rem" }}>
          tea · mind
        </h1>
        <div className="hero-personal" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", alignItems: "center" }}>
          <div className="hero-portrait" style={{ width: "9.5rem", flexShrink: 0 }}>
            <ImagePlaceholder label="ảnh chân dung · Vũ" src="/assets/vu.webp" aspectRatio="1/1" style={{ borderRadius: "50%", overflow: "hidden" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "44ch", margin: "0 0 0.9rem" }}>
              Tôi là Vũ, người hướng dẫn trà · gốm · tranh tại mộc little farm. tea·mind là không gian từ cái cảm về vẻ đẹp.
            </p>
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-stone)" }}>— Vũ</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · góc trà, gốm, tranh của vũ 1" aspectRatio="16/12" src="/assets/teamind_1.webp" alt="tea-mind" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · góc trà, gốm, tranh của vũ 2" aspectRatio="16/12" src="/assets/teamind_2.webp" alt="tea-mind" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · góc trà, gốm, tranh của vũ 3" aspectRatio="16/12" src="/assets/teamind_3.webp" alt="tea-mind" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="wrap" style={{ marginTop: "4rem", marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>về tea · mind</span>
      </div>
      <div className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.25rem", lineHeight: 1.75, color: "var(--color-ink)", margin: 0 }}>
          Một góc nhỏ nơi hơi thở chậm lại, tâm mình lắng lại, qua các hành động giản dị: pha trà, nặn gốm, vẽ tranh.
        </p>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>Ở đây, có mùi đất, mùi lửa, mùi lá trà khẽ bay trong chiều tĩnh.</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          tea·mind kể chuyện bằng màu, bằng men gốm, bằng tiếng nước sôi. Những mẩu chuyện nhặt nhạnh từ hành trình tìm cái-đẹp.
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>
          Cái-đẹp không ồn ào. Nó ẩn mình trong dáng ngồi yên, ánh sáng rơi qua kẽ lá, trong vệt men chảy tự nhiên như nước mắt, trong một chén trà nóng đặt lặng lẽ giữa ngày.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          tea·mind là nơi để lắng nghe bản thân qua 4 mạch: trà, gốm, tranh, lịch và từ đó, hiểu rằng: cái-đẹp không phải để giữ, mà để cảm.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", textAlign: "center", maxWidth: "48ch", marginLeft: "auto", marginRight: "auto" }}>
        <span className="eyebrow" style={{ textAlign: "center", color: "var(--color-ink)" }}>
          tinh thần của tea · mind
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>&ldquo;"cái-đẹp" của sự hài hòa, tĩnh lặng và dễ chịu&rdquo;</p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <div className="balance-rule">
          <span />
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-ink)" }}>bốn mạch của tea · mind</span>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "5rem" }}>
        {doors.map((d) => (
          <div key={d.name} className="prog-card">
            <ImagePlaceholder label={d.imgLabel} aspectRatio="4/5" src={d.src} />
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.5rem" }}>{d.tagline}</span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", color: "var(--color-ink)", margin: "0 0 0.9rem" }}>{d.name}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.2rem", maxWidth: "42ch" }}>{d.desc}</p>
              <Link className="go" href={d.href} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)" }}>
                {d.cta} <span className="ar">→</span>
              </Link>
            </div>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "5rem" }}>
        <div className="balance-rule">
          <span />
        </div>
      </div>

<Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", whiteSpace: "pre-line", margin: "0 0 1.5rem" }}>
          Lặng yên trong gió{"\n"}chân chạm đất êm{"\n"}tâm khẽ lay mềm{"\n"}gọi mình đang sống{"\n\n"}Suối trong yên ả{"\n"}hạ về trên nương{"\n"}người đương thong thả{"\n"}hoạ bóng soi tâm{"\n\n"}Mùa vàng vẫy gọi{"\n"}nắng vừa chạm non{"\n"}lấp đầy hiên vắng{"\n"}trọn một tâm hồn{"\n\n"}Măng Mô làng nhỏ{"\n"}lọt giữa đồi xanh{"\n"}nhà gỗ vách hờ{"\n"}chở che muôn thứ{"\n\n"}Cơn mưa đầu hạ{"\n"}nhảy múa hát ca{"\n"}hạt to hạt nhỏ{"\n"}xôn xao lá rừng{"\n\n"}Ngày qua ngày tới{"\n"}làng nối tiếp nhau{"\n"}con dốc nghiêng đợi{"\n"}người đang ngược lối{"\n\n"}Ở giữa lưng chừng{"\n"}hỏi người thuận duyên{"\n"}vì sao lẽ đó{"\n"}nắm rồi lại buông{"\n\n"}Ở yên một cõi{"\n"}hàm dưỡng thân tâm{"\n"}để ngày mai đến{"\n"}thuận dòng lại đi.
        </p>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.92rem", color: "var(--color-stone)", display: "block", margin: "0 0 1.5rem" }}>_ ở giữa những ngày vàng</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          Hôm nay, có thể niềm vui không đến từ điều lớn lao. Một tách trà nóng. Một tiếng cười bên bàn ăn. Một khoảng nắng nằm im trên bậc cửa. Những ngày vàng đôi khi được tạo nên từ chính những điều rất nhỏ như thế.
        </p>
      </Reveal>

      <Footer />
    </>
  );
}

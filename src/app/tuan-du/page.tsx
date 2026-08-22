import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { DayCard } from "@/components/DayCard";
import { Testimonials } from "@/components/Testimonials";
import { ImageCarousel } from "@/components/ImageCarousel";
import { routes } from "@/lib/nav";
import { ngoLines, scheduleRows, kyList, testimonials, tuanDuSubnav } from "@/data/tuanDu";

export const metadata: Metadata = {
  title: "tuần-du",
  description: "tuần-du là hành trình cảm tâm — lấy chất liệu của từng vùng đất để học cách cảm nhận thế giới bên trong mình.",
  keywords: "tuần-du, slow travel, retreat, journey, mindfulness, culture",
  openGraph: {
    title: "tuần-du · mộc little farm",
    description: "tuần-du là hành trình cảm tâm — lấy chất liệu của từng vùng đất để học cách cảm nhận thế giới bên trong mình.",
    type: "website",
    url: "https://moclittlefarm.com/tuan-du",
  },
  alternates: {
    canonical: "https://moclittlefarm.com/tuan-du",
  },
};

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.95rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 1.3rem",
};

export default function TuanDuPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="tuần-du" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
          tuần-du
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", maxWidth: "46ch", margin: "0 0 0.75rem" }}>
          tuần-du là hành trình cảm tâm, lấy chất liệu của từng vùng đất để học cách cảm nhận thế giới bên trong mình.
        </p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.9rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
          {tuanDuSubnav.map((item, i) => (
            <span key={item.href} style={{ display: "flex", alignItems: "baseline", gap: "0.9rem" }}>
              {i > 0 ? <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)" }}>/</span> : null}
              {item.href === routes.tuanDu ? (
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-ink)", borderBottom: "1px solid var(--color-ink)", paddingBottom: "0.1rem" }}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="mono-link" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", color: "var(--color-stone)" }}>
                  {item.label}
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2.5rem", marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)", width: "100vw", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0" }}>
        <ImagePlaceholder label="ảnh · một chuyến tuần-du 1" aspectRatio="16/12" src="/assets/tuandu01.webp" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · một chuyến tuần-du 2" aspectRatio="16/12" src="/assets/tuandu02.webp" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · một chuyến tuần-du 3" aspectRatio="16/12" src="/assets/tuandu03.webp" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="wrap" style={{ paddingTop: "1.2rem", display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "0.75rem" }}>
        <span style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
          kỳ 05 · ĐANG MỞ ĐĂNG KÝ
        </span>
        <span style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-ink)" }}>mây nằm ngủ</span>
        <Link className="mono-link" href={routes.tuanDuToi} style={{ flex: 1, textAlign: "right", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>
          xem tuần-du 05 →
        </Link>
      </div>

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "4rem" }}>
        <div style={{ textAlign: "center", maxWidth: "34ch", margin: "0 auto" }}>
          {ngoLines.map((line) => (
            <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
              {line}
            </p>
          ))}
        </div>
      </Reveal>

      <div style={{ marginBottom: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", width: "180px", height: "140px" }}>
          <Image src="/assets/motif-loi-mon.webp" alt="motif-loi-mon" fill sizes="180px" style={{ objectFit: "contain" }} />
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem" }}>
        <p style={{ ...proseP, fontSize: "1.05rem", lineHeight: 1.9 }}>tuần-du không là chuyến hành hương. tuần-du là: ngồi bên nhau, uống một tách trà trong tĩnh lặng, đi qua con đường đầy lá rụng, và để lòng mình mềm ra theo nhịp đất trời.</p>
        <p style={{ ...proseP, fontSize: "1.05rem", lineHeight: 1.9 }}>rời khỏi không gian quen thuộc của bản thân, chúng tôi chỉ mong được cùng mọi người nhìn đời sống từ những góc khác: nhẹ hơn, chậm hơn.</p>
        <p style={{ ...proseP, fontSize: "1.05rem", lineHeight: 1.9 }}>để thấy rằng, sống giữa đời sống này cần cả sự sôi động lẫn tĩnh lặng. Để còn biết, mỗi chiếc lá có một hình hài riêng, mỗi dòng sông có một khúc lượn, và trong lòng mình cũng có lắm những ỉ oi.</p>
        <p style={{ ...proseP, fontSize: "1.05rem", lineHeight: 1.9 }}>nếu tỉnh quá, ta thấy hiện thực trần trụi mà tim khô lại. Nếu mộng quá, ta quên mất kỳ diệu trong từng bước chân trên đất. tuần-du là con đường thong dong giữa hai bờ ấy — giữa mộng và thực, giữa tĩnh và động.</p>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "1.2rem" }}>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.6rem, 8vw, 4rem)", color: "var(--color-ink)" }}>tuần</span>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.6rem", color: "var(--color-ink)" }}>/</span>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.6rem, 8vw, 4rem)", color: "var(--color-ink)" }}>du</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "1.4rem", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-stone)", maxWidth: "20ch" }}>bước đi có nhịp, chậm rãi và liên tục</span>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.7, color: "var(--color-stone)", maxWidth: "20ch" }}>sự mở ra, thong dong mà tiếp xúc</span>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)" }}>· ở lâu hơn trong một khoảnh khắc</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)" }}>· nghe kỹ hơn một câu chuyện</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)" }}>· cảm sâu hơn một điều đang chạm vào mình</span>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "46ch", textAlign: "center", margin: "0 auto 3rem" }}>
        <span className="eyebrow" style={{ marginBottom: "1.1rem", color: "var(--color-cham-dem)", display: "block" }}>
          một chuyến đi thong dong
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          tuần-du mang tinh thần của một mystery trip — vì tin rằng khi ta buông bớt sự kiểm soát, ta mới thực sự bắt đầu đi.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "3rem", maxWidth: "56ch" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem", textAlign: "right" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.2rem" }}>
              không cần
            </span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-stone-alt)", textDecoration: "line-through", textDecorationColor: "var(--color-mist)" }}>biết quá nhiều trước khi đi</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-stone-alt)", textDecoration: "line-through", textDecorationColor: "var(--color-mist)" }}>nắm chắc mọi thứ</span>
          </div>

          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-cham-dem)", padding: "0 1.6rem", flexShrink: 0 }}>→</span>

          <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.5rem", textAlign: "left" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.2rem" }}>
              chỉ cần
            </span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-ink)", fontWeight: 500 }}>thoải mái theo nhịp dẫn của nhà mộc</span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-ink)", fontWeight: 500 }}>cho phép mọi thứ xảy ra theo cách của nó</span>
          </div>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "3.5rem", maxWidth: "46ch", textAlign: "center", margin: "0 auto 3.5rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          ta không cố kiểm soát hành trình. ta nương theo: thời tiết, không gian, nhịp đi của đoàn, và cả nhịp đi của chính mình.
        </p>
      </div>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "700px" }}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "ẩm thực", text: "chay trong xuyên suốt hành trình, để nuôi dưỡng sự nhẹ nhàng, thanh tịnh" },
            { label: "kể chuyện", text: "văn hoá & lịch sử, để lắng nghe từng lớp trầm tích của thời gian" },
            { label: "trà đàm", text: "khi cùng nâng tách trà nóng, chuyện trò trong an tĩnh" },
          ].map((item, idx) => (
            <Reveal key={item.label} style={{ flex: "1 1 180px", maxWidth: "220px", padding: "0 1.5rem", textAlign: "center", borderLeft: idx > 0 ? "1px solid var(--color-mist)" : "none" }}>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--color-stone)", marginBottom: "0.7rem" }}>
                0{idx + 1}
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>
                {item.label}
              </span>
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-ink)" }}>
                {item.text}
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3.5rem", height: "70vh", width: "52.5vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 3.5rem" }}>
        <ImageCarousel
          images={[
            { label: "ảnh · tuần-du 01", aspectRatio: "3/4", src: "/assets/tuandu_slide1.webp" },
            { label: "ảnh · tuần-du 02", aspectRatio: "3/4", src: "/assets/tuandu_slide2.webp" },
            { label: "ảnh · tuần-du 03", aspectRatio: "3/4", src: "/assets/tuandu_slide3.webp" },
            { label: "ảnh · tuần-du 04", aspectRatio: "3/4", src: "/assets/tuandu_slide4.webp" },
            { label: "ảnh · tuần-du 05", aspectRatio: "3/4", src: "/assets/tuandu_slide5.webp" },
            { label: "ảnh · tuần-du 06", aspectRatio: "3/4", src: "/assets/tuandu_slide6.webp" },
            { label: "ảnh · tuần-du 07", aspectRatio: "3/4", src: "/assets/tuandu_slide7.webp" },
            { label: "ảnh · tuần-du 08", aspectRatio: "3/4", src: "/assets/tuandu_slide8.webp" },
            { label: "ảnh · tuần-du 09", aspectRatio: "3/4", src: "/assets/tuandu_slide9.webp" },
            { label: "ảnh · tuần-du 10", aspectRatio: "3/4", src: "/assets/tuandu_slide10.webp" },
          ]}
          showCounter={false}
          showDots={false}
        />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "4rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.3rem, 3.2vw, 1.6rem)", lineHeight: 1.5, color: "var(--color-ink)", marginBottom: "1.1rem" }}>
          đi để hiểu thế giới, và hiểu mình
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 auto", maxWidth: "70ch" }}>
          mỗi chuyến đi qua một vùng đất: lịch sử, văn hoá, không khí, con người của nơi đó. Nhưng mục đích sâu hơn là dùng tất cả những điều đó như chất liệu để cảm tâm mình: cảm mình đang ở đâu, đang vướng gì, đang cần gì và bằng cảm nhận thật sự chứ không phải bằng suy nghĩ.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch" }}>
        <div style={{ display: "flex", alignItems: "stretch", justifyContent: "center" }}>
          <div style={{ flex: "1 1 220px", textAlign: "right", paddingRight: "1.8rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.6rem" }}>
              ở nhà mộc
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
              mọi thứ quanh mình đứng lại. trong sự đứng yên đó, tâm dần lắng xuống như mặt hồ, khi không ai khuấy, tự trong.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", padding: "0 0.4rem" }}>
            <span style={{ width: "1px", flex: 1, background: "var(--color-mist)" }} />
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-stone)", lineHeight: 1 }}>⇄</span>
            <span style={{ width: "1px", flex: 1, background: "var(--color-mist)" }} />
          </div>

          <div style={{ flex: "1 1 220px", textAlign: "left", paddingLeft: "1.8rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-cham-dem)", marginBottom: "0.6rem" }}>
              tuần-du
            </span>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
              đi qua những vùng đất mình chưa từng thuộc về. mỗi nơi chạm vào mình một cách khác nhau và trong những cái chạm đó, tâm mình hiện ra.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>một chút tinh thần của chuyến đi</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "#faf8f3", padding: "2.5rem", borderRadius: "0.5rem", maxWidth: "73ch", width: "100%" }}>
          <div style={{ marginBottom: "-3.5rem" }}>
            <DayCard title="lịch trình hằng ngày" rows={scheduleRows} />
          </div>
        </div>
      </Reveal>
      <div className="wrap" style={{ marginBottom: "4rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--color-stone)", textAlign: "center" }}>
          mỗi ngày một buổi vòng-trà-tâm là thời gian lắng đọng nhất của cả ngày.
        </p>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 2.2rem" }}>
          một chuyến đi để thong dong cùng đất trời,
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "0", marginBottom: "2.2rem" }}>
          <div style={{ flex: "1 1 200px", maxWidth: "220px", padding: "0 1.8rem", borderRight: "1px solid var(--color-mist)" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.7rem" }}>
              đất
            </span>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-cham-dem)" }}>
              bao dung như mặt đất
            </span>
          </div>
          <div style={{ flex: "1 1 200px", maxWidth: "220px", padding: "0 1.8rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "0.7rem" }}>
              trời
            </span>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.3rem", color: "var(--color-cham-dem)" }}>
              rộng mở như bầu trời
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "68ch", textAlign: "center" }}>
        <span aria-hidden style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "2rem", lineHeight: 1, color: "var(--color-cham)", marginBottom: "0.4rem" }}>
          &ldquo;
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.6, color: "var(--color-ink)", margin: 0 }}>
          tuần-du bắt đầu bằng một câu hỏi trong mỗi người — hãy xem khi tuần-du khép lại, điều gì đã âm thầm mở ra bên trong ta?
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.5rem" }}>
        <span className="eyebrow" style={{ color: "var(--color-cham-dem)" }}>tuần-du ký &amp; travel-book</span>
      </div>
      <div className="wrap" style={{ marginBottom: "5rem", display: "grid", gridTemplateColumns: "5fr 7fr", gap: "2.5rem", alignItems: "center" }}>
        <div>
          <ImagePlaceholder label="ảnh · tuần-du ký" aspectRatio="4/5" src="/assets/tuanduky_03.webp" />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0.9rem 0 0" }}>
            tuần-du ký là cẩm nang ghi lại toàn bộ câu chuyện lịch sử, văn hoá của từng điểm đến - gợi mở để suy gẫm, ghi chép, trắc nghiệm. một &ldquo;tấm bản đồ&rdquo; tinh thần của chuyến đi.
          </p>
        </div>
        <div>
          <ImagePlaceholder label="ảnh · travel-book" aspectRatio="3/4" src="/assets/travel_book_tuandu_03.webp" />
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", lineHeight: 1.75, color: "var(--color-ink)", margin: "0.9rem 0 0" }}>
            travel-book hướng dẫn toàn bộ lịch trình, phân chia phòng, phương tiện, trang phục, thời tiết, tâm thế, phương án dự phòng — cái nhìn tổng thể nhất về chuyến đi.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
        <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-cham-dem)" }}>
          những nơi tuần-du đã đi qua
        </span>
        <Link className="go mono-link" href={routes.chuoiTuanDu} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          xem toàn bộ chuỗi <span className="ar">→</span>
        </Link>
      </div>
      <RevealStagger className="wrap" style={{ marginBottom: "2.5rem", maxWidth: "56ch" }}>
        {kyList.map((ky) => (
          <div
            key={ky.num}
            style={{ display: "grid", gridTemplateColumns: "3.2rem 1fr auto", gap: "1.2rem", alignItems: "baseline", padding: "1.2rem 0", borderBottom: "1px solid var(--color-mist)" }}
          >
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-stone-alt)" }}>{ky.num}</span>
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)" }}>{ky.title}</span>
              <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.06em", color: "var(--color-stone)", marginTop: "0.3rem" }}>
                {ky.places}
              </span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: ky.statusColor }}>{ky.status}</span>
          </div>
        ))}
      </RevealStagger>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "56ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          mỗi chuyến tuần-du chỉ có một ít chỗ, vì một nhóm nhỏ mới đủ để mỗi người thực sự được nghe thấy.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link href={routes.tuanDuToi} className="cta-btn cta-btn--solid">
            tuần-du tới <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem", flexWrap: "wrap" }}>
        <span className="eyebrow" style={{ marginBottom: 0, color: "var(--color-cham-dem)" }}>
          người tham gia viết về tuần-du
        </span>
        <Link className="go mono-link" href={routes.tuanDuBlog} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          đọc thêm ở người đi qua <span className="ar">→</span>
        </Link>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "58ch" }}>
        <div>
          <Testimonials items={testimonials} showDots={false} fontSize="1.2rem" />
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "48ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          không kích hoạt cảm xúc tập thể — không nhảy múa, hô gọi, nắm tay, ôm để tạo cao trào, không dẫn dắt hoặc thúc đẩy cảm xúc.
          <br />
          <br />
          mà mọi điều chậm rãi, có ý thức và rất giản đơn. mỗi người được ở yên với nhịp cảm của riêng mình.
          <br />
          <br />
          chúng tôi tin rằng sự chạm sâu nhất luôn đến từ im lặng, từ sự hiện diện chân thật, và từ một không gian đủ dịu để mỗi người tự lắng nghe chính mình.
        </p>
      </div>

      <div className="wrap" style={{ marginTop: "5rem", marginBottom: "6rem", maxWidth: "52ch" }}>
        <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "1.75rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", lineHeight: 1.9, color: "var(--color-stone)", margin: "0 0 1rem", textAlign: "justify" }}>
            các chương trình retreat / tuần-du tại mlf được tổ chức như những hành trình trải nghiệm đời sống và thực hành sự hiện diện, trong đó việc đi – ở – dừng lại – quan sát là một phần của quá trình quay về với chính mình. đây không phải là hoạt động kinh doanh lữ hành, không phải tour du lịch trọn gói, và không mang tính tham quan – thuyết minh điểm đến. đội ngũ mlf không đảm nhiệm vai trò hướng dẫn viên du lịch hay đơn vị cung cấp dịch vụ du lịch.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", lineHeight: 1.9, color: "var(--color-stone)", margin: 0, textAlign: "justify" }}>
            phí tham gia được hiểu là sự đóng góp cho không gian thực hành, nội dung dẫn dắt và sự hiện diện chung. việc di chuyển, ăn ở và các chi phí phát sinh trong hành trình được người tham gia cùng nhau chia sẻ, dựa trên tinh thần tự nguyện và đồng thuận.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", lineHeight: 1.9, color: "var(--color-stone)", margin: 0, textAlign: "justify" }}>
            không gian này được mở ra để cùng đi – cùng ở – cùng nhìn lại cách mình đang sống, chứ không nhằm cung cấp dịch vụ du lịch hay trải nghiệm giải trí thuần túy.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

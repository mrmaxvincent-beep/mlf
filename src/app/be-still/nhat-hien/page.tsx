import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { Motif } from "@/components/Motif";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "nhất-hiện · bình phàm — thuần tịnh — rõ biết",
  description: "nhất-hiện là nơi để mỗi người lặng về tu sửa mình — một cộng đồng nhỏ, nơi học và hành về tâm.",
};

const qualities = [
  { name: "bình phàm", desc: "là sự giản dị, hồn nhiên như mặt đất. Không cần tô vẽ, không phải trở nên đặc biệt, chỉ là được sống trọn vẹn với cái bình thường vốn có." },
  { name: "thuần tịnh", desc: "là dòng suối trong, không vẩn đục bởi tham cầu hay chấp thủ. Khi tâm không bị cuốn theo dòng vọng tưởng, sự trong sáng ấy tự hiển lộ." },
  { name: "rõ biết", desc: "là ánh sáng tỉnh thức, khả năng soi chiếu và thấy biết mọi hiện tượng đúng như nó đang là. Không phải cố gắng để có, mà chỉ cần buông xuống, tâm tự nhiên sáng rõ." },
];

const infoList = ["nhất-hiện là hoạt động phi tôn giáo", "một cộng đồng nhỏ, nơi học và hành về tâm", "môn sinh cần học và hành trong ít nhất 1 năm", "tuyển sinh tùy duyên hợp", "chương trình miễn phí"];

export default function NhatHienPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", textAlign: "center" }}>
        <div style={{ textAlign: "left" }}>
          <Breadcrumb trail={[{ label: "be-still", href: routes.beStill }, { label: "nhất-hiện" }]} />
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.2rem)", lineHeight: 1.1, color: "var(--color-ink)", margin: "0 0 2.2rem" }}>
          nhất-hiện
        </h1>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.05rem", lineHeight: 2, color: "var(--color-stone)", maxWidth: "38ch", margin: "0 auto" }}>
          bình phàm — thuần tịnh — rõ biết
        </p>
      </div>

      <div className="wrap" style={{ margin: "5rem auto", maxWidth: 420 }}>
        <ImagePlaceholder label="ảnh · cộng đồng thực tập nhất-hiện" aspectRatio="4/5" />
      </div>

      <Reveal className="wrap" style={{ marginBottom: "6rem", maxWidth: "44ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 2, color: "var(--color-ink)", margin: 0 }}>nhất-hiện là nơi để mỗi người lặng về tu sửa mình.</p>
      </Reveal>

      <RevealStagger className="wrap" style={{ marginBottom: "5rem", maxWidth: "44ch" }}>
        {qualities.map((q) => (
          <div key={q.name} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.9rem" }}>{q.name}</span>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0 }}>{q.desc}</p>
          </div>
        ))}
      </RevealStagger>

      <Reveal className="wrap" style={{ marginBottom: "7rem", maxWidth: "38ch", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1rem", lineHeight: 1.95, color: "var(--color-ink)", margin: 0 }}>
          một con đường trung dung —
          <br />
          nơi tâm được đặt trong thuần tịnh,
          <br />
          để nhìn mọi sự bằng con mắt rõ biết.
        </p>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "6rem", maxWidth: "38ch", textAlign: "center" }}>
        {infoList.map((item) => (
          <p key={item} style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.84rem", lineHeight: 2.2, color: "var(--color-ink)", margin: 0 }}>
            {item}
          </p>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "6rem", textAlign: "center" }}>
        <Motif name="dom-muc" size={35} />
      </div>

      <div className="wrap" style={{ marginBottom: "8rem", textAlign: "center" }}>
        <a className="go mono-link" href="https://www.bestill.life/p/phap.html" target="_blank" rel="noopener" style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-ink)" }}>
          tìm hiểu thêm về nhất-hiện <span className="ar">→</span>
        </a>
        <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.06em", color: "var(--color-mist)", marginTop: "0.7rem" }}>nhathien.com</span>
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
          <Link className="mono-link" href={routes.phiaSang} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-stone)" }}>
            phía sáng
          </Link>
        </div>
      </div>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link className="go" href={routes.beStill} style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--color-mist)" }}>
          về trang be-still
        </Link>
      </div>

      <Footer />
    </>
  );
}

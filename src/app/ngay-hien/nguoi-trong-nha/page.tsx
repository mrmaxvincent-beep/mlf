import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";
import { baoGom, chiPhi, danhCho, diemNeo, hero, khongCo, loiMo, ngoaiDiemNeo, thoiGian, viSao05Dem } from "@/data/nguoiTrongNha";

export const metadata: Metadata = {
  title: "người-trong-nhà",
  description: "dành trọn 06 ngày sống trong một nếp nhà, gìn giữ những khoảng yên nhỏ.",
};

function Pause() {
  return (
    <div className="ntn-pause" aria-hidden="true">
      <span />
    </div>
  );
}

/** Trang đọc chậm: một cột hẹp, nhiều khoảng trống, mỗi đoạn hiện ra từ từ. */
export default function NguoiTrongNhaPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem" }}>
        <Breadcrumb trail={[{ label: "ngày-hiền", href: routes.ngayHien }, { label: hero.title }]} />
      </div>

      <div className="ntn">
        <Reveal className="ntn-hero">
          <h1>{hero.title}</h1>
          <p>{hero.sub}</p>
        </Reveal>

        <Reveal className="ntn-open">
          {loiMo.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Pause />

        <Reveal className="ntn-section">
          <h2>dành cho</h2>
          {danhCho.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Pause />

        <Reveal className="ntn-section">
          <h2>nếp nhà là điểm neo</h2>
          <ul className="ntn-neo">
            {diemNeo.map((d) => (
              <li key={d.num}>
                <span>{d.num}</span>
                {d.text}
              </li>
            ))}
          </ul>
          <p className="ntn-soft">{ngoaiDiemNeo}</p>
        </Reveal>

        <Pause />

        <Reveal className="ntn-section">
          <h2>những gì không có</h2>
          <p className="ntn-quiet">{khongCo}</p>
        </Reveal>

        <Pause />

        <Reveal className="ntn-section">
          <h2>thời gian</h2>
          <p>{thoiGian}</p>
          <h3>vì sao 05 đêm?</h3>
          <p className="ntn-soft">{viSao05Dem}</p>
        </Reveal>

        <Pause />

        <Reveal className="ntn-section">
          <h2>bao gồm</h2>
          <p>{baoGom.join(" · ")}</p>
          <h2 style={{ marginTop: "3.5rem" }}>chi phí</h2>
          <p className="ntn-price">{chiPhi}</p>
        </Reveal>

        <Reveal className="ntn-cta">
          <a href="https://m.me/mlfmangden" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            hỏi nhà còn chỗ <span className="ar">→</span>
          </a>
          <Link href={routes.soTayKhach} className="ntn-guide">
            đọc guest guide
          </Link>
        </Reveal>
      </div>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Disclosure } from "@/components/Disclosure";
import { policyLines, travelGroups } from "@/data/stayTalk";
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

      <div className="ntn ntn--top">
        <Reveal className="ntn-hero">
          <h1>{hero.title}</h1>
          <p>{hero.sub}</p>
          <nav className="ntn-subnav" aria-label="các hành trình ngày-hiền">
            <span className="current">{hero.title}</span>
            {[
              { label: "stay+talk", href: routes.stayTalk },
              { label: "retreat ở-yên", href: routes.retreatOYen },
              { label: "retreat hàm-dưỡng", href: routes.retreatHamDuong },
              { label: "retreat an-vui", href: routes.retreatAnVui },
            ].map((item) => (
              <span key={item.href}>
                <i>/</i>
                <Link href={item.href} className="mono-link">
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </Reveal>
      </div>

      <div className="ntn-photos">
        <ImagePlaceholder label="ảnh · người-trong-nhà 1" aspectRatio="16/12" src="/assets/nguoitrongnha1.webp" alt="người-trong-nhà" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · người-trong-nhà 2" aspectRatio="16/12" src="/assets/nguoitrongnha2.webp" alt="người-trong-nhà" style={{ width: "100%", height: "auto" }} />
        <ImagePlaceholder label="ảnh · người-trong-nhà 3" aspectRatio="16/12" src="/assets/nguoitrongnha3.webp" alt="người-trong-nhà" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="ntn">
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

        <div className="ntn-more">
          <Disclosure trigger={<span className="ntn-more-label">chính sách hủy / hoàn</span>}>
            <div>
              {policyLines.map((line) => (
                <p key={line} className="ntn-small">
                  {line}
                </p>
              ))}
            </div>
          </Disclosure>
          <Disclosure trigger={<span className="ntn-more-label">cách di chuyển tới măng đen</span>}>
            <div>
              {travelGroups.map((group) => (
                <div key={group.title} style={{ marginBottom: "1.4rem" }}>
                  <span className="ntn-more-sub">{group.title}</span>
                  {group.lines.map((line) => (
                    <p key={line} className="ntn-small">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Disclosure>
          <Link href={routes.specialTreat} className="mono-link ntn-more-link">
            special treat: dành cho khách quen <span className="ar">→</span>
          </Link>
        </div>

        <Reveal className="ntn-cta">
          <a href="https://m.me/mlfmangden" target="_blank" rel="noopener" className="cta-btn cta-btn--solid">
            liên hệ qua fanpage <span className="ar">→</span>
          </a>
          <Link href={routes.soTayKhach} className="cta-btn cta-btn--outline">
            đọc guest guide <span className="ar">→</span>
          </Link>
        </Reveal>

        <div className="ntn-others">
          <span>tham khảo thêm hành trình khác</span>
          <div>
            <Link className="mono-link" href={routes.stayTalk}>stay+talk</Link>
            <i>·</i>
            <Link className="mono-link" href={routes.retreatOYen}>retreat ở-yên</Link>
            <i>·</i>
            <Link className="mono-link" href={routes.retreatHamDuong}>retreat hàm-dưỡng</Link>
            <i>·</i>
            <Link className="mono-link" href={routes.retreatAnVui}>retreat an-vui</Link>
          </div>
          <Link href={routes.ngayHien} className="go mono-link ntn-back">
            về trang ngày-hiền <span className="ar">→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

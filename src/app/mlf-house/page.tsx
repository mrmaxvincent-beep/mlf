import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { MlfHousePeople } from "@/components/MlfHousePeople";
import { MlfHouseRooms } from "@/components/MlfHouseRooms";
import { routes } from "@/lib/nav";
import { closing, contactEmail, ghiNhan, gopTay, hero, invitations, ketNoi, mailto, nguoiCuaNha } from "@/data/mlfHouse";

export const metadata: Metadata = {
  title: "mlf house",
  description: "những người làm nên mộc: ghi nhận, kết nối và cùng góp tay.",
};

export default function MlfHousePage() {
  const open = invitations.filter((i) => i.status === "open");

  const ghiNhanRoom = <MlfHousePeople />;

  const ketNoiRoom = (
    <div className="mhr-cols">
      <div className="mh-col">
        <p className="mh-lead">{ketNoi.intro}</p>
        <p className="mh-lead">{ketNoi.rule}</p>
        <a className="cta-btn mh-cta" href={mailto("xin được giới thiệu")}>
          xin được giới thiệu <span className="ar">→</span>
        </a>
      </div>
      <aside className="mhr-aside">
        <span className="mh-label">gặp nhau ngoài đời</span>
        <p className="mh-note">{ketNoi.offline}</p>
        <div className="mh-links">
          <Link href={routes.trangYen} className="mono-link">trăng-yên</Link>
          <i>·</i>
          <Link href={routes.vongTraTam} className="mono-link">vòng-trà-tâm</Link>
        </div>
      </aside>
    </div>
  );

  const gopTayRoom = (
    <div className="mh-col">
      <p className="mh-lead mhr-narrow">{gopTay.intro}</p>
      {open.map((inv) => (
        <article key={inv.title} className="mh-invite">
          <span className="mh-label">lời mời · đang mở</span>
          <h3>{inv.title}</h3>
          <dl className="mh-rows">
            <div>
              <dt>vì sao</dt>
              <dd>{inv.why}</dd>
            </div>
            <div>
              <dt>đang cần</dt>
              <dd>{inv.needs}</dd>
            </div>
            <div>
              <dt>cách góp</dt>
              <dd>{inv.how}</dd>
            </div>
            <div>
              <dt>hình thức</dt>
              <dd>{inv.form}</dd>
            </div>
            <div>
              <dt>khép lại</dt>
              <dd>{inv.closes}</dd>
            </div>
          </dl>
          <a className="cta-btn mh-cta" href={mailto(`góp tay: ${inv.title}`)}>
            tôi muốn góp tay <span className="ar">→</span>
          </a>
        </article>
      ))}
      <a className="mono-link mh-propose" href={mailto("đề xuất một việc cần góp tay")}>
        đề xuất việc của bạn <span className="ar">→</span>
      </a>
    </div>
  );

  return (
    <>
      <Header />

      {/* hiên nhà */}
      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "mlf", href: routes.veMlf }, { label: hero.title }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          {hero.title}
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>{hero.tagline}</p>
        <nav className="mh-subnav" aria-label="ba gian của mlf house">
          <a href="#ghi-nhan" className="mono-link">ghi nhận</a>
          <i>/</i>
          <a href="#ket-noi" className="mono-link">kết nối</a>
          <i>/</i>
          <a href="#gop-tay" className="mono-link">góp tay</a>
        </nav>
      </div>

      <Reveal className="wrap mh-intro">
        {hero.intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>

      <Reveal className="wrap mhr-porch">
        <span className="mh-label">{nguoiCuaNha.title}</span>
        <p>{nguoiCuaNha.text}</p>
      </Reveal>

      {/* ba gian */}
      <div className="wrap">
        <MlfHouseRooms
          rooms={[
            { id: "ghi-nhan", name: ghiNhan.title, sub: "những người đã góp cho mộc", content: ghiNhanRoom },
            { id: "ket-noi", name: ketNoi.title, sub: "tìm nhau, nhờ nhà giới thiệu", content: ketNoiRoom },
            { id: "gop-tay", name: gopTay.title, sub: "những việc đang cần thêm người", content: gopTayRoom },
          ]}
        />
      </div>

      {/* ngưỡng cửa */}
      <Reveal className="wrap mh-closing">
        <p>{closing}</p>
        <a href={mailto("tôi là người của nhà")} className="mono-link">
          {contactEmail}
        </a>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "3rem", textAlign: "center" }}>
        <Link className="go mono-link" href={routes.veMlf} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          ← về mlf
        </Link>
      </div>

      <Footer />
    </>
  );
}

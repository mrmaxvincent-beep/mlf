import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { MlfHousePeople } from "@/components/MlfHousePeople";
import { routes } from "@/lib/nav";
import { closing, contactEmail, doneWorks, ghiNhan, gopTay, hero, invitations, ketNoi, mailto, nguoiCuaNha } from "@/data/mlfHouse";

export const metadata: Metadata = {
  title: "mlf house",
  description: "những người làm nên mộc: ghi nhận, kết nối và cùng góp tay.",
};

function SecHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mh-head">
      <span className="mh-num">{num}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function MlfHousePage() {
  const open = invitations.filter((i) => i.status === "open");
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "mlf", href: routes.veMlf }, { label: hero.title }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          {hero.title}
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>{hero.tagline}</p>
        <nav className="mh-subnav" aria-label="các mục của mlf house">
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

      <section className="mh-band">
        <Reveal className="wrap mh-split">
          <SecHead num="01" title={nguoiCuaNha.title} />
          <p className="mh-lead">{nguoiCuaNha.text}</p>
        </Reveal>
      </section>

      <section id="ghi-nhan" className="mh-sec">
        <div className="wrap">
          <div className="mh-split mh-split--end">
            <SecHead num="02" title={ghiNhan.title} />
            <p className="mh-note">{ghiNhan.note}</p>
          </div>
          <MlfHousePeople />
        </div>
      </section>

      <section id="ket-noi" className="mh-sec mh-sec--line">
        <Reveal className="wrap mh-split">
          <SecHead num="03" title={ketNoi.title} />
          <div className="mh-col">
            <p className="mh-lead">{ketNoi.intro}</p>
            <p className="mh-lead">{ketNoi.rule}</p>
            <p className="mh-note">{ketNoi.offline}</p>
            <div className="mh-links">
              <Link href={routes.trangYen} className="mono-link">trăng-yên</Link>
              <i>·</i>
              <Link href={routes.vongTraTam} className="mono-link">vòng-trà-tâm</Link>
            </div>
            <a className="cta-btn cta-btn--solid mh-cta" href={mailto("xin được giới thiệu")}>
              xin được giới thiệu <span className="ar">→</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section id="gop-tay" className="mh-band">
        <div className="wrap mh-split">
          <SecHead num="04" title={gopTay.title} />
          <div className="mh-col">
            <Reveal>
              <p className="mh-lead">{gopTay.intro}</p>
            </Reveal>

            {open.map((inv) => (
              <Reveal key={inv.title} className="mh-invite">
                <span className="mh-label">lời mời · đang mở</span>
                <h3>{inv.title}</h3>
                <dl className="mh-rows mh-rows--wide">
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
              </Reveal>
            ))}

            <div className="mh-done">
              <span className="mh-label">việc đã thành</span>
              <ul>
                {doneWorks.map((w) => (
                  <li key={w.title}>
                    <span>{w.title}</span>
                    <span className="mh-when">
                      {w.when}
                      {w.href ? (
                        <>
                          {" · "}
                          <Link href={w.href} className="mono-link">đọc chuyện</Link>
                        </>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a className="mono-link mh-propose" href={mailto("đề xuất một việc cần góp tay")}>
              đề xuất việc của bạn <span className="ar">→</span>
            </a>
          </div>
        </div>
      </section>

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

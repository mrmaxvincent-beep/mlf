import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { MlfHousePeople } from "@/components/MlfHousePeople";
import { MlfHouseRooms } from "@/components/MlfHouseRooms";
import { MailChoice } from "@/components/MailChoice";
import { routes } from "@/lib/nav";
import { closing, drafts, ghiNhan, gopTay, hero, invitations, ketNoi } from "@/data/mlfHouse";

export const metadata: Metadata = {
  title: "mlf house",
  description: "những người làm nên mộc: ghi nhận, kết nối và cùng góp tay.",
};

export default function MlfHousePage() {
  const open = invitations.filter((i) => i.status === "open");

  const ghiNhanRoom = (
    <>
      <p className="mh-thanks">
        {ghiNhan.thanks.map((line, i) => (
          <span key={line}>
            {i > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </p>
      <MlfHousePeople />
    </>
  );

  const ketNoiRoom = (
    <div className="mhr-cols">
      <div className="mh-col">
        <p className="mh-lead">{ketNoi.intro}</p>
        <p className="mh-lead">{ketNoi.rule}</p>
        <p className="mh-note mh-caution">{ketNoi.circle}</p>
        <MailChoice label="xin được giới thiệu" draft={drafts.gioiThieu()} />
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
      <p className="mh-count">{open.length} lời mời đang mở</p>
      <div className="mh-invites">
        {open.map((inv) => (
          <article key={inv.id} id={`loi-moi-${inv.id}`} className="mh-invite">
            <span className="mh-label">lời mời · đang mở</span>
            <h3>{inv.title}</h3>
            <dl className="mh-rows">
              <div>
                <dt>đang cần</dt>
                <dd>{inv.needs}</dd>
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
            <details className="mh-more">
              <summary>vì sao, và cách góp</summary>
              <dl className="mh-rows">
                <div>
                  <dt>vì sao</dt>
                  <dd>{inv.why}</dd>
                </div>
                <div>
                  <dt>cách góp</dt>
                  <dd>{inv.how}</dd>
                </div>
              </dl>
            </details>
            <MailChoice label="tôi muốn góp tay" draft={drafts.gopTay(inv.title)} />
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Header />

      {/* hiên nhà */}
      <div className="wrap-wide" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb trail={[{ label: "mlf", href: routes.veMlf }, { label: hero.title }]} />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          {hero.title}
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>{hero.tagline}</p>
      </div>

      {/* ba gian */}
      <div className="wrap-wide">
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
        <MailChoice label="nhắn nhà mộc" draft={drafts.nguoiCuaNha()} variant="link" />
      </Reveal>


      <Footer />
    </>
  );
}

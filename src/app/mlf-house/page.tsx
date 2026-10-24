import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { MlfHousePeople } from "@/components/MlfHousePeople";
import { MlfHouseRooms } from "@/components/MlfHouseRooms";
import { MailChoice } from "@/components/MailChoice";
import { MlfHouseInvites } from "@/components/MlfHouseInvites";
import { routes } from "@/lib/nav";
import { closing, drafts, ghiNhan, gopTay, hero, ketNoi } from "@/data/mlfHouse";

export const metadata: Metadata = {
  title: "mlf house",
  description: "những người làm nên mộc: ghi nhận, kết nối và cùng góp tay.",
};

export default function MlfHousePage() {
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

  const gopTayRoom = <MlfHouseInvites />;

  return (
    <>
      <Header />

      {/* hiên nhà */}
      <div className="wrap-wide mh-hero" style={{ paddingTop: "6.5rem", paddingBottom: "1rem", textAlign: "center" }}>
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

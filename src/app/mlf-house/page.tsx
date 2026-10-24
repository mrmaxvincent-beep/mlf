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
import {
  closing,
  drafts,
  ghiNhan,
  gopTay,
  hero,
  ketNoi,
} from "@/data/mlfHouse";

export const metadata: Metadata = {
  title: "mlf house",
  description: "những người làm nên mộc: ghi nhận, kết nối và cùng góp tay.",
};

export default function MlfHousePage() {
  const ghiNhanRoom = (
    <>
      <div className="mh-thanks">
        {ghiNhan.thanks.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
      <MlfHousePeople />
    </>
  );

  const ketNoiRoom = (
    <div className="mhr-cols">
      <div className="mh-col">
        <h2 className="mh-heading">{ketNoi.heading}</h2>
        <div className="mh-open">
          {ketNoi.opening.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        {ketNoi.body.map((para) => (
          <p key={para} className="mh-lead">
            {para}
          </p>
        ))}
        <p className="mh-note mh-caution">{ketNoi.circle}</p>
      </div>
      <aside className="mhr-aside">
        <span className="mh-label">gặp nhau ngoài đời</span>
        <p className="mh-note">{ketNoi.offline}</p>
        <div className="mh-links">
          <Link href={routes.trangYen} className="mono-link">
            trăng-yên
          </Link>
          <i>·</i>
          <Link href={routes.vongTraTam} className="mono-link">
            vòng-trà-tâm
          </Link>
        </div>
      </aside>
    </div>
  );

  const gopTayRoom = (
    <>
      <div className="mh-open mh-open--wide">
        <h2>{gopTay.heading}</h2>
        {gopTay.intro.map((para) => (
          <p key={para} className="mh-lead">
            {para}
          </p>
        ))}
      </div>
      <MlfHouseInvites />
    </>
  );

  return (
    <>
      <Header />

      {/* hiên nhà */}
      <div
        className="wrap-wide mh-hero"
        style={{
          paddingTop: "6.5rem",
          paddingBottom: "1rem",
          textAlign: "center",
        }}
      >
        <Breadcrumb label={hero.title} />
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
            lineHeight: 1.15,
            color: "var(--color-ink)",
            margin: "0 0 0.75rem",
          }}
        >
          {hero.title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "var(--color-ink)",
            margin: "0 0 0.75rem",
          }}
        >
          {hero.tagline}
        </p>
      </div>

      {/* ba gian */}
      <div className="wrap-wide">
        <MlfHouseRooms
          rooms={[
            { id: "ghi-nhan", name: ghiNhan.title, content: ghiNhanRoom },
            { id: "ket-noi", name: ketNoi.title, content: ketNoiRoom },
            { id: "gop-tay", name: gopTay.title, content: gopTayRoom },
          ]}
        />
      </div>

      {/* ngưỡng cửa */}
      <Reveal className="wrap mh-closing">
        <p>{closing}</p>
        <MailChoice
          label="nhắn nhà mộc"
          draft={drafts.nguoiCuaNha()}
          variant="link"
        />
      </Reveal>

      <Footer />
    </>
  );
}

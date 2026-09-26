import Image from "next/image";
import { coreMembers } from "@/data/journalCore";

/** Lời cảm ơn những thành viên nòng cốt của các số journal — avatar tròn + tên, không chức danh. */
export function JournalThanks() {
  return (
    <div>
      <span className="folio" style={{ display: "block", marginBottom: "1.25rem" }}>
        cảm ơn
      </span>
      <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.3rem, 4vw, 1.7rem)", lineHeight: 1.6, color: "var(--color-ink)", margin: "0 0 1rem" }}>
        mỗi số journal là công của nhiều bàn tay.
      </p>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 auto 3rem", maxWidth: "46ch" }}>
        xin cảm ơn những người bạn đã ở lại cùng mộc, làm nòng cốt cho từng quyển — để những trang này đến được với bạn.
      </p>

      <ul className="thanks-grid">
        {coreMembers.map((m) => (
          <li key={m.name} className="thanks-item">
            <span className="thanks-avatar">
              {m.photo ? (
                <Image src={m.photo} alt={m.name} fill sizes="96px" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
              ) : (
                <span aria-hidden className="thanks-initial">
                  {m.name.trim().charAt(0)}
                </span>
              )}
            </span>
            <span className="thanks-name">{m.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

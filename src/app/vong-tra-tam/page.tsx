import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { EnsoAgenda } from "@/components/EnsoAgenda";
import { agenda, gioiThieu, khoiThongTin, luotChiaSe, luotGhiChu, miens, nguyenTac } from "@/data/vongTraTam";

const description = "vòng-trà-tâm là nơi mọi người ngồi lại với tâm mình.";

export const metadata: Metadata = {
  title: "vòng-trà-tâm",
  description,
};

export default function VongTraTamPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem" }}>
        <Breadcrumb label="vòng-trà-tâm" />
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 6vw, 3.4rem)", lineHeight: 1.15, color: "var(--color-ink)", margin: "0 0 0.75rem" }}>
          vòng-trà-tâm
        </h1>
      </div>

      <Reveal className="wrap" style={{ marginTop: "3rem", marginBottom: "6rem", maxWidth: "40rem" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem, 3vw, 1.4rem)", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          vòng-trà-tâm là nơi mọi người ngồi lại với tâm mình.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
          mlf mong muốn mang ngày càng nhiều vòng-trà-tâm đến nhiều nơi, có thể tự vận hành ở mỗi tỉnh, thành phố.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          và chúng tôi đang chuẩn bị cho hành trình đó.
        </p>
      </Reveal>

      <div className="wrap vtt-doc">
        <p className="vtt-summary">miễn phí · 10 người · mỗi tháng một lần · 2 tiếng 30 phút</p>

        <Reveal className="vtt-open">
          <p className="vtt-lead">{gioiThieu}</p>
        </Reveal>

        <div className="vtt-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="34" height="34">
            <path d="M33 14 A14 14 0 1 0 31 28" fill="none" stroke="var(--color-cham)" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
          </svg>
        </div>

        <section className="vtt-move">
          <span className="vtt-step">một · ngồi vào vòng</span>
          {khoiThongTin.map((k) => (
            <Reveal key={k.title} className="vtt-block">
              <h2 className="vtt-h">{k.title}</h2>
              <ul className="vtt-ul">
                {k.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </section>

        <div className="vtt-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="34" height="34">
            <path d="M33 14 A14 14 0 1 0 31 28" fill="none" stroke="var(--color-cham)" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
          </svg>
        </div>

        <section className="vtt-move">
          <span className="vtt-step">hai · chén trà</span>
          <Reveal>
            <EnsoAgenda phases={agenda} />
          </Reveal>
        </section>

        <div className="vtt-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="34" height="34">
            <path d="M33 14 A14 14 0 1 0 31 28" fill="none" stroke="var(--color-cham)" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
          </svg>
        </div>

        <section className="vtt-move">
          <span className="vtt-step">ba · mười lượt</span>
          <Reveal>
            <ol className="vtt-ol">
              {luotChiaSe.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ol>
            <p className="vtt-note">{luotGhiChu}</p>
          </Reveal>
        </section>

        <div className="vtt-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" width="34" height="34">
            <path d="M33 14 A14 14 0 1 0 31 28" fill="none" stroke="var(--color-cham)" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
          </svg>
        </div>

        <Reveal className="vtt-rule">
          <span className="vtt-step">khép vòng</span>
          <p>{nguyenTac}</p>
        </Reveal>
      </div>

      <div className="wrap" style={{ marginBottom: "6rem", maxWidth: "46rem" }}>
        <span className="eyebrow" style={{ display: "block", marginBottom: "0.4rem" }}>
          lịch sinh hoạt
        </span>
        {miens.map((m) => (
          <Reveal key={m.id} className="vtt-mien">
            <h2 className="vtt-mien-name">{m.name}</h2>
            <div className="vtt-table-wrap">
              <table className="vtt-table">
                <thead>
                  <tr>
                    <th>vòng</th>
                    <th>thời gian</th>
                    <th>địa điểm</th>
                    <th>người giữ vòng-trà</th>
                  </tr>
                </thead>
                <tbody>
                  {m.vongs.length ? (
                    m.vongs.map((v) => (
                      <tr key={v.name}>
                        <td className="vtt-vong" data-label="vòng">
                          <span>vòng-trà-tâm</span> {v.name}
                        </td>
                        <td data-label="thời gian">{v.when ?? <em className="vtt-tbd">đang cập nhật</em>}</td>
                        <td data-label="địa điểm">{v.place ?? <em className="vtt-tbd">đang cập nhật</em>}</td>
                        <td data-label="người giữ vòng-trà">{v.host ?? <em className="vtt-tbd">đang cập nhật</em>}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="vtt-empty-row">
                      <td colSpan={4}>lịch đang được cập nhật.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Reveal>
        ))}
      </div>

      <Footer />
    </>
  );
}

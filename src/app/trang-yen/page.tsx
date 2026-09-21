import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { RegistrationLink } from "@/components/RegistrationLink";
import { routes } from "@/lib/nav";
import { chuCuaThang, cungCacBe, ghiChuLich, gop, hero, loiKhep, loiMoi, loiMoiQuote, nhip, registrationUrl, thongTin } from "@/data/trangYen";

export const metadata: Metadata = {
  title: "trăng-yên",
  description: hero.sub,
};

const label: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "var(--color-cham-suong)",
  marginBottom: "1.75rem",
};

const prose: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.95,
  color: "var(--text-on-night)",
  margin: "0 0 1.4rem",
};

export default function TrangYenPage() {
  return (
    <div className="night-page">
      <div className="night-page__bg" aria-hidden />

      <Header />

      {/* MỞ ĐẦU */}
      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "1rem", maxWidth: "46rem" }}>
        <Breadcrumb label="trăng-yên" />

        <Reveal>
          <div className="moon" aria-hidden />
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2.6rem, 8vw, 4.2rem)",
              lineHeight: 1.1,
              color: "var(--text-on-night)",
              margin: "0 0 1.1rem",
            }}
          >
            {hero.title}
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.12em", lineHeight: 1.8, color: "var(--color-cham-suong)", margin: "0 0 2.25rem" }}>
            {hero.sub}
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.15rem, 3.4vw, 1.45rem)", lineHeight: 1.75, color: "var(--text-on-night)", maxWidth: "34ch", margin: 0 }}>
            {hero.lead}
          </p>
        </Reveal>
      </div>

      {/* LỜI MỜI */}
      <Reveal className="wrap" style={{ marginTop: "7rem", maxWidth: "46rem" }}>
        <span style={label}>lời mời</span>
        {loiMoi.map((p, i) => (
          <p key={i} style={prose}>
            {p}
          </p>
        ))}
      </Reveal>

      <Reveal className="wrap night-quote" style={{ marginTop: "5.5rem", maxWidth: "40rem" }}>
        {/* Câu đầu là hình ảnh, câu sau là nghĩa của nó — để câu sau nhạt hơn một bậc,
            như vầng trăng và bóng trăng dưới nước. */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.25rem, 3.8vw, 1.6rem)",
            lineHeight: 1.85,
            color: "var(--text-on-night)",
            margin: "0 0 2.4rem",
          }}
        >
          {loiMoiQuote[0]}
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1.1rem, 3.2vw, 1.35rem)",
            lineHeight: 1.85,
            color: "var(--color-cham-suong)",
            margin: 0,
          }}
        >
          {loiMoiQuote[1]}
        </p>
      </Reveal>

      {/* MỘT TỐI Ở TRĂNG-YÊN */}
      {/* Buổi tối tự mở ra theo tám nhịp. Không kẻ ngang, không viền: mỗi nhịp được
          tách ra bằng khoảng trống, để chỗ này đọc như một chuỗi việc đang diễn ra
          chứ không như bảng lịch trình. */}
      <Reveal className="wrap" style={{ marginTop: "9rem", maxWidth: "46rem" }}>
        <span style={label}>một tối ở trăng-yên</span>
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {nhip.map((n, i) => (
            <li
              key={n.name}
              style={{
                display: "flex",
                gap: "clamp(1rem, 4vw, 2.25rem)",
                alignItems: "baseline",
                marginBottom: i === nhip.length - 1 ? 0 : "clamp(3rem, 8vw, 4.25rem)",
              }}
            >
              <span style={{ flex: "none", width: "1.9rem", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--color-cham-suong)", opacity: 0.7 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ flex: "1 1 auto", minWidth: 0 }}>
                <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.35rem, 3.6vw, 1.6rem)", lineHeight: 1.35, color: "var(--text-on-night)", marginBottom: "0.85rem" }}>
                  {n.name}
                </span>
                <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.95rem", lineHeight: 1.9, color: "var(--color-cham-suong)", maxWidth: "44ch" }}>{n.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* CHỮ CỦA THÁNG NÀY */}
      <Reveal className="wrap" style={{ marginTop: "9rem", maxWidth: "46rem" }}>
        <span style={label}>chữ của tháng</span>
        <p style={{ ...prose, marginBottom: "1.75rem" }}>{chuCuaThang}</p>
        <Link href={routes.tuDienOYen} className="night-link">
          mở từ điển ở-yên <span className="ar">→</span>
        </Link>
      </Reveal>

      {/* GÓP · CÙNG CÁC BÉ */}
      <Reveal className="wrap" style={{ marginTop: "7rem", maxWidth: "46rem" }}>
        <span style={label}>góp</span>
        <p style={{ ...prose, margin: 0 }}>{gop}</p>
      </Reveal>

      {/* Hai ghi chú thực dụng, để sát nhau thành một cụm thay vì hai mục rời */}
      <Reveal className="wrap" style={{ marginTop: "3rem", maxWidth: "46rem" }}>
        <span style={label}>cùng các bé</span>
        <p style={{ ...prose, margin: 0 }}>{cungCacBe}</p>
      </Reveal>

      {/* THÔNG TIN */}
      <Reveal className="wrap" style={{ marginTop: "7rem", maxWidth: "46rem" }}>
        <span style={label}>thông tin</span>
        <dl style={{ margin: "0 0 3rem" }}>
          {thongTin.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: "flex",
                gap: "clamp(1rem, 4vw, 2.25rem)",
                alignItems: "baseline",
                flexWrap: "wrap",
                padding: "1.1rem 0",
                borderTop: i === 0 ? "1px solid var(--border-night)" : "none",
                borderBottom: "1px solid var(--border-night)",
              }}
            >
              <dt style={{ flex: "none", width: "6.5rem", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--color-cham-suong)" }}>{row.label}</dt>
              <dd style={{ flex: "1 1 14rem", minWidth: 0, margin: 0, fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.75, color: "var(--text-on-night)" }}>{row.value}</dd>
            </div>
          ))}
        </dl>

        <div style={{ textAlign: "center" }}>
          {registrationUrl ? (
            <RegistrationLink href={registrationUrl} programName="trang-yen" className="night-btn">
              giữ một chỗ ngồi
            </RegistrationLink>
          ) : (
            <a href="mailto:hello@moclittlefarm.com?subject=gi%E1%BB%AF%20m%E1%BB%99t%20ch%E1%BB%97%20ng%E1%BB%93i%20%C2%B7%20tr%C4%83ng-y%C3%AAn" className="night-btn">
              giữ một chỗ ngồi
            </a>
          )}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-cham-suong)", maxWidth: "36ch", margin: "1.6rem auto 0" }}>
            {ghiChuLich}
          </p>
        </div>
      </Reveal>

      {/* LỜI KHÉP */}
      <Reveal className="wrap" style={{ marginTop: "10rem", marginBottom: "6rem", maxWidth: "42rem" }}>
        <div className="moon moon--waning" aria-hidden />
        {loiKhep.map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1.1rem, 3.2vw, 1.35rem)",
              lineHeight: 1.85,
              color: i === 0 ? "var(--color-cham-suong)" : "var(--text-on-night)",
              textAlign: "center",
              margin: i === 0 ? "0 0 1.5rem" : 0,
            }}
          >
            {line}
          </p>
        ))}
      </Reveal>

      <Footer />
    </div>
  );
}

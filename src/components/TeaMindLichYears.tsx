"use client";

import { useEffect, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { seasons, specs, lichYears, type LichYear } from "@/data/teaMindLich";

const serif = "var(--font-serif)";
const sans = "var(--font-sans)";

function Edition2026() {
  return (
    <>
      <div className="wrap">
        <p style={{ fontFamily: sans, fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 1.5rem" }}>
          bước tới 365 ngày bằng sự có mặt - 12 mùa tâm được vẽ nên như những điểm dừng nhỏ giữa nhịp sống nhiều chuyển động.
        </p>
        <span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--color-stone)", border: "1px solid var(--color-mist)", borderRadius: "var(--radius-sharp)", padding: "0.5rem 0.9rem", marginBottom: "2.5rem" }}>
          hiện bộ lịch 2026 đã kết thúc đặt hàng — hẹn gặp lại 2027
        </span>
      </div>

      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", height: "auto" }}>
        <ImagePlaceholder label="ảnh · bộ lịch chén trà tâm 1" aspectRatio="3/4" src="/assets/teamind_lich01.webp" />
        <ImagePlaceholder label="ảnh · bộ lịch chén trà tâm 2" aspectRatio="3/4" src="/assets/teamind_lich02.webp" />
      </div>

      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "5rem", maxWidth: "56ch" }}>
        <p style={{ fontFamily: sans, fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          Mỗi tháng là một chén trà, một mùa trong tâm, một lời nhắc rất khẽ để quay về với hơi thở và sự sống đang có mặt.
        </p>
        <p style={{ fontFamily: sans, fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          Mỗi khi ánh mắt chạm vào chiếc chén trà, tự nhiên có một khoảng dừng nhẹ trong ngày - mười hai mùa tâm, mười hai nhịp thở, để năm mới đi qua một cách hiền hòa, tĩnh lặng và tròn đầy.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">12 mùa tâm trong 2026</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        {seasons.map((s) => (
          <div key={s.num} className="season-row">
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--color-stone)", flex: "none", width: "1.5rem" }}>{s.num}</span>
            <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: "0.98rem", color: "var(--color-ink)" }}>{s.name}</span>
          </div>
        ))}
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "44ch", textAlign: "center" }}>
        <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          &ldquo;thiên nhiên có bốn mùa, còn trái tim thì có đến mười hai mùa tâm để trở về.&rdquo;
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">thông tin sản phẩm</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        {specs.map((sp) => (
          <div key={sp.k} className="spec-row">
            <span style={{ color: "var(--color-stone-alt)" }}>{sp.k}</span>
            <span style={{ color: "var(--color-ink)", textAlign: "right" }}>{sp.v}</span>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: "1.4rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-stone)" }}>giá</span>
          <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-stone-alt)" }}>150.000đ</span>
        </div>
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "44ch" }}>
        <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          mỗi tháng là một chén trà. mỗi chén trà là một mùa trong tâm. và mỗi mùa trong tâm lại là một bước rất mềm trên con đường trở về với chính mình.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <p style={{ fontFamily: sans, fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          bộ lịch 2026 đã kết thúc đặt hàng - để lại lời nhắn, mộc sẽ báo khi 2027 mở đặt trước.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <a href="http://instagram.com/tea.mind/" target="_blank" rel="noopener" className="cta-btn">
            theo dõi tại ig <span className="ar">→</span>
          </a>
        </div>
      </div>
    </>
  );
}

function ComingSoon({ year }: { year: number }) {
  return (
    <div className="wrap" style={{ marginBottom: "5rem" }}>
      <p style={{ fontFamily: sans, fontSize: "1rem", lineHeight: 1.9, color: "var(--color-ink)", maxWidth: "48ch", margin: "0 0 1.5rem" }}>
        bộ lịch chén trà tâm {year} đang được vẽ. mộc sẽ chia sẻ thêm khi sắp ra mắt.
      </p>
      <span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--color-stone)", border: "1px solid var(--color-mist)", borderRadius: "var(--radius-sharp)", padding: "0.5rem 0.9rem", marginBottom: "2rem" }}>
        sắp ra mắt · {year}
      </span>
      <div>
        <a href="http://instagram.com/tea.mind/" target="_blank" rel="noopener" className="cta-btn">
          theo dõi tại ig <span className="ar">→</span>
        </a>
      </div>
    </div>
  );
}

export function TeaMindLichYears() {
  const [year, setYear] = useState<LichYear>(lichYears[0]);

  useEffect(() => {
    const q = Number(new URLSearchParams(window.location.search).get("nam"));
    if ((lichYears as readonly number[]).includes(q)) setYear(q as LichYear);
  }, []);

  const pick = (y: LichYear) => {
    setYear(y);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("nam", String(y));
      window.history.replaceState(null, "", url);
    } catch {}
  };

  return (
    <>
      <div className="wrap">
        <div className="lnm-years" role="tablist" aria-label="chọn năm" style={{ marginBottom: "1.6rem" }}>
          {lichYears.map((y) => (
            <button key={y} role="tab" aria-selected={y === year} className={y === year ? "active" : ""} onClick={() => pick(y)}>
              {y}
            </button>
          ))}
        </div>
      </div>
      {year === 2026 ? <Edition2026 /> : <ComingSoon year={year} />}
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { seasons, specs, lichYears, type LichYear } from "@/data/teaMindLich";
import { theme2027, motLines, bridge, concept2027, stages2027, featured2027 } from "@/data/teaMindLich2027";

// 2027 giữ nguyên chất liệu, kích thước, giá; chỉ đổi dòng số lượng cho đúng chủ đề.
const specs2027 = specs.map((sp) => (sp.k === "số lượng" ? { ...sp, v: "12 tờ - 12 tháng, 12 lát cắt đời sống" } : sp));

const serif = "var(--font-serif)";
const sans = "var(--font-sans)";

function Theme({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="wrap" style={{ marginBottom: "1.2rem", textAlign: "center" }}>
      <span className="eyebrow">chủ đề</span>
      <h2 style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.5rem, 4.4vw, 2.1rem)", lineHeight: 1.25, color: "var(--color-ink)", margin: "0.3rem 0 0" }}>{title}</h2>
      {sub ? <p style={{ fontFamily: sans, fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0.4rem 0 0" }}>{sub}</p> : null}
    </div>
  );
}

function Edition2026() {
  return (
    <>
      <Theme title="chén trà tâm" />
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

function Edition2027() {
  return (
    <>
      <Theme title={theme2027.title} sub={theme2027.sub} />

      <div className="wrap" style={{ marginBottom: "2rem", textAlign: "center" }}>
        <span style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--color-stone)", border: "1px solid var(--color-mist)", borderRadius: "var(--radius-sharp)", padding: "0.5rem 0.9rem" }}>
          sắp ra mắt · 2027
        </span>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "3.5rem", maxWidth: "48ch" }}>
        <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", margin: 0 }}>
          {concept2027}
        </p>
      </Reveal>

      <Reveal style={{ marginBottom: "4rem" }}>
        <ImagePlaceholder label="ảnh · bộ lịch thực tế (toàn chiều ngang)" aspectRatio="21/9" style={{ width: "100%", height: "auto" }} />
      </Reveal>

      <div className="wrap tm27-mot">
        <Reveal>
          <p className="tm27-lead">{theme2027.lead}</p>
        </Reveal>
        {motLines.map((line) => (
          <Reveal key={line}>
            <p>{line}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="wrap tm27-bridge">
        {bridge.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">mười hai tháng · bốn chặng</span>
      </div>
      <div className="wrap tm27-stages">
        {stages2027.map((st, i) => {
          const m = st.months.find((x) => featured2027.includes(x.num)) ?? st.months[0];
          return (
            <Reveal key={st.name} className="tm27-stage">
              <div className="tm27-stage-head">
                <span>{`chặng 0${i + 1}`}</span>
                <h3>{st.name}</h3>
              </div>
              {st.months.map((mo) => (
                <div key={mo.num} className="tm27-row">
                  <span className="tm27-num">{mo.num}</span>
                  <span className="tm27-title">
                    {mo.title}
                    <i>{mo.en}</i>
                    <em>{mo.reminder}</em>
                  </span>
                  <span className="tm27-theme">{mo.theme}</span>
                </div>
              ))}
              <div className="tm27-pair" style={{ marginTop: "1.6rem" }}>
                <ImagePlaceholder label={`ảnh · tháng ${m.num} · mặt trước`} aspectRatio="3/4" />
                <ImagePlaceholder label={`ảnh · tháng ${m.num} · mặt sau`} aspectRatio="3/4" />
              </div>
              <p className="tm27-cap">
                tháng {m.num} · {m.title}
                <i>{m.en}</i>
              </p>
              <p className="tm27-story">{m.text}</p>
            </Reveal>
          );
        })}
      </div>

      <div className="wrap tm27-pair" style={{ marginBottom: "4rem" }}>
        <ImagePlaceholder label="ảnh · bộ lịch thực tế" aspectRatio="3/4" />
        <ImagePlaceholder label="ảnh · bìa lịch" aspectRatio="3/4" />
      </div>

      <div className="wrap" style={{ marginBottom: "1.2rem" }}>
        <span className="eyebrow">thông tin sản phẩm</span>
      </div>
      <Reveal className="wrap" style={{ marginBottom: "5rem" }}>
        {specs2027.map((sp) => (
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

      <div className="wrap" style={{ marginBottom: "5rem", textAlign: "center" }}>
        <p style={{ fontFamily: sans, fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.5rem" }}>
          bộ lịch 2027 sắp ra mắt - theo dõi tea.mind để biết ngày mở đặt trước.
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
        <div className="lnm-years" role="tablist" aria-label="chọn năm" style={{ marginBottom: "1.6rem", justifyContent: "center" }}>
          {lichYears.map((y) => (
            <button key={y} role="tab" aria-selected={y === year} className={y === year ? "active" : ""} onClick={() => pick(y)}>
              {y}
            </button>
          ))}
        </div>
      </div>
      {year === 2026 ? <Edition2026 /> : <Edition2027 />}
    </>
  );
}

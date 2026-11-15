"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { RegistrationLink } from "@/components/RegistrationLink";
import { fontHand } from "@/lib/fontHand";
import { theme2027, bridge, concept2027, stages2027, look2027, back2027, type Month2027 } from "@/data/teaMindLich2027";

const ORDER_FORM = "https://forms.gle/Mkn4fEbdLGtj1hQD6";
const months: Month2027[] = stages2027.flatMap((st) => st.months);
const noSave = (e: MouseEvent) => e.preventDefault();

type Spec = { k: string; v: string };

/** Ảnh bày bàn của tháng; tháng chưa có ảnh thì hiện một tờ lịch vẽ tạm bằng màu nước của tháng. */
function MonthVisual({ m, small = false }: { m: Month2027; small?: boolean }) {
  const look = look2027[m.num];
  if (look?.card) {
    return (
      <div className="l27-card-scene">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="l27-flat" src={look.card} alt={`tờ lịch tháng ${m.num} · ${m.title}`} loading={small ? "lazy" : "eager"} draggable={false} onContextMenu={noSave} />
      </div>
    );
  }
  if (look?.shot) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="l27-shot"
        src={look.shot}
        alt={`tờ lịch tháng ${m.num} · ${m.title}, bày trên bàn trà`}
        loading={small ? "lazy" : "eager"}
        draggable={false}
        onContextMenu={noSave}
      />
    );
  }
  return (
    <div className="l27-card-scene" aria-hidden="true">
      <div className="l27-card" style={{ "--wash": look?.wash } as CSSProperties}>
        <span className="l27-card-wash" />
        <span className="l27-card-en">{m.en}</span>
        <span className="l27-card-title">{m.title}</span>
        <span className="l27-card-num">{m.num}.</span>
        <span className="l27-card-grid" />
        {!small && <span className="l27-card-note">ảnh tháng {m.num} đang được cập nhật</span>}
      </div>
    </div>
  );
}

function OrderButton({ big = false }: { big?: boolean }) {
  return (
    <RegistrationLink href={ORDER_FORM} programName="tea.mind calendar 2027" className={big ? "l27-order l27-order--big" : "l27-order"}>
      đặt hàng <span aria-hidden="true">→</span>
    </RegistrationLink>
  );
}

export function Lich2027({ specs }: { specs: Spec[] }) {
  const [active, setActive] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const steps = useRef<(HTMLDivElement | null)[]>([]);
  const flipRef = useRef<HTMLElement | null>(null);
  const buyRef = useRef<HTMLElement | null>(null);

  // cả trang (header, phần đầu, footer) dùng chung nền giấy kem của bộ lịch; trả lại nền cũ khi rời bản 2027
  useEffect(() => {
    document.body.classList.add("l27-page");
    return () => document.body.classList.remove("l27-page");
  }, []);

  // tháng nào đang nằm giữa màn hình thì tờ lịch và màu nền đổi theo tháng đó
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    steps.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // thanh "đặt hàng" trên điện thoại: hiện khi đã đi qua phần lật lịch, ẩn khi tới phần đặt hàng
  useEffect(() => {
    let passedFlip = false;
    let atBuy = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === flipRef.current) passedFlip = !e.isIntersecting && e.boundingClientRect.top < 0;
        if (e.target === buyRef.current) atBuy = e.isIntersecting;
      });
      setShowBar(passedFlip && !atBuy);
    });
    if (flipRef.current) io.observe(flipRef.current);
    if (buyRef.current) io.observe(buyRef.current);
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    steps.current[i]?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  };

  const cur = months[active];

  return (
    <div className={`l27 ${fontHand.variable}`}>
      {/* 1 · mở đầu: để bộ lịch tự nói */}
      <section className="l27-hero">
        <div className="l27-hero-img">
          {/* điện thoại dùng ảnh dọc 4:5, máy tính dùng ảnh ngang 2:1 */}
          <picture>
            <source media="(max-width: 760px)" srcSet="/assets/calendar2027_header_mobile.webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/calendar2027_header.webp" alt="bộ lịch tea.mind 2027 trên bàn trà, tờ tháng 06 · một cơn mưa" draggable={false} onContextMenu={noSave} fetchPriority="high" />
          </picture>
        </div>
        <div className="l27-hero-text">
          <span className="l27-kicker">tea.mind calendar · 2027</span>
          <h2 className="l27-hero-title">{theme2027.title}</h2>
          <p className="l27-hero-sub">{theme2027.sub}</p>
          <p className="l27-hero-meta">13 tờ · bìa và 12 điều nhỏ · vẽ tay</p>
          <OrderButton />
        </div>
      </section>

      {/* giới thiệu ngắn ngay dưới ảnh đầu trang */}
      <section className="l27-intro wrap">
        <p>{concept2027}</p>
      </section>

      {/* 2 · lật lịch: kéo xuống đến đâu, năm trôi qua đến đó */}
      <section className="l27-flip" ref={flipRef} style={{ "--tint": look2027[cur.num]?.tint } as CSSProperties} aria-label="mười hai tháng của bộ lịch">
        <div className="l27-flip-inner">
          <div className="l27-stage">
            <div className="l27-frame">
              {months.map((m, i) => (
                <div key={m.num} className={`l27-layer${i === active ? " is-on" : ""}`} aria-hidden={i !== active}>
                  <MonthVisual m={m} />
                </div>
              ))}
            </div>
            <div className="l27-ticks" aria-hidden="true">
              {months.map((m, i) => (
                <span key={m.num} className={i === active ? "is-on" : ""} />
              ))}
            </div>
          </div>

          <div className="l27-steps">
            {months.map((m, i) => (
              <div key={m.num} className="l27-step" data-i={i} ref={(el) => { steps.current[i] = el; }}>
                <span className="l27-step-num">{m.num}.</span>
                <h3 className="l27-step-title">{m.title}</h3>
                <span className="l27-step-en">{m.en}</span>
                <p className="l27-step-rem">{m.reminder}</p>
                <p className="l27-step-text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · cả năm trong một khung */}
      <section className="l27-wall wrap-wide">
        <span className="l27-label">một năm, mười hai điều nhỏ</span>
        <div className="l27-wall-grid">
          {months.map((m, i) => (
            <button key={m.num} type="button" className="l27-tile" onClick={() => goTo(i)} aria-label={`xem tháng ${m.num} · ${m.title}`}>
              <span className="l27-tile-img" style={{ background: look2027[m.num]?.tint }}>
                <MonthVisual m={m} small />
              </span>
              <span className="l27-tile-cap">
                <b>{m.num}</b> {m.title}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 4 · mặt sau mỗi tờ lịch */}
      <section className="l27-back wrap-wide">
        <div className="l27-back-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="l27-back-shot" src="/assets/calendar2027_back.webp" alt="mặt sau tờ lịch tháng 09: lịch âm, thông điệp và chỗ ghi chú" width={520} height={733} loading="lazy" draggable={false} onContextMenu={noSave} />
        </div>
        <div className="l27-back-text">
          <span className="l27-label">lật ra mặt sau</span>
          <h3 className="l27-h3">từng tờ lịch có hai mặt</h3>
          <p className="l27-p">mặt trước là tranh và lịch dương. mặt sau dành cho những điều chậm hơn:</p>
          <dl className="l27-back-list">
            {back2027.map((b) => (
              <div key={b.k}>
                <dt>{b.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 5 · ý nghĩa bộ lịch */}
      <section className="l27-story wrap">
        <Reveal>
          <p className="l27-lead">{theme2027.lead}</p>
        </Reveal>
        <Reveal className="l27-story-body">
          {bridge.map((p) => (
            <p key={p} className="l27-p">{p}</p>
          ))}
        </Reveal>
      </section>

      <section className="l27-stages wrap-wide" aria-label="bốn chặng của năm">
        {stages2027.map((st, i) => (
          <Reveal key={st.name} className="l27-chapter" style={{ "--wash": look2027[st.months[0].num]?.wash } as CSSProperties}>
            <span className="l27-chapter-num">chặng 0{i + 1}</span>
            <h3 className="l27-chapter-name">{st.name}</h3>
            <ul>
              {st.months.map((m) => (
                <li key={m.num}>
                  <b>{m.num}</b> {m.title}
                  <i>{m.reminder}</i>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      {/* 6 · cầm trên tay */}
      <section className="l27-buy wrap" ref={buyRef}>
        <span className="l27-label">cầm trên tay</span>
        <div className="l27-specs">
          {specs.map((sp) => (
            <div key={sp.k} className="l27-spec">
              <span>{sp.k}</span>
              <span>{sp.v}</span>
            </div>
          ))}
        </div>
        <p className="l27-price">150.000đ</p>
        <OrderButton big />
        <a className="l27-ig" href="http://instagram.com/tea.mind/" target="_blank" rel="noopener">
          theo dõi tea.mind trên instagram →
        </a>
      </section>

      <div className={`l27-bar${showBar ? " is-on" : ""}`} aria-hidden={!showBar}>
        <span>lịch tea.mind 2027 · 150.000đ</span>
        <RegistrationLink href={ORDER_FORM} programName="tea.mind calendar 2027" className="l27-order">
          đặt hàng
        </RegistrationLink>
      </div>
    </div>
  );
}

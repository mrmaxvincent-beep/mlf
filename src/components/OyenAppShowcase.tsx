"use client";

import { useEffect, useRef, useState } from "react";

export type AppTab = {
  name: string;
  line: string;
  desc: string;
  /** Các ảnh chụp màn hình thật của tab (đường dẫn trong /public), lần lượt hiện theo thứ tự. Chưa có thì hiện khung minh hoạ. */
  shots?: string[];
};

/**
 * Giới thiệu web app ở-yên: khung điện thoại bên trái, sáu tab bên phải.
 * Bấm một tab thì màn hình điện thoại đổi theo; nếu không ai bấm thì tự chuyển nhẹ nhàng.
 */
export function OyenAppShowcase({ tabs }: { tabs: AppTab[] }) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const touched = useRef(false);
  const cur = useRef({ i: 0, j: 0 });
  cur.current = { i, j };

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      const { i: a, j: b } = cur.current;
      const len = tabs[a].shots?.length ?? 1;
      if (len > 1 && (touched.current || b + 1 < len)) setJ((b + 1) % len);
      else if (!touched.current) {
        setI((a + 1) % tabs.length);
        setJ(0);
      }
    }, 4200);
    return () => window.clearInterval(id);
  }, [tabs]);

  const t = tabs[i];
  const shot = t.shots?.[j] ?? t.shots?.[0];

  return (
    <div className="oya">
      <div className="oya-stage">
      <div
        className="oya-phone"
        aria-hidden="true"
        onClick={() => {
          const len = t.shots?.length ?? 1;
          if (len > 1) {
            touched.current = true;
            setJ((j + 1) % len);
          }
        }}
        style={(t.shots?.length ?? 0) > 1 ? { cursor: "pointer" } : undefined}
      >
        <div className="oya-notch" />
        <div className={`oya-screen${shot ? " has-shot" : ""}`}>
          <div className="oya-top">ở-yên</div>
          {shot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="oya-shot" src={shot} alt="" width={364} height={788} key={shot} />
          ) : (
            <div className="oya-body" key={t.name}>
              <span className="oya-tag">{t.name}</span>
              <span className="oya-line">{t.line}</span>
              <span className="oya-skel" style={{ width: "88%" }} />
              <span className="oya-skel" style={{ width: "72%" }} />
              <span className="oya-skel" style={{ width: "80%" }} />
              <span className="oya-card" />
            </div>
          )}
          <div className="oya-bar">
            {tabs.map((x, k) => (
              <span key={x.name} className={`oya-dot${k === i ? " on" : ""}`}>
                <i />
                <b>{x.name}</b>
              </span>
            ))}
          </div>
        </div>
      </div>
      {(t.shots?.length ?? 0) > 1 && (
        <div className="oya-subdots" role="tablist" aria-label={`các màn hình của tab ${t.name}`}>
          {t.shots!.map((_, k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={k === j}
              aria-label={`màn hình ${k + 1}`}
              className={k === j ? "on" : ""}
              onClick={() => {
                touched.current = true;
                setJ(k);
              }}
            />
          ))}
        </div>
      )}
      </div>

      <ul className="oya-tabs" role="tablist" aria-label="sáu tab của web app ở-yên">
        {tabs.map((x, k) => (
          <li key={x.name}>
            <button
              type="button"
              role="tab"
              aria-selected={k === i}
              className={`oya-tab${k === i ? " on" : ""}`}
              onClick={() => {
                touched.current = true;
                setI(k);
                setJ(0);
              }}
            >
              <span className="oya-tab-n">0{k + 1}</span>
              <span className="oya-tab-t">
                <b>{x.name}</b>
                <em>{x.line}</em>
              </span>
              <span className="oya-tab-d">{x.desc}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

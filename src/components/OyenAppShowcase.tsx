"use client";

import { useEffect, useRef, useState } from "react";

export type AppTab = {
  name: string;
  line: string;
  desc: string;
  /** Ảnh chụp màn hình thật của tab (đường dẫn trong /public). Chưa có thì hiện khung minh hoạ. */
  shot?: string;
};

/**
 * Giới thiệu web app ở-yên: khung điện thoại bên trái, sáu tab bên phải.
 * Bấm một tab thì màn hình điện thoại đổi theo; nếu không ai bấm thì tự chuyển nhẹ nhàng.
 */
export function OyenAppShowcase({ tabs }: { tabs: AppTab[] }) {
  const [i, setI] = useState(0);
  const touched = useRef(false);

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      if (!touched.current) setI((n) => (n + 1) % tabs.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [tabs.length]);

  const t = tabs[i];

  return (
    <div className="oya">
      <div className="oya-phone" aria-hidden="true">
        <div className="oya-notch" />
        <div className="oya-screen">
          <div className="oya-top">ở-yên</div>
          {t.shot ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="oya-shot" src={t.shot} alt="" />
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

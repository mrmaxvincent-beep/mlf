"use client";

import { useState } from "react";
import type { Message } from "@/data/loiNhacOYen";
import { DownloadIcon, LoiNhacGallery, ShareIcon, WallpaperCard, share } from "@/components/LoiNhacGallery";

/** Xấp thẻ úp: chạm để lật ra một lời nhắc ngẫu nhiên cho hôm nay; lưới đầy đủ mở bằng "xem tất cả". */
export function LoiNhacDraw({ messages }: { messages: Message[] }) {
  const [drawn, setDrawn] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [showAll, setShowAll] = useState(false);

  function draw() {
    let next = Math.floor(Math.random() * messages.length);
    if (messages.length > 1 && next === drawn) next = (next + 1) % messages.length;
    if (flipped) {
      setFlipped(false);
      setTimeout(() => {
        setDrawn(next);
        setFlipped(true);
      }, 450);
    } else {
      setDrawn(next);
      requestAnimationFrame(() => setFlipped(true));
    }
  }

  const current = drawn !== null ? messages[drawn] : null;

  return (
    <div>
      <div className="lnd">
        <span className="lnd-eyebrow">{flipped ? "lời nhắc cho hôm nay" : "hít một hơi, rồi rút một lá"}</span>

        <div className="lnd-deck">
          <div className="lnd-back lnd-back--3" aria-hidden="true" />
          <div className="lnd-back lnd-back--2" aria-hidden="true" />
          <button className={`lnd-card${flipped ? " flipped" : ""}`} onClick={flipped ? undefined : draw} aria-label={flipped ? current?.text : "rút một lời nhắc"} disabled={flipped}>
            <span className="lnd-face lnd-face--back">
              <span className="lnd-mark">ở-yên</span>
            </span>
            <span className="lnd-face lnd-face--front">
              {current && drawn !== null ? <WallpaperCard message={current} index={drawn} fontSize="1.3rem" /> : null}
            </span>
          </button>

          {flipped && current ? (
            <div className="wallpaper-feature__corner lnd-actions">
              <button className="wallpaper-icon-btn" onClick={() => share(current)} aria-label="chia sẻ">
                <ShareIcon />
              </button>
              {current.src ? (
                <a href={current.src} download className="wallpaper-icon-btn" aria-label="tải hình nền">
                  <DownloadIcon />
                </a>
              ) : (
                <span className="wallpaper-icon-btn wallpaper-icon-btn--disabled" title="ảnh đang cập nhật" aria-label="ảnh đang cập nhật">
                  <DownloadIcon />
                </span>
              )}
            </div>
          ) : null}
        </div>

        <div className="lnd-links">
          {flipped ? (
            <button className="note-nav-btn" onClick={draw}>
              rút lá khác ↻
            </button>
          ) : (
            <button className="note-nav-btn" onClick={draw}>
              chạm để rút một lời nhắc
            </button>
          )}
          <button className="note-nav-btn" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "thu gọn" : `xem tất cả ${messages.length} lời nhắc`}
          </button>
        </div>
      </div>

      {showAll ? (
        <div style={{ marginTop: "3.5rem" }}>
          <LoiNhacGallery messages={messages} />
        </div>
      ) : null}
    </div>
  );
}

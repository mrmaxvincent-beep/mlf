"use client";

import { useState } from "react";
import Image from "next/image";
import type { Message } from "@/data/loiNhacOYen";

const cardGradients = [
  "linear-gradient(160deg, #f4efe9 0%, #e4dcd2 100%)",
  "linear-gradient(160deg, #efe8e2 0%, #d9cfc2 100%)",
  "linear-gradient(160deg, #f1ece5 0%, #ddd3c6 100%)",
];

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5v9" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4.5 7L8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 13.5h12" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle cx="12.5" cy="3.5" r="1.6" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="3.5" cy="8" r="1.6" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12.5" cy="12.5" r="1.6" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4.9 7.1L11.1 4.1M4.9 8.9L11.1 11.9" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

/** Card wallpaper: dùng ảnh thật nếu có `src`, ngược lại dựng thẻ chữ bằng CSS thay ảnh. */
function WallpaperCard({ message, index }: { message: Message; index: number }) {
  if (message.src) {
    return <Image src={message.src} alt={message.text} fill sizes="(max-width: 640px) 45vw, 20vw" style={{ objectFit: "cover" }} />;
  }
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: cardGradients[index % cardGradients.length],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.6rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "var(--color-ink)",
          textAlign: "center",
          margin: 0,
        }}
      >
        {message.text}
      </p>
    </div>
  );
}

async function share(message: Message) {
  const shareData = { title: "lời nhắc ở-yên", text: message.text, url: typeof window !== "undefined" ? window.location.href : undefined };
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share(shareData);
    } catch {
      /* người dùng huỷ chia sẻ */
    }
  } else if (typeof navigator !== "undefined" && navigator.clipboard) {
    await navigator.clipboard.writeText(`${message.text} — ${shareData.url ?? ""}`);
  }
}

export function LoiNhacGallery({ messages }: { messages: Message[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const openMessage = messages.find((m) => m.id === openId) ?? null;
  const openIndex = openMessage ? messages.indexOf(openMessage) : -1;

  return (
    <>
      <div className="wallpaper-grid">
        {messages.map((m, i) => (
          <button key={m.id} className="wallpaper-card" onClick={() => setOpenId(m.id)} aria-label={`xem lời nhắc: ${m.text}`}>
            <WallpaperCard message={m} index={i} />
            <div className="wallpaper-card__overlay">
              <span
                role="button"
                tabIndex={0}
                className="wallpaper-icon-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  share(m);
                }}
                aria-label="chia sẻ"
              >
                <ShareIcon />
              </span>
              {m.src ? (
                <a
                  href={m.src}
                  download
                  className="wallpaper-icon-btn"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="tải hình nền"
                >
                  <DownloadIcon />
                </a>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      {openMessage ? (
        <div className="wallpaper-lightbox" onClick={() => setOpenId(null)}>
          <div className="wallpaper-lightbox__card" onClick={(e) => e.stopPropagation()}>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <WallpaperCard message={openMessage} index={openIndex} />
            </div>
          </div>

          <button className="wallpaper-lightbox__close" onClick={() => setOpenId(null)} aria-label="đóng">
            ✕
          </button>

          <div className="wallpaper-lightbox__actions">
            {openMessage.src ? (
              <a href={openMessage.src} download className="cta-btn cta-btn--solid">
                tải hình nền <DownloadIcon />
              </a>
            ) : (
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                ảnh đang cập nhật
              </span>
            )}
            <button
              className="cta-btn"
              onClick={() => share(openMessage)}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.4)", color: "#fff" }}
            >
              chia sẻ <ShareIcon />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

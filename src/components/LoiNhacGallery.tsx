"use client";

import { useState } from "react";
import Image from "next/image";
import type { Message } from "@/data/loiNhacOYen";

const cardGradients = [
  "linear-gradient(160deg, #f4efe9 0%, #e4dcd2 100%)",
  "linear-gradient(160deg, #efe8e2 0%, #d9cfc2 100%)",
  "linear-gradient(160deg, #f1ece5 0%, #ddd3c6 100%)",
];

export function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5v9" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4.5 7L8 10.5L11.5 7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 13.5h12" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function ShareIcon() {
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
export function WallpaperCard({ message, index, fontSize = "1.05rem" }: { message: Message; index: number; fontSize?: string }) {
  if (message.src) {
    return <Image src={message.src} alt={message.text} fill sizes="(max-width: 640px) 90vw, 420px" style={{ objectFit: "cover" }} />;
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
          fontSize,
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

export async function share(message: Message) {
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

/** 1 ảnh lớn đang chọn ở trên, dải thumbnail để chuyển bên dưới — vào là thấy ngay, không cần mở lightbox. */
export function LoiNhacGallery({ messages }: { messages: Message[] }) {
  const [active, setActive] = useState(0);
  const current = messages[active];

  return (
    <div className="wallpaper-feature">
      <div className="wallpaper-feature__stage">
        <div className="wallpaper-feature__card">
          <WallpaperCard message={current} index={active} fontSize="1.3rem" />

          <div className="wallpaper-feature__corner">
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
        </div>
      </div>

      <div className="wallpaper-thumbs">
        {messages.map((m, i) => (
          <button
            key={m.id}
            className={`wallpaper-thumb${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`xem lời nhắc: ${m.text}`}
            aria-current={i === active}
          >
            <WallpaperCard message={m} index={i} fontSize="0.62rem" />
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { ISSUE_02_RELEASE, remainingParts, type Remaining } from "@/lib/countdown";

const bigStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontStyle: "italic",
  fontWeight: 300,
  lineHeight: 1,
  color: "var(--color-ink)",
  margin: 0,
};

const captionStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.66rem",
  letterSpacing: "0.12em",
  color: "var(--color-stone)",
  margin: 0,
};

/** Đếm ngược tới lúc quyển 02 ra mắt. Site là static export nên mốc "bây giờ" chỉ tính được sau khi mount
 *  (tính lúc build sẽ đông cứng lại ở giờ build); khung giữ sẵn chiều cao để trang không nhảy khi số hiện ra. */
export function JournalCountdown() {
  const [now, setNow] = useState<number | null>(null);
  // Góc cộng dồn (không đưa về 0 khi đủ vòng) để chấm luôn đi thuận chiều; giữ số nhỏ vì số góc quá lớn làm trình duyệt mất chính xác.
  const angle = useRef(0);

  // Cập nhật đúng lúc đổi giây để chấm chạy vòng cùng nhịp giây thật; số hiển thị vẫn chỉ đổi khi đủ ngày/phút.
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      const t = Date.now();
      const target = (Math.floor(t / 1000) % 60) * 6;
      angle.current += (target - (angle.current % 360) + 360) % 360;
      setNow(t);
      id = setTimeout(tick, 1000 - (t % 1000) + 20);
    };
    tick();
    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{ minHeight: RING, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.85rem" }}>
      {now !== null ? <Content remaining={remainingParts(ISSUE_02_RELEASE.getTime() - now)} angle={angle.current} /> : null}
    </div>
  );
}

const RING = "clamp(15rem, 74vw, 18.5rem)";

/** Vòng tròn mảnh bọc cả cụm đếm; một chấm chạy quanh mép như kim giây, mỗi giây tiến 6° (đủ vòng sau 60 giây).
 *  Góc chỉ tăng nên luôn đi thuận chiều, không quay ngược khi qua giây 59 → 0. */
function Ring({ angle, children }: { angle: number; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        width: RING,
        height: RING,
        borderRadius: "50%",
        border: "1px solid color-mix(in srgb, var(--color-stone) 45%, transparent)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.85rem",
        textAlign: "center",
        padding: "0 1.25rem",
        boxSizing: "border-box",
      }}
    >
      <span className="cd-hand" aria-hidden style={{ transform: `rotate(${angle}deg)` }}>
        <span className="cd-dot" />
      </span>
      {children}
    </div>
  );
}

function Content({ remaining, angle }: { remaining: Remaining; angle: number }) {
  if (remaining.mode === "released") {
    return <p style={{ ...bigStyle, fontSize: "clamp(1.6rem, 5vw, 2.4rem)" }}>quyển 02 đã ra mắt</p>;
  }

  const bigText =
    remaining.mode === "days" ? (
      <>{remaining.days}</>
    ) : remaining.mode === "hours" ? (
      <>
        {remaining.hours} giờ {remaining.minutes} phút
      </>
    ) : (
      <>{remaining.minutes} phút</>
    );

  return (
    <Ring angle={angle}>
      <p style={{ ...bigStyle, fontSize: remaining.mode === "days" ? "clamp(3.2rem, 9vw, 5rem)" : "clamp(1.4rem, 5vw, 2rem)" }}>{bigText}</p>
      <p style={captionStyle}>{remaining.mode === "days" ? "ngày nữa, quyển 02 ra mắt" : "nữa, quyển 02 ra mắt"}</p>
      <p style={{ ...captionStyle, fontSize: "0.6rem", opacity: 0.75 }}>18:00 · 05/02/2027</p>
    </Ring>
  );
}

"use client";

import { useEffect, useState } from "react";
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

  // Cập nhật đúng lúc đổi phút (không đếm giây), để chấm trên đồng hồ nhích cùng nhịp phút thật.
  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    const tick = () => {
      const t = Date.now();
      setNow(t);
      id = setTimeout(tick, 60_000 - (t % 60_000) + 50);
    };
    tick();
    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{ minHeight: "6.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.85rem" }}>
      {now !== null ? <Content remaining={remainingParts(ISSUE_02_RELEASE.getTime() - now)} minuteIndex={Math.floor(now / 60_000)} /> : null}
    </div>
  );
}

/** Vòng tròn mảnh + một chấm chạy quanh mép như kim phút: mỗi phút tiến 6°. Góc tính từ số phút tuyệt đối
 *  (chỉ tăng) nên chuyển động luôn đi thuận chiều, không quay ngược khi qua phút 59 → 0. */
function MinuteDot({ minuteIndex }: { minuteIndex: number }) {
  return (
    <span
      aria-hidden
      style={{ position: "absolute", right: "calc(100% + 1.1rem)", top: "50%", width: "1.35rem", height: "1.35rem", marginTop: "-0.675rem", display: "block" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" style={{ display: "block", overflow: "visible" }}>
        <circle cx="10" cy="10" r="9" stroke="var(--color-stone)" strokeWidth="0.8" opacity="0.55" />
      </svg>
      <span className="cd-hand" style={{ transform: `rotate(${minuteIndex * 6}deg)` }}>
        <span className="cd-dot" />
      </span>
    </span>
  );
}

function Content({ remaining, minuteIndex }: { remaining: Remaining; minuteIndex: number }) {
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
    <>
      <p style={{ ...bigStyle, position: "relative", fontSize: remaining.mode === "days" ? "clamp(3.2rem, 9vw, 5rem)" : "clamp(2rem, 6vw, 3.2rem)" }}>
        <MinuteDot minuteIndex={minuteIndex} />
        {bigText}
      </p>
      <p style={captionStyle}>{remaining.mode === "days" ? "ngày nữa, quyển 02 ra mắt" : "nữa, quyển 02 ra mắt"}</p>
      <p style={{ ...captionStyle, fontSize: "0.6rem", opacity: 0.75 }}>18:00 · 05/02/2027</p>
    </>
  );
}

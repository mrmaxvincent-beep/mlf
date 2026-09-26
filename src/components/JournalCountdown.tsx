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
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(remainingParts(ISSUE_02_RELEASE.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ minHeight: "6.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.85rem" }}>
      {remaining ? <Content remaining={remaining} /> : null}
    </div>
  );
}

function Content({ remaining }: { remaining: Remaining }) {
  if (remaining.mode === "released") {
    return <p style={{ ...bigStyle, fontSize: "clamp(1.6rem, 5vw, 2.4rem)" }}>quyển 02 đã ra mắt</p>;
  }

  const big =
    remaining.mode === "days" ? (
      <p style={{ ...bigStyle, fontSize: "clamp(3.2rem, 9vw, 5rem)" }}>{remaining.days}</p>
    ) : remaining.mode === "hours" ? (
      <p style={{ ...bigStyle, fontSize: "clamp(2rem, 6vw, 3.2rem)" }}>
        {remaining.hours} giờ {remaining.minutes} phút
      </p>
    ) : (
      <p style={{ ...bigStyle, fontSize: "clamp(2rem, 6vw, 3.2rem)" }}>{remaining.minutes} phút</p>
    );

  return (
    <>
      {big}
      <p style={captionStyle}>{remaining.mode === "days" ? "ngày nữa, quyển 02 ra mắt" : "nữa, quyển 02 ra mắt"}</p>
      <p style={{ ...captionStyle, fontSize: "0.6rem", opacity: 0.75 }}>18:00 · 05/02/2027</p>
    </>
  );
}

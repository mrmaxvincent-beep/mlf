"use client";

import { useState } from "react";

/** cta-btn that reveals a status message on click instead of navigating anywhere. */
export function RevealStatusButton({ label, revealText, className = "cta-btn" }: { label: string; revealText: string; className?: string }) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return <span className={className}>{revealText}</span>;
  }

  return (
    <button onClick={() => setRevealed(true)} className={className} style={{ cursor: "pointer" }}>
      {label} <span className="ar">→</span>
    </button>
  );
}

"use client";

import { useState } from "react";

/** cta-btn that reveals a plain-text email address on click instead of opening mailto. */
export function RevealEmailButton({ email, label, className = "cta-btn" }: { email: string; label: string; className?: string }) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return <span className={className}>{email}</span>;
  }

  return (
    <button onClick={() => setRevealed(true)} className={className} style={{ cursor: "pointer" }}>
      {label}
    </button>
  );
}

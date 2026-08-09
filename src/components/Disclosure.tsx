"use client";

import { useState, type CSSProperties, type ReactNode } from "react";

/** Single collapsible row: trigger + chevron, toggles independently. Used for FAQ rows and one-off expandable blocks. */
export function Disclosure({
  trigger,
  triggerStyle,
  children,
  border = true,
}: {
  trigger: ReactNode;
  triggerStyle?: CSSProperties;
  children: ReactNode;
  border?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: border ? "1px solid var(--color-mist)" : undefined }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "1rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "1rem 0",
          textAlign: "left",
          ...triggerStyle,
        }}
      >
        {trigger}
        <span
          style={{
            fontSize: "0.7rem",
            flexShrink: 0,
            display: "inline-block",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform .2s var(--ease-standard)",
            color: "var(--color-stone)",
          }}
        >
          ▾
        </span>
      </button>
      {open ? <div style={{ paddingBottom: border ? "1.2rem" : 0 }}>{children}</div> : null}
    </div>
  );
}

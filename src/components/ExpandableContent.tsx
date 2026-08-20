"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

interface ExpandableContentProps {
  title: string;
  subtitle?: string;
  content: string;
}

export function ExpandableContent({ title, subtitle, content }: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Reveal>
      <div style={{ borderTop: "1px solid var(--color-mist)", paddingTop: "1.5rem" }}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            width: "100%",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--color-ink)",
                margin: "0 0 0.25rem",
              }}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--color-stone-alt)",
                  margin: 0,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
          <span
            style={{
              fontSize: "0.7rem",
              flexShrink: 0,
              display: "inline-block",
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform .2s var(--ease-standard)",
              color: "var(--color-stone)",
            }}
          >
            ▾
          </span>
        </button>

        {isExpanded && (
          <div
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "var(--color-ink)",
              whiteSpace: "pre-wrap",
            }}
          >
            {content}
          </div>
        )}
      </div>
    </Reveal>
  );
}

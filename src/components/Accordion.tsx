import type { ReactNode } from "react";

/** Native <details> collapsible with the system's eyebrow + "+" rotating to "×" affordance. */
export function Accordion({ label, children }: { label: string; children: ReactNode }) {
  return (
    <details>
      <summary className="acc-summary">
        <span className="eyebrow" style={{ marginBottom: 0 }}>
          {label}
        </span>
        <span className="acc-icon">+</span>
      </summary>
      <div style={{ paddingTop: "2rem" }}>{children}</div>
    </details>
  );
}

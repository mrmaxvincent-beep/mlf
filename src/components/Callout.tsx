/** Centered pull-quote block with a closing line — used to punctuate long-form pages. */
export function Callout({ rule, closing }: { rule: string; closing: string }) {
  return (
    <div style={{ textAlign: "center", padding: "2.5rem 1.5rem", border: "1px solid var(--color-mist)" }}>
      <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
        {rule}
      </p>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.04em", lineHeight: 1.7, color: "var(--color-stone)", margin: 0 }}>
        {closing}
      </p>
    </div>
  );
}

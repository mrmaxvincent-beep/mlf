/** The one bordered panel in the design system (README: pricing panel gets a ≤4px-radius border). */
export function PricingPanel({
  label,
  subtitle,
  price,
  items,
  ctaLabel,
  ctaHref,
}: {
  label: string;
  subtitle: string;
  price: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="pricing-panel">
      <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-ink)", marginBottom: "0.3rem" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-stone)", marginBottom: "1.2rem" }}>{subtitle}</span>
      <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", color: "var(--color-moss)", marginBottom: "1.2rem" }}>{price}</span>
      <div style={{ marginBottom: "1.5rem", flex: 1 }}>
        {items.map((item) => (
          <div key={item} style={{ display: "flex", gap: "0.6rem", padding: "0.4rem 0", fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.6, color: "var(--color-ink)" }}>
            <span style={{ color: "var(--color-moss)", flexShrink: 0 }}>·</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <a href={ctaHref} target="_blank" rel="noopener" className="cta-btn" style={{ justifyContent: "center" }}>
        {ctaLabel} <span className="ar">→</span>
      </a>
    </div>
  );
}

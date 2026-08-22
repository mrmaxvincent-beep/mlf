import { RegistrationLink } from "./RegistrationLink";

/** The one bordered panel in the design system (README: pricing panel gets a ≤4px-radius border). */
export function PricingPanel({
  label,
  subtitle,
  price,
  items,
  note,
  ctaLabel,
  ctaHref,
}: {
  label: string;
  subtitle: string;
  price: string;
  items: string[];
  note?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="pricing-panel">
      <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-ink)", marginBottom: "0.3rem" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-stone)", marginBottom: "1.2rem" }}>{subtitle}</span>
      <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", color: "var(--color-cham-dem)", marginBottom: "1.2rem" }}>{price}</span>
      <div style={{ marginBottom: "1.5rem", flex: 1 }}>
        {items.map((item) => (
          <div key={item} style={{ display: "flex", gap: "0.6rem", padding: "0.4rem 0", fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.6, color: "var(--color-ink)" }}>
            <span style={{ color: "var(--color-moss)", flexShrink: 0 }}>·</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
      <RegistrationLink href={ctaHref} programName={label} className="cta-btn" style={{ justifyContent: "center" }}>
        {ctaLabel} <span className="ar">→</span>
      </RegistrationLink>
      {note ? (
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", lineHeight: 1.7, color: "var(--color-stone-alt)", margin: "1.1rem 0 0" }}>{note}</p>
      ) : null}
    </div>
  );
}

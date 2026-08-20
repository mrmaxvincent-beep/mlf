import Link from "next/link";
import type { ReactNode } from "react";

/** The system's one button shape: square-ish corners (2px), hairline border, ink→moss fill on hover. No pill, no shadow, no scale/press. */
export function Button({
  href,
  children,
  variant = "outline",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const className = variant === "outline" ? "cta-btn cta-btn--outline" : "cta-btn";

  if (isExternal) {
    return (
      <a href={href} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** The "→" arrow link used throughout for internal navigation — arrow slides 3px right on hover. */
export function ArrowLink({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Link href={href} className="go arrow-link">
      {eyebrow ? <span className="arrow-link__eyebrow">{eyebrow}</span> : null}
      <span className="arrow-link__title-row">
        <span className="nm arrow-link__title">{title}</span>
        <span className="ar arrow-link__arrow">→</span>
      </span>
      {description ? <span className="arrow-link__desc">{description}</span> : null}
    </Link>
  );
}

import Image from "next/image";
import { ScrollExtras } from "@/components/ScrollExtras";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  return (
    <footer className="wrap" style={{ padding: "2.5rem 1.5rem 2rem", textAlign: "center", borderTop: "1px solid var(--color-mist)" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
        <a className="mono-link" href="tel:0932037803" style={footerLinkStyle}>
          093 203 7803
        </a>
        <a className="mono-link" href="mailto:hello@moclittlefarm.com" style={footerLinkStyle}>
          hello@moclittlefarm.com
        </a>
        <a
          className="mono-link"
          href="https://www.instagram.com/moclittlefarm/"
          target="_blank"
          rel="noopener"
          aria-label="instagram"
          style={{ ...footerLinkStyle, display: "inline-flex", alignItems: "center" }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
          </svg>
        </a>
        <a
          className="mono-link"
          href="https://www.facebook.com/moc.community"
          target="_blank"
          rel="noopener"
          aria-label="fanpage"
          style={{ ...footerLinkStyle, display: "inline-flex", alignItems: "center" }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15.5 8.5h-2a1 1 0 0 0-1 1V12h3l-.4 3h-2.6v7h-3v-7H8v-3h2.5V9.2C10.5 6.9 12 5 14.6 5h1.9v3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <NewsletterForm />

      <span style={{ position: "relative", width: 52.5, height: 66, display: "block", margin: "0 auto", opacity: 0.8 }}>
        <Image src="/assets/wordmark-o-yen.webp" alt="ở-yên" fill sizes="53px" style={{ objectFit: "contain" }} />
      </span>

      <ScrollExtras />
    </footer>
  );
}

const footerLinkStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.66rem",
  fontWeight: 400,
  letterSpacing: "0.06em",
  color: "var(--color-ink)",
};

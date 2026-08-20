import Image from "next/image";
import { ScrollExtras } from "@/components/ScrollExtras";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="wrap" style={{ padding: "2.5rem 1.5rem 2rem", textAlign: "center", borderTop: "1px solid var(--color-mist)" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
        <a className="mono-link" href="tel:0932037803" style={footerLinkStyle}>
          093 203 7803
        </a>
        <a className="mono-link" href="mailto:hello@moclittlefarm.com" style={footerLinkStyle}>
          hello@moclittlefarm.com
        </a>
        <a className="mono-link" href="https://www.instagram.com/moclittlefarm/" target="_blank" rel="noopener" style={footerLinkStyle}>
          instagram
        </a>
        <a className="mono-link" href="https://www.facebook.com/MLFMangden/" target="_blank" rel="noopener" style={footerLinkStyle}>
          fanpage
        </a>
      </div>
      <span style={{ position: "relative", width: 52.5, height: 66, display: "block", margin: "0 auto 1rem", opacity: 0.8 }}>
        <Image src="/assets/wordmark-o-yen.webp" alt="ở-yên" fill sizes="53px" style={{ objectFit: "contain" }} />
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-stone)",
        }}
      >
        mộc little farm · {year}
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

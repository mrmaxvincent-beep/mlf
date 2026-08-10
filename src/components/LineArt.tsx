/**
 * Placeholder hand-drawn-style botanical line sketch — stands in for the real
 * illustration assets. Swap the <path>/<ellipse> markup here once real artwork
 * (e.g. exported as SVG) is supplied; every call site stays the same.
 */
export function LineArt({ style, flip = false }: { style?: React.CSSProperties; flip?: boolean }) {
  return (
    <svg
      className="line-art-accent"
      width="72"
      height="96"
      viewBox="0 0 72 96"
      fill="none"
      aria-hidden
      style={{ color: "var(--color-ink)", opacity: 0.45, transform: flip ? "scaleX(-1)" : undefined, ...style }}
    >
      <path d="M36 96 C36 62 31 40 21 20" stroke="currentColor" strokeWidth="1" />
      <path d="M21 20 C11 15 5 8 8 1" stroke="currentColor" strokeWidth="1" />
      <path d="M21 20 C26 11 36 7 41 0" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="14" cy="10" rx="7" ry="3.2" stroke="currentColor" strokeWidth="0.8" transform="rotate(-30 14 10)" />
      <ellipse cx="31" cy="6" rx="7" ry="3.2" stroke="currentColor" strokeWidth="0.8" transform="rotate(25 31 6)" />
      <path d="M36 62 C41 56 50 53 58 56" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="52" cy="53" rx="6" ry="3" stroke="currentColor" strokeWidth="0.8" transform="rotate(-15 52 53)" />
      <path d="M31 45 C25 42 18 42 13 46" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="18" cy="45" rx="5.5" ry="2.6" stroke="currentColor" strokeWidth="0.8" transform="rotate(10 18 45)" />
    </svg>
  );
}

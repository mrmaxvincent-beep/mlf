import Link from "next/link";
import { routes } from "@/lib/nav";

type Crumb = { label: string; href?: string };

/** Pass `label` for a single trailing crumb ("trang chủ / label"), or `trail` for
 * multi-level ("trang chủ / be-still / khai tâm") — items before the last may link out. */
export function Breadcrumb({ label, trail }: { label?: string; trail?: Crumb[] }) {
  const items: Crumb[] = trail ?? (label ? [{ label }] : []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "0.5rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-stone)",
        marginBottom: "2rem",
        flexWrap: "wrap",
      }}
    >
      <Link href={routes.home} style={{ color: "var(--color-stone)" }}>
        trang chủ
      </Link>
      {items.map((item, i) => (
        <span key={item.label} style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          <span style={{ color: "var(--color-ink)" }}>/</span>
          {item.href ? (
            <Link href={item.href} style={{ color: "var(--color-stone)" }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: i === items.length - 1 ? "var(--color-ink)" : "var(--color-stone)" }}>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

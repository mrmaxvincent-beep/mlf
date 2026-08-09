import Link from "next/link";
import { routes } from "@/lib/nav";

export function Breadcrumb({ label }: { label: string }) {
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
      }}
    >
      <Link href={routes.home} style={{ color: "var(--color-stone)" }}>
        trang chủ
      </Link>
      <span>/</span>
      <span style={{ color: "var(--color-ink)" }}>{label}</span>
    </div>
  );
}

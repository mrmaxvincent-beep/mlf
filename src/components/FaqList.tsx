import { Disclosure } from "./Disclosure";

/** Flat list of independently-toggleable Q&A rows (no outer accordion, no show-more) — be-still/tea-mind program pages. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div>
      {items.map((item) => (
        <Disclosure key={item.q} trigger={<span style={{ fontFamily: "var(--font-sans)", fontWeight: 400, fontSize: "0.9rem", color: "var(--color-ink)" }}>{item.q}</span>}>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.85, color: "var(--color-stone)", margin: 0 }}>{item.a}</p>
        </Disclosure>
      ))}
    </div>
  );
}

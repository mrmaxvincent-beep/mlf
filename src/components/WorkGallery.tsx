import { ImagePlaceholder } from "./ImagePlaceholder";

/** 2-column image + caption grid — tea·mind's gốm/tranh product pages. */
export function WorkGallery({ works }: { works: { label: string; title?: string; src?: string }[] }) {
  return (
    <div className="work-grid">
      {works.map((w, i) => (
        <div key={w.title || i}>
          <div style={{ width: "100%", aspectRatio: "4/5", marginBottom: "0.9rem" }}>
            <ImagePlaceholder label={w.label} aspectRatio="4/5" src={w.src} />
          </div>
          {w.title ? <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-ink)" }}>{w.title}</span> : null}
        </div>
      ))}
    </div>
  );
}

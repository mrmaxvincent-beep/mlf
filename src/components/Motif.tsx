import Image from "next/image";

const motifs = {
  "am-tra": "motif-am-tra.png",
  "chen-tra": "motif-chen-tra.svg",
  "dep": "motif-dep.png",
  "dom-muc": "motif-dom-muc.png",
  "gon-nuoc": "motif-gon-nuoc.svg",
  "hien-nha": "motif-hien-nha.png",
  "loi-mon": "motif-loi-mon.svg",
  "mai-nha": "motif-mai-nha.svg",
  "mam-la": "motif-mam-la.png",
  "nui-suong": "motif-nui-suong.png",
  "song-nuoc": "motif-song-nuoc.png",
  "thien-toa": "motif-thien-toa.svg",
  "to-my": "motif-to-my.svg",
} as const;

/** One of the small hand-drawn ink motifs — punctuation, not hero art. Max 1-2 per page per the design system.
 * Source PNGs are exported on an oversized transparent canvas, not cropped to the glyph, so this sizes a
 * fixed box and lets `fill` + `contain` fit the art inside it rather than assuming a square intrinsic ratio. */
export function Motif({
  name,
  size = 30,
  className,
  opacity = 0.4,
}: {
  name: keyof typeof motifs;
  size?: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <span
      className={className}
      style={{ position: "relative", width: size, height: size, display: "inline-block", opacity }}
    >
      <Image src={`/assets/${motifs[name]}`} alt="" fill sizes={`${size}px`} style={{ objectFit: "contain" }} />
    </span>
  );
}

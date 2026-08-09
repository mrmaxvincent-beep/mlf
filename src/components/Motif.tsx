import Image from "next/image";

const motifs = {
  "am-tra": "motif-am-tra.png",
  "chen-tra": "motif-chen-tra.svg",
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

/** One of the small hand-drawn ink motifs — punctuation, not hero art. Max 1-2 per page per the design system. */
export function Motif({
  name,
  size = 30,
  className,
}: {
  name: keyof typeof motifs;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={`/assets/${motifs[name]}`}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: "auto", opacity: 0.4, display: "inline-block" }}
    />
  );
}

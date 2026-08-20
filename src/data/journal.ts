export type Issue = {
  num: string;
  label: string;
  folioNum: string;
  title: string;
  pullQuote: string;
  coverPlaceholder: string;
  coverImageSrc?: string;
  ebookHref: string;
  published: boolean;
};

export const issues: Issue[] = [
  {
    num: "01",
    label: "quyển 01",
    folioNum: "số 01 · quyển 01",
    title: "muôn nẻo về nhà",
    pullQuote: "đi qua nhiều nhà, nhiều người, nhiều vùng đất — nhưng rốt cuộc là đi sâu vào mình.",
    coverPlaceholder: "ảnh bìa · quyển 01 — muôn nẻo về nhà",
    coverImageSrc: "/assets/mlf_journal_2026.webp",
    ebookHref: "https://drive.google.com/drive/folders/1ylKJak4PLy9dOmXDKED8WWnhsdPUEGeX?usp=sharing",
    published: true,
  },
  {
    num: "02",
    label: "quyển 02",
    folioNum: "QUYỂN 02",
    title: "xanh lại",
    pullQuote: "gieo lại những mầm xanh bên trong mỗi người",
    coverPlaceholder: "ảnh bìa · quyển 02 — xanh lại",
    coverImageSrc: "/assets/mlfjournal_demo0.webp",
    ebookHref: "https://www.moclittlefarm.com/ấn-phẩm/mlf-journal/mlf-journal-02",
    published: false,
  },
];

/** Source defaults to the newest (unpublished) issue on load. */
export const defaultIssueIndex = 1;

export const columns = [
  { num: "01", name: "thong dong", tagline: "à, đời sống có thể sống như thế này." },
  { num: "02", name: "sự thật hiền", tagline: "à, thì ra đời sống vốn là như vậy." },
  { num: "03", name: "ở yên", tagline: "à, thì ra như thế này là đủ." },
];

export const pageSpreads = [
  { placeholder: "trang đôi — mở đầu quyển", aspectRatio: "4/3", pages: "tr. 07–08", imageSrc: "/assets/mlfjournal_demo1.webp" },
  { placeholder: "trang ảnh full-bleed", aspectRatio: "3/4", pages: "tr. 34", imageSrc: "/assets/mlfjournal_demo2.webp" },
  { placeholder: "trang chân dung", aspectRatio: "3/4", pages: "tr. 68", imageSrc: "/assets/mlfjournal_demo3.webp" },
  { placeholder: "trang đôi — khép lại quyển", aspectRatio: "4/3", pages: "tr. 49–50", imageSrc: "/assets/mlfjournal_demo4.webp" },
];

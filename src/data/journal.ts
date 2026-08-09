export type Issue = {
  num: string;
  label: string;
  folioNum: string;
  title: string;
  pullQuote: string;
  coverPlaceholder: string;
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
    ebookHref: "https://www.moclittlefarm.com/ấn-phẩm/mlf-journal/mlf-journal-01",
    published: true,
  },
  {
    num: "02",
    label: "quyển 02",
    folioNum: "số 02 · quyển 02",
    title: "khoảng lặng giữa mùa",
    pullQuote: "có những mùa không cần gọi tên — chỉ cần được ở lại cho hết một nhịp thở dài.",
    coverPlaceholder: "ảnh bìa · quyển 02 — khoảng lặng giữa mùa",
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
  { placeholder: "trang đôi — mở đầu quyển", aspectRatio: "4/3", pages: "tr. 04–05" },
  { placeholder: "trang ảnh full-bleed", aspectRatio: "3/4", pages: "tr. 12" },
  { placeholder: "trang chân dung", aspectRatio: "3/4", pages: "tr. 27" },
  { placeholder: "trang đôi — khép lại quyển", aspectRatio: "4/3", pages: "tr. 40–41" },
];

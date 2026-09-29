export type Article = { title: string };
export type Section = { id: string; num: string; name: string; articles: Article[] };

/** 5 phần của ở-yên giữa đời, mỗi phần chứa các bài nhỏ — placeholder, thay bằng bài thật khi có. */
export const sections: Section[] = [
  { id: "voi-chinh-minh", num: "01", name: "với chính mình", articles: [{ title: "bài viết đang cập nhật." }] },
  { id: "trong-gia-dinh", num: "02", name: "trong gia đình", articles: [{ title: "bài viết đang cập nhật." }] },
  { id: "noi-cong-so", num: "03", name: "nơi công sở", articles: [{ title: "bài viết đang cập nhật." }] },
  { id: "giua-xa-hoi", num: "04", name: "giữa xã hội", articles: [{ title: "bài viết đang cập nhật." }] },
  { id: "khi-bien-co", num: "05", name: "khi biến cố", articles: [{ title: "bài viết đang cập nhật." }] },
];

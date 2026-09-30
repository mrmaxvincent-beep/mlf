export type Article = { slug: string; title: string; body: string };
export type Section = { id: string; roman: string; name: string; articles: Article[] };

const placeholder = "nội dung đang cập nhật.";

/** 6 mục của nếp nhà, mỗi mục chứa các bài nhỏ — demo layout, thay nội dung thật khi có. */
export const sections: Section[] = [
  {
    id: "khong-gian-song",
    roman: "I",
    name: "không gian sống",
    articles: [
      { slug: "nha-cung-la-mot-phan-cua-tam", title: "Nhà cũng là một phần của tâm", body: placeholder },
      { slug: "don-dep-khong-chi-de-sach", title: "Dọn dẹp không chỉ để sạch", body: placeholder },
      { slug: "moi-mon-do-deu-co-mot-noi-de-ve", title: "Mỗi món đồ đều có một nơi để về", body: placeholder },
      { slug: "do-dac-co-cam-xuc", title: "Đồ đạc có cảm xúc", body: placeholder },
      { slug: "lam-vuon", title: "Làm vườn", body: placeholder },
      { slug: "rac-va-thu-khong-dung", title: "Rác và thứ không dùng", body: placeholder },
      { slug: "cuoc-ha-chieu-co", title: "Cước hạ chiếu cố", body: placeholder },
    ],
  },
  {
    id: "than-the",
    roman: "II",
    name: "thân thể",
    articles: [
      { slug: "co-the-la-noi-minh-tro-ve", title: "Cơ thể là nơi mình trở về", body: placeholder },
      { slug: "an-khong-chi-la-an", title: "Ăn không chỉ là ăn", body: placeholder },
      { slug: "an-chay-va-long-tu", title: "Ăn chay và lòng từ", body: placeholder },
      { slug: "nau-an-bang-tam-y", title: "Nấu ăn bằng tâm ý", body: placeholder },
      { slug: "tam-rua", title: "Tắm rửa", body: placeholder },
      { slug: "giat-giu", title: "Giặt giũ", body: placeholder },
      { slug: "cham-soc-than-the-qua-nhung-viec-nho", title: "Chăm sóc thân thể qua những việc nhỏ", body: placeholder },
    ],
  },
  { id: "tam-hon", roman: "III", name: "tâm hồn", articles: [] },
  { id: "nghi-thuc-song", roman: "IV", name: "nghi thức sống", articles: [] },
  { id: "song-cung-nhau", roman: "V", name: "sống cùng nhau", articles: [] },
  { id: "mot-ngay-song-vua-van", roman: "VI", name: "một ngày sống vừa vặn", articles: [] },
];

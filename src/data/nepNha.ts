export type Article = { slug: string; title: string; body: string };
export type Group = { letter: string; name: string; articles: Article[] };
export type Section = { id: string; roman: string; name: string; articles?: Article[]; groups?: Group[] };

const placeholder = "nội dung đang cập nhật.";

/** Trả về danh sách bài phẳng của một mục, dù mục đó chia nhóm A/B/C hay không. */
export function allArticles(section: Section): Article[] {
  if (section.groups) return section.groups.flatMap((g) => g.articles);
  return section.articles ?? [];
}

/** 6 mục của nếp nhà, mỗi mục chứa các bài nhỏ (có thể chia thêm nhóm A/B/C) — demo layout, thay nội dung thật khi có. */
export const sections: Section[] = [
  {
    id: "khong-gian-song",
    roman: "I",
    name: "không gian sống",
    articles: [
      { slug: "nha-cung-la-mot-phan-cua-tam", title: "nhà cũng là một phần của tâm", body: placeholder },
      { slug: "don-dep-khong-chi-de-sach", title: "dọn dẹp không chỉ để sạch", body: placeholder },
      { slug: "moi-mon-do-deu-co-mot-noi-de-ve", title: "mỗi món đồ đều có một nơi để về", body: placeholder },
      { slug: "do-dac-co-cam-xuc", title: "đồ đạc có cảm xúc", body: placeholder },
      { slug: "lam-vuon", title: "làm vườn", body: placeholder },
      { slug: "rac-va-thu-khong-dung", title: "rác và thứ không dùng", body: placeholder },
      { slug: "cuoc-ha-chieu-co", title: "cước hạ chiếu cố", body: placeholder },
    ],
  },
  {
    id: "than-the",
    roman: "II",
    name: "thân thể",
    articles: [
      { slug: "co-the-la-noi-minh-tro-ve", title: "cơ thể là nơi mình trở về", body: placeholder },
      { slug: "an-khong-chi-la-an", title: "ăn không chỉ là ăn", body: placeholder },
      { slug: "an-chay-va-long-tu", title: "ăn chay và lòng từ", body: placeholder },
      { slug: "nau-an-bang-tam-y", title: "nấu ăn bằng tâm ý", body: placeholder },
      { slug: "tam-rua", title: "tắm rửa", body: placeholder },
      { slug: "giat-giu", title: "giặt giũ", body: placeholder },
      { slug: "cham-soc-than-the-qua-nhung-viec-nho", title: "chăm sóc thân thể qua những việc nhỏ", body: placeholder },
    ],
  },
  {
    id: "tinh-duong-tam-hon",
    roman: "III",
    name: "tĩnh dưỡng tâm hồn",
    groups: [
      {
        letter: "A",
        name: "bắt đầu ngày",
        articles: [
          { slug: "buoi-sang-rong-rang", title: "buổi sáng rỗng rang", body: placeholder },
          { slug: "dung-cham-vao-dien-thoai-ngay-khi-thuc-day", title: "đừng chạm vào điện thoại ngay khi thức dậy", body: placeholder },
          { slug: "mot-buoi-sang-khong-voi", title: "một buổi sáng không vội", body: placeholder },
          { slug: "di-bo-trong-buoi-sang", title: "đi bộ trong buổi sáng", body: placeholder },
          { slug: "mot-loi-chao-tu-te", title: "một lời chào tử tế", body: placeholder },
        ],
      },
      {
        letter: "B",
        name: "những khoảng lặng trong ngày",
        articles: [
          { slug: "uong-mot-tach-tra", title: "uống một tách trà", body: placeholder },
          { slug: "ngoi-yen", title: "ngồi yên", body: placeholder },
          { slug: "thong-dong-nhan-nha", title: "thong dong, nhàn nhã", body: placeholder },
          { slug: "khong-lam-gi-ca", title: "không làm gì cả", body: placeholder },
          { slug: "mot-khoang-khong-co-muc-dich", title: "một khoảng không có mục đích", body: placeholder },
          { slug: "khi-tam-tri-qua-day", title: "khi tâm trí quá đầy", body: placeholder },
        ],
      },
      {
        letter: "C",
        name: "dọn tâm",
        articles: [
          { slug: "don-dep-thong-tin", title: "dọn dẹp thông tin", body: placeholder },
          { slug: "khi-tam-tri-qua-nhieu-tieng-on", title: "khi tâm trí quá nhiều tiếng ồn", body: placeholder },
          { slug: "hoc-cach-o-voi-tieng-on", title: "học cách ở với tiếng ồn", body: placeholder },
          { slug: "mui-huong-va-khong-gian", title: "mùi hương và không gian", body: placeholder },
          { slug: "mot-loi-noi-co-the-thay-doi-can-phong", title: "một lời nói có thể thay đổi căn phòng", body: placeholder },
          { slug: "goi-chuong-de-tro-ve", title: "gọi chuông để trở về", body: placeholder },
          { slug: "chap-tay", title: "chắp tay", body: placeholder },
          { slug: "khep-lai-mot-ngay", title: "khép lại một ngày", body: placeholder },
        ],
      },
    ],
  },
  {
    id: "nghi-thuc-song",
    roman: "IV",
    name: "nghi thức sống",
    articles: [
      { slug: "nghi-thuc-buoi-sang", title: "nghi thức buổi sáng", body: placeholder },
      { slug: "nghi-thuc-uong-tra", title: "nghi thức uống trà", body: placeholder },
      { slug: "nghi-thuc-vao-nha", title: "nghi thức vào nhà", body: placeholder },
      { slug: "nghi-thuc-vao-bep", title: "nghi thức vào bếp", body: placeholder },
      { slug: "nghi-thuc-truoc-bua-an", title: "nghi thức trước bữa ăn", body: placeholder },
      { slug: "nghi-thuc-tam", title: "nghi thức tắm", body: placeholder },
      { slug: "nghi-thuc-don-nha", title: "nghi thức dọn nhà", body: placeholder },
      { slug: "nghi-thuc-di-ngu", title: "nghi thức đi ngủ", body: placeholder },
      { slug: "nghi-thuc-khi-co-khach", title: "nghi thức khi có khách", body: placeholder },
      { slug: "nghi-thuc-khi-mot-ngay-ket-thuc", title: "nghi thức khi một ngày kết thúc", body: placeholder },
    ],
  },
  {
    id: "song-cung-nhau",
    roman: "V",
    name: "sống cùng nhau",
    articles: [
      { slug: "thiet-dai", title: "thiết đãi", body: placeholder },
      { slug: "an-cung-nhau", title: "ăn cùng nhau", body: placeholder },
      { slug: "don-mot-nguoi-vao-nha", title: "đón một người vào nhà", body: placeholder },
      { slug: "nhung-ngay-dac-biet", title: "những ngày đặc biệt", body: placeholder },
      { slug: "song-cung-thu-cung", title: "sống cùng thú cưng", body: placeholder },
    ],
  },
  {
    id: "mot-ngay-song-vua-van",
    roman: "VI",
    name: "một ngày sống vừa vặn",
    articles: [
      { slug: "buoi-sang", title: "buổi sáng", body: placeholder },
      { slug: "trong-nha", title: "trong nhà", body: placeholder },
      { slug: "bua-an", title: "bữa ăn", body: placeholder },
      { slug: "than-the", title: "thân thể", body: placeholder },
      { slug: "tam-tri", title: "tâm trí", body: placeholder },
      { slug: "buoi-toi", title: "buổi tối", body: placeholder },
    ],
  },
];

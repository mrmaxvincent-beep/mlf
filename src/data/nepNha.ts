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
  {
    id: "tinh-duong-tam-hon",
    roman: "III",
    name: "tĩnh dưỡng tâm hồn",
    groups: [
      {
        letter: "A",
        name: "bắt đầu ngày",
        articles: [
          { slug: "buoi-sang-rong-rang", title: "Buổi sáng rỗng rang", body: placeholder },
          { slug: "dung-cham-vao-dien-thoai-ngay-khi-thuc-day", title: "Đừng chạm vào điện thoại ngay khi thức dậy", body: placeholder },
          { slug: "mot-buoi-sang-khong-voi", title: "Một buổi sáng không vội", body: placeholder },
          { slug: "di-bo-trong-buoi-sang", title: "Đi bộ trong buổi sáng", body: placeholder },
          { slug: "mot-loi-chao-tu-te", title: "Một lời chào tử tế", body: placeholder },
        ],
      },
      {
        letter: "B",
        name: "những khoảng lặng trong ngày",
        articles: [
          { slug: "uong-mot-tach-tra", title: "Uống một tách trà", body: placeholder },
          { slug: "ngoi-yen", title: "Ngồi yên", body: placeholder },
          { slug: "thong-dong-nhan-nha", title: "Thong dong, nhàn nhã", body: placeholder },
          { slug: "khong-lam-gi-ca", title: "Không làm gì cả", body: placeholder },
          { slug: "mot-khoang-khong-co-muc-dich", title: "Một khoảng không có mục đích", body: placeholder },
          { slug: "khi-tam-tri-qua-day", title: "Khi tâm trí quá đầy", body: placeholder },
        ],
      },
      {
        letter: "C",
        name: "dọn tâm",
        articles: [
          { slug: "don-dep-thong-tin", title: "Dọn dẹp thông tin", body: placeholder },
          { slug: "khi-tam-tri-qua-nhieu-tieng-on", title: "Khi tâm trí quá nhiều tiếng ồn", body: placeholder },
          { slug: "hoc-cach-o-voi-tieng-on", title: "Học cách ở với tiếng ồn", body: placeholder },
          { slug: "mui-huong-va-khong-gian", title: "Mùi hương và không gian", body: placeholder },
          { slug: "mot-loi-noi-co-the-thay-doi-can-phong", title: "Một lời nói có thể thay đổi căn phòng", body: placeholder },
          { slug: "goi-chuong-de-tro-ve", title: "Gọi chuông để trở về", body: placeholder },
          { slug: "chap-tay", title: "Chắp tay", body: placeholder },
          { slug: "khep-lai-mot-ngay", title: "Khép lại một ngày", body: placeholder },
        ],
      },
    ],
  },
  {
    id: "nghi-thuc-song",
    roman: "IV",
    name: "nghi thức sống",
    articles: [
      { slug: "nghi-thuc-buoi-sang", title: "Nghi thức buổi sáng", body: placeholder },
      { slug: "nghi-thuc-uong-tra", title: "Nghi thức uống trà", body: placeholder },
      { slug: "nghi-thuc-vao-nha", title: "Nghi thức vào nhà", body: placeholder },
      { slug: "nghi-thuc-vao-bep", title: "Nghi thức vào bếp", body: placeholder },
      { slug: "nghi-thuc-truoc-bua-an", title: "Nghi thức trước bữa ăn", body: placeholder },
      { slug: "nghi-thuc-tam", title: "Nghi thức tắm", body: placeholder },
      { slug: "nghi-thuc-don-nha", title: "Nghi thức dọn nhà", body: placeholder },
      { slug: "nghi-thuc-di-ngu", title: "Nghi thức đi ngủ", body: placeholder },
      { slug: "nghi-thuc-khi-co-khach", title: "Nghi thức khi có khách", body: placeholder },
      { slug: "nghi-thuc-khi-mot-ngay-ket-thuc", title: "Nghi thức khi một ngày kết thúc", body: placeholder },
    ],
  },
  {
    id: "song-cung-nhau",
    roman: "V",
    name: "sống cùng nhau",
    articles: [
      { slug: "thiet-dai", title: "Thiết đãi", body: placeholder },
      { slug: "an-cung-nhau", title: "Ăn cùng nhau", body: placeholder },
      { slug: "don-mot-nguoi-vao-nha", title: "Đón một người vào nhà", body: placeholder },
      { slug: "nhung-ngay-dac-biet", title: "Những ngày đặc biệt", body: placeholder },
      { slug: "song-cung-thu-cung", title: "Sống cùng thú cưng", body: placeholder },
    ],
  },
  {
    id: "mot-ngay-song-vua-van",
    roman: "VI",
    name: "một ngày sống vừa vặn",
    articles: [
      { slug: "buoi-sang", title: "Buổi sáng", body: placeholder },
      { slug: "trong-nha", title: "Trong nhà", body: placeholder },
      { slug: "bua-an", title: "Bữa ăn", body: placeholder },
      { slug: "than-the", title: "Thân thể", body: placeholder },
      { slug: "tam-tri", title: "Tâm trí", body: placeholder },
      { slug: "buoi-toi", title: "Buổi tối", body: placeholder },
    ],
  },
];

export type Lesson = { slug: string; num: number; title: string; subtitle?: string; body: string };
export type Part = { id: string; roman: string; name: string; lessons: Lesson[] };

const placeholder = "nội dung đang cập nhật.";

/** 15 bài học của ở-yên căn bản, chia làm 4 phần — demo layout, thay nội dung thật khi có. */
export const parts: Part[] = [
  {
    id: "hieu",
    roman: "I",
    name: "hiểu",
    lessons: [
      { slug: "o-yen-la-gi", num: 1, title: "ở-yên là gì", body: placeholder },
      { slug: "o-yen-va-chanh-niem", num: 2, title: "ở-yên và chánh niệm", body: placeholder },
      { slug: "tu-trai-nghiem-den-phan-ung", num: 3, title: "từ trải nghiệm đến phản ứng", body: placeholder },
      { slug: "khoang-cach-la-gi", num: 4, title: "khoảng cách là gì", body: placeholder },
    ],
  },
  {
    id: "hoc",
    roman: "II",
    name: "học",
    lessons: [
      { slug: "nhan", num: 5, title: "Nhận", body: placeholder },
      { slug: "lang", num: 6, title: "Lắng", body: placeholder },
      { slug: "de", num: 7, title: "Để", body: placeholder },
      { slug: "thay", num: 8, title: "Thấy", body: placeholder },
      { slug: "chon", num: 9, title: "Chọn", body: placeholder },
    ],
  },
  {
    id: "thuc-tap",
    roman: "III",
    name: "thực tập",
    lessons: [
      { slug: "mat-ho", num: 10, title: "Mặt hồ", subtitle: "thực tập lắng", body: placeholder },
      { slug: "cai-mam", num: 11, title: "Cái mầm", subtitle: "thực tập để", body: placeholder },
      { slug: "khoang-giua", num: 12, title: "Khoảng giữa", subtitle: "thực tập dừng trước phản ứng", body: placeholder },
    ],
  },
  {
    id: "tu-kiem-chung",
    roman: "IV",
    name: "tự kiểm chứng",
    lessons: [
      { slug: "7-ngay-o-yen", num: 13, title: "7 ngày ở-yên", body: placeholder },
      { slug: "nhan-ra-minh-dang-thay-doi-the-nao", num: 14, title: "Nhận ra mình đang thay đổi thế nào", body: placeholder },
      { slug: "khi-o-yen-khong-yen", num: 15, title: "Khi ở-yên không yên", body: placeholder },
    ],
  },
];

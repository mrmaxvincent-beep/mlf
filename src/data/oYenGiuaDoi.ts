export type Article = { slug: string; title: string; body: string };
export type Section = { id: string; num: string; name: string; tagline: string; articles: Article[] };

/** 5 phần của ở-yên giữa đời, mỗi phần chứa các bài nhỏ — demo minh họa, thay bằng bài thật khi có. */
export const sections: Section[] = [
  {
    id: "voi-chinh-minh",
    num: "01",
    name: "với chính mình",
    tagline: "Ở-yên khi không biết phải làm gì với chính mình.",
    articles: [
      { slug: "khi-suy-nghi-qua-nhieu", title: "khi suy nghĩ quá nhiều", body: "nội dung đang cập nhật." },
      { slug: "khi-tu-phan-xet", title: "khi tự phán xét", body: "nội dung đang cập nhật." },
      { slug: "khi-lo-lang-ve-tuong-lai", title: "khi lo lắng về tương lai", body: "nội dung đang cập nhật." },
      { slug: "khi-mac-ket-trong-mot-quyet-dinh", title: "khi mắc kẹt trong một quyết định", body: "nội dung đang cập nhật." },
      { slug: "khi-that-vong-ve-ban-than", title: "khi thất vọng về bản thân", body: "nội dung đang cập nhật." },
      { slug: "khi-muon-thay-doi-minh-ngay-lap-tuc", title: "khi muốn thay đổi mình ngay lập tức", body: "nội dung đang cập nhật." },
      { slug: "khi-khong-biet-minh-muon-gi", title: "khi không biết mình muốn gì", body: "nội dung đang cập nhật." },
    ],
  },
  {
    id: "trong-gia-dinh",
    num: "02",
    name: "trong gia đình",
    tagline: "Ở-yên giữa những người mình thương và những vết thương mình mang theo.",
    articles: [
      { slug: "khi-cha-me-lam-minh-ton-thuong", title: "khi cha mẹ làm mình tổn thương", body: "nội dung đang cập nhật." },
      { slug: "khi-vo-chong-khong-hieu-minh", title: "khi vợ/chồng không hiểu mình", body: "nội dung đang cập nhật." },
      { slug: "khi-con-cai-khong-nghe-loi", title: "khi con cái không nghe lời", body: "nội dung đang cập nhật." },
      { slug: "khi-nhung-chuyen-cu-lap-lai", title: "khi những chuyện cũ lặp lại", body: "nội dung đang cập nhật." },
      { slug: "khi-muon-duoc-nguoi-than-cong-nhan", title: "khi muốn được người thân công nhận", body: "nội dung đang cập nhật." },
      { slug: "khi-tranh-luan", title: "khi tranh luận", body: "nội dung đang cập nhật." },
      { slug: "khi-can-dat-mot-ranh-gioi", title: "khi cần đặt một ranh giới", body: "nội dung đang cập nhật." },
    ],
  },
  {
    id: "noi-cong-so",
    num: "03",
    name: "nơi công sở",
    tagline: "Ở-yên giữa tham vọng, áp lực và nhu cầu được công nhận.",
    articles: [
      { slug: "khi-bi-phe-binh", title: "khi bị phê bình", body: "nội dung đang cập nhật." },
      { slug: "khi-khong-duoc-cong-nhan", title: "khi không được công nhận", body: "nội dung đang cập nhật." },
      { slug: "khi-dong-nghiep-hon-minh", title: "khi đồng nghiệp hơn mình", body: "nội dung đang cập nhật." },
      { slug: "khi-bi-hieu-lam", title: "khi bị hiểu lầm", body: "nội dung đang cập nhật." },
      { slug: "khi-sep-gay-ap-luc", title: "khi sếp gây áp lực", body: "nội dung đang cập nhật." },
      { slug: "khi-muon-chung-minh-minh-dung", title: "khi muốn chứng minh mình đúng", body: "nội dung đang cập nhật." },
      { slug: "khi-that-bai", title: "khi thất bại", body: "nội dung đang cập nhật." },
      { slug: "khi-phai-dua-ra-quyet-dinh-kho", title: "khi phải đưa ra quyết định khó", body: "nội dung đang cập nhật." },
    ],
  },
  {
    id: "giua-xa-hoi",
    num: "04",
    name: "giữa xã hội",
    tagline: "Ở-yên giữa rất nhiều tiếng nói, lựa chọn và phản ứng.",
    articles: [
      { slug: "mang-xa-hoi", title: "mạng xã hội", body: "nội dung đang cập nhật." },
      { slug: "tin-tuc", title: "tin tức", body: "nội dung đang cập nhật." },
      { slug: "tranh-luan", title: "tranh luận", body: "nội dung đang cập nhật." },
      { slug: "dam-dong", title: "đám đông", body: "nội dung đang cập nhật." },
      { slug: "nguoi-la", title: "người lạ", body: "nội dung đang cập nhật." },
      { slug: "khac-biet-quan-diem", title: "khác biệt quan điểm", body: "nội dung đang cập nhật." },
      { slug: "ap-luc-phai-co-y-kien", title: "áp lực phải có ý kiến", body: "nội dung đang cập nhật." },
      { slug: "so-sanh-minh-voi-nguoi-khac", title: "so sánh mình với người khác", body: "nội dung đang cập nhật." },
      { slug: "fomo", title: "FOMO", body: "nội dung đang cập nhật." },
      { slug: "nhu-cau-duoc-nhin-nhan", title: "nhu cầu được nhìn nhận", body: "nội dung đang cập nhật." },
    ],
  },
  {
    id: "khi-bien-co",
    num: "05",
    name: "khi biến cố",
    tagline: "Ở-yên khi đời sống xảy ra điều mình không thể kiểm soát.",
    articles: [
      { slug: "khi-mat-mat", title: "khi mất mát", body: "nội dung đang cập nhật." },
      { slug: "khi-so-hai", title: "khi sợ hãi", body: "nội dung đang cập nhật." },
      { slug: "khi-moi-thu-do-vo", title: "khi mọi thứ đổ vỡ", body: "nội dung đang cập nhật." },
      { slug: "khi-khong-biet-tuong-lai", title: "khi không biết tương lai", body: "nội dung đang cập nhật." },
      { slug: "khi-phai-bat-dau-lai", title: "khi phải bắt đầu lại", body: "nội dung đang cập nhật." },
      { slug: "khi-khong-the-sua-duoc-dieu-da-xay-ra", title: "khi không thể sửa được điều đã xảy ra", body: "nội dung đang cập nhật." },
    ],
  },
];

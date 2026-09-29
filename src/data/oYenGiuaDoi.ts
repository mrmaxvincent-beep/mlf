export type Article = { title: string };
export type Section = { id: string; num: string; name: string; articles: Article[] };

/** 5 phần của ở-yên giữa đời, mỗi phần chứa các bài nhỏ — demo minh họa, thay bằng bài thật khi có. */
export const sections: Section[] = [
  {
    id: "voi-chinh-minh",
    num: "01",
    name: "với chính mình",
    articles: [
      { title: "buổi sáng đầu tiên, trước khi mở điện thoại" },
      { title: "khi không biết mình đang muốn gì" },
      { title: "ngồi yên 5 phút, không làm gì cả" },
    ],
  },
  {
    id: "trong-gia-dinh",
    num: "02",
    name: "trong gia đình",
    articles: [
      { title: "bữa cơm không có điện thoại trên bàn" },
      { title: "khi con cái không nghe lời" },
      { title: "im lặng cũng là một cách lắng nghe" },
    ],
  },
  {
    id: "noi-cong-so",
    num: "03",
    name: "nơi công sở",
    articles: [
      { title: "một hơi thở trước khi bấm gửi email" },
      { title: "deadline dồn dập, tâm vẫn có thể yên" },
      { title: "khi đồng nghiệp làm mình khó chịu" },
    ],
  },
  {
    id: "giua-xa-hoi",
    num: "04",
    name: "giữa xã hội",
    articles: [
      { title: "lướt mạng xã hội mà không cuốn theo" },
      { title: "giữa đám đông, vẫn giữ được mình" },
      { title: "khi ý kiến trái chiều làm mình nóng lên" },
    ],
  },
  {
    id: "khi-bien-co",
    num: "05",
    name: "khi biến cố",
    articles: [
      { title: "khi tin xấu ập đến bất ngờ" },
      { title: "ở lại với nỗi đau, thay vì trốn chạy" },
      { title: "sau cơn bão, tìm lại nhịp thở" },
    ],
  },
];

export type Article = { title: string; body: string };
export type Section = { id: string; num: string; name: string; articles: Article[] };

/** 5 phần của ở-yên giữa đời, mỗi phần chứa các bài nhỏ — demo minh họa, thay bằng bài thật khi có. */
export const sections: Section[] = [
  {
    id: "voi-chinh-minh",
    num: "01",
    name: "với chính mình",
    articles: [
      {
        title: "buổi sáng đầu tiên, trước khi mở điện thoại",
        body: "có một khoảng vài phút, ngay khi vừa mở mắt, trước khi tay chạm vào điện thoại. Nếu để ý, đó có thể là khoảng yên nhất trong cả ngày — chưa tin nhắn nào cần trả lời, chưa việc gì cần giải quyết. Thử nằm yên ở đó một chút, trước khi để ngày mới cuốn mình đi.",
      },
      {
        title: "khi không biết mình đang muốn gì",
        body: "có những lúc ngồi trước nhiều lựa chọn mà lòng trống rỗng, không biết mình thật sự muốn điều gì. Thay vì cố tìm câu trả lời ngay, có thể chỉ cần ngồi lại, thở vài hơi, và để câu hỏi ở đó — không phải mọi câu hỏi đều cần được trả lời ngay lập tức.",
      },
      {
        title: "ngồi yên 5 phút, không làm gì cả",
        body: "không nghe nhạc, không lướt điện thoại, không cả thiền theo một phương pháp nào. Chỉ ngồi, để cơ thể và tâm trí được nghỉ một chút giữa một ngày đầy việc. 5 phút ấy không làm ngày dài ra, nhưng có thể làm nó nhẹ hơn.",
      },
    ],
  },
  {
    id: "trong-gia-dinh",
    num: "02",
    name: "trong gia đình",
    articles: [
      {
        title: "bữa cơm không có điện thoại trên bàn",
        body: "một bữa cơm không có gì đặc biệt, chỉ là không ai cầm điện thoại. Không phải vì đó là quy tắc phải theo, mà vì khi tay không bận, mắt và tai mới thật sự có mặt với người ngồi cùng bàn.",
      },
      {
        title: "khi con cái không nghe lời",
        body: "phản ứng đầu tiên thường là muốn lớn tiếng ngay. Nhưng nếu dừng lại một nhịp thở trước khi nói, đôi khi sẽ nghe ra được điều con đang thật sự cần, phía sau cái không nghe lời ấy.",
      },
      {
        title: "im lặng cũng là một cách lắng nghe",
        body: "không phải lúc nào cũng cần nói điều gì đó để cho thấy mình đang quan tâm. Đôi khi, chỉ cần ngồi đó, im lặng, và để người kia biết mình đang thật sự lắng nghe — đã là đủ.",
      },
    ],
  },
  {
    id: "noi-cong-so",
    num: "03",
    name: "nơi công sở",
    articles: [
      {
        title: "một hơi thở trước khi bấm gửi email",
        body: "một email viết trong lúc nóng giận thường mang theo nhiều hơn những gì mình muốn nói. Trước khi bấm gửi, thử dừng lại một hơi thở — đôi khi chỉ vậy thôi cũng đủ để đổi cách diễn đạt.",
      },
      {
        title: "deadline dồn dập, tâm vẫn có thể yên",
        body: "công việc gấp không có nghĩa là tâm phải rối theo. Giữa những việc cần làm ngay, vẫn có thể chọn làm từng việc một, thay vì để đầu óc chạy cùng lúc nhiều hướng.",
      },
      {
        title: "khi đồng nghiệp làm mình khó chịu",
        body: "khó chịu là phản ứng tự nhiên, không cần phải dập tắt ngay. Nhưng trước khi phản ứng lại, có thể tự hỏi: điều này có thật sự cần một phản ứng ngay bây giờ không, hay chỉ cần được nhìn thấy và để yên.",
      },
    ],
  },
  {
    id: "giua-xa-hoi",
    num: "04",
    name: "giữa xã hội",
    articles: [
      {
        title: "lướt mạng xã hội mà không cuốn theo",
        body: "mỗi lần lướt điện thoại là hàng chục câu chuyện, ý kiến, cảm xúc của người khác ùa vào. Không cần phải rời xa hoàn toàn, chỉ cần biết khi nào mình đang xem, và khi nào mình đang bị cuốn đi.",
      },
      {
        title: "giữa đám đông, vẫn giữ được mình",
        body: "ở giữa nhiều người, nhiều tiếng nói, dễ quên mất tiếng nói của chính mình. Thỉnh thoảng dừng lại, hỏi mình đang cảm thấy gì, đang nghĩ gì — là một cách nhỏ để không lạc mất mình.",
      },
      {
        title: "khi ý kiến trái chiều làm mình nóng lên",
        body: "không phải ý kiến khác mình là sai. Cơn nóng dâng lên thường đến trước khi kịp hiểu hết điều người khác đang nói. Một nhịp dừng, trước khi đáp lại, có thể giữ cho cuộc trò chuyện không đi quá xa.",
      },
    ],
  },
  {
    id: "khi-bien-co",
    num: "05",
    name: "khi biến cố",
    articles: [
      {
        title: "khi tin xấu ập đến bất ngờ",
        body: "có những tin không ai chuẩn bị trước được. Trong những giây đầu tiên, không cần phải biết ngay mình sẽ làm gì. Chỉ cần cho phép mình thở, cho phép mình choáng váng một chút, trước khi bước tiếp.",
      },
      {
        title: "ở lại với nỗi đau, thay vì trốn chạy",
        body: "bản năng thường muốn né tránh những gì đau đớn. Nhưng đôi khi, ở lại một chút với cảm giác ấy — không cố đẩy đi, cũng không cố sức chịu đựng — lại là cách để nó dần qua đi.",
      },
      {
        title: "sau cơn bão, tìm lại nhịp thở",
        body: "khi mọi thứ đã tạm lắng, cơ thể và tâm trí vẫn cần thời gian để trở lại nhịp bình thường. Không cần vội quay lại như chưa có gì xảy ra — cho mình một khoảng để thở lại đã.",
      },
    ],
  },
];

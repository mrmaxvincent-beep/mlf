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
      {
        slug: "buoi-sang-dau-tien",
        title: "buổi sáng đầu tiên, trước khi mở điện thoại",
        body: "có một khoảng vài phút, ngay khi vừa mở mắt, trước khi tay chạm vào điện thoại. Nếu để ý, đó có thể là khoảng yên nhất trong cả ngày — chưa tin nhắn nào cần trả lời, chưa việc gì cần giải quyết. Thử nằm yên ở đó một chút, trước khi để ngày mới cuốn mình đi.",
      },
      {
        slug: "khong-biet-minh-muon-gi",
        title: "khi không biết mình đang muốn gì",
        body: "có những lúc ngồi trước nhiều lựa chọn mà lòng trống rỗng, không biết mình thật sự muốn điều gì. Thay vì cố tìm câu trả lời ngay, có thể chỉ cần ngồi lại, thở vài hơi, và để câu hỏi ở đó — không phải mọi câu hỏi đều cần được trả lời ngay lập tức.",
      },
      {
        slug: "ngoi-yen-5-phut",
        title: "ngồi yên 5 phút, không làm gì cả",
        body: "không nghe nhạc, không lướt điện thoại, không cả thiền theo một phương pháp nào. Chỉ ngồi, để cơ thể và tâm trí được nghỉ một chút giữa một ngày đầy việc. 5 phút ấy không làm ngày dài ra, nhưng có thể làm nó nhẹ hơn.",
      },
    ],
  },
  {
    id: "trong-gia-dinh",
    num: "02",
    name: "trong gia đình",
    tagline: "Ở-yên giữa những người mình thương và những vết thương mình mang theo.",
    articles: [
      {
        slug: "bua-com-khong-dien-thoai",
        title: "bữa cơm không có điện thoại trên bàn",
        body: "một bữa cơm không có gì đặc biệt, chỉ là không ai cầm điện thoại. Không phải vì đó là quy tắc phải theo, mà vì khi tay không bận, mắt và tai mới thật sự có mặt với người ngồi cùng bàn.",
      },
      {
        slug: "khi-con-cai-khong-nghe-loi",
        title: "khi con cái không nghe lời",
        body: "phản ứng đầu tiên thường là muốn lớn tiếng ngay. Nhưng nếu dừng lại một nhịp thở trước khi nói, đôi khi sẽ nghe ra được điều con đang thật sự cần, phía sau cái không nghe lời ấy.",
      },
      {
        slug: "im-lang-la-mot-cach-lang-nghe",
        title: "im lặng cũng là một cách lắng nghe",
        body: "không phải lúc nào cũng cần nói điều gì đó để cho thấy mình đang quan tâm. Đôi khi, chỉ cần ngồi đó, im lặng, và để người kia biết mình đang thật sự lắng nghe — đã là đủ.",
      },
    ],
  },
  {
    id: "noi-cong-so",
    num: "03",
    name: "nơi công sở",
    tagline: "Ở-yên giữa tham vọng, áp lực và nhu cầu được công nhận.",
    articles: [
      {
        slug: "mot-hoi-tho-truoc-khi-gui-email",
        title: "một hơi thở trước khi bấm gửi email",
        body: "một email viết trong lúc nóng giận thường mang theo nhiều hơn những gì mình muốn nói. Trước khi bấm gửi, thử dừng lại một hơi thở — đôi khi chỉ vậy thôi cũng đủ để đổi cách diễn đạt.",
      },
      {
        slug: "deadline-don-dap-tam-van-yen",
        title: "deadline dồn dập, tâm vẫn có thể yên",
        body: "công việc gấp không có nghĩa là tâm phải rối theo. Giữa những việc cần làm ngay, vẫn có thể chọn làm từng việc một, thay vì để đầu óc chạy cùng lúc nhiều hướng.",
      },
      {
        slug: "khi-dong-nghiep-lam-minh-kho-chiu",
        title: "khi đồng nghiệp làm mình khó chịu",
        body: "khó chịu là phản ứng tự nhiên, không cần phải dập tắt ngay. Nhưng trước khi phản ứng lại, có thể tự hỏi: điều này có thật sự cần một phản ứng ngay bây giờ không, hay chỉ cần được nhìn thấy và để yên.",
      },
    ],
  },
  {
    id: "giua-xa-hoi",
    num: "04",
    name: "giữa xã hội",
    tagline: "Ở-yên giữa rất nhiều tiếng nói, lựa chọn và phản ứng.",
    articles: [
      {
        slug: "luot-mang-xa-hoi-khong-cuon-theo",
        title: "lướt mạng xã hội mà không cuốn theo",
        body: "mỗi lần lướt điện thoại là hàng chục câu chuyện, ý kiến, cảm xúc của người khác ùa vào. Không cần phải rời xa hoàn toàn, chỉ cần biết khi nào mình đang xem, và khi nào mình đang bị cuốn đi.",
      },
      {
        slug: "giua-dam-dong-van-giu-duoc-minh",
        title: "giữa đám đông, vẫn giữ được mình",
        body: "ở giữa nhiều người, nhiều tiếng nói, dễ quên mất tiếng nói của chính mình. Thỉnh thoảng dừng lại, hỏi mình đang cảm thấy gì, đang nghĩ gì — là một cách nhỏ để không lạc mất mình.",
      },
      {
        slug: "y-kien-trai-chieu-lam-minh-nong-len",
        title: "khi ý kiến trái chiều làm mình nóng lên",
        body: "không phải ý kiến khác mình là sai. Cơn nóng dâng lên thường đến trước khi kịp hiểu hết điều người khác đang nói. Một nhịp dừng, trước khi đáp lại, có thể giữ cho cuộc trò chuyện không đi quá xa.",
      },
    ],
  },
  {
    id: "khi-bien-co",
    num: "05",
    name: "khi biến cố",
    tagline: "Ở-yên khi đời sống xảy ra điều mình không thể kiểm soát.",
    articles: [
      {
        slug: "khi-tin-xau-ap-den-bat-ngo",
        title: "khi tin xấu ập đến bất ngờ",
        body: "có những tin không ai chuẩn bị trước được. Trong những giây đầu tiên, không cần phải biết ngay mình sẽ làm gì. Chỉ cần cho phép mình thở, cho phép mình choáng váng một chút, trước khi bước tiếp.",
      },
      {
        slug: "o-lai-voi-noi-dau",
        title: "ở lại với nỗi đau, thay vì trốn chạy",
        body: "bản năng thường muốn né tránh những gì đau đớn. Nhưng đôi khi, ở lại một chút với cảm giác ấy — không cố đẩy đi, cũng không cố sức chịu đựng — lại là cách để nó dần qua đi.",
      },
      {
        slug: "sau-con-bao-tim-lai-nhip-tho",
        title: "sau cơn bão, tìm lại nhịp thở",
        body: "khi mọi thứ đã tạm lắng, cơ thể và tâm trí vẫn cần thời gian để trở lại nhịp bình thường. Không cần vội quay lại như chưa có gì xảy ra — cho mình một khoảng để thở lại đã.",
      },
    ],
  },
];

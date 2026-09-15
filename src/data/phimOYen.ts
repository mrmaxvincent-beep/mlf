export type Phim = {
  title: string;
  year: string;
  feeling: string;
  quote?: string;
  quoteBy?: string;
  tags: string[];
  youtubeId?: string; // để trống sẽ hiện khung "đang cập nhật" — điền id trailer YouTube khi sẵn sàng
  posterSrc?: string; // ảnh nền tĩnh (facade) trước khi bấm play — để trống sẽ dùng thumbnail YouTube mặc định
};

/** Placeholder — thay bằng danh sách phim thật do mlf tuyển chọn trước khi công bố. */
export const phimList: Phim[] = [
  {
    title: "Perfect Days",
    year: "2023",
    feeling: "Xem xong, mình muốn dọn dẹp lại góc làm việc, pha một ấm trà, rồi ngồi yên nhìn nắng đổi màu qua tán lá.",
    quote: "Lần sau là lần sau. Bây giờ là bây giờ.",
    quoteBy: "Hirayama",
    tags: ["xem sáng chủ nhật", "khi cần được yên", "rất ít lời", "xem một mình"],
    youtubeId: "QzZBbX5A1FA",
  },
  {
    title: "Little Forest",
    year: "2018",
    feeling: "Cảm giác như vừa được về nhà — tay còn dính đất, bụng còn ấm vì bữa cơm vừa nấu.",
    quote: "Món ăn chính là tấm gương phản chiếu trái tim mình. Con phải tập trung vào, không là bị thương đấy.",
    quoteBy: "mẹ của Ichiko",
    tags: ["xem khi trời mưa", "khi thấy vội", "không có gì xảy ra", "xem một mình"],
    youtubeId: "c7FZlyAeNyI",
  },
  {
    title: "Departures",
    year: "2008",
    feeling: "Cảm giác nặng mà cũng nhẹ, khiến mình nhìn lại những điều mình chưa kịp nói với người đã đi xa và cả những điều với chính mình nữa.",
    quote: "Chết không phải là hết. Người ta đi qua nó, để bước tiếp sang một điều khác.",
    quoteBy: "Shokichi",
    tags: ["xem tối muộn", "khi mệt mà không ngủ được", "phim để xem nhiều lần", "xem cùng một người"],
    youtubeId: "EIqD2-D6FC0",
  },
  {
    title: "Kikujiro no Natsu",
    year: "1999",
    feeling: "Vừa buồn cười, vừa nghẹn ngào - một chuyến đi chẳng có đích, nhưng rồi lại chạm tới những điều rất thật.",
    quote: "Hỏi tử tế, thì mọi chuyện dễ hơn nhiều.",
    quoteBy: "Masao",
    tags: ["xem sáng chủ nhật", "khi thấy vội", "không có gì xảy ra", "xem cùng một người"],
    youtubeId: "EbN3wQc5Y_Q",
  },
  {
    title: "This Beautiful Fantastic",
    year: "2017",
    feeling: "Một bộ phim dịu dàng về cô gái sợ hãi thế giới, một ông già cộc cằn, một khu vườn bị bỏ quên và những con người đã vô tình giúp nhau học lại cách sống, cách yêu thương và cách… bay.",
    quote: "Chúng - hoa hướng dương, đi theo đường cong của mặt trời từ bình minh đến hoàng hôn, đón lấy trọn vẹn năng lượng của mỗi ngày.",
    quoteBy: "Alfie",
    tags: ["xem chiều chủ nhật", "khi cần được yên", "phim để xem nhiều lần", "xem một mình"],
    youtubeId: "eZDg-EBC4nA",
  },
];

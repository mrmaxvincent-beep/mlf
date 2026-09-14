export type Phim = {
  title: string;
  year: string;
  feeling: string;
  pairWith: string;
  tags: string[];
  youtubeId?: string; // để trống sẽ hiện khung "đang cập nhật" — điền id trailer YouTube khi sẵn sàng
};

/** Placeholder — thay bằng danh sách phim thật do mlf tuyển chọn trước khi công bố. */
export const phimList: Phim[] = [
  {
    title: "Perfect Days",
    year: "2023",
    feeling: "Xem xong, mình muốn dọn dẹp lại góc làm việc, pha một ấm trà, rồi ngồi yên nhìn nắng đổi màu qua tán lá.",
    pairWith: "một tách trà xanh, uống chậm, không vội",
    tags: ["xem sáng chủ nhật", "khi cần được yên", "rất ít lời", "xem một mình"],
    youtubeId: "QzZBbX5A1FA",
  },
  {
    title: "Little Forest",
    year: "2018",
    feeling: "Cảm giác như vừa được về nhà — tay còn dính đất, bụng còn ấm vì bữa cơm vừa nấu.",
    pairWith: "một bữa cơm tự nấu, ăn một mình cũng được",
    tags: ["xem khi trời mưa", "khi thấy vội", "không có gì xảy ra", "xem một mình"],
    youtubeId: "c7FZlyAeNyI",
  },
  {
    title: "Departures",
    year: "2008",
    feeling: "Một sự tĩnh lặng nặng mà nhẹ, khiến mình nhìn lại những điều mình chưa kịp nói với người đã đi xa.",
    pairWith: "một góc yên tĩnh, không ai làm phiền",
    tags: ["xem tối muộn", "khi mệt mà không ngủ được", "phim để xem hai lần", "xem cùng một người"],
    youtubeId: "3swP6tdmnJk",
  },
  {
    title: "Kikujiro no Natsu",
    year: "1999",
    feeling: "Vừa buồn cười, vừa nghẹn ngào — như một chuyến đi chẳng có đích, nhưng lại chạm được điều gì đó rất thật.",
    pairWith: "một buổi chiều rảnh rỗi, không đặt trước điều gì",
    tags: ["xem sáng chủ nhật", "khi thấy vội", "không có gì xảy ra", "xem cùng một người"],
    youtubeId: "EhUsQvoAeAY",
  },
];

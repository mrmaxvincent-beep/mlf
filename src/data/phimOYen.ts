export type Phim = {
  title: string;
  year: string;
  feeling: string;
  youtubeId?: string; // để trống sẽ hiện khung "đang cập nhật" — điền id trailer YouTube khi sẵn sàng
};

/** Placeholder — thay bằng danh sách phim thật do mlf tuyển chọn trước khi công bố. */
export const phimList: Phim[] = [
  {
    title: "Perfect Days",
    year: "2023",
    feeling: "Xem xong, mình muốn dọn dẹp lại góc làm việc, pha một ấm trà, rồi ngồi yên nhìn nắng đổi màu qua tán lá.",
    youtubeId: "QzZBbX5A1FA",
  },
  {
    title: "Little Forest",
    year: "2018",
    feeling: "Cảm giác như vừa được về nhà — tay còn dính đất, bụng còn ấm vì bữa cơm vừa nấu.",
    youtubeId: "c7FZlyAeNyI",
  },
  {
    title: "Departures",
    year: "2008",
    feeling: "Một sự tĩnh lặng nặng mà nhẹ, khiến mình nhìn lại những điều mình chưa kịp nói với người đã đi xa.",
    youtubeId: "3swP6tdmnJk",
  },
  {
    title: "Kikujiro no Natsu",
    year: "1999",
    feeling: "Vừa buồn cười, vừa nghẹn ngào — như một chuyến đi chẳng có đích, nhưng lại chạm được điều gì đó rất thật.",
  },
];

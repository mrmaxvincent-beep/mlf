export type Part = string | { em: string };

export type DictEntry = {
  word: string;
  origin: string;
  group: string;
  definition: Part[];
  story?: Part[][];
  insight?: Part[][];
  insightClose?: string[];
  variants?: { word: string; desc: string }[];
};

export const entries: DictEntry[] = [
  {
    word: "dừng",
    origin: "Thuần Việt",
    group: "Thời gian · Khoảng nghỉ · Hiện diện",
    definition: [
      "Trạng thái ngưng chuyển động, được chọn có ý thức. Khác với ",
      { em: "nghỉ" },
      " là phục hồi để tiếp tục, và ",
      { em: "bỏ" },
      " là rời đi, dừng là khoảnh khắc một người biết mình đang ở đâu và cho phép điều đó là đủ. Tại MLF, dừng còn là tên của một trục lớn: toàn bộ không gian vật lý tại Măng Đen và Huế được tạo ra để ",
      { em: "một người có thể dừng thật sự." },
    ],
    story: [
      ["Có một con suối chảy qua vách núi, ngày nào cũng chảy. Mùa khô nước nhỏ hơn, mùa mưa nước lớn hơn, nhưng chưa bao giờ ngưng."],
      ["Rồi một năm, phía thượng nguồn có tảng đá lớn lăn xuống, chặn dòng lại. Nước đọng thành vũng. Im lặng hoàn toàn."],
      ["Dân làng lo, tưởng suối chết rồi."],
      ["Chỉ vài tuần sau, bên dưới tảng đá, nước bắt đầu tìm ra lối mới. ", { em: "Sâu hơn, rộng hơn, mát hơn mùa trước." }],
      ["Con suối đã dừng lại đủ lâu để tìm được đường đi của mình."],
    ],
    insight: [
      ["Khi dừng, những tiếng ồn bên ngoài lặng xuống. Và những thứ bên trong, vốn bị tiếng ồn che lấp, bắt đầu nổi lên rõ hơn. Ta tưởng dừng là nguồn cơn của khó chịu."],
      ["Thực ra dừng chỉ là tấm gương. ", { em: "Nó cho ta thấy những thứ đã ở đó từ trước, chỉ là chưa có lúc nào đủ yên để nhìn thấy." }],
    ],
    insightClose: ["Dừng là khi ta trở về", "với chính mình đang ở đây."],
    variants: [
      { word: "khoảng-dừng", desc: "khoảng thời gian giữa hai việc, tự nó đã chứa đựng điều gì đó" },
      { word: "ngày-hiền", desc: "dừng được đặt tên, một ngày mang phẩm chất hiền lành, có địa chỉ tại Măng Đen" },
      { word: "giữa · middle", desc: "chốn dừng giữa hành trình, không gian đang hình thành tại Huế" },
      { word: "ở-yên", desc: "dừng đã thấm vào cách sống, tự nhiên như thở, tự nhiên như suối biết tìm đường" },
    ],
  },
];

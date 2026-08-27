export type Part = string | { em: string };

export type DictEntry = {
  word: string;
  origin: string;
  group: string;
  gloss: string;
  definition: Part[][];
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
    gloss: "khoảng giữa hai hành động",
    definition: [
      ["Ngưng chuyển động, trong một khoảng thời gian nào đó, giữa việc vừa xong và việc sắp tới."],
      [
        "Tiếng Việt có nhiều từ gần với nhau mà mỗi từ mang một sắc thái riêng. Nghỉ thì bao giờ cũng ngầm hiểu là sẽ tiếp tục, bỏ thì đã có ý rời đi, còn dừng để ngỏ cả hai đường. Người dừng vẫn đứng đó, chưa quyết gì cả, và có lẽ chính chỗ chưa quyết ấy mới là điều đáng nói của chữ này.",
      ],
      [
        "Tại mlf, dừng là một trong ba trục: đi · dừng · ở. Cả không gian nơi đây được giữ theo cách để một người có thể dừng thật.",
      ],
    ],
    story: [
      ["Người ta kể ở một vùng núi nọ có con suối chảy qua vách đá, năm này sang năm khác. Mùa khô nước rút xuống, mùa mưa nước dâng lên, nhưng dòng thì chưa bao giờ đổi."],
      ["Rồi một hôm tảng đá trên cao lăn xuống chắn ngang dòng, nước đọng lại thành vũng và cả khúc suối lặng đi. Người trong làng đi ngang thấy vậy, bỡ ngỡ một lát rồi thôi, không tài nào làm gì được."],
      ["Trong những ngày ấy, dưới lớp nước phẳng lì, cát và sỏi cứ chậm rãi tìm chỗ nằm của mình, một việc chẳng ai nhìn thấy và cũng chẳng ai cần nhìn thấy."],
      [
        "Vài tuần sau, bên dưới tảng đá, nước tìm ra một lối khác, sâu hơn, rộng hơn và mát hơn cả mùa trước. Con suối đã nằm yên đủ một quãng để lòng đất mở cho nó con đường mới.",
      ],
    ],
    insight: [
      ["Khi dừng, những tiếng ồn bên ngoài lặng xuống. Và những thứ bên trong, vốn bị tiếng ồn che lấp, bắt đầu nổi lên rõ hơn. Ta tưởng dừng là nguồn cơn của khó chịu."],
      ["Thực ra dừng chỉ là tấm gương. ", { em: "Nó cho ta thấy những thứ đã ở đó từ trước, chỉ là chưa có lúc nào đủ yên để nhìn thấy." }],
    ],
    insightClose: ["Dừng là khi ta trở về", "với chính mình đang ở đây."],
    variants: [
      { word: "khoảng-dừng", desc: "khoảng thời gian giữa hai việc, tự nó đã chứa đựng điều gì đó" },
      { word: "ngày-hiền", desc: "dừng được đặt tên, một ngày mang phẩm chất hiền lành, làm hòa mình-mình, làm hòa mình-người, làm hòa mình-thiên nhiên." },
      { word: "giữa · middle", desc: "chốn dừng ở giữa mọi điều của mlf: giữa đời và đạo, giữa ngày và đêm, giữa mưa và nắng, giữa bận rộn và thảnh thơi..." },
      { word: "ở-yên", desc: "dừng đã thấm vào cách sống, tự nhiên như thở, tự nhiên như suối biết tìm đường" },
    ],
  },
];

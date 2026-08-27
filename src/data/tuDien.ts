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
      [
        "Việc dừng thường mang lại cảm giác khó chịu ngay trong những phút đầu tiên. Khi tiếng bên ngoài lắng xuống rồi thì những gì lâu nay nằm phía dưới bắt đầu hiện ra, một nỗi buồn, một cơn giận, một câu hỏi đã lâu chưa dám hỏi, hoặc một cảm giác trống trải mà mình chưa quen.",
      ],
      ["Cho nên phần lớn chúng ta quay lại với nhịp cũ khá nhanh, và mang theo cái ý nghĩ rằng chính khoảng dừng ấy đã làm sinh ra những điều này."],
      [
        "Kỳ thực chúng vẫn ở đó từ lâu rồi. Chuyển động che chúng đi, còn khoảng lặng thì trả chúng về đúng chỗ của chúng. Ai dừng đủ lâu, qua được mấy phút khó chịu ban đầu, sẽ nhận ra rằng những gì hiện lên trong khoảng yên ấy thật ra là những gì đang chờ mình chăm sóc.",
      ],
    ],
    insightClose: ["Dừng là lúc ta gặp lại chính mình đang ở đây."],
    variants: [
      { word: "khoảng-dừng", desc: "khoảng thời gian giữa hai việc, tự nó đã chứa đựng điều gì đó" },
      { word: "ngày-hiền", desc: "dừng được đặt tên, một ngày mang phẩm chất hiền lành, làm hòa mình-mình, làm hòa mình-người, làm hòa mình-thiên nhiên." },
      { word: "giữa · middle", desc: "chốn dừng ở giữa mọi điều của mlf: giữa đời và đạo, giữa ngày và đêm, giữa mưa và nắng, giữa bận rộn và thảnh thơi..." },
      { word: "ở-yên", desc: "dừng đã thấm vào cách sống, tự nhiên như thở, tự nhiên như suối biết tìm đường" },
    ],
  },
  {
    word: "yên",
    origin: "Thuần Việt",
    group: "Trạng thái · Tâm · Nơi chốn",
    gloss: "trạng thái mọi thứ tự nó đủ",
    definition: [
      ["Trạng thái không có gì xáo động, mọi thứ giữ nguyên chỗ của nó và tự thế đã đủ."],
      [
        "Chữ yên trong tiếng Việt đi được cả hai đường, ra ngoài và vào trong, mà người mình dùng lẫn nhau đến mức chẳng còn thấy đó là hai chuyện khác. Một buổi chiều yên là chuyện của cảnh vật, một người ngồi yên là chuyện của thân, lòng yên lại là chuyện của tâm. Ba thứ ấy tiếng Việt gọi chung một chữ, và có lẽ người xưa đã thấy trước rằng chúng nương nhau mà có, cảnh lặng xuống thì thân dễ ngồi yên, thân yên rồi thì lòng mới lắng theo.",
      ],
      [
        "Chữ này còn nằm trong nhiều lời chúc quen thuộc, bình yên, an yên, yên ổn, thứ người ta mong cho nhau trước cả sức khỏe và tiền bạc. Kỳ thực yên là thứ khó tìm, mà lại dễ nhận ra. Một buổi sáng nào đó ngồi uống trà thấy trong người nhẹ đi, mình biết nó đang có mặt.",
      ],
      [
        "Tại mlf, yên là chữ nằm trong tên của cả triết lý. Ở-yên nghĩa là ở lại trong trạng thái ấy, đủ lâu để nó trở thành cách sống.",
      ],
    ],
    story: [
      ["Người ta kể có ông thầy dạy trò cách nhìn xuống đáy giếng. Trò múc nước lên thấy đục, bèn khuấy mạnh cho cặn tan ra, càng khuấy nước càng đục thêm."],
      ["Ông thầy bảo cứ để đó."],
      ["Trò đặt gàu nước bên bậc thềm rồi đi làm việc khác. Buổi chiều quay lại thì cặn đã lắng xuống hết, nước trong đến mức nhìn thấy cả đáy gàu, thấy luôn cả mặt mình soi trên đó."],
      ["Cặn đã lắng lại trong gàu, nằm yên đáy nước. Điều làm nước trong lại là khoảng thời gian không ai đụng vào."],
    ],
    insight: [
      [
        "Nhiều người tìm yên bằng cách sắp xếp cho xong mọi chuyện trước đã. Trả hết việc, giải quyết hết những gì còn dở, rồi mới ngồi xuống. Nghĩ vậy thì hợp lý, có điều đời sống hiếm khi cho ai một ngày mà mọi thứ đều xong.",
      ],
      [
        "Yên vẫn đến được trong lúc việc còn đó và lo lắng còn đó, vào lúc mình thôi cầm chúng lên xem đi xem lại. Giống gàu nước ban chiều, cặn ở nguyên trong gàu mà nước vẫn trong, vì đã có một quãng không ai chạm tới.",
      ],
      [
        "Yên hóa ra là chuyện của bàn tay mình nhiều hơn là chuyện của hoàn cảnh. Ai buông được cái tay đang khuấy thì cũng vừa lúc thấy mọi thứ trong ra, kể cả gương mặt mình trong đó.",
      ],
    ],
    insightClose: ["Yên là thôi khuấy, và mọi thứ tự tìm về chỗ của nó."],
    variants: [
      { word: "ở-yên", desc: "ở lại trong trạng thái yên đủ lâu để nó thành cách sống, không còn là một lúc nghỉ ngơi" },
      { word: "mặt hồ phẳng", desc: "hình ảnh của yên, mặt nước lặng thì soi rõ, cũng như tâm lặng thì thấy được mình" },
      { word: "một-ngày-ở-yên", desc: "một ngày dành riêng cho yên, có mặt cùng nhau mà chẳng ai đòi hỏi gì ở ai" },
      { word: "be-still", desc: "không gian làm việc với tâm, nơi yên được thực hành như một việc mỗi ngày" },
      { word: "khoảng-dừng", desc: "quãng thời gian không ai đụng vào, đủ để mọi thứ lắng về chỗ của nó" },
    ],
  },
];

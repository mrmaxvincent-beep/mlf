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
        "Chữ này còn nằm trong nhiều lời chúc quen thuộc, bình yên, an yên, yên ổn, thứ người ta mong cho nhau trước cả sức khỏe và tiền bạc. Kỳ thực yên là thứ khó tìm, mà lại dễ nhận ra. Một sáng nào đó ngồi uống trà thấy trong người nhẹ đi, mình biết nó đang có mặt.",
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
    variants: [
      { word: "ở-yên", desc: "ở lại trong trạng thái yên đủ lâu để nó thành cách sống, không còn là một lúc nghỉ ngơi" },
      { word: "mặt hồ phẳng", desc: "hình ảnh của yên, mặt nước lặng thì soi rõ, cũng như tâm lặng thì thấy được mình" },
      { word: "một-ngày-ở-yên", desc: "một ngày dành riêng cho yên, có mặt cùng nhau mà chẳng ai đòi hỏi gì ở ai" },
      { word: "be-still", desc: "không gian làm việc với tâm, nơi yên được thực hành như một việc mỗi ngày" },
      { word: "khoảng-dừng", desc: "quãng thời gian không ai đụng vào, đủ để mọi thứ lắng về chỗ của nó" },
    ],
  },
  {
    word: "hiền",
    origin: "Thuần Việt và Hán Việt",
    group: "Tính cách · Quan hệ · Tâm thế",
    gloss: "phẩm chất của người đã đủ bên trong",
    definition: [
      ["Tính nết thuận hòa, dễ chịu với người và với việc, ít khi làm ai phải đề phòng."],
      [
        "Chữ này có hai gốc và hai gốc ấy khác nhau khá xa. Trong tiếng Hán, hiền là bậc hiền tài, người có đức có tài mà xưa nay vẫn được coi là nguyên khí của một xứ. Sang tiếng Việt đời thường, hiền lại nhẹ đi nhiều, thành ra tính nết dễ bảo, thành lời khen dành cho đứa trẻ ngoan hoặc con vật quen người.",
      ],
      [
        "Có lẽ vì cách dùng ấy mà bây giờ nghe ai được khen hiền, người ta hay nghĩ tới một người mềm yếu, thiếu phần sắc bén. Gốc chữ vốn nói điều ngược lại, và trong tiếng Việt vẫn còn giữ dấu vết, nhìn vào những chỗ như hiền tài hay hiền nhân thì thấy.",
      ],
      [
        "Tại mlf, hiền là chữ đặt cho một ngày. Ngày-hiền là ngày mà mọi thứ được để nguyên như nó vốn có, một ngày để làm hòa với mình, với người và với thiên nhiên.",
      ],
    ],
    story: [
      [
        "Trong làng có người đàn ông ai cũng gọi là hiền. Ông ít nói, gặp ai cũng cười, con nít trong xóm hay chạy vào vườn ông hái ổi mà chưa lần nào bị đuổi. Người ta quen với sự dễ dãi ấy đến mức có lúc nghĩ chuyện gì ông cũng xuôi theo.",
      ],
      ["Rồi có người trong họ tính bán mảnh đất hương hỏa. Giấy tờ chuẩn bị xong xuôi, ai cũng đoán ông sẽ ký cho êm chuyện."],
      ["Ông ngồi nghe hết, rót thêm nước cho khách, rồi nói rằng đất này ông giữ. Nói xong ông vẫn rót nước, vẫn cười như mọi khi, mà câu chuyện thì dừng lại ở đó."],
      ["Về sau người trong làng hay nhắc chuyện này. Ông hiền thật, có điều cái hiền của ông nằm ở chỗ khác với người ta vẫn tưởng."],
    ],
    insight: [
      [
        "Người ta hay xếp hiền vào phía thiếu, thiếu tham vọng, thiếu cá tính, thiếu sức chống đỡ với đời. Xếp như vậy cũng dễ hiểu, vì người hiền thường ít tranh, mà trong mắt số đông thì ai không tranh nghĩa là người ấy đuối.",
      ],
      [
        "Nhìn kỹ thì thấy điều khác. Người còn thiếu bên trong mới phải giành lấy phần hơn, phải nói to hơn một chút, phải cho người khác biết mình là ai. Ai đã đủ rồi thì thôi những việc ấy, và cái thôi đó nhìn từ ngoài vào trông giống như hiền lành.",
      ],
      [
        "Hiền hóa ra là dấu hiệu của một người đã yên với chính mình. Trong lòng chẳng còn gì thúc phải chứng minh, nên với ai cũng nhẹ được, mà đến lúc cần giữ điều gì thì vẫn giữ nguyên, chẳng cần lớn tiếng.",
      ],
    ],
    variants: [
      { word: "ngày-hiền", desc: "một ngày mang phẩm chất ấy, để làm hòa với mình, với người, với thiên nhiên" },
      { word: "ở-yên", desc: "hiền đã thành cách sống, thuận với mình và thuận với nơi mình đang ở" },
      { word: "không gian của sự không đòi hỏi", desc: "chỗ mà người ta được hiền, vì chẳng ai yêu cầu mình phải khác đi" },
      { word: "vừa-vặn", desc: "mức đủ của một người, chỗ mà lòng thôi đòi thêm" },
      { word: "touch", desc: "chạm vào điều thuần nhất, cách hiền được thực hành qua bàn tay" },
    ],
  },
  {
    word: "chậm",
    origin: "Thuần Việt",
    group: "Thời gian · Nhịp · Chuyển động",
    gloss: "nhịp của riêng một thứ",
    definition: [
      ["Đi hết một quãng đường hay một việc trong khoảng thời gian dài hơn mức người ta vẫn quen."],
      [
        "Điều đáng để ý ở chữ này là nó luôn phải so với một cái gì đó. Chậm hơn tàu, chậm hơn hẹn, chậm hơn bạn cùng lớp. Tự thân chữ chậm chẳng có mức nào cả, và mỗi lần dùng nó là một lần mình mượn tạm nhịp của người khác làm thước.",
      ],
      [
        "Tiếng Việt xếp chữ này về phía thiếu khá nhiều, chậm chạp, chậm hiểu, chậm tiến. Có lẽ vì vậy mà nghe ai bảo mình chậm, phản ứng đầu tiên thường là muốn phân trần.",
      ],
      [
        "Tại mlf, chuyện tốc độ được thay bằng chuyện nhịp. Một ngày ở đây dài ngắn tùy người, và điều duy nhất được giữ là để mỗi người đi theo nhịp của mình.",
      ],
    ],
    story: [
      [
        "Người làm đàn kể rằng gỗ tốt nhất nằm trên những sườn núi cao và lạnh, chỗ mà cây phải mất nhiều năm mới lớn thêm được một chút. Thân cây ở đó nhỏ, nhìn qua thì thua xa cây dưới thấp.",
      ],
      [
        "Cây dưới thấp đủ nắng đủ nước, năm nào cũng vươn nhanh, vài mùa đã cao lớn hơn hẳn. Đến khi xẻ ra thì thớ gỗ thưa, thân xốp, đóng bàn ghế thì được, làm đàn thì tiếng đục.",
      ],
      [
        "Còn cây trên núi, mỗi năm thêm một vòng mỏng, vòng nọ sát vòng kia. Gỗ ấy nặng tay, gõ vào nghe trong, người làm đàn phải đợi hàng chục năm mới có một cây vừa ý.",
      ],
      ["Cùng một khoảng thời gian, hai cây nhận được hai thứ khác nhau. Cây kia đạt chiều cao, cây này nhận mật độ."],
    ],
    insight: [
      [
        "Sống chậm mấy năm nay thành một lời khuyên quen thuộc, nghe ở đâu cũng gặp. Nghe mãi rồi thì chậm hóa ra lại thành một chuẩn mới, ai chưa chậm được thì thấy mình còn thiếu, và câu chuyện quay về đúng chỗ cũ.",
      ],
      [
        "Cây trên núi mọc đúng theo những gì đất và khí hậu ở đó cho phép, và cái nhịp ấy chính là nhịp của nó. Người ta đứng từ dưới thấp nhìn lên rồi gọi là chậm.",
      ],
      [
        "Ai tìm được nhịp của mình thì chữ chậm cũng nhẹ đi. Có việc cần làm nhanh thì làm nhanh, có việc cần một quãng dài thì cứ để nó dài, và trong lòng thôi phải hỏi mình đang đứng ở đâu so với người khác.",
      ],
    ],
    variants: [
      { word: "nhịp", desc: "chữ mlf dùng thay cho tốc độ, vì mỗi người mỗi việc có một nhịp riêng" },
      { word: "thong dong", desc: "đi theo nhịp của mình, làm nhiều hay ít vẫn thấy trong lòng rộng" },
      { word: "hàm-dưỡng", desc: "nuôi bên trong theo lối thầm lặng, thứ chỉ dày lên qua nhiều mùa" },
      { word: "ngày-hiền", desc: "một ngày dài ngắn tùy người, chỗ mà nhịp của mỗi khách được để nguyên" },
      { word: "để chín", desc: "đợi một thứ đủ ngày của nó, việc mà thời gian làm thay cho mình" },
    ],
  },
  {
    word: "thương",
    origin: "Thuần Việt",
    group: "Tình cảm · Quan hệ · Cách nhìn",
    gloss: "cái nhìn giữ một thứ lại như nó vốn có",
    definition: [
      ["Lòng nghiêng về phía một người hay một vật, muốn giữ gìn và muốn điều lành đến với nó."],
      [
        "Chữ này đi được rất xa trong tiếng Việt. Thương con, thương người dưng, thương cái áo mặc đã sờn, thương một buổi chiều đã qua. Cùng một chữ mà dùng cho người thân, cho người lạ, cho vật vô tri, và trong lời ru còn dùng cho cả những thứ chẳng thuộc về ai.",
      ],
      [
        "Người Việt nói thương nhiều hơn nói yêu. Yêu thường có đối tượng rõ, có phần muốn giữ cho riêng mình. Thương thì rộng hơn, nhẹ hơn, thương ai là thấy người ấy đáng được che chở, thế thôi.",
      ],
      [
        "Tại mlf, thương nằm trong cách người ta đối với đồ đạc và cây cối quanh mình. Một cái ghế gãy chân được chữa lại, một chiếc áo cũ thành tấm giẻ lau, những việc nhỏ mà ngày nào cũng có.",
      ],
    ],
    story: [
      [
        "Ở nhà quê ngày trước, cái nồi đất nứt thì người ta không bỏ đi ngay. Có ông thợ đi rong qua làng, mang theo cái đục nhỏ và mấy sợi dây đồng, khoan hai bên vết nứt rồi buộc lại cho khít.",
      ],
      ["Nồi vá xong nhìn xấu hơn nồi mới, trên thân có hàng đinh đồng chạy dọc như một đường khâu. Người trong nhà vẫn dùng nó nấu cơm thêm nhiều năm nữa."],
      ["Đứa cháu lớn lên thấy cái nồi ấy trong bếp, hỏi bà sao chẳng mua nồi mới. Bà nói nồi này nấu quen tay rồi."],
      ["Về sau đứa cháu mới hiểu ra rằng bà giữ cái nồi cũng như bà giữ nhiều thứ khác trong nhà. Cái nào còn dùng được thì bà để nó ở lại thêm một quãng."],
    ],
    insight: [
      [
        "Người ta hay nghĩ thương là một thứ tình cảm dâng lên trong lòng, có lúc mạnh có lúc nhạt, tùy theo đối tượng có đáng thương hay không. Nghĩ vậy thì thương thành ra phụ thuộc vào người kia, và mình chỉ việc chờ xem lòng mình phản ứng thế nào.",
      ],
      [
        "Bà giữ cái nồi nứt vì bà nhìn nó theo một cách khác. Trong mắt bà cái nồi vẫn còn phần dùng được, và phần ấy đủ để nó ở lại. Cách nhìn ấy bà dùng cho cả cái nồi lẫn người trong nhà.",
      ],
      [
        "Thương gần với một cách nhìn hơn là một cảm xúc. Ai quen nhìn ra chỗ còn lành trong một vật cũ thì cũng quen nhìn ra chỗ còn lành trong một người, kể cả trong chính mình những hôm thấy mình chẳng ra gì.",
      ],
    ],
    variants: [
      { word: "thuần upcycle", desc: "hồi sinh vật cũ, giữ lại phần còn dùng được để nó kể một chuyện mới" },
      { word: "chăm chút", desc: "cách bàn tay chạm vào mọi việc khi trong lòng có thương" },
      { word: "không gian của sự không đòi hỏi", desc: "chỗ mà một người được nhìn theo lối ấy, chẳng cần hay hơn mới được ở lại" },
      { word: "nương đỡ", desc: "việc mlf làm với khách, đứng bên cạnh chứ chẳng đứng phía trước" },
      { word: "vết nứt được trám lại", desc: "hình ảnh quen của mlf, chỗ hỏng vẫn còn đó mà vật thì lành lại" },
    ],
  },
];

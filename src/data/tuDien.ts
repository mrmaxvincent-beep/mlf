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
  {
    word: "đủ",
    origin: "Thuần Việt",
    group: "Mức độ · Tâm · Đời sống",
    gloss: "chỗ mà không cần thêm",
    definition: [
      ["Có tới mức cần có, thêm vào nữa cũng chẳng để làm gì."],
      [
        "Chữ này nghe qua tưởng là chuyện của số lượng, mà dùng thì lại thấy nó nghiêng về phía trong lòng nhiều hơn. Hai người cùng có một mảnh vườn như nhau, người này thấy đủ, người kia thấy còn thiếu vài sào nữa.",
      ],
      [
        "Tiếng Việt còn dùng chữ này cho những thứ chẳng đo được. Đủ duyên, đủ ngày, đủ nắng. Cách nói ấy hàm ý rằng có một mức nào đó tự nó tới, và việc của mình là nhận ra lúc nó đã tới.",
      ],
      [
        "Tại mlf, đủ là chỗ không đòi hỏi ai phải hay hơn, và một người bước vào đây được xem là đã đủ ngay từ lúc bước vào.",
      ],
    ],
    story: [
      [
        "Có người đàn ông đi làm xa quê nhiều năm, năm nào cũng tính làm thêm một mùa nữa rồi về. Ban đầu ông tính đủ tiền cất cái nhà thì về, cất xong lại thấy nên có mảnh vườn, có vườn rồi thì nghĩ tới việc lo cho con ăn học tới nơi.",
      ],
      [
        "Một mùa mưa nọ ông về thăm nhà mấy hôm. Buổi chiều ngồi ngoài hiên uống nước với mẹ, bà kể chuyện trong xóm, chuyện con mèo mới đẻ, chuyện cây khế năm nay sai quả.",
      ],
      ["Ông ngồi nghe, nhìn ra sân, thấy mấy con gà bới đất dưới gốc khế. Bấy giờ ông mới nhớ ra rằng đã lâu lắm rồi ông chẳng ngồi như vậy."],
      ["Ông ở lại quê từ mùa đó. Nhà thì vẫn là cái nhà cũ, vườn cũng chưa có, mà buổi chiều nào ông cũng ngồi ngoài hiên."],
    ],
    insight: [
      [
        "Đủ hay bị hiểu là một cột mốc nằm ở phía trước, tới đó thì dừng. Hiểu vậy thì mình sống trong tâm thế đang trên đường, và cái mốc kia cứ lùi ra xa mỗi khi mình lại gần.",
      ],
      [
        "Người đàn ông ngoài hiên hôm ấy chẳng có thêm được gì so với buổi sáng. Ông vẫn ngần ấy tiền, ngần ấy đất. Thứ thay đổi là ông nhìn thấy cái đang có, thay vì nhìn cái còn thiếu.",
      ],
      [
        "Đủ vốn là một cái thấy hơn là một con số. Có người có rất nhiều mà cả đời chưa thấy đủ, cũng có người ngồi bên hiên nhà một buổi chiều thì thấy. Cái thấy ấy thì tới bất cứ lúc nào.",
      ],
    ],
    variants: [
      { word: "vừa-vặn", desc: "mức hợp với mình, chỗ mà thêm vào cũng chẳng làm mình dễ chịu hơn" },
      { word: "không gian của sự không đòi hỏi", desc: "chỗ mà một người được xem là đã đủ ngay từ lúc bước vào" },
      { word: "đủ duyên", desc: "lúc mọi thứ vừa tới chỗ của nó, việc mà mình chờ chứ chẳng sắp đặt được" },
      { word: "dù chỉ là, cũng đủ", desc: "lối nói quen của mlf, một điều nhỏ nhưng đủ cho ngày dài" },
      { word: "ở-yên", desc: "sống lâu trong cái thấy ấy, tới lúc nó thành nếp chứ chẳng còn là một buổi chiều" },
    ],
  },
  {
    word: "về",
    origin: "Thuần Việt",
    group: "Chuyển động · Nơi chốn · Thuộc về",
    gloss: "đi tới chỗ vốn thuộc về mình",
    definition: [
      ["Đi tới một nơi mà mình đã từng ở, hoặc một nơi thân thuộc với mình."],
      [
        "Tiếng Việt phân biệt đi và về khá rõ. Đi thì tới đâu cũng đi được, còn về thì chỉ về được những chỗ nhất định. Người ta đi Sài Gòn mà về quê, đi làm mà về nhà. Chữ về mang sẵn trong nó một mối ràng buộc có từ trước, và cũng vì vậy mà nghe nhẹ hơn chữ đi.",
      ],
      [
        "Chữ này còn được dùng cho chuyến đi cuối cùng của một đời người. Người mình nói cụ đã về với ông bà, cách nói ấy đặt cái chết vào cùng một chỗ với việc về nhà, về lại nơi mình đã bắt đầu.",
      ],
      [
        "Tại mlf, khách tới đây được gọi là về: về với thiên nhiên, về với mình, về với bữa cơm nhà, về với những gì gần gũi thân quen.",
      ],
    ],
    story: [
      [
        "Bếp nhà quê ngày trước hiếm khi tắt hẳn. Nấu xong bữa tối, người ta cời than lại thành một đống nhỏ, phủ tro lên trên, thế là lửa nằm đó tới sáng.",
      ],
      [
        "Sáng ra vạch tro, thổi vài hơi, bếp đỏ lại. Nhà nào để nguội hẳn thì phải cầm cái đóm chạy sang hàng xóm xin lửa. Chuyện thấy nhỏ, mà người biết ý cũng ngại việc xin lửa.",
      ],
      [
        "Một người con đi làm xa, mấy năm mới về một lần. Xe đò tới bến thường đã khuya, đi bộ thêm quãng nữa mới tới nhà. Vào tới bếp thì thấy tro còn ấm, mẹ đã ủ từ chiều, nồi cơm để bên cạnh đậy cái rá.",
      ],
      ["Anh hỏi sao mẹ biết hôm nay con về mà ủ than."],
      ["Bà nói hôm nào bà cũng ủ."],
    ],
    insight: [
      [
        "Khi đi xin việc thì phải qua vòng tuyển, vào hội nhóm thì phải hợp với người ta. Sống lâu trong nếp ấy rồi thì đi đâu người ta cũng mang theo cái ý nghĩ rằng để có một chỗ thì mình phải bỏ ra một thứ tương xứng.",
      ],
      [
        "Bà mẹ ủ than mỗi chiều dù con ở xa hay gần. Bà ủ vì tối nào bà cũng ủ. Nếu đêm ấy anh về thì có lửa, nếu anh không về thì sáng mai bà vẫn vạch tro nhóm bếp như thường.",
      ],
      [
        "Chỗ dành cho anh có sẵn từ trước khi anh bước vào, và nó không dựa vào việc anh mấy năm mới ghé, làm ăn ra sao, về tay không hay mang quà. Anh về là ngồi xuống ăn cơm.",
      ],
      [
        "Đó là chỗ khác nhau giữa đi và về. Đi thì tới đâu cũng phải xem người ta có nhận mình hay không. Về thì chỗ ấy giữ cho mình rồi, chỉ bước vào.",
      ],
    ],
    insightClose: ["Về là trở lại nơi luôn có chỗ cho mình."],
    variants: [
      { word: "chốn về", desc: "chữ mlf dùng thay cho điểm đến, nơi mà người ta về chứ chẳng phải nơi để tới" },
      { word: "trở về", desc: "việc quay lại điểm gốc, có thể làm bất cứ lúc nào trong ngày" },
      { word: "vườn-tâm", desc: "chốn về nằm bên trong, chỗ mà một người chăm mỗi ngày một chút" },
      { word: "gốc", desc: "điểm mà mọi chuyến đi tính từ đó, thứ mình mang theo chứ chẳng để lại" },
      { word: "ở-yên", desc: "về rồi ở lại, tới lúc chẳng còn thấy mình đang đi hay đang về nữa" },
    ],
  },
  {
    word: "quen",
    origin: "Thuần Việt",
    group: "Thời gian · Quan hệ · Nếp sống",
    gloss: "thứ có được sau khi ở lại đủ lâu",
    definition: [
      ["Biết rõ tới mức làm mà chẳng phải nghĩ, gặp mà chẳng phải dè."],
      [
        "Chữ này dùng cho tay, cho chỗ, cho người. Quen tay, quen chỗ, quen đường, người quen. Cái gì cũng phải qua một quãng thời gian mới quen được, và tiếng Việt gói cả quãng thời gian ấy vào một chữ.",
      ],
      [
        "Người mình cũng dùng chữ này theo nghĩa xấu. Quen thói, quen mui, ăn quen thì hết ngon. Nghe vậy thì quen thành thứ làm mòn đi cái ban đầu.",
      ],
      [
        "Tại mlf, quen là thứ chỉ có được khi ở lại. Khách về nhiều lần thì biết chỗ ngồi hợp với mình, biết giờ nào vườn có nắng.",
      ],
    ],
    story: [
      ["Cái cuốc dùng lâu thì cán mòn theo tay người cầm. Chỗ ngón cái tì vào lõm xuống một chút, chỗ lòng bàn tay bóng lên."],
      [
        "Người trong nhà ai cũng có cái cuốc của mình. Cầm nhầm cái của người khác thì cuốc vẫn cuốc được, chỉ là tay thấy vướng, làm một buổi về mỏi hơn thường.",
      ],
      [
        "Ông cụ trong xóm có cái cuốc dùng ba mươi năm. Cán gãy hai lần, thay cán mới, lưỡi mòn đi quá nửa. Con cháu bảo mua cái mới cho nhẹ, ông nói cái này quen tay rồi.",
      ],
      ["Cái cuốc ấy hình như chẳng còn bộ phận nào của ba mươi năm trước. Mà tay ông thì vẫn nhận ra nó."],
    ],
    insight: [
      [
        "Thời nay người ta sợ quen. Sợ quen việc thì chai đi, quen người thì hết mặn, quen chỗ thì cùn. Nên cứ đổi, đổi việc đổi chỗ đổi cả cách sống, để giữ lấy cái cảm giác mới mẻ ban đầu.",
      ],
      [
        "Cảm giác mới mẻ ấy đúng là chỉ có một lần. Có điều lần đầu tới một chỗ thì mình còn đang dò, còn để ý xem nên đứng đâu, nên nói gì. Phải vài lần sau mới thôi để ý những thứ đó, và bấy giờ mới nhìn ra chỗ ấy có gì.",
      ],
      ["Cán cuốc lõm xuống vì ba mươi năm bàn tay tì vào một chỗ. Không cách nào có được cái lõm ấy nhanh hơn."],
      [
        "Những thứ đáng nhất trong đời hầu như đều nằm phía sau chữ quen. Một người hiểu mình, một nghề làm tới nơi, một chỗ mà mình bước vào là biết ngồi đâu.",
      ],
      ["Quen là thứ chỉ thời gian cho được."],
    ],
    variants: [
      { word: "ở lại", desc: "trục thứ ba của mlf, chỗ mà mọi thứ quen dần theo năm tháng" },
      { word: "hàm-dưỡng", desc: "nuôi bên trong theo lối thầm lặng, thứ dày lên qua nhiều mùa" },
      { word: "bén rễ", desc: "lúc một thứ thôi là khách, bắt đầu thuộc về chỗ nó đang đứng" },
      { word: "nhịp", desc: "cái quen của một ngày, tay chân biết trước việc mình sắp làm" },
      { word: "cộng đồng ở-yên", desc: "những người ở lại cùng nhau đủ lâu để thành người quen" },
    ],
  },
  {
    word: "mở",
    origin: "Thuần Việt",
    group: "Hành động · Tâm · Chuyển hóa",
    gloss: "việc xảy ra khi đã đủ điều kiện",
    definition: [
      ["Làm cho thông, cho thấy được phần bên trong, cho ra vào được."],
      [
        "Tiếng Việt dùng chữ này cho tay chân lẫn cho lòng. Mở cửa, mở nắp, mở gói. Rồi mở lòng, mở mắt, mở mang. Hai loại ấy trông giống nhau mà làm thì khác hẳn, cửa thì đẩy là được, còn lòng thì đẩy càng mạnh càng khép.",
      ],
      [
        "Chữ này còn dùng cho những thứ chẳng có ai tác động. Trời mở, hoa mở, con đường mở ra sau khúc quanh. Lối nói ấy hàm ý rằng có những cái mở tự tới, việc của mình là ở đó lúc nó tới.",
      ],
      [
        "Tại mlf, mở là việc người ta làm với chính mình chứ chẳng phải việc mlf làm cho ai. chén-trà-tâm, trò-chuyện-tâm-thức, khai-tâm… đều là chỗ ngồi xuống nói chuyện, còn mở tới đâu thì tùy người.",
      ],
    ],
    story: [
      ["Hạt sen để lâu năm trong bùn vẫn nảy được. Người ta tìm thấy hạt sen cổ trong đầm cạn, đem gieo thì vẫn lên cây."],
      [
        "Vỏ hạt sen cứng, kín, nước không vào được. Có người muốn cho nhanh thì mài vỏ, khía một đường cho nước thấm. Cách ấy được, mà cũng hay hỏng, khía sâu quá thì mầm chết trong hạt.",
      ],
      ["Người trồng lâu năm làm cách khác. Ngâm hạt trong nước ấm, thay nước mỗi ngày, để đó. Ngày thứ ba thứ tư vỏ tự nứt một đường nhỏ, mầm trắng lú ra."],
      ["Cái vỏ ấy giữ cho hạt sống được mấy trăm năm dưới bùn. Tới lúc nó nứt là lúc bên trong đã sẵn sàng."],
    ],
    insight: [
      [
        "Người ta hay giục nhau mở lòng ra, cứ như đó là việc chỉ cần quyết là làm được. Ai chưa mở được thì thấy mình có lỗi, thấy mình đóng kín, khó gần.",
      ],
      [
        "Chỗ nào khép lại đều có lý do của chỗ ấy. Cái vỏ cứng kia là thứ giữ cho hạt sống qua mấy trăm mùa nước. Đòi nó mở sớm hơn thì cũng chẳng khác gì lấy dao khía vào.",
      ],
      ["Việc làm được là ngâm nước ấm và thay nước mỗi ngày. Ngồi với người ta, hỏi han vài câu, để đó. Ngày nào cũng vậy. Rồi tới lúc nào đó tự nó nứt."],
      [
        "Với mình cũng thế thôi. Có những chuyện năm nay chưa nói ra được, sang năm ngồi kể lại thấy nhẹ tênh. Ở giữa hai lúc ấy chẳng có gì to tát xảy ra, chỉ có thời gian và một chỗ ấm áp.",
      ],
      ["Mở là việc tự tới, khi bên trong đã đủ ngày."],
    ],
    variants: [
      { word: "khai tâm", desc: "ngồi xuống nói chuyện cùng nhau, mở tới đâu thì tùy người" },
      { word: "phía sáng", desc: "chỗ ánh sáng lọt vào sau khi một điều gì đó vừa hé ra" },
      { word: "nương đỡ", desc: "việc mlf làm, ở bên cạnh và thay nước mỗi ngày" },
      { word: "để chín", desc: "đợi một thứ đủ ngày của nó, việc mà thời gian làm thay cho mình" },
      { word: "đủ duyên", desc: "lúc mọi thứ vừa tới chỗ của nó, thứ chờ được mà sắp đặt thì khó" },
    ],
  },
  {
    word: "giữa",
    origin: "Thuần Việt",
    group: "Nơi chốn · Thời gian · Khoảng",
    gloss: "quãng chưa xong, và cũng là quãng đang sống",
    definition: [
      ["Khoảng nằm ở phần trong của hai đầu, cách đều hoặc gần đều cả hai."],
      [
        "Chữ này dùng cho cả chỉ nơi chốn lẫn thời gian. Giữa nhà, giữa đồng, giữa hai hàng cây. Rồi giữa trưa, giữa mùa, giữa chừng câu chuyện. Chỗ nào lúc nào cũng có một cái giữa, mà người mình ít khi để ý tới nó, vì mắt thường nhìn vào hai đầu.",
      ],
      [
        "Trong lối nói hằng ngày, giữa hay đi với những chuyện dở dang. Bỏ giữa chừng, đứng giữa đường, mắc kẹt ở giữa. Nghe những cụm ấy thì thấy giữa là chỗ người ta muốn qua cho nhanh.",
      ],
      [
        "Tại mlf, giữa là tên đặt cho một chốn dừng ở Huế. Giữa đời và đạo, giữa ngày và đêm, giữa mưa và nắng, giữa bận rộn và thảnh thơi.",
      ],
    ],
    story: [
      ["Đường lên rẫy ngày trước xa, đi bộ mất nửa buổi. Quãng giữa có một cây đa, gốc to mấy người ôm, dưới gốc kê mấy hòn đá phẳng."],
      [
        "Ai đi ngang cũng ngồi. Người lên rẫy ngồi nghỉ chân trước khi leo dốc, người từ rẫy về ngồi cho ráo mồ hôi rồi mới vào làng. Có bà bán nước chè đặt gánh ở đó, chỉ một nồi nước với mấy cái bát.",
      ],
      [
        "Chỗ ấy chẳng phải làng, cũng chẳng phải rẫy. Không ai ở đó, không ai làm gì ở đó. Vậy mà chuyện trong xã hầu như đều đi qua gốc đa, ai muốn biết tin gì cứ ra đó ngồi một lát.",
      ],
      ["Sau này người ta làm đường bê tông, chạy xe máy lên rẫy mười lăm phút. Cây đa vẫn còn, gánh nước chè thì thôi."],
    ],
    insight: [
      [
        "Đời người tính bằng hai đầu. Tốt nghiệp, cưới xin, lên chức, mua được nhà. Người ta nhớ những mốc ấy, kể lại cũng kể những mốc ấy. Còn quãng ở giữa thì gọi chung là đang cố gắng.",
      ],
      [
        "Mà ngồi tính lại thì phần lớn một đời nằm ở quãng giữa. Những buổi sáng lặp đi lặp lại, những chiều đi làm về, những năm chưa tới đâu cả. Cộng hết lại thì các cái mốc chỉ được vài ngày.",
      ],
      [
        "Gốc đa ngày trước không dẫn đi đâu. Nó nằm ở quãng giữa, và vì nằm ở đó nên nó thành chỗ người ta gặp nhau. Bỏ nó đi thì đường vẫn thông, chỉ là hết chỗ ngồi.",
      ],
      ["Ai coi quãng giữa là đoạn phải vượt qua thì cả đời sống như chưa tới. Ai chịu ngồi xuống ở giữa thì mới nhận ra đó là chỗ mình đang sống."],
      ["Giữa là chỗ đời mình nằm hầu hết ở đó."],
    ],
    variants: [
      { word: "giữa · middle", desc: "chốn dừng ở Huế, chỗ ngồi lại giữa hai đầu của một ngày" },
      { word: "khoảng-dừng", desc: "quãng giữa hai việc, tự nó đã chứa điều gì đó" },
      { word: "khoảng giữa hai hơi thở", desc: "cái giữa nhỏ nhất, có sẵn trong người, lúc nào cũng dùng được" },
      { word: "giữa đời thường", desc: "lối nói quen của mlf, chỗ mà ở-yên được thực hành" },
      { word: "trạm dừng chân", desc: "chỗ nghỉ trên đường, ngồi một lát rồi lại đi" },
    ],
  },
  {
    word: "nhìn",
    origin: "Thuần Việt",
    group: "Giác quan · Chú ý · Nhận biết",
    gloss: "việc mình làm trước khi thấy được gì",
    definition: [
      ["Hướng mắt về một phía và giữ ở đó."],
      [
        "Tiếng Việt tách nhìn với thấy ra hai chữ, và hai việc ấy quả là khác nhau. Nhìn là việc mình chủ động làm, thấy thì tới lúc nào không biết trước. Người ta nói nhìn mãi mới thấy, câu ấy hàm ý rằng ở giữa hai việc có một quãng.",
      ],
      [
        "Chữ này còn dùng cho những chuyện chẳng liên quan tới mắt. Nhìn nhận, nhìn xa, nhìn ra vấn đề. Rồi cả cách nói nhìn một người bằng con mắt nào, chỗ ấy thì nhìn thành ra chuyện của lòng nhiều hơn.",
      ],
      [
        "Tại mlf, việc được làm nhiều nhất là nhìn. Ngồi ngoài hiên nhìn mưa, nhìn vườn, nhìn lại mấy năm vừa qua. Chẳng ai bảo phải thấy ra điều gì.",
      ],
    ],
    story: [
      [
        "Người đi rừng lâu năm nhìn tán lá là biết dưới đất có gì. Chỗ nào tán thưa thì bên dưới có lối mòn, thú hay đi qua. Chỗ nào lá đổi màu sớm hơn xung quanh thì gốc cây đang mục.",
      ],
      ["Người mới vào rừng cũng nhìn tán lá, thấy xanh, hết."],
      [
        "Ông kể hồi mới theo cha đi rừng, cha chỉ chỗ này chỗ kia, ông nhìn theo mà chẳng thấy gì khác. Đi mấy năm rồi tự nhiên một hôm nhận ra được. Cha ông lúc đó chẳng nói gì thêm, chỉ đi tiếp.",
      ],
      ["Cái rừng thì vẫn cái rừng ấy suốt mấy năm."],
    ],
    insight: [
      [
        "Người ta hay sốt ruột ở quãng giữa nhìn và thấy. Ngồi thiền mấy hôm chưa thấy gì thì nghĩ mình làm sai. Đi retreat về chưa đổi khác thì nghĩ chỗ đó chẳng hợp.",
      ],
      [
        "Ông đi rừng mấy năm mới nhận ra được, mà trong mấy năm đó ông có làm gì đâu ngoài việc đi và nhìn. Cái thấy tới vào một hôm nào đó, chẳng phải hôm ông cố nhất.",
      ],
      [
        "Việc mình làm được là nhìn, và nhìn lâu. Còn thấy thì tùy nó. Người trồng cây tưới nước mỗi ngày, hôm nào hạt nứt là chuyện của hạt.",
      ],
      ["Vì vậy mà ngồi nhìn mưa cả buổi chẳng phải là phí. Đó là phần việc của mình trong một chuyện mà mình chỉ làm được một nửa."],
      ["Nhìn là phần mình làm được, thấy là phần còn lại."],
    ],
    variants: [
      { word: "thấy rõ", desc: "cái tới sau một quãng nhìn, việc mà quan sát làm được còn phân tích thì khó" },
      { word: "nhìn lại", desc: "quay mắt về phía sau, chuyện thường làm ở những ngày chậm" },
      { word: "phía sáng", desc: "hướng mà mắt tìm về khi đã quen nhìn" },
      { word: "mặt hồ phẳng", desc: "mặt nước lặng thì soi rõ, cũng như mắt yên thì nhìn ra" },
      { word: "hiện diện", desc: "có mặt ở đó với cái mình đang nhìn, việc khó hơn nghe qua" },
    ],
  },
  {
    word: "ăn",
    origin: "Thuần Việt",
    group: "Đời sống · Quan hệ · Nếp",
    gloss: "việc người ta làm cùng nhau mỗi ngày",
    definition: [
      ["Đưa thức ăn vào miệng, nhai và nuốt."],
      [
        "Chữ này đi xa hơn cái miệng rất nhiều. Ăn nói, ăn ở, ăn mặc, ăn năn, ăn Tết, ăn hỏi. Người mình lấy chuyện ăn để nói chuyện sống, cứ như hễ việc gì thuộc về một đời người thì cũng thuộc về bữa cơm.",
      ],
      [
        "Cách hỏi thăm cũng vậy. Gặp nhau ngoài đường thì hỏi ăn cơm chưa, hỏi thế thay cho hỏi dạo này thế nào. Người được hỏi trả lời rồi thì coi như đã kể xong tình hình của mình.",
      ],
      [
        "Tại mlf, bữa cơm là việc chung, dọn ra rồi ngồi xuống với nhau. Khách và người trong nhà cùng một mâm.",
      ],
    ],
    story: [
      ["Nhà đông người thì mâm cơm có luật của nó. Mâm dọn giữa nhà, ai ngồi chỗ nấy. Cơm xới cho người lớn tuổi trước."],
      [
        "Có món ngon thì đứa nhỏ được gắp cho, mà cũng chỉ được gắp một hai lần rồi thôi, còn phần người khác. Đứa nào gắp lấy liên tục thì bị nhắc.",
      ],
      [
        "Ăn xong ngồi lại uống nước, chuyện trong xóm chuyện ngoài đồng nói ở đó. Ai có gì trong bụng thì bữa cơm là lúc lộ ra, ăn ít hơn thường một chút là người trong nhà biết.",
      ],
      ["Bây giờ mỗi người ăn một giờ, có khi cầm bát về phòng. Cơm thì vẫn cơm ấy."],
    ],
    insight: [
      [
        "Bữa ăn bị coi là việc phải xong cho nhanh. Mười lăm phút, vừa ăn vừa xem điện thoại, xong rồi quay lại việc. Tính theo hiệu quả thì đúng là chẳng nên ngồi lâu làm gì.",
      ],
      [
        "Có điều mâm cơm ngày trước làm nhiều việc hơn là cho no. Đó là lúc trong ngày mà cả nhà cùng có mặt, cùng dừng tay, cùng nhìn thấy nhau. Bỏ nó đi thì vẫn no, mà mất cái lúc người ta biết được nhau đang thế nào.",
      ],
      [
        "Nhiều thứ trong nhà chỉ nói được ở mâm cơm. Không phải vì chỗ đó thiêng liêng gì, mà vì lúc ấy tay ai cũng bận cầm đũa, mắt nhìn xuống bát, nên nói ra dễ hơn.",
      ],
      ["Cho nên ngồi lại thêm mười phút sau bữa cũng là một việc. Chẳng làm gì cả, chỉ ngồi."],
      ["Ăn là lúc trong ngày người ta cùng dừng tay."],
    ],
    variants: [
      { word: "một bữa cơm chung", desc: "hình ảnh quen của mlf, khách và người trong nhà cùng một mâm" },
      { word: "có mặt", desc: "việc khó nhất trong bữa cơm, và cũng là việc duy nhất cần làm" },
      { word: "khoảng-dừng", desc: "bữa ăn là một khoảng dừng có sẵn trong ngày, ai cũng có ba lần" },
      { word: "ngày-hiền", desc: "một ngày mà bữa cơm được để dài ra bao lâu cũng được" },
      { word: "chăm chút", desc: "cách bàn tay làm ra một bữa, từ nhặt rau tới bày mâm" },
    ],
  },
  {
    word: "mùa",
    origin: "Thuần Việt",
    group: "Thời gian · Nhịp · Đất trời",
    gloss: "nhịp lớn hơn nhịp của một người",
    definition: [
      ["Quãng thời gian trong năm có thời tiết riêng, và có việc riêng phải làm trong quãng ấy."],
      [
        "Người mình đếm thời gian bằng mùa nhiều hơn bằng tháng. Mùa mưa, mùa gặt, mùa giáp hạt, mùa cưới. Hỏi chuyện gì xảy ra khi nào thì hay được trả lời là hồi mùa mưa năm kia.",
      ],
      [
        "Chữ này cũng dùng cho việc của người. Mùa thi, mùa làm ăn, mùa khách. Lối nói ấy hàm ý rằng việc gì cũng có thời của nó, và thời ấy tới rồi đi mà chẳng hỏi ý ai.",
      ],
      [
        "Tại mlf, mùa quyết định nhiều thứ. Măng Đen mưa dài, mùa mưa thì khách ít, vườn thì lại tốt. Tuần-du cũng đi theo mùa, chỗ nào tới lúc thì mới tới.",
      ],
    ],
    story: [
      [
        "Nhà nông có mùa giáp hạt, quãng lúa cũ đã hết mà lúa mới chưa gặt. Đó là quãng đói nhất trong năm, ai cũng biết trước là nó sẽ tới.",
      ],
      ["Biết trước nên người ta để dành. Cuối vụ gặt thì cất riêng một phần thóc, không đụng tới. Khoai để gác bếp, mắm muối làm sẵn từ mùa trước."],
      [
        "Đến giáp hạt thì cả làng cùng ăn dè. Bữa cơm độn khoai độn sắn, ai cũng vậy nên chẳng ai thấy khổ riêng mình. Chuyện trong xóm dạo ấy cũng ít đi, người ta ngủ sớm cho đỡ đói.",
      ],
      ["Rồi lúa chín. Gặt xong thì nhà nào cũng nấu một nồi cơm mới, ăn với muối vừng cũng thấy ngon."],
    ],
    insight: [
      [
        "Bây giờ chuyện gì cũng có quanh năm. Trái cây mùa nào cũng bán, trong nhà lúc nào cũng đủ ấm đủ mát. Sống như vậy tiện, mà cũng làm người ta quên rằng có những quãng vốn để chờ.",
      ],
      [
        "Nên khi trong người có một quãng chậm lại, nhiều người hoảng lên. Làm gì cũng thấy nhạt, việc gì cũng thấy nặng, và câu hỏi đầu tiên là mình bị làm sao.",
      ],
      [
        "Nhà nông không hỏi giáp hạt bị làm sao. Họ biết nó tới, họ để dành từ trước, và họ đi qua nó bằng cách ăn dè, ngủ sớm, đợi lúa chín.",
      ],
      [
        "Trong một đời cũng có những mùa như vậy. Quãng chẳng ra được cái gì, chẳng đi tới đâu. Việc làm được là giữ mình cho tới ngày gặt, và biết rằng ngày ấy có tới.",
      ],
      ["Mùa nào cũng qua, kể cả mùa đang ở trong mình."],
    ],
    variants: [
      { word: "nhịp của đất trời", desc: "thứ lớn hơn ý mình, việc của mình là thuận theo" },
      { word: "để chín", desc: "đợi đủ ngày của một thứ, việc mà thời gian làm thay cho mình" },
      { word: "tuần-du", desc: "đi theo mùa, chỗ nào tới lúc thì mới tới" },
      { word: "hàm-dưỡng", desc: "phần để dành từ mùa trước, thứ giữ mình qua những quãng cạn" },
      { word: "cơn mưa Măng Đen", desc: "mùa dài nhất ở đây, khách thì ít mà vườn thì tốt" },
    ],
  },
  {
    word: "tay",
    origin: "Thuần Việt",
    group: "Thân thể · Nghề · Nếp",
    gloss: "một chỗ mà hiểu biết nằm ở đó",
    definition: [
      ["Phần chi trên của người, từ vai xuống tới các ngón."],
      [
        "Tiếng Việt lấy chữ này để đo một người. Tay nghề cao, tay ngang, tay không, trắng tay, mát tay. Hỏi ai làm nghề gì thì cũng hỏi bằng chữ tay, cứ như những gì một người biết đều hiện ra ở đôi tay họ.",
      ],
      [
        "Chữ này còn dùng cho những việc thuộc về lòng. Buông tay, xuống tay, nhẹ tay, ra tay. Ai làm chuyện gì cũng phải qua tay, nên tay thành ra chỗ ý định biến thành việc thật.",
      ],
      [
        "Tại mlf, ba nhánh trong trục ở lại đều là việc của tay. Pha trà, sửa lại đồ cũ, đưa thân mình vào từng thế tập.",
      ],
    ],
    story: [
      [
        "Người làm bánh lâu năm nhồi bột chẳng cần cân. Đổ bột ra, rót nước, nhồi một lúc rồi biết thiếu hay đủ. Hỏi thiếu bao nhiêu thì bà chịu, chỉ nói tay nó biết.",
      ],
      [
        "Đứa cháu học nghề, mang theo cân với cả cái đồng hồ bấm giờ. Cân đúng từng gam, nhồi đúng số phút. Bánh ra lò ăn được, mà bà nếm xong bảo bột chưa tới.",
      ],
      [
        "Nó hỏi tới là thế nào. Bà nắm một nắm bột đưa cho nó, bảo bóp thử. Rồi bà nhồi tiếp một lúc, lại đưa cho nó bóp. Nó bóp hai lần, thấy khác nhau, mà tả ra thì không tả được.",
      ],
      ["Bà nói cứ nhồi vài trăm mẻ rồi tay khắc biết."],
    ],
    insight: [
      [
        "Thời nay cái gì cũng học được qua chữ. Muốn biết pha trà thì có bài viết, muốn tập yoga thì có video, đọc xong xem xong thấy như mình đã hiểu.",
      ],
      [
        "Hiểu bằng đầu thì nhanh, mà nó dừng ở chỗ biết phải làm gì. Còn cái biết nằm trong tay bà làm bánh thì phải qua vài trăm mẻ. Không có đường tắt nào, vì đó là cái biết chỉ hình thành qua việc làm đi làm lại.",
      ],
      [
        "Đôi tay cũng là chỗ ít nói dối nhất. Trong lòng đang vội thì rót nước cũng vội, đang cáu thì đặt cái chén xuống mạnh hơn thường. Người ngồi cạnh chẳng cần hỏi cũng biết.",
      ],
      [
        "Cho nên tập lại đôi tay là một lối tập tâm. Rót chậm một chút, đặt nhẹ một chút. Làm vài trăm lần thì trong lòng cũng đổi theo.",
      ],
      ["Tay biết những thứ đầu chưa kịp biết."],
    ],
    variants: [
      { word: "touch", desc: "chạm vào điều thuần nhất, không gian của Thuận, nơi tay làm việc của nó" },
      { word: "nhẹ tay", desc: "cách chạm vào mọi việc ở mlf, từ pha trà tới đặt một cái chén xuống" },
      { word: "chăm chút", desc: "việc tay làm khi trong lòng có thương" },
      { word: "buông", desc: "việc của tay trước khi thành việc của lòng" },
      { word: "hơi ấm trong tay", desc: "lúc cầm chén trà, chỗ mà tĩnh lặng trong lòng bắt đầu" },
    ],
  },
  {
    word: "nghe",
    origin: "Thuần Việt",
    group: "Giác quan · Quan hệ · Thuận theo",
    gloss: "việc làm được mà chẳng cần nói gì",
    definition: [
      ["Nhận lấy âm thanh bằng tai."],
      [
        "Tai khác mắt ở chỗ mắt nhắm được còn tai thì mở suốt. Ngủ cũng nghe, quay lưng đi cũng nghe. Trong các giác quan thì đây là chỗ mình ít quyền nhất.",
      ],
      [
        "Tiếng Việt còn dùng chữ này cho việc thuận theo. Nghe lời, nghe theo, nghe ra. Ai chịu nghe người khác thì cũng là chịu để người ta có chỗ trong mình, cho nên nghe với thương hay đi gần nhau.",
      ],
      [
        "Tại mlf, nghe là phần lớn việc của những buổi ngồi cùng nhau. Khai tâm hay clari-tea đều là chỗ một người nói và một người nghe.",
      ],
    ],
    story: [
      [
        "Người chỉnh đàn dây làm việc bằng tai. Vặn trục một chút, gảy thử, nghe. Vặn thêm, gảy, nghe. Có khi ngồi cả buổi với một cây đàn.",
      ],
      [
        "Chỗ khó là hai dây gần đúng nhau. Sai nhiều thì ai cũng nghe ra, còn sai ít thì phải im lặng lắm mới bắt được. Trong tiệm ồn thì ông chịu, phải đợi trưa vắng khách.",
      ],
      ["Có người mang đàn tới, ngồi bên cạnh nói chuyện suốt. Ông vẫn vặn vẫn gảy, mà lát sau bỏ xuống, bảo để hôm khác."],
      ["Cây đàn thì vẫn cây đàn ấy, tai ông cũng vậy. Thiếu mỗi cái yên trong tiệm."],
    ],
    insight: [
      [
        "Ai cũng nghĩ mình biết nghe. Ngồi im, gật đầu, người kia nói xong thì mình nói tiếp. Có điều phần lớn cái gọi là nghe ấy là đang chờ tới lượt.",
      ],
      [
        "Người vừa nghe vừa nghĩ câu trả lời thì cũng như ông thợ chỉnh đàn trong tiệm đông khách. Vẫn nghe được tiếng, mà cái sai nhỏ thì mất.",
      ],
      ["Nghe được một người nói cần yên ở hai chỗ. Yên bên ngoài, và yên trong đầu mình. Chỗ thứ hai khó hơn nhiều."],
      [
        "Người nào từng được nghe kiểu ấy một lần thì nhớ lâu. Chẳng ai khuyên gì, chẳng ai chữa gì, mà kể xong thì trong người nhẹ đi.",
      ],
      ["Nghe là để yên cho một người nói hết."],
    ],
    variants: [
      { word: "ngồi với", desc: "có mặt bên cạnh mà chẳng xử lý gì, việc chính của những buổi ngồi cùng nhau" },
      { word: "khai tâm", desc: "một người nói và một người nghe, mở tới đâu thì tùy người" },
      { word: "lặng", desc: "điều kiện của nghe, cả bên ngoài lẫn trong đầu mình" },
      { word: "nương đỡ", desc: "việc mlf làm, ở bên cạnh chứ chẳng đứng phía trước" },
      { word: "im lặng chữ nghĩa", desc: "nghe chính mình qua trang viết, lúc chẳng có ai ngồi cạnh" },
    ],
  },
  {
    word: "cũ",
    origin: "Thuần Việt",
    group: "Thời gian · Đồ vật · Quan hệ",
    gloss: "dấu của một thứ đã ở lại đủ lâu",
    definition: [
      ["Đã có từ lâu, đã qua nhiều lần dùng."],
      [
        "Chữ này dùng cho vật, cho chỗ, cho người, cho chuyện. Áo cũ, nhà cũ, người cũ, chuyện cũ. Mỗi lần dùng là một lần nhắc rằng thứ đó đã ở với mình một quãng.",
      ],
      [
        "Trong lối nói hằng ngày, cũ hay đứng về phía hết giá trị. Đồ cũ thì bán rẻ, tin cũ thì thôi đọc, cách làm cũ thì nên bỏ. Nghe vậy thì cũ thành một lỗi cần sửa.",
      ],
      [
        "Tại mlf, đồ cũ được giữ lại và làm cho dùng được tiếp. Thuần upcycle là việc ấy, sửa lại rồi để nó kể tiếp một câu chuyện khác.",
      ],
    ],
    story: [
      ["Cái cối đá giã lâu năm thì lòng cối mòn xuống. Chày nện mấy chục năm vào một chỗ, đá lõm dần thành cái lòng sâu hơn ban đầu."],
      [
        "Cối mới thì lòng nông, giã vừng giã lạc hay bắn ra ngoài, phải lấy tay hứng. Cối cũ lòng sâu, giã bao nhiêu cũng nằm gọn trong đó.",
      ],
      [
        "Trong bếp nhà bà có cả hai. Cối mới để giã mấy thứ khô, cối cũ để làm muối vừng. Đứa cháu về chơi bảo cái cối cũ trông cũ quá, bà nói cái đó giã quen rồi.",
      ],
      ["Cái lòng sâu ấy là dấu của mấy chục năm bữa cơm trong nhà. Không có cách nào làm ra nó ngoài việc giã mỗi ngày."],
    ],
    insight: [
      [
        "Thứ gì cũ đi cũng mất một phần. Áo bạc màu, dao cùn lưỡi, cối mòn lòng. Nhìn theo lối ấy thì thời gian chỉ lấy đi, và giữ đồ cũ là tiếc của.",
      ],
      [
        "Mà chỗ lõm trong lòng cối vừa là phần đá đã mất vừa là chỗ giữ vừng lại. Cùng một vết, tùy mình nhìn nó là hao hụt hay là công dụng.",
      ],
      [
        "Người cũng vậy. Ai sống một quãng rồi cũng mang vài vết, một chuyện chưa qua hẳn, một chỗ hơi lõm xuống. Những vết ấy làm mình chậm hơn ở vài chỗ, và cũng làm mình hiểu được những người mang vết giống thế.",
      ],
      ["Cho nên trong bếp cần cả cối mới lẫn cối cũ. Việc nào cối nấy."],
      ["Cũ là dấu cho thấy một thứ đã được dùng thật."],
    ],
    variants: [
      { word: "thuần upcycle", desc: "giữ lại phần còn dùng được, để đồ cũ kể tiếp một chuyện khác" },
      { word: "vết nứt được trám lại", desc: "chỗ hỏng vẫn còn đó mà vật thì lành lại" },
      { word: "quen", desc: "thứ chỉ thời gian cho được, và cũng là thứ làm một vật thành của mình" },
      { word: "thương", desc: "nhìn thấy phần còn lành, và để nó ở lại" },
      { word: "hàm-dưỡng", desc: "thứ dày lên qua nhiều mùa, chỉ thấy được khi nhìn lại" },
    ],
  },
];

export type Block =
  | { type: "q"; text: string }
  | { type: "a"; text: string }
  | { type: "interlude"; text: string }
  | { type: "label"; text: string };

export type Episode = {
  num: string;
  date: string;
  name: string;
  role: string;
  title: string;
  intro: string[];
  blocks: Block[];
  outro: string[];
};

function q(text: string): Block {
  return { type: "q", text };
}
function a(text: string): Block {
  return { type: "a", text };
}
function it(text: string): Block {
  return { type: "interlude", text };
}
function lb(text: string): Block {
  return { type: "label", text };
}

export const episodes: Episode[] = [
  {
    num: "01",
    date: "16.02.2025",
    name: "Như Ngọc",
    role: "kế toán · Sài Gòn",
    title: "Chuyện trò cùng Như Ngọc",
    intro: [
      "Đêm buông, trời tối sâu như một tấm màn nhung lặng lẽ. Tôi ngồi viết những dòng này, bắt đầu cuộc trò chuyện cùng Như Ngọc.",
      "Ngọc làm kế toán, một công việc gắn liền với sự chính xác và trách nhiệm. Em tự nhận mình là một người-bình-thường, đang học cách-tiếp-tục-đi trên hành trình dài của bản thân. Nhưng tôi tin, bên trong sự bình thường ấy là một tâm hồn luôn kiếm tìm điều gì đó rộng lớn hơn, lặng lẽ hơn - như những chuyến đi của em đến mlf.",
    ],
    blocks: [
      q("Điều gì đưa em đến nghề này, có khi nào em từng hoài nghi về nó?"),
      a("Giờ nhìn lại, em nghĩ đó là duyên hơn là nghiệp. Ban đầu em rất sợ những con số, chưa từng nghĩ mình sẽ làm kế toán. Nhưng rồi công việc này lại tìm đến em. Hồi đầu mới đi làm em đã từng hoài nghi liệu mình có hợp với nghề này? Em luôn lo lắng về số liệu, về các sai sót của bản thân. Em từng trăn trở, nếu mình chưa hiểu được mình thì làm sao hiểu được cái nghề?"),
      a("Em nhớ có lần đọc được câu này: \"Người ta đi Đông đi Tây vì đời là những chuyến đi, nhưng có một chuyến đi chờ mãi mà không thành, đó là chuyến đi về bên trong, cùng sự tĩnh lặng, can đảm và tha thứ.\""),
      a("Câu chữ ấy chạm vào em. Từ đó, em bắt đầu một hành trình đặc biệt - học cách hiểu chính mình. Em nhận ra rằng, khi bên trong thay đổi, thế giới bên ngoài cũng đổi thay theo. Kế toán không chỉ là những con số, mà là cách học sự cẩn trọng, trách nhiệm và tận tâm - cả trong công việc lẫn cuộc sống. Em bắt đầu làm việc với một tâm thế mới - trân trọng từng việc mình làm và nỗ lực thay đổi nhiều hơn. Bẵng đi đã 10 năm trôi qua, giờ em đã có thể nói mình yêu \"nghề\", dù công việc áp lực hơn trước bội lần."),
      q("Trách nhiệm – Gánh nặng hay sự lựa chọn?"),
      a("Em từng nghĩ nhiều về điều này. Đôi khi, em tự hỏi: \"Sao mình có thể vượt qua bao nhiêu cửa ải khó khăn đến vậy?\" Và câu trả lời luôn là: \"Vì trách nhiệm.\""),
      a("Nếu được giao một, em luôn cố gắng làm ba. Em luôn tâm niệm chỉ khi nào mình thực sự chịu trách nhiệm cho những việc mình làm thì mới ý thức làm việc đó một cách tận tâm, tận lực nhất."),
      a("\"Chuyện gì em làm tốt thì đó là công lao của tất cả mọi người, nhưng chuyện gì có lỗi thì em sẵn sàng đứng ra nhận trách nhiệm để nghiêm túc nhìn nhận và thay đổi\"."),
      a("Khi hiểu sâu về trách nhiệm, em thấy lòng mình rộng hẳn ra. Nó giúp em trưởng thành hơn, không đổ lỗi cho ai, cũng không chờ đợi ai gánh thay mình. Ngày trước em sợ này, sợ kia, đợi người này, chờ người kia... em đã không tự sống cuộc đời mình. Từ khoảnh khắc biết tự chịu trách nhiệm, em biết mình đã làm chủ cuộc đời mình."),
      q("Có bao giờ em thấy mình đang gánh vác quá nhiều không?"),
      a("Mỗi lần cảm giác bị \"overload\" (-quá tải) em đều đặt cho mình câu hỏi ngược lại: nếu không phải mình thì ai sẽ là người sẵn sàng gánh vác?"),
      a("Cái mong muốn cuối cùng của em là tất cả mọi người cùng nhau thúc đẩy để làm việc tốt hơn, hiệu quả hơn. Nên em sẵn sàng xông pha. Muốn mọi người cùng làm thì trước hết bản thân em phải là người chủ động lao vào trước. Em muốn làm \"cách mạng\", rồi từ đó mọi người nhìn vào cách mình làm để hiểu, đồng hành và chia sẻ."),
      q("Em vẫn luôn đặt trách nhiệm lên hàng đầu. Đâu là lý do đằng sau?"),
      a("Em muốn thực sự \"tự do\" để sống cuộc đời của mình. Tự do và trách nhiệm nó như 2 mặt của đồng xu vậy. Nếu muốn tự do làm theo những gì mình muốn thì phải đặt trách nhiệm đi cùng để thấu đáo, dám trải nghiệm và chấp nhận sai để học hỏi."),
      a("Dần dần, nó trở thành một phần tính cách của em. Cũng là động lực để em thay đổi bản thân từng ngày."),
      q("Có bao giờ, em thấy trách nhiệm đè lên mình nặng tới mức không thở nổi?"),
      a("Có. Đó là khi em gánh trách nhiệm với gia đình - một trách nhiệm mà dù cố gắng đến đâu, cũng không thể làm tất cả mọi người hạnh phúc. Em từng thấy nghẹt thở, cho đến khi học được cách \"buông\". Không phải là từ bỏ, mà là không tự trói mình vào những điều ngoài tầm với."),
      a("Trách nhiệm cũng có hai mặt - có khi là ánh sáng nâng đỡ, có khi là chiếc bóng nặng nề. Quan trọng là mình nhận ra đâu là giới hạn của nó."),
      q("Từ đâu mà em biết đến mlf?"),
      a("Nhà em cách mlf Sài Gòn chỉ 600 mét. Một ngày nọ, em đến quán và tự hỏi: \"Giữa phố xá xô bồ này, sao lại có một nơi yên tĩnh đến vậy?\""),
      a("Em gọi một món nước. Khi nhấp ngụm đầu tiên, em bất giác cười - hạnh phúc vì một điều rất nhỏ bé. Một ly nước ngon cũng đủ làm em thấy vui. Từ khoảnh khắc đó, em nhận ra hạnh phúc không cần phải là điều gì lớn lao, mà đôi khi chỉ là những khoảnh khắc giản dị, chân thực. Cảm giác âm ỉ đó thôi thúc em đặt chân vào hành trình quay vào bên trong để trải nghiệm những điều này."),
      q("Và rồi em đến mlf Măng Đen?"),
      a("Em nhớ tối trước ngày đi, em đã nhắn tin cho bạn: \"Ngày mai tao sẽ bắt đầu một chuyến đi quan trọng mà tao mong chờ từ lâu.\" Khoảnh khắc đặt chân đến nhà mộc, nhìn thấy anh và Ân đứng đợi ở cửa, em biết rằng mình đã thực sự về nhà. Cảm giác như một giấc mơ đã thành hiện thực. Em đã hành động theo sự thôi thúc rất mãnh liệt từ trái tim mình."),
      a("Hồi trước em cũng chăm đọc sách, xem phim lắm. Cái cảm giác của em chính như là mọi người xé truyện mà bước ra, sống một đời thực tại như nó-là. Em như được đóng vai đứa em nhỏ nhất trong phim \"Our little sister\" - một bộ phim của Nhật Bản mà em rất thích. Em còn bị \"hyper\" (-quá khích) đến nỗi khi trở về em phải gửi tận 4 bức thư riêng cho từng thành viên nhà mộc."),
      q("Cho tới lần thứ 2 trở lại?"),
      a("Nó đã khác đi nhiều. Không còn tò mò nhiều nữa mà thay vào đó là cảm giác kiểu \"về nhà\" - vì sau lần đầu em biết chính xác rằng mình sẽ quay lại đây vào mỗi năm."),
      a("Trong lần quay lại thứ 2 cũng là lần em đang cảm thấy cạn kiệt năng lượng và cần được \"về nhà\" để được quan tâm, chăm sóc."),
      q("Cho tới lần đó, anh thấy em rất khác..."),
      a("Lần trở lại này, những tưởng chỉ tới mlf để nghỉ ngơi thôi, nhưng lần này em \"học\" rất nhiều, em \"học\" khám phá bản thân mình ở những khía cạnh khác. Trong ngày cuối ở mlf, anh Thuận có nói: \"Đến tận hôm nay anh vẫn còn bất ngờ về em đấy\". Đúng vậy, có những khía cạnh về chính bản thân em còn chưa nghĩ tới, chưa hiểu hết được, thế mà lần ấy em có dịp nhìn nhận và quan sát lại - à thì ra mình có thể như thế này, như thế kia!"),
      a("Đặc biệt hơn, đã 8 tháng từ chuyến đi lần thứ 2, nhưng pin của em vẫn chạy ổn định, nó tốt hơn năm ngoái rồi, các anh lại làm đứa em này thay đổi rồi (cười)."),
      it("... đêm ở mlf, có tiếng ếch nhái văng vẳng từ chiếc ao Tịnh Thủy, có tiếng gió lay xào xạc cành mai anh đào ngoài sân, có tiếng cựa mình của những con bọ đang bám trên mái nhà..."),
      q("Mỗi lần tới mlf, em hay gọi là \"về nhà\", em nói rõ thêm chút đi."),
      a("\"Về nhà\" là ngôi nhà tinh thần mà em lựa chọn. Em nghĩ trong mỗi người ai cũng sẽ có 1 cái \"công tắc\" để mình nhận ra một số thứ, như đối với em thì là mlf ở Sài Gòn và Măng Đen đều là vậy, ngay lần đầu tiên bước vào quán thì em đã cảm giác thân thuộc. Đó là cảm giác không cần nói, không cần thể hiện chỉ là nó cứ mạnh lên và tự nhiên gắn kết."),
      a("Về nhà là cảm giác mình không còn cần bất kỳ tên gọi nào nữa, không còn bất kỳ danh tính, nghề nghiệp gì nữa, chỉ là bản thân mình thôi, không cần phải nói, thể hiện, phải làm gì nữa hết, trút tất cả mọi thứ xuống… và em đã ngủ rất ngon, thậm chí còn ngủ ngon hơn ở chính nhà của mình nữa."),
      a("Nhà luôn là nơi em háo hức để được trở về. Và đầu năm nay, em đã ấn định được ngày trở về nhà lần thứ 3. Trở về để chăm sóc lại bản thân, để soi chiếu lại 1 năm qua đã học hỏi như thế nào, đã thay đổi như thế nào. Quan trọng hơn là để một lần nữa trực tiếp cảm ơn mọi người. Trong chuyến đi lần thứ 3 này, em còn mời người bạn thân lâu năm cùng đồng hành. Em muốn bạn ấy trực tiếp trải nghiệm những chuyện em đã chia sẻ và cũng mong muốn bạn ấy hiện diện cùng mình trong những khoảnh khắc hạnh phúc nhất của cuộc đời mình."),
      q("So với lần đầu tiên đến Măng Đen, em đã thấy mình thay đổi như thế nào rồi?"),
      a("Vậy là gần 1 năm 7 tháng em đến Măng Đen."),
      a("Những \"bài học\" đã đến tới tấp. Em trong mắt mọi người có vẻ \"điên\" hơn, vì suốt ngày làm những chuyện không ai làm: tự vui, tự cố gắng, tự nỗ lực, tự thay đổi."),
      a("Em nhận thấy cách mình phản ứng trước các vấn đề đã khác đi. Nhiều khi em cũng bất ngờ về sự thích nghi và khả năng thay đổi của bản thân. Em cũng thấy trân trọng, biết ơn mọi thứ đến với mình hơn, luôn đặt tâm thế sẵn sàng để đón nhận các \"bài học\" mới. Và lần đầu tiên, MBTI (-một bài kiểm tra tính cách) của em đã thay đổi sang một nhóm khác. Em cũng hay tự hỏi nhà mộc đã gieo vào em những hạt mầm gì."),
      q("Hẳn trong sự tích cực như vậy, cũng có những điểm \"cực đoan\"?"),
      a("Chắc cũng phải có, đó là những lúc em mong muốn kiểm soát, muốn mọi chuyện phải diễn ra theo ý của mình. Như anh đã từng khuyên em, cái gì quá cũng không tốt. Mỗi lúc như vậy em thấy mệt, mệt quá rồi thì mình quan sát điều gì làm mình mệt để không rơi vào vòng lặp. Muốn kết quả khác đi phải hành động khác đi. Khi em thấy mất cân bằng, em sẽ chậm lại xíu, từ từ thay đổi và điều chỉnh mọi thứ lại."),
      q("Em nghĩ thế nào về một cuộc sống trọn vẹn mà không bị cuốn theo những áp lực thường ngày?"),
      a("Em xác định cuộc sống mình đương nhiên sẽ bị cuốn vào áp lực, đó là điều không thể tránh khỏi. Vì vậy, em chấp nhận bị cuốn vào trong guồng quay đó, nhưng điều em có thể làm được là cố gắng tách mình ra trong chốc lát, trong khoảnh khắc nào đó để quan sát, để có trọn vẹn với từng điều ấy."),
      it("...Khi ngồi gõ lại những dòng này, dưới những ngọn đèn vàng ở nhà mộc, tôi nhớ về hình ảnh Ngọc xúm xích như một đứa em nhỏ. Có lẽ sự trọn vẹn với những gì hiện diện đã khiến em có đủ 100% nhiệt thành để dấn thân, để tận hưởng..."),
      q("Liệu có một điều gì đó vẫn còn \"đóng khung\" em?"),
      a("Em đã luôn tự đóng khung mình rằng: em chỉ làm được việc này, em chỉ hợp với cái này, em không thể làm cái kia... Có lẽ nó đến từ việc em chưa thật sự hiểu bản thân, em đã từng sợ bước ra khỏi vòng an toàn, em ngại thay đổi. Nhưng nay, em đang cố gắng đập đi những điều đã bám rễ sâu trong mình. Kiểu như nếu nó không được, thì em sẽ suy nghĩ làm sao để có thể được, không bây giờ thì tương lai, em muốn mình là một biến số chứ không phải làm một hằng số."),
      a("Em muốn được chuyển động, sự chuyển động từ bên trong, để có thể thích nghi với những biến chuyển từ bên ngoài. Vậy nên một trong những mục tiêu của em là làm mới những công việc thường ngày, luôn làm nó với một tâm thế mới, để mang lại niềm vui cho bản thân."),
      q("Nếu có một điều gì đó muốn nói với mình của ngày trước - em sẽ nói gì?"),
      a("Chắc là cứ trăn trở, cứ thắc mắc đi. Bởi trăn trở nó sẽ dẫn mình đi tìm câu trả lời. Chuyện gì cũng cần đủ thời gian, thời điểm thích hợp và luôn có một cái \"tôi\" chờ đợi cái \"tôi\" ngây dại kia lớn lên. Vì vậy, em cũng sẽ tiếp tục kiên nhẫn chờ mình lớn lên. Có nhiều thứ chỉ khi xảy ra rồi thì rất lâu sau mình mới thấu tỏ những gì đã xảy ra trước đó."),
      q("Chia sẻ khá nhiều về thế giới công việc, em có tưởng tượng đến một ngày mình không sống trong công việc nữa, lúc ấy Ngọc sẽ như thế nào?"),
      a("Thế giới công việc, thế giới cá nhân, thế giới gia đình… dù em có nhiều danh tính đến vậy nhưng mà bản chất thì cũng chỉ là em mà thôi. Khi làm việc, em luôn đặt mình ở tâm thế mình đang học, được thực tập ngay những điều mình học, được trải nghiệm, được sai, được lớn lên, được thất bại… tất cả những điều ấy trong môi trường công việc. Vậy nên, nếu không được sống trong công việc thì dù được đẩy qua một môi trường sống nào khác thì em mong mình vẫn giữ được những giá trị cốt lõi (chân thành, tử tế, tận tâm, trách nhiệm) vốn có để lại tiếp tục học."),
      q("Nhớ lại những ngày ở mlf, một khoảnh khắc nào khiến em còn nhớ mãi?"),
      a("Chắc chắn là khoảnh khắc đứng nhìn mây mù lặng lẽ trôi qua trước mắt mình. Khi đấy em nhận ra à thì ra trong lúc giông bão, lúc khó khăn cũng chẳng cần phải cố gắng vùng vẫy gì nhiều, chỉ là cố gắng kiên nhẫn chờ đợi, mây rồi cũng sẽ trôi qua, bầu trời sẽ trong xanh lại. Tất cả cũng đều là khoảnh khắc, đến rồi đi, mình cứ trải nghiệm thôi, đừng níu kéo, đừng bám víu vào nó mãi."),
      q("Cảm ơn em vì đã trò chuyện!"),
    ],
    outro: ["Tạm biệt Ngọc. Một cơn gió vừa thoảng rung cành lá ngoài cửa sổ. Trong sương giá, chiếc lá ôm lấy mình, đợi ngày mai nắng lên.", "Một ngày hiền."],
  },
  {
    num: "02",
    date: "11.03.2025",
    name: "Chị Phượng",
    role: "giáo viên · người mẹ",
    title: "Một buổi trò chuyện giữa ngày hiền, cùng chị Phượng",
    intro: [
      "Mình hẹn nhau trong một ngày hiền – một ngày để chậm lại, để lắng nghe những câu chuyện nhỏ mà sâu, những điều nhẹ nhàng nhưng chạm vào lòng. Hôm nay, cuộc trò chuyện ấy là với chị Phượng – một người mẹ, một người giáo viên, một người phụ nữ yêu thiên nhiên, nhẹ nhàng nhưng cũng đầy trăn trở.",
    ],
    blocks: [
      lb("Những dòng chữ nhỏ trên trang giấy"),
      q("Chị thường ghi chép điều gì trong cuộc sống?"),
      a("Chị có một cuốn sổ nhỏ gọi là \"my day\". Mỗi sáng, chị sẽ viết ra những điều quan trọng trong ngày, những thói quen như tưới cây, đi bộ, tập thể dục – những thứ chị ưu tiên trước. Sau đó mới đến những công việc cần giải quyết. Cuối ngày, nhìn lại cuốn sổ, chị biết được mình đã làm gì, còn điều gì chưa trọn vẹn để cải thiện cho ngày hôm sau. Viết, với chị, cũng là một cách để soi chiếu chính mình."),
      q("Là một người ấm áp, nhẹ nhàng, có khi nào chị thấy mình cần mạnh mẽ hơn không?"),
      a("Chị luôn cảm thấy mình cần thêm sự mạnh mẽ từ bên trong. Khi ở bên một người mạnh mẽ, chị lại muốn trở nên nhẹ nhàng. Nhưng khi chỉ có một mình, chị buộc phải tự đứng vững. Chị tin rằng bên ngoài có thể là sự dịu dàng, nhưng bên trong vẫn cần một cốt lõi vững chãi. Chị đang học cách nuôi dưỡng sự mạnh mẽ ấy, để nó có thể tỏa ra tự nhiên, thay vì chỉ là một lớp vỏ bảo vệ."),
      lb("Những vai trò và khoảng lặng"),
      q("Trong vai trò một người mẹ, một người giáo viên, một người phụ nữ dành nhiều thời gian chu toàn cho người khác, có khi nào chị thấy mình quên mất bản thân không?"),
      a("Có chứ. Nhưng chị luôn cố gắng giữ cho mình một không gian riêng trong nhà – một góc nhỏ để tập yoga, một khoảng sân sau để trồng cây. Nhà là nơi chị vun vén theo cách của mình, là nơi để trở về sau những tất bật. Đó cũng là cách chị nuôi dưỡng chính mình. Và khi mình có đủ năng lượng, mình lại tiếp tục \"nuôi dưỡng\" mọi thứ xung quanh."),
      q("Điều gì thôi thúc chị đến mlf lần đầu tiên?"),
      a("Trước khi lên Măng Đen, chị đã đến quán mlf ở Sài Gòn. Khi biết mọi người sẽ rời đi, chị có một cảm giác hụt hẫng, như một góc nhỏ thân quen sắp biến mất. Rồi chị theo dõi hành trình của mlf và quyết định lên đường – như một cách để tiếp nối sự kết nối ấy."),
      q("Hai lần đến mlf, chị đều đi cùng các bé, điều này có ý nghĩa gì với chị?"),
      a("Chị không thích đi một mình, nên luôn muốn có người đồng hành. Và chị cũng mong các con có cơ hội chạm vào thiên nhiên, có những ký ức đẹp bên mẹ."),
      q("Điều gì khiến chị quay lại mlf lần nữa – và sắp tới là lần thứ 3?"),
      a("Mỗi lần về với mlf, chị lại được \"sạc pin\" cho chính mình. Nơi này cho chị cảm giác như trở về nhà – một nơi chỉ có bình yên và thương yêu."),
      a("Những ngày ở mlf trôi qua thật chậm, nhưng lại đầy ý nghĩa. Từ những khoảnh khắc nấu ăn cùng nhau, trò chuyện, nghỉ ngơi – tất cả đều giúp chị thực sự hiện diện trong từng phút giây. Đó là điều mà đôi khi, giữa cuộc sống hối hả, chị dễ dàng đánh mất."),
      q("Chị có mang về được gì từ đó không?"),
      a("Sau lần đầu đến mlf, chị thay đổi một số vật dụng trong nhà, treo chuông gió trước cửa - như một nguồn năng lượng bình an, chọn chén bát giản dị hơn, đặt những câu trích dẫn nhỏ trong bếp để truyền cảm hứng. Lần thứ hai về, chị sắp xếp lại cuộc sống của mình – tập trung rèn luyện sức khỏe, tham gia các lớp tăng cường chuyên môn và lên kế hoạch dài hạn hơn cho mình."),
      lb("Gia đình, công việc và những trăn trở"),
      q("Trong công việc và cuộc sống gia đình, chị làm thế nào để giữ sự bình an, nhẹ nhàng cho mình?"),
      a("Trong công việc, chị không cố gắng kết nối quá nhiều, nhưng luôn giữ thái độ hòa nhã và có những mối quan hệ chất lượng. Khi gặp khó khăn, chị coi đó là thử thách và cố gắng làm tốt nhất có thể."),
      a("Gia đình là niềm vui nhưng cũng có lúc là áp lực. Chị là người chu toàn, cũng đã từng mệt mỏi rất nhiều vì phải đảm đương mọi thứ. Rồi chị học cách buông bớt. Thỉnh thưởng, nếu thấy không kham nỗi, ba mẹ con có thể ra ngoài ăn, việc giặt giũ có thể gửi tiệm. Chị đã học được cách: buông bỏ kỳ vọng mình phải làm tốt tất cả."),
      q("Hành trình hôn nhân đã thay đổi chị và anh ấy như thế nào qua những năm tháng?"),
      a("Sau hơn 10 năm, có nhiều điều thay đổi. Thời gian dành cho nhau ít đi, những cuộc trò chuyện cũng không còn nhiều như trước. Có những lúc, chị cảm thấy khoảng cách, nhưng rồi chị chấp nhận rằng, có những điều không thể cưỡng cầu. Chị chỉ có thể tập trung vào hiện tại và những gì mình có thể chu toàn và chăm sóc."),
      q("Chị có bao giờ tự hỏi: \"Mình có đang làm đúng không?\""),
      a("Có chứ. Chị không phải là một người mẹ hoàn hảo. Có lúc chị lỡ lời, có lúc nóng giận, rồi lại hối hận. Sau những lần ấy, chị học cách tha thứ cho chính mình, để tiếp tục làm một người mẹ tốt hơn."),
      a("Chị nhận ra rằng mình đã từng là một đứa trẻ \"không đủ đầy\" và nó đã in hằn trong tâm trí. Thỉnh thoảng nó lại trồi lên. Thế nên, chị học cách tu sửa bản thân mình từng chút một, để không tiếp tục \"trao truyền\" những điều ấy sang cho con. Chị mong gieo cho con những hạt mầm bình an để một mai lớn lên dù có sai lạc hướng thì con vẫn có thể quay về bên trong chính mình để tìm đúng hướng."),
      q("Nếu mô tả một cuộc sống \"hiền\" theo cách riêng của chị, nó sẽ như thế nào?"),
      a("\"Là một ngày sống trọn vẹn với những gì mình có, với những gì thực sự quan trọng\"."),
      q("Nếu mô tả cuộc sống mà chị hướng tới bằng một hình ảnh, đó sẽ là gì?"),
      a("\"Một người lữ hành – đi, gặp gỡ, trải nghiệm... dừng lại nơi mình yêu, rồi lại tiếp tục đi…\""),
      q("Và nếu tóm gọn triết lý sống của mình trong một câu?"),
      a("\"Sống hết mình và sống cho hiện tại.\""),
    ],
    outro: [
      "Buổi trò chuyện khép lại giữa một ngày hiền.",
      "Chị Phượng có thể vẫn còn nhiều trăn trở, nhưng đâu đó, trong lời kể của chị, có một sự bình thản. Như một người vẫn đang trên hành trình tìm kiếm sự cân bằng – giữa gia đình và bản thân, giữa dịu dàng và mạnh mẽ, giữa những điều phải làm và những điều trái tim thực sự mong muốn.",
      "Cảm ơn chị đã ngồi lại, trong một ngày hiền, để cùng trò chuyện.",
    ],
  },
];

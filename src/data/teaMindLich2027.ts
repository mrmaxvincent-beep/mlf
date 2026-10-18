export const theme2027 = {
  title: "small things, quiet days",
  sub: "những điều nhỏ, những ngày yên",
  lead: "một năm, được kể bằng những điều rất nhỏ.",
};

export const motLines = [
  "một chén trà còn ấm, lặng lẽ chờ ta ngồi xuống.",
  "một bữa cơm dọn ra khi trời vừa chạng vạng, khói bếp còn vương trên mái.",
  "một con mèo lim dim trong vệt nắng nghiêng bên khung cửa.",
  "một bó hoa vừa cắm, cánh còn ngậm chút sương mai.",
  "một đôi dép nằm yên ngoài hiên, như biết người vẫn còn ở nhà.",
  "một cơn mưa ghé qua khu vườn, làm xanh thêm những phiến lá.",
  "một chiếc giỏ cứ đầy dần lên, qua bao mùa hái nhặt.",
];

export const bridge = [
  "đời sống cứ thế trôi, ngày nối ngày, mùa tiếp mùa. giữa những bận rộn, đôi khi ta mải miết tìm kiếm điều gì xa xôi mà quên mất những gì vẫn luôn ở bên mình.",
  "năm nay, hãy cùng trở về với nhịp sống thân quen: lắng nghe tiếng nước reo trong gian bếp, ngắm nắng đi qua hiên nhà, nghe mưa thì thầm trên tán lá, dành cho mình một khoảng nghỉ, và ngồi lâu hơn bên mâm cơm có người thương.",
  "mười hai tháng, mười hai lát cắt của đời sống thường ngày. để mỗi lần lật sang trang mới, ta có dịp chậm lại, nhìn ngắm những điều đang hiện diện và nhận ra mình vẫn luôn có mặt trong chính cuộc đời mình.",
];

export const concept2027 =
  "một bộ lịch ngắm nhìn đời sống, nhưng có khả năng đánh thức sự chú ý của người xem. sau khi đọc một câu chữ, nhìn một bức tranh, ta có thể nhận ra điều gì đó trong chính đời sống của mình. bộ lịch này kể rằng đời sống vốn đã có rất nhiều điều đáng quý; đôi khi, ta chỉ cần sống gần hơn với những gì đang hiện diện.";

export type Month2027 = {
  num: string;
  title: string;
  en: string;
  theme: string;
  reminder: string;
  text: string;
};

export type Stage2027 = { name: string; months: Month2027[] };

export const stages2027: Stage2027[] = [
  {
    name: "trở về với nhịp sống thường ngày",
    months: [
      {
        num: "01",
        title: "một buổi sáng",
        en: "A New Morning",
        theme: "khởi đầu",
        reminder: "từ nơi mình đang đứng",
        text: "Nắng sớm vừa chạm bậu cửa. Một năm mới bắt đầu từ chính nơi mình đang đứng và những gì mình đang có.",
      },
      {
        num: "02",
        title: "một chén trà",
        en: "A Cup of Tea",
        theme: "hiện diện",
        reminder: "trọn vẹn với điều đang ở trong tay",
        text: "Nước nghiêng xuống, lá trà khẽ trở mình, hương vừa dậy lên. Có khi ta đã đi qua bao điều đẹp đẽ chỉ vì lòng còn mải miết ở nơi xa.",
      },
      {
        num: "03",
        title: "một góc bếp",
        en: "The Kitchen",
        theme: "chăm nom",
        reminder: "gửi thương vào những điều bình thường",
        text: "Nồi cơm vừa reo, bát đũa lách cách gọi nhau về. Chẳng có việc gì là nhỏ khi ta làm nó bằng sự chú tâm, và căn bếp cứ thế ấm dần lên qua từng ngày.",
      },
    ],
  },
  {
    name: "cảm nhận vẻ đẹp và sự chuyển động của thiên nhiên",
    months: [
      {
        num: "04",
        title: "một nhành hoa",
        en: "A Little Flower",
        theme: "tự thành",
        reminder: "để mọi điều được là chính nó",
        text: "Lòng đủ rộng, nhành hoa nào cũng tìm được một khoảng trời để nở. Có những điều trong ta cũng vậy, chỉ cần được đối đãi dịu dàng, rồi sẽ đến ngày tự bung cánh theo cách của riêng mình.",
      },
      {
        num: "05",
        title: "một ngày nắng",
        en: "A Sunlit Day",
        theme: "đón nhận",
        reminder: "mở lòng với những điều dịu dàng",
        text: "Nắng rót mật xuống hiên nhà, cứ ra ngồi hong mình thêm chút nữa. Đất trời vẫn hào phóng trao đi như thế, chỉ đợi ta chậm lại một chút để đưa tay ra nhận lấy.",
      },
      {
        num: "06",
        title: "một cơn mưa",
        en: "A Passing Rain",
        theme: "thuận theo",
        reminder: "để mọi điều đến theo cách của nó",
        text: "Mưa về gột mát từng phiến lá, đất trời dịu lại, lòng người cũng thôi níu giữ những điều chẳng thể đổi thay.",
      },
    ],
  },
  {
    name: "chăm sóc bản thân, nuôi dưỡng những điều thân thuộc",
    months: [
      {
        num: "07",
        title: "một giấc ngủ",
        en: "A Little Rest",
        theme: "nghỉ ngơi",
        reminder: "cho mình được ngơi tay",
        text: "Khép mắt giữa trưa hè, để tiếng ve cứ ngân xa và gió khẽ lay tấm rèm mỏng. Nghỉ ngơi, cũng là một cách dịu dàng để sống.",
      },
      {
        num: "08",
        title: "một bữa cơm",
        en: "Around the Table",
        theme: "gắn kết",
        reminder: "ở bên nhau, trọn vẹn",
        text: "Mâm cơm đã vơi, câu chuyện vẫn còn đầy. Mình ngồi lại thêm chút nữa, cho trọn một bữa sum vầy.",
      },
      {
        num: "09",
        title: "một khu vườn",
        en: "A Growing Garden",
        theme: "nuôi dưỡng",
        reminder: "vun trồng những điều mình muốn lớn lên",
        text: "Dưới lớp đất mềm, những hạt mầm lặng lẽ tìm đường lên nắng. Còn ta, chỉ việc tưới chút nước, nhổ cọng cỏ, rồi kiên nhẫn chờ. Điều gì được nuôi bằng thương yêu, rồi sẽ đến mùa xanh tốt.",
      },
    ],
  },
  {
    name: "chậm lại, nhìn lại và trở về",
    months: [
      {
        num: "10",
        title: "một buổi chiều",
        en: "An Idle Afternoon",
        theme: "thảnh thơi",
        reminder: "không phải khoảng thời gian nào cũng cần được lấp đầy",
        text: "Có những buổi chiều lững lờ như mây, bóng nắng chậm rãi dịch qua thềm. Khi thôi vội vàng tìm việc cho đôi tay, ta mới nghe được sự yên ả vốn có của một ngày đang dần ngả bóng.",
      },
      {
        num: "11",
        title: "một chiếc giỏ",
        en: "A Little Basket",
        theme: "góp nhặt",
        reminder: "nhặt nhạnh những điều đáng giữ lại",
        text: "Năm sắp khép lại, ta lần giở từng ngày đã qua: một buổi sáng có nắng, một bữa cơm có người thương, một câu chuyện còn ấm. Nâng niu đặt từng điều vào giỏ, như cất giữ một mùa thương.",
      },
      {
        num: "12",
        title: "một mái nhà",
        en: "The Way Home",
        theme: "trở về",
        reminder: "về với nhà, về với mình",
        text: "Dù đi xa đến đâu, vẫn có một mái nhà còn sáng ánh đèn, lặng lẽ đợi ta. Một năm khép lại, chẳng cần mang về điều gì lớn lao, chỉ cần mang về chính mình.",
      },
    ],
  },
];

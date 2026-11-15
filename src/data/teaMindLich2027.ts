export const theme2027 = {
  title: "small things, quiet days",
  sub: "những điều nhỏ, những ngày yên",
  lead: "một năm, được kể bằng những điều rất nhỏ.",
};

export const motLines = [
  "một chén trà còn ấm, lặng lẽ chờ ta ngồi xuống.",
  "một bữa cơm dọn ra khi trời chạng vạng, khói bếp còn vương trên mái.",
  "một con mèo lim dim trong vệt nắng bên khung cửa.",
  "một đôi dép nằm yên ngoài hiên, như biết người vẫn còn ở nhà.",
];

export const bridge = [
  "giữa những bận rộn, ta mải tìm điều xa xôi mà quên những gì vẫn luôn ở bên mình. năm nay, hãy trở về với nhịp sống thân quen: tiếng nước reo trong gian bếp, nắng đi qua hiên nhà, mưa thì thầm trên tán lá, và một bữa cơm ngồi lâu hơn bên người thương.",
  "mười hai tháng, mười hai lát cắt đời sống thường ngày. để mỗi lần lật trang, ta chậm lại và nhận ra mình vẫn luôn có mặt trong chính cuộc đời mình.",
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
        en: "A cup of Tea",
        theme: "hiện diện",
        reminder: "trọn vẹn với điều đang ở trong tay",
        text: "Nước nghiêng xuống, lá trà khẽ trở mình, hương vừa dậy lên. Có khi ta đã đi qua bao điều đẹp đẽ chỉ vì lòng còn mải miết ở nơi xa.",
      },
      {
        num: "03",
        title: "một góc bếp",
        en: "The Kitchen Corner",
        theme: "chăm nom",
        reminder: "gửi thương vào những điều bình thường",
        text: "Bàn tay vo gạo, nêm chút muối, canh lửa cho vừa, rồi nồi cơm reo, bát đũa lách cách gọi nhau về. Một mái ấm được nhóm lên từ chính những việc nhỏ làm bằng cả tấm lòng.",
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
        text: "Lòng đủ rộng thì nhành hoa nào cũng tìm được một khoảng trời để nở.",
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
        en: "A Rainy Day",
        theme: "thuận theo",
        reminder: "để mọi điều đến theo cách của nó",
        text: "Mưa về gột mát từng phiến lá, nhắc mình chậm lại mà nghe trời đất đang thầm thì.",
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
        en: "A Round Table",
        theme: "gắn kết",
        reminder: "ở bên nhau, trọn vẹn",
        text: "Ăn chậm thôi, để câu chuyện bên mâm cơm được kéo dài thêm một chút nữa.",
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

// mỗi chặng giới thiệu một tháng tiêu biểu (mặt trước + mặt sau)
export const featured2027 = ["02", "06", "08", "12"];

// card = ảnh thiết kế mặt trước (thu nhỏ 720px, không đủ để in); shot = ảnh bày bàn dự phòng.
// màu nền (tint) và màu nước (wash) theo tranh của từng tháng; shot = ảnh bày bàn của tháng.
// Chỉ dùng ảnh bày bàn (tờ lịch nhỏ trong khung, độ phân giải web) để tránh bị lấy tranh đi in lại.
export const look2027: Record<string, { tint: string; wash: string; card?: string; shot?: string }> = {
  "01": { tint: "#F5EBD3", wash: "#E9C46A", card: "/assets/lich2027_01.webp" },
  "02": { tint: "#E3EAD3", wash: "#8FB573", card: "/assets/lich2027_02.webp" },
  "03": { tint: "#F2E0CF", wash: "#D9895B", card: "/assets/lich2027_03.webp" },
  "04": { tint: "#F4E1E1", wash: "#D98C9A", card: "/assets/lich2027_04.webp" },
  "05": { tint: "#F7EDC8", wash: "#F0C24B" },
  "06": { tint: "#DCEBE6", wash: "#5AA9C9", shot: "/assets/calendar2027_1.webp" },
  "07": { tint: "#E4E3EE", wash: "#8C88B8" },
  "08": { tint: "#F1E2D2", wash: "#D99A62", shot: "/assets/calendar2027_2.webp" },
  "09": { tint: "#DDE9D5", wash: "#6FA35A" },
  "10": { tint: "#F3E6D8", wash: "#D4A373" },
  "11": { tint: "#EDE4D3", wash: "#B9975B" },
  "12": { tint: "#E9E1DA", wash: "#A47E6B" },
};

// mặt sau mỗi tờ lịch
export const back2027 = [
  { k: "lịch âm" },
  { k: "thông điệp" },
  { k: "chỗ ghi chú" },
];

import type { ItineraryDay } from "@/components/ItinerarySchedule";

export const days: ItineraryDay[] = [
  {
    id: "day1",
    label: "ngày 01 · ngày đầu",
    theme: "nhìn lại những gì đang làm mình nặng nề",
    rows: [
      { time: "07:00–08:00", title: "đón xe ở thị trấn", details: ["gặp nhau ở cổng chợ măng đen, dạo một vòng thị trấn."] },
      { time: "08:00–10:00", title: "ăn sáng", details: ["cafe tại một tiệm cafe quen của nhà mộc.", "gặp gỡ nhà mộc, nhận phòng & nghỉ ngơi"] },
      { time: "10:00–10:30", title: "bữa trưa đầu tiên cùng nhau", details: ["mỳ lạnh."] },
      { time: "11:30–12:30", title: "nghỉ trưa" },
      { time: "12:30–14:00", title: "workshop: chén trà tháng năm", details: ["một buổi chiều bên chén trà nhẹ nhàng để quay về với bản thân."] },
      { time: "14:00–16:00", title: "đi dạo bộ thong dong ngắm hoàng hôn" },
      { time: "17:30–19:30", title: "cùng chuẩn bị & thưởng thức bữa tối", details: ["nui đút lò & soup.", "dùng bữa thật khẽ khàng trong ánh nến dịu dàng."] },
      { time: "20:30–21:30", title: "đêm thương mình", details: ["ngồi yên dưới ánh nến — chạm vào những gì đang vướng trong lòng.", "trò chuyện về những gì đang làm ta bận tâm.", "hướng dẫn cách ngủ ngon trong kén nhỏ."] },
    ],
  },
  {
    id: "day2",
    label: "ngày 02 · ngày thứ hai",
    theme: "học cách buông bớt",
    rows: [
      { time: "05:30–06:30", title: "buổi sáng rỗng rang", details: ["thức dậy, vệ sinh cá nhân. bước ra ngoài, đi dạo thật chậm rãi, cảm nhận buổi sáng tinh sương."] },
      { time: "06:30–07:30", title: "bữa sáng tinh khôi", details: ["xôi xéo.", "phụ nhà mộc làm việc nhà, quét sàn, sau đó lên phòng thở để ngồi tĩnh lặng. nhận thông điệp đầu ngày, chuẩn bị đồ picnic."] },
      { time: "08:00–10:45", title: "đi bộ chậm trong rừng", details: ["hiking trong rừng kon tu răng.", "ngắm nhìn chậm và suy ngẫm. ngồi yên.", "workshop vẽ màu nước."] },
      { time: "11:15–12:00", title: "bữa trưa,  ăn tĩnh lặng", details: ["miến trộn. dùng bữa trong im lặng."] },
      { time: "13:00–15:30", title: "workshop: thương thân - chăm sóc cơ thể", details: ["học cách hiểu và chăm sóc cơ thể của mình."] },
      { time: "16:30–19:30", title: "cùng nhau nấu bữa & thưởng thức tiệc tối", details: ["lẩu lá giang."] },
      { time: "19:30–21:30", title: "rạp chiếu phim là mộng", details: ["“song of the sea” - bước vào thế giới là mộng, để những cảm xúc được định nghĩa thành lời."] },
    ],
  },
  {
    id: "day3",
    label: "ngày 03 · ngày giữa",
    theme: "tìm khoảng yên trong lòng",
    rows: [
      { time: "05:30–06:30", title: "buổi sáng rỗng rang", details: ["thức dậy, vệ sinh cá nhân. đi dạo thật chậm rãi, cảm nhận buổi sáng tinh sương."] },
      { time: "06:30–07:30", title: "bữa sáng tinh khôi", details: ["cháo đậu đỏ. nhận thông điệp đầu ngày."] },
      { time: "08:00–10:45", title: "đi bộ chậm trong rừng", details: ["đến thác lô 3. ngồi yên giữa rừng.", "đọc sách cùng nhau dưới tán rừng. chơi trò chơi cùng nhau."] },
      { time: "11:00–11:30", title: "bữa trưa trong rừng", details: ["cơm bento."] },
      { time: "14:00–15:30", title: "workshop: thương nhà - chăm lại không gian sống", details: ["cách chăm sóc không gian sống của mình."] },
      { time: "16:00–18:00", title: "mời trà tỏ tường", details: ["nhà mộc mời bạn tham gia một buổi uống trà giúp làm sáng tỏ những điều bên trong lòng. an toàn, cởi mở và chân thật."] },
      { time: "16:30–19:30", title: "cùng chuẩn bị & thưởng thức", details: ["mẹt bún đậu."] },
      { time: "19:30–21:30", title: "đêm thư thái", details: ["cùng ngồi bên bếp lửa - đọc sách, đan len.", "xem diện tướng để hiểu mình.", "ngâm chân thảo mộc."] },
    ],
  },
  {
    id: "day4",
    label: "ngày 04 · ngày thứ tư",
    theme: "mở rộng, thở nhẹ hơn",
    rows: [
      { time: "05:30–06:30", title: "buổi sáng rỗng rang" },
      { time: "06:30–07:30", title: "bữa sáng tinh khôi", details: ["bánh hẹ."] },
      { time: "08:00–10:45", title: "đi bộ và ngắm cảnh", details: ["đi tản bộ ở đèo cũ. ngồi yên, ngắm nhìn toàn cảnh măng đen.", "thưởng thức các món nước của tiệm tayata hike."] },
      { time: "11:30–12:30", title: "bữa trưa,  ăn tĩnh lặng", details: ["bún nghệ."] },
      { time: "14:00–15:30", title: "workshop: làm bánh mỳ ngọt" },
      { time: "16:30–19:30", title: "cùng chuẩn bị & thưởng thức", details: ["bánh căn & soup rau củ."] },
      { time: "19:30–21:30", title: "đêm hát ca bềnh bồng" },
    ],
  },
  {
    id: "day5",
    label: "ngày 05 · ngày cuối",
    theme: "sống nhẹ nhàng",
    rows: [
      { time: "05:30–06:30", title: "buổi sáng rỗng rang" },
      { time: "06:30–07:30", title: "bữa sáng tinh khôi", details: ["bánh pancake."] },
      { time: "08:30–10:00", title: "tập yoga cùng thuận", details: ["học cách nghe cơ thể."] },
      { time: "10:00–11:00", title: "ngồi yên trong không gian yên tĩnh", details: ["chậm rãi ngồi uống một ly nước nhà làm, thưởng thức sự tĩnh lặng.", "sắp xếp thời gian tham gia hoạt động viết lưu bút."] },
      { time: "11:30–12:30", title: "cùng nhau nấu và thưởng thức bữa trưa chia tay" },
      { time: "14:00–14:30", title: "buổi chia tay", details: ["cùng chia sẻ về những gì đã trải nghiệm ở mlf, về hành trình đã qua.", "tặng quà lưu niệm và tạm biệt."] },
      { time: "14:30", title: "đưa các bạn ra thị trấn để về" },
    ],
  },
];

const navLabels = ["nhìn lại", "buông bớt", "ở-yên", "mở lòng", "thảnh thơi"];

export const journeyNav = days.map((d, i) => ({
  anchor: `#${d.id}`,
  num: String(i + 1).padStart(2, "0"),
  short: navLabels[i] ?? d.theme,
}));

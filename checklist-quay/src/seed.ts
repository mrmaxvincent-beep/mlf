import type { Data, Day, Kind, Shot, Slot } from "./types";

type ShotSeed = {
  code?: number;
  title: string;
  description?: string;
  kind?: Kind;
  gem?: boolean;
  note?: string;
};
type SlotSeed = { time?: string; title: string; place?: string; note?: string; shots: ShotSeed[] };
type DaySeed = Omit<Day, "sort"> & { slots: SlotSeed[] };

/** ⭐ cảnh đắt giá (có mã #01–#42) */
const g = (code: number, title: string, description?: string, note?: string): ShotSeed => ({
  code,
  title,
  description,
  note,
  gem: true,
});
const s = (title: string, description?: string, note?: string): ShotSeed => ({ title, description, note });
const k = (kind: Kind, title: string, description?: string, note?: string): ShotSeed => ({
  kind,
  title,
  description,
  note,
});

const BEP5H = k("motif", "Bếp 5 giờ sáng", "Cùng góc máy");

export const SEED_DAYS: DaySeed[] = [
  {
    id: 1,
    label: "Ngày 1",
    date: "2026-11-24",
    title: "Trà, suối, làng, thảnh thơi",
    tone: "Chiều sâu tâm tưởng",
    slots: [
      { time: "05:00", title: "Bếp 5 giờ sáng", note: "Nếu đoàn kịp có mặt", shots: [BEP5H] },
      {
        time: "09:00",
        title: "Không gian trà",
        shots: [
          g(8, "Chuẩn bị một buổi trà", "Lau bàn, chọn chén, cắm hoa, đun nước"),
          g(2, "Ấm nước reo", "Tiếng sôi lớn dần rồi chuyển thành tiếng rót trà"),
        ],
      },
      {
        time: "11:30",
        title: "Bữa trưa",
        shots: [
          g(4, "Lặng trước bữa ăn", "Một nhịp im trước khi cầm đũa"),
          g(5, "Bữa cơm có câu chuyện", "Vừa ăn vừa trò chuyện, cười đùa"),
          g(6, "Rửa chén cạnh nhau"),
        ],
      },
      {
        time: "14:00",
        title: "Làng Kontuma · điểm trường mầm non",
        shots: [
          g(36, "Đường vào làng", "Góc máy thấp ngang bước chân, June chạy trước"),
          g(17, "Những đứa trẻ ở trường mầm non", "Bàn tay, gương mặt, tiếng cười, trò chơi"),
          {
            code: 16,
            title: "Đã hủy",
            description: "Trước là “Bữa cơm tại nhà người bạn H'rê”",
            note: "Đã hủy, không quay",
          },
          s("Nhà chứa thóc, cầu gỗ", "Cảnh phụ để cắt nối"),
        ],
      },
      {
        time: "15:30",
        title: "Kontuma · rừng thông, suối lớn",
        shots: [
          g(35, "Người nhỏ giữa rừng lớn"),
          g(37, "Ngâm chân bên suối"),
          g(38, "Pha trà bên suối"),
          k("audio", "Ghi âm suối, gió qua thông, bước chân"),
        ],
      },
      { time: "17:30", title: "Hoàng hôn Măng Đen", shots: [g(23, "Hoàng hôn sau lưng người")] },
      { time: "18:30", title: "Bữa tối", shots: [g(15, "Những tiếng cười bất chợt")] },
      {
        time: "20:00",
        title: "Buổi tối tầng trên",
        shots: [
          g(14, "Khi không ai nói gì"),
          g(11, "Một người nói, một người nghe"),
          g(18, "Gương mặt người nghe"),
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Ngày 2",
    date: "2026-11-25",
    title: "Thác Lô 3, đèo cũ, bữa tối",
    tone: "Chiều sâu tâm tưởng",
    slots: [
      {
        time: "05:00",
        title: "Bếp sáng",
        shots: [
          BEP5H,
          g(1, "Ô cửa bếp sáng đèn", "Hình mở và hình khép của phim"),
          g(3, "Nhiều đôi tay trong một khung bếp"),
          g(12, "Một khoảnh khắc chăm sóc"),
        ],
      },
      {
        time: "09:30",
        title: "Thác Lô 3",
        shots: [
          g(39, "Thác Lô 3", undefined, "Đã chốt địa điểm: Thác Lô 3"),
          g(41, "Bàn chân trên đá"),
          g(42, "Bóng mây"),
          k("interview", "Trò chuyện cùng Như, Khanh và Cà Chua", "Sáng, bên suối ở Thác Lô 3"),
        ],
      },
      { time: "13:00", title: "Đường đèo cũ", shots: [g(40, "Cà Chua trên đèo cũ")] },
      {
        time: "18:30",
        title: "Bữa tối trải chiếu",
        shots: [
          g(13, "Một khoảnh khắc không cùng nhịp"),
          g(26, "Lửa"),
          s("Bữa tối trải chiếu", "Tương tác tự nhiên"),
          k("interview", "Trò chuyện cùng Cà Chua", "Nếu chưa có"),
          k("audio", "Ghi âm nước sôi, dao thớt, rót trà, côn trùng đêm"),
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Ngày 3",
    date: "2026-11-26",
    title: "Không gian nhà mộc, trong và ngoài",
    tone: "Duy mỹ",
    slots: [
      {
        time: "05:00",
        title: "Rạng sáng và buổi sáng phía sau nhà mộc",
        shots: [
          { ...BEP5H },
          g(27, "Thuận · Yoga trong sương sớm"),
          g(33, "Tâm · Quét sân"),
          s("June và Đông Đông", "Quay cả ngày khi xuất hiện"),
        ],
      },
      {
        time: "09:30",
        title: "Trong nhà",
        shots: [g(9, "Một góc nhà"), g(10, "Đồ vật nằm im"), s("Góc ăn trưa một mình")],
      },
      {
        time: "14:00",
        title: "Ngoài nhà và thực tập riêng",
        shots: [
          g(30, "Vũ · Vẽ"),
          g(34, "Tâm · Một mình"),
          s("Tưới cây, đi dạo, khoảng lặng trong vườn"),
        ],
      },
      {
        time: "15:00",
        title: "Bàn may của Thuận",
        shots: [
          g(28, "Thuận · Ngồi may"),
          g(29, "Thuận · Đôi tay của Thuận"),
          k("interview", "Phỏng vấn Thuận", "Yoga, thuận dưỡng, thuần"),
        ],
      },
      {
        time: "16:00",
        title: "Bếp và bàn trà của Vũ",
        shots: [
          g(31, "Vũ · Trong căn bếp"),
          g(7, "Làm bánh, chờ lò"),
          g(32, "Vũ · Đôi tay của Vũ"),
          k("interview", "Phỏng vấn Vũ", "Bếp, bánh, trà, tranh"),
        ],
      },
      {
        time: "17:00",
        title: "Trò chuyện",
        shots: [
          k("interview", "Phỏng vấn Tâm", "Vì sao nơi này có mặt"),
        ],
      },
      {
        time: "21:30",
        title: "Chuyến xe đêm",
        note: "Nếu có chặng đi đêm",
        shots: [g(24, "Chuyến xe đêm", "Tiếng radio văng vẳng")],
      },
    ],
  },
  {
    id: 4,
    label: "Ngày 4",
    date: "2026-11-27",
    title: "Trò chuyện và bữa cơm chào nhau",
    tone: "Duy mỹ",
    slots: [
      {
        time: "05:00",
        title: "Rạng sáng",
        shots: [k("motif", "Bếp 5 giờ sáng", "Ngày khép lại")],
      },
      {
        time: "08:00",
        title: "Quay backup",
        note: "Bù các cảnh chưa kịp từ ngày 1–3 (kể cả phỏng vấn Tâm, Vũ, Thuận nếu thiếu)",
        shots: [],
      },
      {
        time: "12:30",
        title: "Bữa cơm chào nhau",
        shots: [
          s("Bữa cơm chào nhau", "Cả nhà quây quần"),
          s("Một khoảnh khắc chăm sóc hoặc lặng im cuối cùng", "Không cần cảnh chia tay"),
          s("Cảnh kết", "Đời sống vẫn tiếp tục"),
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Cảnh cơ hội",
    date: null,
    title: "Quay bất kỳ ngày nào gặp",
    tone: null,
    slots: [
      {
        title: "Phụ thuộc thời tiết và ánh sáng",
        shots: [
          g(19, "Mây sà xuống", "Rạng sáng, mây trôi thấp qua đồi thông"),
          g(20, "Trời chuyển sắc", "Từ xám sang hồng, cùng một góc nhìn"),
          g(21, "Sương bốc khỏi mặt suối", "Tia nắng đầu tiên chạm mặt nước"),
          g(22, "Cơn mưa Măng Đen", "Mành nước nhỏ từ mái hiên, một người đứng nhìn mưa"),
          g(25, "Gió qua cỏ"),
        ],
      },
    ],
  },
];

export function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function buildSeed(): Data {
  const days: Day[] = [];
  const slots: Slot[] = [];
  const shots: Shot[] = [];
  SEED_DAYS.forEach((d, di) => {
    const { slots: dslots, ...day } = d;
    days.push({ ...day, sort: di + 1 });
    dslots.forEach((sl, si) => {
      const slot: Slot = {
        id: uid(),
        day_id: d.id,
        start_time: sl.time ?? null,
        title: sl.title,
        place: sl.place ?? null,
        note: sl.note ?? null,
        sort: si,
      };
      slots.push(slot);
      sl.shots.forEach((sh, hi) => {
        shots.push({
          id: uid(),
          slot_id: slot.id,
          code: sh.code ?? null,
          title: sh.title,
          description: sh.description ?? null,
          kind: sh.kind ?? "scene",
          is_gem: !!sh.gem,
          is_extra: false,
          status: "todo",
          note: sh.note ?? null,
          done_by: null,
          done_at: null,
          sort: hi,
          created_at: new Date().toISOString(),
        });
      });
    });
  });
  return { days, slots, shots };
}

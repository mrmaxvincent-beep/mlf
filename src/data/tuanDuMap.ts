export type LonLat = [number, number];

export type TripStatus = "done" | "upcoming" | "planned";

/** `stops` là id các điểm theo đúng thứ tự đi — đường đi trên bản đồ vẽ theo thứ tự này. */
export type MapTrip = { num: string; status: TripStatus; stops: string[] };

export type Landmark = {
  id: string;
  name: string;
  pos: LonLat;
  region: string;
};

/** `anchor` là chỗ đặt nhãn cụm ở tầng toàn cảnh — đặt ra ngoài biển/khoảng trống để không che các chấm. */
export type MapRegion = { id: string; name: string; bounds: [LonLat, LonLat]; anchor: LonLat };

export const trips: MapTrip[] = [
  { num: "01", status: "done", stops: ["pho-co", "co-loa", "den-do", "phat-tich", "but-thap", "kinh-duong-vuong", "lac-long-quan", "au-co", "den-hung", "hoa-lu", "bai-dinh", "trang-an", "am-tien", "hang-mua", "tam-coc"] },
  { num: "02", status: "done", stops: ["quoc-hoc", "thanh-noi", "tinh-tam", "tang-thu", "lang-tu-duc", "tu-hieu", "lang-gia-long", "thien-mu", "huyen-khong", "vong-canh", "nam-giao", "thanh-tien", "lang-sinh", "bao-vinh"] },
  { num: "03", status: "done", stops: ["bo-da", "vinh-nghiem", "tay-yen-tu", "yen-tu", "ngoa-van", "con-son", "chua-giam", "lang-nom"] },
  { num: "04", status: "done", stops: ["suoi-rao"] },
  { num: "05", status: "upcoming", stops: ["chua-huong", "van-long", "chau-son", "bac-trach", "chua-keo", "ngoa-van", "thanh-mai", "phu-lang"] },
  { num: "06", status: "planned", stops: ["that-son"] },
  { num: "07", status: "planned", stops: ["an-do", "nepal"] },
  { num: "08", status: "planned", stops: ["himalaya"] },
];

export const regions: MapRegion[] = [
  { id: "bac-bo", name: "đồng bằng Bắc Bộ", bounds: [[104.9, 20.1], [106.85, 21.65]], anchor: [109.7, 21.4] },
  { id: "hue", name: "Huế", bounds: [[107.49, 16.34], [107.64, 16.53]], anchor: [109.5, 18.6] },
  { id: "nam-bo", name: "Nam Bộ", bounds: [[104.6, 9.9], [107.6, 11.3]], anchor: [108.9, 9.3] },
  { id: "an-do-nepal", name: "Ấn Độ · Nepal", bounds: [[82.2, 24.0], [86.4, 29.2]], anchor: [88.4, 31.0] },
];

export const landmarks: Landmark[] = [
  { id: "pho-co", name: "phố cổ Hà Nội", pos: [105.851, 21.034], region: "bac-bo" },
  { id: "co-loa", name: "Cổ Loa", pos: [105.873, 21.115], region: "bac-bo" },
  { id: "den-do", name: "Đền Đô", pos: [105.958, 21.118], region: "bac-bo" },
  { id: "phat-tich", name: "chùa Phật Tích", pos: [106.027, 21.092], region: "bac-bo" },
  { id: "but-thap", name: "chùa Bút Tháp", pos: [106.09, 21.078], region: "bac-bo" },
  { id: "kinh-duong-vuong", name: "đền Kinh Dương Vương", pos: [106.062, 21.058], region: "bac-bo" },
  { id: "lac-long-quan", name: "đền Lạc Long Quân", pos: [105.33, 21.38], region: "bac-bo" },
  { id: "au-co", name: "đền Mẫu Âu Cơ", pos: [105.02, 21.56], region: "bac-bo" },
  { id: "den-hung", name: "quần thể đền Hùng", pos: [105.318, 21.367], region: "bac-bo" },
  { id: "hoa-lu", name: "cố đô Hoa Lư", pos: [105.91, 20.285], region: "bac-bo" },
  { id: "bai-dinh", name: "chùa Bái Đính", pos: [105.845, 20.272], region: "bac-bo" },
  { id: "trang-an", name: "quần thể Tràng An", pos: [105.885, 20.245], region: "bac-bo" },
  { id: "am-tien", name: "động Am Tiên", pos: [105.928, 20.292], region: "bac-bo" },
  { id: "hang-mua", name: "Hang Múa", pos: [105.935, 20.229], region: "bac-bo" },
  { id: "tam-coc", name: "Tam Cốc", pos: [105.93, 20.214], region: "bac-bo" },

  { id: "quoc-hoc", name: "Quốc học Huế", pos: [107.584, 16.461], region: "hue" },
  { id: "thanh-noi", name: "Thành Nội", pos: [107.578, 16.469], region: "hue" },
  { id: "tinh-tam", name: "hồ Tịnh Tâm", pos: [107.575, 16.479], region: "hue" },
  { id: "tang-thu", name: "hồ Tàng Thư", pos: [107.569, 16.474], region: "hue" },
  { id: "lang-tu-duc", name: "lăng Tự Đức", pos: [107.565, 16.433], region: "hue" },
  { id: "tu-hieu", name: "chùa Từ Hiếu", pos: [107.553, 16.436], region: "hue" },
  { id: "lang-gia-long", name: "lăng Gia Long", pos: [107.586, 16.356], region: "hue" },
  { id: "thien-mu", name: "chùa Thiên Mụ", pos: [107.545, 16.453], region: "hue" },
  { id: "huyen-khong", name: "Huyền Không Sơn Thượng", pos: [107.512, 16.441], region: "hue" },
  { id: "vong-canh", name: "đồi Vọng Cảnh", pos: [107.559, 16.426], region: "hue" },
  { id: "nam-giao", name: "đàn Nam Giao", pos: [107.581, 16.445], region: "hue" },
  { id: "thanh-tien", name: "làng Thanh Tiên", pos: [107.622, 16.508], region: "hue" },
  { id: "lang-sinh", name: "làng Sình", pos: [107.611, 16.52], region: "hue" },
  { id: "bao-vinh", name: "làng cổ Bao Vinh", pos: [107.585, 16.494], region: "hue" },

  { id: "bo-da", name: "chùa Bổ Đà", pos: [106.065, 21.24], region: "bac-bo" },
  { id: "vinh-nghiem", name: "chùa Vĩnh Nghiêm", pos: [106.235, 21.29], region: "bac-bo" },
  { id: "tay-yen-tu", name: "Tây Yên Tử", pos: [106.745, 21.2], region: "bac-bo" },
  { id: "yen-tu", name: "Đông Yên Tử", pos: [106.718, 21.155], region: "bac-bo" },
  { id: "ngoa-van", name: "am Ngọa Vân", pos: [106.592, 21.17], region: "bac-bo" },
  { id: "con-son", name: "Côn Sơn – Kiếp Bạc", pos: [106.39, 21.14], region: "bac-bo" },
  { id: "chua-giam", name: "chùa Giám", pos: [106.215, 20.985], region: "bac-bo" },
  { id: "lang-nom", name: "làng Nôm", pos: [106.06, 20.975], region: "bac-bo" },

  { id: "suoi-rao", name: "Suối Rao", pos: [107.32, 10.66], region: "nam-bo" },

  { id: "chua-huong", name: "chùa Hương", pos: [105.748, 20.617], region: "bac-bo" },
  { id: "van-long", name: "đầm Vân Long", pos: [105.875, 20.375], region: "bac-bo" },
  { id: "chau-son", name: "đan viện Châu Sơn", pos: [105.78, 20.33], region: "bac-bo" },
  { id: "bac-trach", name: "nhà thờ Bác Trạch", pos: [106.56, 20.38], region: "bac-bo" },
  { id: "chua-keo", name: "chùa Keo", pos: [106.3, 20.44], region: "bac-bo" },
  { id: "thanh-mai", name: "chùa Thanh Mai", pos: [106.44, 21.135], region: "bac-bo" },
  { id: "phu-lang", name: "làng gốm Phù Lãng", pos: [106.275, 21.165], region: "bac-bo" },

  { id: "that-son", name: "Thất Sơn", pos: [104.99, 10.51], region: "nam-bo" },

  { id: "an-do", name: "Ấn Độ", pos: [84.99, 24.7], region: "an-do-nepal" },
  { id: "nepal", name: "Nepal", pos: [83.28, 27.47], region: "an-do-nepal" },
  { id: "himalaya", name: "Himalaya", pos: [84.0, 28.55], region: "an-do-nepal" },
];

export const home: { name: string; pos: LonLat } = { name: "nhà mộc · Măng Đen", pos: [108.27, 14.61] };

export const islands: { name: string; dots: LonLat[] }[] = [
  { name: "Hoàng Sa", dots: [[111.6, 16.5], [112.3, 16.8], [111.9, 16.2], [112.6, 16.45]] },
  { name: "Trường Sa", dots: [[113.9, 9.8], [114.4, 10.4], [114.9, 9.4], [114.2, 8.8], [115.4, 10.0]] },
];

/** Đường viền giản lược, vẽ tay — đủ để nhận ra hình dáng, không nhằm chính xác tuyệt đối. */
export const outlines: { name: string; label: LonLat; points: LonLat[] }[] = [
  {
    name: "Việt Nam",
    label: [104.3, 17.0],
    points: [
      [105.32, 23.36], [106.7, 22.9], [107.4, 22.6], [108.0, 21.55], [107.3, 21.0], [106.8, 20.75], [106.65, 20.4], [106.45, 20.1], [106.1, 19.95],
      [105.8, 19.3], [105.75, 18.8], [106.1, 18.2], [106.6, 17.5], [107.15, 16.95], [107.45, 16.72], [107.68, 16.56], [107.9, 16.35], [108.2, 16.05], [108.8, 15.4],
      [109.05, 14.6], [109.25, 13.8], [109.3, 13.0], [109.2, 12.2], [109.0, 11.6], [108.7, 11.2], [108.1, 10.9], [107.2, 10.4],
      [106.7, 10.2], [106.4, 9.6], [105.6, 8.9], [104.85, 8.6], [104.8, 9.2], [104.9, 9.8], [104.5, 10.4], [105.05, 10.9],
      [106.0, 11.15], [106.5, 11.9], [107.5, 12.25], [107.6, 13.0], [107.5, 14.3], [107.55, 14.7], [107.6, 15.5], [107.0, 16.3],
      [106.5, 16.6], [106.1, 17.35], [105.6, 18.1], [105.1, 18.6], [104.0, 19.2], [104.6, 19.7], [104.3, 20.1], [103.2, 20.8],
      [102.2, 21.4], [102.14, 22.4], [102.5, 22.8], [103.3, 22.75], [103.97, 22.5], [104.4, 22.8], [105.32, 23.36],
    ],
  },
  {
    name: "Ấn Độ",
    label: [78.2, 22.0],
    points: [
      [77.0, 35.5], [78.5, 34.0], [79.0, 32.5], [78.8, 31.0], [80.2, 30.0], [80.1, 28.8], [81.0, 28.4], [83.0, 27.4], [84.6, 27.3],
      [85.8, 26.6], [88.1, 26.4], [88.2, 27.2], [88.8, 27.9], [88.9, 27.1], [89.8, 26.7], [92.0, 26.8], [94.5, 28.3], [97.3, 28.2],
      [96.0, 27.0], [95.2, 26.0], [94.6, 24.5], [93.3, 23.0], [92.6, 22.1], [92.3, 24.2], [91.0, 25.2], [89.9, 25.3], [88.6, 24.3],
      [88.7, 23.2], [89.0, 22.0], [87.5, 21.6], [86.9, 20.6], [85.8, 19.8], [84.8, 19.2], [83.3, 17.7], [82.2, 16.6], [81.1, 15.8],
      [80.2, 15.0], [80.3, 13.1], [79.8, 11.6], [79.3, 10.3], [78.2, 8.9], [77.5, 8.1], [76.5, 8.9], [76.0, 10.3], [75.3, 11.9],
      [74.6, 13.5], [74.0, 15.0], [73.3, 17.0], [72.8, 19.0], [72.6, 21.1], [70.9, 20.8], [69.1, 22.3], [68.4, 23.6], [71.1, 24.4],
      [70.4, 25.7], [70.0, 27.0], [71.9, 27.9], [73.4, 29.9], [74.6, 31.1], [75.4, 32.3], [74.6, 32.9], [74.5, 34.7], [77.0, 35.5],
    ],
  },
  {
    name: "Nepal",
    label: [82.6, 30.4],
    points: [
      [80.2, 30.0], [81.3, 30.2], [82.6, 29.7], [84.2, 29.0], [85.9, 28.2], [86.9, 28.0], [88.1, 27.9], [88.2, 27.2], [88.1, 26.4],
      [85.8, 26.6], [84.6, 27.3], [83.0, 27.4], [81.0, 28.4], [80.1, 28.8], [80.2, 30.0],
    ],
  },
];

export function tripsOf(landmarkId: string) {
  return trips.filter((t) => t.stops.includes(landmarkId)).map((t) => t.num);
}

export type Species = { id: string; name: string };
export type Story = { slug: string; speciesId: string; seedName: string; author: string; body: string };

const placeholder = "nội dung đang cập nhật.";

/**
 * Danh sách loài hạt cố định, KHÔNG xếp theo số người nuôi nhiều nhất (tránh biến thành
 * bảng xếp hạng lượt thích) — xếp cố định theo vần. Nhà mộc gom các "tên hạt" người gửi
 * đặt vào một trong các loài này khi duyệt; thêm loài mới khi có hạt không vừa loài nào.
 */
export const species: Species[] = [
  { id: "kien-nhan", name: "hạt kiên nhẫn" },
  { id: "buong", name: "hạt buông" },
  { id: "nghi-ngoi", name: "hạt nghỉ ngơi" },
  { id: "tha-thu", name: "hạt tha thứ" },
  { id: "co-mat", name: "hạt có mặt" },
  { id: "tu-thuong-minh", name: "hạt tự thương mình" },
  { id: "lang-nghe", name: "hạt lắng nghe" },
  { id: "biet-on", name: "hạt biết ơn" },
  { id: "chap-nhan", name: "hạt chấp nhận" },
  { id: "can-dam", name: "hạt can đảm" },
  { id: "tin-tuong", name: "hạt tin tưởng" },
  { id: "ranh-gioi", name: "hạt ranh giới" },
];

/** Câu chuyện đã được nhà mộc duyệt và gom vào từng loài hạt — demo minh họa, thay bằng bài thật khi có. */
export const stories: Story[] = [
  { slug: "kien-nhan-voi-con", speciesId: "kien-nhan", seedName: "kiên nhẫn với con", author: "một người mẹ", body: placeholder },
  { slug: "ngu-truoc-muoi-hai-gio", speciesId: "nghi-ngoi", seedName: "ngủ trước mười hai giờ", author: "ẩn danh", body: placeholder },
  { slug: "tha-thu-cho-me", speciesId: "tha-thu", seedName: "tha thứ cho mẹ", author: "ẩn danh", body: placeholder },
  { slug: "thoi-lam-vua-long-moi-nguoi", speciesId: "ranh-gioi", seedName: "thôi làm vừa lòng mọi người", author: "một người bạn", body: placeholder },
];

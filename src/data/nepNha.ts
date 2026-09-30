export type Section = { id: string; roman: string; name: string; body: string };

const placeholder = "nội dung đang cập nhật.";

/** 6 mục của nếp nhà — demo layout, thay nội dung thật khi có. */
export const sections: Section[] = [
  { id: "khong-gian-song", roman: "I", name: "không gian sống", body: placeholder },
  { id: "than-the", roman: "II", name: "thân thể", body: placeholder },
  { id: "tam-hon", roman: "III", name: "tâm hồn", body: placeholder },
  { id: "nghi-thuc-song", roman: "IV", name: "nghi thức sống", body: placeholder },
  { id: "song-cung-nhau", roman: "V", name: "sống cùng nhau", body: placeholder },
  { id: "mot-ngay-song-vua-van", roman: "VI", name: "một ngày sống vừa vặn", body: placeholder },
];

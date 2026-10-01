export type Note = { slug: string; title: string; paragraphs: string[] };

export const editor = {
  name: "Khanh Trần",
  role: "chủ biên ghi chép ở-yên",
  bio: [] as string[],
};

export const notes: Note[] = [
  {
    slug: "demo-bai-viet-mot",
    title: "ở-yên không có nghĩa là không làm gì",
    paragraphs: ["nội dung đang cập nhật."],
  },
  {
    slug: "demo-bai-viet-hai",
    title: "tại sao ta không thể yên",
    paragraphs: ["nội dung đang cập nhật."],
  },
  {
    slug: "demo-bai-viet-ba",
    title: "hạt giống cần được để yên để nảy mầm",
    paragraphs: ["nội dung đang cập nhật."],
  },
];

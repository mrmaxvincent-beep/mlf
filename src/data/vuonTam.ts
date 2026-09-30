export type Story = { slug: string; id: string; title: string; body: string };

const placeholder = "nội dung đang cập nhật.";

/** Những câu chuyện gieo trồng, chăm sóc hạt giống tâm — demo minh họa, thay bằng chia sẻ thật khi có. */
export const stories: Story[] = [
  { slug: "cau-chuyen-01", id: "01", title: "một câu chuyện đang chờ được kể", body: placeholder },
  { slug: "cau-chuyen-02", id: "02", title: "một câu chuyện đang chờ được kể", body: placeholder },
  { slug: "cau-chuyen-03", id: "03", title: "một câu chuyện đang chờ được kể", body: placeholder },
];

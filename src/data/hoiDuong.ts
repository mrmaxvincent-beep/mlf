export type QA = { q: string; a: string };
export type Topic = { id: string; name: string; qas: QA[] };

/** Placeholder topics/nội dung — thay bằng câu hỏi & câu trả lời thật khi có. */
export const topics: Topic[] = [
  {
    id: "chu-de-1",
    name: "chủ đề 1",
    qas: [{ q: "câu hỏi đang cập nhật.", a: "câu trả lời đang cập nhật." }],
  },
  {
    id: "chu-de-2",
    name: "chủ đề 2",
    qas: [{ q: "câu hỏi đang cập nhật.", a: "câu trả lời đang cập nhật." }],
  },
  {
    id: "chu-de-3",
    name: "chủ đề 3",
    qas: [{ q: "câu hỏi đang cập nhật.", a: "câu trả lời đang cập nhật." }],
  },
];

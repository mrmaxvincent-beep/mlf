export type Kind = "scene" | "interview" | "audio" | "motif";
export type Status = "todo" | "done" | "extra_take";

export interface Day {
  id: number;
  label: string;
  date: string | null;
  title: string | null;
  tone: string | null;
  sort: number;
}

export interface Slot {
  id: string;
  day_id: number;
  start_time: string | null;
  title: string;
  place: string | null;
  note: string | null;
  sort: number;
}

export interface Shot {
  id: string;
  slot_id: string;
  code: number | null;
  title: string;
  description: string | null;
  kind: Kind;
  is_gem: boolean;
  is_extra: boolean;
  status: Status;
  note: string | null;
  done_by: string | null;
  done_at: string | null;
  sort: number;
  created_at: string | null;
}

export interface Data {
  days: Day[];
  slots: Slot[];
  shots: Shot[];
}

export type Table = "days" | "slots" | "shots";

export const KIND_LABEL: Record<Kind, string> = {
  scene: "Cảnh",
  interview: "Phỏng vấn",
  audio: "Ghi âm",
  motif: "Motif",
};

export const STATUS_LABEL: Record<Status, string> = {
  todo: "Chưa quay",
  done: "Đã quay",
  extra_take: "Đã quay dư",
};

import { createClient } from "@supabase/supabase-js";
import type { Data, Table } from "../types";

export type ChangeEvent =
  | { table: Table; type: "upsert"; row: Record<string, unknown> }
  | { table: Table; type: "delete"; id: string | number };

export interface Backend {
  mode: "supabase" | "local";
  load(): Promise<Data>;
  insert(table: Table, rows: object[]): Promise<void>;
  update(table: Table, id: string | number, patch: object): Promise<void>;
  remove(table: Table, id: string | number): Promise<void>;
  replaceAll(data: Data): Promise<void>;
  subscribe(onChange: (e: ChangeEvent) => void, onStatus: (ok: boolean) => void): () => void;
}

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const hasSupabase = !!(url && key);

function fail(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

function supabaseBackend(): Backend {
  const sb = createClient(url!, key!, { realtime: { params: { eventsPerSecond: 20 } } });
  return {
    mode: "supabase",
    async load() {
      const [d, sl, sh] = await Promise.all([
        sb.from("days").select("*").order("sort"),
        sb.from("slots").select("*"),
        sb.from("shots").select("*"),
      ]);
      fail(d.error);
      fail(sl.error);
      fail(sh.error);
      return { days: d.data ?? [], slots: sl.data ?? [], shots: sh.data ?? [] } as Data;
    },
    async insert(table, rows) {
      if (!rows.length) return;
      fail((await sb.from(table).upsert(rows)).error);
    },
    async update(table, id, patch) {
      fail((await sb.from(table).update(patch).eq("id", id)).error);
    },
    async remove(table, id) {
      fail((await sb.from(table).delete().eq("id", id)).error);
    },
    async replaceAll(data) {
      // days.id là int nên không dùng uuid được: xóa mọi ngày (cascade xuống slots, shots) rồi ghi lại.
      fail((await sb.from("days").delete().gte("id", 0)).error);
      fail((await sb.from("days").insert(data.days)).error);
      const chunk = 200;
      for (let i = 0; i < data.slots.length; i += chunk)
        fail((await sb.from("slots").insert(data.slots.slice(i, i + chunk))).error);
      for (let i = 0; i < data.shots.length; i += chunk)
        fail((await sb.from("shots").insert(data.shots.slice(i, i + chunk))).error);
    },
    subscribe(onChange, onStatus) {
      let ch = sb.channel("mlf-checklist");
      for (const table of ["days", "slots", "shots"] as Table[]) {
        ch = ch.on("postgres_changes", { event: "*", schema: "public", table }, (p) => {
          if (p.eventType === "DELETE") {
            const old = p.old as { id?: string | number };
            if (old.id !== undefined) onChange({ table, type: "delete", id: old.id });
          } else {
            onChange({ table, type: "upsert", row: p.new as Record<string, unknown> });
          }
        });
      }
      ch.subscribe((status) => onStatus(status === "SUBSCRIBED"));
      return () => {
        void sb.removeChannel(ch);
      };
    },
  };
}

const LS_KEY = "mlf.demo.data";

/** Chế độ thử trên máy khi chưa cấu hình Supabase: lưu trong localStorage, không đồng bộ. */
function localBackend(): Backend {
  const read = (): Data => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) return JSON.parse(raw) as Data;
    } catch {
      /* bỏ qua */
    }
    return { days: [], slots: [], shots: [] };
  };
  const write = (d: Data) => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(d));
    } catch {
      /* bỏ qua */
    }
  };
  return {
    mode: "local",
    async load() {
      return read();
    },
    async insert(table, rows) {
      const d = read();
      const list = d[table] as { id: string | number }[];
      for (const r of rows as { id: string | number }[]) {
        const i = list.findIndex((x) => x.id === r.id);
        if (i >= 0) list[i] = r;
        else list.push(r);
      }
      write(d);
    },
    async update(table, id, patch) {
      const d = read();
      const list = d[table] as { id: string | number }[];
      const i = list.findIndex((x) => x.id === id);
      if (i >= 0) list[i] = { ...list[i], ...patch };
      write(d);
    },
    async remove(table, id) {
      const d = read();
      if (table === "days") {
        const slotIds = new Set(d.slots.filter((s) => s.day_id === id).map((s) => s.id));
        d.shots = d.shots.filter((s) => !slotIds.has(s.slot_id));
        d.slots = d.slots.filter((s) => s.day_id !== id);
      } else if (table === "slots") {
        d.shots = d.shots.filter((s) => s.slot_id !== id);
      }
      (d as unknown as Record<string, { id: string | number }[]>)[table] = (
        d[table] as { id: string | number }[]
      ).filter((x) => x.id !== id);
      write(d);
    },
    async replaceAll(data) {
      write(data);
    },
    subscribe(_c, onStatus) {
      onStatus(true);
      return () => {};
    },
  };
}

export const backend: Backend = hasSupabase ? supabaseBackend() : localBackend();

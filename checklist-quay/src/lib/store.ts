import { useCallback, useEffect, useRef, useState } from "react";
import type { Data, Shot, Slot, Status, Table } from "../types";
import { backend, type ChangeEvent } from "./backend";
import { buildSeed, uid } from "../seed";

const EMPTY: Data = { days: [], slots: [], shots: [] };

function upsertRow<T extends { id: string | number }>(list: T[], row: T): T[] {
  const i = list.findIndex((x) => x.id === row.id);
  if (i < 0) return [...list, row];
  const next = list.slice();
  next[i] = { ...next[i], ...row };
  return next;
}

function applyEvent(d: Data, e: ChangeEvent): Data {
  if (e.type === "upsert") {
    return { ...d, [e.table]: upsertRow(d[e.table] as { id: string | number }[], e.row as { id: string }) };
  }
  if (e.table === "days") {
    const slotIds = new Set(d.slots.filter((s) => s.day_id === e.id).map((s) => s.id));
    return {
      days: d.days.filter((x) => x.id !== e.id),
      slots: d.slots.filter((s) => s.day_id !== e.id),
      shots: d.shots.filter((s) => !slotIds.has(s.slot_id)),
    };
  }
  if (e.table === "slots") {
    return {
      ...d,
      slots: d.slots.filter((x) => x.id !== e.id),
      shots: d.shots.filter((s) => s.slot_id !== e.id),
    };
  }
  return { ...d, shots: d.shots.filter((x) => x.id !== e.id) };
}

export type Store = ReturnType<typeof useStore>;

export function useStore(userName: string) {
  const [data, setData] = useState<Data>(EMPTY);
  const [loaded, setLoaded] = useState(false);
  const [online, setOnline] = useState(true);
  const [toast, setToast] = useState<string | null>(null);
  const ref = useRef<Data>(EMPTY);
  ref.current = data;

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast((t) => (t === msg ? null : t)), 3500);
  }, []);

  const reload = useCallback(async () => {
    try {
      setData(await backend.load());
      setLoaded(true);
    } catch (e) {
      showToast(`Không tải được dữ liệu: ${(e as Error).message}`);
    }
  }, [showToast]);

  useEffect(() => {
    void reload();
    const unsub = backend.subscribe(
      (e) => setData((d) => applyEvent(d, e)),
      (ok) => {
        setOnline(ok);
        if (ok) void reload();
      },
    );
    const onVisible = () => {
      if (document.visibilityState === "visible") void reload();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("online", onVisible);
    return () => {
      unsub();
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("online", onVisible);
    };
  }, [reload]);

  /** Cập nhật ngay trên máy, rồi ghi lên máy chủ; lỗi thì báo và tải lại. */
  const run = useCallback(
    async (optimistic: (d: Data) => Data, remote: () => Promise<void>) => {
      setData(optimistic);
      try {
        await remote();
      } catch (e) {
        showToast(`Lưu không được: ${(e as Error).message}`);
        void reload();
      }
    },
    [reload, showToast],
  );

  const patchRow = useCallback(
    (table: Table, id: string | number, patch: Record<string, unknown>) =>
      run(
        (d) =>
          applyEvent(d, {
            table,
            type: "upsert",
            row: { ...(d[table] as { id: string | number }[]).find((x) => x.id === id), ...patch },
          }),
        () => backend.update(table, id, patch),
      ),
    [run],
  );

  const nextSortInSlot = (slotId: string) =>
    ref.current.shots.filter((s) => s.slot_id === slotId).reduce((m, s) => Math.max(m, s.sort), -1) + 1;

  const actions = {
    setStatus(id: string, status: Status) {
      const patch =
        status === "todo"
          ? { status, done_by: null, done_at: null }
          : { status, done_by: userName, done_at: new Date().toISOString() };
      return patchRow("shots", id, patch);
    },
    patchShot: (id: string, patch: Partial<Shot>) => patchRow("shots", id, patch),
    patchSlot: (id: string, patch: Partial<Slot>) => patchRow("slots", id, patch),
    patchDay: (id: number, patch: Record<string, unknown>) => patchRow("days", id, patch),

    addShot(slotId: string, v: { title: string; is_gem: boolean; note: string }) {
      const row: Shot = {
        id: uid(),
        slot_id: slotId,
        code: null,
        title: v.title,
        description: null,
        kind: "scene",
        is_gem: v.is_gem,
        is_extra: true,
        status: "todo",
        note: v.note || null,
        done_by: null,
        done_at: null,
        sort: nextSortInSlot(slotId),
        created_at: new Date().toISOString(),
      };
      return run(
        (d) => ({ ...d, shots: [...d.shots, row] }),
        () => backend.insert("shots", [row]),
      );
    },
    deleteShot: (id: string) =>
      run(
        (d) => applyEvent(d, { table: "shots", type: "delete", id }),
        () => backend.remove("shots", id),
      ),

    moveShot(id: string, slotId: string) {
      return patchRow("shots", id, { slot_id: slotId, sort: nextSortInSlot(slotId) });
    },
    async moveShotToNewSlot(id: string, dayId: number, title: string) {
      const slot = actions.makeSlot(dayId, { start_time: null, title, place: null, note: null });
      await run(
        (d) => ({ ...d, slots: [...d.slots, slot] }),
        () => backend.insert("slots", [slot]),
      );
      await patchRow("shots", id, { slot_id: slot.id, sort: 0 });
    },

    makeSlot(
      dayId: number,
      v: { start_time: string | null; title: string; place: string | null; note: string | null },
    ): Slot {
      const sort =
        ref.current.slots.filter((s) => s.day_id === dayId).reduce((m, s) => Math.max(m, s.sort), -1) + 1;
      return { id: uid(), day_id: dayId, sort, ...v };
    },
    addSlot(dayId: number, v: { start_time: string | null; title: string; place: string | null; note: string | null }) {
      const slot = actions.makeSlot(dayId, v);
      return run(
        (d) => ({ ...d, slots: [...d.slots, slot] }),
        () => backend.insert("slots", [slot]),
      );
    },
    deleteSlot: (id: string) =>
      run(
        (d) => applyEvent(d, { table: "slots", type: "delete", id }),
        () => backend.remove("slots", id),
      ),

    async replaceAll(next: Data) {
      try {
        await backend.replaceAll(next);
        setData(next);
        showToast("Đã thay toàn bộ dữ liệu.");
      } catch (e) {
        showToast(`Ghi đè lỗi: ${(e as Error).message}`);
        void reload();
      }
    },
    loadSeed: () => actions.replaceAll(buildSeed()),
  };

  return { data, loaded, online, toast, showToast, mode: backend.mode, ...actions };
}

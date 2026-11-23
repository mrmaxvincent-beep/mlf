import { useEffect, useMemo, useState } from "react";
import { useStore } from "./lib/store";
import { Login, LS_CODE, LS_NAME, NEED_CODE, codeOk } from "./components/Login";
import { DayView, type Actions } from "./components/DayView";
import { ShotSheet } from "./components/ShotSheet";
import { StatusPicker } from "./components/StatusPicker";
import { MovePicker } from "./components/MovePicker";
import { SlotForm } from "./components/SlotForm";
import { AddShot } from "./components/AddShot";
import { MenuSheet } from "./components/MenuSheet";
import { DayForm } from "./components/DayForm";
import { SearchResults } from "./components/SearchResults";
import { Progress, btnPrimary } from "./components/ui";
import { statsOf, shotsOfDay } from "./lib/stats";
import { fmtDate, todayDayId } from "./lib/util";

const read = (k: string) => {
  try {
    return localStorage.getItem(k) ?? "";
  } catch {
    return "";
  }
};
const write = (k: string, v: string) => {
  try {
    v ? localStorage.setItem(k, v) : localStorage.removeItem(k);
  } catch {
    /* bỏ qua */
  }
};

export default function App() {
  const [name, setName] = useState(() => read(LS_NAME));
  const [code, setCode] = useState(() => read(LS_CODE));

  if (!name || !codeOk(code)) {
    return (
      <Login
        needCode={NEED_CODE && !codeOk(code)}
        initialName={name}
        onDone={(c, n) => {
          write(LS_CODE, c);
          write(LS_NAME, n);
          setCode(c);
          setName(n);
        }}
      />
    );
  }
  return (
    <Main
      name={name}
      onRename={(n) => {
        write(LS_NAME, n);
        setName(n);
      }}
      onLogout={() => {
        write(LS_CODE, "");
        write(LS_NAME, "");
        setCode("");
        setName("");
      }}
    />
  );
}

type Modal =
  | { t: "shot"; id: string }
  | { t: "status"; id: string }
  | { t: "move"; id: string }
  | { t: "slot"; id: string }
  | { t: "newSlot"; dayId: number }
  | { t: "addShot"; slotId: string }
  | { t: "day"; id: number }
  | { t: "menu" }
  | null;

function Main({ name, onRename, onLogout }: { name: string; onRename: (n: string) => void; onLogout: () => void }) {
  const store = useStore(name);
  const { data } = store;
  const [tab, setTab] = useState<number | null>(null);
  const [filter, setFilter] = useState(false);
  const [allDays, setAllDays] = useState(false);
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState<Modal>(null);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(t);
  }, []);

  const days = useMemo(() => [...data.days].sort((a, b) => a.sort - b.sort), [data.days]);
  const today = todayDayId(days, now);
  const current = tab ?? today ?? days[0]?.id ?? 1;

  useEffect(() => {
    document.getElementById(`tab-${current}`)?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [current, store.loaded]);

  const total = statsOf(data.shots);

  const actions: Actions = {
    openShot: (id) => setModal({ t: "shot", id }),
    openStatus: (id) => setModal({ t: "status", id }),
    editSlot: (id) => setModal({ t: "slot", id }),
    addShot: (slotId) => setModal({ t: "addShot", slotId }),
    addSlot: (dayId) => setModal({ t: "newSlot", dayId }),
    editDay: (id) => setModal({ t: "day", id }),
  };

  if (!store.loaded)
    return <div className="grid min-h-dvh place-items-center font-semibold text-moss">Đang tải…</div>;

  const close = () => setModal(null);
  const shot = (id: string) => data.shots.find((s) => s.id === id);

  const renderModal = () => {
    if (!modal) return null;
    switch (modal.t) {
      case "shot": {
        const s = shot(modal.id);
        return s ? <ShotSheet key={s.id} shot={s} store={store} onClose={close} onMove={() => setModal({ t: "move", id: s.id })} /> : null;
      }
      case "status": {
        const s = shot(modal.id);
        return s ? (
          <StatusPicker
            shot={s}
            onPick={(st) => void store.setStatus(s.id, st)}
            onEdit={() => setModal({ t: "shot", id: s.id })}
            onDelete={() => {
              if (confirm(`Xóa cảnh “${s.title}”?`)) {
                void store.deleteShot(s.id);
                close();
              }
            }}
            onClose={close}
          />
        ) : null;
      }
      case "move": {
        const s = shot(modal.id);
        return s ? <MovePicker shot={s} store={store} onClose={close} /> : null;
      }
      case "slot": {
        const sl = data.slots.find((x) => x.id === modal.id);
        return sl ? (
          <SlotForm
            slot={sl}
            onSave={(v) => void store.patchSlot(sl.id, v)}
            onDelete={() => void store.deleteSlot(sl.id)}
            onClose={close}
          />
        ) : null;
      }
      case "newSlot":
        return <SlotForm onSave={(v) => void store.addSlot(modal.dayId, v)} onClose={close} />;
      case "addShot":
        return <AddShot onAdd={(v) => void store.addShot(modal.slotId, v)} onClose={close} />;
      case "day": {
        const d = data.days.find((x) => x.id === modal.id);
        return d ? <DayForm day={d} onSave={(p) => void store.patchDay(d.id, p)} onClose={close} /> : null;
      }
      case "menu":
        return <MenuSheet store={store} name={name} onRename={onRename} onLogout={onLogout} onClose={close} />;
    }
  };

  const searching = query.trim().length > 0;
  const showAll = !searching && filter && allDays;
  const goto = (dayId: number, slotId: string) => {
    setQuery("");
    setTab(dayId);
    window.setTimeout(() => {
      document.getElementById(`slot-${slotId}`)?.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 120);
  };

  return (
    <div className="mx-auto min-h-dvh max-w-2xl pb-24">
      <header className="px-4 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <h1 className="min-w-0 flex-1 font-serif text-2xl leading-tight font-bold">Một ngày trong mọi ngày</h1>
          <span
            title={store.online ? "Đang đồng bộ" : "Mất kết nối, đang thử lại"}
            className={`h-3 w-3 shrink-0 rounded-full ${store.online ? "bg-moss" : "bg-red-700"}`}
          />
          <button
            onClick={() => setModal({ t: "menu" })}
            aria-label="Menu"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-sand bg-card text-2xl"
          >
            ☰
          </button>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <Progress done={total.done} total={total.total} className="flex-1" />
          <span className="text-sm font-bold tabular-nums">
            {total.done}/{total.total} đã quay
          </span>
        </div>
        <p className="mt-1 text-sm font-semibold">⭐ còn thiếu {total.gemMissing}/{total.gemTotal}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            aria-pressed={filter}
            onClick={() => setFilter(!filter)}
            className={`min-h-12 rounded-xl border-2 px-4 font-bold ${
              filter ? "border-moss bg-moss text-cream" : "border-sand bg-card"
            }`}
          >
            ⭐ còn thiếu
          </button>
          {filter && (
            <button
              aria-pressed={allDays}
              onClick={() => setAllDays(!allDays)}
              className={`min-h-12 rounded-xl border-2 px-4 font-bold ${
                allDays ? "border-moss bg-moss text-cream" : "border-sand bg-card"
              }`}
            >
              Mọi ngày
            </button>
          )}
        </div>
        <div className="relative mt-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm cảnh: tên, mã #, ghi chú, khung giờ…"
            aria-label="Tìm cảnh"
            enterKeyHint="search"
            className="min-h-12 w-full rounded-xl border-2 border-sand bg-white py-2 pr-12 pl-3 text-ink placeholder:text-ink/50 focus:border-moss focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Xóa nội dung tìm"
              className="absolute top-0 right-0 grid h-12 w-12 place-items-center text-xl"
            >
              ✕
            </button>
          )}
        </div>
      </header>

      {store.mode === "local" && (
        <p className="mx-4 mb-3 rounded-xl border-2 border-sandd bg-sand/50 p-3 text-sm font-semibold">
          Chưa kết nối Supabase: đang ở chế độ thử trên máy, chưa đồng bộ giữa các điện thoại. Xem README để cấu hình.
        </p>
      )}

      {days.length === 0 ? (
        <div className="mx-4 rounded-2xl border-2 border-sand bg-card p-5 text-center">
          <p className="mb-3 font-semibold">Chưa có dữ liệu. Nạp kịch bản mẫu (4 ngày + cảnh cơ hội, 42 cảnh ⭐)?</p>
          <button className={btnPrimary} onClick={() => void store.loadSeed()}>
            Nạp dữ liệu mẫu
          </button>
        </div>
      ) : (
        <>
          {!showAll && !searching && (
            <nav className="sticky top-0 z-30 -mt-px border-y-2 border-sand bg-cream/95 backdrop-blur" aria-label="Chọn ngày">
              <div className="flex overflow-x-auto">
                {days.map((d) => {
                  const st = statsOf(shotsOfDay(data, d.id));
                  const on = d.id === current;
                  return (
                    <button
                      key={d.id}
                      id={`tab-${d.id}`}
                      onClick={() => setTab(d.id)}
                      aria-current={on}
                      className={`min-h-16 min-w-[6.5rem] shrink-0 border-b-4 px-3 py-2 text-center ${
                        on ? "border-moss font-bold text-moss" : "border-transparent"
                      }`}
                    >
                      <span className="block text-sm leading-tight whitespace-nowrap">
                        {d.date ? `${d.label} · ${fmtDate(d.date)}` : d.label}
                      </span>
                      <span className="block text-xs font-semibold tabular-nums">
                        {st.done}/{st.total}
                        {d.id === today && " · nay"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>
          )}

          {searching ? (
            <SearchResults store={store} query={query} gemOnly={filter} actions={actions} onGoto={goto} />
          ) : showAll ? (
            days.map((d) => (
              <div key={d.id} className="mb-4">
                <DayView store={store} dayId={d.id} filter heading isToday={false} now={now} actions={actions} />
              </div>
            ))
          ) : (
            <DayView
              key={current}
              store={store}
              dayId={current}
              filter={filter}
              heading={false}
              isToday={current === today}
              now={now}
              actions={actions}
            />
          )}
        </>
      )}

      {renderModal()}

      {store.toast && (
        <div
          role="status"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-md rounded-xl bg-ink px-4 py-3 text-center font-semibold text-cream shadow-lg"
        >
          {store.toast}
        </div>
      )}
    </div>
  );
}

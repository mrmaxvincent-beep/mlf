import { useRef, useState } from "react";
import type { Store } from "../lib/store";
import { exportJson, parseImport } from "../lib/io";
import { btnDanger, btnGhost, btnPrimary, input, Sheet } from "./ui";

export function MenuSheet({
  store,
  name,
  onRename,
  onLogout,
  onClose,
}: {
  store: Store;
  name: string;
  onRename: (n: string) => void;
  onLogout: () => void;
  onClose: () => void;
}) {
  const [newName, setNewName] = useState(name);
  const file = useRef<HTMLInputElement>(null);

  const onFile = async (f: File | undefined) => {
    if (!f) return;
    try {
      const next = parseImport(await f.text());
      if (
        confirm(
          `Ghi đè toàn bộ dữ liệu hiện tại bằng file này?\n(${next.days.length} ngày, ${next.slots.length} khung, ${next.shots.length} cảnh)\nThao tác này không hoàn tác được.`,
        )
      ) {
        await store.replaceAll(next);
        onClose();
      }
    } catch (e) {
      alert((e as Error).message);
    }
    if (file.current) file.current.value = "";
  };

  return (
    <Sheet title="Menu" onClose={onClose}>
      <div className="mb-4 rounded-2xl border-2 border-sand p-3">
        <p className="mb-2 text-sm font-semibold">Tên hiển thị</p>
        <div className="flex gap-2">
          <input className={input} value={newName} onChange={(e) => setNewName(e.target.value)} />
          <button
            className={btnPrimary}
            disabled={!newName.trim() || newName.trim() === name}
            onClick={() => {
              onRename(newName.trim());
              onClose();
            }}
          >
            Lưu
          </button>
        </div>
      </div>

      <div className="grid gap-2">
        <button className={btnGhost} onClick={() => exportJson(store.data)}>
          Xuất JSON (sao lưu)
        </button>
        <button className={btnGhost} onClick={() => file.current?.click()}>
          Nhập JSON (ghi đè toàn bộ)
        </button>
        <input ref={file} type="file" accept="application/json,.json" hidden onChange={(e) => void onFile(e.target.files?.[0])} />
        <button
          className={btnGhost}
          onClick={() => {
            if (confirm("Đặt lại về dữ liệu mẫu ban đầu? Mọi thay đổi và tick hiện tại sẽ mất.")) {
              void store.loadSeed();
              onClose();
            }
          }}
        >
          Đặt lại dữ liệu mẫu
        </button>
        <button className={btnDanger} onClick={onLogout}>
          Thoát (đổi mã ê-kíp)
        </button>
      </div>
      <p className="mt-4 text-sm text-ink/70">
        {store.mode === "supabase"
          ? "Đang đồng bộ thời gian thực qua Supabase."
          : "Chế độ thử trên máy: dữ liệu chỉ lưu trong trình duyệt này, chưa đồng bộ."}
      </p>
    </Sheet>
  );
}

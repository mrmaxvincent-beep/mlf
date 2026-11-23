import { STATUS_LABEL, type Shot, type Status } from "../types";
import { Sheet } from "./ui";

const ICON: Record<Status, string> = { todo: "○", done: "✓", extra_take: "✓✓" };

export function StatusPicker({
  shot,
  onPick,
  onClose,
}: {
  shot: Shot;
  onPick: (s: Status) => void;
  onClose: () => void;
}) {
  return (
    <Sheet title={shot.title} onClose={onClose}>
      <div className="grid gap-2">
        {(["done", "extra_take", "todo"] as Status[]).map((s) => (
          <button
            key={s}
            onClick={() => {
              onPick(s);
              onClose();
            }}
            className={`flex min-h-14 items-center gap-3 rounded-xl border-2 px-4 text-left text-lg font-semibold ${
              shot.status === s ? "border-moss bg-moss text-cream" : "border-sand bg-white"
            }`}
          >
            <span className="w-8 text-center text-xl">{ICON[s]}</span>
            {STATUS_LABEL[s]}
          </button>
        ))}
      </div>
    </Sheet>
  );
}

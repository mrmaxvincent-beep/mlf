import { useState } from "react";
import { btnPrimary, Field, input } from "./ui";

const CREW_CODE = (import.meta.env.VITE_CREW_CODE as string | undefined) ?? "";

export const NEED_CODE = !!CREW_CODE;
export const LS_CODE = "mlf.crew.code";
export const LS_NAME = "mlf.crew.name";

export function codeOk(code: string | null) {
  return !CREW_CODE || code === CREW_CODE;
}

export function Login({ onDone, needCode, initialName }: { onDone: (code: string, name: string) => void; needCode: boolean; initialName: string }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState(initialName);
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (needCode && code.trim() !== CREW_CODE) return setErr("Mã ê-kíp chưa đúng.");
    if (!name.trim()) return setErr("Nhập tên hiển thị của bạn.");
    onDone(code.trim(), name.trim());
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-4 py-8">
      <p className="text-sm font-semibold tracking-widest text-moss uppercase">Một ngày trong mọi ngày</p>
      <h1 className="mt-1 mb-6 font-serif text-4xl font-bold">Checklist cảnh quay</h1>
      <form onSubmit={submit} className="rounded-3xl border-2 border-sand bg-card p-5">
        {needCode && (
          <Field label="Mã ê-kíp">
            <input className={input} value={code} onChange={(e) => setCode(e.target.value)} autoComplete="off" autoCapitalize="none" />
          </Field>
        )}
        <Field label="Tên hiển thị (ví dụ: Vũ, An Tĩnh)">
          <input className={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="given-name" />
        </Field>
        {err && <p className="mb-3 font-semibold text-red-800">{err}</p>}
        <button className={`${btnPrimary} w-full`} type="submit">
          Vào checklist
        </button>
      </form>
      <p className="mt-4 text-sm text-ink/70">Tên của bạn sẽ hiện cạnh những cảnh bạn tick “đã quay”.</p>
    </main>
  );
}

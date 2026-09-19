"use client";

import { useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

const MAX = 140;

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.62rem",
  letterSpacing: "0.08em",
  color: "var(--color-stone)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-mono)",
  fontSize: "0.72rem",
  letterSpacing: "0.04em",
  color: "var(--color-ink)",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--color-mist)",
  padding: "0.45rem 0",
};

/** Form đăng dấu vết "dạo này". Site là static export nên không có server để giấu bí mật —
 *  chốt chặn thật nằm ở RLS: chỉ role `authenticated` mới ghi được vào bảng `traces`,
 *  đường dẫn khó đoán không phải là bảo mật. */
export function PushStatus() {
  const [checking, setChecking] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setChecking(false);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setSignedIn(Boolean(data.session));
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => setSignedIn(Boolean(session)));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!isSupabaseConfigured) {
    return <p style={mono}>chưa cấu hình supabase — xem .env.local.example</p>;
  }
  if (checking) return <p style={mono}>đang mở cửa…</p>;
  return signedIn ? <Compose /> : <SignIn />;
}

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error } = await supabase!.auth.signInWithPassword({ email, password });
    if (error) setError("email hoặc mật khẩu chưa đúng.");
    setBusy(false);
  }

  return (
    <form onSubmit={submit} className="dn-card" style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
      <span style={{ ...mono, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ink)" }}>cửa sau</span>
      <label style={{ display: "block" }}>
        <span style={{ ...mono, display: "block", marginBottom: "0.2rem" }}>email</span>
        <input type="email" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
      </label>
      <label style={{ display: "block" }}>
        <span style={{ ...mono, display: "block", marginBottom: "0.2rem" }}>mật khẩu</span>
        <input type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
      </label>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <span style={mono}>{error || "đăng nhập một lần, lần sau vào thẳng"}</span>
        <button type="submit" disabled={busy} className="cta-btn cta-btn--outline" style={{ cursor: "pointer", borderRadius: "999px", flex: "none" }}>
          {busy ? "đang mở…" : "vào"}
        </button>
      </div>
    </form>
  );
}

function Compose() {
  const [body, setBody] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = body.trim();
    if (!text) return;
    setState("sending");
    const { error } = await supabase!.from("traces").insert({ body: text });
    if (error) {
      setState("error");
      return;
    }
    setBody("");
    setState("done");
  }

  const left = MAX - body.length;

  return (
    <form onSubmit={submit} className="dn-card" style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
        <span className="dn-dot" aria-hidden />
        <span style={{ ...mono, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ink)" }}>dấu vết mới</span>
        <button
          type="button"
          onClick={() => supabase!.auth.signOut()}
          style={{ ...mono, marginLeft: "auto", background: "none", border: "none", padding: 0, cursor: "pointer", borderBottom: "1px solid var(--color-mist)" }}
        >
          thoát
        </button>
      </div>

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value.slice(0, MAX))}
        onFocus={() => setState("idle")}
        rows={3}
        placeholder="hôm nay ở đây có gì…"
        style={{
          ...inputStyle,
          fontFamily: "var(--font-sans)",
          fontSize: "1.05rem",
          lineHeight: 1.65,
          resize: "vertical",
          minHeight: "5rem",
        }}
      />

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
        <span style={mono}>
          {state === "done" ? "đã lên dạo này." : state === "error" ? "chưa gửi được, thử lại nhé." : `còn ${left} chữ`}
        </span>
        <button type="submit" disabled={state === "sending" || !body.trim()} className="cta-btn cta-btn--outline" style={{ cursor: "pointer", borderRadius: "999px", flex: "none" }}>
          {state === "sending" ? "đang gửi…" : "đăng"} <span className="ar">→</span>
        </button>
      </div>
    </form>
  );
}

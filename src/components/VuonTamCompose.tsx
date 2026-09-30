"use client";

import { useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

/** Form gieo một hạt: tên hạt, bài viết, ký tên/ẩn danh, đồng ý đăng — gửi thẳng vào Supabase, chờ nhà mộc duyệt và gom vào một loài hạt. */
export function VuonTamCompose() {
  const [open, setOpen] = useState(false);
  const [seedName, setSeedName] = useState("");
  const [body, setBody] = useState("");
  const [anonymous, setAnonymous] = useState(true);
  const [authorLabel, setAuthorLabel] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const canSend = seedName.trim() && body.trim() && consent && !sending;

  async function send() {
    if (!canSend) return;
    setSending(true);
    setError(false);
    try {
      if (isSupabaseConfigured && supabase) {
        const { error: insertError } = await supabase.from("vuon_tam_submissions").insert({
          seed_name: seedName.trim(),
          body: body.trim(),
          author_label: anonymous ? null : authorLabel.trim() || null,
          is_anonymous: anonymous,
          consent: true,
        });
        if (insertError) throw insertError;
      }
      setSent(true);
      setSeedName("");
      setBody("");
      setAuthorLabel("");
      setConsent(false);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (!open) {
    return (
      <div id="gieo" style={{ textAlign: "center" }}>
        <button onClick={() => setOpen(true)} className="cta-btn cta-btn--solid">
          gieo một hạt
        </button>
      </div>
    );
  }

  if (sent) {
    return (
      <div id="gieo" style={{ border: "1px solid var(--color-cham-dem)", borderRadius: "1rem", padding: "2rem 1.6rem", textAlign: "center", maxWidth: "36rem", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-cham-dem)", margin: 0 }}>hạt của bạn đã được gieo.</p>
        <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "var(--color-stone)", margin: "0.8rem auto 0", maxWidth: "38ch" }}>
          nhà mộc sẽ đọc, và gom hạt của bạn vào khu vườn chung khi sẵn sàng.
        </p>
      </div>
    );
  }

  return (
    <div id="gieo" style={{ border: "1px solid var(--color-cham-dem)", borderRadius: "1rem", padding: "2rem 1.6rem", maxWidth: "36rem", margin: "0 auto" }}>
      <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.4rem" }}>
        gieo một hạt
      </span>

      <input
        value={seedName}
        onChange={(e) => setSeedName(e.target.value.slice(0, 120))}
        maxLength={120}
        placeholder="tên hạt — ví dụ: kiên nhẫn với con, tha thứ cho mẹ…"
        style={{
          width: "100%",
          fontFamily: "var(--font-sans)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "1rem",
          color: "var(--color-ink)",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid var(--color-mist)",
          padding: "0.5rem 0",
        }}
      />

      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value.slice(0, 2000))}
        maxLength={2000}
        placeholder="vì sao bạn nuôi hạt này, đang nuôi nó thế nào, chỗ nào còn khó…"
        style={{
          width: "100%",
          minHeight: 140,
          resize: "vertical",
          fontFamily: "var(--font-sans)",
          fontWeight: 300,
          fontSize: "0.95rem",
          color: "var(--color-ink)",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid var(--color-mist)",
          padding: "0.9rem 0",
          lineHeight: 1.9,
          marginTop: "0.9rem",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginTop: "1.2rem", flexWrap: "wrap" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-ink)", cursor: "pointer" }}>
          <input type="radio" checked={anonymous} onChange={() => setAnonymous(true)} />
          ẩn danh
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-ink)", cursor: "pointer" }}>
          <input type="radio" checked={!anonymous} onChange={() => setAnonymous(false)} />
          ký tên
        </label>
        {!anonymous ? (
          <input
            value={authorLabel}
            onChange={(e) => setAuthorLabel(e.target.value.slice(0, 40))}
            maxLength={40}
            placeholder="tên hoặc cách gọi bạn"
            style={{
              flex: "1 1 10rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              color: "var(--color-ink)",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid var(--color-mist)",
              padding: "0.3rem 0",
            }}
          />
        ) : null}
      </div>

      <label style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginTop: "1.4rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-stone)", cursor: "pointer" }}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: "0.2rem" }} />
        tôi đồng ý cho câu chuyện này được đăng lên vườn-tâm, sau khi nhà mộc đọc và duyệt.
      </label>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1.4rem" }}>
        <button
          onClick={send}
          disabled={!canSend}
          className="one-day-btn"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "none",
            border: "none",
            color: "var(--color-stone)",
            padding: 0,
            cursor: canSend ? "pointer" : "default",
            opacity: canSend ? 1 : 0.5,
          }}
        >
          {sending ? "đang gieo…" : "gieo hạt →"}
        </button>
      </div>
      {error ? (
        <p style={{ fontSize: "0.78rem", color: "#b5715c", margin: "1rem 0 0", textAlign: "center" }}>
          gửi chưa thành công, thử lại giúp mình nhé.
        </p>
      ) : null}
    </div>
  );
}

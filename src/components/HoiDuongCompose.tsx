"use client";

import { useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

/** Khung soạn câu hỏi gửi trực tiếp trên trang — lưu vào Supabase, không qua email. */
export function HoiDuongCompose({ topicId }: { topicId?: string }) {
  const [question, setQuestion] = useState("");
  const [fromLabel, setFromLabel] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function send() {
    const body = question.trim();
    if (!body || sending) return;
    setSending(true);
    setError(false);
    try {
      if (isSupabaseConfigured && supabase) {
        const { error: insertError } = await supabase.from("hoi_duong_questions").insert({
          question: body,
          from_label: fromLabel.trim() || null,
          topic_id: topicId ?? null,
        });
        if (insertError) throw insertError;
      }
      setSent(true);
      setQuestion("");
      setFromLabel("");
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div style={{ border: "1px solid var(--color-cham-dem)", borderRadius: "1rem", padding: "2rem 1.6rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-cham-dem)", margin: 0 }}>đã nhận câu hỏi của bạn.</p>
        <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "var(--color-stone)", margin: "0.8rem auto 0", maxWidth: "38ch" }}>
          nhà mộc sẽ đọc và trả lời sớm tại trang này.
        </p>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid var(--color-cham-dem)", borderRadius: "1rem", padding: "2rem 1.6rem" }}>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value.slice(0, 1000))}
        maxLength={1000}
        placeholder="bạn đang lạc ở đâu, đang thắc mắc điều gì…"
        style={{
          width: "100%",
          minHeight: 110,
          resize: "vertical",
          fontFamily: "var(--font-sans)",
          fontWeight: 300,
          fontSize: "0.95rem",
          color: "var(--color-ink)",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid var(--color-mist)",
          padding: "0.4rem 0 0.9rem",
          lineHeight: 1.95,
        }}
      />
      <input
        value={fromLabel}
        onChange={(e) => setFromLabel(e.target.value.slice(0, 40))}
        maxLength={40}
        placeholder="tên hoặc cách gọi bạn (không bắt buộc)"
        style={{
          width: "100%",
          fontFamily: "var(--font-sans)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: "0.95rem",
          color: "var(--color-ink)",
          background: "transparent",
          border: "none",
          borderBottom: "1px solid var(--color-mist)",
          padding: "0.5rem 0",
          marginTop: "0.9rem",
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.4rem" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: question.length > 900 ? "#b5715c" : "var(--color-stone)" }}>{question.length} / 1000</span>
        <button
          onClick={send}
          disabled={!question.trim() || sending}
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
            cursor: question.trim() && !sending ? "pointer" : "default",
            opacity: question.trim() ? 1 : 0.5,
          }}
        >
          {sending ? "đang gửi…" : "gửi câu hỏi →"}
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

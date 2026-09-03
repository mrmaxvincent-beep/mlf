"use client";

import { useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error";

/** Minimal single-field email capture — inserts into Supabase `email_subscribers`, shown in the Footer on every page. */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || status === "loading") return;

    setStatus("loading");

    if (!isSupabaseConfigured || !supabase) {
      setStatus("error");
      return;
    }

    const { error } = await supabase.from("email_subscribers").insert({ email: trimmed });
    // 23505 = unique_violation — email already on the list, treat as success
    if (error && error.code !== "23505") {
      setStatus("error");
      return;
    }

    setEmail("");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div style={{ marginBottom: "1.75rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>đã ghi nhận, cảm ơn bạn ✓</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1.75rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem" }}>
      <label
        htmlFor="newsletter-email"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-stone)" }}
      >
        nhận thư từ mlf
      </label>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "0.75rem" }}>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email của bạn"
          style={{
            width: "16rem",
            maxWidth: "60vw",
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            color: "var(--color-ink)",
            background: "transparent",
            border: "none",
            borderBottom: "1px solid var(--color-mist)",
            padding: "0.4rem 0",
            textAlign: "center",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="mono-link"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
            background: "none",
            border: "none",
            borderBottom: "1px solid var(--color-ink)",
            padding: "0 0 0.4rem",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {status === "loading" ? "đang gửi…" : "gửi"}
        </button>
      </div>
      {status === "error" ? (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--color-stone)" }}>có lỗi xảy ra, thử lại giúp mình nhé.</span>
      ) : null}
    </form>
  );
}

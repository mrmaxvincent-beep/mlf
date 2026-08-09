"use client";

import { useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type Note = { body: string; from: string };

/** Full live feed of approved "một ngày ở-yên" notes — Supabase-backed with a static fallback. */
export function KhoLoiNhan({ notesFallback }: { notesFallback: Note[] }) {
  const [notes, setNotes] = useState<Note[]>(notesFallback);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    (async () => {
      const { data } = await supabase!.from("oyen_notes").select("body, from_label").eq("approved", true).order("created_at", { ascending: false }).limit(200);
      if (data && data.length) {
        setNotes(data.map((n) => ({ body: n.body, from: n.from_label || "một người lạ" })));
      }
    })();

    const channel = supabase
      .channel("oyen_notes_archive_changes")
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "oyen_notes" }, (payload) => {
        const row = payload.new as { approved?: boolean; body?: string; from_label?: string | null };
        if (row?.approved && row.body) {
          setNotes((prev) => [{ body: row.body!, from: row.from_label || "một người lạ" }, ...prev]);
        }
      })
      .subscribe();

    return () => {
      supabase!.removeChannel(channel);
    };
  }, []);

  const fmt = (n: number) => n.toLocaleString("vi-VN");

  return (
    <>
      <header style={{ padding: "2rem 0 5rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-moss)", display: "block", marginBottom: "2rem" }}>
          {fmt(notes.length)} lời nhắn đã được gửi
        </span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.2rem, 7vw, 2.8rem)", color: "var(--color-ink)", margin: 0, lineHeight: 1.15 }}>kho lời nhắn ở-yên</h1>
        <p style={{ color: "var(--color-stone)", fontSize: "0.92rem", lineHeight: 1.9, maxWidth: "36ch", margin: "1.4rem auto 0" }}>những dòng người đến trước đã để lại, cho người đến sau.</p>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {notes.map((n, i) => (
          <div key={i} style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-mist)", paddingTop: i === 0 ? 0 : "2rem" }}>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", lineHeight: 1.85, color: "var(--color-ink)", display: "block" }}>&ldquo;{n.body}&rdquo;</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--color-stone)", marginTop: "1rem", display: "block" }}>— {n.from}</span>
          </div>
        ))}
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";

type Note = { body: string; from: string };

function shuffled<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** "một ngày ở-yên": rotating daily hints, a shared contribution-day counter, a locked-until-contributed
 * note form, and an auto-rotating reader of past notes — backed by Supabase with a static fallback. */
export function OneDayOYen({ hints, notesFallback, dayPoem, startingTotal }: { hints: string[]; notesFallback: Note[]; dayPoem: { tam: string; lines: string[]; attribution: string }; startingTotal: number }) {
  const [greet, setGreet] = useState("chào bạn");
  const [hintOrder, setHintOrder] = useState(() => hints.map((_, i) => i));
  const [hintPos, setHintPos] = useState(0);

  const [totalDays, setTotalDays] = useState(startingTotal);
  const [contributed, setContributed] = useState(false);
  const [justContributed, setJustContributed] = useState(false);
  const [mineDayNum, setMineDayNum] = useState(startingTotal);

  const [noteValue, setNoteValue] = useState("");
  const [noteWhere, setNoteWhere] = useState("");
  const [noteSent, setNoteSent] = useState(false);

  const [notes, setNotes] = useState<Note[]>(notesFallback);
  const [order, setOrder] = useState(() => notesFallback.map((_, i) => i));
  const [noteIdx, setNoteIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const h = new Date().getHours();
    setGreet(h < 11 ? "chào buổi sáng" : h < 14 ? "chào buổi trưa" : h < 18 ? "chào buổi chiều" : "chào buổi tối");

    setHintOrder(shuffled(hints.map((_, i) => i)));
    setOrder(shuffled(notesFallback.map((_, i) => i)));

    const startingStored = parseInt(localStorage.getItem("oyen_total") || "", 10);
    const stored = Number.isNaN(startingStored) ? startingTotal : startingStored;
    const today = new Date().toISOString().slice(0, 10);
    const already = localStorage.getItem("oyen_day") === today;
    setTotalDays(stored);
    setMineDayNum(stored);
    setContributed(already);

    function startAuto() {
      if (autoTimer.current) clearInterval(autoTimer.current);
      autoTimer.current = setInterval(() => nextNote(false), 11000);
    }
    startAuto();

    if (isSupabaseConfigured && supabase) {
      (async () => {
        const { data: dayRow } = await supabase!.from("oyen_days").select("count").limit(1).maybeSingle();
        if (dayRow && typeof dayRow.count === "number") {
          setTotalDays(dayRow.count);
          setMineDayNum(dayRow.count);
        }
        const { data: notesRows } = await supabase!.from("oyen_notes").select("body, from_label").eq("approved", true).order("created_at", { ascending: false }).limit(50);
        if (notesRows && notesRows.length) {
          setNotes(notesRows.map((n) => ({ body: n.body, from: n.from_label || "một người lạ" })));
        }
      })();

      const daysChannel = supabase
        .channel("oyen_days_changes")
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "oyen_days" }, (payload) => {
          const next = (payload.new as { count?: number })?.count;
          if (typeof next === "number") setTotalDays(next);
        })
        .subscribe();
      const notesChannel = supabase
        .channel("oyen_notes_changes")
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "oyen_notes" }, (payload) => {
          const row = payload.new as { approved?: boolean; body?: string; from_label?: string | null };
          if (row?.approved && row.body) {
            setNotes((prev) => [{ body: row.body!, from: row.from_label || "một người lạ" }, ...prev]);
          }
        })
        .subscribe();

      return () => {
        if (autoTimer.current) clearInterval(autoTimer.current);
        if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
        supabase!.removeChannel(daysChannel);
        supabase!.removeChannel(notesChannel);
      };
    }

    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function nextNote(manual: boolean) {
    setFading(true);
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      setNoteIdx((i) => i + 1);
      setFading(false);
    }, 700);
    if (manual && autoTimer.current) {
      clearInterval(autoTimer.current);
      autoTimer.current = setInterval(() => nextNote(false), 11000);
    }
  }

  function moreHints() {
    setHintPos((p) => (p + 3) % hintOrder.length);
  }

  async function contribute() {
    if (contributed) return;
    const newTotal = totalDays + 1;
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem("oyen_day", today);
    localStorage.setItem("oyen_total", String(newTotal));
    setTotalDays(newTotal);
    setContributed(true);
    setJustContributed(true);
    setMineDayNum(newTotal);
    if (supabase) {
      try {
        await supabase.rpc("increment_oyen_days");
      } catch {
        // static fallback already applied locally
      }
    }
  }

  async function sendNote() {
    if (!noteValue.trim()) return;
    const body = noteValue.trim();
    const from = noteWhere.trim() ? `một người ở ${noteWhere.trim()}` : "một người lạ";
    setNoteSent(true);
    setNoteValue("");
    setNoteWhere("");
    if (supabase) {
      try {
        await supabase.from("oyen_notes").insert({ body, from_label: from });
      } catch {
        // best-effort — note still shows as sent locally
      }
    }
  }

  const shownHints = [0, 1, 2].map((i) => hints[hintOrder[(hintPos + i) % hintOrder.length]]);
  const currentNote = notes[order[noteIdx % order.length] % notes.length];
  const dotCount = Math.min(notes.length, 12);
  const activeDot = noteIdx % dotCount;
  const fmt = (n: number) => n.toLocaleString("vi-VN");

  return (
    <>
      <header style={{ padding: "3rem 0 7rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--color-moss)", display: "block", marginBottom: "2rem" }}>{greet}</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.6rem, 9vw, 3.6rem)", color: "var(--color-ink)", margin: "0 0 1.6rem", lineHeight: 1.15 }}>một ngày ở-yên</h1>
        <p style={{ color: "var(--color-stone)", fontSize: "0.95rem", lineHeight: 1.9, maxWidth: "30ch", margin: "0 auto" }}>cùng những người bạn khác, sống chậm lại một ngày — ai ở đâu cứ ở đó.</p>
      </header>

      {/* GỢI Ý */}
      <Reveal style={{ margin: "0 -1.5rem 7rem", padding: "4rem 2.8rem 3.4rem", background: "var(--color-cotton)", borderRadius: 3 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-moss)", display: "block", marginBottom: "0.9rem", textAlign: "center" }}>
          có thể bắt đầu từ đây
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", lineHeight: 1.4, color: "var(--color-ink)", textAlign: "center", margin: "0 0 3.2rem" }}>ba gợi ý của ngày-hôm-nay</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.6rem" }}>
          {shownHints.map((text, i) => (
            <div key={i} style={{ display: "flex", gap: "1.6rem", alignItems: "baseline" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "1.15rem",
                  lineHeight: 1,
                  color: "var(--color-moss)",
                  flexShrink: 0,
                  width: "2.2rem",
                  height: "2.2rem",
                  borderRadius: "50%",
                  border: "1px solid var(--color-moss)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i + 1}
              </span>
              <span style={{ fontSize: "1rem", lineHeight: 1.95, color: "var(--color-ink)" }}>{text}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3.4rem" }}>
          <button onClick={moreHints} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", background: "none", border: "none", color: "var(--color-stone)", cursor: "pointer", padding: 0 }}>
            gợi ý khác →
          </button>
        </div>
      </Reveal>

      {/* DAY POEM */}
      <Reveal style={{ paddingBottom: "7rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-moss)", display: "block", marginBottom: "1rem" }}>{dayPoem.tam}</span>
        {dayPoem.lines.map((line) => (
          <p key={line} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--color-ink)", margin: 0 }}>
            {line}
          </p>
        ))}
        <span style={{ display: "block", marginTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--color-stone)" }}>— {dayPoem.attribution}</span>
      </Reveal>

      {/* GÓP MỘT NGÀY */}
      <Reveal style={{ padding: "0 0 7rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-moss)", display: "block", marginBottom: "2.6rem" }}>
          sự hiện-diện của bạn
        </span>
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(3.4rem, 12vw, 4.6rem)", lineHeight: 1, color: "var(--color-ink)", display: "block", marginBottom: "1.1rem" }}>
          {fmt(totalDays)}
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-stone)", margin: "0 0 3rem" }}>ngày ở-yên đã được góp vào</p>
        <button
          onClick={contribute}
          disabled={contributed}
          style={
            contributed
              ? { fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", color: "var(--color-moss)", background: "transparent", border: "none", padding: "0.4rem 0", cursor: "default", whiteSpace: "nowrap" }
              : { fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", color: "#ffffff", background: "var(--color-ink)", border: "none", padding: "1.05rem 2.8rem", borderRadius: 2, cursor: "pointer", whiteSpace: "nowrap" }
          }
        >
          {contributed ? "hôm nay bạn đã ở-yên" : "tôi góp một ngày"}
        </button>
        {contributed && justContributed ? (
          <div style={{ marginTop: "2.4rem" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", color: "var(--color-moss)", margin: 0 }}>bạn vừa góp ngày thứ {fmt(mineDayNum)}.</p>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "var(--color-stone)", margin: "0.7rem 0 0" }}>hôm nay là của bạn.</p>
          </div>
        ) : null}
      </Reveal>

      {/* VIẾT LỜI NHẮN */}
      <Reveal style={{ margin: "0 -1.5rem 7rem", position: "relative" }}>
        <div style={{ position: "relative", background: "var(--color-cham-dem)", padding: "5rem 1.8rem" }}>
          <div style={{ position: "relative", maxWidth: 440, margin: "0 auto" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "#ffffff", opacity: 0.85, display: "block", marginBottom: "2.2rem", textAlign: "center" }}>
              để lại một dòng cho người sau
            </span>

            {!contributed && !noteSent ? (
              <p style={{ textAlign: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#ffffff", opacity: 0.9, fontSize: "1.05rem", lineHeight: 1.9, margin: 0 }}>
                phần này mở ra sau khi bạn góp một ngày ở-yên.
              </p>
            ) : null}

            {contributed && !noteSent ? (
              <div style={{ background: "#ffffff", borderRadius: 6, padding: "2.2rem 1.8rem" }}>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.95, color: "var(--color-stone)", margin: "0 0 1.8rem", textAlign: "center" }}>bạn đang để lại một dòng cho một người lạ sẽ đọc nó vào một ngày nào đó.</p>
                <textarea
                  value={noteValue}
                  onChange={(e) => setNoteValue(e.target.value.slice(0, 200))}
                  maxLength={200}
                  placeholder="hôm nay của bạn thế nào…"
                  style={{ width: "100%", minHeight: 120, resize: "vertical", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.95rem", color: "var(--color-ink)", background: "transparent", border: "none", borderBottom: "1px solid var(--color-mist)", padding: "0.4rem 0 0.9rem", lineHeight: 1.95 }}
                />
                <input
                  value={noteWhere}
                  onChange={(e) => setNoteWhere(e.target.value.slice(0, 40))}
                  maxLength={40}
                  placeholder="bạn đang ở đâu?"
                  style={{ width: "100%", fontFamily: "var(--font-sans)", fontStyle: "italic", fontWeight: 300, fontSize: "0.95rem", color: "var(--color-ink)", background: "transparent", border: "none", borderBottom: "1px solid var(--color-mist)", padding: "0.5rem 0", marginTop: "0.9rem" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.4rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: noteValue.length > 170 ? "#b5715c" : "var(--color-stone)" }}>{noteValue.length} / 200</span>
                  <button onClick={sendNote} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", background: "none", border: "none", color: "var(--color-stone)", padding: 0, cursor: "pointer", whiteSpace: "nowrap" }}>
                    gửi đi →
                  </button>
                </div>
                <p style={{ fontSize: "0.78rem", lineHeight: 1.8, color: "var(--color-stone)", margin: "1.4rem 0 0", textAlign: "center" }}>
                  muốn viết dài hơn một chút? gửi cho chúng tôi qua{" "}
                  <a href="mailto:hello@moclittlefarm.com" style={{ color: "var(--color-stone)", borderBottom: "1px solid var(--color-mist)" }}>
                    hello@moclittlefarm.com
                  </a>
                </p>
              </div>
            ) : null}

            {noteSent ? (
              <div style={{ textAlign: "center", background: "#ffffff", borderRadius: 6, padding: "2.2rem 1.8rem" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", color: "var(--color-moss)", margin: 0 }}>đã nhận.</p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "var(--color-stone)", margin: "0.8rem auto 0", maxWidth: "38ch" }}>dòng của bạn sẽ hiện ra cho một người lạ nào đó — có thể là sáng mai, có thể là tháng sau.</p>
              </div>
            ) : null}
          </div>
        </div>
      </Reveal>

      {/* ĐỌC LỜI NHẮN */}
      <Reveal style={{ padding: "0 0 6rem", textAlign: "center" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.625rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-moss)", display: "block", marginBottom: "0.7rem" }}>
          những người đã ở-yên trước đó
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.06em", color: "var(--color-stone)", display: "block", marginBottom: "2.6rem" }}>{fmt(notes.length)} lời nhắn</span>
        <div style={{ position: "relative", borderRadius: 8, border: "1px solid var(--color-mist)", maxWidth: "44ch", margin: "0 auto" }}>
          <div style={{ position: "relative", background: "#ffffff", borderRadius: 7, padding: "2.4rem 2rem", minHeight: "9rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ transition: "opacity .7s var(--ease-standard), transform .7s var(--ease-standard)", opacity: fading ? 0 : 1, transform: fading ? "translateY(-8px)" : "translateY(0)" }}>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", lineHeight: 1.85, color: "var(--color-ink)", display: "block", maxWidth: "40ch", margin: "0 auto" }}>&ldquo;{currentNote?.body}&rdquo;</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--color-stone)", marginTop: "1.6rem", display: "block" }}>— {currentNote?.from}</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", marginTop: "2.6rem" }}>
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {Array.from({ length: dotCount }, (_, i) => (
              <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", display: "inline-block", background: i === activeDot ? "var(--color-moss)" : "var(--color-mist)", transition: "background .3s ease" }} />
            ))}
          </div>
          <button
            onClick={() => nextNote(true)}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", background: "none", border: "1px solid var(--color-ink)", color: "var(--color-ink)", cursor: "pointer", padding: "0.7rem 1.4rem", borderRadius: 2 }}
          >
            một lời nhắn khác →
          </button>
          <Link className="mono-link" href={routes.khoLoiNhanOYen} style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--color-stone)", borderBottom: "1px solid var(--color-mist)", paddingBottom: "0.1rem" }}>
            xem toàn bộ kho lời nhắn ở-yên →
          </Link>
        </div>
      </Reveal>
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type Event = { when: string; name: string; desc: string; href: string };

/** Homepage "sắp diễn ra" grid — reads `upcoming_events` top-3 by sort_order, live via
 * Realtime, falling back to the static list until Supabase is configured (see .env.local.example). */
export function UpcomingEvents({ fallback }: { fallback: Event[] }) {
  const [events, setEvents] = useState<Event[]>(fallback);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    async function load() {
      const { data } = await supabase!
        .from("upcoming_events")
        .select("when_label, name, description, href")
        .order("sort_order", { ascending: true })
        .limit(3);
      if (data && data.length) {
        setEvents(data.map((e) => ({ when: e.when_label, name: e.name, desc: e.description, href: e.href })));
      }
    }

    load();
    const channel = supabase
      .channel("upcoming_events_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "upcoming_events" }, load)
      .subscribe();

    return () => {
      supabase!.removeChannel(channel);
    };
  }, []);

  return (
    <div
      className="upcoming-grid wrap"
      style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      {events.map((u, i) => (
        <Link
          key={u.href}
          href={u.href}
          className="go"
          style={{
            display: "block",
            padding: "1.5rem 1.5rem",
            minWidth: 0,
            overflowWrap: "break-word",
            borderRight: i < 2 ? "1px solid var(--color-mist)" : "none",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "var(--color-stone)", display: "block", marginBottom: "0.75rem" }}>
            {u.when}
          </span>
          <span style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <span className="nm" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-ink)" }}>
              {u.name}
            </span>
          </span>
          <span style={{ fontSize: "0.8rem", color: "var(--color-ink)", lineHeight: 1.55, display: "block" }}>{u.desc}</span>
        </Link>
      ))}
    </div>
  );
}

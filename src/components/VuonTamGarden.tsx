"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import type { Species, Story } from "@/data/vuonTam";

/** Toàn cảnh khu vườn: mỗi loài hạt một ô, kèm số người đang nuôi — không xếp theo số nhiều nhất. */
export function VuonTamGarden({ species, stories }: { species: Species[]; stories: Story[] }) {
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(species.map((s) => [s.id, stories.filter((st) => st.speciesId === s.id).length])),
  );

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    (async () => {
      const { data } = await supabase!.from("vuon_tam_species").select("id, awakened_count");
      if (data) {
        setCounts((prev) => {
          const next = { ...prev };
          for (const row of data) {
            const base = stories.filter((st) => st.speciesId === row.id).length;
            next[row.id] = base + (row.awakened_count ?? 0);
          }
          return next;
        });
      }
    })();

    const channel = supabase
      .channel("vuon_tam_species_changes")
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "vuon_tam_species" }, (payload) => {
        const row = payload.new as { id?: string; awakened_count?: number };
        if (row?.id && typeof row.awakened_count === "number") {
          setCounts((prev) => {
            const base = stories.filter((st) => st.speciesId === row.id).length;
            return { ...prev, [row.id as string]: base + row.awakened_count! };
          });
        }
      })
      .subscribe();

    return () => {
      supabase!.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(13rem, 1fr))", gap: "1rem" }}>
      {species.map((s) => {
        const n = counts[s.id] ?? 0;
        return (
          <Link
            key={s.id}
            href={`/vuon-tam/${s.id}`}
            className="link-row"
            style={{
              display: "block",
              padding: "1.6rem 1.4rem",
              border: "1px solid var(--color-mist)",
              borderRadius: "1rem",
              background: "var(--color-paper)",
            }}
          >
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.15rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>
              {s.name}
            </span>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--color-stone)" }}>
              {n > 0 ? `đang nảy trong ${n} người` : "chưa có ai nuôi hạt này"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

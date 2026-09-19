"use client";

import { useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import { sortTraces, type Trace } from "@/data/daoNay";

/** Đọc `traces` (dấu vết "dạo này") mới → cũ, giữ dữ liệu tĩnh cho tới khi Supabase trả về. */
export function useTraces(fallback: Trace[], limit = 200) {
  const [traces, setTraces] = useState<Trace[]>(() => sortTraces(fallback));

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;

    async function load() {
      const { data } = await supabase!
        .from("traces")
        .select("body, photo_url, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(limit);
      if (data) {
        setTraces(
          data.map((t) => ({
            d: String(t.created_at).slice(0, 10),
            body: t.body,
            photo: t.photo_url ?? undefined,
          })),
        );
      }
    }

    load();
    const channel = supabase
      .channel("traces_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "traces" }, load)
      .subscribe();

    return () => {
      supabase!.removeChannel(channel);
    };
  }, [limit]);

  return traces;
}

/** Ngày "hôm nay" chỉ có sau khi mount — trang này là static export nên giờ dựng build
 *  sẽ đông cứng lại nếu tính thời gian tương đối lúc render phía server. */
export function useToday() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);
  return now;
}

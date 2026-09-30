"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import { routes } from "@/lib/nav";

/** Nút "hạt này cũng đang nảy trong tôi" — chỉ đếm ở cấp loài hạt, một lần mỗi người mỗi loài (ghi nhớ cục bộ). */
export function AwakenButton({ speciesId }: { speciesId: string }) {
  const [awakened, setAwakened] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(`vuon-tam-awaken-${speciesId}`)) setAwakened(true);
    } catch {
      /* localStorage có thể bị chặn — không sao, chỉ mất khả năng nhớ đã bấm */
    }
  }, [speciesId]);

  async function awaken() {
    if (awakened) return;
    setAwakened(true);
    try {
      localStorage.setItem(`vuon-tam-awaken-${speciesId}`, "1");
    } catch {
      /* bỏ qua */
    }
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.rpc("increment_vuon_tam_awaken", { species_id: speciesId });
      } catch {
        /* đã ghi nhận cục bộ, bỏ qua lỗi mạng */
      }
    }
  }

  if (awakened) {
    return (
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-cham-dem)", margin: "0 0 0.9rem" }}>
          đã ghi nhận — bạn không nuôi hạt này một mình.
        </p>
        <Link href={routes.vuonTam} className="mono-link" style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-stone)" }}>
          nếu muốn, hãy gieo câu chuyện của riêng bạn →
        </Link>
      </div>
    );
  }

  return (
    <button onClick={awaken} className="cta-btn cta-btn--solid" style={{ display: "block", margin: "0 auto" }}>
      hạt này cũng đang nảy trong tôi
    </button>
  );
}

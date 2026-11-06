"use client";

import { useCallback, useEffect, useState } from "react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

/** Mốc báo giá của nhà in (số quyển, đơn giá đã gồm 8% VAT). Dùng để gợi ý "còn bao nhiêu quyển nữa tới mốc kế tiếp". */
export type PriceTier = { qty: number; price: string };

const REFRESH_MS = 20000;

/** Lấy tổng số quyển đã đặt; tự làm mới mỗi 20 giây và khi tab được mở lại. */
export function useOrderTotal() {
  const [total, setTotal] = useState<number | null>(null);

  const load = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) return;
    const { data, error } = await supabase.rpc("journal_order_total", { p_issue: "quyen-02" });
    if (!error && typeof data === "number") setTotal(data);
  }, []);

  useEffect(() => {
    load();
    const id = window.setInterval(load, REFRESH_MS);
    const onVisible = () => {
      if (!document.hidden) load();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("jo:placed", load);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("jo:placed", load);
    };
  }, [load]);

  return { total, reload: load };
}

function nextTier(total: number, tiers: PriceTier[]) {
  return tiers.find((t) => t.qty > total) ?? null;
}

/** Con số "đã có N quyển được đặt" cập nhật trực tiếp, kèm gợi ý mốc báo giá kế tiếp. */
export function JournalLiveCounter({ tiers }: { tiers: PriceTier[] }) {
  const { total } = useOrderTotal();
  if (total === null) {
    return <div className="jo-counter" aria-live="polite" style={{ minHeight: "9rem" }} />;
  }
  const tier = nextTier(total, tiers);
  const reached = [...tiers].reverse().find((t) => t.qty <= total) ?? null;
  const top = tiers[tiers.length - 1]?.qty ?? 0;
  const pct = top ? Math.min(100, Math.round((total / top) * 100)) : 0;
  return (
    <div className="jo-counter" aria-live="polite">
      <span className="jo-live">
        <i aria-hidden /> cập nhật trực tiếp
      </span>
      <span className="jo-num">{total}</span>
      <span className="jo-cap">quyển đã được đặt</span>
      <div className="jo-bar" role="img" aria-label={`đã đạt ${pct}% mốc ${top} quyển`}>
        <span style={{ width: `${pct}%` }} />
        {tiers.map((t) => (
          <b key={t.qty} className={total >= t.qty ? "on" : ""} style={{ left: `${(t.qty / top) * 100}%` }} title={`${t.qty} quyển`} />
        ))}
      </div>
      <span className="jo-hint">
        {tier
          ? `còn ${tier.qty - total} quyển nữa để chạm mốc ${tier.qty} quyển (${tier.price}/quyển).`
          : `đã vượt mốc ${top} quyển, đơn giá thấp nhất ${reached?.price}/quyển.`}
      </span>
    </div>
  );
}

const fieldStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  color: "var(--color-ink)",
  background: "#fff",
  border: "1px solid var(--color-mist)",
  borderRadius: 2,
  padding: "0.75rem 0.85rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--color-stone)",
  marginBottom: "0.4rem",
};

/** Hết ngày 01.01.2027 (giờ Việt Nam) thì ngừng nhận đơn trên form. */
const CLOSES_AT = new Date("2027-01-02T00:00:00+07:00").getTime();

const FALLBACK_MAIL = "mailto:hello@moclittlefarm.com?subject=" + encodeURIComponent("Đặt in mlf journal – quyển 02 Xanh lại");

/** Form đặt in: lưu đơn vào Supabase (khách chỉ ghi được, không đọc được đơn nào). */
export function JournalOrderForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [qty, setQty] = useState(1);
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    setClosed(Date.now() >= CLOSES_AT);
  }, []);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!supabase) return;
    const f = new FormData(e.currentTarget);
    if (String(f.get("website") || "")) return; // bẫy bot: ô ẩn phải để trống
    setState("sending");
    const { error } = await supabase.from("journal_orders").insert({
      full_name: String(f.get("full_name") || "").trim(),
      phone: String(f.get("phone") || "").trim(),
      email: String(f.get("email") || "").trim(),
      address: String(f.get("address") || "").trim(),
      quantity: qty,
      note: String(f.get("note") || "").trim() || null,
    });
    if (error) {
      setState("error");
      return;
    }
    setState("done");
    window.dispatchEvent(new Event("jo:placed"));
  }

  if (!isSupabaseConfigured || !supabase) {
    return (
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-ink)" }}>
        Form đặt in đang tạm thời chưa mở. Bạn có thể{" "}
        <a href={FALLBACK_MAIL} style={{ color: "var(--color-ink)", textDecoration: "underline" }}>
          gửi email cho mlf
        </a>{" "}
        để đặt in.
      </p>
    );
  }

  if (closed) {
    return (
      <div style={{ border: "1px solid var(--color-mist)", background: "#fff", padding: "1.8rem 1.4rem", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
          Đợt đăng ký in chung đã kết thúc vào ngày 01.01.2027. Cảm ơn bạn đã quan tâm đến mlf journal.
        </p>
      </div>
    );
  }

  if (state === "done") {
    return (
      <div style={{ border: "1px solid var(--color-ink)", background: "#fff", padding: "2rem 1.6rem", textAlign: "center" }}>
        <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.5rem", color: "var(--color-ink)", marginBottom: "0.8rem" }}>
          cảm ơn bạn đã đặt in.
        </span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.98rem", lineHeight: 1.85, color: "var(--color-ink)", margin: 0 }}>
          mlf đã nhận đơn của bạn. Ngày 02.01.2027, mlf sẽ xác định việc có in hay không và đơn giá cuối. Lúc đó mlf sẽ liên hệ qua email và số điện thoại bạn để lại để gửi hướng dẫn thanh toán 100% chi phí. Chi phí vận chuyển bạn thanh toán khi nhận hàng.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
      <div>
        <label style={labelStyle} htmlFor="jo-name">họ và tên người nhận</label>
        <input id="jo-name" name="full_name" required minLength={2} maxLength={80} autoComplete="name" style={fieldStyle} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem" }}>
        <div>
          <label style={labelStyle} htmlFor="jo-phone">số điện thoại</label>
          <input id="jo-phone" name="phone" type="tel" required minLength={8} maxLength={20} autoComplete="tel" inputMode="tel" style={fieldStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="jo-email">email</label>
          <input id="jo-email" name="email" type="email" required maxLength={120} autoComplete="email" style={fieldStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="jo-address">địa chỉ nhận sách</label>
        <textarea id="jo-address" name="address" required minLength={8} maxLength={300} rows={2} autoComplete="street-address" style={{ ...fieldStyle, resize: "vertical" }} />
      </div>
      <div>
        <span style={labelStyle}>số lượng</span>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <button type="button" aria-label="giảm số lượng" onClick={() => setQty((n) => Math.max(1, n - 1))} className="jo-step">−</button>
          <b style={{ minWidth: "2.2rem", textAlign: "center", fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400, color: "var(--color-ink)" }}>{qty}</b>
          <button type="button" aria-label="tăng số lượng" onClick={() => setQty((n) => Math.min(50, n + 1))} className="jo-step">+</button>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-stone)" }}>quyển</span>
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="jo-note">ghi chú (không bắt buộc)</label>
        <textarea id="jo-note" name="note" maxLength={500} rows={2} style={{ ...fieldStyle, resize: "vertical" }} />
      </div>
      {/* bẫy bot: người thật không thấy ô này */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.7, color: "var(--color-stone)", margin: 0 }}>
        Đăng ký lúc này chưa cần thanh toán. Thông tin của bạn chỉ dùng để gửi tạp chí và liên hệ về đơn in này. Chi phí đóng gói (hộp giấy, bọc nilong) 5.000đ/quyển; phí vận chuyển bạn thanh toán khi nhận hàng.
      </p>
      <div>
        <button type="submit" disabled={state === "sending"} className="cta-btn" style={{ cursor: "pointer" }}>
          {state === "sending" ? "đang gửi…" : "gửi đơn đặt in"} <span className="ar">→</span>
        </button>
      </div>
      {state === "error" ? (
        <p role="alert" style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-ink)", margin: 0 }}>
          Chưa gửi được đơn, bạn kiểm tra lại thông tin rồi thử lại nhé. Nếu vẫn lỗi, bạn có thể{" "}
          <a href={FALLBACK_MAIL} style={{ color: "var(--color-ink)", textDecoration: "underline" }}>
            gửi email cho mlf
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

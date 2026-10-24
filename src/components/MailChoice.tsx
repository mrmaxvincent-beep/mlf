"use client";

import { useId, useState } from "react";
import { contactEmail, gmailLink, mailtoLink, type MailDraft } from "@/data/mlfHouse";

/**
 * Nút liên hệ nhà mộc. Bấm vào thì hiện ba cách gửi:
 * Gmail trên web (soạn sẵn tiêu đề + gợi ý), ứng dụng mail khác, hoặc chép địa chỉ email.
 */
export function MailChoice({ label, draft, variant = "button" }: { label: string; draft: MailDraft; variant?: "button" | "link" }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const id = useId();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {}
  };

  return (
    <div className="mc">
      <button
        type="button"
        className={variant === "link" ? "mono-link mc-link" : "cta-btn"}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {label} <span className="ar">{open ? "↓" : "→"}</span>
      </button>
      {open ? (
        <div className="mc-opts" id={id}>
          <a className="mc-opt mc-opt--main" href={gmailLink(draft)} target="_blank" rel="noopener">
            mở Gmail, thư đã soạn sẵn <span className="ar">↗</span>
          </a>
          <a className="mc-opt" href={mailtoLink(draft)}>
            dùng ứng dụng mail khác
          </a>
          <button type="button" className="mc-opt" onClick={copy}>
            {copied ? "đã chép địa chỉ email" : `chép địa chỉ ${contactEmail}`}
          </button>
          <span className="mc-hint">Thư đã có sẵn tiêu đề và vài dòng gợi ý, bạn chỉ cần viết thêm rồi gửi.</span>
        </div>
      ) : null}
    </div>
  );
}

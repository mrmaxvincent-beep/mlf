"use client";

import { useState, type KeyboardEvent } from "react";
import { MailChoice } from "@/components/MailChoice";
import { drafts, invitations } from "@/data/mlfHouse";

/** Góp tay: chọn một lời mời trong danh sách, chỉ hiện một lời mời mỗi lần. */
export function MlfHouseInvites() {
  const open = invitations.filter((i) => i.status === "open");
  const [cur, setCur] = useState(0);
  if (!open.length) return <p className="mh-count">Hiện chưa có lời mời nào đang mở.</p>;
  const inv = open[Math.min(cur, open.length - 1)];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let n = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (i + 1) % open.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (i - 1 + open.length) % open.length;
    if (n < 0) return;
    e.preventDefault();
    setCur(n);
    document.getElementById(`loi-moi-tab-${open[n].id}`)?.focus();
  };

  return (
    <div className="mhi">
      <div className="mhi-list" role="tablist" aria-label="các lời mời đang mở" aria-orientation="vertical">
        <p className="mh-count">{open.length} lời mời đang mở</p>
        {open.map((x, i) => {
          const on = x.id === inv.id;
          return (
            <button
              key={x.id}
              id={`loi-moi-tab-${x.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="loi-moi-panel"
              tabIndex={on ? 0 : -1}
              className={`mhi-item${on ? " on" : ""}`}
              onClick={() => setCur(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="mhi-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="mhi-title">{x.title}</span>
              <span className="mhi-close">{x.period ? x.period : `khép lại ${x.closes}`}</span>
            </button>
          );
        })}
      </div>

      <article key={inv.id} id="loi-moi-panel" role="tabpanel" aria-labelledby={`loi-moi-tab-${inv.id}`} className="mh-invite mhi-card">
        <span className="mh-label">lời mời · đang mở</span>
        <h3>{inv.title}</h3>
        <p className="mhi-why">{inv.why}</p>
        <dl className="mh-rows">
          <div>
            <dt>đang cần</dt>
            <dd>{inv.needs}</dd>
          </div>
          <div>
            <dt>cách góp</dt>
            <dd>{inv.how}</dd>
          </div>
          <div>
            <dt>sự ghi nhận / quyền lợi</dt>
            <dd>{inv.form}</dd>
          </div>
          <div>
            <dt>{inv.period ? "thời gian" : "khép lại"}</dt>
            <dd>{inv.period ?? inv.closes}</dd>
          </div>
        </dl>
        <MailChoice label="tôi muốn góp tay" draft={drafts.gopTay(inv.title)} />
      </article>
    </div>
  );
}

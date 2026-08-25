"use client";

import { useMemo, useState } from "react";
import type { DictEntry, Part } from "@/data/tuDien";

const ALPHABET = ["A", "Ă", "Â", "B", "C", "D", "Đ", "E", "Ê", "G", "H", "I", "K", "L", "M", "N", "O", "Ô", "Ơ", "P", "Q", "R", "S", "T", "U", "Ư", "V", "X", "Y"];

function firstLetter(word: string) {
  return word.charAt(0).toUpperCase();
}

function renderParts(parts: Part[], keyPrefix: string) {
  return parts.map((p, i) => (typeof p === "string" ? <span key={`${keyPrefix}-${i}`}>{p}</span> : <em key={`${keyPrefix}-${i}`}>{p.em}</em>));
}

const sectionLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.6rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--color-stone)",
  marginBottom: "1.1rem",
};

const dividerStyle: React.CSSProperties = {
  height: "1px",
  background: "var(--color-mist)",
  margin: "2.4rem 0",
};

/** A-Z browsable lookup for "từ điển ở-yên" — letter strip + search rail, reading pane styled after the dictionary-entry demo. */
export function TuDienReader({ entries }: { entries: DictEntry[] }) {
  const sorted = useMemo(() => [...entries].sort((a, b) => a.word.localeCompare(b.word, "vi")), [entries]);
  const lettersWithEntries = useMemo(() => new Set(sorted.map((e) => firstLetter(e.word))), [sorted]);

  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);
  const [activeWord, setActiveWord] = useState<string | null>(sorted[0]?.word ?? null);

  const q = query.trim().toLowerCase();
  const filtered = sorted.filter((e) => {
    if (q) return e.word.toLowerCase().includes(q);
    if (letter) return firstLetter(e.word) === letter;
    return true;
  });

  const current = filtered.find((e) => e.word === activeWord) ?? filtered[0] ?? null;

  function pickEntry(word: string) {
    setActiveWord(word);
  }

  function pickLetter(l: string) {
    setLetter((prev) => (prev === l ? null : l));
    setQuery("");
  }

  return (
    <div className="lib-shell">
      <div className="lib-rail">
        <input
          className="lib-search"
          type="text"
          placeholder="tìm theo từ khoá…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setLetter(null);
          }}
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
          {ALPHABET.map((l) => {
            const has = lettersWithEntries.has(l);
            const isActive = letter === l;
            return (
              <button
                key={l}
                className="az-btn"
                onClick={() => pickLetter(l)}
                disabled={!has}
                style={{
                  width: "1.55rem",
                  height: "1.55rem",
                  color: isActive ? "var(--color-paper)" : has ? "var(--color-ink)" : "var(--color-mist)",
                  background: isActive ? "var(--color-cham-dem)" : "transparent",
                  cursor: has ? "pointer" : "default",
                }}
              >
                {l}
              </button>
            );
          })}
        </div>

        <span className="lib-count">
          {filtered.length} / {sorted.length} từ{letter ? ` · vần ${letter}` : ""}
        </span>

        <div className="lib-list">
          {filtered.map((e) => (
            <button key={e.word} className={`lib-item${e.word === current?.word ? " active" : ""}`} onClick={() => pickEntry(e.word)}>
              {e.word}
            </button>
          ))}
        </div>
      </div>

      <div>
        {current ? (
          <div>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.56rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-stone)", marginBottom: "1.6rem" }}>
              từ điển ở-yên · mộc little farm
            </span>

            <h2 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.4rem, 6vw, 3.2rem)", lineHeight: 1, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
              {current.word}
            </h2>

            <div style={{ display: "flex", gap: "2.2rem", flexWrap: "wrap", marginBottom: "1.4rem" }}>
              <div>
                <div style={sectionLabelStyle}>nguồn gốc</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-stone-alt)", letterSpacing: "0.02em" }}>{current.origin}</div>
              </div>
              <div>
                <div style={sectionLabelStyle}>nhóm từ</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-stone-alt)", letterSpacing: "0.02em" }}>{current.group}</div>
              </div>
            </div>

            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.08rem", fontWeight: 300, lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>{renderParts(current.definition, "def")}</p>

            {current.story ? (
              <>
                <div style={dividerStyle} />
                <div style={sectionLabelStyle}>câu chuyện</div>
                {current.story.map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", fontWeight: 300, lineHeight: 1.9, color: "var(--color-ink)", margin: "0 0 1.1rem" }}>
                    {renderParts(p, `story-${i}`)}
                  </p>
                ))}
              </>
            ) : null}

            {current.insight ? (
              <>
                <div style={dividerStyle} />
                <div style={sectionLabelStyle}>góc nhìn</div>
                {current.insight.map((p, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.85, color: "var(--color-ink)", margin: "0 0 1.1rem" }}>
                    {renderParts(p, `insight-${i}`)}
                  </p>
                ))}
                {current.insightClose ? (
                  <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.25rem", fontWeight: 300, lineHeight: 1.7, color: "var(--color-ink)", margin: "1.2rem 0 0" }}>
                    {current.insightClose.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < current.insightClose!.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                ) : null}
              </>
            ) : null}

            {current.variants ? (
              <>
                <div style={dividerStyle} />
                <div style={sectionLabelStyle}>trong hệ từ ở-yên</div>
                {current.variants.map((v) => (
                  <div key={v.word} style={{ display: "flex", gap: "1rem", alignItems: "baseline", marginBottom: "0.9rem" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-ink)", minWidth: "9rem" }}>{v.word}</span>
                    <span style={{ width: "1rem", height: "1px", background: "var(--color-mist)", alignSelf: "center", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-stone-alt)", lineHeight: 1.65 }}>{v.desc}</span>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        ) : (
          <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--color-stone)", fontSize: "1.05rem" }}>
            {letter ? `chưa có từ nào bắt đầu bằng "${letter}". sẽ được bổ sung dần.` : "không tìm thấy từ nào khớp với từ khoá này."}
          </p>
        )}
      </div>
    </div>
  );
}

'use client';

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div
        className="wrap"
        style={{
          paddingTop: "8rem",
          paddingBottom: "6rem",
          textAlign: "center",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(3rem, 10vw, 6rem)",
            lineHeight: 1.1,
            color: "var(--color-ink)",
            margin: "0 0 1.5rem",
          }}
        >
          404
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.2rem",
            lineHeight: 1.8,
            color: "var(--color-ink)",
            maxWidth: "50ch",
            margin: "0 0 0.8rem",
          }}
        >
          Không tìm thấy trang bạn đang tìm
        </p>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--color-stone)",
            maxWidth: "50ch",
            margin: "0 0 2.5rem",
          }}
        >
          Trang này có thể đã bị xóa hoặc URL không chính xác. Quay lại trang chủ hoặc khám phá các chương trình của chúng tôi.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              padding: "0.6rem 1.5rem",
              background: "var(--color-cham-dem)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.2s ease",
            }}
          >
            ← Quay về trang chủ
          </Link>

          <Link
            href="/ngay-hien"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              padding: "0.6rem 1.5rem",
              background: "transparent",
              color: "var(--color-ink)",
              border: "1px solid var(--color-ink)",
              borderRadius: "999px",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.2s ease",
            }}
          >
            Khám phá chương trình →
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

"use client";

import { useAnalytics } from "@/hooks/useAnalytics";

export function BookDownloadLink({ bookId, title, href }: { bookId: string; title: string; href: string }) {
  const { trackEvent } = useAnalytics();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="cta-btn cta-btn--solid"
      onClick={() => trackEvent("book_download", { book_id: bookId, book_title: title, link_url: href })}
    >
      tải xuống <span className="ar">→</span>
    </a>
  );
}

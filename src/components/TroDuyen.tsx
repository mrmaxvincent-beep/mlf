import { Disclosure } from "./Disclosure";

/** The recurring "trợ duyên" (sponsor / receive support) funding block — appears near-verbatim
 * across be-still program pages, referencing retreat hàm-dưỡng and the online retreats. */
export function TroDuyen() {
  return (
    <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "58ch" }}>
      <div className="wrap" style={{ marginBottom: "1.2rem", padding: 0 }}>
        <span className="eyebrow-serif">trợ duyên cho người hữu duyên</span>
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1rem" }}>
          Chúng tôi mong rằng các chương trình của mộc little farm ít nhiều sẽ mang lại sự lợi lạc cho mọi người.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          Nếu bạn cảm thấy có sự kết nối và muốn góp phần lan tỏa hành trình của mlf đến với nhiều người hơn, bạn có thể chung tay trợ duyên cho người hữu duyên thông qua các chương trình retreat hàm-dưỡng & online retreat khai tâm, im lặng-chữ nghĩa.
        </p>
      </div>
      <Disclosure trigger={<span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.9rem", color: "var(--color-ink)" }}>chi tiết cách trợ duyên &amp; nhận hỗ trợ</span>}>
        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>tài trợ tùy duyên</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          bạn có thể trợ duyên cho các chương trình retreat hàm-dưỡng & online retreat khai tâm, im lặng-chữ nghĩa, giúp mlf mở rộng vòng tay đến nhiều người cần sự bình an và chuyển hóa hơn
        </p>
        <span style={{ display: "block", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>nhận hỗ trợ</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.5rem" }}>
          những ai thật sự cần đến retreat ngày-hiền & online retreat khai tâm có thể nhận trợ duyên để tham gia các chương trình của mlf.
        </p>
        <span className="eyebrow-serif">để tài trợ</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.5rem" }}>
          Mọi đóng góp, dù lớn dù nhỏ, của bạn đều có ý nghĩa rất lớn đối với chúng tôi. Xin hoan hỷ ghi rõ nội dung đóng góp: &ldquo;trợ duyên mlf&rdquo; khi chuyển khoản tới: Ngân hàng Vietcombank STK: 7945672381 · Chủ TK: Hồ Thành Tâm
        </p>
        <span className="eyebrow-serif">để nhận hỗ trợ</span>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.8, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          Khi đăng ký chương trình retreat hàm-dưỡng & online retreat khai tâm, im lặng-chữ nghĩa bạn có thể cân nhắc lựa chọn các mức hỗ trợ (10% - 20%) phù hợp với nhu cầu của bản thân. Sau đó, chúng tôi sẽ xác nhận việc hỗ trợ dựa trên mức sẵn có của quỹ trợ duyên.
        </p>
      </Disclosure>
    </div>
  );
}

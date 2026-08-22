import { Disclosure } from "./Disclosure";

const proseP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.86rem",
  lineHeight: 1.8,
  color: "var(--color-ink)",
  textAlign: "justify",
  margin: "0 0 0.9rem",
};

/** The recurring "trợ duyên" (sponsor / receive support) funding block — mirrors the
 * "CHÍNH SÁCH TRỢ DUYÊN" disclosure used on the retreat ngày-hiền pages. */
export function TroDuyen() {
  return (
    <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "72ch" }}>
      <Disclosure trigger={<span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>CHÍNH SÁCH TRỢ DUYÊN</span>}>
        <div>
          <p style={proseP}>
            Nhà mộc mong rằng các chương trình của mlf little farm ít nhiều sẽ mang lại sự lợi lạc cho mọi người. Nếu bạn cảm thấy có sự kết nối và muốn góp phần lan tỏa hành trình của mlf đến với nhiều người hơn, bạn có thể chung tay trợ duyên cho người hữu duyên thông qua các chương trình retreat hàm-dưỡng &amp; online retreat khai tâm, im lặng-chữ nghĩa.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 0.9rem" }}>
            <b>tài trợ tùy duyên</b> - bạn có thể trợ duyên cho các chương trình retreat hàm-dưỡng &amp; online retreat khai tâm, im lặng-chữ nghĩa, giúp mlf mở rộng vòng tay đến nhiều người cần sự bình an và chuyển hóa hơn.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 1.4rem" }}>
            <b>nhận hỗ trợ</b> - những ai thật sự cần đến retreat ngày-hiền &amp; online retreat khai tâm có thể nhận trợ duyên để tham gia các chương trình của mlf.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-ink)", margin: "0 0 0.6rem" }}>
            Để tài trợ: mọi đóng góp, dù lớn dù nhỏ, đều có ý nghĩa rất lớn đối với chúng tôi. Xin hoan hỷ ghi rõ nội dung đóng góp &ldquo;trợ duyên mlf&rdquo; khi chuyển khoản tới: Ngân hàng Vietcombank · STK: 7945672381 · Chủ TK: Hồ Thành Tâm.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
            Để nhận hỗ trợ: khi đăng ký chương trình retreat hàm-dưỡng &amp; online retreat khai tâm, im lặng-chữ nghĩa, bạn có thể cân nhắc lựa chọn các mức hỗ trợ (10% - 20%) phù hợp với nhu cầu của bản thân. Chúng tôi sẽ xác nhận việc hỗ trợ dựa trên mức sẵn có của quỹ trợ duyên.
          </p>
        </div>
      </Disclosure>
    </div>
  );
}

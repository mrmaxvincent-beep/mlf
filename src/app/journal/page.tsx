import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal, RevealStagger } from "@/components/Reveal";
import { JournalIssue } from "@/components/JournalIssue";
import { ExpandableContent } from "@/components/ExpandableContent";
import { issues, defaultIssueIndex, columns } from "@/data/journal";

export const metadata: Metadata = {
  title: "mlf journal",
  description: "một quyển tạp chí được ươm mầm bởi mlf — những ghi chép về ở-yên.",
};

export default function JournalPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "0.5rem" }}>
        <Breadcrumb label="mlf journal" />
      </div>

      <JournalIssue issues={issues} defaultIndex={defaultIssueIndex} />

      <Reveal className="wrap" style={{ marginTop: "3.5rem", marginBottom: "4rem", maxWidth: "60ch" }}>
        <span className="folio" style={{ display: "block", marginBottom: "1.25rem" }}>
          về mlf journal
        </span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>một ghi chép để ở yên.</p>
        <p className="drop-cap" style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: 0 }}>
          Đi qua nhiều nhà, nhiều người, nhiều vùng đất nhưng rốt cuộc là đi sâu vào mình.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "1.25rem 0 0" }}>
          Một quyển tạp chí có 03 chuyên mục, như một hành trình để cảm và hiểu về ở-yên.
        </p>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "4rem", maxWidth: "60ch" }}>
        <span className="folio" style={{ display: "block", marginBottom: "1rem" }}>
          mục lục
        </span>
        <RevealStagger staggerMs={80}>
          {columns.map((c) => (
            <div key={c.num} className="toc-row">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-stone)", flex: "none", width: "1.6rem" }}>{c.num}</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)", flex: "none" }}>{c.name}</span>
              <span className="toc-leader" />
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)", flex: "none", maxWidth: "32ch", textAlign: "right" }}>{c.tagline}</span>
            </div>
          ))}
        </RevealStagger>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "60ch" }}>
        <div style={{ background: "var(--color-paper-dem)", borderRadius: "2px", padding: "2rem 2.25rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: "0.2rem", opacity: 0.55 }} aria-hidden>
            <rect x="3" y="8" width="34" height="24" rx="1.5" stroke="var(--color-cham-dem)" strokeWidth="1.2" />
            <path d="M4 9.5 L20 22 L36 9.5" stroke="var(--color-cham-dem)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="29" cy="27" r="6" fill="var(--color-paper-dem)" stroke="var(--color-cham-dem)" strokeWidth="1" />
            <path d="M26.5 27 L28.2 28.7 L31.5 25.2" stroke="var(--color-cham-dem)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-stone)", display: "block", marginBottom: "1rem" }}>chuyên mục nhỏ · gửi mlf</span>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-ink)", margin: 0 }}>
              Bạn có thể gửi cho chúng tôi một lá thư, như một người bạn viết cho một người quen hiền — về{" "}
              <a href="mailto:hello@moclittlefarm.com" style={{ color: "var(--color-ink)", textDecoration: "underline" }}>
                hello@moclittlefarm.com
              </a>
              .
            </p>
          </div>
        </div>
      </Reveal>

      <div className="wrap" style={{ marginBottom: "5rem", maxWidth: "60ch" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", marginBottom: "1rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-cham-dem)" }}>lời mời cộng tác · quyển 02</span>
        </div>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "1.55rem", lineHeight: 1.55, color: "var(--color-ink)", textAlign: "center", margin: "0 0 2rem" }}>
          &ldquo;mỗi con người đều mang trong mình một ngọn lửa nhỏ — đủ để thắp sáng những điều tốt lành quanh mình.&rdquo;
        </p>
        <p className="drop-cap" style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          Nếu bạn cũng đang sống, đang quan sát, đang lắng nghe cuộc đời bằng một trái tim mở - hãy cùng chúng tôi góp một tiếng nói, một góc nhìn, một mảnh cảm xúc cho mlf journal quyển 02, phát hành Tết 2027 (29 tháng Chạp).
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          gửi những người sắp viết cùng số báo này,
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          mlf journal số 02 mang tên &ldquo;xanh lại&rdquo;.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          một số báo, đi tìm lời đáp cho một suy tưởng: sẽ ra sao nếu con người sống như một phần của tự nhiên, thay vì đứng ngoài nhìn vào?
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          ai cũng từng có màu xanh bên trong mình. một mầm trong ly nhựa trên ban công, một cây ổi ông để lại, một màu xanh dịu mắt trong một chuyến đi, một ước mơ tuổi xanh…?
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          khoảng xanh ấy đôi khi không ở ngoài kia. nó nằm trong đời sống, trong những mối quan hệ, trong chính tâm mình.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          và liệu &ldquo;khoảng xanh&rdquo; bên trong mình có còn xanh?
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.25rem" }}>
          nếu bạn mang một câu chuyện muốn kể, mlf journal đang chờ.
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.9, color: "var(--color-ink)", textAlign: "justify", margin: "0 0 1.5rem" }}>
          bbt mlf journal
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.8, color: "var(--color-stone-alt)", margin: "0 0 1.5rem" }}>
          Chúng tôi không tìm kiếm những cây bút chuyên nghiệp, chỉ mong được lắng nghe những câu chuyện chân thành. Đây là hoạt động cộng đồng, không có nhuận bút - quyền tác giả vẫn thuộc về bạn.
        </p>
        <a className="cta-btn" href="mailto:hello@moclittlefarm.com">
          gửi bài / ý tưởng cộng tác
        </a>
      </div>

      <Reveal className="wrap" style={{ marginBottom: "0", maxWidth: "60ch" }}>
        <ExpandableContent
          title="Hướng dẫn quyền tác giả đối với CTV"
          subtitle="Về quyền nội dung & sự tôn trọng sáng tạo"
          content={`1. QUYỀN NỘI DUNG THUỘC VỀ AI?
Mọi bài viết và hình ảnh bạn gửi cho MLF Journal vẫn thuộc quyền sở hữu của chính bạn.

MLF Journal:
• không mua đứt
• không chiếm quyền tác giả
• không sử dụng vượt phạm vi đã thỏa thuận

Bạn là tác giả của nội dung mình tạo ra.

2. MLF JOURNAL ĐƯỢC QUYỀN GÌ?
Khi bạn gửi bài cho MLF Journal, bạn đồng ý cho MLF:
• đăng tải bài viết/hình ảnh đó:
  - trong ấn phẩm MLF Journal (digital / print)
  - trên các kênh chính thức của MLF (website, mạng xã hội)
  - trích một phần nội dung để giới thiệu số báo

• MLF không chỉnh sửa làm sai lệch tinh thần bài viết
• MLF không sử dụng cho mục đích thương mại khác nếu chưa trao đổi lại với bạn

3. CỘNG TÁC VIÊN CÓ QUYỀN GÌ?
Bạn hoàn toàn có quyền:
• đăng lại bài viết của mình:
  - trên blog cá nhân
  - trên mạng xã hội
  - trong portfolio cá nhân
• sử dụng lại nội dung cho:
  - sách
  - dự án riêng
  - các nền tảng khác

Khuyến khích (không bắt buộc):
• ghi chú nhẹ: Bài viết từng được đăng trong MLF Journal.

4. VỀ CHỈNH SỬA & BIÊN TẬP
MLF Journal có quyền:
• chỉnh sửa:
  - chính tả
  - nhịp câu
  - độ dài
• cắt bỏ những phần:
  - lệch tinh thần Journal
  - mang tính giảng dạy, kết luận, self-help

MLF Journal không:
• thêm ý không phải của bạn
• đổi giọng bài viết
• gán thông điệp bạn không muốn nói

Với những chỉnh sửa lớn, biên tập sẽ trao đổi lại với bạn trước.

5. HÌNH ẢNH DO CỘNG TÁC VIÊN CUNG CẤP
Khi gửi hình ảnh, bạn xác nhận rằng:
• bạn là người chụp, hoặc
• bạn có quyền sử dụng hình ảnh đó

MLF Journal sẽ:
• ghi credit đầy đủ
• không dùng hình ảnh ngoài phạm vi ấn phẩm

6. NHỮNG ĐIỀU MLF JOURNAL KHÔNG LÀM
• Không sử dụng nội dung của bạn cho quảng cáo bán hàng
• Không bán lại nội dung cho bên thứ ba
• Không chỉnh sửa bài viết để tạo thông điệp khác
• Không đăng nội dung bạn gửi nhưng chưa được duyệt cùng bạn (nếu có yêu cầu)

7. NẾU BẠN MUỐN RÚT BÀI / GIỚI HẠN SỬ DỤNG
Nếu bạn:
• muốn gỡ bài
• muốn giới hạn phạm vi sử dụng
• muốn chỉnh lại credit
• có thay đổi về quyền hình ảnh

Chỉ cần thông báo với MLF Journal trước thời hạn xuất bản.
Chúng ta ưu tiên trao đổi, không áp đặc.

8. TINH THẦN HỢP TÁC
MLF Journal tin rằng: sáng tạo chỉ có thể diễn ra trong sự tôn trọng và an tâm.`}
        />
      </Reveal>

      <Reveal className="wrap" style={{ marginBottom: "5rem", maxWidth: "60ch" }}>
        <ExpandableContent
          title="Hướng dẫn xử lý khiếu nại bản quyền"
          content={`1. NGUYÊN TẮC CHUNG
MLF Journal là dự án phi lợi nhuận, hoạt động với tinh thần:
• chia sẻ đời sống
• tôn trọng sáng tạo
• không khai thác thương mại nội dung của cá nhân khác

Tuy vậy, chúng tôi thừa nhận khả năng xảy ra nhầm lẫn bản quyền, đặc biệt với:
• hình ảnh
• ký ức có yếu tố trùng lặp
• chất liệu đời sống phổ quát

Khi có khiếu nại, MLF Journal ưu tiên đối thoại và giải quyết trong tinh thần thiện chí.

2. KHI NÀO ĐƯỢC COI LÀ KHIẾU NẠI BẢN QUYỀN?
MLF Journal tiếp nhận khiếu nại trong các trường hợp:
• Có bên cho rằng:
  - nội dung viết
  - hình ảnh
  - hoặc một phần tác phẩm đã bị sử dụng khi chưa có sự cho phép hợp lệ

• Khiếu nại được gửi bằng:
  - email
  - tin nhắn chính thức
  - hoặc văn bản rõ ràng

3. QUY TRÌNH XỬ LÝ KHIẾU NẠI

BƯỚC 1 - TIẾP NHẬN & TẠM THỜI XỬ LÝ
Ngay khi nhận được khiếu nại:
• MLF Journal sẽ:
  - xác nhận đã nhận khiếu nại
  - tạm ẩn nội dung liên quan (nếu cần)

Việc tạm ẩn không đồng nghĩa thừa nhận sai phạm, chỉ nhằm tránh tổn hại thêm trong thời gian xác minh.

BƯỚC 2 - LÀM VIỆC CÙNG CỘNG TÁC VIÊN
MLF Journal sẽ:
• thông báo cho cộng tác viên là tác giả nội dung
• cùng cộng tác viên:
  - rà soát nguồn gốc nội dung / hình ảnh
  - đối chiếu quyền sử dụng đã được xác nhận trước đó

Cộng tác viên không phải tự xử lý một mình.

BƯỚC 3 - ĐỐI THOẠI & GIẢI QUYẾT
Tùy từng trường hợp, MLF Journal và cộng tác viên sẽ thống nhất một trong các hướng:
• Ghi chú / bổ sung credit rõ ràng
• Điều chỉnh hoặc thay thế hình ảnh
• Gỡ bỏ nội dung nếu cần
• Trao đổi trực tiếp với bên khiếu nại để làm rõ hiểu lầm

MLF Journal không tranh cãi công khai, không đối đầu.

4. TRÁCH NHIỆM CỦA CỘNG TÁC VIÊN
Khi gửi bài cho MLF Journal, cộng tác viên cam kết rằng:
• nội dung viết là sáng tác gốc
• hình ảnh cung cấp là:
  - do mình chụp, hoặc
  - đã có quyền sử dụng hợp lệ

Trong trường hợp có khiếu nại:
• cộng tác viên phối hợp cung cấp thông tin trung thực
• cùng MLF Journal xử lý thiện chí

MLF Journal không đẩy toàn bộ trách nhiệm cho cộng tác viên,
nhưng cần sự hợp tác rõ ràng từ phía tác giả.

5. TRÁCH NHIỆM CỦA MLF JOURNAL
MLF Journal cam kết:
• đứng ra làm đầu mối tiếp nhận khiếu nại
• không để cộng tác viên đối diện áp lực một mình
• không sử dụng nội dung gây tranh chấp cho mục đích thương mại
• ưu tiên giải pháp:
  - nhẹ
  - nhanh
  - tôn trọng các bên

6. NHỮNG ĐIỀU MLF JOURNAL KHÔNG LÀM
• Không công khai tranh chấp
• Không quy kết lỗi vội vàng
• Không tiếp tục sử dụng nội dung khi còn nghi ngờ
• Không né tránh khiếu nại hợp lý

7. NGUYÊN TẮC CUỐI CÙNG
MLF Journal chọn giữ sự ngay thẳng cho công việc sáng tạo, hơn là giữ lại một bài viết hay một hình ảnh.

Trong mọi trường hợp:
• sự tôn trọng con người quan trọng hơn nội dung
• sự an tâm quan trọng hơn việc đúng – sai tuyệt đối`}
        />
      </Reveal>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { routes } from "@/lib/nav";
import { JournalLiveCounter, JournalOrderForm } from "@/components/JournalOrder";

export const metadata: Metadata = {
  title: "cùng in mlf journal",
  description: "một quyển tạp chí ở-yên, được in bằng sự góp sức của nhiều người. Đăng ký in chung mlf journal quyển 02 – Xanh lại.",
};

/** Báo giá nhà in theo số lượng (đơn giá chưa VAT). Giá hiển thị cho khách = giá nhà in + 8% VAT. */
const quote: [number, number][] = [
  [100, 202000],
  [200, 190000],
  [300, 189000],
  [500, 136000],
];
const vnd = (n: number) => n.toLocaleString("vi-VN").replace(/,/g, ".") + "đ";
const tiers = quote.map(([qty, p]) => ({ qty, price: vnd(Math.round(p * 1.08)) }));
const priceRows = tiers.map((t) => ({ qty: `${t.qty} quyển`, price: `${t.price} / quyển` }));

const specs = [
  "Quyển 02 – Xanh lại.",
  "Kích thước: A4.",
  "Số trang: 184 trang, gồm bìa.",
  "Bìa: couche 300, in 2 mặt, cán mờ 1 mặt.",
  "Ruột: kraft 120gsm, in 2 mặt.",
  "Đóng cuốn may chỉ, keo gáy.",
  "Hình thức: Tạp chí in màu.",
  "Phát hành: Bản in giới hạn theo số lượng đặt trước.",
];

const steps = [
  "Điền thông tin nhận sách và số lượng.",
  "Thanh toán chi phí in theo hướng dẫn.",
  "mlf tổng hợp số lượng và tiến hành đặt in.",
  "Tạp chí được gửi đến địa chỉ của bạn trước ngày 29 Tết.",
];

const body: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.9,
  color: "var(--color-ink)",
  margin: "0 0 1.25rem",
};

const sectionLabel: React.CSSProperties = { display: "block", marginBottom: "1.25rem" };

export default function InChungPage() {
  return (
    <>
      <Header />

      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "0.5rem" }}>
        <Breadcrumb trail={[{ label: "mlf journal", href: routes.journal }, { label: "đăng ký in chung" }]} />
        <span className="folio" style={sectionLabel}>cùng in mlf journal</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2.1rem, 6vw, 3.2rem)", lineHeight: 1.25, color: "var(--color-ink)", margin: "0 0 1.2rem" }}>
          một quyển tạp chí ở-yên, được in bằng sự góp sức của nhiều người
        </h1>
      </div>

      <div className="wrap" style={{ marginTop: "1rem", maxWidth: "60ch" }}>
        <JournalLiveCounter tiers={tiers} />
        <div style={{ textAlign: "center", marginTop: "1.4rem" }}>
          <a className="cta-btn" href="#dat-in">
            đặt in mlf journal <span className="ar">→</span>
          </a>
        </div>
      </div>

      {/* LỜI MỜI */}
      <Reveal className="wrap" style={{ marginTop: "2rem", marginBottom: "4.5rem", maxWidth: "60ch" }}>
        <p className="drop-cap" style={{ ...body, textAlign: "justify" }}>
          Mọi năm, mlf journal được phát hành dưới dạng ebook để mọi người có thể đọc và lưu giữ những ghi chép về một đời sống ở-yên.
        </p>
        <p style={{ ...body, textAlign: "justify" }}>Năm nay, chúng tôi muốn làm thêm một điều nhỏ: in mlf journal thành một quyển tạp chí giấy.</p>
        <p style={{ ...body, textAlign: "justify" }}>
          Bởi có lẽ, vẫn có những người thích cảm giác cầm một quyển sách trên tay, thong thả lật từng trang, đọc một bài viết vào buổi sáng hay đặt nó ở một góc nhỏ trong nhà để thỉnh thoảng lại tìm đến.
        </p>
        <p style={{ ...body, textAlign: "justify" }}>Vì vậy, mlf quyết định tổ chức một đợt in chung mlf journal.</p>
        <p style={{ ...body, textAlign: "justify", margin: 0 }}>
          Đây không phải là một hoạt động kinh doanh, mà đơn giản là một lời mời dành cho những ai muốn có một bản in của riêng mình, và cùng chúng tôi đưa những trang viết này vào đời sống.
        </p>
      </Reveal>

      {/* VỀ MLF JOURNAL */}
      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "60ch" }}>
        <span className="folio" style={sectionLabel}>về mlf journal</span>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--color-ink)", margin: "0 0 1.25rem" }}>một ghi chép để ở yên.</p>
        <p style={{ ...body, textAlign: "justify" }}>
          mlf journal là một ấn phẩm được ươm mầm bởi mộc little farm, ghi chép về những điều bình dị trong đời sống, về con người, thiên nhiên và hành trình trở về với chính mình.
        </p>
        <p style={{ ...body, textAlign: "justify" }}>
          Mỗi số tạp chí là một chủ đề, một hành trình quan sát và suy ngẫm, được góp nhặt từ nhiều góc nhìn và những câu chuyện khác nhau.
        </p>
        <p style={{ ...body, textAlign: "justify" }}>
          Đây là một dự án cộng đồng phi lợi nhuận. Ban biên tập gồm những thành viên mlf và những người bạn cùng nhau cộng tác, viết, biên tập, chụp ảnh và thực hiện ấn phẩm.
        </p>
        <p style={{ ...body, textAlign: "justify", margin: 0 }}>
          Mọi người đều góp sức bằng tình yêu dành cho những trang viết và mong muốn chia sẻ những điều tốt lành.
        </p>
      </Reveal>

      {/* LẦN NÀY, CHÚNG TA SẼ CÙNG IN */}
      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "60ch" }}>
        <span className="folio" style={sectionLabel}>lần này, chúng ta sẽ cùng in</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ border: "1px solid var(--color-mist)", background: "#fff", borderRadius: "2px", padding: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>Ebook</span>
            <p style={{ ...body, fontSize: "0.95rem", margin: 0 }}>Phát hành vào ngày 29 Tết. Mọi người có thể đọc miễn phí như mọi năm.</p>
          </div>
          <div style={{ border: "1px solid var(--color-ink)", background: "#fff", borderRadius: "2px", padding: "1.5rem" }}>
            <span style={{ display: "block", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.3rem", color: "var(--color-ink)", marginBottom: "0.6rem" }}>Bản in</span>
            <p style={{ ...body, fontSize: "0.95rem", margin: 0 }}>
              Được in theo hình thức đặt trước và in chung. Những quyển tạp chí sẽ được gửi đến nhà bạn trước ngày 29 Tết, để bạn có thể đón Tết cùng một ấn phẩm mới.
            </p>
          </div>
        </div>
        <p style={{ ...body, textAlign: "justify" }}>Chúng tôi chọn cách in chung vì muốn mọi người có thể sở hữu một bản in với chi phí hợp lý nhất.</p>
        <p style={{ ...body, textAlign: "justify", margin: 0 }}>Số lượng đặt in càng nhiều, đơn giá từ nhà in càng giảm.</p>
      </Reveal>

      {/* THÔNG TIN ẤN PHẨM */}
      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "60ch" }}>
        <span className="folio" style={sectionLabel}>thông tin ấn phẩm</span>
        <div>
          {specs.map((t) => (
            <p key={t} className="mem-item" style={{ fontSize: "0.95rem" }}>
              {t}
            </p>
          ))}
        </div>
      </Reveal>

      {/* CHI PHÍ IN CHUNG */}
      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "60ch" }}>
        <span className="folio" style={sectionLabel}>chi phí in chung</span>
        <p style={{ ...body, textAlign: "justify" }}>
          Đây là dự án phi lợi nhuận. mlf không có bất kỳ khoản lợi nhuận nào từ hoạt động in chung này.
        </p>
        <p style={{ ...body, textAlign: "justify" }}>
          Chi phí bạn đóng góp chính là chi phí sản xuất tại nhà in, được tính theo số lượng đặt in thực tế.
        </p>
        <p style={{ ...body, textAlign: "justify" }}>Chúng tôi công khai bảng báo giá từ nhà in để mọi người cùng tham khảo.</p>

        {priceRows.length ? (
          <div style={{ border: "1px solid var(--color-mist)", background: "#fff", margin: "1.5rem 0" }}>
            {priceRows.map((r, i) => (
              <div key={r.qty} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", padding: "0.85rem 1.2rem", borderTop: i ? "1px solid var(--color-mist)" : undefined, fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--color-ink)" }}>
                <span>{r.qty}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>{r.price}</span>
              </div>
            ))}
            <p style={{ margin: 0, padding: "0.7rem 1.2rem", borderTop: "1px solid var(--color-mist)", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-stone)" }}>
              Giá đã bao gồm 8% VAT, chưa gồm phí vận chuyển.
            </p>
          </div>
        ) : (
          <div style={{ border: "1px dashed var(--color-mist)", padding: "1.4rem", margin: "1.5rem 0", textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-stone)" }}>
            Bảng báo giá in theo số lượng sẽ được cập nhật tại đây.
          </div>
        )}

        <p style={{ ...body, textAlign: "justify" }}>Đơn giá cuối cùng sẽ được xác định dựa trên tổng số lượng đặt trước.</p>
        <p style={{ ...body, textAlign: "justify", margin: 0 }}>
          Một lưu ý nhỏ: nếu số lượng đặt trước không đạt mức tối thiểu để tiến hành in, chúng tôi sẽ không thực hiện đợt in này.
        </p>
      </Reveal>

      {/* CÁCH ĐẶT TẠP CHÍ */}
      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "60ch" }}>
        <span className="folio" style={sectionLabel}>cách đặt tạp chí</span>
        <div style={{ marginBottom: "1.5rem" }}>
          {steps.map((t, i) => (
            <div key={t} style={{ display: "flex", gap: "1.2rem", padding: "0.9rem 0", borderTop: "1px solid var(--color-mist)", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-stone)", flex: "none", width: "1.6rem" }}>0{i + 1}</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", lineHeight: 1.7, color: "var(--color-ink)" }}>{t}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--color-mist)" }} />
        </div>
        <p style={{ ...body, textAlign: "justify", margin: 0 }}>Phí vận chuyển sẽ do bạn thanh toán khi nhận hàng.</p>
      </Reveal>

      {/* ĐẶT IN */}
      <Reveal className="wrap" style={{ marginBottom: "4.5rem", maxWidth: "60ch", scrollMarginTop: "6rem" }}>
        <div id="dat-in" style={{ scrollMarginTop: "6rem" }} />
        <span className="folio" style={sectionLabel}>đặt in mlf journal</span>
        <JournalLiveCounter tiers={tiers} />
        <div style={{ height: "2rem" }} />
        <JournalOrderForm />
      </Reveal>

      {/* MỘT LỜI NHỎ */}
      <Reveal className="wrap" style={{ marginBottom: "6rem", maxWidth: "60ch" }}>
        <span className="folio" style={sectionLabel}>một lời nhỏ</span>
        <p style={{ ...body, textAlign: "justify" }}>Chúng tôi không biết có bao nhiêu người muốn cầm mlf journal trên tay.</p>
        <p style={{ ...body, textAlign: "justify" }}>Có thể là vài chục, vài trăm, hoặc nhiều hơn thế.</p>
        <p style={{ ...body, textAlign: "justify" }}>
          Nhưng dù số lượng là bao nhiêu, chúng tôi vẫn muốn thử thực hiện điều này, để những trang viết được làm ra bằng sự góp sức của nhiều người có thể đến với nhiều ngôi nhà hơn.
        </p>
        <p style={{ ...body, textAlign: "justify" }}>
          Nếu bạn cũng thích đọc sách giấy, muốn lưu giữ một quyển mlf journal trên kệ sách của mình, hãy cùng chúng tôi đặt in nhé.
        </p>
        <p style={{ ...body, textAlign: "justify" }}>
          Và nếu bạn không có nhu cầu sở hữu bản in, ebook vẫn sẽ được phát hành miễn phí vào ngày 29 Tết như mọi năm.
        </p>
        <p style={{ ...body, textAlign: "justify", marginBottom: "2rem" }}>Cảm ơn bạn đã đọc, đã thương và đã cùng mlf nuôi dưỡng những điều nhỏ bé này.</p>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.05rem", color: "var(--color-ink)", margin: "0 0 0.2rem" }}>mộc little farm</p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-ink)", margin: 0 }}>một quyển tạp chí, nhiều tấm lòng.</p>
        <div style={{ marginTop: "2.5rem" }}>
          <Link className="mono-link" href={routes.journal} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)" }}>
            ← về mlf journal
          </Link>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}

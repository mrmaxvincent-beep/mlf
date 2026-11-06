import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { Disclosure } from "@/components/Disclosure";
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

const flow = [
  { when: "đến 01.01.2027", text: "Bạn đăng ký số lượng muốn đặt. Lúc này chưa cần thanh toán." },
  { when: "02.01.2027", text: "mlf xác định việc có in hay không, và nếu có thì đơn giá cuối là bao nhiêu." },
  { when: "sau đó", text: "Bạn thanh toán 100% chi phí." },
  { when: "khi nhận hàng", text: "Chi phí vận chuyển thanh toán khi nhận hàng." },
];

const nav = [
  { id: "loi-moi", label: "lời mời" },
  { id: "thong-tin", label: "ấn phẩm & chi phí" },
  { id: "dat-in", label: "đặt in" },
];

const body: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.02rem",
  lineHeight: 1.85,
  color: "var(--color-ink)",
  margin: "0 0 1.1rem",
};

const small: React.CSSProperties = { ...body, fontSize: "0.92rem", lineHeight: 1.8 };

/** Tiêu đề phần: số thứ tự + tên, giúp người đọc biết mình đang ở đâu. */
function SecHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="ic-head">
      <span className="ic-n">{n}</span>
      <span className="folio">{title}</span>
    </div>
  );
}

const trig = (t: string) => <span className="eyebrow" style={{ marginBottom: 0 }}>{t}</span>;

export default function InChungPage() {
  return (
    <>
      <Header />

      {/* ĐẦU TRANG: tiêu đề, con số trực tiếp, nút đặt in */}
      <div className="wrap" style={{ paddingTop: "6.5rem", paddingBottom: "0.5rem", maxWidth: "60rem" }}>
        <Breadcrumb trail={[{ label: "mlf journal", href: routes.journal }, { label: "đăng ký in chung" }]} />
        <span className="folio" style={{ display: "block", marginBottom: "1rem", textAlign: "center" }}>cùng in mlf journal</span>
        <h1 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem, 5.4vw, 3rem)", lineHeight: 1.25, color: "var(--color-ink)", margin: "0 auto 2.2rem", maxWidth: "26ch", textAlign: "center" }}>
          một quyển tạp chí được in bằng sự góp sức của nhiều người
        </h1>
        <div className="ic-hero">
          <JournalLiveCounter tiers={tiers} />
          <div className="ic-facts">
            <div>
              <span className="ic-k">ấn phẩm</span>
              <span className="ic-v">Quyển 02 – Xanh lại</span>
            </div>
            <div>
              <span className="ic-k">giá từ</span>
              <span className="ic-v">{tiers[tiers.length - 1].price} / quyển</span>
            </div>
            <div>
              <span className="ic-k">hạn chót đăng ký</span>
              <span className="ic-v">01.01.2027</span>
            </div>
            <div>
              <span className="ic-k">nhận sách</span>
              <span className="ic-v">trước ngày 29 Tết</span>
            </div>
            <a className="cta-btn" href="#dat-in" style={{ alignSelf: "flex-start" }}>
              đặt in mlf journal <span className="ar">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* MỤC LỤC NHANH */}
      <nav className="wrap ic-nav" aria-label="các phần của trang" style={{ maxWidth: "60rem" }}>
        {nav.map((x) => (
          <a key={x.id} href={`#${x.id}`}>
            {x.label}
          </a>
        ))}
      </nav>

      {/* 01 LỜI MỜI */}
      <Reveal className="wrap ic-sec" style={{ maxWidth: "42rem", scrollMarginTop: "6rem" }}>
        <div id="loi-moi" />
        <SecHead n="01" title="lời mời" />
        <div className="ic-cols">
          <div>
            <p className="drop-cap" style={body}>
              Mọi năm, mlf journal được phát hành dưới dạng ebook để mọi người có thể đọc và lưu giữ những ghi chép về một đời sống ở-yên.
            </p>
            <p style={body}>Năm nay, chúng tôi muốn làm thêm một điều nhỏ: in mlf journal thành một quyển tạp chí giấy.</p>
            <p style={{ ...body, margin: 0 }}>
              Bởi có lẽ, vẫn có những người thích cảm giác cầm một quyển sách trên tay, thong thả lật từng trang, đọc một bài viết vào buổi sáng hay đặt nó ở một góc nhỏ trong nhà để thỉnh thoảng lại tìm đến.
            </p>
          </div>
          <div>
            <p style={body}>Vì vậy, mlf quyết định tổ chức một đợt in chung mlf journal.</p>
            <p style={{ ...body, margin: 0 }}>
              Đây không phải là một hoạt động kinh doanh, mà đơn giản là một lời mời dành cho những ai muốn có một bản in của riêng mình, và cùng chúng tôi đưa những trang viết này vào đời sống.
            </p>
          </div>
        </div>

        <div className="ic-two">
          <div className="ic-card">
            <span className="ic-card-t">Ebook</span>
            <p style={{ ...small, margin: 0 }}>Phát hành vào ngày 29 Tết. Mọi người có thể đọc miễn phí như mọi năm.</p>
          </div>
          <div className="ic-card ic-card--on">
            <span className="ic-card-t">Bản in</span>
            <p style={{ ...small, margin: 0 }}>
              Được in theo hình thức đặt trước và in chung. Những quyển tạp chí sẽ được gửi đến nhà bạn trước ngày 29 Tết, để bạn có thể đón Tết cùng một ấn phẩm mới.
            </p>
          </div>
        </div>
        <p style={{ ...small, margin: "1.4rem 0 0" }}>
          Chúng tôi chọn cách in chung vì muốn mọi người có thể sở hữu một bản in với chi phí hợp lý nhất. Số lượng đặt in càng nhiều, đơn giá từ nhà in càng giảm.
        </p>

        <div style={{ marginTop: "1.6rem" }}>
          <Disclosure trigger={trig("về mlf journal")}>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--color-ink)", margin: "0 0 1rem" }}>một ghi chép để ở yên.</p>
            <p style={small}>
              mlf journal là một ấn phẩm được ươm mầm bởi mộc little farm, ghi chép về những điều bình dị trong đời sống, về con người, thiên nhiên và hành trình trở về với chính mình.
            </p>
            <p style={small}>
              Mỗi số tạp chí là một chủ đề, một hành trình quan sát và suy ngẫm, được góp nhặt từ nhiều góc nhìn và những câu chuyện khác nhau.
            </p>
            <p style={small}>
              Đây là một dự án cộng đồng phi lợi nhuận. Ban biên tập gồm những thành viên mlf và những người bạn cùng nhau cộng tác, viết, biên tập, chụp ảnh và thực hiện ấn phẩm.
            </p>
            <p style={{ ...small, margin: 0 }}>
              Mọi người đều góp sức bằng tình yêu dành cho những trang viết và mong muốn chia sẻ những điều tốt lành.
            </p>
          </Disclosure>
        </div>
      </Reveal>

      {/* 02 ẤN PHẨM & CHI PHÍ */}
      <Reveal className="wrap ic-sec" style={{ maxWidth: "42rem", scrollMarginTop: "6rem" }}>
        <div id="thong-tin" />
        <SecHead n="02" title="ấn phẩm & chi phí" />
        <div className="ic-cols ic-cols--top">
          <div>
            <span className="ic-sub">thông tin ấn phẩm</span>
            {specs.map((t) => (
              <p key={t} className="mem-item" style={{ fontSize: "0.95rem" }}>
                {t}
              </p>
            ))}
          </div>
          <div>
            <span className="ic-sub">báo giá in chung</span>
            <div className="ic-price">
              {priceRows.map((r) => (
                <div key={r.qty}>
                  <span>{r.qty}</span>
                  <b>{r.price}</b>
                </div>
              ))}
              <div className="ic-price-extra">
                <span>Chi phí đóng gói (hộp giấy, bọc nilong)</span>
                <b>5.000đ / quyển</b>
              </div>
              <p>Giá đã bao gồm 8% VAT, chưa gồm chi phí đóng gói và phí vận chuyển.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", maxWidth: "46rem" }}>
          <span className="ic-sub">về chi phí</span>
          <p style={small}>
            Đây là dự án phi lợi nhuận. mlf không có bất kỳ khoản lợi nhuận nào từ hoạt động in chung này. Chi phí bạn đóng góp chính là chi phí sản xuất tại nhà in, được tính theo số lượng đặt in thực tế.
          </p>
          <p style={small}>Chúng tôi công khai bảng báo giá từ nhà in để mọi người cùng tham khảo. Đơn giá cuối cùng sẽ được xác định dựa trên tổng số lượng đặt trước.</p>
          <p style={{ ...small, margin: 0 }}>
            Một lưu ý nhỏ: nếu số lượng đặt trước không đạt mức tối thiểu để tiến hành in, chúng tôi sẽ không thực hiện đợt in này.
          </p>
        </div>
      </Reveal>

      {/* 03 ĐẶT IN */}
      <Reveal className="wrap ic-sec" style={{ maxWidth: "42rem", scrollMarginTop: "6rem" }}>
        <div id="dat-in" />
        <SecHead n="03" title="đặt in mlf journal" />
        <ol className="ic-flow" aria-label="quy trình đặt in">
          {flow.map((f) => (
            <li key={f.when}>
              <span>{f.when}</span>
              <p>{f.text}</p>
            </li>
          ))}
        </ol>
        <div className="ic-order">
          <div>
            <JournalLiveCounter tiers={tiers} />
          </div>
          <div>
            <p style={{ ...small, margin: "0 0 1.4rem" }}>
              Hạn chót đăng ký: <b style={{ fontWeight: 600 }}>01.01.2027</b>.
            </p>
            <JournalOrderForm />
          </div>
        </div>
      </Reveal>

      {/* MỘT LỜI NHỎ */}
      <Reveal className="wrap" style={{ maxWidth: "42rem", marginTop: "4.5rem", marginBottom: "6rem" }}>
        <div className="ic-head">
          <span className="folio">một lời nhỏ</span>
        </div>
        <p style={small}>Chúng tôi không biết có bao nhiêu người muốn cầm mlf journal trên tay. Có thể là vài chục, vài trăm, hoặc nhiều hơn thế.</p>
        <p style={small}>
          Nhưng dù số lượng là bao nhiêu, chúng tôi vẫn muốn thử thực hiện điều này, để những trang viết được làm ra bằng sự góp sức của nhiều người có thể đến với nhiều ngôi nhà hơn.
        </p>
        <p style={small}>
          Nếu bạn cũng thích đọc sách giấy, muốn lưu giữ một quyển mlf journal trên kệ sách của mình, hãy cùng chúng tôi đặt in nhé.
        </p>
        <p style={small}>
          Và nếu bạn không có nhu cầu sở hữu bản in, ebook vẫn sẽ được phát hành miễn phí vào ngày 29 Tết như mọi năm.
        </p>
        <p style={{ ...small, marginBottom: "1.6rem" }}>Cảm ơn bạn đã đọc, đã thương và đã cùng mlf nuôi dưỡng những điều nhỏ bé này.</p>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem", color: "var(--color-ink)", margin: "0 0 0.2rem" }}>mộc little farm</p>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-ink)", margin: 0 }}>một quyển tạp chí, nhiều tấm lòng.</p>
        <div style={{ marginTop: "2.2rem" }}>
          <Link className="mono-link" href={routes.journal} style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-ink)" }}>
            ← về mlf journal
          </Link>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}

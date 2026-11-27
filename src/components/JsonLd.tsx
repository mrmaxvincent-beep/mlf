/** Chèn một khối dữ liệu có cấu trúc (JSON-LD) vào trang. Ký tự "<" được thoát để không đóng sớm thẻ script. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

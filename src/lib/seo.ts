/** Dữ liệu dùng chung cho SEO: địa chỉ gốc của site và các khối JSON-LD (schema.org). */

export const SITE_URL = "https://moclittlefarm.com";

/** Đổi đường dẫn nội bộ thành URL tuyệt đối. Site dùng trailingSlash nên "/tea-mind" thành ".../tea-mind/". */
export function absoluteUrl(path: string): string {
  const url = new URL(path, SITE_URL);
  if (!url.pathname.endsWith("/") && !/\.[a-z0-9]+$/i.test(url.pathname)) url.pathname += "/";
  return url.toString();
}

/** Bỏ dấu in đậm kiểu markdown và xuống dòng thừa để đưa văn bản vào JSON-LD. */
function plain(text: string): string {
  return text.replace(/\*\*/g, "").replace(/\s*\n+\s*/g, " ").trim();
}

/** Giới thiệu mộc little farm: một doanh nghiệp lưu trú và retreat ở Măng Đen. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LodgingBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "mộc little farm",
  alternateName: ["mlf", "moc little farm"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Retreat farm giữa Măng Đen, theo triết lý ở-yên, cho ai muốn một chuyến đi chậm (slow stay), không lịch trình dày.",
  email: "hello@moclittlefarm.com",
  telephone: "+84932037803",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Măng Đen, Kon Plông",
    addressCountry: "VN",
  },
  areaServed: "VN",
  inLanguage: "vi",
  sameAs: ["https://www.instagram.com/moclittlefarm/", "https://www.facebook.com/moc.community"],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "mộc little farm",
  inLanguage: "vi",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

type Crumb = { name: string; href?: string };

/** Đường dẫn trang: "trang chủ" rồi các mục. Mục cuối không có href thì bỏ trường item (Google chấp nhận). */
export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "trang chủ", href: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: absoluteUrl(it.href) } : {}),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: plain(it.q),
      acceptedAnswer: { "@type": "Answer", text: plain(it.a) },
    })),
  };
}

/** Bộ lịch tea.mind 2027: sản phẩm có giá, đặt qua biểu mẫu. */
export const calendar2027Schema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Lịch bàn tea.mind 2027",
  description:
    "Bộ lịch bàn vẽ tay gồm 13 tờ in 2 mặt (1 trang bìa và 12 tháng), mỗi tháng là một điều nhỏ để chú ý. Mặt sau có lịch âm, thông điệp và chỗ ghi chú.",
  image: `${SITE_URL}/assets/calendar2027_header.webp`,
  url: `${SITE_URL}/tea-mind/lich/`,
  brand: { "@type": "Brand", name: "tea.mind" },
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/tea-mind/lich/`,
    price: "150000",
    priceCurrency: "VND",
    availability: "https://schema.org/InStock",
    seller: { "@id": `${SITE_URL}/#organization` },
  },
};

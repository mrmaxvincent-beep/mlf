import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { SITE_URL } from "@/lib/seo";

// Site xuất tĩnh (output: "export"), nên sitemap phải dựng sẵn lúc build.
export const dynamic = "force-static";

/** Trang cố ý không đưa vào sitemap: đã noindex, hoặc chỉ dành cho khách đang ở. */
const EXCLUDE = new Set(["/chuyen-ve/", "/pushstatus/", "/ve-mlf/tam-biet-mang-den/", "/so-tay-khach/"]);

/** Quét src/app: mỗi thư mục có page.tsx là một đường dẫn. Phần [[...path]] chỉ lấy trang gốc. */
function collect(dir: string, base: string, out: string[]) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("_") || name.startsWith("@") || name.startsWith("(")) continue;
    if (name.startsWith("[[")) {
      // catch-all tuỳ chọn ([[...path]]): trang nằm ngay trong thư mục này và phục vụ cả đường dẫn gốc của thư mục cha
      if (readdirSync(full).some((f) => f === "page.tsx") && !out.includes(base)) out.push(base);
      continue;
    }
    if (name.startsWith("[")) continue; // tham số động: không biết giá trị, bỏ qua
    const route = `${base}${name}/`;
    if (readdirSync(full).some((f) => f === "page.tsx" || f === "page.ts")) out.push(route);
    collect(full, route, out);
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: string[] = ["/"];
  collect(join(process.cwd(), "src", "app"), "/", routes);

  return routes
    .filter((r) => !EXCLUDE.has(r))
    .sort()
    .map((r) => ({
      url: r === "/" ? SITE_URL : `${SITE_URL}${r}`,
    }));
}

import type { NextConfig } from "next";
import { cpSync } from "node:fs";

// mlf os là trang nội bộ, chỉ phục vụ trên Vercel (mlf-flame.vercel.app/os/).
// Nguồn nằm ở internal/os (ngoài public/) để bản deploy lên hosting không chứa nó.
// Trên Vercel (luôn có biến VERCEL) mới chép vào public/os trước khi build, nên /os/ vào được ở đó.
if (process.env.VERCEL) {
  cpSync("internal/os", "public/os", { recursive: true });
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

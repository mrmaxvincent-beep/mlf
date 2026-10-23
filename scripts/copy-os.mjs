// mlf os là trang nội bộ, chỉ phục vụ trên Vercel (mlf-flame.vercel.app/os/).
// Nguồn nằm ở internal/os (ngoài public/) để bản deploy lên hosting không chứa nó.
// Chỉ chép vào out/os khi build chạy trên Vercel (Vercel luôn đặt biến VERCEL=1).
import { cpSync, existsSync } from "node:fs";

if (process.env.VERCEL) {
  if (!existsSync("out")) {
    console.error("copy-os: không thấy thư mục out/, bỏ qua");
    process.exit(1);
  }
  cpSync("internal/os", "out/os", { recursive: true });
  console.log("copy-os: đã chép internal/os -> out/os");
} else {
  console.log("copy-os: không phải Vercel, bỏ qua mlf os");
}

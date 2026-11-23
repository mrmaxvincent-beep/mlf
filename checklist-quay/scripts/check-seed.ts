// Kiểm tra seed: đủ 42 cảnh ⭐ #01–#42, mỗi mã đúng một lần.
import { buildSeed } from "../src/seed.ts";

const { shots } = buildSeed();
const gems = shots.filter((s) => s.is_gem);
const codes = gems.map((s) => s.code as number).sort((a, b) => a - b);
const missing = Array.from({ length: 42 }, (_, i) => i + 1).filter((n) => !codes.includes(n));
const dup = codes.filter((c, i) => codes.indexOf(c) !== i);
console.log(`Tổng cảnh: ${shots.length}, cảnh ⭐: ${gems.length}`);
if (missing.length || dup.length || gems.length !== 42) {
  console.error("SEED LỖI", { missing, dup });
  process.exit(1);
}
console.log("Seed OK: đủ 42 cảnh ⭐, không trùng mã.");

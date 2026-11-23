# Checklist cảnh quay · "Một ngày trong mọi ngày"

Web app nhỏ để cả ê-kíp cùng xem và tick cảnh quay trong 4 ngày quay (24–27.11.2026, Măng Đen). Dùng theo thời vụ, **độc lập hoàn toàn** với website MLF ở thư mục gốc (không dùng chung code, build, hosting hay cơ sở dữ liệu).

Stack: Vite + React + TypeScript + Tailwind CSS 4, Supabase (Postgres + Realtime), triển khai Vercel.

## 1. Tạo dự án Supabase
1. Vào https://supabase.com → **New project** (tạo dự án MỚI, đừng dùng chung với dự án khác).
2. Vào **SQL Editor** → dán toàn bộ nội dung [`supabase/schema.sql`](supabase/schema.sql) → **Run**.
   File này tạo 3 bảng `days`, `slots`, `shots`, mở RLS cho `anon`, và **bật Realtime** cho cả ba bảng.
   (Kiểm tra lại ở **Database → Replication/Publications → supabase_realtime** nếu cần.)
3. Vào **Project Settings → API**, lấy `Project URL` và khóa `anon public`.

## 2. Biến môi trường
| Biến | Ý nghĩa |
|---|---|
| `VITE_SUPABASE_URL` | Project URL của Supabase |
| `VITE_SUPABASE_ANON_KEY` | khóa `anon public` |
| `VITE_CREW_CODE` | mã ê-kíp (ai biết mã mới vào được; để trống = không hỏi mã) |

Chạy local: `cp .env.example .env.local` rồi điền giá trị.

## 3. Chạy local
```bash
cd checklist-quay
npm install
npm run dev        # http://localhost:5173
npm run build      # kiểm tra kiểu + build
npm run check:seed # kiểm tra seed: đủ 42 cảnh ⭐ #01–#42, mỗi mã một lần
```
Khi chưa có biến Supabase, app chạy **chế độ thử trên máy** (lưu trong trình duyệt, không đồng bộ) để xem giao diện.

**Lần đầu có dữ liệu trống:** mở app → bấm **Nạp dữ liệu mẫu** (đưa kịch bản final vào Supabase). Mọi thứ trong seed đều sửa được trong app. Menu ☰ có "Đặt lại dữ liệu mẫu", "Xuất JSON" và "Nhập JSON".

## 4. Triển khai lên Vercel (từ GitHub, không dùng hosting khác)
1. Đẩy repo lên GitHub (đã làm).
2. Vercel → **Add New → Project** → chọn repo này.
3. **Root Directory: `checklist-quay`** (quan trọng, vì repo gốc là website khác). Framework tự nhận Vite; Build `npm run build`, Output `dist`.
4. Thêm 3 biến môi trường ở trên → **Deploy**.
5. Gửi link cho ê-kíp kèm mã ê-kíp. Lần đầu vào mỗi người nhập mã và tên hiển thị (lưu trong localStorage của máy).

> Nếu chỉ muốn Vercel build nhánh này: Project → Settings → Git → Production Branch = `claude/film-shot-checklist-app-b1gnyt` (hoặc nhánh bạn đã gộp vào).

## Cách dùng nhanh
- Chạm ô vuông bên trái để tick **đã quay**; chạm lại để bỏ tick. Nhấn giữ ô tick hoặc chạm `⋯` để chọn *đã quay dư* / *chưa quay*.
- Chạm vào hàng cảnh để mở chi tiết: sửa tên, mô tả, ghi chú (tự lưu), ⭐, loại, mã, **Dời tới…**, xóa.
- "⭐ còn thiếu" lọc cảnh đắt giá chưa quay; bật thêm "Mọi ngày" để xem gộp cả phim.
- "Sao chép tóm tắt" (đầu mỗi ngày) tạo văn bản gửi nhóm chat.
- Khung giờ hiện tại của hôm nay (24–27.11) được tô sáng và tự cuộn tới.

## Bảo mật
Mức "link riêng + mã ê-kíp", phù hợp dự án nhỏ. Mã ê-kíp được kiểm tra ở phía trình duyệt, và RLS mở cho `anon` trên 3 bảng, nên ai có `URL` + khóa anon vẫn đọc/ghi được dữ liệu. Không lưu dữ liệu nhạy cảm (chỉ tên cảnh, ghi chú quay). Sau khi quay xong có thể xuất JSON rồi xóa dự án Supabase/Vercel.

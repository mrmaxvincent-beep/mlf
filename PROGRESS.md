# MLF website rebuild — progress

Source: `design_handoff_mlf_website/` (from the handed-off zip). Fidelity rules,
tokens, and the Supabase spec are in that folder's `README.md` — read it before
building a new page.

## Done
- [x] Next.js 16 (App Router, TS) scaffolded at `mlf-website/`
- [x] Design tokens wired (`src/styles/tokens/*.css`, fonts via `next/font/google` incl. `vietnamese` subset)
- [x] Shared components: `Header`, `Footer`, `Reveal`/`RevealStagger`, `Button`/`ArrowLink`, `Motif`
- [x] Supabase client scaffold (`src/lib/supabase.ts`, `supabase/schema.sql`, `.env.local.example`)
- [x] Homepage (`src/app/page.tsx`)
- [x] Hero video wired in (`public/video/home-hero.mp4`)
- [x] Supabase connected — reusing the design-prototype project (owner-confirmed), RLS
      confirmed on. `supabase/schema.sql`'s `CREATE TABLE` isn't needed (tables already
      exist); its RLS/policy statements are there for reference if that ever needs redoing.

## Not done yet
- [ ] `upcoming_events.href` rows still point to old `MLF *.dc.html` filenames — owner is
      fixing these directly in Supabase Table Editor to the new route slugs.

## Remaining 36 pages
Route slugs are defined in `src/lib/nav.ts`. Build order suggested by likely traffic/linkage:

**hoạt động**
- [x] ngày-hiền — `/ngay-hien` ← `MLF Ngay Hien.dc.html`
- [x] giữa · middle — `/giua` ← `MLF Giua.dc.html`
- [x] tuần-du — `/tuan-du` ← `MLF Tuan Du.dc.html` (built with new `Schedule`/`Callout` shared components)
- [x] tuần-du tới — `/tuan-du/toi` ← `MLF Tuan Du Toi.dc.html` (new `DayItinerary`/`Accordion`/`FaqAccordion` components)
- [x] chuỗi tuần-du — `/tuan-du/chuoi` ← `MLF Chuoi Tuan Du.dc.html`
- [x] tuần-du blog ("người đi qua") — `/tuan-du/blog` ← `MLF Tuan Du Blog.dc.html` (new `BlogReader` component)

**be-still** (all daytime palette — README's "night pages" list didn't match the actual source files for this section)
- [x] be-still (hub) — `/be-still` ← `MLF Be Still.dc.html`
- [x] khai tâm — `/be-still/khai-tam` ← `MLF Khai Tam.dc.html`
- [x] im lặng, chữ nghĩa — `/be-still/im-lang-chu-nghia` ← `MLF Im Lang Chu Nghia.dc.html` (new `SessionTabs` component)
- [x] clari-tea — `/be-still/clari-tea` ← `MLF Clari Tea.dc.html`
- [x] phía sáng — `/be-still/phia-sang` ← `MLF Phia Sang.dc.html`
- [x] nhất-hiện — `/be-still/nhat-hien` ← `MLF Nhat Hien.dc.html`

**tea · mind**
- [ ] tea·mind (hub) — `/tea-mind` ← `MLF Tea Mind.dc.html`
- [ ] trà — `/tea-mind/tra` ← `MLF Tea Mind Tra.dc.html`
- [ ] gốm — `/tea-mind/gom` ← `MLF Tea Mind Gom.dc.html`
- [ ] tranh — `/tea-mind/tranh` ← `MLF Tea Mind Tranh.dc.html`
- [ ] lịch — `/tea-mind/lich` ← `MLF Tea Mind Lich.dc.html`

**thinh · không**
- [ ] thinh · không — `/thinh-khong` ← `MLF Thinh Khong.dc.html`

**retreats**
- [ ] retreat ở-yên — `/retreat/o-yen` ← `MLF Retreat O Yen.dc.html`
- [ ] retreat ở-yên · lịch trình — `/retreat/o-yen/lich-trinh` ← `MLF Retreat O Yen Lich Trinh.dc.html`
- [ ] retreat hàm-dưỡng — `/retreat/ham-duong` ← `MLF Retreat Ham Duong.dc.html`
- [ ] retreat hàm-dưỡng · lịch trình — `/retreat/ham-duong/lich-trinh` ← `MLF Retreat Ham Duong Lich Trinh.dc.html`
- [ ] retreat an-vui — `/retreat/an-vui` ← `MLF Retreat An Vui.dc.html`
- [ ] stay+talk — `/stay-talk` ← `MLF Stay Talk.dc.html`

**thư viện**
- [ ] thư viện ở-yên — `/thu-vien` ← `MLF Thu Vien.dc.html`
- [ ] sổ tay khách — `/so-tay-khach` ← `MLF So Tay Khach.dc.html`
- [ ] đề mục chi tiết — `/de-muc-chi-tiet` ← `MLF De Muc Chi Tiet.dc.html`
- [ ] dạo một vòng — `/dao-mot-vong` ← `MLF Dao Mot Vong.dc.html`
- [ ] lưu bút — `/luu-but` ← `MLF Luu But.dc.html`

**cộng đồng (Supabase-backed — see README §Interactive Features)**
- [ ] một ngày ở-yên — `/mot-ngay-o-yen` ← `MLF Mot Ngay O Yen.dc.html` (+ v1 draft, skip)
- [ ] cộng đồng ở-yên — `/cong-dong-o-yen` ← `MLF Cong Dong O Yen.dc.html`
- [ ] kho lời nhắn ở-yên — `/kho-loi-nhan-o-yen` ← `MLF Kho Loi Nhan O Yen.dc.html`

**mlf**
- [ ] về mlf — `/ve-mlf` ← `MLF Ve Mlf.dc.html`
- [ ] biên-thư-cho-Hy — `/bien-thu-cho-hy` ← `MLF Bien Thu Cho Hy.dc.html`
- [ ] chuyện-về — `/chuyen-ve` ← `MLF Chuyen Ve.dc.html`
- [ ] mlf journal (hub) — `/journal` ← `MLF Journal.dc.html`

Journal is a blog index — check whether it needs its own `[slug]` dynamic route once
individual post pages are in scope (not obviously covered by the 37 files above).

## Notes for whoever builds the next page
- Night-palette pages (per README): Chuyện Về, Be Still, Biên Thư, some Journal posts —
  use `--color-cham-dem` background / `--color-paper-dem` text, not the daytime tokens.
- Reuse `Header`, `Footer`, `Reveal`, `ArrowLink`, `Motif` — don't recreate inline styles
  that duplicate what's already in `globals.css` (`.wrap`, `.go`, `.arrow-link`, etc).
- Read each `.dc.html`'s `data-dc-script` block for copy + structure, but rebuild with
  real React state, not the `x-dc` wrapper markup.

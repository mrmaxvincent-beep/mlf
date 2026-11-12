-- MLF website — Supabase schema for the 3 interactive features described in
-- the design handoff README. Run this in a NEW production Supabase project
-- (do not reuse the design-prototype project/key).

-- 1. "một ngày ở-yên" — running contribution-day counter
create table oyen_days (
  id uuid primary key default gen_random_uuid(),
  count integer not null default 0
);
insert into oyen_days (count) values (0);

alter table oyen_days enable row level security;
create policy "public can read count" on oyen_days for select using (true);
-- Increment via RPC below rather than a raw public UPDATE, so writes stay validated.

create or replace function increment_oyen_days()
returns integer
language plpgsql
security definer
as $$
declare
  new_count integer;
begin
  update oyen_days set count = count + 1
  where id = (select id from oyen_days limit 1)
  returning count into new_count;
  return new_count;
end;
$$;

-- 2. oyen_notes — moderated message wall, shared by "một ngày ở-yên" and
--    "kho lời nhắn ở-yên"
create table oyen_notes (
  id uuid primary key default gen_random_uuid(),
  body text not null,
  from_label text,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

alter table oyen_notes enable row level security;
create policy "public can read approved notes" on oyen_notes
  for select using (approved = true);
create policy "public can insert notes (unapproved)" on oyen_notes
  for insert with check (approved = false);
-- No public update/delete policy — moderation happens from the Supabase dashboard
-- (or an authenticated admin role you add later).
-- RLS can't rate-limit by itself — pair this with Supabase's built-in Auth
-- rate limits or an Edge Function + captcha in front of the insert if spam becomes a problem.

-- 3. upcoming_events — homepage "sắp diễn ra" grid, edited from the Table Editor
create table upcoming_events (
  id uuid primary key default gen_random_uuid(),
  when_label text not null,
  name text not null,
  description text not null,
  href text not null,
  sort_order integer not null default 0
);

alter table upcoming_events enable row level security;
create policy "public can read events" on upcoming_events for select using (true);

-- Realtime: enable replication on the tables the client subscribes to.
alter publication supabase_realtime add table oyen_notes;
alter publication supabase_realtime add table oyen_days;
alter publication supabase_realtime add table upcoming_events;

-- 4. traces — dấu vết "dạo này": mỗi bản ghi một dòng, ảnh tuỳ chọn.
--    Phân tầng (3 gần nhất / 10 tiếp theo / gom theo tháng) được tính lúc render,
--    không lưu trong DB — đổi hằng T1, T2 trong src/data/daoNay.ts.
create table traces (
  id uuid primary key default gen_random_uuid(),
  body text not null check (char_length(body) <= 140),
  photo_url text,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

alter table traces enable row level security;
create policy "public can read published traces" on traces
  for select using (published = true);
-- Ghi: chỉ tài khoản đã đăng nhập (Supabase Auth) — form ở /pushstatus. Site là static
-- export nên anon key nằm công khai trong bundle; chốt chặn thật phải ở đây, không phải
-- ở chỗ đường dẫn trang khó đoán. Tạo tài khoản tại Authentication → Users → Add user.
create policy "authenticated can write traces" on traces
  for insert to authenticated with check (true);
-- Vẫn không có policy update/delete — sửa/xóa làm từ Table Editor trên dashboard.

alter publication supabase_realtime add table traces;

-- 5. journal_orders — đơn đặt in chung mlf journal (trang /journal/in-chung).
-- Khách chỉ ghi được đơn mới; chỉ tài khoản đăng nhập xem/cập nhật. Tổng số quyển công khai qua journal_order_total().
create table journal_orders (
  id uuid primary key default gen_random_uuid(),
  issue text not null default 'quyen-02',
  full_name text not null check (char_length(btrim(full_name)) between 2 and 80),
  phone text not null check (char_length(btrim(phone)) between 8 and 20),
  email text not null check (char_length(email) between 5 and 120 and position('@' in email) > 1),
  address text not null check (char_length(btrim(address)) between 8 and 300),
  quantity integer not null check (quantity between 1 and 50),
  note text check (char_length(note) <= 500),
  status text not null default 'moi' check (status in ('moi','da_thanh_toan','huy')),
  created_at timestamptz not null default now()
);
alter table journal_orders enable row level security;
create policy "public can place journal orders" on journal_orders for insert to anon, authenticated with check (status = 'moi' and issue = 'quyen-02');
create policy "authenticated can read journal orders" on journal_orders for select to authenticated using (true);
create policy "authenticated can update journal orders" on journal_orders for update to authenticated using (true) with check (true);
create or replace function journal_order_total(p_issue text default 'quyen-02') returns bigint language sql security definer set search_path = public stable as $$
  select coalesce(sum(quantity), 0)::bigint from journal_orders where issue = p_issue and status <> 'huy';
$$;
revoke all on function journal_order_total(text) from public;
grant execute on function journal_order_total(text) to anon, authenticated;

-- Checklist cảnh quay · "Một ngày trong mọi ngày"
-- Chạy toàn bộ file này trong Supabase → SQL Editor (dự án Supabase MỚI, riêng cho app này).

create table if not exists days (
  id int primary key,            -- 1..4, 5 = cảnh cơ hội
  label text not null,
  date date,
  title text,
  tone text,
  sort int not null
);

create table if not exists slots (
  id uuid primary key default gen_random_uuid(),
  day_id int references days(id) on delete cascade,
  start_time time,
  title text not null,
  place text,
  note text,
  sort int not null default 0
);

create table if not exists shots (
  id uuid primary key default gen_random_uuid(),
  slot_id uuid references slots(id) on delete cascade,
  code int,
  title text not null,
  description text,
  kind text not null default 'scene',        -- scene | interview | audio | motif
  is_gem boolean not null default false,
  is_extra boolean not null default false,
  status text not null default 'todo',       -- todo | done | extra_take
  note text,
  done_by text,
  done_at timestamptz,
  sort int not null default 0,
  created_at timestamptz default now()
);

create index if not exists slots_day_idx on slots(day_id);
create index if not exists shots_slot_idx on shots(slot_id);

-- Bảo mật mức "link riêng + mã ê-kíp": mở RLS cho anon, không lưu dữ liệu nhạy cảm.
alter table days enable row level security;
alter table slots enable row level security;
alter table shots enable row level security;

drop policy if exists "open_days" on days;
drop policy if exists "open_slots" on slots;
drop policy if exists "open_shots" on shots;
create policy "open_days" on days for all to anon, authenticated using (true) with check (true);
create policy "open_slots" on slots for all to anon, authenticated using (true) with check (true);
create policy "open_shots" on shots for all to anon, authenticated using (true) with check (true);

grant select, insert, update, delete on days, slots, shots to anon, authenticated;

-- Bật Realtime cho cả ba bảng
do $$
declare t text;
begin
  foreach t in array array['days','slots','shots'] loop
    if not exists (
      select 1 from pg_publication_tables
      where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = t
    ) then
      execute format('alter publication supabase_realtime add table public.%I', t);
    end if;
  end loop;
end $$;

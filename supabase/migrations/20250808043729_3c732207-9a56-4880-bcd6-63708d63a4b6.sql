-- 1) Create purchases table with proper RLS and protections
create table if not exists public.quiz_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  difficulty text not null check (difficulty in ('easy','medium','hard')),
  amount integer not null, -- Amount in INR (rupees)
  currency text not null default 'INR',
  status text not null default 'completed',
  payment_id text unique,
  order_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, difficulty)
);

-- Enable RLS
alter table public.quiz_purchases enable row level security;

-- Policies: users can view their own purchases
create policy if not exists "Users can view their own purchases"
  on public.quiz_purchases
  for select
  using (auth.uid() = user_id);

-- Optional: allow edge functions (service role) to insert/update regardless of RLS
-- (Service role bypasses RLS by design, so no explicit insert/update policies added.)

-- Updated-at trigger (re-use existing function if present)
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_quiz_purchases_updated_at
before update on public.quiz_purchases
for each row execute function public.update_updated_at_column();

-- 2) Prevent role/status escalation on profiles via trigger
create or replace function public.prevent_role_status_escalation()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  if (new.role is distinct from old.role) or (new.status is distinct from old.status) then
    if not exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role = 'Admin'
    ) then
      raise exception 'You are not allowed to change role or status';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_prevent_role_status_escalation on public.profiles;
create trigger trg_prevent_role_status_escalation
before update on public.profiles
for each row execute function public.prevent_role_status_escalation();

-- Create quiz_purchases table and secure it
create table if not exists public.quiz_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  difficulty text not null check (difficulty in ('easy','medium','hard')),
  amount integer not null, -- INR rupees
  currency text not null default 'INR',
  status text not null default 'completed',
  payment_id text unique,
  order_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, difficulty)
);

alter table public.quiz_purchases enable row level security;

drop policy if exists "Users can view their own purchases" on public.quiz_purchases;
create policy "Users can view their own purchases"
  on public.quiz_purchases
  for select
  using (auth.uid() = user_id);

-- updated_at trigger
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_quiz_purchases_updated_at on public.quiz_purchases;
create trigger trg_quiz_purchases_updated_at
before update on public.quiz_purchases
for each row execute function public.update_updated_at_column();

-- Helper to avoid recursive RLS in profiles
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'Admin'
  );
$$;

-- Harden profiles policies (remove recursive ones and duplicates)
drop policy if exists "Admins can update all profiles" on public.profiles;
drop policy if exists "Admins can view all profiles" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Users can view their own profile" on public.profiles;

create policy "Admins can update all profiles"
  on public.profiles
  for update
  using (public.is_admin());

create policy "Admins can view all profiles"
  on public.profiles
  for select
  using (public.is_admin());

-- Prevent role/status escalation via trigger
create or replace function public.prevent_role_status_escalation()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  if (new.role is distinct from old.role) or (new.status is distinct from old.status) then
    if not public.is_admin() then
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

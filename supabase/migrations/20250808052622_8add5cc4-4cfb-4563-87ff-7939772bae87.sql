-- Fix failed policy creation and resolve profiles recursive policies

-- Ensure quiz_purchases policy exists cleanly
drop policy if exists "Users can view their own purchases" on public.quiz_purchases;
create policy "Users can view their own purchases"
  on public.quiz_purchases
  for select
  using (auth.uid() = user_id);

-- Create a SECURITY DEFINER helper to avoid recursive policies on profiles
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

-- Drop recursive admin policies and duplicate self policies
drop policy if exists "Admins can update all profiles" on public.profiles;
drop policy if exists "Admins can view all profiles" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Users can view their own profile" on public.profiles;

-- Recreate admin policies using helper
create policy "Admins can update all profiles"
  on public.profiles
  for update
  using (public.is_admin());

create policy "Admins can view all profiles"
  on public.profiles
  for select
  using (public.is_admin());

-- Keep existing per-user policies (named "Allow users to update their own profile" and "Allow users to view their own profile") intact

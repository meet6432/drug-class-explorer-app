-- Add explicit search_path to core functions for security hardening

create or replace function public.generate_share_link()
 returns text
 language plpgsql
 set search_path = public
as $$
BEGIN
  RETURN encode(gen_random_bytes(16), 'hex');
END;
$$;

create or replace function public.get_user_limits(user_uuid uuid)
 returns table(event_limit integer, guest_limit integer, host_limit integer, features jsonb)
 language plpgsql
 security definer
 set search_path = public
as $$
BEGIN
  RETURN QUERY
  SELECT 
    sp.event_limit,
    sp.guest_limit,
    sp.host_limit,
    sp.features
  FROM public.user_subscriptions us
  JOIN public.subscription_plans sp ON us.plan_id = sp.id
  WHERE us.user_id = user_uuid 
    AND us.status = 'active'
    AND (us.expires_at IS NULL OR us.expires_at > now())
  ORDER BY us.created_at DESC
  LIMIT 1;
  
  IF NOT FOUND THEN
    RETURN QUERY
    SELECT 2, 50, 1, '{}'::JSONB;
  END IF;
END;
$$;

create or replace function public.handle_new_user()
 returns trigger
 language plpgsql
 security definer
 set search_path = public
as $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role, status)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'student'),
    CASE 
      WHEN COALESCE(NEW.raw_user_meta_data->>'role', 'student') = 'admin' THEN 'Approved'
      ELSE 'Pending'
    END
  );
  RETURN NEW;
END;
$$;

create or replace function public.set_share_link()
 returns trigger
 language plpgsql
 set search_path = public
as $$
BEGIN
  IF NEW.share_link IS NULL THEN
    NEW.share_link = generate_share_link();
  END IF;
  RETURN NEW;
END;
$$;

create or replace function public.update_updated_at_column()
 returns trigger
 language plpgsql
 set search_path = public
as $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

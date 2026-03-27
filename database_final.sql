-- Idempotent SQL for JoeKym Labs
-- Run this if you are getting "already exists" errors.

-- 1. Profiles Table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  full_name text,
  username text unique,
  avatar_url text,
  email text unique
);

alter table public.profiles enable row level security;

-- Safe Policy Creation
do $$ 
begin
  if not exists (select 1 from pg_policies where policyname = 'Profiles are publicly viewable') then
    create policy "Profiles are publicly viewable" on public.profiles for select using ( true );
  end if;
  if not exists (select 1 from pg_policies where policyname = 'Users can update own profile') then
    create policy "Users can update own profile" on public.profiles for update using ( auth.uid() = id );
  end if;
  if not exists (select 1 from pg_policies where policyname = 'Users can insert own profile') then
    create policy "Users can insert own profile" on public.profiles for insert with check ( auth.uid() = id );
  end if;
end $$;

-- 2. Trigger for profile auto-creation
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, username, avatar_url, email)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    lower(split_part(new.email, '@', 1)) || floor(random() * 1000)::text,
    new.raw_user_meta_data->>'avatar_url', 
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

do $$ 
begin
  if not exists (select 1 from pg_trigger where tgname = 'on_auth_user_created') then
    create trigger on_auth_user_created
      after insert on auth.users
      for each row execute procedure public.handle_new_user();
  end if;
end $$;

-- 3. Project Requests Table
create table if not exists public.project_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users not null,
  name text not null,
  email text not null,
  budget text,
  message text,
  status text default 'pending'
);

alter table public.project_requests enable row level security;

do $$ 
begin
  if not exists (select 1 from pg_policies where policyname = 'Users can view own requests') then
    create policy "Users can view own requests" on public.project_requests for select using ( auth.uid() = user_id );
  end if;
  if not exists (select 1 from pg_policies where policyname = 'Users can insert own requests') then
    create policy "Users can insert own requests" on public.project_requests for insert with check ( auth.uid() = user_id );
  end if;
end $$;

-- 4. Subscriptions Table
create table if not exists public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users not null,
  email text unique not null,
  active boolean default true
);

alter table public.subscriptions enable row level security;

do $$ 
begin
  if not exists (select 1 from pg_policies where policyname = 'Users can manage own subscription') then
    create policy "Users can manage own subscription" on public.subscriptions for all using ( auth.uid() = user_id );
  end if;
end $$;

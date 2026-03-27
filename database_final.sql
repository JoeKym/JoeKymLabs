-- Idempotent SQL for JoeKym Labs
-- Run this if you are getting "already exists" errors.

-- 1. Profiles Table
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  full_name text,
  username text unique,
  avatar_url text,
  email text unique,
  bio text,
  phone text,
  location text,
  website text,
  github text,
  twitter text,
  followers_count int default 0,
  following_count int default 0,
  reputation_points int default 0,
  preferences jsonb default '{}'::jsonb
);

-- Safely add columns if the table already exists
do $$
begin
  alter table public.profiles add column if not exists bio text;
  alter table public.profiles add column if not exists phone text;
  alter table public.profiles add column if not exists location text;
  alter table public.profiles add column if not exists website text;
  alter table public.profiles add column if not exists github text;
  alter table public.profiles add column if not exists twitter text;
  alter table public.profiles add column if not exists followers_count int default 0;
  alter table public.profiles add column if not exists following_count int default 0;
  alter table public.profiles add column if not exists reputation_points int default 0;
  alter table public.profiles add column if not exists preferences jsonb default '{}'::jsonb;
exception
  when duplicate_column then null;
end $$;

-- 7. Services Table
create table if not exists public.services (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  pain_points text[] not null,
  methodology text not null,
  deliverables text[] not null,
  benefits text not null,
  price_range text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.services enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where policyname = 'Services are publicly viewable') then
    create policy "Services are publicly viewable" on public.services for select using ( true );
  end if;
end $$;

-- 8. Jobs Table (Careers)
create table if not exists public.jobs (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  department text not null,
  location text not null,
  type text not null,
  salary_band text not null,
  description text not null,
  requirements text[] not null,
  status text default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.jobs enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where policyname = 'Jobs are publicly viewable') then
    create policy "Jobs are publicly viewable" on public.jobs for select using ( true );
  end if;
end $$;

-- 9. Pricing Tiers Table
create table if not exists public.pricing_tiers (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  price text not null,
  price_value numeric not null,
  interval text not null,
  description text not null,
  features text[] not null,
  is_popular boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.pricing_tiers enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where policyname = 'Pricing tiers are publicly viewable') then
    create policy "Pricing tiers are publicly viewable" on public.pricing_tiers for select using ( true );
  end if;
end $$;

-- 10. Blog Posts Table (Notes)
create table if not exists public.blog_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null,
  content text,
  author_id uuid references public.profiles(id),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.blog_posts enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where policyname = 'Blog posts are publicly viewable') then
    create policy "Blog posts are publicly viewable" on public.blog_posts for select using ( true );
  end if;
end $$;

-- 11. CRM Leads Table (Contact Form)
create table if not exists public.crm_leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  budget text,
  message text not null,
  status text default 'new',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.crm_leads enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where policyname = 'Anyone can insert leads') then
    create policy "Anyone can insert leads" on public.crm_leads for insert with check ( true );
  end if;
end $$;

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

-- 5. User Projects Table
create table if not exists public.user_projects (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  description text,
  image_url text,
  tags text[],
  likes_count int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.user_projects enable row level security;

do $$ 
begin
  if not exists (select 1 from pg_policies where policyname = 'Projects are publicly viewable') then
    create policy "Projects are publicly viewable" on public.user_projects for select using ( true );
  end if;
  if not exists (select 1 from pg_policies where policyname = 'Users can manage own projects') then
    create policy "Users can manage own projects" on public.user_projects for all using ( auth.uid() = user_id );
  end if;
end $$;

-- 6. User Activities Table
create table if not exists public.user_activities (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  activity_type text not null,
  target_name text,
  content text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.user_activities enable row level security;

do $$ 
begin
  if not exists (select 1 from pg_policies where policyname = 'Activities are publicly viewable') then
    create policy "Activities are publicly viewable" on public.user_activities for select using ( true );
  end if;
  if not exists (select 1 from pg_policies where policyname = 'Users can manage own activities') then
    create policy "Users can manage own activities" on public.user_activities for all using ( auth.uid() = user_id );
  end if;
end $$;

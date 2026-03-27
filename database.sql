-- Profiles Table (One-to-one with auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  full_name text,
  username text unique,
  avatar_url text,
  email text unique
);

-- Enable RLS for profiles
alter table public.profiles enable row level security;

-- Public profiles are viewable by everyone
create policy "Profiles are publicly viewable"
on public.profiles for select
using ( true );

-- Users can only update their own profile
create policy "Users can update own profile"
on public.profiles for update
using ( auth.uid() = id );

-- Automatically create a profile on signup
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, username, avatar_url, email)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    lower(split_part(new.email, '@', 1)) || floor(random() * 1000)::text, -- Default username from email
    new.raw_user_meta_data->>'avatar_url', 
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Projects/Requests Table
create table public.project_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users not null,
  name text not null,
  email text not null,
  budget text,
  message text,
  status text default 'pending'
);

-- Enable RLS for project_requests
alter table public.project_requests enable row level security;

-- Users can only see their own requests
create policy "Users can view own requests"
on public.project_requests for select
using ( auth.uid() = user_id );

-- Users can insert their own requests
create policy "Users can insert own requests"
on public.project_requests for insert
with check ( auth.uid() = user_id );

-- Subscriptions Table
create table public.subscriptions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users not null,
  email text unique not null,
  active boolean default true
);

-- Enable RLS for subscriptions
alter table public.subscriptions enable row level security;

-- Users can manage their own subscription
create policy "Users can manage own subscription"
on public.subscriptions for all
using ( auth.uid() = user_id );

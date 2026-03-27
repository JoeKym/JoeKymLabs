-- Create a bucket for portfolio project images
insert into storage.buckets (id, name, public)
values ('portfolio-assets', 'portfolio-assets', true);

-- Create a bucket for blog/notes images
insert into storage.buckets (id, name, public)
values ('blog-assets', 'blog-assets', true);

-- Allow public access to read from 'portfolio-assets'
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'portfolio-assets' );

-- Allow public access to read from 'blog-assets'
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'blog-assets' );

-- Set up upload policies (Authenticated only for security)
-- Note: Replace with your specific user ID or roles if needed
create policy "Authenticated Upload"
on storage.objects for insert
with check ( bucket_id in ('portfolio-assets', 'blog-assets') AND auth.role() = 'authenticated' );

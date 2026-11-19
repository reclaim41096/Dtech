-- Enquiries table: stores submissions from the DTECH Digital Agency
-- website's "Our Services" enquiry form.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text not null,
  status text not null default 'new' check (status in ('new', 'contacted', 'closed')),
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.enquiries is 'Client enquiries submitted from the DTECH website contact form.';

-- Keep updated_at current on every row change.
create extension if not exists moddatetime schema extensions;

drop trigger if exists set_updated_at on public.enquiries;
create trigger set_updated_at
  before update on public.enquiries
  for each row
  execute function extensions.moddatetime(updated_at);

-- Helpful index for the admin/service-role dashboard query pattern
-- (list newest enquiries first, filter by status).
create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
create index if not exists enquiries_status_idx on public.enquiries (status);

-- Lock the table down with RLS.
alter table public.enquiries enable row level security;

-- Anyone (anon, using the publishable key from the website) may INSERT
-- a new enquiry, but can never read, update or delete enquiries —
-- that keeps other people's contact details private.
drop policy if exists "Public can submit enquiries" on public.enquiries;
create policy "Public can submit enquiries"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);

-- No select/update/delete policies are defined for anon/authenticated,
-- so RLS denies those by default. Only the service_role (used by the
-- Edge Function and any future admin dashboard) can read or manage rows.

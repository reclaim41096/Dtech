-- Fire the "notify-enquiry" Edge Function every time a new row lands
-- in public.enquiries, using pg_net (async HTTP from Postgres).
--
-- The Authorization header below uses the project's PUBLIC anon key
-- (same one shipped to the browser) purely to satisfy the Edge
-- Function platform's JWT verification — it is never used to touch
-- the database from inside the function, which only reads the row
-- already included in the webhook payload.
create extension if not exists pg_net with schema extensions;

create or replace function public.trigger_notify_enquiry()
returns trigger
language plpgsql
security definer
set search_path = public, net
as $$
begin
  perform net.http_post(
    url := 'https://fduicakjkwrwkquyggpx.supabase.co/functions/v1/notify-enquiry',
    headers := '{"Content-type":"application/json","Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdWljYWtqa3dyd2txdXlnZ3B4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUwMzMwNjYsImV4cCI6MjExMDYwOTA2Nn0.yr7uOzDby6jIazobvuKjPvdjREhcHAnqKaycVQXOo8c"}'::jsonb,
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'enquiries',
      'schema', 'public',
      'record', to_jsonb(new),
      'old_record', null
    )
  );
  return new;
end;
$$;

-- This function must only ever run as a trigger, never be callable
-- directly through the PostgREST API by anon/authenticated users.
revoke execute on function public.trigger_notify_enquiry() from public;
revoke execute on function public.trigger_notify_enquiry() from anon;
revoke execute on function public.trigger_notify_enquiry() from authenticated;

drop trigger if exists on_enquiry_created on public.enquiries;
create trigger on_enquiry_created
  after insert on public.enquiries
  for each row
  execute function public.trigger_notify_enquiry();

import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client for the DTECH website.
 *
 * Uses the public/publishable key on purpose — the enquiries table's
 * RLS policy only allows INSERT for anon/authenticated and denies
 * select/update/delete, so this key can never read or change existing
 * enquiries, only create new ones. No service role key is needed (or
 * used) by the website itself.
 */
export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase env vars are missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (see .env.example)."
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

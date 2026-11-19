# DTECH Digital Agency

Official corporate website for DTECH Digital Agency — Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Supabase backend.

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Services + client enquiry form

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Backend (Supabase)

Project: `fduicakjkwrwkquyggpx` (region: eu-north-1).

**Table — `public.enquiries`**
Stores every submission from the `/services#contact` form: `name`, `email`, `phone`, `service`, `message`, `status` (`new` / `contacted` / `closed`), `source`, timestamps.

**Row Level Security**
RLS is enabled. The only policy lets `anon`/`authenticated` **insert** rows — there is no select/update/delete policy for those roles, so the public key the website uses can create enquiries but can never read, change or delete anyone's data. Only the `service_role` key (never shipped to the browser) can manage existing rows, e.g. from an admin dashboard built later.

**Edge Function — `notify-enquiry`**
Deployed and active. A database trigger (`on_enquiry_created`) fires on every `INSERT` into `enquiries` and calls this function via `pg_net`, which:
1. Emails the agency inbox with the enquiry details.
2. Sends a short confirmation email back to the person who submitted it.

Set these **Edge Function secrets** in the Supabase dashboard (Project Settings → Edge Functions → Secrets) to turn on real email delivery:

| Secret | Required | Default if unset |
|---|---|---|
| `RESEND_API_KEY` | Yes, to actually send email | none — function logs and no-ops |
| `CONTACT_TO_EMAIL` | No | `dtechdigitalagency@gmail.com` |
| `CONTACT_FROM_EMAIL` | No | Resend's shared test sender |

Get a free Resend API key at [resend.com](https://resend.com). Until a sending domain is verified there, outgoing mail uses Resend's shared test sender — fine for testing, but verify your own domain for production deliverability.

**Env vars (Next.js app)**
Only two, both public/safe to expose (see `.env.example`):
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

No service role key is used anywhere in this app.

## Deploy

Builds clean with `npm run build`. Deploy to Vercel with zero extra config — just set the two Supabase env vars above in the Vercel project settings.

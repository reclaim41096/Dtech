// Supabase Edge Function: notify-enquiry
//
// Triggered by a Database Webhook (trigger) on INSERT into
// public.enquiries. Sends an email notification to the agency inbox
// via Resend, and a short confirmation email back to the person who
// submitted the enquiry.
//
// Edge Function secrets (Project Settings -> Edge Functions -> Secrets):
//   RESEND_API_KEY     - Resend API key (required to actually send mail)
//   CONTACT_TO_EMAIL    - inbox that receives enquiry notifications
//                          (defaults to dtechdigitalagency@gmail.com)
//   CONTACT_FROM_EMAIL  - verified "from" address for outgoing mail
//                          (defaults to Resend's shared test sender)
//
// This function is invoked by a Postgres trigger
// (public.trigger_notify_enquiry via pg_net), authenticated with the
// project's anon key so platform-level JWT verification passes. It
// never uses that key to touch the database — the payload already
// contains the full row.

interface EnquiryRecord {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  status: string;
  source: string;
  created_at: string;
}

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: EnquiryRecord;
  old_record: EnquiryRecord | null;
}

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CONTACT_TO_EMAIL = Deno.env.get("CONTACT_TO_EMAIL") ?? "dtechdigitalagency@gmail.com";
const CONTACT_FROM_EMAIL = Deno.env.get("CONTACT_FROM_EMAIL") ?? "DTECH Website <onboarding@resend.dev>";

async function sendEmail(to: string, subject: string, text: string, replyTo?: string) {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is not set — skipping email send.", { to, subject });
    return { skipped: true };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend API error (${res.status}): ${errText}`);
  }

  return await res.json();
}

Deno.serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let payload: WebhookPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  if (payload.type !== "INSERT" || payload.table !== "enquiries") {
    return new Response(JSON.stringify({ ignored: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const enquiry = payload.record;

  try {
    // 1. Notify the agency inbox.
    await sendEmail(
      CONTACT_TO_EMAIL,
      `New Enquiry from ${enquiry.name}${enquiry.service ? ` — ${enquiry.service}` : ""}`,
      [
        `Name: ${enquiry.name}`,
        `Email: ${enquiry.email}`,
        enquiry.phone ? `Phone: ${enquiry.phone}` : null,
        enquiry.service ? `Service of interest: ${enquiry.service}` : null,
        `Submitted: ${enquiry.created_at}`,
        "",
        "Message:",
        enquiry.message,
      ]
        .filter(Boolean)
        .join("\n"),
      enquiry.email
    );

    // 2. Send a short confirmation back to the enquirer.
    await sendEmail(
      enquiry.email,
      "We've received your enquiry — DTECH Digital Agency",
      [
        `Hi ${enquiry.name},`,
        "",
        "Thanks for reaching out to DTECH Digital Agency. We've received your enquiry and will get back to you shortly.",
        "",
        "For anything urgent, you can also reach us on WhatsApp: +234 905 153 8710.",
        "",
        "— DTECH Digital Agency",
        "Building Digital Presence. Creating Growth Opportunities.",
      ].join("\n")
    );

    return new Response(JSON.stringify({ success: true, id: enquiry.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("notify-enquiry failed:", err);
    return new Response(JSON.stringify({ success: false, error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});

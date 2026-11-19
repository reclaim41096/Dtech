"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitEnquiry(
  _prevState: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("company_website") || "").trim();

  // Honeypot field — real users never fill this in. Pretend success so
  // bots don't learn anything from the response.
  if (honeypot) {
    return { status: "success", message: "Thanks for reaching out. We'll be in touch shortly." };
  }

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." };
  }

  if (!isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  try {
    const supabase = createSupabaseServerClient();

    const { error } = await supabase.from("enquiries").insert({
      name,
      email,
      phone: phone || null,
      service: service || null,
      message,
      source: "website",
    });

    if (error) {
      console.error("Supabase enquiry insert failed:", error);
      return {
        status: "error",
        message: "We couldn't send your enquiry right now. Please WhatsApp or email us directly.",
      };
    }

    // The database trigger on public.enquiries fires the
    // "notify-enquiry" Edge Function automatically, which emails the
    // agency inbox and sends a confirmation to the enquirer — nothing
    // else to do here.
    return {
      status: "success",
      message: "Thanks! Your enquiry has been sent. We'll get back to you shortly.",
    };
  } catch (err) {
    console.error("Enquiry submission failed:", err);
    return {
      status: "error",
      message: "Something went wrong sending your enquiry. Please WhatsApp or email us directly.",
    };
  }
}

"use client";

import { useActionState } from "react";
import { useRef } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions";

const initialState: EnquiryState = { status: "idle", message: "" };

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="rounded-[20px] border border-border bg-white p-10 shadow-[0_4px_14px_rgba(10,31,87,0.06)] sm:p-7">
      {state.status !== "idle" && (
        <div
          className={`mb-4 rounded-[10px] px-4 py-3.5 text-sm font-semibold ${
            state.status === "success" ? "bg-light-blue text-deep-blue" : "bg-red-50 text-red-700"
          }`}
          role="status"
        >
          {state.message}
        </div>
      )}

      <form
        ref={formRef}
        action={async (formData) => {
          await formAction(formData);
          if (formRef.current) formRef.current.reset();
        }}
        noValidate
      >
        {/* Honeypot — hidden from real users, bots tend to fill it in */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Full Name *">
            <input type="text" name="name" required placeholder="Your name" className={inputClass} />
          </Field>
          <Field label="Email Address *">
            <input type="email" name="email" required placeholder="you@email.com" className={inputClass} />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Phone Number">
            <input type="tel" name="phone" placeholder="+234" className={inputClass} />
          </Field>
          <Field label="Service of Interest">
            <select name="service" className={inputClass} defaultValue="">
              <option value="">Select a service</option>
              <option value="Website Development">Website Development</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Creative Visual Design">Creative Visual Design</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </Field>
        </div>

        <Field label="Tell us about your project *">
          <textarea
            name="message"
            required
            rows={5}
            placeholder="What does your business need help with?"
            className={`${inputClass} min-h-[120px] resize-y`}
          />
        </Field>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-[10px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(30,79,216,0.28)] transition-all hover:-translate-y-0.5 hover:bg-blue-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending..." : "Send Enquiry"}
        </button>
        <p className="mt-3.5 text-center text-xs text-grey-light">
          By submitting, you agree to be contacted by DTECH Digital Agency regarding your enquiry.
        </p>
      </form>
    </div>
  );
}

const inputClass =
  "w-full rounded-[10px] border border-border bg-white px-4 py-3.5 text-[15px] text-charcoal transition-all focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/12";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-[13px] font-semibold text-deep-blue">{label}</label>
      {children}
    </div>
  );
}

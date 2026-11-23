import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHead, SectionTag } from "@/components/Section";
import { EnquiryForm } from "@/components/EnquiryForm";
import { IconMail, IconPin, IconWhatsApp } from "@/components/icons";
import { contact, services, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore DTECH Digital Agency's services: website development, social media management and creative visual design. Get in touch for a free enquiry.",
};

const processSteps = [
  { title: "Discovery", desc: "We learn about your business, audience and goals before anything is designed." },
  { title: "Strategy & Design", desc: "We plan the structure and design direction around what will actually convert." },
  { title: "Build & Review", desc: "We build, test and review each deliverable with you before it goes live." },
  { title: "Launch & Support", desc: "We launch, hand over access, and stay available for ongoing support." },
];

const whyNeedUs = [
  "Businesses with a strong digital presence inspire more confidence",
  "Consistent branding keeps you recognisable and memorable",
  "A structured online presence turns visitors into real enquiries",
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-light-blue to-white py-16 pb-14 text-center">
        <div className="container-x">
          <div className="rise-in rise-in-1">
            <SectionTag>What We Offer</SectionTag>
          </div>
          <h1 className="text-display rise-in rise-in-2 mx-auto mb-4 max-w-[760px] font-bold text-deep-blue">
            Everything your business needs to grow its digital presence.
          </h1>
          <p className="rise-in rise-in-3 mx-auto max-w-[600px] text-[17px] text-grey">
            From the website itself to how you show up on social media and how your brand looks everywhere else, we handle it as one connected strategy.
          </p>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      {services.map((s, i) => {
        const alt = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-24 py-16 ${alt ? "bg-light-blue" : ""} ${i !== services.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
              <Reveal className={alt ? "lg:order-2" : ""}>
                <span className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-blue">
                  0{i + 1}
                </span>
                <h2 className="text-h2 mb-4 font-bold text-deep-blue">{s.title}</h2>
                <p className="mb-5 text-base text-grey">{s.short}</p>
                <ul className="mb-6 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-light-blue-2 bg-white text-[11px] font-bold text-blue">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="#contact" variant="primary">{s.cta}</Button>
              </Reveal>
              <Reveal
                delay={120}
                className={`pointer-events-none flex min-h-[280px] items-center justify-center rounded-[20px] bg-light-blue p-10 ${alt ? "lg:order-1" : ""}`}
              >
                {null}
              </Reveal>
            </div>
          </section>
        );
      })}

      {/* PROCESS */}
      <section className="bg-light-blue py-22">
        <div className="container-x">
          <SectionHead
            center
            tag="Our Process"
            title="How We Work"
            description="A simple, structured process that keeps every project on track from first conversation to delivery."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="rounded-[14px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(10,31,87,0.06)]">
                <div className="mb-4.5 flex h-10 w-10 items-center justify-center rounded-[10px] bg-deep-blue text-[15px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mb-2 font-bold text-deep-blue">{step.title}</h3>
                <p className="text-[13px] text-grey">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BUSINESSES NEED US */}
      <section className="py-22">
        <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTag>Why It Matters</SectionTag>
            <h2 className="text-h2 mb-4.5 font-bold text-deep-blue">
              Why your business needs a digital strategy, not just a presence.
            </h2>
            <p className="mb-5 text-[16px] text-grey">
              Most businesses already exist online in some form. The difference between being visible and being chosen is strategy: a website that converts, a social presence that engages, and visuals that stay consistent everywhere your brand appears.
            </p>
            <ul className="space-y-3.5">
              {whyNeedUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-charcoal">
                  <span className="mt-0.5 flex h-5.5 w-5.5 flex-shrink-0 items-center justify-center rounded-full bg-light-blue text-xs font-bold text-blue">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="rounded-[20px] bg-deep-blue p-11 text-white">
            <h4 className="text-h4 mb-4.5 font-bold text-white">What You Gain</h4>
            {["Credibility", "Visibility", "Consistency", "Business enquiries"].map((g, i) => (
              <div key={g} className={`py-3.5 text-sm text-white/80 ${i !== 0 ? "border-t border-white/14" : ""}`}>{g}</div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CONTACT / ENQUIRY */}
      <section id="contact" className="scroll-mt-24 bg-light-blue py-22">
        <div className="container-x">
          <SectionHead
            center
            tag="Client Enquiry"
            title="Let's Talk About Your Project"
            description="Tell us a bit about your business and what you need. We'll get back to you quickly."
          />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="rounded-[20px] bg-deep-blue p-10 text-white sm:p-7">
              <h3 className="text-h4 mb-2.5 font-bold text-white">Get In Touch</h3>
              <p className="mb-7.5 text-[15px] text-white/72">
                Reach out directly, or fill in the enquiry form and we&apos;ll respond as soon as possible.
              </p>

              <ContactMethod icon={<IconWhatsApp className="h-[19px] w-[19px] text-white" />} label="WhatsApp">
                <a href={whatsappLink("Hi DTECH, I'd like to enquire about a service.")} target="_blank" rel="noopener noreferrer" className="text-sm text-white/72 transition-colors hover:text-white">
                  {contact.whatsappDisplay}
                </a>
              </ContactMethod>
              <ContactMethod icon={<IconMail className="h-[19px] w-[19px] text-white" />} label="Email">
                <a href={`mailto:${contact.email}`} className="text-sm text-white/72 transition-colors hover:text-white">
                  {contact.email}
                </a>
              </ContactMethod>
              <ContactMethod icon={<IconPin className="h-[19px] w-[19px] text-white" />} label="Based in" last>
                <span className="text-sm text-white/72">{contact.location}</span>
              </ContactMethod>
            </Reveal>

            <Reveal delay={120}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactMethod({
  icon,
  label,
  children,
  last = false,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3.5 ${last ? "" : "mb-6"}`}>
      <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[10px] bg-white/10">
        {icon}
      </div>
      <div>
        <h4 className="mb-0.5 text-sm font-semibold text-white">{label}</h4>
        {children}
      </div>
    </div>
  );
}

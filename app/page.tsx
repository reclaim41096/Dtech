import { Button } from "@/components/Button";
import { HeroVisual } from "@/components/HeroVisual";
import { SectionHead, SectionTag } from "@/components/Section";
import { IconDesign, IconSocial, IconWebsite } from "@/components/icons";
import { services, siteConfig, whatsappLink } from "@/lib/site-config";
import Link from "next/link";

const whyChooseUs = [
  { title: "Professional Approach", desc: "Every project is handled with structure and care." },
  { title: "Creative Solutions", desc: "Ideas crafted to make your brand stand out." },
  { title: "Business-Focused Strategy", desc: "Every decision is tied to real business outcomes." },
  { title: "Commitment to Quality", desc: "Nothing leaves our hands unless it meets our standard." },
  { title: "Growth Understanding", desc: "We know what digital growth actually requires." },
];

const serviceIcons = {
  "website-development": IconWebsite,
  "social-media": IconSocial,
  "visual-design": IconDesign,
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-b from-light-blue to-white py-18 pb-24">
        <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionTag>Digital Services Agency</SectionTag>
            <h1 className="mb-5.5 text-[34px] leading-[1.12] font-bold tracking-tight text-deep-blue sm:text-[44px] lg:text-[54px]">
              Your business deserves more than an online presence — it deserves{" "}
              <span className="text-blue">growth</span>.
            </h1>
            <p className="mb-8 max-w-[520px] text-lg text-grey">{siteConfig.description}</p>
            <div className="mb-10 flex flex-wrap gap-4">
              <Button href="/services#contact" variant="primary">Get Started</Button>
              <Button href="/services" variant="outline">Explore Our Services</Button>
            </div>
            <div className="flex flex-wrap gap-9">
              {[
                ["3", "Core Services"],
                ["100%", "Client Focused"],
                ["24/7", "WhatsApp Support"],
              ].map(([n, l]) => (
                <div key={l}>
                  <strong className="block text-[26px] text-deep-blue">{n}</strong>
                  <span className="text-[13px] uppercase tracking-wider text-grey-light">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-b border-border py-9">
        <p className="container-x text-center text-[13px] font-semibold uppercase tracking-wider text-grey-light">
          {siteConfig.tagline}
        </p>
      </div>

      {/* ABOUT INTRO */}
      <section className="py-22">
        <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTag>Who We Are</SectionTag>
            <h2 className="mb-4.5 text-[26px] font-bold text-deep-blue sm:text-[34px]">
              A digital partner focused on turning visibility into real business opportunity.
            </h2>
            <p className="mb-4 text-[16px] text-grey">
              DTECH Digital Agency works with businesses and brands to strengthen their digital identity, improve their online visibility and turn audiences into potential clients.
            </p>
            <p className="mb-6 text-[16px] text-grey">
              We go beyond simply creating digital content. We help businesses build a professional digital presence that communicates credibility, attracts attention and creates real opportunities for growth.
            </p>
            <Button href="/about" variant="outline">More About Us</Button>
          </div>
          <div className="rounded-[20px] bg-deep-blue p-11 text-white">
            <h4 className="mb-4.5 text-xl font-bold text-white">Our Approach</h4>
            {["Credibility — Built", "Visibility — Improved", "Audience — Converted"].map((row, i) => (
              <div key={row} className={`flex justify-between py-3.5 ${i !== 0 ? "border-t border-white/14" : ""}`}>
                <span className="text-sm text-white/60">{row.split(" — ")[0]}</span>
                <span className="text-xl font-bold">{row.split(" — ")[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-light-blue py-22">
        <div className="container-x">
          <SectionHead
            center
            tag="What We Do"
            title="Our Core Services"
            description="Everything your business needs to build and grow a credible digital presence, in one place."
          />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
              return (
                <div
                  key={s.slug}
                  className="rounded-[14px] border border-border bg-white p-9 transition-all hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_4px_14px_rgba(10,31,87,0.06)]"
                >
                  <div className="mb-5.5 flex h-14 w-14 items-center justify-center rounded-[14px] bg-light-blue">
                    <Icon className="h-6.5 w-6.5 text-blue" />
                  </div>
                  <h3 className="mb-2.5 text-[19px] font-bold text-deep-blue">{s.title}</h3>
                  <p className="mb-4.5 text-[15px] text-grey">{s.short}</p>
                  <Link href={`/services#${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    Learn more →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-22">
        <div className="container-x">
          <SectionHead center tag="Why Choose Us" title="Built to Help You Grow" />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="px-4.5 py-7.5 text-center">
                <div className="mx-auto mb-4.5 flex h-14 w-14 items-center justify-center rounded-[14px] bg-light-blue">
                  <span className="text-xl font-bold text-blue">✓</span>
                </div>
                <h3 className="mb-2 text-[15px] font-bold text-deep-blue">{item.title}</h3>
                <p className="text-[13px] text-grey">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-22">
        <div className="container-x">
          <div className="rounded-[24px] bg-gradient-to-br from-deep-blue to-blue px-7 py-16 text-center text-white sm:px-16">
            <h2 className="mb-3.5 text-[26px] font-bold text-white sm:text-[36px]">
              Ready to turn visibility into opportunity?
            </h2>
            <p className="mx-auto mb-8 max-w-[520px] text-base text-white/78">
              Let&apos;s build a digital presence that reflects the quality of what your business actually offers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/services#contact" variant="light">Get Started</Button>
              <Button href={whatsappLink("Hi DTECH, I'd like to talk about a project.")} variant="ghost-light" external>
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

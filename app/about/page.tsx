import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHead, SectionTag } from "@/components/Section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn who DTECH Digital Agency is, our story, mission, vision and values, and our approach to helping businesses grow their digital presence.",
};

const audiences = [
  "Small & medium businesses",
  "Startups & entrepreneurs",
  "Established companies",
  "Personal brands",
];

const values = [
  { title: "Professionalism", desc: "Every project is handled with the same standard of professionalism we promise to our clients." },
  { title: "Innovation", desc: "We stay forward-thinking, applying ideas that keep our clients' brands relevant." },
  { title: "Creativity", desc: "We approach every brief with original thinking, not templates." },
  { title: "Reliability", desc: "We deliver what we promise, on time and to standard." },
  { title: "Growth-Orientation", desc: "Every decision we make is tied to our clients' long-term growth." },
  { title: "Client Focus", desc: "We listen first, so the solutions we build actually fit the business." },
];

const approachSteps = [
  "Understand the business",
  "Build the right digital assets",
  "Grow visibility consistently",
  "Convert visibility into enquiries",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-light-blue to-white py-16 pb-14 text-center">
        <div className="container-x">
          <div className="rise-in rise-in-1">
            <SectionTag>About DTECH</SectionTag>
          </div>
          <h1 className="text-display rise-in rise-in-2 mx-auto mb-4 max-w-[760px] font-bold text-deep-blue">
            Committed to building a strong, sustainable digital presence.
          </h1>
          <p className="rise-in rise-in-3 mx-auto max-w-[600px] text-[17px] text-grey">
            We&apos;re a digital services agency that believes every business, regardless of size, deserves a digital identity that actually works for them.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-22">
        <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTag>Who We Are</SectionTag>
            <h2 className="text-h2 mb-4.5 font-bold text-deep-blue">
              A digital services agency dedicated to your growth.
            </h2>
            <p className="mb-4 text-[16px] text-grey">
              DTECH Digital Agency is dedicated to helping businesses establish, manage and grow their online presence. We work with businesses and brands to strengthen their digital identity, improve their online visibility and turn their audiences into potential clients.
            </p>
            <p className="text-[16px] text-grey">
              Our approach goes beyond simply creating digital content. We help businesses build a professional digital presence that communicates credibility, attracts attention and creates opportunities for growth.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-[20px] bg-deep-blue p-11 text-white">
            <h4 className="text-h4 mb-4.5 font-bold text-white">Who We Work With</h4>
            {audiences.map((a, i) => (
              <div key={a} className={`flex justify-between py-3.5 ${i !== 0 ? "border-t border-white/14" : ""}`}>
                <span className="text-sm text-white/70">{a}</span>
                <span className="font-bold text-white">✓</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-light-blue py-22">
        <div className="container-x">
          <SectionHead tag="Our Story" title="Why DTECH exists" />
          <div className="max-w-[760px] space-y-4.5 text-[16px] text-grey">
            <p>
              DTECH Digital Agency was built around a simple observation: too many good businesses are invisible online, not because they lack value, but because they lack the right digital strategy.
            </p>
            <p>
              We set out to close that gap by combining professional website development, strategic social media management and creative visual design into one dependable service, so businesses can focus on what they do best while we handle how they show up online.
            </p>
            <p>
              Today, that same principle guides every project we take on: a digital presence should do more than exist. It should work for the business behind it.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-22">
        <div className="container-x grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal className="rounded-[14px] bg-deep-blue p-9">
            <h3 className="text-h4 mb-3 font-bold text-white">Our Mission</h3>
            <p className="text-[15px] text-white/75">
              To help businesses manage their online presence and turn audiences into potential clients, through professional digital solutions that communicate credibility and attract genuine opportunity.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-[14px] bg-light-blue p-9">
            <h3 className="text-h4 mb-3 font-bold text-deep-blue">Our Vision</h3>
            <p className="text-[15px] text-grey">
              To be the digital partner businesses trust to turn visibility into measurable growth, known for professionalism, creativity and results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-light-blue py-22">
        <div className="container-x">
          <SectionHead center tag="Our Values" title="What Guides Our Work" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 90} className="rounded-[14px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_14px_rgba(10,31,87,0.06)]">
                <h3 className="text-h3 mb-2 font-bold text-deep-blue">{v.title}</h3>
                <p className="text-sm text-grey">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-22">
        <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 rounded-[20px] bg-deep-blue p-11 text-white lg:order-1">
            <h4 className="text-h4 mb-4.5 font-bold text-white">Our Approach to Digital Growth</h4>
            {approachSteps.map((s, i) => (
              <div key={s} className={`py-3.5 ${i !== 0 ? "border-t border-white/14" : ""}`}>
                <span className="text-sm text-white/80">{String(i + 1).padStart(2, "0")}. {s}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionTag>Our Approach</SectionTag>
            <h2 className="text-h2 mb-4.5 font-bold text-deep-blue">
              Strategy before design, growth before vanity metrics.
            </h2>
            <p className="mb-4 text-[16px] text-grey">
              We don&apos;t believe in building digital presence for its own sake. Every website, social media strategy and visual design we create is built to move a business from being seen to being chosen.
            </p>
            <p className="text-[16px] text-grey">
              That means understanding your business first, then building digital assets structured for future growth, so your platform can expand with you without needing to be rebuilt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-22">
        <div className="container-x">
          <Reveal className="rounded-[24px] bg-gradient-to-br from-deep-blue to-blue px-7 py-16 text-center text-white sm:px-16">
            <h2 className="text-h2 mx-auto mb-3.5 max-w-[640px] font-bold text-white">
              Let&apos;s build your digital presence, the right way.
            </h2>
            <p className="mx-auto mb-8 max-w-[520px] text-base text-white/78">
              Tell us about your business and where you want it to go.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/services#contact" variant="light">Get Started</Button>
              <Button href="/services" variant="ghost-light">View Our Services</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

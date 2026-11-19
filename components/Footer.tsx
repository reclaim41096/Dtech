import Image from "next/image";
import { contact, siteConfig, socials, whatsappLink } from "@/lib/site-config";
import { IconInstagram, IconMail, IconTikTok, IconWhatsApp, IconX } from "./icons";

const socialIcons = {
  Instagram: IconInstagram,
  TikTok: IconTikTok,
  X: IconX,
};

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white/75">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-10 border-b border-white/12 pb-11 sm:grid-cols-2">
          <div>
            <Image
              src="/logo-white.png"
              alt="DTECH Digital Agency logo"
              width={176}
              height={132}
              className="mb-4 h-[46px] w-auto"
            />
            <p className="mb-4 max-w-[340px] text-sm">{siteConfig.description}</p>
            <div className="flex gap-2.5">
              {socials.map((s) => {
                const Icon = socialIcons[s.name as keyof typeof socialIcons];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/8 transition-all hover:-translate-y-0.5 hover:bg-blue"
                  >
                    <Icon className="h-[17px] w-[17px] fill-white" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="sm:justify-self-end">
            <h4 className="mb-4 text-[15px] font-semibold text-white">Get In Touch</h4>
            <div className="mb-3.5 flex items-start gap-2.5 text-sm">
              <IconWhatsApp className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60" />
              <a href={whatsappLink("Hi DTECH, I'd like to enquire about a service.")} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                {contact.whatsappDisplay} (WhatsApp)
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-sm">
              <IconMail className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/60" />
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-7 text-[13px]">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

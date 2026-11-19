export const siteConfig = {
  name: "DTECH Digital Agency",
  shortName: "DTECH",
  tagline: "Building Digital Presence. Creating Growth Opportunities.",
  description:
    "DTECH Digital Agency helps businesses establish, manage and grow their online presence through professional website development, social media management and creative visual design.",
  url: "https://dtechdigitalagency.com",
  locale: "en_NG",
};

export const contact = {
  whatsappNumber: "2349051538710",
  whatsappDisplay: "+234 905 153 8710",
  email: "dtechdigitalagency@gmail.com",
  location: "Lagos, Nigeria",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const socials = [
  { name: "Instagram", handle: "@real_dtech", url: "https://instagram.com/real_dtech" },
  { name: "TikTok", handle: "@dtech_group", url: "https://www.tiktok.com/@dtech_group" },
  { name: "X", handle: "@DTechAgency_", url: "https://x.com/DTechAgency_" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/services#contact" },
] as const;

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    short:
      "Professional, modern and responsive websites that help businesses establish credibility, showcase their services and connect with potential customers.",
    features: [
      "Custom design built around your brand, not a generic template",
      "Fully responsive across mobile, tablet and desktop",
      "Fast-loading, SEO-ready structure",
      "Working contact forms, WhatsApp and social integration",
      "Built to scale as your business grows",
    ],
    cta: "Start Your Website Project",
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    short:
      "Strategic content planning, page management and consistent brand communication that builds visibility, connects with audiences and generates business opportunities.",
    features: [
      "Content planning aligned with your brand voice",
      "Consistent page management and posting",
      "Audience engagement and community building",
      "Strategy built to convert followers into leads",
    ],
    cta: "Grow My Social Presence",
  },
  {
    slug: "visual-design",
    title: "Creative Visual Design",
    short:
      "Professional visual designs that communicate brand identity, attract attention and keep businesses consistent and recognisable across digital platforms.",
    features: [
      "Social media graphics and templates",
      "Brand-consistent visual assets",
      "Marketing and promotional design",
      "A recognisable look across every platform",
    ],
    cta: "Request Visual Design",
  },
] as const;

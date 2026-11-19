import { whatsappLink } from "@/lib/site-config";
import { IconWhatsApp } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hi DTECH, I'd like to enquire about a service.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_24px_rgba(37,211,102,0.4)] transition-transform hover:scale-[1.08]"
    >
      <IconWhatsApp className="h-7 w-7 text-white" />
    </a>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md backdrop-saturate-150">
      <div className="container-x flex h-[84px] items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="DTECH Digital Agency logo" width={176} height={132} className="h-[54px] w-auto" priority />
        </Link>

        <nav
          className={`fixed inset-x-0 top-[84px] bottom-0 flex flex-col justify-start gap-6 overflow-y-auto bg-white px-6 py-8 transition-transform duration-[250ms] md:static md:flex md:translate-x-0 md:flex-row md:items-center md:gap-9 md:bg-transparent md:p-0 ${
            open ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.split("#")[0]) && link.href !== "/services#contact";
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative py-1.5 text-lg font-semibold text-charcoal transition-colors hover:text-blue md:text-[15px] ${
                  isActive ? "text-blue after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-blue" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3.5">
          <Link
            href="/services#contact"
            className="hidden rounded-[10px] border-2 border-border px-7 py-3.5 text-[15px] font-semibold text-deep-blue transition-all hover:-translate-y-0.5 hover:border-blue hover:text-blue sm:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-2 md:hidden"
          >
            <span className={`h-[2px] w-6 rounded-full bg-deep-blue transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-6 rounded-full bg-deep-blue transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-6 rounded-full bg-deep-blue transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}

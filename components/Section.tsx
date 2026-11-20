import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block rounded-full bg-light-blue px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-wider text-blue">
      {children}
    </span>
  );
}

export function SectionHead({
  tag,
  title,
  description,
  center = false,
}: {
  tag: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 max-w-[640px] ${center ? "mx-auto text-center" : ""}`}>
      <SectionTag>{tag}</SectionTag>
      <h2 className="text-h2 mb-3.5 font-bold tracking-tight text-deep-blue">{title}</h2>
      {description && <p className="text-[17px] text-grey">{description}</p>}
    </Reveal>
  );
}

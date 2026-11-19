import type { ReactNode } from "react";

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
    <div className={`mb-12 max-w-[640px] ${center ? "mx-auto text-center" : ""}`}>
      <SectionTag>{tag}</SectionTag>
      <h2 className="mb-3.5 text-[28px] font-bold tracking-tight text-deep-blue sm:text-[34px] lg:text-[40px]">{title}</h2>
      {description && <p className="text-[17px] text-grey">{description}</p>}
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "ghost-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue text-white shadow-[0_8px_20px_rgba(30,79,216,0.28)] hover:bg-blue-hover hover:-translate-y-0.5",
  outline:
    "bg-transparent border-2 border-border text-deep-blue hover:border-blue hover:text-blue hover:-translate-y-0.5",
  light: "bg-white text-deep-blue hover:shadow-lg hover:-translate-y-0.5",
  "ghost-light":
    "bg-transparent border-2 border-white/40 text-white hover:border-white hover:-translate-y-0.5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  fullWidth = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  fullWidth?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[10px] px-7 py-3.5 text-[15px] font-semibold transition-all duration-150 ${
    variantClasses[variant]
  } ${fullWidth ? "w-full" : ""} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

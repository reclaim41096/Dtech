"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps content that should fade + rise into view as the user scrolls
 * to it, instead of appearing all at once. Uses IntersectionObserver
 * directly (no animation library needed) and respects prefers-reduced-motion
 * via the plain CSS fallback in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 120px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;

  return (
    <Comp ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>
      {children}
    </Comp>
  );
}

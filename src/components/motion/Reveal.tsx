/**
 * Reveal — scroll-triggered entrance animation wrapper.
 *
 * Emil Kowalski principles applied:
 * - Starts from scale(0.95) + opacity:0, never scale(0)
 * - Strong ease-out cubic-bezier(0.23, 1, 0.32, 1)
 * - Stagger via CSS custom property --reveal-delay
 * - prefers-reduced-motion → immediate visibility via lazy state init
 * - One IntersectionObserver per Reveal instance (once: true)
 * - Children with .reveal-child get staggered CSS transitions
 */
"use client";

import { useRef, useEffect, useState, type CSSProperties, type ReactNode } from "react";

export type RevealAnimation = "up" | "scale" | "fade" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before this element's transition starts (for manual stagger) */
  delay?: number;
  /** Entry animation style — default "up" */
  animation?: RevealAnimation;
  /** Extra class names on the wrapper div */
  className?: string;
  /** IntersectionObserver threshold (0–1) — default 0.08 */
  threshold?: number;
}

/**
 * Wraps any subtree and triggers a CSS reveal when it enters the viewport.
 * Children with the class `reveal-child` and `style={{"--child-index": n}}`
 * get auto-staggered via CSS.
 *
 * prefers-reduced-motion is checked in the lazy state initializer so it never
 * needs to call setState() synchronously inside an effect (avoids ESLint
 * react-hooks/set-state-in-effect).
 */
export function Reveal({
  children,
  delay = 0,
  animation = "up",
  className,
  threshold = 0.08,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Lazy initializer: if reduced motion is active, start already revealed.
  // This avoids calling setState() inside an effect body.
  const [inView, setInView] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    // Already revealed (reduced motion path or prior intersection) — no-op.
    if (inView) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // once: true — never re-animate
        }
      },
      { threshold, rootMargin: "-32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold]); // inView intentionally omitted — we only start the observer once

  return (
    <div
      ref={ref}
      data-reveal={animation}
      data-in-view={String(inView)}
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

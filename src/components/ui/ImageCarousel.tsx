/**
 * ImageCarousel — premium auto-play carousel with pause-on-hover.
 *
 * Features:
 *  - Auto-advances every `intervalMs` ms (default 5000)
 *  - Pauses on mouse enter, resumes on mouse leave
 *  - Prev / Next arrow buttons (keyboard accessible)
 *  - Dot indicators
 *  - Crossfade transition (opacity only — GPU, no layout reflow)
 *  - Respects prefers-reduced-motion (no auto-advance, instant cuts)
 *  - Returns null when images array is empty (use SVG fallback in parent)
 *  - SSR-safe (no window access at module level)
 */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export interface ImageCarouselProps {
  /** Paths to images in /public — e.g. "/images/carousels/stickers/01.jpg" */
  images: string[];
  /** Alt text for the carousel (applied to every image) */
  alt: string;
  /** Milliseconds between auto-advances. Default: 5000 */
  intervalMs?: number;
  /** Extra class names applied to the root wrapper */
  className?: string;
}

export function ImageCarousel({
  images,
  alt,
  intervalMs = 5000,
  className = "",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const timerRef              = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect reduced-motion via lazy initializer — avoids setState inside effect
  const [reduced] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  // Early return AFTER all hooks — safe per Rules of Hooks
  const hasImages = images.length > 0;

  const advance = useCallback(
    (dir: 1 | -1) => {
      setCurrent((c) => (c + dir + images.length) % images.length);
    },
    [images.length]
  );

  // Auto-play timer
  useEffect(() => {
    if (!hasImages || paused || reduced) return;
    timerRef.current = setInterval(() => advance(1), intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hasImages, paused, reduced, intervalMs, advance]);

  if (!hasImages) return null;

  const count = images.length;

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-inherit ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={alt}
    >
      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={src}
          aria-roledescription="slide"
          aria-label={`${alt} — ${i + 1} de ${count}`}
          aria-hidden={i !== current}
          className="absolute inset-0"
          style={{
            opacity:    i === current ? 1 : 0,
            transition: reduced ? "none" : "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1)",
            zIndex:     i === current ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt={`${alt} — imagen ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Prev / Next (only show when more than 1 slide) */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => advance(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
            aria-label="Imagen anterior"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            type="button"
            onClick={() => advance(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
            aria-label="Imagen siguiente"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      {/* Dot indicators */}
      {count > 1 && (
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5"
          role="tablist"
          aria-label="Slides"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Ir a imagen ${i + 1}`}
              onClick={() => setCurrent(i)}
              className="transition-all duration-200 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              style={{
                width:      i === current ? "18px" : "6px",
                height:     "6px",
                background: i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      )}

      {/* Pause indicator */}
      {paused && count > 1 && (
        <div
          className="absolute top-2 right-2 z-10 w-5 h-5 flex items-center justify-center rounded-full"
          style={{ background: "rgba(0,0,0,0.4)" }}
          aria-label="Pausado"
        >
          <svg viewBox="0 0 10 10" fill="currentColor" className="w-2.5 h-2.5 text-white/60" aria-hidden="true">
            <rect x="1.5" y="1" width="3" height="8" rx="1"/>
            <rect x="5.5" y="1" width="3" height="8" rx="1"/>
          </svg>
        </div>
      )}
    </div>
  );
}

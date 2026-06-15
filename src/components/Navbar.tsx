"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Inicio",             href: "#inicio"         },
  { label: "Quiénes somos",      href: "#quienes-somos"  },
  { label: "Stickers",           href: "#stickers"       },
  { label: "Experiencias",       href: "#experiencias"   },
  { label: "T-Shirt Lab",        href: "#tshirtlab"      },
  { label: "Empresas",           href: "#empresas"       },
  { label: "Tienda",             href: "#tienda"         },
  { label: "Contacto",           href: "#contacto"       },
] as const;

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  // Initialize from current hash (lazy initializer avoids effect-based setState)
  const [activeHash, setActiveHash] = useState<string>(
    () => (typeof window !== "undefined" ? window.location.hash : "")
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync active hash on navigation
  useEffect(() => {
    const onHashChange = () => {
      setActiveHash(window.location.hash);
      setMenuOpen(false);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Floating Navbar ──────────────────────────────────────── */}
      {/* Fixed to viewport edges with padding, nav inner div is the visual pill */}
      <header className="fixed top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-50">
        <nav
          role="navigation"
          aria-label="Navegación principal"
          className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-5 h-14 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass-raised shadow-xl shadow-black/40"
              : "glass shadow-lg shadow-black/20"
          }`}
        >
          {/* ── Logo / brand ─────────────────────────────────────── */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 min-h-[44px] focus:outline-none"
            aria-label="MatrixLab Intelligence — Ir al inicio"
          >
            <Image
              src="/images/matrixlab-stickers-logo.png"
              alt="MatrixLab Intelligence"
              width={36}
              height={36}
              className="rounded-xl flex-shrink-0 object-contain"
              priority
            />
            <span className="font-heading font-bold text-[15px] text-[#F5F3FF] tracking-tight leading-none">
              <span className="hidden sm:inline">MatrixLab Intelligence</span>
              <span className="sm:hidden">MatrixLab<span className="text-brand-purple">.</span></span>
            </span>
          </a>

          {/* ── Desktop nav links ─────────────────────────────────── */}
          <ul className="hidden xl:flex items-center gap-0" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-active={activeHash === link.href ? "true" : "false"}
                  className={`nav-underline relative px-2.5 py-2 text-[13px] font-medium rounded-lg min-h-[44px] inline-flex items-center transition-colors duration-150 ${
                    activeHash === link.href
                      ? "text-brand-purple"
                      : "text-[#8B879E] hover:text-[#F5F3FF] hover:bg-white/5"
                  }`}
                  style={activeHash === link.href ? {
                    textShadow: "0 0 14px rgba(167,139,250,0.55)"
                  } : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ───────────────────────────────────────── */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold min-h-[44px]"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="xl:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[#F5F3FF] hover:bg-white/5 transition-colors duration-150"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile menu overlay ──────────────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Mobile menu panel ────────────────────────────────────── */}
      {/* Offset: top-3 (12px) + h-14 (56px) + gap-2 (8px) = ~76px → use top-[80px] */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menú de navegación"
        aria-modal="true"
        className={`fixed top-[76px] left-3 right-3 sm:left-4 sm:right-4 sm:top-[80px] z-50 xl:hidden transition-all duration-200 ease-out ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="glass-raised rounded-2xl border border-white/10 shadow-2xl shadow-black/50 p-3">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-4 py-3.5 rounded-xl text-base font-medium min-h-[52px] transition-colors duration-150 ${
                    activeHash === link.href
                      ? "text-brand-purple bg-brand-purple/10"
                      : "text-[#F5F3FF] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/8 mt-3 pt-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-base font-semibold min-h-[52px]"
              onClick={() => setMenuOpen(false)}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

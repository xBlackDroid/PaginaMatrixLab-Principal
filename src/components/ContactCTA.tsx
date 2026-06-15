"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";

const CHANNELS = [
  {
    label: "Instagram",
    href:  SOCIAL_LINKS.instagram,
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href:  SOCIAL_LINKS.facebook,
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href:  SOCIAL_LINKS.tiktok,
    color: "#69C9D0",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    label: "Sitio web",
    href:  SOCIAL_LINKS.website,
    color: "#A78BFA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
] as const;

export function ContactCTA() {
  return (
    <section
      id="contacto"
      className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #09080F 0%, #0E0B1E 60%, #09080F 100%)" }}
      aria-labelledby="contact-heading"
    >
      {/* Richer ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-3xl opacity-14"
             style={{ background: "radial-gradient(ellipse, #6D28D9 0%, transparent 65%)" }}/>
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-10"
             style={{ background: "radial-gradient(#22D3EE, transparent)" }}/>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-8"
             style={{ background: "radial-gradient(#BE123C, transparent)" }}/>
      </div>

      {/* CREAR watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <span
          className="font-heading font-extrabold text-white leading-none"
          style={{ fontSize: "clamp(7rem, 24vw, 22rem)", opacity: 0.016, letterSpacing: "-0.04em" }}
        >
          CREAR
        </span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section label */}
        <Reveal animation="fade" className="flex items-center gap-3 mb-14">
          <div className="section-divider flex-1" aria-hidden="true"/>
          <span className="tech-tag" style={{ background: "rgba(167,139,250,0.12)", color: "#A78BFA", border: "1px solid rgba(167,139,250,0.25)" }}>
            Contacto
          </span>
          <div className="section-divider flex-1" aria-hidden="true"/>
        </Reveal>

        {/* Main card */}
        <Reveal animation="scale">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(109,40,217,0.18) 0%, rgba(8,145,178,0.09) 50%, rgba(190,18,60,0.12) 100%)",
              border:     "1px solid rgba(167,139,250,0.28)",
              boxShadow:  "0 0 100px rgba(109,40,217,0.12), 0 40px 100px rgba(0,0,0,0.4)",
            }}
          >
            {/* Top edge highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.7) 30%, rgba(34,211,238,0.7) 70%, transparent 100%)" }}
              aria-hidden="true"
            />

            {/* Animated corner glows */}
            <div className="absolute -top-24 -left-24 w-60 h-60 rounded-full blur-3xl pointer-events-none animate-glow-breathe"
                 style={{ background: "rgba(167,139,250,0.18)" }} aria-hidden="true"/>
            <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none animate-glow-breathe"
                 style={{ background: "rgba(34,211,238,0.12)", animationDelay: "2s" }} aria-hidden="true"/>

            <div className="relative z-10 px-8 py-14 sm:px-14 md:px-20 md:py-20 text-center flex flex-col items-center gap-8">

              {/* Pre-heading */}
              <p className="tech-tag" style={{ background: "rgba(167,139,250,0.12)", color: "#A78BFA", border: "1px solid rgba(167,139,250,0.25)" }}>
                MatrixLab Intelligence
              </p>

              {/* BIG heading */}
              <h2
                id="contact-heading"
                className="font-heading font-extrabold leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 8vw, 5.5rem)", color: "#F5F3FF" }}
              >
                ¿Qué vamos{" "}
                <span
                  className="gradient-text-purple-aqua neon-text-purple"
                  style={{ display: "inline-block" }}
                >
                  a crear?
                </span>
              </h2>

              <p className="text-[#8B879E] text-base sm:text-lg max-w-md leading-relaxed">
                Cuéntanos tu idea y te ayudamos a convertirla en producto. Sin formularios. Sin esperas.
              </p>

              {/* Primary WhatsApp CTA — largest on the page */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-whatsapp-pulse pressable inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-extrabold text-lg min-h-[64px]"
                style={{ boxShadow: "0 0 50px rgba(37,211,102,0.35), 0 4px 30px rgba(37,211,102,0.2)" }}
                aria-label="Enviar mensaje por WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar WhatsApp
              </a>

              {/* Divider */}
              <div className="flex items-center gap-4 w-full max-w-xs">
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }}/>
                <span className="text-xs text-[#5C5870]">o encuéntranos en</span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }}/>
              </div>

              {/* Social channel buttons with brand colors */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {CHANNELS.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card pressable inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold min-h-[44px] cursor-pointer transition-all duration-200"
                    style={{
                      background:  "rgba(255,255,255,0.04)",
                      border:      `1px solid rgba(255,255,255,0.09)`,
                      color:       "#B8B4C8",
                    }}
                    aria-label={`Visitar ${ch.label}`}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = ch.color;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = `${ch.color}40`;
                      (e.currentTarget as HTMLAnchorElement).style.background = `${ch.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#B8B4C8";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.09)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    {ch.icon}
                    {ch.label}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

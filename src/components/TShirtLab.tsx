import { whatsappLink } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { CAROUSELS } from "@/lib/carousels";
import type { CSSProperties } from "react";

const BULLETS = [
  "Playeras y hoodies personalizados",
  "Tote bags y accesorios textiles",
  "Gorras y prendas para eventos",
  "Diseño frontal, espalda y manga",
  "Personalización para eventos en vivo",
  "Activaciones corporativas y de marca",
  "Producción individual o por volumen",
] as const;

const STATS = [
  { value: "1+",      label: "desde una pieza"   },
  { value: "Calidad", label: "acabado premium"    },
  { value: "En vivo", label: "en tu evento"       },
  { value: "Rápido",  label: "entrega ágil"       },
] as const;

// Playera SVG illustration
function TShirtIllustration() {
  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB7185" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#9F1239" stopOpacity="0.9"/>
        </linearGradient>
        <linearGradient id="printGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      {/* Shirt body */}
      <path
        d="M88 34 L28 76 L66 96 L66 186 L254 186 L254 96 L292 76 L232 34 C232 34 210 68 160 68 C110 68 88 34 88 34Z"
        fill="url(#shirtGrad)"
      />
      {/* Collar */}
      <path d="M120 34 Q160 72 200 34" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="3"/>
      {/* Print area — ML logo placeholder */}
      <rect x="120" y="96" width="80" height="64" rx="8" fill="rgba(0,0,0,0.2)"/>
      {/* Gradient ML text */}
      <text x="160" y="132" textAnchor="middle" fontSize="22" fontWeight="900" fill="url(#printGrad)" opacity="0.95">ML</text>
      {/* Small print tag under text */}
      <text x="160" y="150" textAnchor="middle" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.55)" letterSpacing="3">MATRIXLAB</text>
      {/* Side seam lines */}
      <line x1="66" y1="96" x2="66" y2="186" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5"/>
      <line x1="254" y1="96" x2="254" y2="186" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5"/>
      {/* Sleeve detail lines */}
      <path d="M28 76 L66 96" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      <path d="M292 76 L254 96" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
    </svg>
  );
}

export function TShirtLab() {
  return (
    <section
      id="tshirtlab"
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #07060D 0%, #100510 55%, #07060D 100%)" }}
      aria-labelledby="tshirtlab-heading"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-12"
             style={{ background: "radial-gradient(#BE123C, transparent)" }}/>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-8"
             style={{ background: "radial-gradient(#A78BFA, transparent)" }}/>
      </div>

      {/* TEXTIL watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <span
          className="font-heading font-extrabold text-white leading-none"
          style={{ fontSize: "clamp(5rem, 18vw, 16rem)", opacity: 0.018, letterSpacing: "-0.04em" }}
        >
          TEXTIL
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="section-divider flex-1" aria-hidden="true"/>
          <span className="tech-tag" style={{ background: "rgba(251,113,133,0.12)", color: "#FB7185", border: "1px solid rgba(251,113,133,0.28)" }}>
            T-Shirt Lab
          </span>
          <div className="section-divider flex-1" aria-hidden="true"/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ─────────────────────────────────────────── */}
          <div>
            <p className="tech-tag inline-block mb-5" style={{ background: "rgba(251,113,133,0.1)", color: "#FB7185", border: "1px solid rgba(251,113,133,0.25)" }}>
              Servicio estrella
            </p>

            <h2
              id="tshirtlab-heading"
              className="font-heading font-extrabold leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", color: "#F5F3FF" }}
            >
              T-Shirt Lab
            </h2>

            <p className="text-[#FDA4AF]/80 text-lg sm:text-xl font-semibold mb-4 leading-snug" style={{ fontFamily: "var(--font-syne)" }}>
              Personalización premium de prendas y accesorios textiles.
            </p>

            <p className="text-[#8B879E] text-base leading-relaxed mb-8 max-w-lg">
              Nuestro T-Shirt Lab convierte prendas y accesorios textiles en experiencias personalizadas para eventos, empresas, fiestas, equipos, escuelas, marcas y lanzamientos. Creamos desde una pieza única hasta producciones de alto volumen, con acabados premium y una experiencia visual lista para destacar.
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2.5 mb-8" role="list">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 animate-glow-breathe"
                    style={{ background: "#FB7185" }}
                    aria-hidden="true"
                  />
                  <span className="text-[#C8C4D6] text-sm leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            {/* Brand phrase */}
            <p
              className="font-heading font-bold mb-8"
              style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "rgba(253,164,175,0.85)" }}
            >
              Tu idea. Tu diseño. Tu prenda.{" "}
              <span className="gradient-text-coral-gold">Desde una pieza hasta miles.</span>
            </p>

            <a
              href={whatsappLink("Hola, me interesa cotizar el servicio de T-Shirt Lab.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base min-h-[52px]"
              aria-label="Cotizar T-Shirt Lab por WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar T-Shirt Lab
            </a>
          </div>

          {/* ── Right: visual + stats ───────────────────────────── */}
          <div className="flex flex-col gap-5">

            {/* T-shirt visual (carousel if images, else SVG illustration) */}
            <div
              className="relative rounded-3xl overflow-hidden animate-float-gentle"
              style={{
                background: "linear-gradient(145deg, rgba(190,18,60,0.22) 0%, rgba(251,113,133,0.08) 100%)",
                border:     "1px solid rgba(251,113,133,0.25)",
                boxShadow:  "0 0 80px rgba(190,18,60,0.12)",
              }}
            >
              {/* Holographic sheen */}
              <div className="ticket-holo absolute inset-0 rounded-3xl" aria-hidden="true"/>

              {/* Top edge accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(251,113,133,0.7), transparent)" }}
                aria-hidden="true"
              />

              {CAROUSELS.tshirtlab.length > 0 ? (
                <div className="h-56 sm:h-72">
                  <ImageCarousel
                    images={CAROUSELS.tshirtlab}
                    alt="T-Shirt Lab MatrixLab"
                    className="rounded-3xl"
                  />
                </div>
              ) : (
                <div className="p-8 h-56 sm:h-72 relative z-10">
                  <TShirtIllustration />
                </div>
              )}
            </div>

            {/* Stats mini-grid */}
            <Reveal animation="up">
              <div className="grid grid-cols-2 gap-3">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className="reveal-child card-shimmer relative rounded-2xl p-4 sm:p-5 text-center overflow-hidden"
                    style={{
                      background:      "rgba(251,113,133,0.07)",
                      border:          "1px solid rgba(251,113,133,0.15)",
                      "--child-index": i,
                    } as CSSProperties}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(251,113,133,0.55), transparent)" }}
                      aria-hidden="true"
                    />
                    <p className="font-heading font-extrabold text-xl text-[#F5F3FF]">{s.value}</p>
                    <p className="text-xs text-[#8B879E] mt-1 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

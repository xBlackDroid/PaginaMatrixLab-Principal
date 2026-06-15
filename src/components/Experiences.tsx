import { EXPERIENCES, whatsappLink } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { CAROUSELS } from "@/lib/carousels";
import type { CSSProperties } from "react";
import type { AccentColor } from "@/lib/constants";

const ACCENT: Record<AccentColor, { color: string; from: string; border: string; glowClass: string }> = {
  purple: { color: "#C4B5FD", from: "rgba(109,40,217,0.32)",  border: "rgba(196,181,253,0.22)", glowClass: "glow-hover-purple" },
  aqua:   { color: "#67E8F9", from: "rgba(8,145,178,0.32)",   border: "rgba(103,232,249,0.22)", glowClass: "glow-hover-aqua"   },
  coral:  { color: "#FDA4AF", from: "rgba(190,18,60,0.32)",   border: "rgba(253,164,175,0.22)", glowClass: "glow-hover-coral"  },
  gold:   { color: "#FDE68A", from: "rgba(180,83,9,0.32)",    border: "rgba(253,230,138,0.22)", glowClass: "glow-hover-gold"   },
};

function GlowingCup() {
  return (
    <svg viewBox="0 0 220 180" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="cupGlow2" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#67E8F9" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="cupBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#0891B2" stopOpacity="0.25"/>
        </linearGradient>
      </defs>
      {/* Glow halo */}
      <ellipse cx="110" cy="145" rx="65" ry="15" fill="url(#cupGlow2)"/>
      {/* Cup body */}
      <rect x="55" y="32" width="100" height="115" rx="14" fill="url(#cupBody)" stroke="#67E8F9" strokeWidth="1.5"/>
      {/* Cup lid / top band */}
      <rect x="55" y="32" width="100" height="38" rx="14" fill="rgba(34,211,238,0.4)" stroke="#22D3EE" strokeWidth="1"/>
      {/* Base shadow */}
      <ellipse cx="110" cy="140" rx="50" ry="9" fill="rgba(8,145,178,0.4)"/>
      {/* Sparkle rays */}
      {[30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
        <line key={i}
          x1={110 + Math.cos(deg * Math.PI/180) * 68}
          y1={90  + Math.sin(deg * Math.PI/180) * 68}
          x2={110 + Math.cos(deg * Math.PI/180) * 95}
          y2={90  + Math.sin(deg * Math.PI/180) * 95}
          stroke="#67E8F9" strokeWidth="1.5" opacity={0.2 + (i % 3) * 0.1}/>
      ))}
      {/* Inner glow ring */}
      <circle cx="110" cy="90" r="26" fill="rgba(255,255,255,0.07)" stroke="#67E8F9" strokeWidth="0.8"/>
      <text x="110" y="96" textAnchor="middle" fontSize="15" fill="#67E8F9" fontWeight="900" opacity="0.9">GLOW</text>
    </svg>
  );
}

export function Experiences() {
  return (
    <section
      id="experiencias"
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #07060D 0%, #0A0F1A 55%, #07060D 100%)" }}
      aria-labelledby="experiences-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-12"
             style={{ background: "radial-gradient(#22D3EE, transparent)" }}/>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-9"
             style={{ background: "radial-gradient(#A78BFA, transparent)" }}/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="section-divider flex-1" aria-hidden="true"/>
          <span className="tech-tag" style={{ background: "rgba(34,211,238,0.1)", color: "#22D3EE", border: "1px solid rgba(34,211,238,0.25)" }}>
            Experiencias
          </span>
          <div className="section-divider flex-1" aria-hidden="true"/>
        </div>

        {/* Header — left text + right glowing cup */}
        <Reveal animation="up" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2
              id="experiences-heading"
              className="font-heading font-extrabold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "#F5F3FF" }}
            >
              Experiencias{" "}
              <span style={{
                background: "linear-gradient(135deg, #22D3EE, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                creativas
              </span>
            </h2>
            <p className="text-[#F5F3FF]/75 text-lg font-semibold mb-3 italic" style={{ fontFamily: "var(--font-syne)" }}>
              No es una escuela. Es un laboratorio.
            </p>
            <p className="text-[#8B879E] text-base leading-relaxed mb-8 max-w-lg">
              Talleres, cursos y actividades para aprender creando. Te ensucías las manos, experimentas y te vas con algo hecho por ti mismo.
            </p>

            {/* Featured tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Vasos Glow", "Manualidades", "Personalización", "Familias", "Emprendedores", "Eventos"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(34,211,238,0.1)", color: "#67E8F9", border: "1px solid rgba(34,211,238,0.2)" }}>
                  {t}
                </span>
              ))}
            </div>

            <a
              href={whatsappLink("Hola, me interesa conocer los talleres y próximas experiencias creativas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base min-h-[52px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ver próximas experiencias
            </a>
          </div>

          {/* Glowing cup hero visual (carousel if images, else SVG) */}
          <div
            className="relative rounded-3xl overflow-hidden animate-float-slow"
            style={{
              background: "linear-gradient(145deg, rgba(8,145,178,0.22) 0%, rgba(13,148,136,0.12) 100%)",
              border:     "1px solid rgba(34,211,238,0.22)",
              boxShadow:  "0 0 80px rgba(34,211,238,0.1)",
            }}
          >
            {/* Holographic sheen overlay */}
            <div className="ticket-holo absolute inset-0 rounded-3xl" aria-hidden="true"/>
            {CAROUSELS.experiencias.length > 0 ? (
              <div className="h-52 sm:h-64">
                <ImageCarousel
                  images={CAROUSELS.experiencias}
                  alt="Experiencias creativas MatrixLab"
                  className="rounded-3xl"
                />
              </div>
            ) : (
              <div className="p-7">
                <div className="h-52 sm:h-64 relative z-10">
                  <GlowingCup />
                </div>
                <p className="text-center text-xs font-bold mt-2 relative z-10" style={{ color: "#22D3EE", opacity: 0.75, letterSpacing: "0.12em" }}>
                  TALLER DESTACADO — VASOS GLOW
                </p>
              </div>
            )}
          </div>
        </Reveal>

        {/* Workshop ticket cards */}
        <Reveal animation="up" delay={55}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXPERIENCES.map((exp, i) => {
              const a = ACCENT[exp.accent];
              return (
                <a
                  key={exp.id}
                  href={whatsappLink(`Hola, me interesa el taller "${exp.name}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`reveal-child card-shimmer product-card ${a.glowClass} relative rounded-2xl overflow-hidden cursor-pointer group focus:outline-none`}
                  style={{
                    background:      a.from,
                    border:          `1px solid ${a.border}`,
                    "--child-index": i,
                  } as CSSProperties}
                  aria-label={`Preguntar por ${exp.name} en WhatsApp`}
                >
                  {/* Holographic top bar */}
                  <div
                    className="ticket-holo relative px-5 pt-5 pb-4 overflow-hidden"
                    style={{ background: `linear-gradient(160deg, ${a.color}18 0%, transparent 60%)` }}
                  >
                    {/* Top edge accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, transparent, ${a.color}80, transparent)` }}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <span className="tech-tag" style={{ background: `${a.color}20`, color: a.color, border: `1px solid ${a.color}35` }}>
                          {exp.tag}
                        </span>
                        <svg viewBox="0 0 24 24" fill="currentColor"
                             className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                             style={{ color: a.color }} aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <h3 className="font-heading font-bold text-[#F5F3FF] text-lg leading-snug group-hover:text-white transition-colors">
                        {exp.name}
                      </h3>
                      <p className="text-sm mt-1.5 leading-relaxed" style={{ color: a.color, opacity: 0.7 }}>
                        {exp.desc}
                      </p>
                    </div>
                  </div>

                  {/* Perforated divider */}
                  <div className="ticket-divider mx-4" aria-hidden="true"/>

                  {/* Ticket stub bottom */}
                  <div className="px-5 py-3.5 flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: a.color, opacity: 0.55 }}>
                      Preguntar disponibilidad
                    </span>
                    <svg viewBox="0 0 16 16" fill="none"
                         className="w-4 h-4 hover-arrow-right"
                         style={{ color: a.color }} aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

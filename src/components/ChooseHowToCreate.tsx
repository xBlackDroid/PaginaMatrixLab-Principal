import { whatsappLink } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";
import type { CSSProperties } from "react";

// ── Rich background visuals for each portal card ─────────────────────────

function VisualParaMi() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 340 260" className="absolute inset-0 w-full h-full opacity-30">
        {/* Large star burst */}
        <polygon points="60,15 68,44 98,44 74,62 83,91 60,73 37,91 46,62 22,44 52,44" fill="#C4B5FD"/>
        <circle cx="240" cy="48" r="42" fill="#A78BFA" opacity="0.8"/>
        <rect x="170" y="120" width="110" height="80" rx="18" fill="#FDA4AF" opacity="0.9"/>
        <polygon points="30,160 46,200 86,200 54,224 66,265 30,240 -6,265 6,224 -26,200 14,200" fill="#67E8F9" opacity="0.7"/>
        <circle cx="155" cy="195" r="35" fill="#A78BFA" opacity="0.6"/>
        <rect x="230" y="30" width="80" height="60" rx="12" fill="#FCA5A5" opacity="0.7"/>
        {/* Small decorative dots */}
        <circle cx="100" cy="90" r="6" fill="#FDE68A" opacity="0.7"/>
        <circle cx="300" cy="180" r="8" fill="#22D3EE" opacity="0.5"/>
        <circle cx="50" cy="230" r="5" fill="#FB7185" opacity="0.6"/>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-700/35 via-purple-800/20 to-transparent"/>
    </div>
  );
}

function VisualParaAprender() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 340 260" className="absolute inset-0 w-full h-full opacity-28">
        {/* Glowing cup front-center */}
        <rect x="110" y="60" width="120" height="145" rx="14" fill="#22D3EE" opacity="0.35"/>
        <rect x="110" y="60" width="120" height="45" rx="14" fill="#22D3EE" opacity="0.6"/>
        <ellipse cx="170" cy="205" rx="60" ry="12" fill="#0891B2" opacity="0.5"/>
        {/* Sparkle rays */}
        {[0,40,80,120,160,200,240,280,320].map((deg, i) => (
          <line key={i}
            x1={170 + Math.cos(deg * Math.PI/180) * 68}
            y1={133 + Math.sin(deg * Math.PI/180) * 68}
            x2={170 + Math.cos(deg * Math.PI/180) * 100}
            y2={133 + Math.sin(deg * Math.PI/180) * 100}
            stroke="#67E8F9" strokeWidth="2" opacity="0.45"/>
        ))}
        <circle cx="170" cy="133" r="28" fill="white" opacity="0.1"/>
        <text x="170" y="140" textAnchor="middle" fontSize="18" fill="#67E8F9" fontWeight="900" opacity="0.8">GLOW</text>
        {/* Corner accents */}
        <circle cx="48" cy="52" r="22" fill="#A78BFA" opacity="0.4"/>
        <circle cx="295" cy="48" r="16" fill="#FB7185" opacity="0.3"/>
        <polygon points="280,180 292,210 320,210 298,227 306,257 280,240 254,257 262,227 240,210 268,210" fill="#FDE68A" opacity="0.4"/>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/35 via-teal-800/20 to-transparent"/>
    </div>
  );
}

function VisualParaEmpresa() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 340 260" className="absolute inset-0 w-full h-full opacity-28">
        {/* Production scale bars — hero visual */}
        {[
          { w: 40,  y: 50,  label: "1",      fill: "#FB7185" },
          { w: 110, y: 100, label: "100",     fill: "#FDA4AF" },
          { w: 200, y: 150, label: "1,000",   fill: "#FB7185" },
          { w: 290, y: 200, label: "10,000+", fill: "#FDA4AF" },
        ].map((b, i) => (
          <g key={i}>
            <rect x="25" y={b.y} width={b.w} height="34" rx="6" fill={b.fill} opacity={0.55 + i * 0.1}/>
            <text x={35 + b.w} y={b.y + 22} fontSize="16" fill="white" opacity="0.7" fontWeight="700">{b.label}</text>
          </g>
        ))}
        {/* Grid of product boxes top-right */}
        {Array.from({length: 16}).map((_, i) => (
          <rect key={i} x={215 + (i%4) * 28} y={30 + Math.floor(i/4) * 28} width="22" height="22" rx="4"
                fill="#FDA4AF" opacity={0.2 + (i/16) * 0.45}/>
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-rose-800/35 via-orange-900/15 to-transparent"/>
    </div>
  );
}

function VisualParaComprar() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 340 260" className="absolute inset-0 w-full h-full opacity-28">
        {/* Product shelf grid — premium feel */}
        {[
          { x: 20,  y: 30, w: 140, h: 95,  c: "#FDE68A" },
          { x: 175, y: 30, w: 145, h: 95,  c: "#A78BFA" },
          { x: 20,  y: 140, w: 95, h: 100, c: "#FDA4AF" },
          { x: 130, y: 140, w: 95, h: 100, c: "#67E8F9" },
          { x: 240, y: 140, w: 80, h: 100, c: "#FDE68A" },
        ].map((r, i) => (
          <rect key={i} x={r.x} y={r.y} width={r.w} height={r.h} rx="10" fill={r.c} opacity="0.6"/>
        ))}
        {/* Price tags */}
        <circle cx="50" cy="55" r="18" fill="rgba(255,255,255,0.12)"/>
        <circle cx="230" cy="55" r="14" fill="rgba(255,255,255,0.1)"/>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-700/35 via-yellow-800/15 to-transparent"/>
    </div>
  );
}

// ── Portal card data ──────────────────────────────────────────────────────

const PORTALS = [
  {
    id:       "para-mi",
    audience: "Para mí",
    unit:     "MatrixLab Stickers",
    desc:     "Productos personalizados para regalos, eventos, emprendimientos y momentos especiales. Desde una sola pieza.",
    cta:      "Crear algo personalizado",
    href:     "#stickers",
    waMsg:    "Hola, me interesa crear un producto personalizado con MatrixLab Stickers.",
    from:     "#2E0764",
    mid:      "#5B21B6",
    accent:   "#C4B5FD",
    glowClass: "glow-hover-purple",
    Visual:   VisualParaMi,
  },
  {
    id:       "para-aprender",
    audience: "Para aprender",
    unit:     "Experiencias creativas",
    desc:     "Cursos, talleres y experiencias para aprender a personalizar productos, crear vasos glow y desarrollar proyectos creativos.",
    cta:      "Ver experiencias",
    href:     "#experiencias",
    waMsg:    "Hola, me interesa conocer los talleres y experiencias creativas.",
    from:     "#0C3D50",
    mid:      "#0E7490",
    accent:   "#67E8F9",
    glowClass: "glow-hover-aqua",
    Visual:   VisualParaAprender,
  },
  {
    id:       "para-empresa",
    audience: "Para mi empresa",
    unit:     "Soluciones corporativas",
    desc:     "Merchandising, T-Shirt Lab, kits de evento, regalos corporativos y producción personalizada desde pocas piezas hasta miles.",
    cta:      "Cotizar proyecto",
    href:     "#empresas",
    waMsg:    "Hola, me interesa una cotización para soluciones empresariales con MatrixLab Intelligence.",
    from:     "#4C0519",
    mid:      "#9F1239",
    accent:   "#FDA4AF",
    glowClass: "glow-hover-coral",
    Visual:   VisualParaEmpresa,
  },
  {
    id:       "para-comprar",
    audience: "Para comprar",
    unit:     "Tienda online",
    desc:     "Catálogo visual de imanes, stickers, playeras, gorras, grabado láser e impresiones 3D. Pide por WhatsApp.",
    cta:      "Ver catálogo",
    href:     "#tienda",
    waMsg:    "Hola, me gustaría explorar el catálogo de productos.",
    from:     "#451A03",
    mid:      "#92400E",
    accent:   "#FDE68A",
    glowClass: "glow-hover-gold",
    Visual:   VisualParaComprar,
  },
] as const;

// ── Component ─────────────────────────────────────────────────────────────

export function ChooseHowToCreate() {
  return (
    <section
      id="ecosistema"
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #09080F 0%, #0E0C1C 100%)" }}
      aria-labelledby="choose-heading"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] rounded-full blur-3xl opacity-6"
             style={{ background: "radial-gradient(ellipse, #6D28D9 0%, transparent 70%)" }}/>
      </div>

      {/* Section header */}
      <Reveal animation="up" className="max-w-7xl mx-auto mb-12 md:mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="section-divider flex-1" aria-hidden="true"/>
          <span className="tech-tag" style={{ background: "rgba(167,139,250,0.12)", color: "#A78BFA", border: "1px solid rgba(167,139,250,0.25)" }}>
            Ecosistema
          </span>
          <div className="section-divider flex-1" aria-hidden="true"/>
        </div>
        <h2
          id="choose-heading"
          className="font-heading font-extrabold text-center leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "#F5F3FF" }}
        >
          Elige cómo quieres{" "}
          <span className="gradient-text-purple-aqua">crear</span>
        </h2>
        <p className="text-center text-[#8B879E] text-base sm:text-lg max-w-xl mx-auto mt-3 leading-relaxed">
          Cada necesidad tiene su propio camino. Encuentra el tuyo.
        </p>
      </Reveal>

      {/* Portal cards — staggered reveal */}
      <Reveal animation="up" delay={60} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {PORTALS.map((portal, i) => (
            <div
              key={portal.id}
              className={`reveal-child card-shimmer portal-card ${portal.glowClass} relative rounded-3xl overflow-hidden cursor-pointer group`}
              style={{
                background:      `linear-gradient(145deg, ${portal.from} 0%, ${portal.mid} 70%, ${portal.from}bb 100%)`,
                border:          `1px solid ${portal.accent}20`,
                minHeight:       "380px",
                "--child-index": i,
              } as CSSProperties}
            >
              {/* Rich background visual */}
              <portal.Visual />

              {/* Top edge highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent 0%, ${portal.accent}60 50%, transparent 100%)` }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10 p-7 sm:p-9 flex flex-col h-full" style={{ minHeight: "380px" }}>

                {/* Unit badge */}
                <span
                  className="tech-tag self-start mb-5"
                  style={{ background: `${portal.accent}1A`, color: portal.accent, border: `1px solid ${portal.accent}45` }}
                >
                  {portal.unit}
                </span>

                {/* Large audience label — THE visual element */}
                <h3
                  className="font-heading font-extrabold leading-none mb-4"
                  style={{
                    fontSize:   "clamp(2.6rem, 5.5vw, 4rem)",
                    color:      portal.accent,
                    textShadow: `0 0 50px ${portal.accent}50, 0 0 100px ${portal.accent}20`,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {portal.audience}
                </h3>

                <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-7 max-w-sm">
                  {portal.desc}
                </p>

                {/* CTAs */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <a
                    href={portal.href}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm min-h-[48px] transition-all duration-200 cursor-pointer"
                    style={{
                      background:  `${portal.accent}1E`,
                      border:      `1px solid ${portal.accent}55`,
                      color:       portal.accent,
                    }}
                    aria-label={portal.cta}
                  >
                    {portal.cta}
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 hover-arrow-right" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a
                    href={whatsappLink(portal.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl font-semibold text-sm min-h-[48px] cursor-pointer"
                    aria-label={`${portal.cta} por WhatsApp`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

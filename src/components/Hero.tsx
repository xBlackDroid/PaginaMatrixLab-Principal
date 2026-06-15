import { whatsappLink } from "@/lib/constants";
import type { CSSProperties } from "react";

// ── Product illustrations (unchanged SVGs) ─────────────────────────────────

function IllustrationStickers() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-full" aria-hidden="true">
      <polygon points="15,5 19,16 30,16 21.5,23 24.5,34 15,27 5.5,34 8.5,23 0,16 11,16" fill="#C4B5FD" opacity="0.95"/>
      <circle cx="58" cy="14" r="13" fill="#67E8F9" opacity="0.9"/>
      <rect x="80" y="4" width="42" height="28" rx="8" fill="#FDA4AF" opacity="0.9"/>
      <path d="M26 54 C26 48 33 45 38 50 C43 45 50 48 50 54 C50 65 38 73 38 73 C38 73 26 65 26 54Z" fill="#FDE68A" opacity="0.95"/>
      <polygon points="70,42 81,47 81,60 70,65 59,60 59,47" fill="#A78BFA" opacity="0.85"/>
      <polygon points="105,38 107.5,45 115,45 109,50 111.5,57 105,53 98.5,57 101,50 95,45 102.5,45" fill="#22D3EE" opacity="0.8"/>
      <circle cx="128" cy="68" r="9" fill="#FB7185" opacity="0.75"/>
      <circle cx="18" cy="76" r="7" fill="#22D3EE" opacity="0.7"/>
      <rect x="90" y="55" width="26" height="22" rx="5" fill="#FCD34D" opacity="0.75"/>
    </svg>
  );
}
function IllustrationImanes() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-full" aria-hidden="true">
      <path d="M35 18 C35 18 15 18 15 42 C15 66 35 66 47 66 L47 52 C38 52 29 52 29 42 C29 32 38 32 47 32 L47 18 Z" fill="#67E8F9" opacity="0.9"/>
      <path d="M105 18 C105 18 125 18 125 42 C125 66 105 66 93 66 L93 52 C102 52 111 52 111 42 C111 32 102 32 93 32 L93 18 Z" fill="#FDA4AF" opacity="0.9"/>
      {[0,10,20].map((offset, i) => (
        <path key={i} d={`M47 ${32+offset} Q70 ${26+offset} 93 ${32+offset}`} stroke="#A78BFA" strokeWidth="1.2" fill="none" opacity={0.25 + i * 0.12} strokeDasharray="4,3"/>
      ))}
      <text x="37" y="47" fontSize="12" fill="white" fontWeight="800" opacity="0.9">N</text>
      <text x="107" y="47" fontSize="12" fill="white" fontWeight="800" opacity="0.9">S</text>
    </svg>
  );
}
function IllustrationPlayeras() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-full" aria-hidden="true">
      <path d="M38 14 L12 34 L28 42 L28 74 L112 74 L112 42 L128 34 L102 14 C102 14 89 28 70 28 C51 28 38 14 38 14Z" fill="#FDA4AF" opacity="0.85"/>
      <path d="M52 14 Q70 30 88 14" fill="none" stroke="rgba(9,8,15,0.3)" strokeWidth="2.5"/>
      <rect x="52" y="40" width="36" height="26" rx="4" fill="rgba(139,92,246,0.35)" stroke="#A78BFA" strokeWidth="1"/>
      <text x="70" y="57" textAnchor="middle" fontSize="8" fill="#F5F3FF" fontWeight="700" opacity="0.95">ML</text>
    </svg>
  );
}
function IllustrationGorras() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-full" aria-hidden="true">
      <path d="M24 55 Q24 20 70 18 Q116 20 116 55 Z" fill="#FDE68A" opacity="0.87"/>
      <path d="M18 57 Q70 62 122 57 L116 65 Q70 70 24 65 Z" fill="#F59E0B" opacity="0.9"/>
      <line x1="24" y1="55" x2="116" y2="55" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      <ellipse cx="70" cy="40" rx="11" ry="10" fill="rgba(167,139,250,0.45)" stroke="#A78BFA" strokeWidth="1.2"/>
      <text x="70" y="44" textAnchor="middle" fontSize="8" fill="#F5F3FF" fontWeight="800">ML</text>
    </svg>
  );
}
function IllustrationLaser() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-full" aria-hidden="true">
      <rect x="18" y="55" width="104" height="28" rx="4" fill="rgba(87,83,78,0.35)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <line x1="70" y1="8" x2="70" y2="54" stroke="#C4B5FD" strokeWidth="2.5" opacity="0.9"/>
      <ellipse cx="70" cy="54" rx="5" ry="3" fill="#A78BFA" opacity="0.85"/>
      <rect x="57" y="5" width="26" height="14" rx="4" fill="rgba(139,92,246,0.35)" stroke="#A78BFA" strokeWidth="1"/>
      {[[-7,-6],[7,-6],[-4,4],[4,4],[0,-8]].map(([dx,dy], i) => (
        <circle key={i} cx={70+(dx??0)} cy={54+(dy??0)} r="1.2" fill="#FCD34D" opacity={0.85}/>
      ))}
    </svg>
  );
}
function Illustration3D() {
  return (
    <svg viewBox="0 0 140 90" className="w-full h-full" aria-hidden="true">
      {Array.from({length: 8}).map((_, i) => (
        <rect key={i} x={18 + i * 3} y={72 - i * 8} width={104 - i * 6} height="6" rx="2"
              fill={`rgba(45,212,191,${0.25 + i * 0.08})`} stroke="#2DD4BF" strokeWidth="0.5" opacity={0.55 + i * 0.055}/>
      ))}
      <line x1="65" y1="14" x2="65" y2="42" stroke="#A78BFA" strokeWidth="1.8" opacity="0.8"/>
      <circle cx="65" cy="42" r="3" fill="#A78BFA" opacity="0.9"/>
    </svg>
  );
}

// ── Product tiles for the hero mosaic ─────────────────────────────────────

const HERO_TILES = [
  { id: "stickers",  label: "Stickers",      desc: "Die-cut · Holo · Mate", tag: "BESTSELLER", from: "rgba(109,40,217,0.60)", to: "rgba(167,139,250,0.12)", accent: "#C4B5FD", href: "#stickers",    Visual: IllustrationStickers, float: "animate-float" },
  { id: "imanes",    label: "Imanes",         desc: "Personalizados",        tag: "NOVEDAD",    from: "rgba(8,145,178,0.60)",  to: "rgba(34,211,238,0.12)",  accent: "#67E8F9", href: "#tienda",      Visual: IllustrationImanes,   float: "animate-float-delayed" },
  { id: "playeras",  label: "Playeras",       desc: "Estampado premium",     tag: "TEXTIL",     from: "rgba(190,18,60,0.60)",  to: "rgba(251,113,133,0.12)", accent: "#FDA4AF", href: "#tienda",      Visual: IllustrationPlayeras, float: "animate-float-gentle" },
  { id: "gorras",    label: "Gorras",         desc: "Personalización premium",tag: "PERSONALIZADO", from: "rgba(180,83,9,0.60)", to: "rgba(252,211,77,0.12)", accent: "#FDE68A", href: "#tienda",      Visual: IllustrationGorras,   float: "animate-float-slow" },
  { id: "laser",     label: "Grabado Láser",  desc: "Madera · Acrílico · Metal", tag: "LASER",   from: "rgba(67,56,202,0.60)",  to: "rgba(167,139,250,0.12)", accent: "#C4B5FD", href: "#tienda",      Visual: IllustrationLaser,    float: "animate-float-delayed" },
  { id: "3d",        label: "Impresión 3D",   desc: "Capa por capa",         tag: "3D PRINT",   from: "rgba(13,148,136,0.60)", to: "rgba(45,212,191,0.12)",  accent: "#5EEAD4", href: "#tienda",      Visual: Illustration3D,       float: "animate-float-gentle" },
] as const;

// ── Marquee tags ───────────────────────────────────────────────────────────
const MARQUEE_TAGS = [
  "Stickers", "Imanes", "Playeras", "Gorras",
  "Grabado láser", "Impresión 3D", "Talleres creativos", "Vasos Glow",
  "Regalos únicos", "Merchandising", "T-Shirt Lab", "Colecciones",
];

// ── Circuit SVG overlay ────────────────────────────────────────────────────
function CircuitTraces() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none select-none"
         viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="hGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#A78BFA" stopOpacity="0"/>
          <stop offset="40%"  stopColor="#A78BFA" stopOpacity="0.4"/>
          <stop offset="60%"  stopColor="#22D3EE" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="vGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#A78BFA" stopOpacity="0"/>
          <stop offset="50%"  stopColor="#A78BFA" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="0" y1="170" x2="1200" y2="170" stroke="url(#hGrad)" strokeWidth="1"/>
      <line x1="0" y1="530" x2="1200" y2="530" stroke="url(#hGrad)" strokeWidth="0.6"/>
      <line x1="240" y1="0" x2="240" y2="700" stroke="url(#vGrad)" strokeWidth="0.6"/>
      <line x1="960" y1="0" x2="960" y2="700" stroke="url(#vGrad)" strokeWidth="0.6"/>
      <path d="M240 170 L180 170 L180 250" stroke="#A78BFA" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M960 530 L1020 530 L1020 450" stroke="#22D3EE" strokeWidth="0.8" fill="none" opacity="0.3"/>
      <path d="M600 0 L600 100 L700 100 L700 170" stroke="#FB7185" strokeWidth="0.6" fill="none" opacity="0.25"/>
      <circle cx="240" cy="170" r="3.5" fill="#A78BFA" opacity="0.6"/>
      <circle cx="960" cy="170" r="3.5" fill="#22D3EE" opacity="0.6"/>
      <circle cx="240" cy="530" r="3" fill="#FB7185" opacity="0.45"/>
      <circle cx="960" cy="530" r="3" fill="#FCD34D" opacity="0.45"/>
      <circle cx="600" cy="350" r="6" fill="#A78BFA" opacity="0.2"/>
      <circle cx="600" cy="350" r="12" fill="none" stroke="#A78BFA" strokeWidth="0.5" opacity="0.15"/>
      <circle cx="600" cy="350" r="20" fill="none" stroke="#A78BFA" strokeWidth="0.3" opacity="0.08"/>
    </svg>
  );
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative aurora-bg overflow-hidden"
      style={{ minHeight: "100dvh" }}
      aria-labelledby="hero-heading"
    >
      {/* One-time scan line — powering up effect */}
      <div className="hero-scan-line" aria-hidden="true" />

      {/* Circuit traces */}
      <CircuitTraces />

      {/* Ambient colour blobs — richer and more intense */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] rounded-full blur-3xl opacity-25"
             style={{ background: "radial-gradient(ellipse, #6D28D9 0%, transparent 65%)" }}/>
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-18"
             style={{ background: "radial-gradient(ellipse, #0891B2 0%, transparent 65%)" }}/>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-12"
             style={{ background: "radial-gradient(ellipse, #BE123C 0%, transparent 65%)" }}/>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 animate-float-slow"
             style={{ background: "radial-gradient(ellipse, #22D3EE 0%, transparent 65%)" }}/>
      </div>

      {/* ══ Main layout: left text / right mosaic ══════════════════ */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center"
        style={{ minHeight: "100dvh", paddingTop: "5.5rem", paddingBottom: "2.5rem" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(460px,1.05fr)] xl:grid-cols-[minmax(0,0.9fr)_minmax(540px,1.1fr)] gap-10 lg:gap-12 items-center">

          {/* ── Left: hero text ─────────────────────────────────── */}
          <div className="flex flex-col items-start min-w-0 max-w-[720px]">

            {/* Lab badge */}
            <div
              className="hero-in-1 mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(167,139,250,0.14)", border: "1px solid rgba(167,139,250,0.35)", color: "#C4B5FD" }}
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true">
                <path d="M9 2a1 1 0 000 2h.25l.943 3.75A2 2 0 009.5 10a2 2 0 001.956 1.99L12 14h-8l.544-2.01A2 2 0 006.5 10a2 2 0 00-.693-1.5L6.75 4H7a1 1 0 000-2H9z"/>
              </svg>
              Laboratorio Creativo — México
            </div>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="font-heading font-extrabold tracking-tight leading-[0.9] mb-5 w-full"
              style={{ fontSize: "clamp(2.8rem, 5.4vw, 5.1rem)" }}
            >
              <span className="hero-in-2 block text-[#F5F3FF]">MatrixLab</span>
              <span className="hero-in-3 block gradient-text-purple-aqua neon-text-purple">Intelligence</span>
            </h1>

            {/* Main statement */}
            <p
              className="hero-in-4 font-heading font-bold leading-snug mb-4"
              style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.65rem)", color: "rgba(245,243,255,0.9)" }}
            >
              Desde una pieza hasta miles.
              <span className="block gradient-text-coral-gold">Desde personas hasta empresas.</span>
            </p>

            {/* Subtitle */}
            <p className="hero-in-5 text-[#8B879E] text-base sm:text-lg max-w-lg leading-relaxed mb-8">
              El laboratorio creativo donde la personalización, la producción y las experiencias se convierten en productos reales para personas, marcas, eventos y empresas.
            </p>

            {/* CTAs */}
            <div className="hero-in-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href={whatsappLink("Hola, me interesa cotizar algo con MatrixLab Intelligence.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-whatsapp-pulse pressable w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base min-h-[52px]"
              >
                <WAIcon />
                Cotizar por WhatsApp
              </a>
              <a
                href="#tienda"
                className="pressable w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base min-h-[52px] group"
                style={{
                  border: "1px solid rgba(167,139,250,0.32)",
                  color: "#C4B5FD",
                  transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-press) var(--ease-out)",
                }}
              >
                Ver catálogo
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 hover-arrow-right" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Product type marquee */}
            <div className="hero-in-7 w-full">
              <div className="marquee-wrapper w-full">
                <div className="marquee-track" aria-hidden="true">
                  {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
                    <span
                      key={i}
                      className="tech-tag flex-shrink-0"
                      style={{ background: "rgba(167,139,250,0.1)", color: "#8B879E", border: "1px solid rgba(167,139,250,0.15)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: product mosaic ─────────────────────────────── */}
          <div className="hero-in-fade relative">
            {/* Soft glow halo behind mosaic */}
            <div
              className="absolute inset-[-20px] rounded-3xl blur-3xl pointer-events-none opacity-20 animate-glow-breathe"
              style={{ background: "radial-gradient(ellipse, #6D28D9 0%, #0891B2 50%, transparent 80%)" }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2.5 sm:gap-3 relative z-10">
              {HERO_TILES.map((tile, idx) => (
                <a
                  key={tile.id}
                  href={tile.href}
                  className="card-shimmer product-card pressable relative rounded-2xl p-4 flex flex-col gap-2.5 cursor-pointer focus:outline-none group overflow-hidden"
                  style={{
                    background:      `linear-gradient(145deg, ${tile.from} 0%, ${tile.to} 100%)`,
                    border:          `1px solid ${tile.accent}28`,
                    minHeight:       "148px",
                    "--child-index": idx,
                  } as CSSProperties}
                  aria-label={`Ver ${tile.label}`}
                >
                  {/* Floating illustration */}
                  <div
                    className={`${tile.float} absolute -bottom-3 -right-3 w-28 h-20 opacity-65 pointer-events-none`}
                    aria-hidden="true"
                  >
                    <tile.Visual />
                  </div>

                  {/* Glow halo behind illustration */}
                  <div
                    className="absolute bottom-0 right-0 w-32 h-28 rounded-full blur-2xl pointer-events-none opacity-25 group-hover:opacity-50 transition-opacity duration-300"
                    style={{ background: tile.from, transform: "translate(20%, 20%)" }}
                    aria-hidden="true"
                  />

                  {/* Tech tag */}
                  <span
                    className="tech-tag self-start relative z-10"
                    style={{ background: `${tile.accent}20`, color: tile.accent, border: `1px solid ${tile.accent}40` }}
                  >
                    {tile.tag}
                  </span>

                  {/* Name + description */}
                  <div className="mt-auto relative z-10">
                    <p className="font-heading font-extrabold text-base sm:text-lg text-white leading-tight">
                      {tile.label}
                    </p>
                    <p className="text-xs mt-0.5 opacity-60" style={{ color: tile.accent }}>
                      {tile.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Corner label */}
            <div className="flex items-center gap-3 mt-3">
              <div className="section-divider flex-1" aria-hidden="true"/>
              <span className="tech-tag" style={{ background: "rgba(167,139,250,0.1)", color: "#A78BFA", border: "1px solid rgba(167,139,250,0.18)" }}>
                6 líneas de producto
              </span>
              <div className="section-divider flex-1" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 pointer-events-none" aria-hidden="true">
        <span className="tech-tag text-[#8B879E]" style={{ fontSize: "0.55rem" }}>SCROLL</span>
        <svg viewBox="0 0 20 32" fill="none" className="w-5 h-8 text-[#8B879E]">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="10" cy="10" r="3" fill="currentColor" className="animate-float-gentle"/>
        </svg>
      </div>
    </section>
  );
}

import { whatsappLink } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { CAROUSELS } from "@/lib/carousels";
import type { CSSProperties } from "react";

const PRODUCTS = [
  { id: "stickers",  name: "Stickers personalizados", desc: "Die-cut · Holográfico · Mate · Brillante",  accent: "#C4B5FD", from: "rgba(109,40,217,0.5)",  rotate: "md:-rotate-[1deg]"  },
  { id: "imanes",    name: "Imanes",                  desc: "Para nevera, eventos y regalos especiales.", accent: "#22D3EE", from: "rgba(8,145,178,0.5)",   rotate: "md:rotate-[0.8deg]" },
  { id: "playeras",  name: "Playeras & Hoodies",       desc: "Estampado premium y personalización textil.", accent: "#FB7185", from: "rgba(190,18,60,0.5)",  rotate: "md:-rotate-[0.8deg]"},
  { id: "gorras",    name: "Gorras",                   desc: "Personalizadas para eventos, equipos y marcas.", accent: "#FCD34D", from: "rgba(180,83,9,0.5)", rotate: "md:rotate-[1deg]"   },
  { id: "laser",     name: "Grabado láser",            desc: "Madera, metal, acrílico, cuero.",           accent: "#C4B5FD", from: "rgba(67,56,202,0.5)",    rotate: "md:rotate-[0.6deg]" },
  { id: "3d",        name: "Impresión 3D",             desc: "Piezas únicas capa por capa.",              accent: "#2DD4BF", from: "rgba(13,148,136,0.5)",   rotate: "md:-rotate-[0.8deg]"},
] as const;

const MARQUEE_WORDS = [
  "Stickers", "Imanes", "Playeras", "Gorras", "Grabado láser", "Impresión 3D",
  "Holográfico", "Die-cut", "Estampado premium", "Personalización textil", "Regalos", "Colecciones",
];

function StickerExplosion() {
  return (
    <svg viewBox="0 0 300 210" className="w-full h-full" aria-hidden="true">
      {/* Large star — center-left */}
      <polygon
        points="42,10 50,37 78,37 56,54 64,81 42,64 20,81 28,54 6,37 34,37"
        fill="#C4B5FD" opacity="0.95"
        className="animate-float"
      />
      {/* Large circle — top-center */}
      <circle cx="130" cy="32" r="30" fill="#67E8F9" opacity="0.9" className="animate-float-delayed"/>
      {/* Rounded rect — top-right */}
      <rect x="175" y="8" width="100" height="68" rx="16" fill="#FDA4AF" opacity="0.88"/>
      {/* Heart — left-mid */}
      <path d="M38 110 C38 100 48 96 55 102 C62 96 72 100 72 110 C72 128 55 140 55 140 C55 140 38 128 38 110Z"
            fill="#FDE68A" opacity="0.95" className="animate-float-gentle"/>
      {/* Hexagon — center */}
      <polygon points="140,105 157,114 157,132 140,141 123,132 123,114" fill="#A78BFA" opacity="0.9" className="animate-float-delayed"/>
      {/* Star small — center-right */}
      <polygon points="208,98 212,110 225,110 215,118 219,130 208,122 197,130 201,118 191,110 204,110"
               fill="#22D3EE" opacity="0.85"/>
      {/* Circles */}
      <circle cx="272" cy="128" r="22" fill="#FB7185" opacity="0.8" className="animate-float"/>
      <circle cx="20" cy="170" r="18" fill="#22D3EE" opacity="0.7"/>
      <circle cx="90" cy="185" r="12" fill="#A78BFA" opacity="0.65" className="animate-float-gentle"/>
      {/* Rect small */}
      <rect x="108" y="158" width="60" height="44" rx="8" fill="#FCD34D" opacity="0.75"/>
      <rect x="180" y="160" width="80" height="44" rx="8" fill="#67E8F9" opacity="0.65"/>
      {/* Die-cut dots */}
      {[42,130,225,278].map((x, i) => (
        <circle key={i} cx={x} cy={10 + i * 2} r="2" fill="white" opacity="0.35"/>
      ))}
    </svg>
  );
}

export function MatrixLabStickers() {
  return (
    <section
      id="stickers"
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D0A1E 0%, #130E26 50%, #0D0A1E 100%)",
      }}
      aria-labelledby="stickers-heading"
    >
      {/* Colorful ambient glows — stronger */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
             style={{ background: "radial-gradient(#A78BFA, transparent)" }}/>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-12"
             style={{ background: "radial-gradient(#FB7185, transparent)" }}/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-8"
             style={{ background: "radial-gradient(#22D3EE, transparent)" }}/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="section-divider flex-1" aria-hidden="true"/>
          <span className="tech-tag" style={{ background: "rgba(167,139,250,0.12)", color: "#A78BFA", border: "1px solid rgba(167,139,250,0.25)" }}>
            MatrixLab Stickers
          </span>
          <div className="section-divider flex-1" aria-hidden="true"/>
        </div>

        {/* Header grid — text left, sticker explosion right */}
        <Reveal animation="up" className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-extrabold text-sm sticker-peel flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #A78BFA 0%, #22D3EE 100%)", color: "#07060D" }}
                role="img"
                aria-label="MatrixLab Stickers logo"
              >
                ML
              </div>
              <div>
                <p className="font-heading font-bold text-[#F5F3FF] text-lg leading-none">MatrixLab Stickers</p>
                <p className="text-xs" style={{ color: "#A78BFA" }}>Personalización creativa</p>
              </div>
            </div>

            <h2
              id="stickers-heading"
              className="font-heading font-extrabold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "#F5F3FF" }}
            >
              Personalización creativa{" "}
              <span className="gradient-text-purple-aqua">para cada momento</span>
            </h2>

            <p
              className="text-[#F5F3FF]/75 text-lg font-semibold mb-3 italic"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              &ldquo;Si puedes imaginarlo, podemos crearlo.&rdquo;
            </p>

            <p className="text-[#8B879E] text-base leading-relaxed mb-7 max-w-lg">
              Diseñamos y producimos piezas personalizadas para quienes quieren algo único — desde una sola pieza hasta pedidos más grandes. Regalos, eventos, emprendimientos y momentos especiales.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Regalos", "Eventos", "Emprendimientos", "Colecciones", "Merch", "Die-cut", "Holo"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(167,139,250,0.12)", color: "#C4B5FD", border: "1px solid rgba(167,139,250,0.25)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={whatsappLink("Hola, me interesa crear un producto personalizado con MatrixLab Stickers.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base min-h-[52px]"
              aria-label="Crear algo personalizado por WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Crear algo personalizado
            </a>
          </div>

          {/* Sticker explosion hero visual (carousel if images exist, else SVG) */}
          <div className="relative">
            <div
              className="relative rounded-3xl sticker-peel animate-float-gentle overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(109,40,217,0.22) 0%, rgba(8,145,178,0.12) 100%)",
                border:     "1px solid rgba(167,139,250,0.28)",
                boxShadow:  "0 0 80px rgba(167,139,250,0.14), 0 0 40px rgba(34,211,238,0.08)",
              }}
            >
              {CAROUSELS.stickers.length > 0 ? (
                <div className="h-56 sm:h-72">
                  <ImageCarousel
                    images={CAROUSELS.stickers}
                    alt="MatrixLab Stickers"
                    className="rounded-3xl"
                  />
                </div>
              ) : (
                <>
                  <div className="p-6 h-56 sm:h-72">
                    <StickerExplosion />
                  </div>
                  {/* Paper texture — only on SVG fallback */}
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{ opacity: 0.035, backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "16px 16px" }}
                    aria-hidden="true"
                  />
                </>
              )}
            </div>

            {/* Floating tech badges */}
            {[
              { label: "HOLOGRÁFICO", x: "-12%", y: "12%",  bg: "rgba(167,139,250,0.85)", delay: "animate-float" },
              { label: "ESTAMPADO",   x: "88%",  y: "50%",  bg: "rgba(34,211,238,0.85)",  delay: "animate-float-delayed" },
              { label: "LÁSER CUT",   x: "-10%", y: "78%",  bg: "rgba(251,113,133,0.85)", delay: "animate-float-gentle" },
              { label: "DIE-CUT",     x: "80%",  y: "18%",  bg: "rgba(252,211,77,0.85)",  delay: "animate-float-slow" },
            ].map((badge) => (
              <span
                key={badge.label}
                className={`absolute tech-tag font-bold shadow-xl ${badge.delay}`}
                style={{ background: badge.bg, color: "#07060D", left: badge.x, top: badge.y }}
                aria-hidden="true"
              >
                {badge.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Product type marquee */}
        <div className="mb-10 marquee-wrapper">
          <div className="marquee-track" aria-hidden="true">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span
                key={i}
                className="tech-tag flex-shrink-0 font-semibold"
                style={{ background: "rgba(167,139,250,0.08)", color: "#8B879E", border: "1px solid rgba(167,139,250,0.14)", fontSize: "0.7rem", letterSpacing: "0.1em" }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Product cards grid */}
        <Reveal animation="up" delay={50}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.id}
                className={`reveal-child card-shimmer product-card sticker-peel relative rounded-2xl p-5 flex flex-col gap-3 ${p.rotate}`}
                style={{
                  background:      `linear-gradient(145deg, ${p.from} 0%, ${p.accent}08 100%)`,
                  border:          `1px solid ${p.accent}28`,
                  "--child-index": i,
                } as CSSProperties}
              >
                {/* Animated glow dot */}
                <div
                  className="w-3.5 h-3.5 rounded-full animate-glow-breathe flex-shrink-0"
                  style={{ background: p.accent, boxShadow: `0 0 10px ${p.accent}80` }}
                  aria-hidden="true"
                />
                <h3 className="font-heading font-bold text-lg text-[#F5F3FF] leading-tight">{p.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: p.accent, opacity: 0.8 }}>{p.desc}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.accent}50, transparent)` }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

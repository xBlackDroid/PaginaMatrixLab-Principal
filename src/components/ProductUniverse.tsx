import { whatsappLink } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";
import type { CSSProperties } from "react";

const UNIVERSE_ITEMS = [
  {
    id:      "stickers",
    name:    "Stickers personalizados",
    tagline: "Cualquier forma. Cualquier tamaño.",
    blurb:   "Die-cut · Holográfico · Mate · Brillante · Transparente",
    accent:  "#A78BFA",
    from:    "rgba(109,40,217,0.28)",
    to:      "rgba(167,139,250,0.06)",
    waMsg:   "Hola, me interesa cotizar stickers personalizados.",
  },
  {
    id:      "imanes",
    name:    "Imanes",
    tagline: "Útiles y memorables.",
    blurb:   "Imantados de alta calidad para nevera, eventos y regalos",
    accent:  "#22D3EE",
    from:    "rgba(8,145,178,0.28)",
    to:      "rgba(34,211,238,0.06)",
    waMsg:   "Hola, me interesa cotizar imanes personalizados.",
  },
  {
    id:      "playeras",
    name:    "Playeras & Hoodies",
    tagline: "Tu diseño, tu prenda.",
    blurb:   "Estampado premium · Personalización textil",
    accent:  "#FB7185",
    from:    "rgba(190,18,60,0.28)",
    to:      "rgba(251,113,133,0.06)",
    waMsg:   "Hola, me interesa cotizar playeras o hoodies personalizados.",
  },
  {
    id:      "gorras",
    name:    "Gorras",
    tagline: "Personalizadas para tu marca.",
    blurb:   "Personalización premium · Snapback · Trucker · Eventos",
    accent:  "#FCD34D",
    from:    "rgba(180,83,9,0.28)",
    to:      "rgba(252,211,77,0.06)",
    waMsg:   "Hola, me interesa cotizar gorras personalizadas.",
  },
  {
    id:      "laser",
    name:    "Grabado láser",
    tagline: "Precisión al detalle.",
    blurb:   "Madera · Metal · Acrílico · Cuero",
    accent:  "#C4B5FD",
    from:    "rgba(67,56,202,0.28)",
    to:      "rgba(196,181,253,0.06)",
    waMsg:   "Hola, me interesa cotizar grabado láser.",
  },
  {
    id:      "3d",
    name:    "Impresión 3D",
    tagline: "Ideas que toman forma.",
    blurb:   "Prototipos · Decoración · Props · Piezas únicas",
    accent:  "#2DD4BF",
    from:    "rgba(13,148,136,0.28)",
    to:      "rgba(45,212,191,0.06)",
    waMsg:   "Hola, me interesa cotizar impresión 3D.",
  },
] as const;

export function ProductUniverse() {
  return (
    <section
      id="productos"
      className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "#07060D" }}
      aria-labelledby="universe-heading"
    >
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-heading font-extrabold text-white leading-none"
          style={{ fontSize: "clamp(8rem, 25vw, 22rem)", opacity: 0.016, letterSpacing: "-0.04em" }}
        >
          STUDIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal animation="up" className="mb-12 md:mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="section-divider flex-1" aria-hidden="true"/>
            <span className="tech-tag" style={{ background: "rgba(34,211,238,0.1)", color: "#22D3EE", border: "1px solid rgba(34,211,238,0.25)" }}>
              Productos
            </span>
            <div className="section-divider flex-1" aria-hidden="true"/>
          </div>
          <div className="text-center">
            <h2
              id="universe-heading"
              className="font-heading font-extrabold leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F5F3FF" }}
            >
              Un universo de{" "}
              <span className="gradient-text-purple-aqua">productos personalizados</span>
            </h2>
            <p className="text-[#8B879E] text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Cada categoría es un mundo. Explora lo que podemos crear para ti.
            </p>
          </div>
        </Reveal>

        {/* Uniform product grid */}
        <Reveal animation="up" delay={55}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {UNIVERSE_ITEMS.map((item, i) => (
              <a
                key={item.id}
                href={whatsappLink(item.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-child card-shimmer product-card group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden cursor-pointer focus:outline-none h-full"
                style={{
                  background:      `linear-gradient(135deg, ${item.from} 0%, ${item.to} 100%)`,
                  border:          `1px solid ${item.accent}22`,
                  minHeight:       "220px",
                  "--child-index": i,
                } as CSSProperties}
                aria-label={`Cotizar ${item.name} por WhatsApp`}
              >
                {/* Top: category tag + arrow */}
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="tech-tag"
                    style={{ background: `${item.accent}18`, color: item.accent, border: `1px solid ${item.accent}35` }}
                  >
                    {item.id.toUpperCase()}
                  </span>
                  <svg
                    viewBox="0 0 16 16" fill="none"
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 mt-0.5"
                    style={{ color: item.accent }} aria-hidden="true"
                  >
                    <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Bottom: name + tagline + blurb */}
                <div>
                  {/* Top accent before name */}
                  <div
                    className="mb-3 h-px w-8"
                    style={{ background: `linear-gradient(90deg, ${item.accent}80, transparent)` }}
                    aria-hidden="true"
                  />
                  <h3
                    className="font-heading font-extrabold leading-tight mb-1.5 group-hover:opacity-90 transition-opacity"
                    style={{
                      fontSize:      "clamp(1.35rem, 2.2vw, 1.75rem)",
                      color:         "#F5F3FF",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold mb-1" style={{ color: item.accent }}>
                    {item.tagline}
                  </p>
                  <p className="text-xs opacity-55 leading-relaxed" style={{ color: item.accent }}>
                    {item.blurb}
                  </p>
                </div>

                {/* Glow blob */}
                <div
                  className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-15 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ background: item.accent }}
                  aria-hidden="true"
                />

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}60, transparent)` }}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Bottom CTA — prominent close */}
        <div
          className="mt-12 rounded-2xl px-6 py-8 sm:py-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(109,40,217,0.12) 0%, rgba(34,211,238,0.06) 100%)",
            border: "1px solid rgba(167,139,250,0.2)",
          }}
        >
          {/* Top edge accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.6), rgba(34,211,238,0.6), transparent)" }}
            aria-hidden="true"
          />
          <p
            className="font-heading font-bold mb-2"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#F5F3FF" }}
          >
            ¿No ves lo que necesitas? Podemos crearlo.
          </p>
          <p className="text-[#8B879E] text-sm mb-6 max-w-sm mx-auto">
            Cuéntanos tu idea y la hacemos realidad — desde una pieza hasta miles.
          </p>
          <a
            href={whatsappLink("Hola, necesito un producto personalizado que no veo en el catálogo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base min-h-[52px] transition-all duration-200 pressable"
            style={{
              background: "rgba(167,139,250,0.15)",
              color: "#C4B5FD",
              border: "1px solid rgba(167,139,250,0.35)",
            }}
          >
            Pregúntanos por WhatsApp
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 hover-arrow-right" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

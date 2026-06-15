import { STORE_CATEGORIES, whatsappLink } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { CAROUSELS } from "@/lib/carousels";
import type { CSSProperties } from "react";
import type { AccentColor } from "@/lib/constants";

const ACCENT: Record<AccentColor, { color: string; from: string; to: string; border: string; glowClass: string }> = {
  purple: { color: "#C4B5FD", from: "rgba(109,40,217,0.45)",  to: "rgba(167,139,250,0.08)", border: "rgba(196,181,253,0.22)", glowClass: "glow-hover-purple" },
  aqua:   { color: "#67E8F9", from: "rgba(8,145,178,0.45)",   to: "rgba(34,211,238,0.08)",  border: "rgba(103,232,249,0.22)", glowClass: "glow-hover-aqua"   },
  coral:  { color: "#FDA4AF", from: "rgba(190,18,60,0.45)",   to: "rgba(251,113,133,0.08)", border: "rgba(253,164,175,0.22)", glowClass: "glow-hover-coral"  },
  gold:   { color: "#FDE68A", from: "rgba(180,83,9,0.45)",    to: "rgba(252,211,77,0.08)",  border: "rgba(253,230,138,0.22)", glowClass: "glow-hover-gold"   },
};

function ProductArt({ accent, id }: { accent: string; id: string }) {
  if (id === "stickers") return (
    <svg viewBox="0 0 90 70" className="w-full h-full" aria-hidden="true">
      <circle cx="22" cy="22" r="17" fill={accent} opacity="0.75"/>
      <polygon points="62,6 67,22 84,22 71,32 76,48 62,38 48,48 53,32 40,22 57,22" fill={accent} opacity="0.65"/>
      <rect x="10" y="44" width="34" height="22" rx="6" fill={accent} opacity="0.55"/>
      <polygon points="62,48 68,66 74,48 91,48 77,58 83,76 62,62 41,76 47,58 33,48" fill={accent} opacity="0.5"/>
    </svg>
  );
  if (id === "imanes") return (
    <svg viewBox="0 0 90 70" className="w-full h-full" aria-hidden="true">
      <path d="M15 8 C15 8 5 8 5 30 C5 52 15 52 22 52 L22 40 C16 40 13 39 13 30 C13 21 16 20 22 20 L22 8Z" fill={accent} opacity="0.75"/>
      <path d="M75 8 C75 8 85 8 85 30 C85 52 75 52 68 52 L68 40 C74 40 77 39 77 30 C77 21 74 20 68 20 L68 8Z" fill={accent} opacity="0.65"/>
      {[0,8,16].map((o,i) => (
        <path key={i} d={`M22 ${20+o} Q45 ${14+o} 68 ${20+o}`} stroke={accent} strokeWidth="1.2" fill="none" opacity={0.3+i*0.1} strokeDasharray="3,2"/>
      ))}
      <text x="17" y="35" fontSize="11" fill="white" fontWeight="800" opacity="0.85">N</text>
      <text x="72" y="35" fontSize="11" fill="white" fontWeight="800" opacity="0.85">S</text>
    </svg>
  );
  if (id === "playeras") return (
    <svg viewBox="0 0 90 70" className="w-full h-full" aria-hidden="true">
      <path d="M22 8 L5 22 L16 27 L16 60 L74 60 L74 27 L85 22 L68 8 C68 8 59 20 45 20 C31 20 22 8 22 8Z" fill={accent} opacity="0.75"/>
      <rect x="34" y="32" width="22" height="18" rx="3" fill="rgba(0,0,0,0.2)"/>
      <text x="45" y="44" textAnchor="middle" fontSize="7" fill="white" fontWeight="800" opacity="0.9">ML</text>
    </svg>
  );
  if (id === "gorras") return (
    <svg viewBox="0 0 90 70" className="w-full h-full" aria-hidden="true">
      <path d="M10 46 Q10 12 45 10 Q80 12 80 46 Z" fill={accent} opacity="0.75"/>
      <path d="M5 48 Q45 54 85 48 L80 55 Q45 61 10 55 Z" fill={accent} opacity="0.88"/>
      <ellipse cx="45" cy="30" rx="9" ry="8" fill="rgba(0,0,0,0.25)" stroke="white" strokeWidth="0.8" opacity="0.6"/>
      <text x="45" y="34" textAnchor="middle" fontSize="7" fill="white" fontWeight="800" opacity="0.8">ML</text>
    </svg>
  );
  if (id === "laser") return (
    <svg viewBox="0 0 90 70" className="w-full h-full" aria-hidden="true">
      <rect x="8" y="46" width="74" height="20" rx="3" fill="rgba(120,113,108,0.3)" stroke="rgba(255,255,255,0.08)"/>
      <line x1="45" y1="4" x2="45" y2="45" stroke={accent} strokeWidth="2.5" opacity="0.9"/>
      <ellipse cx="45" cy="45" rx="4" ry="2.5" fill={accent} opacity="0.85"/>
      <rect x="36" y="2" width="18" height="10" rx="3" fill={accent} opacity="0.55"/>
      {[50,57,64].map((y,i) => <line key={i} x1="14" y1={y} x2={28+i*4} y2={y} stroke={accent} strokeWidth="1.2" opacity={0.5-i*0.1}/>)}
      {[[-5,-4],[5,-4],[-3,3],[3,3]].map(([dx,dy],i) => <circle key={i} cx={45+(dx??0)} cy={45+(dy??0)} r="1" fill="#FCD34D" opacity="0.9"/>)}
    </svg>
  );
  return (
    <svg viewBox="0 0 90 70" className="w-full h-full" aria-hidden="true">
      {Array.from({length:7}).map((_,i) => (
        <rect key={i} x={6+i*2} y={62-i*9} width={78-i*4} height="6" rx="1.5"
              fill={accent} opacity={0.3+i*0.1} stroke={accent} strokeWidth="0.3"/>
      ))}
      <path d="M40 6 L34 20 L48 20 L48 28 L39 28 L39 33 L43 33" fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
    </svg>
  );
}

export function StoreCatalog() {
  return (
    <section
      id="tienda"
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0918 0%, #0D0B1E 100%)" }}
      aria-labelledby="store-heading"
    >
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <span
          className="font-heading font-extrabold text-white leading-none"
          style={{
            fontSize: "clamp(7rem, 22vw, 20rem)",
            opacity: 0.018,
            letterSpacing: "-0.04em",
          }}
        >
          TIENDA
        </span>
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-6"
             style={{ background: "radial-gradient(#A78BFA, transparent)" }}/>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-6"
             style={{ background: "radial-gradient(#22D3EE, transparent)" }}/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="section-divider flex-1" aria-hidden="true"/>
          <span className="tech-tag" style={{ background: "rgba(252,211,77,0.1)", color: "#FCD34D", border: "1px solid rgba(252,211,77,0.25)" }}>
            Tienda online
          </span>
          <div className="section-divider flex-1" aria-hidden="true"/>
        </div>

        {/* Header */}
        <Reveal animation="up" className="text-center mb-12">
          <h2
            id="store-heading"
            className="font-heading font-extrabold leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", color: "#F5F3FF" }}
          >
            Explora el{" "}
            <span className="gradient-text-coral-gold">catálogo</span>
          </h2>
          <p className="text-[#8B879E] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-4">
            Productos listos para personalizar. Los pedidos se hacen por WhatsApp.
          </p>
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: "rgba(252,211,77,0.1)", color: "#FCD34D", border: "1px solid rgba(252,211,77,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-glow-breathe" aria-hidden="true"/>
            Catálogo visual — carrito y pago en camino
          </span>
        </Reveal>

        {/* Category tiles */}
        <Reveal animation="up" delay={45}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {STORE_CATEGORIES.map((cat, i) => {
              const a = ACCENT[cat.accent];
              return (
                <div
                  key={cat.id}
                  className={`reveal-child card-shimmer product-card ${a.glowClass} group relative rounded-2xl overflow-hidden flex flex-col cursor-default`}
                  style={{
                    background:      `linear-gradient(145deg, ${a.from} 0%, ${a.to} 100%)`,
                    border:          `1px solid ${a.border}`,
                    "--child-index": i,
                  } as CSSProperties}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${a.color}70, transparent)` }}
                    aria-hidden="true"
                  />

                  {/* Product art area — carousel if images, else SVG */}
                  <div
                    className="relative h-40 flex items-center justify-center overflow-hidden"
                    style={{ background: `${a.color}0C` }}
                  >
                    {(() => {
                      const key = cat.id === "laser" ? "grabado-laser" : cat.id === "3d" ? "impresion-3d" : cat.id;
                      const imgs = CAROUSELS[key] ?? [];
                      return imgs.length > 0 ? (
                        <ImageCarousel
                          images={imgs}
                          alt={cat.name}
                          className="rounded-none"
                        />
                      ) : (
                        <>
                          {/* Large glow halo */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div
                              className="w-32 h-32 rounded-full blur-2xl opacity-18 group-hover:opacity-35 transition-opacity duration-400 animate-glow-breathe"
                              style={{ background: a.color }}
                              aria-hidden="true"
                            />
                          </div>
                          <div
                            className="w-32 h-24 group-hover:scale-110 transition-transform duration-400 relative z-10"
                            aria-hidden="true"
                          >
                            <ProductArt accent={a.color} id={cat.id}/>
                          </div>
                        </>
                      );
                    })()}

                    {/* Category tag — always visible */}
                    <span
                      className="absolute top-3 right-3 tech-tag z-10"
                      style={{ background: `${a.color}20`, color: a.color, border: `1px solid ${a.color}35` }}
                    >
                      {cat.id.toUpperCase()}
                    </span>
                  </div>

                  {/* Text + actions */}
                  <div className="p-5 flex flex-col gap-3.5 flex-1">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#F5F3FF]">{cat.name}</h3>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: a.color, opacity: 0.7 }}>{cat.desc}</p>
                    </div>

                    <div className="flex items-center gap-2 mt-auto flex-wrap">
                      <a
                        href={whatsappLink(`Hola, me interesa cotizar ${cat.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold min-h-[44px] transition-all duration-150 hover:brightness-110 cursor-pointer"
                        style={{ background: `${a.color}18`, color: a.color, border: `1px solid ${a.color}35` }}
                        aria-label={`Cotizar ${cat.name} por WhatsApp`}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Cotizar
                      </a>
                      <a
                        href={whatsappLink(`Hola, quisiera ver el catálogo de ${cat.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl text-xs font-semibold min-h-[44px] transition-all duration-150 hover:bg-white/8 cursor-pointer"
                        style={{ background: "rgba(255,255,255,0.04)", color: "#8B879E", border: "1px solid rgba(255,255,255,0.08)" }}
                        aria-label={`Ver catálogo de ${cat.name}`}
                      >
                        Ver catálogo →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-[#5C5870] text-sm">
            ¿Buscas algo específico?{" "}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors duration-150 cursor-pointer hover:text-brand-purple"
              style={{ color: "#A78BFA" }}
            >
              Pedir por WhatsApp
            </a>
            {" "}y lo hacemos realidad.
          </p>
        </div>
      </div>
    </section>
  );
}

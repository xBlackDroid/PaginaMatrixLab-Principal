import { Layers, Sparkles, Building2, ShoppingBag } from "lucide-react";
import { BUSINESS_UNITS } from "@/lib/constants";
import type { AccentColor } from "@/lib/constants";

const ICONS: Record<AccentColor, React.ReactNode> = {
  purple: <Sparkles size={24} aria-hidden="true" />,
  aqua:   <Layers    size={24} aria-hidden="true" />,
  coral:  <Building2 size={24} aria-hidden="true" />,
  gold:   <ShoppingBag size={24} aria-hidden="true" />,
};

const ACCENT_STYLES: Record<AccentColor, { color: string; bg: string; border: string; glow: string }> = {
  purple: {
    color:  "#A78BFA",
    bg:     "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.18)",
    glow:   "rgba(167,139,250,0.20)",
  },
  aqua: {
    color:  "#22D3EE",
    bg:     "rgba(34,211,238,0.07)",
    border: "rgba(34,211,238,0.18)",
    glow:   "rgba(34,211,238,0.18)",
  },
  coral: {
    color:  "#FB7185",
    bg:     "rgba(251,113,133,0.07)",
    border: "rgba(251,113,133,0.18)",
    glow:   "rgba(251,113,133,0.18)",
  },
  gold: {
    color:  "#FCD34D",
    bg:     "rgba(252,211,77,0.07)",
    border: "rgba(252,211,77,0.18)",
    glow:   "rgba(252,211,77,0.15)",
  },
};

export function Ecosystem() {
  return (
    <section
      id="ecosistema"
      className="py-20 sm:py-28 px-4 sm:px-6"
      style={{ background: "rgba(16,15,26,0.95)" }}
      aria-labelledby="ecosystem-heading"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#A78BFA" }}
          >
            Ecosistema
          </p>
          <h2
            id="ecosystem-heading"
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F3FF] mb-4"
          >
            Un ecosistema creativo para{" "}
            <span className="gradient-text-purple-aqua">hacer realidad tus ideas</span>
          </h2>
          <p className="text-[#8B879E] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            MatrixLab Intelligence conecta múltiples unidades creativas para acompañarte desde la primera idea hasta el producto final, sin importar la escala.
          </p>
        </div>

        {/* ── Bento cards grid ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {BUSINESS_UNITS.map((unit) => {
            const styles = ACCENT_STYLES[unit.accent];
            const icon   = ICONS[unit.accent];

            // Precompute icon bg rgba string cleanly
            const iconRgba =
              unit.accent === "purple" ? "167,139,250"
              : unit.accent === "aqua" ? "34,211,238"
              : unit.accent === "coral" ? "251,113,133"
              : "252,211,77";

            return (
              // Entire card is a link — clear affordance, cursor-pointer, full hit area
              <a
                key={unit.id}
                href={unit.href}
                className="relative rounded-2xl p-6 sm:p-7 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group cursor-pointer focus:outline-none"
                style={{
                  background:  styles.bg,
                  border:      `1px solid ${styles.border}`,
                }}
                aria-label={`${unit.cta} — ${unit.name}`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full"
                  style={{ background: styles.color }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                  style={{ background: `rgba(${iconRgba},0.15)`, color: styles.color }}
                >
                  {icon}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: styles.color }}>
                    {unit.tagline}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F3FF] group-hover:text-white transition-colors">
                    {unit.name}
                  </h3>
                  <p className="text-[#8B879E] text-sm sm:text-base leading-relaxed">
                    {unit.desc}
                  </p>
                </div>

                {/* CTA row */}
                <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold" style={{ color: styles.color }}>
                  {unit.cta}
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Bottom mantra ────────────────────────────────────────── */}
        <div className="mt-12 text-center">
          <p className="text-[#5C5870] text-sm">
            <span className="gradient-text-purple-aqua font-semibold">Desde uno hasta miles.</span>
            {" "}
            <span className="gradient-text-coral-gold font-semibold">Desde personas hasta empresas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

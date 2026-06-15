import { Reveal } from "@/components/motion/Reveal";
import type { CSSProperties } from "react";

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title:   "Precisión artística",
    desc:    "Diseñamos con mentalidad de laboratorio: cuidamos trazos, color, materiales, tiempos y acabados para lograr resultados consistentes.",
    accent:  "#B197FC",
    from:    "rgba(109,40,217,0.18)",
    border:  "rgba(177,151,252,0.22)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title:   "Versatilidad",
    desc:    "Nos adaptamos a distintos estilos, públicos, materiales y volúmenes: desde algo kawaii hasta corporativo, gamer, escolar, deportivo o cyberpunk.",
    accent:  "#4DCEFF",
    from:    "rgba(8,145,178,0.18)",
    border:  "rgba(77,206,255,0.22)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title:   "Conexión",
    desc:    "Cada producto cuenta una historia. Creamos piezas que ayudan a personas y marcas a expresarse, organizarse, regalar, promocionar o conectar con su comunidad.",
    accent:  "#FF8787",
    from:    "rgba(190,18,60,0.18)",
    border:  "rgba(255,135,135,0.22)",
  },
] as const;

// Subtle circuit line decoration
function CircuitAccent() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400"
         preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="cGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B197FC" stopOpacity="0"/>
          <stop offset="50%" stopColor="#B197FC" stopOpacity="0.25"/>
          <stop offset="100%" stopColor="#4DCEFF" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <line x1="0" y1="80"  x2="800" y2="80"  stroke="url(#cGrad1)" strokeWidth="0.8"/>
      <line x1="0" y1="320" x2="800" y2="320" stroke="url(#cGrad1)" strokeWidth="0.5"/>
      <path d="M160 80 L160 160 L240 160" stroke="#B197FC" strokeWidth="0.7" fill="none" opacity="0.2"/>
      <path d="M640 320 L640 240 L560 240" stroke="#4DCEFF" strokeWidth="0.7" fill="none" opacity="0.2"/>
      <circle cx="160" cy="80"  r="3" fill="#B197FC" opacity="0.4"/>
      <circle cx="640" cy="320" r="3" fill="#4DCEFF" opacity="0.4"/>
      <circle cx="400" cy="200" r="4" fill="#B197FC" opacity="0.15"/>
      <circle cx="400" cy="200" r="10" fill="none" stroke="#B197FC" strokeWidth="0.5" opacity="0.1"/>
    </svg>
  );
}

export function AboutUs() {
  return (
    <section
      id="quienes-somos"
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #09080F 0%, #0C0A1A 50%, #09080F 100%)" }}
      aria-labelledby="about-heading"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] rounded-full blur-3xl opacity-8"
             style={{ background: "radial-gradient(ellipse, #6D28D9 0%, transparent 70%)" }}/>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-7"
             style={{ background: "radial-gradient(#0891B2, transparent)" }}/>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <Reveal animation="up" className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="section-divider flex-1" aria-hidden="true"/>
            <span className="tech-tag" style={{ background: "rgba(177,151,252,0.12)", color: "#B197FC", border: "1px solid rgba(177,151,252,0.28)" }}>
              Quiénes somos
            </span>
            <div className="section-divider flex-1" aria-hidden="true"/>
          </div>

          {/* Heading */}
          <div className="text-center mb-2">
            <h2
              id="about-heading"
              className="font-heading font-extrabold leading-tight mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F8F9FA" }}
            >
              Bienvenidos al laboratorio{" "}
              <span className="gradient-text-purple-aqua">de las ideas tangibles</span>
            </h2>
          </div>
        </Reveal>

        {/* Main glass card */}
        <Reveal animation="scale" className="mb-12">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(177,151,252,0.18)",
              boxShadow: "0 0 60px rgba(109,40,217,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <CircuitAccent />

            {/* Top edge highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(177,151,252,0.6) 30%, rgba(77,206,255,0.6) 70%, transparent 100%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 px-7 py-10 sm:px-12 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Text block */}
              <div>
                <p className="tech-tag inline-block mb-5" style={{ background: "rgba(77,206,255,0.1)", color: "#4DCEFF", border: "1px solid rgba(77,206,255,0.25)" }}>
                  MatrixLab Intelligence
                </p>

                <p className="text-[#C8C4D6] text-base sm:text-lg leading-relaxed mb-5">
                  Somos el ecosistema creativo donde la tecnología de precisión se encuentra con la imaginación. Nacimos para romper la barrera entre lo digital y lo físico, transformando ideas, diseños y conceptos en productos reales, útiles y memorables.
                </p>
                <p className="text-[#8B879E] text-sm sm:text-base leading-relaxed mb-5">
                  No somos solo una tienda de personalización. Somos un laboratorio que diseña, prueba y materializa soluciones visuales para personas, marcas, escuelas, empresas, eventos y emprendedores.
                </p>
                <p className="text-[#8B879E] text-sm sm:text-base leading-relaxed">
                  En MatrixLab, cada proyecto es una colaboración. Cuidamos la colorimetría, la precisión del diseño, la durabilidad de los materiales y la experiencia completa del cliente, desde la primera idea hasta la entrega final.
                </p>
              </div>

              {/* Quote block */}
              <div className="flex flex-col gap-5">
                {/* Primary brand phrase */}
                <div
                  className="rounded-2xl p-6 relative overflow-hidden"
                  style={{ background: "rgba(177,151,252,0.08)", border: "1px solid rgba(177,151,252,0.18)" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(177,151,252,0.7), transparent)" }}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#B197FC", opacity: 0.7 }}>
                    Nuestra promesa
                  </p>
                  <blockquote
                    className="font-heading font-extrabold leading-snug"
                    style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", color: "#F8F9FA" }}
                  >
                    Desde una pieza hasta miles.
                    <span className="block gradient-text-coral-gold">Desde personas hasta empresas.</span>
                  </blockquote>
                </div>

                {/* Secondary phrase */}
                <div
                  className="rounded-2xl p-6 relative overflow-hidden"
                  style={{ background: "rgba(77,206,255,0.06)", border: "1px solid rgba(77,206,255,0.15)" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(77,206,255,0.6), transparent)" }}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4DCEFF", opacity: 0.7 }}>
                    Visión
                  </p>
                  <blockquote
                    className="font-heading font-bold leading-snug"
                    style={{ fontSize: "clamp(1.05rem, 2vw, 1.4rem)", color: "#F8F9FA" }}
                  >
                    Un solo ecosistema creativo.{" "}
                    <span style={{ color: "#4DCEFF" }}>Infinitas posibilidades.</span>
                  </blockquote>
                </div>

                {/* Brand tagline */}
                <p
                  className="text-center font-mono text-xs tracking-[0.18em] uppercase"
                  style={{ color: "#5C5870" }}
                >
                  Smart tools for brilliant minds.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Values grid */}
        <Reveal animation="up" delay={55}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="reveal-child card-shimmer relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
                style={{
                  background:      v.from,
                  border:          `1px solid ${v.border}`,
                  "--child-index": i,
                } as CSSProperties}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${v.accent}60, transparent)` }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${v.accent}18`, color: v.accent, border: `1px solid ${v.accent}30` }}
                >
                  {v.icon}
                </div>

                <div>
                  <h3 className="font-heading font-bold text-[#F8F9FA] text-base mb-2">{v.title}</h3>
                  <p className="text-[#8B879E] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

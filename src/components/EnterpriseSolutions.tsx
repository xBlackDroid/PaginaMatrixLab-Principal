import { CheckCircle } from "lucide-react";
import { ENTERPRISE_SERVICES, whatsappLink } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { CAROUSELS } from "@/lib/carousels";
import type { CSSProperties } from "react";

const SCALE_STEPS = [
  { label: "1 pieza",   w: "12%",  val: "1"      },
  { label: "100 pzs",   w: "42%",  val: "100"    },
  { label: "1,000+",    w: "78%",  val: "1,000+" },
  { label: "10,000+",   w: "100%", val: "10k+"   },
] as const;

const METRICS = [
  { value: "Desde 1",    label: "hasta miles de piezas", accent: "#FDA4AF" },
  { value: "Eventos",    label: "corporativos y marcas",  accent: "#FB7185" },
  { value: "Producción", label: "flexible y rápida",      accent: "#FCA5A5" },
  { value: "Diseño +",   label: "fabricación propia",     accent: "#FDA4AF" },
] as const;

export function EnterpriseSolutions() {
  return (
    <section
      id="empresas"
      className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #05040A 0%, #090612 65%, #05040A 100%)" }}
      aria-labelledby="enterprise-heading"
    >
      {/* Ambient glow — stronger coral */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-3xl opacity-10"
             style={{ background: "radial-gradient(#BE123C, transparent)" }}/>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-7"
             style={{ background: "radial-gradient(#9F1239, transparent)" }}/>
      </div>

      {/* SCALE watermark — gradient */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <span
          className="font-heading font-extrabold leading-none"
          style={{
            fontSize: "clamp(7rem, 22vw, 20rem)",
            background: "linear-gradient(180deg, rgba(251,113,133,0.05) 0%, transparent 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.04em",
          }}
        >
          SCALE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="section-divider flex-1" aria-hidden="true"/>
          <span className="tech-tag" style={{ background: "rgba(251,113,133,0.1)", color: "#FB7185", border: "1px solid rgba(251,113,133,0.25)" }}>
            Empresas
          </span>
          <div className="section-divider flex-1" aria-hidden="true"/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: copy ─────────────────────────────────────── */}
          <div>
            <p className="tech-tag mb-5 inline-block" style={{ background: "rgba(251,113,133,0.1)", color: "#FB7185", border: "1px solid rgba(251,113,133,0.25)" }}>
              Para empresas y marcas
            </p>
            <h2
              id="enterprise-heading"
              className="font-heading font-extrabold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "#F5F3FF" }}
            >
              Soluciones creativas{" "}
              <span className="gradient-text-coral-gold">para empresas</span>
            </h2>
            <p className="text-[#8B879E] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Producción creativa para eventos, campañas, equipos y marcas. Diseñamos y producimos lo que tu empresa necesita — desde pocas piezas hasta miles.
            </p>

            {/* Production scale visual */}
            <Reveal animation="fade" className="mb-8">
              <div
                className="rounded-2xl p-6"
                style={{ background: "rgba(251,113,133,0.07)", border: "1px solid rgba(251,113,133,0.15)" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: "#FB7185" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-glow-breathe" aria-hidden="true"/>
                  Escala de producción
                </p>
                <div className="flex flex-col gap-4">
                  {SCALE_STEPS.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <span className="text-xs font-mono w-16 flex-shrink-0" style={{ color: "#FDA4AF" }}>{step.label}</span>
                      <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <div
                          className="scale-bar scale-bar-animated h-full rounded-full"
                          style={{ width: step.w, "--child-index": i } as CSSProperties}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-xs font-bold w-12 text-right" style={{ color: "#FDA4AF" }}>{step.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Services checklist */}
            <ul className="flex flex-col gap-2.5 mb-8" role="list">
              {ENTERPRISE_SERVICES.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle size={17} className="flex-shrink-0 mt-0.5" style={{ color: "#FB7185" }} aria-hidden="true"/>
                  <span className="text-[#C8C4D6] text-sm leading-snug">{s}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink("Hola, me interesa una cotización para soluciones empresariales con MatrixLab Intelligence.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base min-h-[52px]"
              aria-label="Cotizar solución empresarial por WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar solución empresarial
            </a>
          </div>

          {/* ── Right: metrics + T-Shirt Lab card ──────────────── */}
          <div className="flex flex-col gap-5">

            {/* Metrics grid */}
            <Reveal animation="up">
              <div className="grid grid-cols-2 gap-3">
                {METRICS.map((m, i) => (
                  <div
                    key={m.label}
                    className="reveal-child card-shimmer glow-hover-coral relative rounded-2xl p-5 sm:p-6 text-center overflow-hidden"
                    style={{
                      background:      "rgba(251,113,133,0.07)",
                      border:          "1px solid rgba(251,113,133,0.15)",
                      "--child-index": i,
                    } as CSSProperties}
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-px"
                         style={{ background: `linear-gradient(90deg, transparent, ${m.accent}60, transparent)` }}
                         aria-hidden="true"/>
                    <p className="font-heading font-extrabold text-2xl" style={{ color: m.accent }}>{m.value}</p>
                    <p className="text-xs text-[#8B879E] mt-1 leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Empresas carousel — shown when images exist */}
            {CAROUSELS.empresas.length > 0 && (
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(251,113,133,0.2)", height: "200px" }}
              >
                <ImageCarousel
                  images={CAROUSELS.empresas}
                  alt="Soluciones empresariales MatrixLab"
                  className="rounded-2xl"
                />
              </div>
            )}

            {/* T-Shirt Lab featured card */}
            <div
              className="card-shimmer glow-hover-coral rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(190,18,60,0.28) 0%, rgba(251,113,133,0.08) 100%)",
                border:     "1px solid rgba(251,113,133,0.28)",
              }}
            >
              {/* Glow corner */}
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                   style={{ background: "rgba(251,113,133,0.2)" }} aria-hidden="true"/>

              {/* Top edge accent */}
              <div className="absolute top-0 left-0 right-0 h-px"
                   style={{ background: "linear-gradient(90deg, transparent, rgba(251,113,133,0.7), transparent)" }}
                   aria-hidden="true"/>

              <div className="relative z-10">
                <p className="tech-tag inline-block mb-4" style={{ background: "rgba(251,113,133,0.15)", color: "#FDA4AF", border: "1px solid rgba(253,164,175,0.28)" }}>
                  Servicio destacado
                </p>
                <h3 className="font-heading font-extrabold text-2xl text-[#F5F3FF] mb-3">
                  T-Shirt Lab
                </h3>
                <p className="text-[#8B879E] text-sm leading-relaxed mb-5">
                  Producción de playeras personalizadas en tiempo real durante tu evento corporativo. Alta velocidad. Diseño incluido.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Eventos", "Alta velocidad", "Diseño incluido", "Desde 20 pzs"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full font-semibold"
                          style={{ background: "rgba(251,113,133,0.12)", color: "#FDA4AF", border: "1px solid rgba(253,164,175,0.18)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

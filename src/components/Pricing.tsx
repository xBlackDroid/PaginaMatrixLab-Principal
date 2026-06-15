import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    desc: "Perfect for individuals and small experiments.",
    cta: "Get started",
    ctaVariant: "outline" as const,
    features: [
      "Up to 100K API calls/mo",
      "3 pipeline projects",
      "Community support",
      "Basic analytics",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    desc: "For growing teams that need more scale and control.",
    cta: "Start free trial",
    ctaVariant: "default" as const,
    features: [
      "10M API calls/mo",
      "Unlimited pipelines",
      "Priority support",
      "Advanced analytics",
      "Custom model fine-tuning",
      "SSO & team management",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Dedicated infrastructure, SLAs, and white-glove onboarding.",
    cta: "Contact sales",
    ctaVariant: "outline" as const,
    features: [
      "Unlimited API calls",
      "On-prem / VPC deploy",
      "Dedicated support team",
      "Custom SLA (99.99%)",
      "Audit logs & compliance",
      "Custom contracts",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 flex flex-col gap-5 transition-all duration-200 ${
                p.popular
                  ? "glass-strong border-brand/40 shadow-lg shadow-brand/10"
                  : "glass"
              }`}
            >
              {p.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-[#0F172A] text-xs font-bold px-4 py-1">
                  Most popular
                </Badge>
              )}
              <div>
                <h3 className="text-foreground font-semibold text-lg">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-foreground">{p.price}</span>
                {p.period && <span className="text-muted-foreground mb-1">{p.period}</span>}
              </div>
              <Button
                variant={p.ctaVariant}
                className={`w-full h-11 font-semibold cursor-pointer ${
                  p.ctaVariant === "default"
                    ? "bg-brand text-[#0F172A] hover:bg-brand/90"
                    : "border-white/15 text-foreground hover:bg-white/5"
                }`}
              >
                {p.cta}
              </Button>
              <ul className="flex flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "10M+", label: "API calls daily" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "2,400+", label: "Teams worldwide" },
  { value: "< 50ms", label: "Avg. latency" },
];

const testimonials = [
  {
    quote:
      "MatrixLab cut our model deployment time from weeks to hours. The pipeline builder is genuinely brilliant.",
    name: "Sarah Chen",
    title: "Head of ML, Verda Systems",
    initials: "SC",
    color: "bg-brand/20 text-brand",
  },
  {
    quote:
      "We replaced three separate tools with MatrixLab and our infra costs dropped by 40%. Remarkable ROI.",
    name: "James Okafor",
    title: "CTO, Nexbridge",
    initials: "JO",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    quote:
      "The real-time analytics dashboard gives our data team superpowers. It's the best product we've adopted this year.",
    name: "Priya Nair",
    title: "VP Engineering, Lumena",
    initials: "PN",
    color: "bg-purple-500/20 text-purple-400",
  },
];

export function SocialProof() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-brand mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Loved by engineering teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 flex flex-col gap-4">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand/40" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-foreground/90 text-sm leading-relaxed flex-1">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

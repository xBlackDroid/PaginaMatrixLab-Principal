import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative glass-strong rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-blue-500/10 pointer-events-none" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to build the{" "}
              <span className="text-brand">future</span>?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join 2,400+ teams already shipping smarter with MatrixLab Intelligence. Start free,
              no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-brand text-[#0F172A] hover:bg-brand/90 font-semibold px-10 h-12 cursor-pointer"
              >
                Start building for free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 text-foreground hover:bg-white/5 px-8 h-12 cursor-pointer"
              >
                Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

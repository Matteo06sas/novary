import { ArrowUpRight, Mail } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section id="contact" className="bg-[#050506] py-28">
      <div className="section-shell">
        <FadeIn className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-8 text-center shadow-[0_36px_140px_rgba(0,0,0,0.5)] sm:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(109,74,255,0.18),transparent_38%)]" />
          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
              <Mail aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mx-auto mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] text-foreground sm:text-6xl">
              Costruiamo una presenza digitale che sembri davvero premium.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Raccontaci cosa vuoi migliorare: sito web, e-commerce,
              prenotazioni o automazioni. Ti aiutiamo a capire priorità,
              investimento e prossimo passo.
            </p>
            <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
              {["Analisi iniziale", "Stima chiara", "Direzione concreta"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-black shadow-none hover:bg-white/90">
                <a href="/consulenza">
                  Richiedi una consulenza
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#work">Guarda i case study</a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

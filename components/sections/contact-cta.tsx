import { ArrowUpRight, Mail } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section id="contact" className="bg-[#050505] py-24">
      <div className="section-shell">
        <FadeIn className="mx-auto max-w-4xl rounded-lg border border-white/10 bg-white/[0.035] p-8 text-center shadow-[0_24px_120px_rgba(0,0,0,0.45)] sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
            <Mail aria-hidden="true" className="h-5 w-5" />
          </div>
          <h2 className="mt-7 text-balance text-4xl font-semibold text-foreground sm:text-5xl">
            Parliamo del tuo progetto
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Raccontaci cosa vuoi migliorare: sito web, e-commerce o
            automazioni. Ti aiutiamo a capire priorità, investimento e prossimi
            passi con una consulenza gratuita.
          </p>
          <div className="mx-auto mt-7 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
            {["Analisi iniziale", "Stima chiara", "Prossimo passo concreto"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-black/30 px-4 py-3 text-sm text-muted-foreground"
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:hello@novary.dev?subject=Consulenza%20gratuita%20Novary">
                Richiedi una consulenza gratuita
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#services">Scopri i servizi</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

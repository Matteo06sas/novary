import { ArrowUpRight, Mail } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section id="contact" className="bg-background py-28">
      <div className="section-shell">
        <FadeIn className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-8 text-center shadow-[0_36px_140px_rgba(0,0,0,0.5)] sm:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(var(--glow)/0.16),transparent_42%)]" />
          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-[transform,border-color,background-color] duration-300 ease-out-expo hover:scale-110 hover:border-primary/40 hover:bg-primary/[0.18]">
              <Mail aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mx-auto mt-7 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl">
              Costruiamo una presenza digitale che sembri davvero premium.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Raccontaci cosa vuoi migliorare: sito web, e-commerce,
              prenotazioni o automazioni. Ti aiutiamo a capire priorità,
              investimento e prossimo passo.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group bg-white text-black shadow-none hover:bg-white/90"
              >
                <a href="/consulenza">
                  Richiedi una consulenza
                  <ArrowUpRight
                    aria-hidden="true"
                    className="transition-transform duration-150 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#work">Vedi i case study</a>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground/60">
              Rispondo entro 24/48 ore lavorative.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

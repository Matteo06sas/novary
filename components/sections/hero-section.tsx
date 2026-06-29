import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "Velocità", label: "siti rapidi e fluidi" },
  { value: "Chiarezza", label: "percorsi pensati per convertire" },
  { value: "Crescita", label: "presenza digitale orientata ai risultati" }
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <Image
        src="/novary-hero-interface.png"
        alt="Interfaccia software premium in stile scuro con pannelli di controllo e dettagli blu elettrico"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center opacity-75"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-b from-transparent to-background" />

      <div className="section-shell flex min-h-[calc(100svh-9rem)] items-center py-14 sm:py-24">
        <div className="max-w-4xl">
          <FadeIn>
            <Badge>
              <Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
              Novary - novary.dev
            </Badge>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
              Creiamo siti web moderni che fanno crescere il tuo business.
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Novary realizza siti web veloci, eleganti e ottimizzati per
              trasformare i visitatori in clienti.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="mailto:hello@novary.dev?subject=Richiesta%20preventivo%20Novary">
                  Richiedi un preventivo
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#work">Scopri i nostri lavori</a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <dl className="mt-12 hidden max-w-2xl grid-cols-1 gap-5 border-t border-white/10 pt-6 sm:grid sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-sm leading-6 text-muted-foreground">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 text-xl font-semibold text-foreground">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

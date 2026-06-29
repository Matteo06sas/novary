import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "Siti web", label: "esperienze veloci, eleganti e credibili" },
  { value: "E-commerce", label: "percorsi di acquisto chiari e scalabili" },
  { value: "AI", label: "automazioni pratiche per contatti e processi" }
];

const assurances = [
  "Consulenza iniziale gratuita",
  "Preventivo chiaro e senza impegno",
  "Strategia pensata per clienti locali"
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
        className="absolute inset-0 -z-20 object-cover object-[68%_center] opacity-45 sm:opacity-80"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_38%,rgba(0,122,255,0.18),transparent_34%),linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/0.96)_34%,hsl(var(--background)/0.58)_72%,hsl(var(--background)/0.2)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-background/55 sm:bg-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="section-shell flex min-h-[calc(100svh-5rem)] items-center py-12 sm:py-24">
        <div className="max-w-4xl">
          <FadeIn>
            <Badge>
              <Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
              Studio digitale per aziende ambiziose
            </Badge>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[1.04] text-foreground sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
              Creiamo siti web moderni che fanno crescere il tuo business.
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground sm:mt-6 sm:text-xl">
              Novary realizza siti web veloci, eleganti e ottimizzati per
              trasformare i visitatori in clienti.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-7 max-w-2xl rounded-lg border border-white/10 bg-black/45 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:mt-9">
              <div className="flex flex-col gap-3 md:flex-row">
                <Button asChild size="lg" className="md:flex-1">
                  <a href="mailto:hello@novary.dev?subject=Richiesta%20preventivo%20Novary">
                    Richiedi un preventivo
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="md:flex-1">
                  <a href="#work">Scopri i nostri lavori</a>
                </Button>
              </div>
              <ul className="mt-4 grid gap-2 px-1 text-sm text-muted-foreground md:grid-cols-3">
                {assurances.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 flex-none text-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <dl className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 md:mt-10">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-4 backdrop-blur"
                >
                  <dt className="text-xl font-semibold text-foreground">
                    {metric.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                    {metric.label}
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

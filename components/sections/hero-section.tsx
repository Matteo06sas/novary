import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { NovaryLogo } from "@/components/novary-logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "Design", label: "interfacce essenziali, premium e memorabili" },
  { value: "Sviluppo", label: "prodotti veloci, solidi e responsive" },
  { value: "Strategia", label: "percorsi pensati per generare fiducia" }
];

const assurances = [
  "Consulenza iniziale gratuita",
  "Direzione visiva su misura",
  "Sviluppo curato nei dettagli"
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-background">
      <div className="absolute inset-0 -z-20 premium-glow" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_36%,rgba(0,0,0,0.45)_100%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="section-shell grid min-h-[calc(100svh-4.5rem)] gap-12 py-16 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:py-24">
        <div className="max-w-5xl">
          <FadeIn>
            <Badge className="border-primary/25 bg-primary/10 text-primary shadow-[0_0_30px_rgba(109,74,255,0.16)]">
              <Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
              Premium digital product studio
            </Badge>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Prodotti digitali che sembrano costosi, perché sono curati.
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Novary progetta siti web, e-commerce e interfacce digitali con
              estetica premium, performance solide e un percorso chiaro verso il
              contatto o la vendita.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-black shadow-[0_0_44px_rgba(255,255,255,0.12)] hover:bg-white/90">
                <a href="/consulenza">
                  Richiedi una consulenza
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#work">Vedi i case study</a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.32}>
            <ul className="mt-8 grid max-w-3xl gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {assurances.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="h-4 w-4 flex-none text-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.18} className="lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.52)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(109,74,255,0.2),transparent_34%)]" />
            <div className="relative rounded-lg border border-white/10 bg-black/55 p-8">
              <div className="grid place-items-center px-2">
                <NovaryLogo
                  variant="lockup"
                  className="w-full max-w-[340px]"
                  priority
                />
              </div>
              <div className="mt-8 grid gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.value}
                    className="rounded-lg border border-white/10 bg-white/[0.035] p-4 transition-colors hover:bg-white/[0.06]"
                  >
                    <p className="text-lg font-semibold text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

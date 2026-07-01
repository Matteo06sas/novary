import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { HeroCard } from "@/components/hero-card";
import { HeroIntroProvider, HeroMarkReveal, HeroReveal } from "@/components/hero-intro";
import { NovaryLogo } from "@/components/novary-logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "Design", label: "Interfacce essenziali, premium e memorabili" },
  { value: "Sviluppo", label: "Prodotti veloci, solidi e responsive" },
  { value: "Strategia", label: "Percorsi pensati per generare fiducia" }
];

const assurances = [
  "Consulenza gratuita",
  "Direzione su misura",
  "Sviluppo curato"
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-background">
      <div className="absolute inset-0 -z-20 premium-glow" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,transparent_36%,rgba(0,0,0,0.45)_100%)]" />
      <div className="absolute left-1/4 top-20 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/14 blur-[96px]" />
      <div className="absolute right-0 top-32 -z-10 h-[22rem] w-[22rem] rounded-full bg-primary/6 blur-[80px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="section-shell grid min-h-[100dvh] gap-12 py-16 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:py-24">
        <HeroIntroProvider>
          {/* Left: 4 elements max */}
          <div className="max-w-5xl">
            <HeroMarkReveal className="mb-6 h-10 w-auto sm:h-12" />

            <HeroReveal delay={0.42}>
              <Badge className="border-primary/25 bg-primary/10 text-primary shadow-[0_0_30px_rgb(var(--glow)/0.18)]">
                <Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
                Premium digital product studio
              </Badge>
            </HeroReveal>

            <HeroReveal delay={0.5}>
              <h1 className="mt-7 max-w-5xl text-balance text-5xl font-semibold leading-[0.96] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                Noi costruiamo il prodotto. Il cliente percepisce il{" "}
                <span className="text-shimmer">brand.</span>
              </h1>
            </HeroReveal>

            <HeroReveal delay={0.58}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Novary progetta siti web, e-commerce e interfacce digitali con
                estetica premium, performance solide e percorsi chiari verso il
                contatto o la vendita.
              </p>
            </HeroReveal>

            <HeroReveal delay={0.66}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group bg-white text-black shadow-[0_0_44px_rgba(255,255,255,0.14)] hover:bg-white/90"
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
            </HeroReveal>
          </div>

          {/* Right: card with metrics + assurances */}
          <HeroReveal delay={0.5} className="lg:justify-self-end">
            <HeroCard>
              <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgb(var(--glow)/0.22),transparent_40%)]" />
                <div className="relative rounded-lg border border-white/10 bg-black/60 p-8">
                  <div className="grid place-items-center px-2">
                    <NovaryLogo
                      variant="lockup"
                      className="w-full max-w-[340px]"
                      priority
                    />
                  </div>
                  <div className="mt-8 grid gap-2">
                    {metrics.map((metric) => (
                      <div
                        key={metric.value}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3.5 transition-[border-color,background-color] duration-150 ease-out-expo hover:border-primary/20 hover:bg-white/[0.06]"
                      >
                        <p className="text-sm font-semibold text-foreground">
                          {metric.value}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <ul className="grid grid-cols-3 gap-2">
                      {assurances.map((item) => (
                        <li
                          key={item}
                          className="flex flex-col items-center gap-1.5 text-center"
                        >
                          <CheckCircle2
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-primary"
                          />
                          <span className="text-[11px] leading-4 text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </HeroCard>
          </HeroReveal>
        </HeroIntroProvider>
      </div>
    </section>
  );
}

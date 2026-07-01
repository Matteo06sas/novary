"use client";

import { ArrowUpRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { NovaryLogo } from "@/components/novary-logo";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const promoFrames = [
  {
    time: "00–05",
    eyebrow: "Hook",
    title: "Il sito non è una vetrina.",
    copy: "È il primo momento in cui un cliente decide se fidarsi del tuo brand.",
    progress: "18%"
  },
  {
    time: "06–15",
    eyebrow: "Problema",
    title: "Molte attività sembrano meno forti di quello che sono.",
    copy: "Layout confusi, percorsi lenti e messaggi poco chiari fanno perdere valore prima del contatto.",
    progress: "38%"
  },
  {
    time: "16–32",
    eyebrow: "Soluzione",
    title: "Novary costruisce esperienze digitali premium.",
    copy: "Siti, e-commerce, piattaforme SaaS e automazioni AI pensati per essere belli, veloci e commercialmente utili.",
    progress: "68%"
  },
  {
    time: "33–45",
    eyebrow: "CTA",
    title: "Trasforma la percezione del tuo brand.",
    copy: "Un prodotto digitale curato comunica fiducia ancora prima della prima call.",
    progress: "100%"
  }
];

const productionPillars = [
  "Design minimale e memorabile",
  "Percorsi chiari verso contatto o vendita",
  "Sviluppo performante e responsive"
];

export function PromoVideoSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="promo"
      className="relative isolate overflow-hidden border-b border-white/10 bg-background py-24 sm:py-28"
    >
      <div className="absolute inset-0 -z-20 surface-grid opacity-40" />
      <div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/[0.035] to-transparent" />

      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHeading
            eyebrow="Video promo"
            title="Un manifesto breve per vendere Novary in 45 secondi."
          >
            Una sezione pensata come anteprima video: ritmo, messaggio e call to
            action sono già pronti per essere registrati come reel, spot o hero
            animation del sito.
          </SectionHeading>

          <FadeIn className="lg:justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/50 px-4 py-3">
                <Badge className="border-primary/25 bg-primary/10 text-primary">
                  <Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
                  Premium ad concept
                </Badge>
                <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  45s / Novary
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <FadeIn>
            <div className="group relative min-h-[560px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080809] shadow-[0_44px_160px_rgba(0,0,0,0.65)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgb(var(--glow)/0.2),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_42%)]" />
              <div className="absolute inset-x-8 top-8 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black">
                    <Play aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-foreground">
                    Novary spot
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">00:00 / 00:45</span>
              </div>

              <div className="relative flex min-h-[560px] flex-col justify-end p-8 pt-28 sm:p-10 sm:pt-32">
                <motion.div
                  aria-hidden="true"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { y: [0, -8, 0], opacity: [0.78, 1, 0.78] }
                  }
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-8 top-32 w-[72%] max-w-[420px] rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:left-10"
                >
                  <NovaryLogo variant="lockup" className="w-44" />
                  <div className="mt-7 grid gap-3">
                    {productionPillars.map((pillar, index) => (
                      <div
                        key={pillar}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/35 px-3 py-2.5"
                      >
                        <CheckCircle2
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-primary"
                        />
                        <span className="text-sm text-muted-foreground">{pillar}</span>
                        <span
                          className={cn(
                            "ml-auto h-1.5 rounded-full bg-primary/80",
                            index === 0 && "w-14",
                            index === 1 && "w-20",
                            index === 2 && "w-16"
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  aria-hidden="true"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { x: [0, 10, 0], rotate: [0, 0.35, 0] }
                  }
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-40 right-7 hidden w-56 rounded-2xl border border-white/10 bg-white text-black shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:block"
                >
                  <div className="border-b border-black/10 p-4">
                    <div className="h-2 w-20 rounded-full bg-black/80" />
                    <div className="mt-2 h-1.5 w-28 rounded-full bg-black/20" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <div className="h-16 rounded-xl bg-black" />
                    <div className="h-16 rounded-xl bg-black/10" />
                    <div className="col-span-2 h-8 rounded-full bg-primary" />
                  </div>
                </motion.div>

                <div className="relative z-10 max-w-xl">
                  <Badge className="border-white/10 bg-white/10 text-foreground shadow-none">
                    Voce narrante
                  </Badge>
                  <h3 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl">
                    Non vendere solo un sito. Vendi una percezione migliore.
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                    “Novary crea prodotti digitali che fanno sembrare il tuo brand
                    più chiaro, più curato e più affidabile dal primo secondo.”
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      className="group bg-white text-black hover:bg-white/90"
                    >
                      <a href="/consulenza">
                        Richiedi una consulenza
                        <ArrowUpRight
                          aria-hidden="true"
                          className="transition-transform duration-150 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="#work">Vedi i case study</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-3">
            {promoFrames.map((frame) => (
              <StaggerItem key={frame.time}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-[border-color,background-color,transform] duration-200 ease-out-expo hover:-translate-y-0.5 hover:border-primary/25 hover:bg-white/[0.055]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-primary">
                        {frame.eyebrow}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">
                        {frame.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-muted-foreground">
                      {frame.time}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {frame.copy}
                  </p>
                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-500 ease-out-expo group-hover:bg-[rgb(var(--accent-hover))]"
                      style={{ width: frame.progress }}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

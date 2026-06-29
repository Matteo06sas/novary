import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Code2,
  MonitorSmartphone,
  PhoneOff,
  Scissors,
  ShieldCheck,
  Sparkles,
  UserRound,
  Workflow
} from "lucide-react";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { CutlyBookingDemo } from "@/components/portfolio/cutly-booking-demo";
import { ProjectLogo } from "@/components/project-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cutly - concept prenotazioni per saloni e barbieri",
  description:
    "Cutly e un concept Novary per una prenotazione premium dedicata a saloni, barbieri e parrucchieri.",
  alternates: {
    canonical: "/portfolio/cutly"
  },
  openGraph: {
    title: "Cutly - concept prenotazioni per saloni e barbieri",
    description:
      "Un flusso moderno per registrarsi, scegliere servizio, professionista, giorno e orario.",
    url: "https://novary.dev/portfolio/cutly",
    siteName: "Novary",
    locale: "it_IT",
    type: "website"
  }
};

const features = [
  {
    icon: UserRound,
    title: "Registrazione rapida",
    text: "Un profilo cliente essenziale con nome, email e telefono, pensato per non interrompere la prenotazione da mobile."
  },
  {
    icon: Scissors,
    title: "Servizi chiari",
    text: "Trattamenti ordinati con durata e prezzo indicativo, cosi il cliente capisce subito cosa sta prenotando."
  },
  {
    icon: CalendarCheck2,
    title: "Agenda leggibile",
    text: "Giorni e fasce orarie disponibili in una vista compatta, utile per scegliere senza telefonate o messaggi."
  },
  {
    icon: ShieldCheck,
    title: "Conferma pulita",
    text: "Riepilogo finale con cliente, servizio, professionista, data e ora prima dell'invio della richiesta."
  }
];

const technologies = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Componenti riutilizzabili",
  "Stato locale React",
  "Design adattivo",
  "Demo senza server"
];

const outcomes = [
  "Meno chiamate per richieste ripetitive",
  "Prenotazioni piu ordinate per il team",
  "Esperienza cliente premium da smartphone",
  "Percorso chiaro dalla scelta alla conferma"
];

const mockupItems = [
  { label: "Servizio", value: "Taglio Uomo", icon: Scissors },
  { label: "Professionista", value: "Luca", icon: UserRound },
  { label: "Orario", value: "Mer 10 luglio, 11:00", icon: Clock3 }
];

const overview = [
  ["Tipo", "Piattaforma prenotazioni"],
  ["Settore", "Saloni e barber shop"],
  ["Focus", "Prenotazione mobile-first"],
  ["Stato", "Portfolio concept"]
];

const developmentSteps = [
  "Mappatura del flusso cliente: registrazione, servizio, professionista, disponibilita e conferma.",
  "Definizione di card e controlli pensati per uso rapido da smartphone.",
  "Prototipo interattivo con stato locale e transizioni leggere.",
  "Rifinitura visiva per rendere il prodotto piu premium e ridurre attrito."
];

export default function CutlyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#070605] text-white">
        <HeroSection />
        <OverviewSection />
        <ProblemSolutionSection />
        <FeatureSection />
        <ScreensSection />
        <BookingSection />
        <DevelopmentProcessSection />
        <TechSection />
        <ProjectCta />
      </main>
      <SiteFooter />
    </>
  );
}

function OverviewSection() {
  return (
    <section className="border-b border-white/10 py-16 sm:py-20">
      <div className="section-shell">
        <FadeIn className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-4 sm:p-5">
          {overview.map(([label, value]) => (
            <div key={label} className="rounded-md bg-black/20 p-4">
              <p className="text-xs uppercase text-white/40">{label}</p>
              <p className="mt-2 text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#070605]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_22%,rgba(216,191,139,0.18),transparent_28%),radial-gradient(circle_at_15%_12%,rgba(110,160,145,0.13),transparent_32%),linear-gradient(180deg,#11100e_0%,#070605_72%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-b from-transparent to-[#070605]" />

      <div className="section-shell py-10 sm:py-16 lg:py-20">
        <FadeIn>
          <Button
            asChild
            variant="ghost"
            className="-ml-3 text-white/60 hover:text-white"
          >
            <Link href="/#work">
              <ArrowLeft aria-hidden="true" />
              Torna al portfolio
            </Link>
          </Button>
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div>
            <FadeIn>
              <Badge className="border-[#d8bf8b]/25 bg-[#d8bf8b]/10 text-[#f5dfad] shadow-none">
                <Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
                Portfolio concept
              </Badge>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Cutly
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                Una web app minimale per saloni, barbieri e parrucchieri:
                account cliente, servizio, professionista, giorno, orario e
                conferma in un flusso fluido da smartphone.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#d8bf8b] text-black shadow-none hover:bg-[#ead7ad]"
                >
                  <a href="#demo">
                    Prova la demo
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/10 bg-white/[0.035]"
                >
                  <a href="/consulenza">
                    Parla con Novary
                  </a>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.32}>
              <p className="mt-7 max-w-2xl text-sm leading-6 text-white/50">
                Concept creato da Novary per mostrare una possibile esperienza
                digitale premium. Non rappresenta un cliente reale.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <CutlyHeroMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CutlyHeroMockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[420px] rounded-lg border border-white/10 bg-[#0c0b0a] p-3 shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
      aria-label="Anteprima dell'interfaccia Cutly"
    >
      <div className="rounded-lg border border-white/10 bg-[#15110c] p-4">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <ProjectLogo variant="cutly" size="md" />
            <p className="mt-4 text-xl font-semibold text-white">
              Prenota il tuo orario
            </p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#d8bf8b] text-black">
            <Scissors aria-hidden="true" className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {mockupItems.map(({ label, value, icon: Icon }) => (
            <div
              key={String(label)}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#d8bf8b]/10 text-[#d8bf8b]">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-white/40">{label}</p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg bg-[#f3ead8] p-4 text-black">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Conferma prenotazione</p>
              <p className="mt-1 text-xs text-black/60">
                Riepilogo pronto per il salone
              </p>
            </div>
            <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-2">
          <FadeIn className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-red-300/20 bg-red-300/10 text-red-100">
              <PhoneOff aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white">Problema</h2>
            <p className="mt-4 text-base leading-7 text-white/60">
              Molti saloni gestiscono prenotazioni tra telefonate, messaggi e
              agenda manuale. Il risultato e un flusso frammentato: richieste
              ripetitive, dati incompleti, orari da ricontrollare e clienti che
              aspettano una risposta.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="rounded-lg border border-[#d8bf8b]/20 bg-[#d8bf8b]/[0.06] p-6 sm:p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#d8bf8b]/25 bg-[#d8bf8b]/10 text-[#d8bf8b]">
              <Workflow aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white">Soluzione</h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Cutly concentra la prenotazione in un percorso guidato e
              pensato per smartphone. Il cliente crea il profilo, sceglie trattamento,
              professionista, giorno e ora, poi conferma tutto in modo chiaro.
              Il salone riceve una richiesta piu ordinata e pronta da gestire.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-24">
      <div className="section-shell">
        <FadeIn className="max-w-3xl">
          <Badge className="border-white/10 bg-white/[0.035] text-white/60 shadow-none">
            Funzionalita principali
          </Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Un prodotto semplice per chi prenota e pratico per chi lavora in
            salone.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg">
            Il concept e pensato per ridurre attriti operativi, mantenendo una
            percezione premium in ogni passaggio.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <StaggerItem key={feature.title}>
                <div className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-5 transition-colors hover:bg-white/[0.055]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d8bf8b]/10 text-[#d8bf8b]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {feature.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <FadeIn
              key={item}
              className="rounded-lg border border-white/10 bg-[#11100e] px-4 py-3 text-sm font-medium text-white/70"
            >
              {item}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="demo" className="border-b border-white/10 py-20 sm:py-24">
      <div className="section-shell">
        <FadeIn className="max-w-3xl">
          <Badge className="border-[#d8bf8b]/25 bg-[#d8bf8b]/10 text-[#f5dfad] shadow-none">
            Demo prenotazione
          </Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Prova il flusso di prenotazione.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg">
            La demo usa stato locale React: nessun server, nessun dato reale,
            solo un prototipo interattivo per mostrare l&apos;esperienza.
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10">
          <CutlyBookingDemo />
        </FadeIn>
      </div>
    </section>
  );
}

function ScreensSection() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-24">
      <div className="section-shell">
        <FadeIn className="max-w-3xl">
          <Badge className="border-white/10 bg-white/[0.035] text-white/60 shadow-none">
            Schermate chiave
          </Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ogni passaggio e progettato per essere leggibile in pochi secondi.
          </h2>
        </FadeIn>
        <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-3">
          {["Profilo cliente", "Scelta orario", "Riepilogo finale"].map(
            (item, index) => (
              <StaggerItem key={item}>
                <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="rounded-lg border border-white/10 bg-[#120f0b] p-4">
                    <div className="h-2 w-20 rounded-sm bg-[#d8bf8b]" />
                    <div className="mt-5 grid gap-2">
                      {Array.from({ length: 4 }).map((_, lineIndex) => (
                        <div
                          key={`${item}-${lineIndex}`}
                          className="rounded-md border border-white/10 bg-white/[0.04] p-3"
                        >
                          <div
                            className="h-2 rounded-sm bg-white/20"
                            style={{ width: `${44 + index * 10 + lineIndex * 8}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-semibold text-white">{item}</p>
                </div>
              </StaggerItem>
            )
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}

function DevelopmentProcessSection() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <FadeIn>
            <Badge className="border-white/10 bg-white/[0.035] text-white/60 shadow-none">
              Processo di sviluppo
            </Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Dal problema operativo a un flusso di prenotazione chiaro.
            </h2>
          </FadeIn>
          <StaggerContainer className="grid gap-3">
            {developmentSteps.map((item, index) => (
              <StaggerItem key={item}>
                <div className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:grid-cols-[3rem_1fr]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#d8bf8b] text-sm font-semibold text-black">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/70">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

function TechSection() {
  return (
    <section className="border-b border-white/10 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <FadeIn>
            <Badge className="border-white/10 bg-white/[0.035] text-white/60 shadow-none">
              Tecnologie
            </Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Tecnologie usate per il concept.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg">
              Una base moderna e leggera, adatta a evolvere in un prodotto
              completo con autenticazione, gestione agenda e pannello salone.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-3 sm:grid-cols-2">
            {technologies.map((item) => (
              <StaggerItem key={item}>
                <div className="flex min-h-16 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-white/[0.06] text-[#d8bf8b]">
                    <Code2 aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-white/75">
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

function ProjectCta() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-shell">
        <FadeIn className="rounded-lg border border-[#d8bf8b]/20 bg-[#d8bf8b]/[0.06] p-6 text-center sm:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#d8bf8b] text-black">
            <MonitorSmartphone aria-hidden="true" className="h-5 w-5" />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-semibold text-white sm:text-4xl">
            Vuoi una piattaforma di prenotazione per la tua attività?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Novary può progettare un&apos;esperienza su misura per ridurre le
            chiamate, semplificare le prenotazioni e dare ai clienti un percorso
            digitale più elegante.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#d8bf8b] text-black shadow-none hover:bg-[#ead7ad]"
            >
              <a href="/consulenza">
                Contatta Novary
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/10 bg-white/[0.035]"
            >
              <Link href="/#work">Guarda altri concept</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

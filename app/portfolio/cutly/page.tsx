import type { Metadata } from "next";
import {
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Code2,
  PhoneOff,
  Scissors,
  ShieldCheck,
  UserRound,
  Workflow
} from "lucide-react";

import { CutlyBookingDemo } from "@/components/portfolio/cutly-booking-demo";
import {
  CaseStudyHero,
  CaseStudyShell,
  DemoSection,
  FeatureGrid,
  OverviewGrid,
  ProblemSolution,
  ProcessSteps,
  ProjectCta,
  ScreensShowcase,
  TechGrid,
  type CaseStudyFeature
} from "@/components/portfolio/case-study/sections";
import { cutlyTheme } from "@/components/portfolio/case-study/theme";
import { ProjectLogo } from "@/components/project-logo";

export const metadata: Metadata = {
  title: "Cutly - concept prenotazioni per saloni e barbieri",
  description:
    "Cutly è un concept Novary per una prenotazione premium dedicata a saloni, barbieri e parrucchieri.",
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

const features: CaseStudyFeature[] = [
  {
    icon: UserRound,
    title: "Registrazione rapida",
    text: "Un profilo cliente essenziale con nome, email e telefono, pensato per non interrompere la prenotazione da mobile."
  },
  {
    icon: Scissors,
    title: "Servizi chiari",
    text: "Trattamenti ordinati con durata e prezzo indicativo, così il cliente capisce subito cosa sta prenotando."
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
  "Prenotazioni più ordinate per il team",
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
] as const;

const developmentSteps = [
  "Mappatura del flusso cliente: registrazione, servizio, professionista, disponibilità e conferma.",
  "Definizione di card e controlli pensati per uso rapido da smartphone.",
  "Prototipo interattivo con stato locale e transizioni leggere.",
  "Rifinitura visiva per rendere il prodotto più premium e ridurre attrito."
];

export default function CutlyPage() {
  return (
    <CaseStudyShell theme={cutlyTheme}>
      <CaseStudyHero
        theme={cutlyTheme}
        eyebrow="Portfolio concept"
        title="Cutly"
        lead="Una web app minimale per saloni, barbieri e parrucchieri: account cliente, servizio, professionista, giorno, orario e conferma in un flusso fluido da smartphone."
        disclaimer="Concept creato da Novary per mostrare una possibile esperienza digitale premium. Non rappresenta un cliente reale."
        primaryCta={{ label: "Prova la demo", href: "#demo" }}
        sectionClassName="bg-[#070605]"
        mockup={<CutlyHeroMockup />}
        backdrop={
          <>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_22%,rgba(216,191,139,0.18),transparent_28%),radial-gradient(circle_at_15%_12%,rgba(110,160,145,0.13),transparent_32%),linear-gradient(180deg,#11100e_0%,#070605_72%)]" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-b from-transparent to-[#070605]" />
          </>
        }
      />

      <OverviewGrid theme={cutlyTheme} items={overview} />

      <ProblemSolution
        theme={cutlyTheme}
        problem={{
          icon: PhoneOff,
          text: "Molti saloni gestiscono prenotazioni tra telefonate, messaggi e agenda manuale. Il risultato è un flusso frammentato: richieste ripetitive, dati incompleti, orari da ricontrollare e clienti che aspettano una risposta."
        }}
        solution={{
          icon: Workflow,
          text: "Cutly concentra la prenotazione in un percorso guidato e pensato per smartphone. Il cliente crea il profilo, sceglie trattamento, professionista, giorno e ora, poi conferma tutto in modo chiaro. Il salone riceve una richiesta più ordinata e pronta da gestire."
        }}
      />

      <FeatureGrid
        theme={cutlyTheme}
        eyebrow="Funzionalità principali"
        title="Un prodotto semplice per chi prenota e pratico per chi lavora in salone."
        description="Il concept è pensato per ridurre attriti operativi, mantenendo una percezione premium in ogni passaggio."
        features={features}
        outcomes={outcomes}
      />

      <ScreensShowcase
        theme={cutlyTheme}
        title="Ogni passaggio è progettato per essere leggibile in pochi secondi."
        screens={["Profilo cliente", "Scelta orario", "Riepilogo finale"]}
      />

      <DemoSection
        theme={cutlyTheme}
        eyebrow="Demo prenotazione"
        accentEyebrow
        title="Prova il flusso di prenotazione."
        description="La demo usa stato locale React: nessun server, nessun dato reale, solo un prototipo interattivo per mostrare l'esperienza."
      >
        <CutlyBookingDemo />
      </DemoSection>

      <ProcessSteps
        theme={cutlyTheme}
        title="Dal problema operativo a un flusso di prenotazione chiaro."
        steps={developmentSteps}
      />

      <TechGrid
        theme={cutlyTheme}
        title="Tecnologie usate per il concept."
        description="Una base moderna e leggera, adatta a evolvere in un prodotto completo con autenticazione, gestione agenda e pannello salone."
        items={technologies}
        icon={Code2}
      />

      <ProjectCta
        theme={cutlyTheme}
        title="Vuoi una piattaforma di prenotazione per la tua attività?"
        description="Novary può progettare un'esperienza su misura per ridurre le chiamate, semplificare le prenotazioni e dare ai clienti un percorso digitale più elegante."
      />
    </CaseStudyShell>
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

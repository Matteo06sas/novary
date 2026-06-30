import type { Metadata } from "next";
import {
  Code2,
  Inbox,
  MessageSquareText,
  Network,
  ServerCog,
  ShieldQuestion,
  Sparkles,
  Tags,
  Workflow
} from "lucide-react";

import { AtlasTriageDemo } from "@/components/portfolio/atlas-triage-demo";
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
import { atlasTheme } from "@/components/portfolio/case-study/theme";
import { ProjectLogo } from "@/components/project-logo";

export const metadata: Metadata = {
  title: "Atlas - concept automazione AI per le richieste",
  description:
    "Atlas è un concept Novary per raccogliere, classificare e preparare risposte alle richieste in entrata, con revisione umana.",
  alternates: {
    canonical: "/portfolio/atlas"
  },
  openGraph: {
    title: "Atlas - concept automazione AI per le richieste",
    description:
      "Un flusso che qualifica lead e messaggi, assegna priorità e prepara bozze di risposta, lasciando la decisione finale a una persona.",
    url: "https://novary.dev/portfolio/atlas",
    siteName: "Novary",
    locale: "it_IT",
    type: "website"
  }
};

const features: CaseStudyFeature[] = [
  {
    icon: Inbox,
    title: "Raccolta multicanale",
    text: "Richieste da form, email e social riunite in una sola coda, senza saltare da una casella all'altra."
  },
  {
    icon: Tags,
    title: "Classificazione automatica",
    text: "Ogni messaggio viene etichettato per tipo — preventivo, supporto, collaborazione o spam — per arrivare alla persona giusta."
  },
  {
    icon: Workflow,
    title: "Priorità e sentiment",
    text: "Un segnale rapido su urgenza e tono aiuta a decidere cosa gestire prima, senza leggere tutto nel dettaglio."
  },
  {
    icon: MessageSquareText,
    title: "Bozze di risposta",
    text: "Una proposta di risposta già pronta accorcia i tempi: la persona la rivede, la rifinisce e invia."
  }
];

const technologies = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Regole di classificazione",
  "Stato locale React",
  "Pronto per API e modelli AI",
  "Demo senza server"
];

const outcomes = [
  "Tempi di risposta più rapidi",
  "Meno lavoro manuale ripetitivo",
  "Richieste sempre ordinate",
  "Nessun lead dimenticato"
];

const overview = [
  ["Tipo", "Automazione AI"],
  ["Settore", "Lead e supporto"],
  ["Focus", "Qualifica e smistamento"],
  ["Stato", "Portfolio concept"]
] as const;

const developmentSteps = [
  "Mappatura dei tipi di richiesta e dei canali da cui arrivano.",
  "Definizione di etichette, priorità e regole di smistamento.",
  "Prototipo di classificatore con logica locale e bozze di risposta.",
  "Interfaccia di revisione pensata per tenere la persona al centro."
];

export default function AtlasPage() {
  return (
    <CaseStudyShell theme={atlasTheme}>
      <CaseStudyHero
        theme={atlasTheme}
        eyebrow="Portfolio concept"
        title="Atlas"
        lead="Un concept di automazione che raccoglie le richieste in entrata, le classifica per tipo, priorità e sentiment e prepara una bozza di risposta — lasciando sempre la decisione finale a una persona."
        disclaimer="Concept creato da Novary per mostrare un flusso di automazione. La classificazione è simulata e pronta a essere collegata a un modello AI; non rappresenta un cliente reale."
        primaryCta={{ label: "Prova la demo", href: "#demo" }}
        sectionClassName="bg-[#080b0a]"
        mockup={<AtlasHeroMockup />}
        backdrop={
          <>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(52,211,153,0.14),transparent_30%),linear-gradient(180deg,#0c1311_0%,#080b0a_70%)]" />
            <div
              className="absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:42px_42px]"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-b from-transparent to-[#080b0a]" />
          </>
        }
      />

      <OverviewGrid theme={atlasTheme} items={overview} />

      <ProblemSolution
        theme={atlasTheme}
        problem={{
          icon: ShieldQuestion,
          text: "Le richieste arrivano da form, email e social in ordine sparso. Vengono lette e qualificate a mano, le risposte tardano e qualche contatto importante si perde nel rumore."
        }}
        solution={{
          icon: Network,
          text: "Atlas riunisce tutto in un'unica coda, etichetta ogni messaggio per tipo, priorità e sentiment e prepara una bozza di risposta. La persona rivede e decide: l'automazione velocizza, non sostituisce il giudizio."
        }}
      />

      <FeatureGrid
        theme={atlasTheme}
        eyebrow="Funzionalità principali"
        title="Un assistente che ordina le richieste prima che diventino un problema."
        description="Il concept mostra come ridurre il lavoro manuale mantenendo controllo e tono di voce dello studio."
        features={features}
        outcomes={outcomes}
      />

      <ScreensShowcase
        theme={atlasTheme}
        title="Dalla coda grezza alla risposta pronta da rivedere."
        screens={["Coda richieste", "Dettaglio qualificato", "Bozza risposta"]}
      />

      <DemoSection
        theme={atlasTheme}
        eyebrow="Demo triage"
        accentEyebrow
        title="Analizza una richiesta in entrata."
        description="Scegli un messaggio e avvia l'analisi: la demo usa una logica locale e deterministica per mostrare categoria, priorità, sentiment e bozza di risposta."
      >
        <AtlasTriageDemo />
      </DemoSection>

      <ProcessSteps
        theme={atlasTheme}
        title="Da casella disordinata a flusso di lavoro chiaro."
        steps={developmentSteps}
      />

      <TechGrid
        theme={atlasTheme}
        title="Una base pronta a collegarsi a modelli e strumenti reali."
        description="Il prototipo gira con logica locale, ma la struttura è pensata per integrare un modello AI, le caselle in entrata e gli strumenti già usati dallo studio."
        items={technologies}
        icon={Code2}
      />

      <ProjectCta
        theme={atlasTheme}
        icon={ServerCog}
        title="Vuoi automatizzare la gestione delle richieste?"
        description="Novary può progettare un flusso su misura per raccogliere, qualificare e rispondere più in fretta, mantenendo una persona al centro delle decisioni."
      />
    </CaseStudyShell>
  );
}

function AtlasHeroMockup() {
  const queue = [
    { from: "Marta R.", tag: "Preventivo", tone: "text-emerald-300" },
    { from: "Luca P.", tag: "Supporto", tone: "text-rose-200" },
    { from: "Studio Vivane", tag: "Collaborazione", tone: "text-emerald-300" }
  ];

  return (
    <div
      className="relative mx-auto w-full max-w-[440px] rounded-lg border border-white/10 bg-[#0b0f0d] p-3 shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
      aria-label="Anteprima dell'interfaccia Atlas"
    >
      <div className="rounded-lg border border-white/10 bg-[#0d1311] p-4">
        <div className="flex items-center justify-between">
          <ProjectLogo variant="atlas" size="md" />
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
            <Sparkles aria-hidden="true" className="h-3 w-3" />
            Live triage
          </span>
        </div>

        <div className="mt-5 grid gap-2">
          {queue.map((item) => (
            <div
              key={item.from}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5"
            >
              <div>
                <p className="text-sm font-semibold text-white">{item.from}</p>
                <p className="mt-0.5 text-[11px] text-white/40">In entrata</p>
              </div>
              <span
                className={`rounded border border-white/10 bg-black/30 px-2 py-0.5 text-[11px] font-medium ${item.tone}`}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-emerald-300">
            <MessageSquareText aria-hidden="true" className="h-3.5 w-3.5" />
            Bozza di risposta
          </div>
          <p className="mt-2 text-xs leading-5 text-white/70">
            “Ciao Marta, grazie per la richiesta. Ti propongo una call gio o ven
            mattina per il sito con catalogo…”
          </p>
        </div>
      </div>
    </div>
  );
}

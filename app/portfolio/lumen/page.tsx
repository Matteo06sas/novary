import type { Metadata } from "next";
import {
  BookOpen,
  Code2,
  GraduationCap,
  LayoutGrid,
  LineChart,
  PlayCircle,
  Sparkles,
  Unlock,
  Workflow
} from "lucide-react";

import { LumenCatalogDemo } from "@/components/portfolio/lumen-catalog-demo";
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
import { lumenTheme } from "@/components/portfolio/case-study/theme";
import { ProjectLogo } from "@/components/project-logo";

export const metadata: Metadata = {
  title: "Lumen - concept piattaforma corsi e membership",
  description:
    "Lumen è un concept Novary per una piattaforma di corsi online: catalogo filtrabile, percorso lezione chiaro e progressi visibili.",
  alternates: {
    canonical: "/portfolio/lumen"
  },
  openGraph: {
    title: "Lumen - concept piattaforma corsi e membership",
    description:
      "Un catalogo ordinato, un percorso di lezione lineare e progressi sempre visibili per creator e scuole.",
    url: "https://novary.dev/portfolio/lumen",
    siteName: "Novary",
    locale: "it_IT",
    type: "website"
  }
};

const features: CaseStudyFeature[] = [
  {
    icon: LayoutGrid,
    title: "Catalogo filtrabile",
    text: "Corsi ordinati per area, con livello e numero di lezioni, per trovare in fretta il percorso giusto."
  },
  {
    icon: BookOpen,
    title: "Percorso lezione",
    text: "Una sequenza chiara di lezioni, con anteprima dei contenuti e un solo passo successivo evidente."
  },
  {
    icon: LineChart,
    title: "Progressi e ripresa",
    text: "Indicatori di avanzamento e ripresa rapida dall'ultima lezione vista, per non perdere il filo."
  },
  {
    icon: Unlock,
    title: "Accesso e abbonamento",
    text: "Una struttura pronta per gestire accesso libero, contenuti riservati e abbonamenti ricorrenti."
  }
];

const technologies = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Componenti riutilizzabili",
  "Stato locale React",
  "Layout adattivo",
  "Demo senza server"
];

const outcomes = [
  "Scoperta dei corsi più semplice",
  "Percorso di studio chiaro",
  "Progressi sempre visibili",
  "Esperienza coerente su ogni device"
];

const overview = [
  ["Tipo", "Piattaforma corsi"],
  ["Settore", "Education e creator"],
  ["Focus", "Catalogo e lezioni"],
  ["Stato", "Portfolio concept"]
] as const;

const developmentSteps = [
  "Definizione di catalogo, categorie e struttura dei corsi.",
  "Design del percorso lezione e degli stati di avanzamento.",
  "Prototipo interattivo con filtro e anteprima lezione.",
  "Rifinitura di accesso, progressi e layout mobile."
];

export default function LumenPage() {
  return (
    <CaseStudyShell theme={lumenTheme}>
      <CaseStudyHero
        theme={lumenTheme}
        eyebrow="Portfolio concept"
        title="Lumen"
        lead="Un concept di piattaforma corsi per creator, scuole e professionisti: catalogo ordinato e filtrabile, percorso di lezione lineare e progressi sempre sotto controllo."
        disclaimer="Concept creato da Novary per mostrare un'esperienza di apprendimento premium. Corsi e contenuti sono simulati e non rappresentano un cliente reale."
        primaryCta={{ label: "Prova la demo", href: "#demo" }}
        sectionClassName="bg-[#0a0a14]"
        mockup={<LumenHeroMockup />}
        backdrop={
          <>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_12%_85%,rgba(167,139,250,0.12),transparent_32%),linear-gradient(180deg,#0d0d1c_0%,#0a0a14_72%)]" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-b from-transparent to-[#0a0a14]" />
          </>
        }
      />

      <OverviewGrid theme={lumenTheme} items={overview} />

      <ProblemSolution
        theme={lumenTheme}
        problem={{
          icon: Workflow,
          text: "Molti corsi online vivono dentro strumenti scomodi: cataloghi confusi, player poco chiari e nessuna idea di dove si è arrivati nel percorso."
        }}
        solution={{
          icon: GraduationCap,
          text: "Lumen propone un catalogo ordinato e filtrabile, un percorso di lezione lineare e progressi sempre visibili. Studiare diventa chiaro, dalla scoperta del corso fino al completamento."
        }}
      />

      <FeatureGrid
        theme={lumenTheme}
        eyebrow="Funzionalità principali"
        title="Una piattaforma dove è facile iniziare e difficile perdere il filo."
        description="Il concept mette al centro chiarezza del percorso e continuità, senza dichiarare numeri o risultati reali."
        features={features}
        outcomes={outcomes}
      />

      <ScreensShowcase
        theme={lumenTheme}
        title="Dal catalogo alla singola lezione, con i progressi sempre in vista."
        screens={["Catalogo", "Lezione", "Progressi"]}
      />

      <DemoSection
        theme={lumenTheme}
        eyebrow="Demo catalogo"
        accentEyebrow
        title="Esplora il catalogo dei corsi."
        description="Filtra per area e apri un corso per vederne il percorso di lezioni e i progressi. Tutto resta locale al browser, con contenuti simulati."
      >
        <LumenCatalogDemo />
      </DemoSection>

      <ProcessSteps
        theme={lumenTheme}
        title="Da contenuti sparsi a un percorso di apprendimento chiaro."
        steps={developmentSteps}
      />

      <TechGrid
        theme={lumenTheme}
        title="Una base moderna per una piattaforma scalabile."
        description="Il prototipo usa componenti riutilizzabili e stato locale, con una struttura pronta a evolvere verso autenticazione, pagamenti ricorrenti e player video."
        items={technologies}
        icon={Code2}
      />

      <ProjectCta
        theme={lumenTheme}
        icon={PlayCircle}
        title="Vuoi lanciare la tua piattaforma di corsi?"
        description="Novary può progettare un'esperienza su misura per pubblicare contenuti, gestire abbonamenti e accompagnare le persone fino alla fine del percorso."
      />
    </CaseStudyShell>
  );
}

function LumenHeroMockup() {
  const courses = [
    { title: "Design system da zero", progress: 60 },
    { title: "Workflow con assistenti AI", progress: 40 },
    { title: "TypeScript per prodotti", progress: 80 }
  ];

  return (
    <div
      className="relative mx-auto w-full max-w-[440px] rounded-lg border border-white/10 bg-[#0c0c18] p-3 shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
      aria-label="Anteprima dell'interfaccia Lumen"
    >
      <div className="rounded-lg border border-white/10 bg-[#101022] p-4">
        <div className="flex items-center justify-between">
          <ProjectLogo variant="lumen" size="md" />
          <span className="flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200">
            <Sparkles aria-hidden="true" className="h-3 w-3" />
            6 corsi
          </span>
        </div>

        <div className="mt-5 grid gap-2">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">
                  {course.title}
                </p>
                <span className="text-[11px] text-white/40">
                  {course.progress}%
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] p-3">
          <PlayCircle aria-hidden="true" className="h-5 w-5 text-cyan-300" />
          <div>
            <p className="text-sm font-semibold text-white">Riprendi la lezione</p>
            <p className="text-[11px] text-white/50">Tema e varianti · 4 di 5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

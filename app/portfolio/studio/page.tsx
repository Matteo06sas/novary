import type { Metadata } from "next";
import {
  Building2,
  CalendarCheck2,
  Code2,
  Compass,
  FileText,
  Layers3,
  MessageSquareText,
  MousePointer2,
  SearchCheck,
  ShieldCheck,
  ShieldQuestion,
  Sparkles,
  Workflow
} from "lucide-react";

import { StaggerContainer, StaggerItem } from "@/components/fade-in";
import { StudioLeadDemo } from "@/components/portfolio/studio-lead-demo";
import {
  CaseStudyHero,
  CaseStudyShell,
  DemoSection,
  DesignSystemSection,
  FeatureGrid,
  NarrativeBlocks,
  OverviewGrid,
  ProblemSolution,
  ProcessSteps,
  ProjectCta,
  ResultSection,
  ScreensShowcase,
  TechGrid,
  type CaseStudyFeature,
  type DesignSystemItem,
  type NarrativeBlock
} from "@/components/portfolio/case-study/sections";
import { studioTheme } from "@/components/portfolio/case-study/theme";
import { ProjectLogo } from "@/components/project-logo";

export const metadata: Metadata = {
  title: "Studio - concept sito premium per professionisti",
  description:
    "Studio è un concept Novary per una presenza digitale premium dedicata a studi professionali: servizi chiari, fiducia e contatti qualificati.",
  alternates: {
    canonical: "/portfolio/studio"
  },
  openGraph: {
    title: "Studio - concept sito premium per professionisti",
    description:
      "Un case study portfolio per trasformare un sito professionale in una piattaforma chiara, autorevole e orientata alla richiesta di consulenza.",
    url: "https://novary.dev/portfolio/studio",
    siteName: "Novary",
    locale: "it_IT",
    type: "website"
  }
};

const narrativeBlocks: NarrativeBlock[] = [
  {
    icon: Building2,
    label: "Contesto",
    title: "La reputazione offline non basta più.",
    text: "Molti studi professionali hanno competenza, metodo e clienti soddisfatti, ma online appaiono generici: servizi poco distinti, pagine lente da leggere e contatti raccolti senza contesto."
  },
  {
    icon: ShieldCheck,
    label: "Obiettivo",
    title: "Costruire fiducia prima del primo messaggio.",
    text: "Il prodotto deve spiegare cosa fa lo studio, per chi è adatto e come avviene il primo confronto, così la richiesta arriva più chiara e meno improvvisata."
  },
  {
    icon: Compass,
    label: "Approccio",
    title: "Un percorso sobrio, guidato e verificabile.",
    text: "La struttura porta il visitatore da una promessa chiara ai servizi, dal metodo al contatto qualificato. Ogni sezione riduce incertezza senza usare recensioni o metriche inventate."
  }
];

const features: CaseStudyFeature[] = [
  {
    icon: ShieldCheck,
    title: "Gerarchia di fiducia",
    text: "Hero, metodo e aree di lavoro sono ordinati per far capire subito posizionamento, competenze e prossimi passi."
  },
  {
    icon: Layers3,
    title: "Servizi leggibili",
    text: "Le aree di consulenza sono presentate con descrizioni brevi, casi d'uso e confini chiari, evitando liste lunghe e vaghe."
  },
  {
    icon: MessageSquareText,
    title: "Contatto guidato",
    text: "La richiesta viene qualificata per esigenza, tempistica e materiale disponibile, così il primo scambio parte già più ordinato."
  },
  {
    icon: SearchCheck,
    title: "Base SEO locale",
    text: "Metadata, heading semantici e contenuti descrittivi aiutano il sito a essere comprensibile per persone e motori di ricerca."
  },
  {
    icon: MousePointer2,
    title: "Micro-interazioni sobrie",
    text: "Hover, focus e transizioni leggere danno feedback senza trasformare un sito professionale in una demo rumorosa."
  },
  {
    icon: FileText,
    title: "Contenuti realistici",
    text: "Il concept mostra struttura e tono senza inventare clienti, recensioni, premi o risultati numerici non verificabili."
  }
];

const outcomes = [
  "Fiducia costruita prima del contatto",
  "Richieste più complete e leggibili",
  "Servizi comprensibili in pochi passaggi",
  "Percorso mobile chiaro e professionale"
];

const overview = [
  ["Tipo", "Presenza digitale premium"],
  ["Settore", "Studi professionali"],
  ["Focus", "Fiducia e contatti qualificati"],
  ["Stato", "Portfolio concept"]
] as const;

const designSystem: DesignSystemItem[] = [
  {
    title: "Palette",
    text: "Base porcellana, superfici bianche, testo quasi nero e un accento vinaccia usato solo per orientare attenzione e azioni.",
    swatches: [
      { name: "Porcellana", className: "bg-[#f4f5f2]" },
      { name: "Inchiostro", className: "bg-[#111312]" },
      { name: "Vinaccia", className: "bg-[#8f1d2c]" },
      { name: "Bianco", className: "bg-white" }
    ]
  },
  {
    title: "Tipografia",
    text: "Una sola famiglia sans, titoli compatti e corpo più arioso: autorevole, leggibile, senza teatralità."
  },
  {
    title: "Layout",
    text: "Sezioni ampie, griglie regolari e blocchi informativi brevi. La pagina accompagna il visitatore invece di sovraccaricarlo."
  },
  {
    title: "Tono visivo",
    text: "Istituzionale ma non freddo: superfici pulite, bordi sottili, nessun effetto decorativo che rubi attenzione al messaggio."
  },
  {
    title: "Micro-interazioni",
    text: "Stati hover e focus visibili, transizioni rapide e supporto al movimento ridotto tramite i componenti condivisi del sito."
  }
];

const developmentSteps = [
  "Definizione del posizionamento: a chi parla lo studio, quali richieste vuole ricevere e quali non vuole generare.",
  "Architettura dei contenuti: promessa, servizi, metodo, prova di competenza e contatto qualificato.",
  "Design del sistema visivo con palette sobria, tipografia leggibile e componenti riutilizzabili.",
  "Prototipo della richiesta guidata e revisione responsive su mobile, tablet e desktop."
];

const technologies = [
  "Next.js App Router",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Framer Motion",
  "Componenti case study condivisi",
  "Metadata SEO dedicati",
  "Demo locale senza server"
];

const resultItems = [
  "Il visitatore capisce in pochi passaggi se lo studio è adatto alla sua esigenza.",
  "La richiesta di consulenza raccoglie contesto utile senza sembrare un modulo burocratico.",
  "Il tono premium arriva da chiarezza, gerarchia e ritmo, non da effetti decorativi.",
  "Il concept resta trasparente: contenuti simulati, nessuna recensione o metrica inventata."
];

export default function StudioPage() {
  return (
    <CaseStudyShell theme={studioTheme}>
      <CaseStudyHero
        theme={studioTheme}
        eyebrow="Portfolio concept"
        title="Studio"
        lead="Un concept di presenza digitale premium per studi professionali: servizi più chiari, percezione più autorevole e un percorso di contatto pensato per generare richieste qualificate."
        disclaimer="Concept creato da Novary per mostrare una soluzione realistica da portfolio. Nome, contenuti e flussi sono simulati e non rappresentano un cliente reale."
        primaryCta={{ label: "Prova il contatto guidato", href: "#demo" }}
        secondaryCta={{ label: "Richiedi consulenza", href: "/consulenza" }}
        sectionClassName="bg-[#f4f5f2]"
        gridClassName="gap-12 lg:grid-cols-[0.86fr_1fr] lg:items-center"
        titleClassName="text-6xl leading-[0.9] sm:text-7xl lg:text-8xl"
        mockup={<StudioHeroMockup />}
        backdrop={
          <>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_16%,rgba(143,29,44,0.10),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f4f5f2_72%)]" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent to-[#f4f5f2]" />
          </>
        }
      />

      <OverviewGrid theme={studioTheme} items={overview} />

      <NarrativeBlocks theme={studioTheme} items={narrativeBlocks} />

      <ProblemSolution
        theme={studioTheme}
        problem={{
          icon: ShieldQuestion,
          text: "Un sito professionale troppo generico non aiuta il visitatore a capire se può fidarsi. Se servizi, metodo e contatto sono poco chiari, la persona rimanda la richiesta o scrive un messaggio incompleto."
        }}
        solution={{
          icon: Workflow,
          text: "Studio organizza la presenza digitale come un percorso decisionale: prima chiarisce il posizionamento, poi mostra servizi e metodo, infine guida la richiesta con poche domande utili."
        }}
      />

      <FeatureGrid
        theme={studioTheme}
        eyebrow="Funzionalità principali"
        title="Una presenza professionale che non si limita a essere elegante."
        description="Il concept lavora su fiducia, chiarezza e conversione senza ricorrere a promesse gonfiate o prove sociali inventate."
        features={features}
        outcomes={outcomes}
      />

      <DesignSystemSection
        theme={studioTheme}
        title="Un sistema visivo sobrio, riconoscibile e orientato alla consulenza."
        description="Il design evita la freddezza dei template istituzionali e costruisce autorevolezza con ritmo, contrasto e precisione."
        items={designSystem}
      />

      <ScreensShowcase
        theme={studioTheme}
        title="La pagina accompagna dal primo segnale di fiducia alla richiesta qualificata."
      >
        <StudioScreens />
      </ScreensShowcase>

      <DemoSection
        theme={studioTheme}
        eyebrow="Demo contatto"
        accentEyebrow
        title="Qualifica una richiesta prima del primo scambio."
        description="Scegli esigenza e tempistica: la demo mostra come un sito professionale può preparare una richiesta più chiara senza inviare dati reali."
      >
        <StudioLeadDemo />
      </DemoSection>

      <ProcessSteps
        theme={studioTheme}
        title="Da sito vetrina a piattaforma di fiducia."
        steps={developmentSteps}
      />

      <TechGrid
        theme={studioTheme}
        title="Una base leggera, accessibile e pronta a crescere."
        description="Il prototipo usa componenti condivisi, TypeScript e metadata dedicati. Può evolvere verso CMS, CRM o automazioni senza cambiare l'impianto dell'esperienza."
        items={technologies}
        icon={Code2}
      />

      <ResultSection
        theme={studioTheme}
        title="Una piattaforma più chiara, elegante e orientata al contatto."
        description="Il risultato non viene raccontato con numeri fittizi: il valore sta nella qualità dell'esperienza e nella capacità di guidare meglio la decisione del visitatore."
        items={resultItems}
      />

      <ProjectCta
        theme={studioTheme}
        icon={CalendarCheck2}
        title="Vuoi una presenza digitale all'altezza del tuo studio?"
        description="Novary progetta siti e piattaforme digitali premium per professionisti e business che vogliono comunicare fiducia prima del primo contatto. Scrivi a novary.dev@gmail.com."
        primaryCta={{
          label: "Scrivi a Novary",
          href: "mailto:novary.dev@gmail.com?subject=Consulenza%20Novary%20-%20Studio"
        }}
        secondaryCta={{ label: "Vedi altri case study", href: "/#work" }}
      />
    </CaseStudyShell>
  );
}

function StudioHeroMockup() {
  const signals = ["Metodo", "Servizi", "Contatto"];

  return (
    <div
      className="relative mx-auto w-full max-w-[470px] overflow-hidden rounded-lg border border-[#d9ddd8] bg-white p-3 shadow-[0_30px_120px_rgba(17,19,18,0.14)]"
      aria-label="Anteprima dell'interfaccia Studio"
    >
      <div className="rounded-lg border border-[#d9ddd8] bg-[#f7f8f5] p-4">
        <div className="flex items-center justify-between gap-4">
          <ProjectLogo variant="studio" size="md" />
          <span className="flex items-center gap-1.5 rounded-full border border-[#8f1d2c]/20 bg-[#8f1d2c]/[0.08] px-2.5 py-1 text-[11px] font-medium text-[#7e1825]">
            <Sparkles aria-hidden="true" className="h-3 w-3" />
            Studio concept
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-[#111312] p-4 text-white">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
              Area consulenza
            </p>
            <p className="mt-3 text-3xl font-semibold leading-[0.95]">
              Primo confronto più chiaro.
            </p>
            <div className="mt-5 grid gap-2">
              {signals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-sm"
                >
                  <span>{signal}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d9c2b6]" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#d9ddd8] bg-white p-4">
            <p className="text-sm font-semibold text-[#111312]">
              Richiesta qualificata
            </p>
            <div className="mt-4 grid gap-2">
              {["Esigenza", "Tempistica", "Documenti"].map((item, index) => (
                <div
                  key={item}
                  className="rounded-md border border-[#d9ddd8] bg-[#f4f5f2] p-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-[#68716b]">{item}</span>
                    <span className="text-xs font-semibold text-[#8f1d2c]">
                      {index === 0 ? "Scelta" : "Pronta"}
                    </span>
                  </div>
                  <div
                    className="mt-3 h-1.5 rounded-full bg-[#111312]"
                    style={{ width: `${58 + index * 14}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-[#8f1d2c] px-3 py-2 text-sm font-semibold text-white">
              Prenota consulenza
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudioScreens() {
  const screens = [
    {
      title: "Hero e metodo",
      detail: "Promessa chiara, segnali di competenza e percorso subito leggibile."
    },
    {
      title: "Servizi",
      detail: "Aree ordinate per esigenza, con copy breve e confini espliciti."
    },
    {
      title: "Contatto",
      detail: "Domande essenziali per preparare una richiesta più utile."
    }
  ];

  return (
    <StaggerContainer className="grid gap-4 md:grid-cols-3">
      {screens.map((screen, index) => (
        <StaggerItem key={screen.title}>
          <article className="h-full overflow-hidden rounded-lg border border-[#d9ddd8] bg-white p-4">
            <div className="rounded-lg border border-[#d9ddd8] bg-[#f4f5f2] p-4">
              <div className="flex items-center justify-between">
                <div className="h-2 w-20 rounded-sm bg-[#111312]" />
                <div className="h-6 w-6 rounded-md bg-[#8f1d2c]" />
              </div>
              <div className="mt-8 grid gap-2">
                {Array.from({ length: 4 }).map((_, lineIndex) => (
                  <div
                    key={`${screen.title}-${lineIndex}`}
                    className="rounded-md border border-[#d9ddd8] bg-white p-3"
                  >
                    <div
                      className="h-2 rounded-sm bg-[#111312]"
                      style={{
                        width: `${46 + index * 8 + lineIndex * 9}%`,
                        opacity: lineIndex === 0 ? 1 : 0.28
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-[#111312]">
              {screen.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#58625c]">
              {screen.detail}
            </p>
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

import type { Metadata } from "next";
import {
  Code2,
  LayoutGrid,
  PackageCheck,
  ShoppingBag,
  Store,
  Tags,
  Workflow
} from "lucide-react";

import { StaggerContainer, StaggerItem } from "@/components/fade-in";
import { VeyraStorefrontDemo } from "@/components/portfolio/veyra-storefront-demo";
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
import { veyraTheme } from "@/components/portfolio/case-study/theme";
import { ProjectLogo } from "@/components/project-logo";

export const metadata: Metadata = {
  title: "Veyra - concept negozio moda premium",
  description:
    "Veyra è un concept Novary per un negozio online moda minimale, editoriale e orientato alla vendita.",
  alternates: {
    canonical: "/portfolio/veyra"
  },
  openGraph: {
    title: "Veyra - concept negozio moda premium",
    description:
      "Un concept originale per presentare abbigliamento, scarpe e accessori con un percorso di acquisto elegante.",
    url: "https://novary.dev/portfolio/veyra",
    siteName: "Novary",
    locale: "it_IT",
    type: "website"
  }
};

const features: CaseStudyFeature[] = [
  {
    icon: Store,
    title: "Vetrina editoriale",
    text: "Una pagina iniziale chiara, con grande tipografia e immagini prodotto costruite per guidare lo sguardo."
  },
  {
    icon: Tags,
    title: "Categorie fluide",
    text: "Un menu animato permette di passare tra tute, t-shirt, scarpe, felpe e accessori senza interrompere la navigazione."
  },
  {
    icon: ShoppingBag,
    title: "Carrello sempre visibile",
    text: "La mini anteprima mostra articoli, quantità e totale simulato, così il cliente resta orientato."
  },
  {
    icon: PackageCheck,
    title: "Vista rapida prodotto",
    text: "Il dettaglio prodotto appare in un modale pulito con prezzo, materiale, colore e azione di acquisto."
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

const businessPoints = [
  "Catalogo più semplice da esplorare",
  "Presentazione prodotto più premium",
  "Percorso di acquisto più diretto",
  "Esperienza mobile pensata per boutique"
];

const overview = [
  ["Tipo", "E-commerce moda"],
  ["Settore", "Fashion e streetwear"],
  ["Focus", "Catalogo e acquisto"],
  ["Stato", "Portfolio concept"]
] as const;

const developmentSteps = [
  "Definizione di una direzione visiva bianca, minimale ed editoriale.",
  "Organizzazione di categorie, top seller, schede prodotto e carrello.",
  "Prototipo interattivo con filtro prodotti, vista rapida e mini carrello.",
  "Rifinitura di micro interazioni e layout mobile-first."
];

export default function VeyraPage() {
  return (
    <CaseStudyShell theme={veyraTheme}>
      <CaseStudyHero
        theme={veyraTheme}
        eyebrow="Portfolio concept"
        title="Veyra"
        lead="Un concept di negozio online moda con estetica bianca, minimale ed editoriale, pensato per valorizzare capi, scarpe e accessori senza imitare marchi esistenti."
        disclaimer="Concept creato da Novary per mostrare una possibile esperienza di vendita premium. Non rappresenta un cliente reale."
        primaryCta={{ label: "Prova la demo", href: "#demo" }}
        sectionClassName="bg-white"
        gridClassName="gap-12 lg:grid-cols-[0.86fr_1fr] lg:items-end"
        titleClassName="text-6xl leading-[0.88] sm:text-7xl lg:text-8xl"
        mockup={<VeyraHeroMockup />}
      />

      <OverviewGrid theme={veyraTheme} items={overview} />

      <ProblemSolution
        theme={veyraTheme}
        problem={{
          icon: LayoutGrid,
          text: "Molti negozi moda online mostrano prodotti validi dentro percorsi visivi confusi: categorie poco chiare, schede prodotto anonime, carrello distante e poca cura nella presentazione da smartphone."
        }}
        solution={{
          icon: Workflow,
          text: "Veyra propone una vetrina pulita, un filtro categorie animato, prodotti visivi, vista rapida e carrello sempre leggibile. Il risultato è un acquisto più elegante, diretto e coerente con una boutique premium."
        }}
      />

      <FeatureGrid
        theme={veyraTheme}
        eyebrow="Funzionalità principali"
        title="Un negozio digitale dove la presentazione del prodotto guida la vendita."
        description="Il concept mette al centro spazio, ritmo e interazioni leggere, senza dichiarare clienti, risultati o dati reali."
        features={features}
        outcomes={businessPoints}
      />

      <ScreensShowcase
        theme={veyraTheme}
        title="Un ritmo editoriale pensato per far respirare il prodotto."
      >
        <StaggerContainer className="grid gap-4 md:grid-cols-3">
          {["Homepage", "Catalogo filtrato", "Carrello"].map((item, index) => (
            <StaggerItem key={item}>
              <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white p-4">
                <div className="relative h-56 overflow-hidden rounded-lg bg-neutral-100">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f5f0_0%,#f7f5f0_52%,#111_52%,#111_100%)]" />
                  <div className="absolute left-5 top-5 h-2 w-20 rounded-sm bg-neutral-950" />
                  <div
                    className="absolute left-5 top-16 rounded-md bg-white p-4 shadow-[0_18px_50px_rgba(15,15,15,0.12)]"
                    style={{ width: `${120 + index * 24}px` }}
                  >
                    <div className="h-2 w-20 rounded-sm bg-neutral-950" />
                    <div className="mt-2 h-1.5 w-14 rounded-sm bg-neutral-300" />
                  </div>
                  <div className="absolute bottom-7 right-5 h-12 w-28 rounded-full bg-white shadow-[0_18px_44px_rgba(0,0,0,0.2)]" />
                </div>
                <p className="mt-4 text-sm font-semibold">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </ScreensShowcase>

      <DemoSection
        theme={veyraTheme}
        eyebrow="Demo negozio"
        title="Prova una vetrina interattiva."
        description="Filtra i prodotti, apri la vista rapida e aggiungi articoli al carrello simulato. Tutto resta locale al browser."
      >
        <VeyraStorefrontDemo />
      </DemoSection>

      <ProcessSteps
        theme={veyraTheme}
        title="Dal linguaggio editoriale a un prototipo acquistabile."
        steps={developmentSteps}
      />

      <TechGrid
        theme={veyraTheme}
        title="Una base moderna per un negozio veloce."
        description="Il prototipo usa componenti riutilizzabili e stato locale, con una struttura pronta a evolvere verso catalogo reale, pagamenti e gestione ordini."
        items={technologies}
        icon={Code2}
      />

      <ProjectCta
        theme={veyraTheme}
        title="Vuoi un negozio online premium per il tuo marchio moda?"
        description="Novary può progettare una presenza digitale su misura per marchi moda, negozi streetwear e boutique che vogliono vendere con più eleganza e chiarezza."
      />
    </CaseStudyShell>
  );
}

function VeyraHeroMockup() {
  return (
    <div
      className="relative mx-auto min-h-[520px] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-[0_30px_120px_rgba(15,15,15,0.12)]"
      aria-label="Anteprima editoriale dell'interfaccia Veyra"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8f8f6_0%,#f8f8f6_52%,#111_52%,#111_100%)]" />
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
        <ProjectLogo variant="veyra" size="sm" />
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-white">
          Collezione 01
        </span>
      </div>
      <div className="absolute left-7 top-24 max-w-[230px]">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          Nuova selezione
        </p>
        <p className="mt-3 text-5xl font-semibold leading-[0.9]">
          Forma essenziale.
        </p>
      </div>
      <div className="absolute bottom-10 left-8 rounded-md bg-white px-4 py-3 text-sm font-medium shadow-[0_18px_50px_rgba(15,15,15,0.12)]">
        Tuta Oversize Nera / {"€"}129
      </div>

      <div className="absolute bottom-24 right-10 h-64 w-40 rounded-t-full bg-white shadow-[0_32px_80px_rgba(0,0,0,0.28)]" />
      <div className="absolute bottom-24 right-20 h-44 w-20 rounded-md bg-neutral-950" />
      <div className="absolute bottom-10 right-12 h-16 w-44 rounded-full bg-white shadow-[0_24px_60px_rgba(0,0,0,0.28)]" />
      <div className="absolute bottom-[3.75rem] right-[4.5rem] h-8 w-[8.5rem] rounded-full border border-neutral-950/20" />
    </div>
  );
}

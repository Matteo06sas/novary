import type { Metadata } from "next";
import {
  Code2,
  Leaf,
  ListOrdered,
  MapPin,
  Phone,
  Receipt,
  ShoppingBasket,
  UtensilsCrossed,
  Workflow
} from "lucide-react";

import { OrtoOrderDemo } from "@/components/portfolio/orto-order-demo";
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
import { ortoTheme } from "@/components/portfolio/case-study/theme";
import { ProjectLogo } from "@/components/project-logo";

export const metadata: Metadata = {
  title: "Orto - concept menu digitale e ordini per la ristorazione",
  description:
    "Orto è un concept Novary per un menu digitale e ordini mobile-first dedicato a bistrot, take-away e ristoranti locali.",
  alternates: {
    canonical: "/portfolio/orto"
  },
  openGraph: {
    title: "Orto - concept menu digitale e ordini per la ristorazione",
    description:
      "Un menu chiaro per categorie, ordine in pochi tap e riepilogo pronto per la cucina.",
    url: "https://novary.dev/portfolio/orto",
    siteName: "Novary",
    locale: "it_IT",
    type: "website"
  }
};

const features: CaseStudyFeature[] = [
  {
    icon: UtensilsCrossed,
    title: "Menu visivo per categorie",
    text: "Antipasti, primi, dolci e bevande ordinati con descrizione e prezzo, leggibili in un colpo d'occhio da smartphone."
  },
  {
    icon: ShoppingBasket,
    title: "Aggiunta rapida",
    text: "Ogni piatto si aggiunge all'ordine con un tap, senza moduli lunghi né passaggi inutili."
  },
  {
    icon: Receipt,
    title: "Riepilogo e totale",
    text: "Quantità, righe d'ordine e totale sempre visibili, così il cliente sa esattamente cosa sta ordinando."
  },
  {
    icon: MapPin,
    title: "Ritiro o consegna",
    text: "Una scelta semplice tra ritiro e consegna prepara un riepilogo già pronto per la cucina."
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
  "Ordini più chiari per la cucina",
  "Meno errori al telefono",
  "Piatti presentati meglio",
  "Esperienza mobile curata"
];

const overview = [
  ["Tipo", "Menu digitale e ordini"],
  ["Settore", "Ristorazione locale"],
  ["Focus", "Ordine mobile-first"],
  ["Stato", "Portfolio concept"]
] as const;

const developmentSteps = [
  "Struttura del menu, categorie e logica dell'ordine.",
  "Design delle schede piatto, leggibili e appetitose.",
  "Prototipo dell'ordine con stato locale e totale in tempo reale.",
  "Rifinitura mobile-first per l'uso al tavolo o da casa."
];

export default function OrtoPage() {
  return (
    <CaseStudyShell theme={ortoTheme}>
      <CaseStudyHero
        theme={ortoTheme}
        eyebrow="Portfolio concept"
        title="Orto"
        lead="Un concept di menu digitale e ordini per bistrot, take-away e ristoranti locali: piatti chiari per categorie, ordine in pochi tap e un riepilogo pronto per la cucina."
        disclaimer="Concept creato da Novary per mostrare un'esperienza di ordine premium. Non rappresenta un cliente reale."
        primaryCta={{ label: "Prova la demo", href: "#demo" }}
        sectionClassName="bg-[#faf6ef]"
        mockup={<OrtoHeroMockup />}
        backdrop={
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_12%,rgba(200,100,60,0.10),transparent_32%)]" />
        }
      />

      <OverviewGrid theme={ortoTheme} items={overview} />

      <ProblemSolution
        theme={ortoTheme}
        problem={{
          icon: Phone,
          text: "Molti locali gestiscono ordini con menu in PDF lenti e telefonate che si accavallano. Il risultato sono errori, attese e piatti presentati in modo poco invitante."
        }}
        solution={{
          icon: Workflow,
          text: "Orto porta il menu in un'interfaccia chiara per categorie, con aggiunta rapida e riepilogo sempre visibile. Il cliente ordina in pochi tap e la cucina riceve una richiesta ordinata e completa."
        }}
      />

      <FeatureGrid
        theme={ortoTheme}
        eyebrow="Funzionalità principali"
        title="Un menu che fa venire fame e un ordine che non sbaglia."
        description="Il concept unisce presentazione dei piatti e praticità d'ordine, con un'attenzione particolare al mobile."
        features={features}
        outcomes={outcomes}
      />

      <ScreensShowcase
        theme={ortoTheme}
        title="Pochi passaggi, dal piatto scelto all'ordine confermato."
        screens={["Menu", "Carrello", "Conferma ordine"]}
      />

      <DemoSection
        theme={ortoTheme}
        eyebrow="Demo ordine"
        accentEyebrow
        title="Componi un ordine dal menu."
        description="Sfoglia le categorie, aggiungi piatti e guarda il riepilogo aggiornarsi. Tutto resta locale al browser, nessun ordine reale viene inviato."
      >
        <OrtoOrderDemo />
      </DemoSection>

      <ProcessSteps
        theme={ortoTheme}
        title="Dal menu cartaceo a un ordine digitale fluido."
        steps={developmentSteps}
      />

      <TechGrid
        theme={ortoTheme}
        title="Una base leggera per un'esperienza veloce al tavolo."
        description="Il prototipo usa componenti riutilizzabili e stato locale, pronto a evolvere verso menu gestibile, pagamenti e notifiche alla cucina."
        items={technologies}
        icon={Code2}
      />

      <ProjectCta
        theme={ortoTheme}
        icon={ListOrdered}
        title="Vuoi un menu digitale e ordini online per il tuo locale?"
        description="Novary può progettare un'esperienza su misura per presentare i piatti, semplificare gli ordini e ridurre gli errori in cucina."
      />
    </CaseStudyShell>
  );
}

function OrtoHeroMockup() {
  const dishes = [
    { name: "Tagliatelle al ragù bianco", price: "12 €" },
    { name: "Risotto zucca e salvia", price: "13 €" },
    { name: "Tortino al cioccolato", price: "6 €" }
  ];

  return (
    <div
      className="relative mx-auto w-full max-w-[420px] rounded-lg border border-[#e7ddcd] bg-white p-3 shadow-[0_30px_110px_rgba(80,60,40,0.18)]"
      aria-label="Anteprima dell'interfaccia Orto"
    >
      <div className="rounded-lg border border-[#e7ddcd] bg-[#faf6ef] p-4">
        <div className="flex items-center justify-between">
          <ProjectLogo variant="orto" size="md" />
          <span className="flex items-center gap-1.5 rounded-full border border-[#3f5b3a]/25 bg-[#3f5b3a]/10 px-2.5 py-1 text-[11px] font-medium text-[#3f5b3a]">
            <Leaf aria-hidden="true" className="h-3 w-3" />
            Menu di stagione
          </span>
        </div>

        <div className="mt-5 grid gap-2">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="flex items-center justify-between gap-3 rounded-lg border border-[#e7ddcd] bg-white px-3 py-2.5"
            >
              <p className="text-sm font-semibold text-[#2b2420]">{dish.name}</p>
              <span className="shrink-0 text-sm font-semibold text-[#a24f2e]">
                {dish.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg bg-[#2b2420] p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Ordine pronto</p>
              <p className="mt-0.5 text-xs text-white/60">Ritiro · 3 piatti</p>
            </div>
            <span className="text-base font-semibold">31 €</span>
          </div>
        </div>
      </div>
    </div>
  );
}

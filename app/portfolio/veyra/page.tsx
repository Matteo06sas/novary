import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  LayoutGrid,
  MonitorSmartphone,
  PackageCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Tags,
  Workflow
} from "lucide-react";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { VeyraStorefrontDemo } from "@/components/portfolio/veyra-storefront-demo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Veyra - concept negozio moda premium",
  description:
    "Veyra e un concept Novary per un negozio online moda minimale, editoriale e orientato alla vendita.",
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

const features = [
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
    text: "La mini anteprima mostra articoli, quantita e totale simulato, cosi il cliente resta orientato."
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
  "Catalogo piu semplice da esplorare",
  "Presentazione prodotto piu premium",
  "Percorso di acquisto piu diretto",
  "Esperienza mobile pensata per boutique"
];

export default function VeyraPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-neutral-950">
        <HeroSection />
        <ProblemSolutionSection />
        <FeatureSection />
        <StorefrontSection />
        <TechSection />
        <ProjectCta />
      </main>
      <SiteFooter />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <div className="section-shell py-10 sm:py-16 lg:py-20">
        <FadeIn>
          <Button
            asChild
            variant="ghost"
            className="-ml-3 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950"
          >
            <Link href="/#work">
              <ArrowLeft aria-hidden="true" />
              Torna al portfolio
            </Link>
          </Button>
        </FadeIn>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <div>
            <FadeIn>
              <Badge className="border-neutral-200 bg-neutral-50 text-neutral-600 shadow-none">
                <Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
                Portfolio concept
              </Badge>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-balance text-6xl font-semibold leading-[0.88] tracking-normal text-neutral-950 sm:text-7xl lg:text-8xl">
                Veyra
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
                Un concept di negozio online moda con estetica bianca,
                minimale ed editoriale, pensato per valorizzare capi, scarpe e
                accessori senza imitare marchi esistenti.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-neutral-950 text-white shadow-none hover:bg-neutral-800"
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
                  className="border-neutral-300 bg-white text-neutral-950 hover:bg-neutral-50"
                >
                  <a href="mailto:hello@novary.dev?subject=Richiesta%20negozio%20moda%20Novary">
                    Parla con Novary
                  </a>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.32}>
              <p className="mt-7 max-w-2xl text-sm leading-6 text-neutral-500">
                Concept creato da Novary per mostrare una possibile esperienza
                di vendita premium. Non rappresenta un cliente reale.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <VeyraHeroMockup />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function VeyraHeroMockup() {
  return (
    <div
      className="relative mx-auto min-h-[520px] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-[0_30px_120px_rgba(15,15,15,0.12)]"
      aria-label="Anteprima editoriale dell'interfaccia Veyra"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8f8f6_0%,#f8f8f6_52%,#111_52%,#111_100%)]" />
      <div className="absolute left-6 top-6 right-6 flex items-center justify-between text-xs font-medium uppercase tracking-[0.22em]">
        <span>Veyra</span>
        <span className="text-white">Collezione 01</span>
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
        Tuta Oversize Nera / {"\u20ac"}129
      </div>

      <div className="absolute bottom-24 right-10 h-64 w-40 rounded-t-full bg-white shadow-[0_32px_80px_rgba(0,0,0,0.28)]" />
      <div className="absolute bottom-24 right-20 h-44 w-20 rounded-md bg-neutral-950" />
      <div className="absolute bottom-10 right-12 h-16 w-44 rounded-full bg-white shadow-[0_24px_60px_rgba(0,0,0,0.28)]" />
      <div className="absolute bottom-[3.75rem] right-[4.5rem] h-8 w-[8.5rem] rounded-full border border-neutral-950/20" />
    </div>
  );
}

function ProblemSolutionSection() {
  return (
    <section className="border-b border-neutral-200 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-2">
          <FadeIn className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-950">
              <LayoutGrid aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold">Problema</h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Molti negozi moda online mostrano prodotti validi dentro percorsi
              visivi confusi: categorie poco chiare, schede prodotto anonime,
              carrello distante e poca cura nella presentazione da smartphone.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="rounded-lg border border-neutral-950 bg-neutral-950 p-6 text-white sm:p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white text-neutral-950">
              <Workflow aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold">Soluzione</h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Veyra propone una vetrina pulita, un filtro categorie animato,
              prodotti visivi, vista rapida e carrello sempre leggibile. Il
              risultato e un acquisto piu elegante, diretto e coerente con una
              boutique premium.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="border-b border-neutral-200 py-20 sm:py-24">
      <div className="section-shell">
        <FadeIn className="max-w-3xl">
          <Badge className="border-neutral-200 bg-neutral-50 text-neutral-600 shadow-none">
            Funzionalita principali
          </Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            Un negozio digitale dove la presentazione del prodotto guida la
            vendita.
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            Il concept mette al centro spazio, ritmo e interazioni leggere,
            senza dichiarare clienti, risultati o dati reali.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <StaggerItem key={feature.title}>
                <div className="h-full rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:bg-neutral-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-950 text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {feature.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {businessPoints.map((item) => (
            <FadeIn
              key={item}
              className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700"
            >
              {item}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorefrontSection() {
  return (
    <section id="demo" className="border-b border-neutral-200 py-20 sm:py-24">
      <div className="section-shell">
        <FadeIn className="max-w-3xl">
          <Badge className="border-neutral-200 bg-neutral-50 text-neutral-600 shadow-none">
            Demo negozio
          </Badge>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            Prova una vetrina interattiva.
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
            Filtra i prodotti, apri la vista rapida e aggiungi articoli al
            carrello simulato. Tutto resta locale al browser.
          </p>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10">
          <VeyraStorefrontDemo />
        </FadeIn>
      </div>
    </section>
  );
}

function TechSection() {
  return (
    <section className="border-b border-neutral-200 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <FadeIn>
            <Badge className="border-neutral-200 bg-neutral-50 text-neutral-600 shadow-none">
              Tecnologie
            </Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              Una base moderna per un negozio veloce.
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
              Il prototipo usa componenti riutilizzabili e stato locale, con
              una struttura pronta a evolvere verso catalogo reale, pagamenti e
              gestione ordini.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-3 sm:grid-cols-2">
            {technologies.map((item) => (
              <StaggerItem key={item}>
                <div className="flex min-h-16 items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-neutral-950 text-white">
                    <Code2 aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-neutral-700">
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
        <FadeIn className="rounded-lg border border-neutral-200 bg-neutral-950 p-6 text-center text-white sm:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white text-neutral-950">
            <MonitorSmartphone aria-hidden="true" className="h-5 w-5" />
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-semibold sm:text-4xl">
            Vuoi un negozio online premium per il tuo marchio moda?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Novary puo progettare una presenza digitale su misura per marchi
            moda, negozi streetwear e boutique che vogliono vendere con piu
            eleganza e chiarezza.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-neutral-950 shadow-none hover:bg-neutral-200"
            >
              <a href="mailto:hello@novary.dev?subject=Richiesta%20negozio%20moda%20premium%20Novary">
                Contatta Novary
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/[0.04] text-white hover:bg-white/10"
            >
              <Link href="/#work">Guarda altri concept</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

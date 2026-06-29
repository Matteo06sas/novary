import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/fade-in";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const projects = [
  {
    name: "Cutly",
    type: "Concept",
    category: "Prenotazioni saloni",
    description:
      "Una web app premium per saloni, barbieri e parrucchieri: registrazione, scelta servizio, professionista, giorno, orario e conferma.",
    outcome:
      "Obiettivo: ridurre le telefonate, semplificare le prenotazioni e migliorare l'esperienza cliente da mobile.",
    tags: ["Prenotazioni", "Saloni", "Demo interattiva"],
    href: "/portfolio/cutly",
    preview: "cutly"
  },
  {
    name: "Veyra",
    type: "Concept",
    category: "Moda premium",
    description:
      "Un negozio online minimale per abbigliamento, scarpe e accessori, con layout editoriale, filtro categorie e carrello simulato.",
    outcome:
      "Obiettivo: valorizzare il prodotto, semplificare la scoperta del catalogo e rendere l'acquisto piu elegante da mobile.",
    tags: ["Moda", "Negozio online", "Demo interattiva"],
    href: "/portfolio/veyra",
    preview: "veyra"
  },
  {
    name: "Concept per studio professionale",
    type: "Concept",
    category: "Presenza digitale",
    description:
      "Una struttura premium per uno studio locale che deve comunicare fiducia, servizi e richiesta di contatto in pochi passaggi.",
    outcome: "Obiettivo: aumentare la qualità delle richieste e rendere il brand più autorevole online.",
    tags: ["Sito aziendale", "Esperienza mobile", "SEO locale"]
  },
  {
    name: "Concept e-commerce locale",
    type: "Concept",
    category: "Vendita online",
    description:
      "Un percorso di acquisto essenziale per un'attività che vuole vendere prodotti selezionati senza perdere eleganza e chiarezza.",
    outcome: "Obiettivo: rendere semplice la scoperta del prodotto e ridurre le frizioni prima dell'acquisto.",
    tags: ["E-commerce", "Catalogo", "Checkout"]
  },
  {
    name: "Concept automazione contatti",
    type: "Concept",
    category: "Automazione AI",
    description:
      "Un flusso dimostrativo per raccogliere richieste, qualificarle e preparare risposte operative più rapide.",
    outcome: "Obiettivo: meno lavoro manuale, dati più ordinati e tempi di risposta più competitivi.",
    tags: ["Automazione AI", "Flusso contatti", "Pannello operativo"]
  }
];

function MockupPreview({
  index,
  variant
}: {
  index: number;
  variant?: string;
}) {
  if (variant === "veyra") {
    return (
      <div
        className="relative h-48 overflow-hidden rounded-md border border-white/10 bg-white"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f5f0_0%,#f7f5f0_52%,#111111_52%,#111111_100%)]" />
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          <div>
            <div className="h-2.5 w-16 rounded-sm bg-black" />
            <div className="mt-2 h-1.5 w-24 rounded-sm bg-black/20" />
          </div>
          <div className="h-8 w-8 rounded-md border border-white/20 bg-white/90" />
        </div>
        <div className="absolute left-5 top-20 h-20 w-28 rounded-t-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]" />
        <div className="absolute left-12 top-28 h-14 w-14 rounded-md bg-black" />
        <div className="absolute bottom-5 left-5 rounded-md bg-white px-4 py-3 shadow-[0_14px_36px_rgba(0,0,0,0.16)]">
          <div className="h-2 w-28 rounded-sm bg-black/80" />
          <div className="mt-2 h-1.5 w-16 rounded-sm bg-black/30" />
        </div>
        <div className="absolute bottom-8 right-5 h-12 w-28 rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]" />
        <div className="absolute bottom-12 right-10 h-5 w-20 rounded-full border border-black/20" />
      </div>
    );
  }

  if (variant === "cutly") {
    return (
      <div
        className="relative h-48 overflow-hidden rounded-md border border-white/10 bg-[#0b0907]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(216,191,139,0.2),transparent_28%),linear-gradient(135deg,#17120d_0%,#050505_74%)]" />
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          <div>
            <div className="h-2.5 w-16 rounded-sm bg-[#d8bf8b]" />
            <div className="mt-2 h-2 w-24 rounded-sm bg-white/20" />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#d8bf8b] text-[10px] font-bold text-black">
            C
          </div>
        </div>
        <div className="absolute left-5 right-5 top-20 grid grid-cols-2 gap-2">
          {["Taglio Uomo", "Luca", "10 luglio", "11:00"].map((item, itemIndex) => (
            <div
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.045] p-3"
            >
              <div className="h-2 w-12 rounded-sm bg-white/[0.18]" />
              <div
                className="mt-3 h-2 rounded-sm bg-[#d8bf8b]"
                style={{ width: `${48 + itemIndex * 9}%` }}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-md bg-[#f3ead8] px-4 py-3">
          <div className="h-2 w-28 rounded-sm bg-black/70" />
          <div className="mt-2 h-1.5 w-20 rounded-sm bg-black/30" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative h-48 overflow-hidden rounded-md border border-white/10 bg-black"
      aria-hidden="true"
    >
      <div className="absolute inset-0 surface-grid opacity-70" />
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <div className="h-2.5 w-24 rounded-sm bg-white/20" />
        <div className="h-7 w-7 rounded-md border border-primary/30 bg-primary/20" />
      </div>
      <div className="absolute left-5 top-16 h-16 w-32 rounded-md border border-white/10 bg-white/[0.04]">
        <div className="m-4 h-3 w-16 rounded-sm bg-primary/70" />
        <div className="mx-4 mt-3 h-2 w-24 rounded-sm bg-white/20" />
        <div className="mx-4 mt-2 h-2 w-14 rounded-sm bg-white/10" />
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, itemIndex) => (
          <div
            key={`${index}-${itemIndex}`}
            className="h-8 rounded-sm border border-white/10 bg-white/[0.035]"
          >
            <div
              className="mx-2 mt-3 h-1.5 rounded-sm bg-primary/70"
              style={{ width: `${32 + ((itemIndex + index) % 4) * 14}%` }}
            />
          </div>
        ))}
      </div>
      <div className="absolute right-6 top-20 h-20 w-28 rounded-md border border-white/10 bg-white/[0.035]">
        <div className="mx-4 mt-5 h-2 rounded-sm bg-white/15" />
        <div className="mx-4 mt-3 h-2 w-14 rounded-sm bg-primary/60" />
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const content = (
    <Card className="h-full overflow-hidden bg-card/90 transition-colors hover:bg-card">
      <MockupPreview index={index} variant={project.preview} />
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.type}</Badge>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 text-muted-foreground"
          />
        </div>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium leading-6 text-foreground">
          {project.outcome}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (project.href) {
    return (
      <Link
        href={project.href}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Apri il progetto ${project.name}`}
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function PortfolioSection() {
  return (
    <section id="work" className="border-b border-white/10 bg-background py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Concept realistici, pensati per problemi di business concreti."
        >
          Questi progetti dimostrativi non rappresentano clienti reali: sono
          esempi creati per mostrare le capacità di design, sviluppo e strategia
          digitale di Novary per aziende e professionisti italiani.
        </SectionHeading>

        <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={project.name}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

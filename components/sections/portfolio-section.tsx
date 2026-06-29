"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/fade-in";
import {
  ProjectLogo,
  type ProjectLogoVariant
} from "@/components/project-logo";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

type PortfolioProject = {
  name: string;
  type: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  href?: string;
  preview?: string;
  logo: ProjectLogoVariant;
};

const projects: PortfolioProject[] = [
  {
    name: "Cutly",
    type: "Case study",
    category: "Prenotazioni saloni",
    description:
      "Piattaforma premium per prenotare servizi, professionisti, giorno e orario con un flusso guidato.",
    outcome:
      "Meno telefonate ripetitive, agenda piu ordinata e un'esperienza cliente piu fluida da mobile.",
    tags: ["Booking", "Calendario", "Demo interattiva"],
    href: "/portfolio/cutly",
    preview: "cutly",
    logo: "cutly"
  },
  {
    name: "Veyra",
    type: "Case study",
    category: "Moda premium",
    description:
      "E-commerce editoriale per abbigliamento, scarpe e accessori, con filtro categorie, vista rapida e carrello.",
    outcome:
      "Catalogo piu leggibile, presentazione prodotto piu elegante e acquisto piu diretto da smartphone.",
    tags: ["E-commerce", "Fashion", "Carrello"],
    href: "/portfolio/veyra",
    preview: "veyra",
    logo: "veyra"
  },
  {
    name: "Studio professionale",
    type: "Concept",
    category: "Presenza digitale",
    description:
      "Una struttura premium per uno studio locale che deve comunicare fiducia, servizi e richiesta di contatto.",
    outcome:
      "Obiettivo: aumentare la qualita delle richieste e rendere il brand piu autorevole online.",
    tags: ["Sito aziendale", "Esperienza mobile", "SEO locale"],
    logo: "studio"
  },
  {
    name: "Commerce locale",
    type: "Concept",
    category: "Vendita online",
    description:
      "Un percorso di acquisto essenziale per un'attivita che vuole vendere prodotti selezionati con chiarezza.",
    outcome:
      "Obiettivo: rendere semplice la scoperta del prodotto e ridurre le frizioni prima dell'acquisto.",
    tags: ["Catalogo", "Checkout", "Prodotto"],
    logo: "commerce"
  },
  {
    name: "Automazione contatti",
    type: "Concept",
    category: "Automazione AI",
    description:
      "Un flusso dimostrativo per raccogliere richieste, qualificarle e preparare risposte operative piu rapide.",
    outcome:
      "Obiettivo: meno lavoro manuale, dati piu ordinati e tempi di risposta piu competitivi.",
    tags: ["AI", "Lead flow", "Pannello operativo"],
    logo: "automation"
  }
];

function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
}

function MockupPreview({
  index,
  variant,
  logo
}: {
  index: number;
  variant?: string;
  logo: ProjectLogoVariant;
}) {
  if (variant === "veyra") {
    return (
      <div
        className="relative h-56 overflow-hidden rounded-lg border border-white/10 bg-white transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f7f5f0_0%,#f7f5f0_52%,#111111_52%,#111111_100%)]" />
        <div className="absolute left-5 top-5">
          <ProjectLogo variant={logo} size="sm" />
        </div>
        <div className="absolute right-4 top-4 rounded-md border border-white/20 bg-white p-1 shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
          <ProjectLogo variant={logo} size="sm" markOnly />
        </div>
        <div className="absolute left-5 top-24 h-24 w-32 rounded-t-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]" />
        <div className="absolute left-12 top-32 h-16 w-16 rounded-md bg-black" />
        <div className="absolute bottom-5 left-5 rounded-md bg-white px-4 py-3 shadow-[0_14px_36px_rgba(0,0,0,0.16)]">
          <div className="h-2 w-28 rounded-sm bg-black/80" />
          <div className="mt-2 h-1.5 w-16 rounded-sm bg-black/30" />
        </div>
        <div className="absolute bottom-9 right-5 h-12 w-28 rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]" />
      </div>
    );
  }

  if (variant === "cutly") {
    return (
      <div
        className="relative h-56 overflow-hidden rounded-lg border border-white/10 bg-[#0b0907] transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(109,74,255,0.24),transparent_28%),linear-gradient(135deg,#17120d_0%,#050505_74%)]" />
        <div className="absolute left-5 top-5">
          <ProjectLogo variant={logo} size="sm" />
        </div>
        <div className="absolute right-4 top-4 rounded-md border border-white/10 bg-black/30 p-1">
          <ProjectLogo variant={logo} size="sm" markOnly />
        </div>
        <div className="absolute left-5 right-5 top-24 grid grid-cols-2 gap-2">
          {["Servizio", "Luca", "10 luglio", "11:00"].map((item, itemIndex) => (
            <div
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.045] p-3"
            >
              <div className="h-2 w-12 rounded-sm bg-white/[0.18]" />
              <div
                className="mt-3 h-2 rounded-sm bg-primary"
                style={{ width: `${48 + itemIndex * 9}%` }}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-md bg-white px-4 py-3">
          <div className="h-2 w-28 rounded-sm bg-black/80" />
          <div className="mt-2 h-1.5 w-20 rounded-sm bg-black/30" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative h-56 overflow-hidden rounded-lg border border-white/10 bg-black transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 surface-grid opacity-70" />
      <div className="absolute left-5 top-5">
        <ProjectLogo variant={logo} size="sm" />
      </div>
      <div className="absolute right-4 top-4 rounded-md border border-white/10 bg-black/30 p-1">
        <ProjectLogo variant={logo} size="sm" markOnly />
      </div>
      <div className="absolute left-5 top-20 h-20 w-36 rounded-md border border-white/10 bg-white/[0.04]">
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
    <Card
      className="group relative h-full overflow-hidden bg-white/[0.03] transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out-expo hover:-translate-y-px hover:border-primary/25 hover:bg-white/[0.052] hover:shadow-[0_28px_100px_rgba(109,74,255,0.13)]"
      onMouseMove={onMouseMove}
    >
      {/* Mouse-tracking glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(109,74,255,0.11), transparent 70%)"
        }}
      />

      <MockupPreview index={index} variant={project.preview} logo={project.logo} />
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{project.type}</Badge>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 flex-none text-muted-foreground transition-[transform,color] duration-150 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
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
        <p className="mt-6 text-sm font-medium text-primary">
          {project.href ? "Apri case study" : "Concept esplorativo"}
        </p>
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
    <section id="work" className="border-b border-white/10 bg-background py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Case study pensati per mostrare come Novary costruisce prodotti digitali."
        >
          Progetti dimostrativi, non clienti reali: ogni concept mostra problema,
          soluzione, funzionalita, stack tecnico e demo interattiva con un taglio
          vicino a un prodotto pronto per il mercato.
        </SectionHeading>

        <StaggerContainer className="mt-14 grid gap-5 lg:grid-cols-3">
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

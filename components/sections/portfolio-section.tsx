"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
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
import { cn } from "@/lib/utils";

type PreviewVariant = "cutly" | "veyra" | "atlas" | "orto" | "lumen" | "studio";

type PortfolioProject = {
  name: string;
  type: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  href: string;
  preview: PreviewVariant;
  logo: ProjectLogoVariant;
};

const caseStudies: PortfolioProject[] = [
  {
    name: "Cutly",
    type: "Case study",
    category: "Prenotazioni saloni",
    description:
      "Piattaforma premium per prenotare servizi, professionisti, giorno e orario con un flusso guidato.",
    outcome:
      "Meno telefonate ripetitive, agenda più ordinata e un'esperienza cliente più fluida da mobile.",
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
      "Catalogo più leggibile, presentazione prodotto più elegante e acquisto più diretto da smartphone.",
    tags: ["E-commerce", "Fashion", "Carrello"],
    href: "/portfolio/veyra",
    preview: "veyra",
    logo: "veyra"
  },
  {
    name: "Atlas",
    type: "Case study",
    category: "Automazione AI",
    description:
      "Flusso che raccoglie le richieste in entrata, le classifica per tipo, priorità e sentiment e prepara bozze di risposta.",
    outcome:
      "Meno lavoro manuale, tempi di risposta più rapidi e nessun lead dimenticato.",
    tags: ["AI", "Triage", "Lead flow"],
    href: "/portfolio/atlas",
    preview: "atlas",
    logo: "atlas"
  },
  {
    name: "Orto",
    type: "Case study",
    category: "Ristorazione locale",
    description:
      "Menu digitale e ordini mobile-first per bistrot e take-away, con riepilogo pronto per la cucina.",
    outcome:
      "Ordini più chiari, meno errori al telefono e piatti presentati meglio.",
    tags: ["Menu", "Ordini", "Mobile"],
    href: "/portfolio/orto",
    preview: "orto",
    logo: "orto"
  },
  {
    name: "Lumen",
    type: "Case study",
    category: "Piattaforma corsi",
    description:
      "Piattaforma di corsi con catalogo filtrabile, percorso lezione lineare e progressi sempre visibili.",
    outcome:
      "Scoperta più semplice, percorso di studio chiaro ed esperienza coerente.",
    tags: ["Education", "Catalogo", "Membership"],
    href: "/portfolio/lumen",
    preview: "lumen",
    logo: "lumen"
  },
  {
    name: "Studio",
    type: "Case study",
    category: "Presenza digitale",
    description:
      "Sito premium per studi professionali con servizi chiari, metodo visibile e richiesta di consulenza guidata.",
    outcome:
      "Fiducia prima del contatto, richieste più qualificate e percorso mobile curato.",
    tags: ["Sito premium", "Lead qualificati", "SEO"],
    href: "/portfolio/studio",
    preview: "studio",
    logo: "studio"
  }
];

function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
}

/** Shared grammar for the four "list" mockups (Atlas, Orto, Lumen, Studio) — a 2x2 info grid + bottom summary bar, echoing Cutly's mockup so all six cards read as one family. */
function ListMockup({
  logo,
  bgClassName,
  rows,
  footer
}: {
  logo: ProjectLogoVariant;
  bgClassName: string;
  rows: { label: string; value: string; barClassName: string }[];
  footer: { title: string; subtitle: string };
}) {
  return (
    <div
      className={cn(
        "relative h-56 overflow-hidden rounded-lg border border-white/10 transition-transform duration-500 ease-out-expo group-hover:scale-[1.02]",
        bgClassName
      )}
      aria-hidden="true"
    >
      <div className="absolute left-5 top-5">
        <ProjectLogo variant={logo} size="sm" />
      </div>
      <div className="absolute right-4 top-4 rounded-md border border-white/10 bg-black/30 p-1">
        <ProjectLogo variant={logo} size="sm" markOnly />
      </div>
      <div className="absolute left-5 right-5 top-24 grid grid-cols-2 gap-2">
        {rows.map((row) => (
          <div
            key={row.label}
            className="rounded-md border border-white/10 bg-white/[0.045] p-3"
          >
            <div className="h-2 w-12 rounded-sm bg-white/[0.18]" />
            <div
              className={cn("mt-3 h-2 rounded-sm", row.barClassName)}
              style={{ width: row.value }}
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

function MockupPreview({ variant, logo }: { variant: PreviewVariant; logo: ProjectLogoVariant }) {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgb(var(--glow)/0.22),transparent_28%),linear-gradient(135deg,#17120d_0%,#050505_74%)]" />
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

  if (variant === "atlas") {
    return (
      <ListMockup
        logo={logo}
        bgClassName="bg-[radial-gradient(circle_at_72%_18%,rgba(52,211,153,0.22),transparent_28%),linear-gradient(135deg,#0d1512_0%,#050705_74%)]"
        rows={[
          { label: "Priorità", value: "72%", barClassName: "bg-emerald-400" },
          { label: "Sentiment", value: "58%", barClassName: "bg-emerald-400" },
          { label: "SLA", value: "84%", barClassName: "bg-emerald-400" },
          { label: "Coda", value: "40%", barClassName: "bg-emerald-400" }
        ]}
        footer={{ title: "Richiesta classificata", subtitle: "Bozza pronta in 2s" }}
      />
    );
  }

  if (variant === "orto") {
    return (
      <ListMockup
        logo={logo}
        bgClassName="bg-[radial-gradient(circle_at_72%_18%,rgba(200,100,60,0.22),transparent_28%),linear-gradient(135deg,#170f0a_0%,#080503_74%)]"
        rows={[
          { label: "Tavolo 4", value: "60%", barClassName: "bg-[#c8643c]" },
          { label: "Tavolo 7", value: "75%", barClassName: "bg-[#c8643c]" },
          { label: "Take-away", value: "45%", barClassName: "bg-[#c8643c]" },
          { label: "Consegna", value: "70%", barClassName: "bg-[#c8643c]" }
        ]}
        footer={{ title: "Ordine in cucina", subtitle: "Pronto in 12 min" }}
      />
    );
  }

  if (variant === "lumen") {
    return (
      <ListMockup
        logo={logo}
        bgClassName="bg-[radial-gradient(circle_at_72%_18%,rgba(34,211,238,0.22),transparent_28%),linear-gradient(135deg,#0c0c18_0%,#05050a_74%)]"
        rows={[
          { label: "Modulo 1", value: "90%", barClassName: "bg-cyan-400" },
          { label: "Modulo 2", value: "65%", barClassName: "bg-cyan-400" },
          { label: "Modulo 3", value: "40%", barClassName: "bg-cyan-400" },
          { label: "Modulo 4", value: "20%", barClassName: "bg-cyan-400" }
        ]}
        footer={{ title: "Corso in corso", subtitle: "3 lezioni rimaste" }}
      />
    );
  }

  return (
    <ListMockup
      logo={logo}
      bgClassName="bg-[radial-gradient(circle_at_72%_18%,rgba(143,29,44,0.22),transparent_28%),linear-gradient(135deg,#170d0e_0%,#080505_74%)]"
      rows={[
        { label: "Esigenza", value: "70%", barClassName: "bg-[#c85a68]" },
        { label: "Tempistica", value: "55%", barClassName: "bg-[#c85a68]" },
        { label: "Budget", value: "40%", barClassName: "bg-[#c85a68]" },
        { label: "Documenti", value: "85%", barClassName: "bg-[#c85a68]" }
      ]}
      footer={{ title: "Richiesta qualificata", subtitle: "Pronta per il contatto" }}
    />
  );
}

function CaseStudyCard({ project }: { project: PortfolioProject }) {
  return (
    <Link
      href={project.href}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Apri il progetto ${project.name}`}
    >
      <Card
        className="group relative h-full overflow-hidden bg-white/[0.03] transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out-expo hover:-translate-y-px hover:border-primary/25 hover:bg-white/[0.052] hover:shadow-[0_28px_100px_rgb(var(--glow)/0.13)]"
        onMouseMove={onMouseMove}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgb(var(--glow) / 0.11), transparent 70%)"
          }}
        />
        <MockupPreview variant={project.preview} logo={project.logo} />
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
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-primary">Apri case study</p>
        </CardContent>
      </Card>
    </Link>
  );
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
          soluzione, funzionalità, stack tecnico e demo interattiva con un taglio
          vicino a un prodotto pronto per il mercato.
        </SectionHeading>

        <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2">
          {caseStudies.map((project) => (
            <StaggerItem key={project.name}>
              <CaseStudyCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <p className="mt-10 max-w-2xl text-sm leading-6 text-muted-foreground/70">
            Ogni case study è un concept realistico: serve a mostrare metodo,
            qualità di esecuzione e product thinking senza attribuire risultati
            a clienti reali.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

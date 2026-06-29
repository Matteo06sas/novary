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
    name: "Demo sito aziendale",
    type: "Presenza digitale",
    description:
      "Un progetto dimostrativo per un'attività locale che mostra come presentare servizi, valori e contatti con un'esperienza chiara e premium.",
    outcome: "Design ordinato, navigazione intuitiva e contenuti pensati per generare richieste qualificate.",
    tags: ["Sito aziendale", "Esperienza mobile", "SEO locale"]
  },
  {
    name: "Demo landing page",
    type: "Conversione",
    description:
      "Una pagina dimostrativa per promuovere un servizio specifico, con messaggio diretto, sezioni essenziali e invito all'azione evidente.",
    outcome: "Una struttura focalizzata che accompagna il visitatore dalla proposta al contatto.",
    tags: ["Landing page", "Copywriting", "CTA"]
  },
  {
    name: "Demo automazione AI",
    type: "Efficienza",
    description:
      "Un esempio di flusso digitale per raccogliere richieste, qualificare i contatti e velocizzare le risposte operative.",
    outcome: "Meno passaggi manuali, dati più ordinati e una gestione più rapida delle opportunità.",
    tags: ["Automazione AI", "Flusso contatti", "Pannello operativo"]
  }
];

function MockupPreview({ index }: { index: number }) {
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

export function PortfolioSection() {
  return (
    <section id="work" className="border-b border-white/10 bg-background py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Progetti dimostrativi che raccontano il nostro metodo."
        >
          Questi progetti dimostrativi non rappresentano clienti reali: sono
          esempi creati per mostrare le capacità di design, sviluppo e strategia
          digitale di Novary per aziende e professionisti italiani.
        </SectionHeading>

        <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={project.name}>
              <Card className="h-full overflow-hidden bg-card/90">
                <MockupPreview index={index} />
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <Badge variant="secondary">{project.type}</Badge>
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

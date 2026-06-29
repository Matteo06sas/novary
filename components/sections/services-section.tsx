"use client";

import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Code2,
  LayoutTemplate,
  SearchCheck,
  ShoppingCart,
  Wrench
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  signal: string;
  points: string[];
};

const services: Service[] = [
  {
    title: "Siti web premium",
    description:
      "Presenze digitali veloci, autorevoli e progettate per trasformare la prima impressione in fiducia.",
    icon: Code2,
    signal: "Identità",
    points: ["Design su misura", "Copy chiaro", "Performance curate"]
  },
  {
    title: "E-commerce",
    description:
      "Esperienze di acquisto eleganti, con cataloghi ordinati e percorsi semplici dal prodotto al contatto.",
    icon: ShoppingCart,
    signal: "Vendita",
    points: ["Catalogo leggibile", "Schede prodotto premium", "Carrello intuitivo"]
  },
  {
    title: "Landing page",
    description:
      "Pagine focalizzate su campagne, servizi o lanci, con gerarchia visiva e CTA senza attrito.",
    icon: LayoutTemplate,
    signal: "Conversione",
    points: ["Messaggio diretto", "Sezioni essenziali", "CTA visibili"]
  },
  {
    title: "Automazioni AI",
    description:
      "Flussi pratici per qualificare contatti, ridurre lavoro ripetitivo e accelerare le risposte.",
    icon: Bot,
    signal: "Efficienza",
    points: ["Qualifica lead", "Risposte assistite", "Processi più fluidi"]
  },
  {
    title: "Manutenzione",
    description:
      "Supporto continuativo per mantenere il prodotto stabile, aggiornato e coerente con il brand.",
    icon: Wrench,
    signal: "Continuità",
    points: ["Controlli periodici", "Aggiornamenti", "Evoluzioni mirate"]
  },
  {
    title: "SEO tecnica",
    description:
      "Struttura, contenuti e velocità pensati per rendere il sito più leggibile anche dai motori di ricerca.",
    icon: SearchCheck,
    signal: "Visibilità",
    points: ["Struttura pulita", "Performance", "Indicizzazione"]
  }
];

function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
}

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-white/10 bg-[#050506] py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Servizi"
          title="Design, sviluppo e strategia per prodotti digitali che sembrano premium."
        >
          Novary costruisce esperienze digitali con una direzione chiara: meno
          rumore, più precisione, più fiducia nel momento in cui un potenziale
          cliente arriva sul sito.
        </SectionHeading>

        <StaggerContainer className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title}>
                <Card
                  className="group relative h-full overflow-hidden bg-white/[0.028] transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out-expo hover:-translate-y-px hover:border-primary/25 hover:bg-white/[0.05] hover:shadow-[0_24px_80px_rgba(109,74,255,0.12)]"
                  onMouseMove={onMouseMove}
                >
                  {/* Mouse-tracking glow */}
                  <div
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(320px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(109,74,255,0.13), transparent 70%)"
                    }}
                  />

                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-transform duration-200 ease-out-expo group-hover:scale-110">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase text-primary">
                        {service.signal}
                      </p>
                      <CardTitle className="mt-2">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="border-t border-white/10 pt-5">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-sm bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

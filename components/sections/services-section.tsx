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

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  signal: string;
};

const services: Service[] = [
  {
    title: "Siti web premium",
    description:
      "Presenze digitali veloci, autorevoli e progettate per trasformare la prima impressione in fiducia.",
    icon: Code2,
    signal: "Identità"
  },
  {
    title: "E-commerce",
    description:
      "Esperienze di acquisto eleganti, con cataloghi ordinati e percorsi semplici dal prodotto al contatto.",
    icon: ShoppingCart,
    signal: "Vendita"
  },
  {
    title: "Landing page",
    description:
      "Pagine focalizzate su campagne, servizi o lanci, con gerarchia visiva e CTA senza attrito.",
    icon: LayoutTemplate,
    signal: "Conversione"
  },
  {
    title: "Automazioni AI",
    description:
      "Flussi pratici per qualificare contatti, ridurre lavoro ripetitivo e accelerare le risposte.",
    icon: Bot,
    signal: "Efficienza"
  },
  {
    title: "Manutenzione",
    description:
      "Supporto continuativo per mantenere il prodotto stabile, aggiornato e coerente con il brand.",
    icon: Wrench,
    signal: "Continuità"
  },
  {
    title: "SEO tecnica",
    description:
      "Struttura, contenuti e velocità pensati per rendere il sito più leggibile anche dai motori di ricerca.",
    icon: SearchCheck,
    signal: "Visibilità"
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-white/10 bg-background py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Servizi"
          title="Design, sviluppo e strategia per prodotti digitali che sembrano premium."
        >
          Novary costruisce esperienze digitali con una direzione chiara: meno
          rumore, più precisione, più fiducia nel momento in cui un potenziale
          cliente arriva sul sito.
        </SectionHeading>

        <StaggerContainer className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title}>
                <div className="group grid items-center gap-x-8 gap-y-3 py-6 transition-colors duration-200 ease-out-expo hover:bg-white/[0.018] sm:py-7 lg:grid-cols-[1fr_2fr_auto]">
                  {/* Icon + title */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.08] text-primary transition-[transform,border-color,background-color] duration-200 ease-out-expo group-hover:scale-105 group-hover:border-primary/35 group-hover:bg-primary/[0.14]">
                      <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                    </div>
                    <span className="text-base font-semibold text-foreground">
                      {service.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-6 text-muted-foreground pl-14 lg:pl-0">
                    {service.description}
                  </p>

                  {/* Signal tag */}
                  <span className="ml-14 w-max rounded-md border border-primary/20 bg-primary/[0.07] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-primary transition-[border-color,background-color] duration-200 ease-out-expo group-hover:border-primary/35 group-hover:bg-primary/[0.14] lg:ml-0">
                    {service.signal}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

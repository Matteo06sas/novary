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
  points: string[];
};

const services: Service[] = [
  {
    title: "Siti Web Aziendali",
    description:
      "Siti istituzionali moderni, chiari e autorevoli per presentare la tua attività nel modo giusto.",
    icon: Code2,
    points: ["Progetto visivo su misura", "Struttura per ogni dispositivo", "Testi orientati alla fiducia"]
  },
  {
    title: "E-commerce",
    description:
      "Esperienze di acquisto essenziali, veloci e curate per vendere online con una presenza professionale.",
    icon: ShoppingCart,
    points: ["Cataloghi ordinati", "Percorsi di acquisto chiari", "Base pronta per crescere"]
  },
  {
    title: "Landing Page",
    description:
      "Pagine focalizzate su campagne, servizi o lanci, progettate per trasformare l'attenzione in contatti.",
    icon: LayoutTemplate,
    points: ["Messaggio diretto", "CTA visibili", "Sezioni ottimizzate per conversione"]
  },
  {
    title: "Automazioni AI",
    description:
      "Flussi intelligenti per ridurre attività ripetitive, migliorare i tempi di risposta e gestire meglio i contatti.",
    icon: Bot,
    points: ["Qualifica contatti", "Risposte assistite", "Processi interni più fluidi"]
  },
  {
    title: "Manutenzione",
    description:
      "Supporto continuativo per mantenere il sito sicuro, aggiornato e coerente con l'evoluzione del business.",
    icon: Wrench,
    points: ["Aggiornamenti tecnici", "Controlli periodici", "Piccole evoluzioni"]
  },
  {
    title: "Ottimizzazione SEO",
    description:
      "Struttura, contenuti e performance pensati per migliorare la visibilità online e intercettare clienti locali.",
    icon: SearchCheck,
    points: ["SEO tecnica", "Contenuti strategici", "Performance e indicizzazione"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="surface-grid border-b border-white/10 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Servizi"
          title="Tutto ciò che serve per una presenza digitale moderna, solida e credibile."
        >
          Novary unisce design essenziale, sviluppo affidabile e strumenti
          intelligenti per aiutare aziende locali e professionisti a crescere
          online.
        </SectionHeading>

        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title}>
                <Card className="h-full bg-black/70 backdrop-blur">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
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

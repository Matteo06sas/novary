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
  signal: string;
};

const services: Service[] = [
  {
    title: "Siti Web Aziendali",
    description:
      "Siti istituzionali moderni, chiari e autorevoli per presentare la tua attività nel modo giusto.",
    icon: Code2,
    signal: "Credibilità",
    points: ["Progetto visivo su misura", "Struttura per ogni dispositivo", "Testi orientati alla fiducia"]
  },
  {
    title: "E-commerce",
    description:
      "Esperienze di acquisto essenziali, veloci e curate per vendere online con una presenza professionale.",
    icon: ShoppingCart,
    signal: "Vendita",
    points: ["Cataloghi ordinati", "Percorsi di acquisto chiari", "Base pronta per crescere"]
  },
  {
    title: "Landing Page",
    description:
      "Pagine focalizzate su campagne, servizi o lanci, progettate per trasformare l'attenzione in contatti.",
    icon: LayoutTemplate,
    signal: "Conversione",
    points: ["Messaggio diretto", "CTA visibili", "Sezioni ottimizzate per conversione"]
  },
  {
    title: "Automazioni AI",
    description:
      "Flussi intelligenti per ridurre attività ripetitive, migliorare i tempi di risposta e gestire meglio i contatti.",
    icon: Bot,
    signal: "Efficienza",
    points: ["Qualifica contatti", "Risposte assistite", "Processi interni più fluidi"]
  },
  {
    title: "Manutenzione",
    description:
      "Supporto continuativo per mantenere il sito sicuro, aggiornato e coerente con l'evoluzione del business.",
    icon: Wrench,
    signal: "Continuità",
    points: ["Aggiornamenti tecnici", "Controlli periodici", "Piccole evoluzioni"]
  },
  {
    title: "Ottimizzazione SEO",
    description:
      "Struttura, contenuti e performance pensati per migliorare la visibilità online e intercettare clienti locali.",
    icon: SearchCheck,
    signal: "Visibilità",
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

        <StaggerContainer className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title}>
                <Card className="group h-full overflow-hidden bg-black/72 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.045]">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary shadow-[0_0_28px_rgba(0,122,255,0.12)]">
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

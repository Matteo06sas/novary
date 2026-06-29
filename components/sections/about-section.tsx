import { CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

const principles = [
  "Un design premium deve rendere l'attività più chiara, non più complessa.",
  "La tecnologia ha valore quando migliora l'esperienza del cliente e fa risparmiare tempo.",
  "Performance, usabilità e manutenzione devono essere presenti fin dalla prima versione.",
  "Testi chiari e percorsi semplici aiutano il visitatore a fidarsi e a contattarti."
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10 bg-background py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <SectionHeading
            eyebrow="Studio"
            title="Esperienze digitali moderne, progettate per crescere."
          >
            Novary sviluppa esperienze digitali moderne per aziende locali e
            professionisti, con un focus concreto su performance, usabilità e
            crescita del business.
          </SectionHeading>

          <FadeIn className="rounded-lg border border-white/10 bg-white/[0.025] p-6">
            <p className="text-base leading-7 text-muted-foreground">
              Ogni progetto nasce da una lettura attenta degli obiettivi e
              diventa un sistema digitale essenziale, veloce e coerente con il
              posizionamento dell’attività. L’obiettivo è costruire strumenti
              belli da vedere, semplici da usare e utili per generare nuove
              opportunità.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-3xl font-semibold text-foreground">01</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  studio focalizzato
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-foreground">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  strategia su misura
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <FadeIn
              key={principle}
              className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.025] p-5"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 flex-none text-primary"
              />
              <p className="text-sm leading-6 text-muted-foreground">
                {principle}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

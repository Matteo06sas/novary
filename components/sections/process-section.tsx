import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const steps = [
  {
    step: "01",
    title: "Analisi",
    label: "Direzione strategica",
    description:
      "Allineiamo obiettivi, pubblico, offerta e priorità commerciali per capire cosa deve davvero ottenere il sito."
  },
  {
    step: "02",
    title: "Progettazione",
    label: "Struttura e identità",
    description:
      "Definiamo architettura, contenuti e direzione visiva con un'interfaccia essenziale, leggibile e coerente."
  },
  {
    step: "03",
    title: "Sviluppo",
    label: "Performance e dettagli",
    description:
      "Costruiamo componenti puliti, pagine responsive e una base tecnica veloce, solida e pronta per crescere."
  },
  {
    step: "04",
    title: "Consegna",
    label: "Lancio e prossimi passi",
    description:
      "Prepariamo la pubblicazione, controlliamo gli elementi critici e condividiamo indicazioni chiare per evolvere."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-white/10 bg-[#070707] py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Processo"
            title="Un metodo ordinato, pensato per arrivare online con sicurezza."
          >
            Novary mantiene il lavoro snello e trasparente, con decisioni
            guidate dagli obiettivi reali della tua attività.
          </SectionHeading>

          <StaggerContainer className="grid gap-4">
            {steps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04] sm:grid-cols-[5rem_1fr]">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-sm font-semibold text-primary">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-primary">
                      {item.label}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            Il risultato è una presenza digitale curata, veloce e costruita per
            supportare il business anche dopo il lancio.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const steps = [
  {
    step: "01",
    title: "Analisi",
    description:
      "Comprendiamo obiettivi, pubblico, servizi e priorità commerciali per definire una direzione chiara."
  },
  {
    step: "02",
    title: "Progettazione",
    description:
      "Trasformiamo la strategia in struttura, contenuti e interfacce essenziali, eleganti e facili da usare."
  },
  {
    step: "03",
    title: "Sviluppo",
    description:
      "Realizziamo il sito con componenti puliti, performance solide, attenzione al mobile e dettagli pronti per la pubblicazione."
  },
  {
    step: "04",
    title: "Consegna",
    description:
      "Pubblichiamo il progetto, verifichiamo gli elementi essenziali e ti consegniamo una base digitale chiara da far evolvere."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-white/10 bg-[#070707] py-24">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Processo"
            title="Un percorso chiaro dall'idea alla pubblicazione."
          >
            Novary mantiene il lavoro snello e trasparente, con decisioni
            guidate dagli obiettivi reali della tua attività.
          </SectionHeading>

          <StaggerContainer className="grid gap-4">
            {steps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-[5rem_1fr]">
                  <div className="text-sm font-semibold text-primary">
                    {item.step}
                  </div>
                  <div>
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

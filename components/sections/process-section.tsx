import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const steps = [
  {
    step: "01",
    title: "Direzione",
    label: "Strategia e posizionamento",
    description:
      "Allineiamo obiettivi, pubblico, offerta e tono visivo per capire quale esperienza deve costruire fiducia."
  },
  {
    step: "02",
    title: "Interfaccia",
    label: "Architettura e design",
    description:
      "Definiamo struttura, contenuti e componenti con una gerarchia pulita, mobile-first e coerente con il brand."
  },
  {
    step: "03",
    title: "Prodotto",
    label: "Sviluppo e interazioni",
    description:
      "Costruiamo pagine veloci, responsive e curate nei micro dettagli, senza aggiungere complessita inutile."
  },
  {
    step: "04",
    title: "Lancio",
    label: "Controllo e crescita",
    description:
      "Verifichiamo performance, contenuti e percorso utente, poi prepariamo una base solida per evoluzioni future."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="border-b border-white/10 bg-[#070708] py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Processo"
            title="Un metodo preciso, pensato per trasformare un'idea in prodotto digitale."
          >
            La parte visibile deve sembrare semplice. Dietro, Novary lavora su
            direzione, struttura, performance e dettagli per rendere ogni scelta
            intenzionale.
          </SectionHeading>

          <StaggerContainer className="grid gap-4">
            {steps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.028] p-5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.05] sm:grid-cols-[5rem_1fr]">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-sm font-semibold text-primary">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase text-primary">
                      {item.label}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">
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
            Il risultato e una presenza digitale elegante, veloce e pronta a
            sostenere il business anche dopo il lancio.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

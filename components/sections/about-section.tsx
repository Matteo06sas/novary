import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";
import { NovaryLogo } from "@/components/novary-logo";

const principles = [
  "Un design premium rende l'attività più chiara, non più complessa.",
  "La tecnologia ha valore quando migliora l'esperienza del cliente e fa risparmiare tempo.",
  "Performance, usabilità e manutenzione devono essere presenti fin dalla prima versione.",
  "Testi chiari e percorsi semplici aiutano il visitatore a fidarsi e a contattarti."
];

export function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10 bg-background py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <SectionHeading
            title="Un piccolo studio digitale con standard da prodotto premium."
          >
            Novary sviluppa esperienze digitali moderne per aziende, brand e
            professionisti che vogliono una presenza online più curata,
            memorabile e concreta.
          </SectionHeading>

          <FadeIn className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.028] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.22)]">
            <div className="grid place-items-center rounded-lg border border-white/10 bg-black/45 px-7 py-8">
              <NovaryLogo variant="wordmark" className="w-full max-w-[520px]" />
            </div>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Ogni progetto nasce da una lettura attenta degli obiettivi e
              diventa un sistema digitale essenziale, veloce e coerente con il
              posizionamento dell&apos;attività. L&apos;obiettivo è costruire strumenti
              belli da vedere, semplici da usare e utili per generare nuove
              opportunità.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-px bg-white/[0.06] md:grid-cols-2">
          {principles.map((principle) => (
            <FadeIn
              key={principle}
              className="border-l-2 border-primary/30 bg-background px-6 py-5 transition-[border-color,background-color] duration-200 ease-out-expo hover:border-primary/60 hover:bg-white/[0.02]"
            >
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

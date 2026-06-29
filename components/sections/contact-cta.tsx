import { ArrowUpRight, Mail } from "lucide-react";

import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section id="contact" className="bg-[#050505] py-24">
      <div className="section-shell">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary">
            <Mail aria-hidden="true" className="h-5 w-5" />
          </div>
          <h2 className="mt-7 text-balance text-4xl font-semibold text-foreground sm:text-5xl">
            Parliamo del tuo progetto
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Contattaci per una consulenza gratuita.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:hello@novary.dev?subject=Consulenza%20gratuita%20Novary">
                Contattaci
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#services">Scopri i servizi</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

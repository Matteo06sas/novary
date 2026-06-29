import type { Metadata } from "next";

import { ConsulenzaForm } from "@/components/consulenza-form";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Richiedi consulenza",
  description:
    "Raccontaci il tuo progetto: sito web, e-commerce, SaaS o automazioni AI. Novary risponde entro 24/48 ore lavorative.",
  alternates: {
    canonical: "/consulenza"
  },
  openGraph: {
    title: "Richiedi consulenza | Novary",
    description:
      "Raccontaci il tuo progetto: sito web, e-commerce, SaaS o automazioni AI. Novary risponde entro 24/48 ore lavorative.",
    url: "https://novary.dev/consulenza"
  }
};

export default function ConsulenzaPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-b border-white/10 bg-background py-20 sm:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <FadeIn className="lg:sticky lg:top-28">
            <Badge className="border-primary/25 bg-primary/10 text-primary shadow-none">
              Richiedi consulenza
            </Badge>
            <h1 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl">
              Raccontaci il progetto, ti rispondiamo con una direzione chiara.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
              Novary aiuta aziende, brand e professionisti a costruire siti
              web, e-commerce, prodotti SaaS e automazioni AI con
              un&apos;estetica premium e una struttura solida. Compila il
              form: useremo le informazioni per preparare una proposta
              pertinente, senza giri inutili.
            </p>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              Rispondo entro 24/48 ore lavorative.
              <br />
              Oppure scrivimi direttamente a{" "}
              <a
                href="mailto:novary.dev@gmail.com"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                novary.dev@gmail.com
              </a>
              .
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ConsulenzaForm />
          </FadeIn>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

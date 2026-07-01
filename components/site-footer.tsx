import { NovaryLogo } from "@/components/novary-logo";

const footerLinks = [
  { label: "Servizi", href: "/#services" },
  { label: "Portfolio", href: "/#work" },
  { label: "Processo", href: "/#process" },
  { label: "Richiedi consulenza", href: "/consulenza" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a href="/" className="inline-flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/[0.035] p-1.5">
                <NovaryLogo variant="mark" className="h-full w-full rounded-md" />
              </span>
              <span>
                <span className="block text-sm font-semibold tracking-[0.2em] text-foreground">
                  NOVARY
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.34em] text-muted-foreground">
                  Digital Solutions
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              Prodotti digitali premium per aziende, brand e professionisti che
              vogliono distinguersi online.
            </p>
            <p className="mt-4 text-xs text-muted-foreground/50">
              © 2026 Novary. Tutti i diritti riservati.
            </p>
          </div>
          <nav className="flex flex-wrap gap-5" aria-label="Navigazione footer">
            {footerLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-muted-foreground transition-colors duration-150 ease-out-expo hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-foreground/50 after:transition-[width] after:duration-200 after:ease-out-expo hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  { label: "Servizi", href: "#services" },
  { label: "Lavori", href: "#work" },
  { label: "Processo", href: "#process" },
  { label: "Contatti", href: "mailto:hello@novary.dev" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="section-shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Novary</p>
          <p className="mt-1 text-sm text-muted-foreground">
            novary.dev - esperienze digitali moderne per aziende e professionisti.
          </p>
        </div>
        <nav className="flex flex-wrap gap-5" aria-label="Navigazione footer">
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

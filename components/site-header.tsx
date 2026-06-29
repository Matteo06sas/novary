import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Servizi", href: "#services" },
  { label: "Lavori", href: "#work" },
  { label: "Processo", href: "#process" },
  { label: "Studio", href: "#about" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Homepage Novary">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white text-sm font-bold text-black">
            N
          </span>
          <span className="text-sm font-semibold text-foreground">Novary</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigazione principale">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href="mailto:hello@novary.dev?subject=Richiesta%20preventivo%20Novary">
            Richiedi un preventivo
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  );
}

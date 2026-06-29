import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Servizi", href: "/#services" },
  { label: "Lavori", href: "/#work" },
  { label: "Processo", href: "/#process" },
  { label: "Studio", href: "/#about" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/78 backdrop-blur-2xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="Homepage Novary">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white text-sm font-bold text-black shadow-[0_0_28px_rgba(255,255,255,0.12)]">
            N
          </span>
          <span className="text-sm font-semibold text-foreground">Novary</span>
        </a>

        <nav
          className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] px-2 py-1 md:flex"
          aria-label="Navigazione principale"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="hidden bg-white text-black shadow-none hover:bg-white/90 sm:inline-flex"
        >
          <a href="mailto:hello@novary.dev?subject=Richiesta%20preventivo%20Novary">
            Richiedi un preventivo
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  );
}

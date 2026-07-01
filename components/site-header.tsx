"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { NovaryLogo } from "@/components/novary-logo";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Servizi", href: "/#services" },
  { label: "Portfolio", href: "/#work" },
  { label: "Processo", href: "/#process" },
  { label: "Studio", href: "/#about" }
];

const EASE_OUT = [0.23, 1, 0.32, 1];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-background/72 backdrop-blur-2xl">
      <div className="section-shell flex h-[4.5rem] items-center justify-between">
        <a
          href="/"
          className="group flex items-center gap-3"
          aria-label="Homepage Novary"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.035] p-1.5 shadow-[0_0_34px_rgb(var(--glow)/0.22)] transition-transform duration-200 ease-out-expo group-hover:scale-[1.06] group-active:scale-[0.97]">
            <NovaryLogo
              variant="mark"
              className="h-full w-full rounded-md"
              priority
            />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-semibold tracking-[0.18em] text-foreground">
              NOVARY
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Digital Solutions
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] p-1 shadow-[0_18px_60px_rgba(0,0,0,0.24)] md:flex"
          aria-label="Navigazione principale"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-[background-color,color] duration-150 ease-out-expo hover:bg-white/[0.09] hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-white text-black shadow-[0_0_34px_rgba(255,255,255,0.12)] hover:bg-white/90 sm:inline-flex"
          >
            <a href="/consulenza">
              Richiedi consulenza
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-foreground transition-[background-color,transform] duration-150 ease-out-expo hover:bg-white/[0.08] active:scale-[0.93] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  transition={{ duration: 0.18, ease: EASE_OUT }}
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                  transition={{ duration: 0.18, ease: EASE_OUT }}
                >
                  <Menu aria-hidden="true" className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="border-t border-white/[0.08] bg-background/95 px-4 pb-6 pt-4 backdrop-blur-2xl md:hidden"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label="Navigazione mobile"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-[background-color,color] duration-150 ease-out-expo hover:bg-white/[0.06] hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button
              asChild
              size="lg"
              className="mt-4 w-full bg-white text-black shadow-[0_0_34px_rgba(255,255,255,0.12)] hover:bg-white/90"
            >
              <a href="/consulenza" onClick={() => setIsMenuOpen(false)}>
                Richiedi consulenza
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

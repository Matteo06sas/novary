"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MessageSquareText
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NeedId = "orientamento" | "pratica" | "continuita";
type UrgencyId = "questa-settimana" | "due-settimane" | "nessuna-urgenza";

type NeedOption = {
  id: NeedId;
  icon: LucideIcon;
  label: string;
  description: string;
  recommendation: string;
  route: string;
  preparation: string[];
};

type UrgencyOption = {
  id: UrgencyId;
  label: string;
  note: string;
};

const needs = [
  {
    id: "orientamento",
    icon: MessageSquareText,
    label: "Prima consulenza",
    description: "La persona vuole capire se lo studio è adatto prima di inviare dettagli sensibili.",
    recommendation: "Call conoscitiva breve",
    route: "Richiesta da qualificare prima del preventivo",
    preparation: ["Obiettivo della richiesta", "Contesto essenziale", "Vincoli o scadenze note"]
  },
  {
    id: "pratica",
    icon: FileText,
    label: "Pratica specifica",
    description: "La richiesta ha già documenti, date o passaggi avviati e serve un inquadramento ordinato.",
    recommendation: "Analisi preliminare",
    route: "Raccolta informazioni prima della risposta",
    preparation: ["Documenti disponibili", "Cronologia sintetica", "Risultato desiderato"]
  },
  {
    id: "continuita",
    icon: ClipboardCheck,
    label: "Supporto continuativo",
    description: "Un business cerca un riferimento stabile per decisioni ricorrenti o crescita strutturata.",
    recommendation: "Percorso su misura",
    route: "Valutazione del rapporto continuativo",
    preparation: ["Area di lavoro", "Frequenza del supporto", "Priorità dei prossimi mesi"]
  }
] as const satisfies ReadonlyArray<NeedOption>;

const urgencyOptions = [
  {
    id: "questa-settimana",
    label: "Questa settimana",
    note: "La CTA privilegia una risposta rapida e una call breve."
  },
  {
    id: "due-settimane",
    label: "Entro due settimane",
    note: "Il flusso lascia spazio a una raccolta dati più accurata."
  },
  {
    id: "nessuna-urgenza",
    label: "Nessuna urgenza",
    note: "Il contatto viene orientato verso una consulenza pianificata."
  }
] as const satisfies ReadonlyArray<UrgencyOption>;

export function StudioLeadDemo() {
  const [selectedNeedId, setSelectedNeedId] = useState<NeedId>("orientamento");
  const [selectedUrgencyId, setSelectedUrgencyId] =
    useState<UrgencyId>("due-settimane");
  const shouldReduceMotion = useReducedMotion();

  const selectedNeed = useMemo(
    () => needs.find((need) => need.id === selectedNeedId) ?? needs[0],
    [selectedNeedId]
  );

  const selectedUrgency = useMemo(
    () =>
      urgencyOptions.find((urgency) => urgency.id === selectedUrgencyId) ??
      urgencyOptions[0],
    [selectedUrgencyId]
  );

  const SelectedIcon = selectedNeed.icon;

  return (
    <div className="overflow-hidden rounded-lg border border-[#d9ddd8] bg-[#111312] p-4 text-white sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8f1d2c] text-white">
              <CalendarDays aria-hidden="true" className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Qualifica richiesta</h3>
              <p className="mt-1 text-sm text-white/60">
                Prototipo locale, nessun dato inviato.
              </p>
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-white">
              Tipo di esigenza
            </legend>
            <div className="mt-3 grid gap-2">
              {needs.map((need) => {
                const Icon = need.icon;
                const isSelected = need.id === selectedNeedId;

                return (
                  <button
                    key={need.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedNeedId(need.id)}
                    className={cn(
                      "rounded-lg border p-4 text-left transition-[background-color,border-color,transform] duration-150 ease-out-expo active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9c2b6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111312]",
                      isSelected
                        ? "border-[#e8d9cf]/60 bg-[#f5f1ec] text-[#111312]"
                        : "border-white/10 bg-white/[0.045] text-white hover:bg-white/[0.07]"
                    )}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md",
                          isSelected
                            ? "bg-[#8f1d2c] text-white"
                            : "bg-white/[0.07] text-white/75"
                        )}
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">
                          {need.label}
                        </span>
                        <span
                          className={cn(
                            "mt-1 block text-sm leading-6",
                            isSelected ? "text-[#4d5550]" : "text-white/60"
                          )}
                        >
                          {need.description}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-white">Tempistica</legend>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              {urgencyOptions.map((urgency) => {
                const isSelected = urgency.id === selectedUrgencyId;

                return (
                  <button
                    key={urgency.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedUrgencyId(urgency.id)}
                    className={cn(
                      "min-h-11 rounded-md border px-3 py-2 text-sm font-medium transition-[background-color,border-color,transform] duration-150 ease-out-expo active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9c2b6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111312]",
                      isSelected
                        ? "border-[#e8d9cf]/60 bg-[#f5f1ec] text-[#111312]"
                        : "border-white/10 bg-white/[0.045] text-white/70 hover:bg-white/[0.07]"
                    )}
                  >
                    {urgency.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 sm:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedNeedId}-${selectedUrgencyId}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    Percorso consigliato
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {selectedNeed.recommendation}
                  </h3>
                </div>
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#f5f1ec] text-[#8f1d2c]">
                  <SelectedIcon aria-hidden="true" className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
                <p className="text-sm font-semibold text-white">
                  {selectedNeed.route}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {selectedUrgency.note}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-white">
                  Informazioni da preparare
                </p>
                <div className="mt-3 grid gap-2">
                  {selectedNeed.preparation.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-white/70"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4 flex-none text-[#d9c2b6]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-white/60">
                  Il risultato è una richiesta più completa prima del primo
                  scambio diretto.
                </p>
                <Button
                  asChild
                  className="bg-white text-[#111312] shadow-none hover:bg-[#e8e8e2]"
                >
                  <a href="mailto:novary.dev@gmail.com?subject=Consulenza%20Novary%20-%20Studio">
                    Scrivi a Novary
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

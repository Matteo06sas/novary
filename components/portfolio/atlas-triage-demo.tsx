"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Ban,
  Handshake,
  LifeBuoy,
  Loader2,
  ReceiptText,
  Sparkles
} from "lucide-react";

import { cn } from "@/lib/utils";

type Priority = "Alta" | "Media" | "Bassa";
type Sentiment = "Positivo" | "Neutro" | "Negativo";

type Request = {
  id: string;
  from: string;
  channel: string;
  message: string;
  category: string;
  categoryIcon: typeof ReceiptText;
  priority: Priority;
  sentiment: Sentiment;
  reply: string;
};

const requests: Request[] = [
  {
    id: "preventivo",
    from: "Marta R.",
    channel: "Form sito",
    message:
      "Buongiorno, vorrei un preventivo per rifare il sito della mia azienda. Abbiamo circa 12 pagine e un catalogo prodotti. Possiamo sentirci questa settimana?",
    category: "Preventivo",
    categoryIcon: ReceiptText,
    priority: "Alta",
    sentiment: "Positivo",
    reply:
      "Ciao Marta, grazie per la richiesta. Per il sito aziendale con catalogo possiamo organizzare una call questa settimana: ti propongo gio o ven mattina. Intanto, quante referenze gestisci a catalogo?"
  },
  {
    id: "supporto",
    from: "Luca P.",
    channel: "Email",
    message:
      "Il modulo di contatto sul nostro sito dà errore quando provo a inviare. I clienti non riescono a scriverci da ieri. Serve una mano urgente.",
    category: "Supporto",
    categoryIcon: LifeBuoy,
    priority: "Alta",
    sentiment: "Negativo",
    reply:
      "Ciao Luca, ci attiviamo subito. Ci mandi un esempio dell'errore e da quale pagina avviene? Nel frattempo controlliamo il form e gli invii lato server per ripristinare la ricezione dei messaggi."
  },
  {
    id: "collaborazione",
    from: "Studio Vivane",
    channel: "LinkedIn",
    message:
      "Ciao! Collaborate con altre agenzie? Vorremmo proporvi una partnership su progetti di branding dove a voi resta lo sviluppo. Possiamo approfondire?",
    category: "Collaborazione",
    categoryIcon: Handshake,
    priority: "Media",
    sentiment: "Positivo",
    reply:
      "Grazie per la proposta! La collaborazione branding + sviluppo ci interessa. Ci raccontate un progetto tipo e i volumi che immaginate, così valutiamo come incastrare i flussi di lavoro?"
  },
  {
    id: "spam",
    from: "seo-deals",
    channel: "Email",
    message:
      "OFFERTA SEO GARANTITA!!! Prima pagina di Google in 48 ore, prezzo shock solo per oggi. Rispondi SUBITO per attivare la promo riservata.",
    category: "Spam",
    categoryIcon: Ban,
    priority: "Bassa",
    sentiment: "Neutro",
    reply:
      "Nessuna azione consigliata: messaggio promozionale non richiesto. Archiviazione automatica, fuori dalla coda delle richieste da gestire."
  }
];

const priorityStyle: Record<Priority, string> = {
  Alta: "border-rose-300/25 bg-rose-300/10 text-rose-200",
  Media: "border-amber-300/25 bg-amber-300/10 text-amber-200",
  Bassa: "border-white/15 bg-white/[0.05] text-white/60"
};

const sentimentStyle: Record<Sentiment, string> = {
  Positivo: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
  Neutro: "border-white/15 bg-white/[0.05] text-white/60",
  Negativo: "border-rose-300/25 bg-rose-300/10 text-rose-200"
};

export function AtlasTriageDemo() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string>(requests[0].id);
  const [analyzedId, setAnalyzedId] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const selected = requests.find((r) => r.id === selectedId) ?? requests[0];
  const result = analyzedId === selectedId ? selected : null;

  function selectRequest(id: string) {
    setSelectedId(id);
    setAnalyzedId(null);
    setIsAnalyzing(false);
  }

  function analyze() {
    if (isAnalyzing) return;
    setIsAnalyzing(true);
    setAnalyzedId(null);
    window.setTimeout(
      () => {
        setIsAnalyzing(false);
        setAnalyzedId(selectedId);
      },
      shouldReduceMotion ? 0 : 650
    );
  }

  const CategoryIcon = selected.categoryIcon;

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0b0f0d]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Sparkles aria-hidden="true" className="h-4 w-4 text-emerald-300" />
          Coda richieste
        </div>
        <span className="text-xs text-white/40">Risultato simulato</span>
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.95fr_1fr]">
        {/* Inbound queue */}
        <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
          <p className="px-1 text-xs font-medium uppercase tracking-[0.16em] text-white/40">
            In entrata
          </p>
          <div className="mt-3 grid gap-2">
            {requests.map((request) => {
              const active = request.id === selectedId;
              return (
                <button
                  key={request.id}
                  type="button"
                  onClick={() => selectRequest(request.id)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-lg border p-3 text-left transition-colors duration-150 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60",
                    active
                      ? "border-emerald-400/40 bg-emerald-400/[0.07]"
                      : "border-white/10 bg-white/[0.025] hover:bg-white/[0.05]"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white">
                      {request.from}
                    </span>
                    <span className="text-[11px] text-white/40">
                      {request.channel}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/55">
                    {request.message}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Analysis panel */}
        <div className="p-4">
          <p className="px-1 text-xs font-medium uppercase tracking-[0.16em] text-white/40">
            Messaggio selezionato
          </p>
          <div className="mt-3 rounded-lg border border-white/10 bg-black/30 p-4">
            <p className="text-sm leading-6 text-white/75">
              {selected.message}
            </p>
          </div>

          <button
            type="button"
            onClick={analyze}
            disabled={isAnalyzing}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-150 ease-out-expo hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f0d] disabled:opacity-70"
          >
            {isAnalyzing ? (
              <>
                <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                Analisi in corso
              </>
            ) : (
              <>
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                Analizza richiesta
              </>
            )}
          </button>

          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key={result.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                className="mt-4 grid gap-3"
              >
                <div className="grid gap-2 sm:grid-cols-3">
                  <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/[0.06] p-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                      Categoria
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-white">
                      <CategoryIcon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-emerald-300"
                      />
                      {result.category}
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                      Priorità
                    </p>
                    <span
                      className={cn(
                        "mt-1.5 inline-flex rounded border px-2 py-0.5 text-xs font-medium",
                        priorityStyle[result.priority]
                      )}
                    >
                      {result.priority}
                    </span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/40">
                      Sentiment
                    </p>
                    <span
                      className={cn(
                        "mt-1.5 inline-flex rounded border px-2 py-0.5 text-xs font-medium",
                        sentimentStyle[result.sentiment]
                      )}
                    >
                      {result.sentiment}
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-emerald-300">
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                    Bozza di risposta
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {result.reply}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                initial={false}
                className="mt-4 rounded-lg border border-dashed border-white/10 bg-white/[0.015] p-4 text-xs leading-5 text-white/40"
              >
                Atlas classifica la richiesta e prepara una bozza. La decisione
                finale resta sempre a una persona.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

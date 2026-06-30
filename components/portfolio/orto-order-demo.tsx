"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Minus, Plus, ShoppingBasket } from "lucide-react";

import { cn } from "@/lib/utils";

type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
};

const categories = ["Antipasti", "Primi", "Dolci", "Bevande"] as const;

const dishes: Dish[] = [
  {
    id: "tagliere",
    name: "Tagliere dell'orto",
    description: "Verdure di stagione, hummus e pane tostato.",
    price: 9,
    category: "Antipasti"
  },
  {
    id: "bruschette",
    name: "Bruschette miste",
    description: "Pomodoro, olive e crema di ceci.",
    price: 7,
    category: "Antipasti"
  },
  {
    id: "tagliatelle",
    name: "Tagliatelle al ragù bianco",
    description: "Pasta fresca, ragù di verdure e timo.",
    price: 12,
    category: "Primi"
  },
  {
    id: "risotto",
    name: "Risotto zucca e salvia",
    description: "Carnaroli, zucca arrosto e salvia croccante.",
    price: 13,
    category: "Primi"
  },
  {
    id: "tortino",
    name: "Tortino al cioccolato",
    description: "Cuore morbido e gelato alla vaniglia.",
    price: 6,
    category: "Dolci"
  },
  {
    id: "crostata",
    name: "Crostata ai frutti rossi",
    description: "Pasta frolla e confettura artigianale.",
    price: 5,
    category: "Dolci"
  },
  {
    id: "acqua",
    name: "Acqua naturale 0,75",
    description: "Bottiglia in vetro.",
    price: 2,
    category: "Bevande"
  },
  {
    id: "vino",
    name: "Calice rosso della casa",
    description: "Selezione locale.",
    price: 5,
    category: "Bevande"
  }
];

type Mode = "Ritiro" | "Consegna";

export function OrtoOrderDemo() {
  const shouldReduceMotion = useReducedMotion();
  const [category, setCategory] = useState<string>(categories[0]);
  const [order, setOrder] = useState<Record<string, number>>({});
  const [mode, setMode] = useState<Mode>("Ritiro");
  const [sent, setSent] = useState(false);

  const visibleDishes = dishes.filter((dish) => dish.category === category);
  const lineItems = useMemo(
    () =>
      dishes
        .filter((dish) => order[dish.id])
        .map((dish) => ({ dish, qty: order[dish.id] })),
    [order]
  );
  const total = lineItems.reduce(
    (sum, { dish, qty }) => sum + dish.price * qty,
    0
  );
  const itemCount = lineItems.reduce((sum, { qty }) => sum + qty, 0);

  function addDish(id: string) {
    setSent(false);
    setOrder((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  function removeDish(id: string) {
    setSent(false);
    setOrder((prev) => {
      const next = { ...prev };
      const qty = (next[id] ?? 0) - 1;
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_0.78fr]">
      {/* Menu */}
      <div className="overflow-hidden rounded-lg border border-[#e7ddcd] bg-white">
        <div className="flex flex-wrap gap-1.5 border-b border-[#e7ddcd] bg-[#f7f1e7] p-3">
          {categories.map((item) => {
            const active = item === category;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={active}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8643c]/50",
                  active
                    ? "bg-[#c8643c] text-white"
                    : "text-[#6b5f54] hover:bg-[#efe6d6]"
                )}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="grid gap-2 p-3 sm:grid-cols-2">
          {visibleDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex flex-col justify-between rounded-lg border border-[#e7ddcd] bg-[#faf6ef] p-4"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-[#2b2420]">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 text-sm font-semibold text-[#a24f2e]">
                    {dish.price} €
                  </span>
                </div>
                <p className="mt-1 text-xs leading-5 text-[#6b5f54]">
                  {dish.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => addDish(dish.id)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md border border-[#c8643c]/30 bg-[#c8643c]/10 px-3 py-1.5 text-xs font-semibold text-[#a24f2e] transition-colors duration-150 ease-out-expo hover:bg-[#c8643c]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8643c]/50"
              >
                <Plus aria-hidden="true" className="h-3.5 w-3.5" />
                Aggiungi
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Order summary */}
      <div className="flex flex-col rounded-lg border border-[#e7ddcd] bg-[#f7f1e7] p-4">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#2b2420]">
            <ShoppingBasket aria-hidden="true" className="h-4 w-4 text-[#c8643c]" />
            Il tuo ordine
          </p>
          <span className="text-xs text-[#9a8c7d]">
            {itemCount} {itemCount === 1 ? "piatto" : "piatti"}
          </span>
        </div>

        <div className="mt-3 inline-flex rounded-md border border-[#e7ddcd] bg-white p-0.5 text-xs font-medium">
          {(["Ritiro", "Consegna"] as Mode[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              aria-pressed={mode === item}
              className={cn(
                "flex-1 rounded px-3 py-1.5 transition-colors duration-150 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8643c]/50",
                mode === item
                  ? "bg-[#2b2420] text-white"
                  : "text-[#6b5f54] hover:bg-[#f3ece0]"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-3 min-h-24 flex-1">
          {lineItems.length === 0 ? (
            <p className="rounded-lg border border-dashed border-[#ddd0bd] bg-white/60 p-4 text-xs leading-5 text-[#9a8c7d]">
              Aggiungi piatti dal menu per comporre l&apos;ordine.
            </p>
          ) : (
            <ul className="grid gap-2">
              <AnimatePresence initial={false}>
                {lineItems.map(({ dish, qty }) => (
                  <motion.li
                    key={dish.id}
                    layout={!shouldReduceMotion}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className="flex items-center justify-between gap-3 rounded-lg border border-[#e7ddcd] bg-white p-2.5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-[#2b2420]">
                        {dish.name}
                      </p>
                      <p className="text-[11px] text-[#9a8c7d]">
                        {dish.price} € · {dish.price * qty} €
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => removeDish(dish.id)}
                        aria-label={`Rimuovi una unità di ${dish.name}`}
                        className="grid h-7 w-7 place-items-center rounded-md border border-[#e7ddcd] bg-[#faf6ef] text-[#6b5f54] transition-colors hover:bg-[#f0e8da] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8643c]/50"
                      >
                        <Minus aria-hidden="true" className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-5 text-center text-xs font-semibold text-[#2b2420]">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => addDish(dish.id)}
                        aria-label={`Aggiungi una unità di ${dish.name}`}
                        className="grid h-7 w-7 place-items-center rounded-md border border-[#c8643c]/30 bg-[#c8643c]/10 text-[#a24f2e] transition-colors hover:bg-[#c8643c]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8643c]/50"
                      >
                        <Plus aria-hidden="true" className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>

        <div className="mt-3 border-t border-[#e7ddcd] pt-3">
          <div className="flex items-center justify-between text-sm font-semibold text-[#2b2420]">
            <span>Totale</span>
            <span>{total} €</span>
          </div>
          <button
            type="button"
            onClick={() => setSent(true)}
            disabled={lineItems.length === 0}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#c8643c] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-out-expo hover:bg-[#b4572f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8643c]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f1e7] disabled:opacity-50"
          >
            {sent ? (
              <>
                <Check aria-hidden="true" className="h-4 w-4" />
                Ordine pronto per la cucina
              </>
            ) : (
              `Invia ordine · ${mode}`
            )}
          </button>
          {sent ? (
            <p className="mt-2 text-center text-[11px] text-[#9a8c7d]">
              Riepilogo simulato — nessun ordine reale inviato.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

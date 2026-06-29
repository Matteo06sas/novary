const words = [
  "Design",
  "Sviluppo",
  "Strategia",
  "Performance",
  "Premium",
  "Novary",
  "Interfacce",
  "Dettaglio"
];

const repeated = [...words, ...words];

export function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-white/[0.07] bg-background py-3.5"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...repeated, ...repeated].map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground/60"
          >
            {word}
            <span className="h-1 w-1 rounded-full bg-primary/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

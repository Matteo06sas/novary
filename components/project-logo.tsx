import { cn } from "@/lib/utils";

export type ProjectLogoVariant =
  | "cutly"
  | "veyra"
  | "studio"
  | "commerce"
  | "automation"
  | "atlas"
  | "orto"
  | "lumen";

type ProjectLogoProps = {
  variant: ProjectLogoVariant;
  className?: string;
  markOnly?: boolean;
  size?: "sm" | "md" | "lg";
};

const logos: Record<
  ProjectLogoVariant,
  {
    name: string;
    descriptor: string;
    monogram: string;
    root: string;
    mark: string;
    line: string;
    text: string;
    descriptorText: string;
  }
> = {
  cutly: {
    name: "Cutly",
    descriptor: "Booking",
    monogram: "C",
    root: "text-[#f7ead0]",
    mark: "border-[#d8bf8b]/30 bg-[#d8bf8b] text-black",
    line: "bg-[#d8bf8b]",
    text: "text-[#f7ead0]",
    descriptorText: "text-[#d8bf8b]/70"
  },
  veyra: {
    name: "Veyra",
    descriptor: "Atelier",
    monogram: "V",
    root: "text-neutral-950",
    mark: "border-neutral-950 bg-neutral-950 text-white",
    line: "bg-neutral-950",
    text: "text-neutral-950",
    descriptorText: "text-neutral-500"
  },
  studio: {
    name: "Studio",
    descriptor: "Presence",
    monogram: "S",
    root: "text-[#111312]",
    mark: "border-[#111312] bg-[#111312] text-white",
    line: "bg-[#8f1d2c]",
    text: "text-[#111312]",
    descriptorText: "text-[#68716b]"
  },
  commerce: {
    name: "Locale",
    descriptor: "Commerce",
    monogram: "L",
    root: "text-white",
    mark: "border-emerald-300/30 bg-emerald-300 text-black",
    line: "bg-emerald-300",
    text: "text-white",
    descriptorText: "text-white/45"
  },
  automation: {
    name: "Flow",
    descriptor: "Automation",
    monogram: "F",
    root: "text-white",
    mark: "border-primary/40 bg-primary text-white",
    line: "bg-primary",
    text: "text-white",
    descriptorText: "text-white/45"
  },
  atlas: {
    name: "Atlas",
    descriptor: "Automation",
    monogram: "A",
    root: "text-white",
    mark: "border-emerald-400/30 bg-emerald-400 text-black",
    line: "bg-emerald-400",
    text: "text-white",
    descriptorText: "text-white/45"
  },
  orto: {
    name: "Orto",
    descriptor: "Kitchen",
    monogram: "O",
    root: "text-[#2b2420]",
    mark: "border-[#c8643c]/30 bg-[#c8643c] text-white",
    line: "bg-[#c8643c]",
    text: "text-[#2b2420]",
    descriptorText: "text-[#9a8c7d]"
  },
  lumen: {
    name: "Lumen",
    descriptor: "Learning",
    monogram: "L",
    root: "text-white",
    mark: "border-cyan-400/30 bg-cyan-400 text-black",
    line: "bg-cyan-400",
    text: "text-white",
    descriptorText: "text-white/45"
  }
};

const sizes = {
  sm: {
    gap: "gap-2",
    mark: "h-8 w-8 rounded-md text-sm",
    name: "text-xs",
    descriptor: "text-[8px]",
    line: "h-3 w-px"
  },
  md: {
    gap: "gap-3",
    mark: "h-11 w-11 rounded-lg text-base",
    name: "text-sm",
    descriptor: "text-[9px]",
    line: "h-4 w-px"
  },
  lg: {
    gap: "gap-4",
    mark: "h-14 w-14 rounded-lg text-xl",
    name: "text-base",
    descriptor: "text-[10px]",
    line: "h-5 w-px"
  }
};

export function ProjectLogo({
  variant,
  className,
  markOnly = false,
  size = "md"
}: ProjectLogoProps) {
  const logo = logos[variant];
  const dimension = sizes[size];

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center",
        dimension.gap,
        logo.root,
        className
      )}
      aria-label={`${logo.name} ${logo.descriptor}`}
    >
      <span
        className={cn(
          "relative grid place-items-center overflow-hidden border font-semibold leading-none shadow-[0_16px_40px_rgba(0,0,0,0.18)]",
          dimension.mark,
          logo.mark
        )}
      >
        <span className="relative z-10">{logo.monogram}</span>
        <span
          className={cn(
            "absolute inset-x-2 bottom-2 h-px origin-left rotate-[-18deg] rounded-full opacity-70",
            logo.line
          )}
        />
      </span>

      {!markOnly && (
        <>
          <span
            aria-hidden="true"
            className={cn("rounded-full opacity-55", dimension.line, logo.line)}
          />
          <span className="leading-none">
            <span
              className={cn(
                "block font-semibold uppercase tracking-[0.2em]",
                dimension.name,
                logo.text
              )}
            >
              {logo.name}
            </span>
            <span
              className={cn(
                "mt-1 block uppercase tracking-[0.24em]",
                dimension.descriptor,
                logo.descriptorText
              )}
            >
              {logo.descriptor}
            </span>
          </span>
        </>
      )}
    </div>
  );
}

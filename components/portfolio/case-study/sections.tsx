import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  MonitorSmartphone,
  Sparkles
} from "lucide-react";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { CaseStudyTheme } from "./theme";

const SECTION_PADDING = "py-20 sm:py-24";

/* -------------------------------------------------------------------------- */
/*  Shell                                                                      */
/* -------------------------------------------------------------------------- */

export function CaseStudyShell({
  theme,
  children
}: {
  theme: CaseStudyTheme;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className={cn(theme.page)}>{children}</main>
      <SiteFooter />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section intro (eyebrow + title + optional description)                     */
/* -------------------------------------------------------------------------- */

type SectionIntroProps = {
  theme: CaseStudyTheme;
  eyebrow: string;
  title: string;
  description?: string;
  accentEyebrow?: boolean;
  className?: string;
};

function SectionIntro({
  theme,
  eyebrow,
  title,
  description,
  accentEyebrow = false,
  className
}: SectionIntroProps) {
  return (
    <FadeIn className={cn("max-w-3xl", className)}>
      <Badge className={accentEyebrow ? theme.eyebrowAccent : theme.eyebrow}>
        {eyebrow}
      </Badge>
      <h2
        className={cn(
          "mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl",
          theme.heading
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7 sm:text-lg", theme.muted)}>
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

export type CaseStudyHeroProps = {
  theme: CaseStudyTheme;
  eyebrow: string;
  title: string;
  lead: string;
  disclaimer: string;
  mockup: ReactNode;
  /** Primary, project-specific CTA (e.g. jump to demo). */
  primaryCta: { label: string; href: string };
  /** Secondary CTA. Defaults to the global "Parla con Novary" → /consulenza. */
  secondaryCta?: { label: string; href: string };
  /** Absolutely-positioned background layers behind the hero content. */
  backdrop?: ReactNode;
  /** Tailwind classes for the hero <section> (e.g. an explicit background). */
  sectionClassName?: string;
  /** Overrides the two-column grid (Veyra uses a different ratio + alignment). */
  gridClassName?: string;
  /** Title sizing/leading — differs per project. */
  titleClassName?: string;
};

export function CaseStudyHero({
  theme,
  eyebrow,
  title,
  lead,
  disclaimer,
  mockup,
  primaryCta,
  secondaryCta = { label: "Parla con Novary", href: "/consulenza" },
  backdrop,
  sectionClassName,
  gridClassName = "lg:grid-cols-[1fr_0.86fr] lg:items-center",
  titleClassName = "text-5xl leading-[0.98] sm:text-6xl lg:text-7xl"
}: CaseStudyHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b",
        theme.border,
        sectionClassName
      )}
    >
      {backdrop}

      <div className="section-shell py-10 sm:py-16 lg:py-20">
        <FadeIn>
          <Button asChild variant="ghost" className={cn("-ml-3", theme.backLink)}>
            <Link href="/#work">
              <ArrowLeft aria-hidden="true" />
              Torna al portfolio
            </Link>
          </Button>
        </FadeIn>

        <div className={cn("mt-10 grid gap-10", gridClassName)}>
          <div>
            <FadeIn>
              <Badge className={theme.eyebrowAccent}>
                <Sparkles aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
                {eyebrow}
              </Badge>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1
                className={cn(
                  "mt-6 text-balance font-semibold tracking-normal",
                  titleClassName,
                  theme.heading
                )}
              >
                {title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p
                className={cn(
                  "mt-7 max-w-2xl text-lg leading-8 sm:text-xl",
                  theme.lead
                )}
              >
                {lead}
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className={theme.primaryButton}>
                  <a href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={theme.outlineButton}
                >
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.32}>
              <p
                className={cn(
                  "mt-7 max-w-2xl text-sm leading-6",
                  theme.disclaimer
                )}
              >
                {disclaimer}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>{mockup}</FadeIn>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Overview grid                                                              */
/* -------------------------------------------------------------------------- */

export function OverviewGrid({
  theme,
  items
}: {
  theme: CaseStudyTheme;
  items: ReadonlyArray<readonly [string, string]>;
}) {
  return (
    <section className={cn("border-b py-16 sm:py-20", theme.border)}>
      <div className="section-shell">
        <FadeIn
          className={cn(
            "grid gap-3 rounded-lg border p-4 sm:grid-cols-4 sm:p-5",
            theme.surface
          )}
        >
          {items.map(([label, value]) => (
            <div key={label} className={cn("rounded-md p-4", theme.surfaceInner)}>
              <p className={cn("text-xs uppercase", theme.label)}>{label}</p>
              <p className={cn("mt-2 text-sm font-semibold", theme.heading)}>
                {value}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Problem / solution                                                         */
/* -------------------------------------------------------------------------- */

export function ProblemSolution({
  theme,
  problem,
  solution
}: {
  theme: CaseStudyTheme;
  problem: { icon: LucideIcon; text: string };
  solution: { icon: LucideIcon; text: string };
}) {
  const ProblemIcon = problem.icon;
  const SolutionIcon = solution.icon;

  return (
    <section className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-2">
          <FadeIn className={cn("rounded-lg border p-6 sm:p-8", theme.surface)}>
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-lg border",
                theme.problemIcon
              )}
            >
              <ProblemIcon aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className={cn("mt-6 text-3xl font-semibold", theme.heading)}>
              Problema
            </h2>
            <p className={cn("mt-4 text-base leading-7", theme.muted)}>
              {problem.text}
            </p>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className={cn("rounded-lg border p-6 sm:p-8", theme.solutionCard)}
          >
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-lg border",
                theme.solutionIcon
              )}
            >
              <SolutionIcon aria-hidden="true" className="h-5 w-5" />
            </div>
            <h2 className={cn("mt-6 text-3xl font-semibold", theme.heading)}>
              Soluzione
            </h2>
            <p className={cn("mt-4 text-base leading-7", theme.solutionText)}>
              {solution.text}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Context / objective / approach                                             */
/* -------------------------------------------------------------------------- */

export type NarrativeBlock = {
  icon: LucideIcon;
  label: string;
  title: string;
  text: string;
};

export function NarrativeBlocks({
  theme,
  items
}: {
  theme: CaseStudyTheme;
  items: NarrativeBlock[];
}) {
  return (
    <section className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <StaggerContainer className="grid gap-4 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.title}>
                <article className={cn("h-full rounded-lg border p-6", theme.surface)}>
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      theme.featureIcon
                    )}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className={cn("mt-5 text-xs uppercase", theme.label)}>
                    {item.label}
                  </p>
                  <h2
                    className={cn(
                      "mt-3 text-balance text-2xl font-semibold leading-tight",
                      theme.heading
                    )}
                  >
                    {item.title}
                  </h2>
                  <p className={cn("mt-4 text-sm leading-6", theme.muted)}>
                    {item.text}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Feature grid + outcomes                                                    */
/* -------------------------------------------------------------------------- */

export type CaseStudyFeature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function FeatureGrid({
  theme,
  eyebrow,
  title,
  description,
  features,
  outcomes
}: {
  theme: CaseStudyTheme;
  eyebrow: string;
  title: string;
  description: string;
  features: CaseStudyFeature[];
  outcomes: string[];
}) {
  return (
    <section className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <SectionIntro
          theme={theme}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <StaggerItem key={feature.title}>
                <div
                  className={cn(
                    "h-full rounded-lg border p-5 transition-colors",
                    theme.surface,
                    theme.surfaceHover
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      theme.featureIcon
                    )}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className={cn("mt-5 text-lg font-semibold", theme.heading)}>
                    {feature.title}
                  </h3>
                  <p className={cn("mt-3 text-sm leading-6", theme.muted)}>
                    {feature.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <FadeIn
              key={item}
              className={cn(
                "rounded-lg border px-4 py-3 text-sm font-medium",
                theme.chip
              )}
            >
              {item}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Screens showcase                                                           */
/* -------------------------------------------------------------------------- */

/**
 * "Schermate chiave" section. Pass bespoke screen visuals as `children`, or
 * pass `screens` labels to render the default themed skeleton trio.
 */
export function ScreensShowcase({
  theme,
  title,
  eyebrow = "Schermate chiave",
  screens,
  children
}: {
  theme: CaseStudyTheme;
  title: string;
  eyebrow?: string;
  screens?: string[];
  children?: ReactNode;
}) {
  return (
    <section className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <SectionIntro theme={theme} eyebrow={eyebrow} title={title} />
        {children ? (
          <div className="mt-10">{children}</div>
        ) : screens ? (
          <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-3">
            {screens.map((item, index) => (
              <StaggerItem key={item}>
                <div
                  className={cn(
                    "overflow-hidden rounded-lg border p-4",
                    theme.surface
                  )}
                >
                  <div
                    className={cn(
                      "rounded-lg border p-4",
                      theme.surface,
                      theme.surfaceInner
                    )}
                  >
                    <div
                      className={cn("h-2 w-20 rounded-sm", theme.accentSolid)}
                    />
                    <div className="mt-5 grid gap-2">
                      {Array.from({ length: 4 }).map((_, lineIndex) => (
                        <div
                          key={`${item}-${lineIndex}`}
                          className={cn(
                            "rounded-md border p-3",
                            theme.surface
                          )}
                        >
                          <div
                            className="h-2 rounded-sm bg-current opacity-20"
                            style={{
                              width: `${44 + index * 10 + lineIndex * 8}%`
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p
                    className={cn("mt-4 text-sm font-semibold", theme.heading)}
                  >
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : null}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Design system                                                              */
/* -------------------------------------------------------------------------- */

export type DesignSystemSwatch = {
  name: string;
  className: string;
};

export type DesignSystemItem = {
  title: string;
  text: string;
  swatches?: DesignSystemSwatch[];
};

export function DesignSystemSection({
  theme,
  title,
  description,
  items
}: {
  theme: CaseStudyTheme;
  title: string;
  description: string;
  items: DesignSystemItem[];
}) {
  return (
    <section className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionIntro
            theme={theme}
            eyebrow="Design system"
            title={title}
            description={description}
            className="max-w-none"
          />

          <StaggerContainer className="grid gap-4">
            {items.map((item) => (
              <StaggerItem key={item.title}>
                <div className={cn("rounded-lg border p-5", theme.surface)}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className={cn("text-lg font-semibold", theme.heading)}>
                        {item.title}
                      </h3>
                      <p className={cn("mt-2 text-sm leading-6", theme.muted)}>
                        {item.text}
                      </p>
                    </div>

                    {item.swatches ? (
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        {item.swatches.map((swatch) => (
                          <span
                            key={swatch.name}
                            className={cn(
                              "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs",
                              theme.chip
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={cn(
                                "h-3 w-3 rounded-full border border-black/10",
                                swatch.className
                              )}
                            />
                            {swatch.name}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Result                                                                     */
/* -------------------------------------------------------------------------- */

export function ResultSection({
  theme,
  title,
  description,
  items
}: {
  theme: CaseStudyTheme;
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <section className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <FadeIn className={cn("rounded-lg border p-6 sm:p-8", theme.surface)}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Badge className={theme.eyebrow}>Risultato</Badge>
              <h2
                className={cn(
                  "mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl",
                  theme.heading
                )}
              >
                {title}
              </h2>
              <p className={cn("mt-4 text-base leading-7 sm:text-lg", theme.muted)}>
                {description}
              </p>
            </div>

            <div className="grid gap-3">
              {items.map((item) => (
                <div
                  key={item}
                  className={cn(
                    "flex gap-3 rounded-lg border px-4 py-3",
                    theme.chip
                  )}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 flex-none"
                  />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Demo wrapper                                                               */
/* -------------------------------------------------------------------------- */

export function DemoSection({
  theme,
  eyebrow,
  title,
  description,
  accentEyebrow = false,
  children
}: {
  theme: CaseStudyTheme;
  eyebrow: string;
  title: string;
  description: string;
  accentEyebrow?: boolean;
  children: ReactNode;
}) {
  return (
    <section id="demo" className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <SectionIntro
          theme={theme}
          eyebrow={eyebrow}
          title={title}
          description={description}
          accentEyebrow={accentEyebrow}
        />
        <FadeIn delay={0.12} className="mt-10">
          {children}
        </FadeIn>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Process steps                                                              */
/* -------------------------------------------------------------------------- */

export function ProcessSteps({
  theme,
  eyebrow = "Processo di sviluppo",
  title,
  steps
}: {
  theme: CaseStudyTheme;
  eyebrow?: string;
  title: string;
  steps: string[];
}) {
  return (
    <section className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <SectionIntro
            theme={theme}
            eyebrow={eyebrow}
            title={title}
            className="max-w-none"
          />
          <StaggerContainer className="grid gap-3">
            {steps.map((item, index) => (
              <StaggerItem key={item}>
                <div
                  className={cn(
                    "grid gap-4 rounded-lg border p-4 sm:grid-cols-[3rem_1fr]",
                    theme.surface
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-md text-sm font-semibold",
                      theme.accentSolid
                    )}
                  >
                    {index + 1}
                  </span>
                  <p className={cn("text-sm leading-6", theme.muted)}>{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tech grid                                                                  */
/* -------------------------------------------------------------------------- */

export function TechGrid({
  theme,
  eyebrow = "Tecnologie",
  title,
  description,
  items,
  icon: Icon
}: {
  theme: CaseStudyTheme;
  eyebrow?: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}) {
  return (
    <section className={cn("border-b py-20 sm:py-24", theme.border)}>
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <SectionIntro
            theme={theme}
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="max-w-none"
          />

          <StaggerContainer className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <StaggerItem key={item}>
                <div
                  className={cn(
                    "flex min-h-16 items-center gap-3 rounded-lg border p-4",
                    theme.surface
                  )}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 flex-none items-center justify-center rounded-md",
                      theme.techIcon
                    )}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <span className={cn("text-sm font-medium", theme.muted)}>
                    {item}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Project CTA                                                                */
/* -------------------------------------------------------------------------- */

export function ProjectCta({
  theme,
  title,
  description,
  icon: Icon = MonitorSmartphone,
  primaryCta = { label: "Contatta Novary", href: "/consulenza" },
  secondaryCta = { label: "Guarda altri concept", href: "/#work" }
}: {
  theme: CaseStudyTheme;
  title: string;
  description: string;
  icon?: LucideIcon;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className={SECTION_PADDING}>
      <div className="section-shell">
        <FadeIn
          className={cn(
            "rounded-lg border p-6 text-center sm:p-10",
            theme.ctaCard
          )}
        >
          <div
            className={cn(
              "mx-auto flex h-12 w-12 items-center justify-center rounded-lg",
              theme.ctaIcon
            )}
          >
            <Icon aria-hidden="true" className="h-5 w-5" />
          </div>
          <h2
            className={cn(
              "mx-auto mt-6 max-w-3xl text-balance text-3xl font-semibold sm:text-4xl",
              theme.heading
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg",
              theme.ctaText
            )}
          >
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className={theme.ctaPrimaryButton}>
              <a href={primaryCta.href}>
                {primaryCta.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={theme.ctaOutlineButton}
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

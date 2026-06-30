/**
 * Theme contract for case study pages.
 *
 * Each token holds a *complete* Tailwind class string so the compiler can see
 * it during content scanning (these files live under `components/**`). The two
 * existing case studies (Cutly, Veyra) run on two genuinely different surface
 * modes — a dark/accent mode and a light/editorial mode — so the theme carries
 * full class strings rather than a single accent colour.
 */
export type CaseStudyTheme = {
  /** Human label, used for aria/debug only. */
  name: string;

  // Page surface
  /** Applied to <main>: base background + text colour. */
  page: string;
  /** Section `border-b` colour, e.g. "border-white/10". */
  border: string;
  /** h1 / h2 colour. */
  heading: string;
  /** Hero lead paragraph colour. */
  lead: string;
  /** Body / muted text colour. */
  muted: string;
  /** Small uppercase labels (overview). */
  label: string;
  /** Hero disclaimer line. */
  disclaimer: string;

  // Eyebrow badges
  /** Neutral eyebrow badge. */
  eyebrow: string;
  /** Accent eyebrow badge (falls back to `eyebrow` when a theme has no accent variant). */
  eyebrowAccent: string;

  // Buttons
  primaryButton: string;
  outlineButton: string;
  /** Ghost "back to portfolio" link colours. */
  backLink: string;

  // Surfaces
  /** Standard card border + background. */
  surface: string;
  /** Hover background for interactive cards. */
  surfaceHover: string;
  /** Nested cell background (e.g. overview inner cells). */
  surfaceInner: string;
  /** Outcome chip border + background + text. */
  chip: string;

  // Icon chips
  /** Solid accent chip (process step numbers). */
  accentSolid: string;
  /** Feature card icon chip. */
  featureIcon: string;
  /** Tech list icon chip. */
  techIcon: string;

  // Problem / solution
  problemIcon: string;
  solutionCard: string;
  solutionIcon: string;
  solutionText: string;

  // Project CTA (sits on its own elevated card)
  ctaCard: string;
  ctaIcon: string;
  ctaText: string;
  ctaPrimaryButton: string;
  ctaOutlineButton: string;
};

/** Dark surface with warm gold accent — Cutly. */
export const cutlyTheme: CaseStudyTheme = {
  name: "Cutly",
  page: "bg-[#070605] text-white",
  border: "border-white/10",
  heading: "text-white",
  lead: "text-white/70",
  muted: "text-white/60",
  label: "text-white/40",
  disclaimer: "text-white/50",
  eyebrow: "border-white/10 bg-white/[0.035] text-white/60 shadow-none",
  eyebrowAccent: "border-[#d8bf8b]/25 bg-[#d8bf8b]/10 text-[#f5dfad] shadow-none",
  primaryButton: "bg-[#d8bf8b] text-black shadow-none hover:bg-[#ead7ad]",
  outlineButton: "border-white/10 bg-white/[0.035]",
  backLink: "text-white/60 hover:text-white",
  surface: "border-white/10 bg-white/[0.035]",
  surfaceHover: "hover:bg-white/[0.055]",
  surfaceInner: "bg-black/20",
  chip: "border-white/10 bg-[#11100e] text-white/70",
  accentSolid: "bg-[#d8bf8b] text-black",
  featureIcon: "bg-[#d8bf8b]/10 text-[#d8bf8b]",
  techIcon: "bg-white/[0.06] text-[#d8bf8b]",
  problemIcon: "border-red-300/20 bg-red-300/10 text-red-100",
  solutionCard: "border-[#d8bf8b]/20 bg-[#d8bf8b]/[0.06]",
  solutionIcon: "border-[#d8bf8b]/25 bg-[#d8bf8b]/10 text-[#d8bf8b]",
  solutionText: "text-white/70",
  ctaCard: "border-[#d8bf8b]/20 bg-[#d8bf8b]/[0.06]",
  ctaIcon: "bg-[#d8bf8b] text-black",
  ctaText: "text-white/60",
  ctaPrimaryButton: "bg-[#d8bf8b] text-black shadow-none hover:bg-[#ead7ad]",
  ctaOutlineButton: "border-white/10 bg-white/[0.035]"
};

/** Light editorial surface with near-black accent — Veyra. */
export const veyraTheme: CaseStudyTheme = {
  name: "Veyra",
  page: "bg-white text-neutral-950",
  border: "border-neutral-200",
  heading: "text-neutral-950",
  lead: "text-neutral-600",
  muted: "text-neutral-600",
  label: "text-neutral-500",
  disclaimer: "text-neutral-500",
  eyebrow: "border-neutral-200 bg-neutral-50 text-neutral-600 shadow-none",
  eyebrowAccent: "border-neutral-200 bg-neutral-50 text-neutral-600 shadow-none",
  primaryButton: "bg-neutral-950 text-white shadow-none hover:bg-neutral-800",
  outlineButton: "border-neutral-300 bg-white text-neutral-950 hover:bg-neutral-50",
  backLink: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950",
  surface: "border-neutral-200 bg-neutral-50",
  surfaceHover: "hover:bg-white",
  surfaceInner: "bg-white",
  chip: "border-neutral-200 bg-neutral-50 text-neutral-700",
  accentSolid: "bg-neutral-950 text-white",
  featureIcon: "bg-neutral-950 text-white",
  techIcon: "bg-neutral-950 text-white",
  problemIcon: "border-neutral-200 bg-white text-neutral-950",
  solutionCard: "border-neutral-950 bg-neutral-950 text-white",
  solutionIcon: "border-white/20 bg-white text-neutral-950",
  solutionText: "text-white/70",
  ctaCard: "border-neutral-200 bg-neutral-950 text-white",
  ctaIcon: "bg-white text-neutral-950",
  ctaText: "text-white/70",
  ctaPrimaryButton: "bg-white text-neutral-950 shadow-none hover:bg-neutral-200",
  ctaOutlineButton: "border-white/20 bg-white/[0.04] text-white hover:bg-white/10"
};

/**
 * Cool graphite surface with an emerald signal accent — Atlas.
 * Deliberately distinct from the Novary marketing site (neutral black + soft
 * purple glow): flatter, cooler, "automation console" energy.
 */
export const atlasTheme: CaseStudyTheme = {
  name: "Atlas",
  page: "bg-[#080b0a] text-white",
  border: "border-white/10",
  heading: "text-white",
  lead: "text-white/70",
  muted: "text-white/60",
  label: "text-white/40",
  disclaimer: "text-white/45",
  eyebrow: "border-white/10 bg-white/[0.035] text-white/60 shadow-none",
  eyebrowAccent: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200 shadow-none",
  primaryButton: "bg-emerald-400 text-black shadow-none hover:bg-emerald-300",
  outlineButton: "border-white/10 bg-white/[0.035]",
  backLink: "text-white/60 hover:text-white",
  surface: "border-white/10 bg-white/[0.035]",
  surfaceHover: "hover:bg-white/[0.055]",
  surfaceInner: "bg-black/25",
  chip: "border-white/10 bg-[#0c100e] text-white/70",
  accentSolid: "bg-emerald-400 text-black",
  featureIcon: "bg-emerald-400/10 text-emerald-300",
  techIcon: "bg-white/[0.06] text-emerald-300",
  problemIcon: "border-rose-300/20 bg-rose-300/10 text-rose-100",
  solutionCard: "border-emerald-400/20 bg-emerald-400/[0.06]",
  solutionIcon: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
  solutionText: "text-white/70",
  ctaCard: "border-emerald-400/20 bg-emerald-400/[0.06]",
  ctaIcon: "bg-emerald-400 text-black",
  ctaText: "text-white/60",
  ctaPrimaryButton: "bg-emerald-400 text-black shadow-none hover:bg-emerald-300",
  ctaOutlineButton: "border-white/10 bg-white/[0.035]"
};

/** Warm cream surface with terracotta + olive accents — Orto. */
export const ortoTheme: CaseStudyTheme = {
  name: "Orto",
  page: "bg-[#faf6ef] text-[#2b2420]",
  border: "border-[#e7ddcd]",
  heading: "text-[#2b2420]",
  lead: "text-[#6b5f54]",
  muted: "text-[#6b5f54]",
  label: "text-[#9a8c7d]",
  disclaimer: "text-[#9a8c7d]",
  eyebrow: "border-[#e7ddcd] bg-[#f3ece0] text-[#6b5f54] shadow-none",
  eyebrowAccent: "border-[#c8643c]/25 bg-[#c8643c]/10 text-[#a24f2e] shadow-none",
  primaryButton: "bg-[#c8643c] text-white shadow-none hover:bg-[#b4572f]",
  outlineButton: "border-[#ddd0bd] bg-white text-[#2b2420] hover:bg-[#f3ece0]",
  backLink: "text-[#6b5f54] hover:bg-[#f0e8da] hover:text-[#2b2420]",
  surface: "border-[#e7ddcd] bg-[#f3ece0]",
  surfaceHover: "hover:bg-white",
  surfaceInner: "bg-white",
  chip: "border-[#e7ddcd] bg-[#f3ece0] text-[#6b5f54]",
  accentSolid: "bg-[#c8643c] text-white",
  featureIcon: "bg-[#c8643c]/10 text-[#b4572f]",
  techIcon: "bg-[#3f5b3a] text-white",
  problemIcon: "border-[#e7ddcd] bg-white text-[#2b2420]",
  solutionCard: "border-[#3f5b3a] bg-[#3f5b3a] text-white",
  solutionIcon: "border-white/20 bg-white text-[#3f5b3a]",
  solutionText: "text-white/80",
  ctaCard: "border-[#e7ddcd] bg-[#2b2420] text-white",
  ctaIcon: "bg-[#c8643c] text-white",
  ctaText: "text-white/75",
  ctaPrimaryButton: "bg-[#c8643c] text-white shadow-none hover:bg-[#b4572f]",
  ctaOutlineButton: "border-white/20 bg-white/[0.06] text-white hover:bg-white/10"
};

/** Deep navy surface with cyan + violet accents — Lumen. */
export const lumenTheme: CaseStudyTheme = {
  name: "Lumen",
  page: "bg-[#0a0a14] text-white",
  border: "border-white/10",
  heading: "text-white",
  lead: "text-white/70",
  muted: "text-white/60",
  label: "text-white/40",
  disclaimer: "text-white/45",
  eyebrow: "border-white/10 bg-white/[0.04] text-white/60 shadow-none",
  eyebrowAccent: "border-cyan-400/25 bg-cyan-400/10 text-cyan-200 shadow-none",
  primaryButton: "bg-cyan-400 text-black shadow-none hover:bg-cyan-300",
  outlineButton: "border-white/10 bg-white/[0.04]",
  backLink: "text-white/60 hover:text-white",
  surface: "border-white/10 bg-white/[0.04]",
  surfaceHover: "hover:bg-white/[0.06]",
  surfaceInner: "bg-black/25",
  chip: "border-white/10 bg-[#0e0e1c] text-white/70",
  accentSolid: "bg-cyan-400 text-black",
  featureIcon: "bg-violet-400/10 text-violet-300",
  techIcon: "bg-white/[0.06] text-cyan-300",
  problemIcon: "border-rose-300/20 bg-rose-300/10 text-rose-100",
  solutionCard: "border-cyan-400/20 bg-cyan-400/[0.06]",
  solutionIcon: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
  solutionText: "text-white/70",
  ctaCard: "border-violet-400/20 bg-violet-500/[0.08]",
  ctaIcon: "bg-cyan-400 text-black",
  ctaText: "text-white/65",
  ctaPrimaryButton: "bg-cyan-400 text-black shadow-none hover:bg-cyan-300",
  ctaOutlineButton: "border-white/10 bg-white/[0.04]"
};

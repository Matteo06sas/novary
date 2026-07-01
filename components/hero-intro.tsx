"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode
} from "react";
import { motion } from "framer-motion";

const STORAGE_KEY = "novary-hero-intro-played";
const MARK_DRAW_DURATION = 0.42;
const MARK_FILL_START = 0.32;
const MARK_FILL_DURATION = 0.3;
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

/**
 * Skip is false by default so the very first client render matches the
 * server-rendered markup (animation plays). The layout effect below can
 * flip it to true before the browser paints, so repeat sessions never show
 * a flash of the animated-in state.
 */
const HeroIntroContext = createContext(false);

export function HeroIntroProvider({ children }: { children: ReactNode }) {
  const [skip, setSkip] = useState(false);
  const hasDecided = useRef(false);

  useIsomorphicLayoutEffect(() => {
    // Guard against React StrictMode's dev-only double effect invocation:
    // without it, the 2nd call would read back the 1st call's own
    // sessionStorage write and wrongly decide to skip.
    if (hasDecided.current) return;
    hasDecided.current = true;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadyPlayed = sessionStorage.getItem(STORAGE_KEY) === "1";

    if (prefersReduced || alreadyPlayed) {
      setSkip(true);
    } else {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  }, []);

  return (
    <HeroIntroContext.Provider value={skip}>
      {children}
    </HeroIntroContext.Provider>
  );
}

function useHeroIntroSkip() {
  return useContext(HeroIntroContext);
}

/** Reveals hero content on a fixed timeline instead of on scroll (unlike FadeIn). */
export function HeroReveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const skip = useHeroIntroSkip();

  return (
    <motion.div
      initial={
        skip ? false : { opacity: 0, transform: "translateY(10px)" }
      }
      animate={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ duration: 0.34, ease: EASE_OUT, delay: skip ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Draws the N mark (stroke outline) then solidifies into the filled brand mark. */
export function HeroMarkReveal({ className }: { className?: string }) {
  const skip = useHeroIntroSkip();

  return (
    <svg
      viewBox="0 0 104 100"
      role="img"
      aria-label="Novary"
      className={className}
    >
      <defs>
        <linearGradient id="hi-silver" x1="0" y1="0" x2="0.18" y2="1">
          <stop offset="0" stopColor="#FBFAF7" />
          <stop offset="0.32" stopColor="#DCD8CF" />
          <stop offset="0.6" stopColor="#B6B2A8" />
          <stop offset="1" stopColor="#EAE7E0" />
        </linearGradient>
        <linearGradient id="hi-champagne" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="rgb(var(--accent-hover))" />
          <stop offset="0.52" stopColor="rgb(var(--accent))" />
          <stop offset="1" stopColor="rgb(var(--accent-deep))" />
        </linearGradient>
      </defs>

      {/* Outline trace */}
      {!skip && (
        <g fill="none" stroke="url(#hi-champagne)" strokeWidth="2.4">
          <motion.polygon
            points="18,0 37,0 86,100 67,100"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: MARK_DRAW_DURATION, ease: EASE_OUT }}
          />
          <motion.rect
            x="0"
            y="0"
            width="19"
            height="100"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: MARK_DRAW_DURATION,
              ease: EASE_OUT,
              delay: 0.05
            }}
          />
          <motion.rect
            x="85"
            y="0"
            width="19"
            height="100"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: MARK_DRAW_DURATION,
              ease: EASE_OUT,
              delay: 0.05
            }}
          />
        </g>
      )}

      {/* Solid brand mark, cross-fades in as the outline finishes */}
      <motion.g
        initial={skip ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          skip
            ? { duration: 0 }
            : {
                duration: MARK_FILL_DURATION,
                ease: EASE_OUT,
                delay: MARK_FILL_START
              }
        }
      >
        <polygon points="18,0 37,0 86,100 67,100" fill="url(#hi-champagne)" />
        <rect x="0" y="0" width="19" height="100" fill="url(#hi-silver)" />
        <rect x="85" y="0" width="19" height="100" fill="url(#hi-silver)" />
      </motion.g>
    </svg>
  );
}

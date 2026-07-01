"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Circle, PlayCircle, X } from "lucide-react";

import { cn } from "@/lib/utils";

type Lesson = { title: string; done: boolean };

type Course = {
  id: string;
  title: string;
  category: string;
  level: string;
  progress: number;
  lessons: Lesson[];
};

const categories = ["Tutti", "Design", "Sviluppo", "Business", "AI"] as const;

const courses: Course[] = [
  {
    id: "design-systems",
    title: "Design system da zero",
    category: "Design",
    level: "Intermedio",
    progress: 60,
    lessons: [
      { title: "Token e fondamenta", done: true },
      { title: "Componenti riutilizzabili", done: true },
      { title: "Tema e varianti", done: true },
      { title: "Documentazione viva", done: false },
      { title: "Handoff al team", done: false }
    ]
  },
  {
    id: "react-architecture",
    title: "Architettura React moderna",
    category: "Sviluppo",
    level: "Avanzato",
    progress: 25,
    lessons: [
      { title: "Struttura del progetto", done: true },
      { title: "Server e client component", done: false },
      { title: "Stato e data fetching", done: false },
      { title: "Performance e bundle", done: false }
    ]
  },
  {
    id: "pricing",
    title: "Pricing per studi digitali",
    category: "Business",
    level: "Base",
    progress: 0,
    lessons: [
      { title: "Modelli di prezzo", done: false },
      { title: "Pacchetti e retainer", done: false },
      { title: "Proposta e chiusura", done: false }
    ]
  },
  {
    id: "ai-workflows",
    title: "Workflow con assistenti AI",
    category: "AI",
    level: "Intermedio",
    progress: 40,
    lessons: [
      { title: "Prompt e contesto", done: true },
      { title: "Automazioni utili", done: true },
      { title: "Revisione umana", done: false },
      { title: "Limiti e rischi", done: false }
    ]
  },
  {
    id: "motion",
    title: "Motion design per interfacce",
    category: "Design",
    level: "Intermedio",
    progress: 0,
    lessons: [
      { title: "Principi di timing", done: false },
      { title: "Easing e curve", done: false },
      { title: "Micro interazioni", done: false }
    ]
  },
  {
    id: "typescript",
    title: "TypeScript per prodotti",
    category: "Sviluppo",
    level: "Base",
    progress: 80,
    lessons: [
      { title: "Tipi di base", done: true },
      { title: "Generics utili", done: true },
      { title: "Tipi di dominio", done: true },
      { title: "Errori comuni", done: false }
    ]
  }
];

export function LumenCatalogDemo() {
  const shouldReduceMotion = useReducedMotion();
  const [category, setCategory] = useState<string>(categories[0]);
  const [openId, setOpenId] = useState<string | null>(null);

  const visible =
    category === "Tutti"
      ? courses
      : courses.filter((course) => course.category === category);
  const openCourse = courses.find((course) => course.id === openId) ?? null;

  useEffect(() => {
    if (!openId) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenId(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openId]);

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c0c18]">
      <div className="flex flex-wrap gap-1.5 border-b border-white/10 p-3">
        {categories.map((item) => {
          const active = item === category;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={active}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
                active
                  ? "bg-cyan-400 text-black"
                  : "text-white/60 hover:bg-white/[0.06] hover:text-white"
              )}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <button
            key={course.id}
            type="button"
            onClick={() => setOpenId(course.id)}
            className="group flex flex-col rounded-lg border border-white/10 bg-white/[0.025] p-4 text-left transition-colors duration-150 ease-out-expo hover:border-cyan-400/30 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="rounded border border-violet-400/25 bg-violet-400/10 px-2 py-0.5 text-[11px] font-medium text-violet-200">
                {course.category}
              </span>
              <span className="text-[11px] text-white/40">{course.level}</span>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-white">
              {course.title}
            </h3>
            <p className="mt-1 text-xs text-white/45">
              {course.lessons.length} lezioni
            </p>

            <div className="mt-auto pt-4">
              <div className="flex items-center justify-between text-[11px] text-white/45">
                <span>{course.progress > 0 ? "In corso" : "Da iniziare"}</span>
                <span>{course.progress}%</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {openCourse ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center p-4"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              aria-label="Chiudi anteprima"
              onClick={() => setOpenId(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Anteprima ${openCourse.title}`}
              initial={
                shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 8 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97, y: 6 }
              }
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-md overflow-hidden rounded-lg border border-white/10 bg-[#11111f] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="rounded border border-violet-400/25 bg-violet-400/10 px-2 py-0.5 text-[11px] font-medium text-violet-200">
                    {openCourse.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {openCourse.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/45">
                    {openCourse.level} · {openCourse.lessons.length} lezioni
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  aria-label="Chiudi"
                  className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>

              <ul className="mt-5 grid gap-1.5">
                {openCourse.lessons.map((lesson) => (
                  <li
                    key={lesson.title}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.025] px-3 py-2.5"
                  >
                    {lesson.done ? (
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4 flex-none text-cyan-300"
                      />
                    ) : (
                      <Circle
                        aria-hidden="true"
                        className="h-4 w-4 flex-none text-white/25"
                      />
                    )}
                    <span
                      className={cn(
                        "text-sm",
                        lesson.done ? "text-white/55" : "text-white"
                      )}
                    >
                      {lesson.title}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-150 ease-out-expo hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#11111f]"
              >
                <PlayCircle aria-hidden="true" className="h-4 w-4" />
                {openCourse.progress > 0 ? "Riprendi il corso" : "Inizia il corso"}
              </button>
              <p className="mt-2 text-center text-[11px] text-white/35">
                Anteprima simulata — nessun contenuto reale.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

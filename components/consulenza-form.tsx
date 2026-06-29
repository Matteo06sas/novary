"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const projectTypes = [
  "Sito web",
  "Ecommerce",
  "SaaS",
  "AI Automation",
  "Altro"
] as const;

const fieldClassName =
  "w-full rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/30";

export function ConsulenzaForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState<string>(projectTypes[0]);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = "Nuova richiesta consulenza — Novary";
    const bodyLines = [
      `Nome: ${name}`,
      `Email: ${email}`,
      company ? `Azienda / Brand: ${company}` : null,
      `Tipo di progetto: ${projectType}`,
      budget ? `Budget indicativo: ${budget}` : null,
      "",
      "Messaggio:",
      message
    ].filter((line): line is string => line !== null);

    const mailtoUrl = `mailto:novary.dev@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/10 bg-white/[0.028] p-6 shadow-[0_24px_100px_rgba(0,0,0,0.22)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Il tuo nome"
            className={`mt-2 ${fieldClassName}`}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nome@azienda.com"
            className={`mt-2 ${fieldClassName}`}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Azienda / Brand{" "}
            <span className="text-muted-foreground">(opzionale)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Nome attivita"
            className={`mt-2 ${fieldClassName}`}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="projectType" className="text-sm font-medium text-foreground">
            Tipo di progetto
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            className={`mt-2 ${fieldClassName}`}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-background">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="budget" className="text-sm font-medium text-foreground">
            Budget indicativo{" "}
            <span className="text-muted-foreground">(opzionale)</span>
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            placeholder="Es. 3.000 - 6.000 EUR"
            className={`mt-2 ${fieldClassName}`}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Raccontaci obiettivi, tempistiche e qualsiasi dettaglio utile."
            className={`mt-2 resize-none ${fieldClassName}`}
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          className="bg-white text-black shadow-[0_0_34px_rgba(255,255,255,0.12)] hover:bg-white/90"
        >
          Invia richiesta
          <ArrowUpRight aria-hidden="true" />
        </Button>
        <p className="text-xs leading-5 text-muted-foreground">
          Rispondo entro 24/48 ore lavorative.
        </p>
      </div>
    </form>
  );
}

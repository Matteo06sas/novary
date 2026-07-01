"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

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

const MAILTO_FALLBACK = "mailto:novary.dev@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

export function ConsulenzaForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState<string>(projectTypes[0]);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setErrorMessage("Configurazione mancante.");
      setStatus("error");
      return;
    }

    try {
      // Submitted directly from the browser, not proxied through our own
      // server: Web3Forms' Cloudflare bot protection blocks server-to-server
      // requests (no browser TLS fingerprint), so this has to be a real
      // client-side fetch to succeed.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Nuova richiesta consulenza — Novary",
          from_name: "Novary — Form consulenza",
          name,
          email,
          company: company || "—",
          project_type: projectType,
          budget: budget || "—",
          message
        })
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        setErrorMessage("Invio non riuscito. Riprova o scrivici direttamente.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Connessione non riuscita. Riprova o scrivici direttamente.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-primary/25 bg-primary/[0.06] p-6 text-center shadow-[0_24px_100px_rgba(0,0,0,0.22)] sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
          <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-foreground">
          Richiesta inviata.
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Grazie, {name || "e a presto"}. Rispondo entro 24/48 ore lavorative
          all&apos;indirizzo che hai indicato.
        </p>
      </div>
    );
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

      {status === "error" && (
        <p className="mt-5 rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-200">
          {errorMessage}{" "}
          <a href={MAILTO_FALLBACK} className="font-medium underline underline-offset-2">
            Scrivici direttamente
          </a>
          .
        </p>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="bg-white text-black shadow-[0_0_34px_rgba(255,255,255,0.12)] hover:bg-white/90 disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 aria-hidden="true" className="animate-spin" />
              Invio in corso...
            </>
          ) : (
            <>
              Invia richiesta
              <ArrowUpRight aria-hidden="true" />
            </>
          )}
        </Button>
        <p className="text-xs leading-5 text-muted-foreground">
          Rispondo entro 24/48 ore lavorative.
        </p>
      </div>
    </form>
  );
}

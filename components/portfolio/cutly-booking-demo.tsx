"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Mail,
  Phone,
  Scissors,
  UserRound
} from "lucide-react";

import { ProjectLogo } from "@/components/project-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  "Registrazione",
  "Servizio",
  "Professionista",
  "Giorno e ora",
  "Conferma"
];

const services = [
  { name: "Taglio Uomo", duration: "30 min", price: "28 euro" },
  { name: "Taglio Donna", duration: "45 min", price: "42 euro" },
  { name: "Barba", duration: "20 min", price: "18 euro" },
  { name: "Colore", duration: "90 min", price: "65 euro" },
  { name: "Piega", duration: "35 min", price: "30 euro" }
];

const professionals = [
  { name: "Luca", role: "Barbiere", focus: "Tagli sfumati e barba", initials: "LC" },
  { name: "Sofia", role: "Parrucchiera", focus: "Tagli donna e piega", initials: "SF" },
  { name: "Marco", role: "Colorista", focus: "Colore e trattamenti", initials: "MR" },
  { name: "Giulia", role: "Consulente stile", focus: "Consulenza e look", initials: "GL" }
];

const availableDays = [
  {
    label: "Mar 9 luglio",
    note: "Disponibilita ampia",
    times: ["09:00", "10:30", "12:00", "15:30"]
  },
  {
    label: "Mer 10 luglio",
    note: "Orari rapidi",
    times: ["09:30", "11:00", "16:00", "17:30"]
  },
  {
    label: "Gio 11 luglio",
    note: "Pomeriggio libero",
    times: ["14:00", "15:00", "16:30", "18:00"]
  }
];

type Customer = {
  name: string;
  email: string;
  phone: string;
};

export function CutlyBookingDemo() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [customer, setCustomer] = useState<Customer>({
    name: "",
    email: "",
    phone: ""
  });
  const [service, setService] = useState(services[0].name);
  const [professional, setProfessional] = useState(professionals[0].name);
  const [day, setDay] = useState(availableDays[0].label);
  const [time, setTime] = useState(availableDays[0].times[1]);

  const selectedService = useMemo(
    () => services.find((item) => item.name === service) ?? services[0],
    [service]
  );
  const selectedProfessional = useMemo(
    () =>
      professionals.find((item) => item.name === professional) ??
      professionals[0],
    [professional]
  );
  const selectedDay = useMemo(
    () => availableDays.find((item) => item.label === day) ?? availableDays[0],
    [day]
  );

  const canContinue =
    step === 0
      ? Boolean(
          customer.name.trim() && customer.email.trim() && customer.phone.trim()
        )
      : step === 1
        ? Boolean(service)
        : step === 2
          ? Boolean(professional)
          : step === 3
            ? Boolean(day && time)
            : true;

  function updateCustomer(field: keyof Customer, value: string) {
    setCustomer((current) => ({ ...current, [field]: value }));
    setConfirmed(false);
  }

  function goNext() {
    if (step < steps.length - 1 && canContinue) {
      setStep((current) => current + 1);
    }
  }

  function goBack() {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  }

  function resetDemo() {
    setStep(0);
    setConfirmed(false);
    setCustomer({ name: "", email: "", phone: "" });
    setService(services[0].name);
    setProfessional(professionals[0].name);
    setDay(availableDays[0].label);
    setTime(availableDays[0].times[1]);
  }

  const panelMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: 18 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -18 },
        transition: { duration: 0.28, ease: "easeOut" }
      };

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c0b0a] shadow-[0_28px_110px_rgba(0,0,0,0.45)]">
      <div className="border-b border-white/10 bg-white/[0.035] p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <ProjectLogo variant="cutly" size="md" markOnly />
            <div>
              <p className="text-sm font-medium text-[#d8bf8b]">
                Demo interattiva Cutly
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Flusso di prenotazione in 5 passaggi
              </h3>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
            Passaggio {step + 1} di {steps.length}
          </div>
        </div>

        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-[#d8bf8b]"
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {steps.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => index <= step && setStep(index)}
              disabled={index > step}
              aria-current={step === index ? "step" : undefined}
              className={cn(
                "flex min-w-max items-center gap-2 rounded-md border px-3 py-2 text-xs font-medium transition-colors",
                index <= step
                  ? "border-[#d8bf8b]/30 bg-[#d8bf8b]/10 text-[#f5ead2]"
                  : "border-white/10 bg-white/[0.025] text-white/40"
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-sm text-[11px]",
                  index < step
                    ? "bg-[#d8bf8b] text-black"
                    : "bg-white/10 text-current"
                )}
              >
                {index < step ? <Check className="h-3.5 w-3.5" /> : index + 1}
              </span>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_340px]">
        <div className="min-h-[520px] p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div key={step} {...panelMotion}>
              {step === 0 && (
                <div>
                  <StepTitle
                    icon={UserRound}
                    title="Crea il profilo cliente"
                    text="I dati essenziali restano chiari e leggibili anche da mobile."
                  />
                  <div className="mt-6 grid gap-4">
                    <InputField
                      label="Nome"
                      value={customer.name}
                      onChange={(value) => updateCustomer("name", value)}
                      placeholder="Es. Martina Rossi"
                      autoComplete="name"
                    />
                    <InputField
                      icon={Mail}
                      label="Email"
                      type="email"
                      value={customer.email}
                      onChange={(value) => updateCustomer("email", value)}
                      placeholder="martina@email.it"
                      autoComplete="email"
                    />
                    <InputField
                      icon={Phone}
                      label="Telefono"
                      type="tel"
                      value={customer.phone}
                      onChange={(value) => updateCustomer("phone", value)}
                      placeholder="+39 333 123 4567"
                      autoComplete="tel"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <StepTitle
                    icon={Scissors}
                    title="Scegli il servizio"
                    text="Ogni trattamento mostra durata e prezzo indicativo prima della conferma."
                  />
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {services.map((item) => (
                      <OptionButton
                        key={item.name}
                        active={service === item.name}
                        onClick={() => {
                          setService(item.name);
                          setConfirmed(false);
                        }}
                        title={item.name}
                        meta={`${item.duration} - ${item.price}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <StepTitle
                    icon={UserRound}
                    title="Scegli il professionista"
                    text="Il cliente puo selezionare la persona piu adatta al servizio."
                  />
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {professionals.map((item) => (
                      <ProfessionalButton
                        key={item.name}
                        active={professional === item.name}
                        onClick={() => {
                          setProfessional(item.name);
                          setConfirmed(false);
                        }}
                        professional={item}
                      />
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <StepTitle
                    icon={CalendarDays}
                    title="Seleziona giorno e ora"
                    text="Gli orari disponibili sono ordinati per rendere la scelta immediata."
                  />
                  <div className="mt-6 grid gap-4 lg:grid-cols-[0.78fr_1fr]">
                    <div className="rounded-lg border border-white/10 bg-black/25 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">Luglio</p>
                        <p className="text-xs text-white/45">Disponibilita</p>
                      </div>
                      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-white/45">
                        {["L", "M", "M", "G", "V", "S", "D"].map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <div className="mt-3 grid grid-cols-7 gap-2">
                        {Array.from({ length: 14 }).map((_, index) => {
                          const number = index + 1;
                          const matchingDay = availableDays.find((item) =>
                            item.label.includes(` ${number} `)
                          );
                          const isSelected = matchingDay?.label === day;

                          return (
                            <button
                              key={number}
                              type="button"
                              disabled={!matchingDay}
                              onClick={() => {
                                if (!matchingDay) {
                                  return;
                                }

                                setDay(matchingDay.label);
                                setTime(matchingDay.times[0]);
                                setConfirmed(false);
                              }}
                              className={cn(
                                "aspect-square rounded-md border text-sm transition-colors",
                                isSelected
                                  ? "border-[#d8bf8b] bg-[#d8bf8b] text-black"
                                  : matchingDay
                                    ? "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                                    : "border-transparent text-white/20"
                              )}
                            >
                              {number}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {availableDays.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => {
                            setDay(item.label);
                            setTime(item.times[0]);
                            setConfirmed(false);
                          }}
                          className={cn(
                            "rounded-lg border p-4 text-left transition-[border-color,background-color,box-shadow] active:scale-[0.97]",
                            day === item.label
                              ? "border-[#d8bf8b]/60 bg-[#d8bf8b]/10 text-white shadow-[0_0_28px_rgba(216,191,139,0.12)]"
                              : "border-white/10 bg-white/[0.035] text-white/75 hover:border-white/20 hover:bg-white/[0.055]"
                          )}
                        >
                          <span className="block text-sm font-semibold">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-xs text-white/50">
                            {item.note}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg border border-white/10 bg-black/25 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <Clock3 className="h-4 w-4 text-[#d8bf8b]" />
                      Orari disponibili
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {selectedDay.times.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setTime(item);
                            setConfirmed(false);
                          }}
                          className={cn(
                            "rounded-md border px-4 py-3 text-sm font-medium transition-colors",
                            time === item
                              ? "border-[#d8bf8b]/70 bg-[#d8bf8b] text-black"
                              : "border-white/10 bg-white/[0.035] text-white/70 hover:bg-white/[0.065] hover:text-white"
                          )}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <StepTitle
                    icon={CheckCircle2}
                    title="Conferma la prenotazione"
                    text="Il riepilogo finale evita errori prima dell'invio della richiesta."
                  />
                  <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:p-5">
                    <SummaryRows
                      rows={[
                        ["Nome", customer.name || "Da completare"],
                        ["Email", customer.email || "Da completare"],
                        ["Telefono", customer.phone || "Da completare"],
                        ["Servizio", selectedService.name],
                        ["Professionista", selectedProfessional.name],
                        ["Data", day],
                        ["Ora", time]
                      ]}
                    />
                  </div>
                  <AnimatePresence>
                    {confirmed && (
                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                        className="mt-4 rounded-lg border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm font-medium text-emerald-100"
                      >
                        Prenotazione simulata confermata. In un prodotto reale il
                        salone riceverebbe la richiesta nel proprio pannello.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <aside className="border-t border-white/10 bg-black/25 p-4 sm:p-6 lg:border-l lg:border-t-0">
          <p className="text-sm font-medium text-white/60">
            Riepilogo in tempo reale
          </p>
          <div className="mt-4 rounded-lg border border-white/10 bg-[#15110c] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-white/50">Servizio</p>
                <p className="mt-1 font-semibold text-white">{selectedService.name}</p>
              </div>
              <span className="rounded-md bg-[#d8bf8b]/15 px-2.5 py-1 text-xs font-medium text-[#f5ead2]">
                {selectedService.duration}
              </span>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              <LiveSummaryItem label="Cliente" value={customer.name || "In attesa"} />
              <LiveSummaryItem label="Professionista" value={selectedProfessional.name} />
              <LiveSummaryItem label="Giorno" value={day} />
              <LiveSummaryItem label="Ora" value={time} />
              <LiveSummaryItem label="Totale" value={selectedService.price} />
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <p className="text-sm font-medium text-white">Per il salone</p>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Il concept riduce telefonate ripetitive, rende l&apos;agenda piu
              ordinata e lascia al cliente una prenotazione chiara.
            </p>
          </div>
        </aside>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 bg-white/[0.025] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <Button
          type="button"
          variant="outline"
          onClick={goBack}
          disabled={step === 0}
          className="border-white/10 bg-white/[0.035]"
        >
          <ChevronLeft aria-hidden="true" />
          Indietro
        </Button>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            variant="ghost"
            onClick={resetDemo}
            className="text-white/70 hover:text-white"
          >
            Nuova simulazione
          </Button>
          {step < steps.length - 1 ? (
            <Button
              type="button"
              onClick={goNext}
              disabled={!canContinue}
              className="bg-[#d8bf8b] text-black shadow-none hover:bg-[#ead7ad]"
            >
              Continua
              <ChevronRight aria-hidden="true" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => setConfirmed(true)}
              className="bg-[#d8bf8b] text-black shadow-none hover:bg-[#ead7ad]"
            >
              Conferma prenotazione
              <CheckCircle2 aria-hidden="true" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepTitle({
  icon: Icon,
  title,
  text
}: {
  icon: typeof UserRound;
  title: string;
  text: string;
}) {
  return (
    <div>
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#d8bf8b]/25 bg-[#d8bf8b]/10 text-[#d8bf8b]">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h4 className="mt-4 text-2xl font-semibold text-white">{title}</h4>
      <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}

function InputField({
  icon: Icon = UserRound,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete
}: {
  icon?: typeof UserRound;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-white/75">{label}</span>
      <span className="mt-2 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 transition-colors focus-within:border-[#d8bf8b]/60">
        <Icon aria-hidden="true" className="h-4 w-4 flex-none text-[#d8bf8b]" />
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/30"
        />
      </span>
    </label>
  );
}

function OptionButton({
  active,
  onClick,
  title,
  meta
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  meta: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group rounded-lg border p-4 text-left transition-[border-color,background-color,box-shadow] active:scale-[0.97]",
        active
          ? "border-[#d8bf8b]/60 bg-[#d8bf8b]/10 text-white shadow-[0_0_28px_rgba(216,191,139,0.12)]"
          : "border-white/10 bg-white/[0.035] text-white/75 hover:border-white/20 hover:bg-white/[0.055]"
      )}
    >
      <span className="flex items-center justify-between gap-3">
        <span className="text-base font-semibold">{title}</span>
        <span
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded-sm border transition-colors",
            active
              ? "border-[#d8bf8b] bg-[#d8bf8b] text-black"
              : "border-white/20 text-transparent group-hover:border-white/30"
          )}
        >
          <Check className="h-3.5 w-3.5" />
        </span>
      </span>
      <span className="mt-2 block text-sm text-white/50">{meta}</span>
    </button>
  );
}

function ProfessionalButton({
  active,
  onClick,
  professional
}: {
  active: boolean;
  onClick: () => void;
  professional: (typeof professionals)[number];
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group rounded-lg border p-4 text-left transition-[border-color,background-color,box-shadow] active:scale-[0.97]",
        active
          ? "border-[#d8bf8b]/60 bg-[#d8bf8b]/10 text-white shadow-[0_0_28px_rgba(216,191,139,0.12)]"
          : "border-white/10 bg-white/[0.035] text-white/75 hover:border-white/20 hover:bg-white/[0.055]"
      )}
    >
      <span className="flex items-start gap-3">
        <span
          className={cn(
            "flex h-11 w-11 flex-none items-center justify-center rounded-lg border text-xs font-semibold transition-colors",
            active
              ? "border-[#d8bf8b] bg-[#d8bf8b] text-black"
              : "border-white/10 bg-black/25 text-[#d8bf8b]"
          )}
        >
          {professional.initials}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center justify-between gap-3">
            <span className="text-base font-semibold">{professional.name}</span>
            <span
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-sm border transition-colors",
                active
                  ? "border-[#d8bf8b] bg-[#d8bf8b] text-black"
                  : "border-white/20 text-transparent group-hover:border-white/30"
              )}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
          </span>
          <span className="mt-1 block text-sm text-white/50">
            {professional.role}
          </span>
          <span className="mt-2 block text-xs leading-5 text-white/45">
            {professional.focus}
          </span>
        </span>
      </span>
    </button>
  );
}

function SummaryRows({ rows }: { rows: Array<[string, string]> }) {
  return (
    <dl className="grid gap-3">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col gap-1 border-b border-white/10 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
        >
          <dt className="text-sm text-white/50">{label}</dt>
          <dd className="text-sm font-medium text-white">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function LiveSummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
      <span className="text-white/50">{label}</span>
      <span className="text-right font-medium text-white/80">{value}</span>
    </div>
  );
}

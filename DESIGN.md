---
name: Novary
description: Studio digitale premium italiano — segno champagne su nero inchiostro, precisione senza volume
colors:
  ink-black: "#0A0A0B"
  surface: "#131315"
  surface-2: "#1C1C1F"
  text-primary: "#F2F0EC"
  text-secondary: "#A8A39A"
  aged-champagne: "#C9A66B"
  champagne-hover: "#E0C68A"
  champagne-deep: "#8C6A35"
  hairline-border: "#FFFFFF1A"
  glass-surface: "#FFFFFF09"
typography:
  display:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.02
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.32em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  sm: "0.75rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.aged-champagne}"
    textColor: "#0A0A0B"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  button-primary-hover:
    backgroundColor: "{colors.aged-champagne}"
  button-cta:
    backgroundColor: "#FFFFFF"
    textColor: "#0A0A0B"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "11px 20px"
  badge-default:
    backgroundColor: "{colors.aged-champagne}"
    textColor: "{colors.aged-champagne}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.glass-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Novary

## 1. Overview

**Creative North Star: "La Firma Champagne" (The Champagne Signature)**

Novary è un'incisione di precisione su una superficie preziosa: due barre d'argento e un taglio diagonale champagne, ripetuti nel logo e nel linguaggio visivo dell'intero sito. Il sistema esiste per dimostrare — non dichiarare — il livello del lavoro: "il sito è la prova" (PRODUCT.md). Ogni superficie è quasi nera, quasi silenziosa, finché il champagne non marca esattamente il punto che deve guidare l'attenzione: un focus ring, un hover, un dettaglio.

Il sistema rifiuta esplicitamente l'estetica da agenzia generica — layout affollati, decorazioni a gradiente, hero-metrics, iconografia dimenticabile, tutto che urla insieme (PRODUCT.md, Anti-references). Al suo posto: superfici piatte color inchiostro, bordi hairline quasi invisibili, e un solo accento che compare con criterio.

**Key Characteristics:**
- Nero quasi puro come base, mai grigio neutro da dashboard
- Un solo accento (champagne) usato con rarità deliberata, mai sparso
- Bordi hairline bianco-trasparente (10%) invece di grigi pieni
- Glow champagne al posto di ombre drammatiche per segnalare importanza
- Tipografia DM Sans con letter-spacing ampio (0.18–0.34em) su ogni etichetta, come un'incisione

## 2. Colors

Palette **Restrained**: neutri quasi-neri + un solo accento champagne, usato a bassa percentuale di superficie e alta intenzionalità.

### Primary
- **Champagne Invecchiato** (#C9A66B): l'accento del brand. CTA secondarie, link, focus ring, badge, glow, dettagli attivi. Mai come colore di sfondo esteso.
- **Champagne Hover** (#E0C68A): stato hover/attivo del champagne — più luminoso, mai un colore diverso in famiglia.
- **Champagne Profondo** (#8C6A35): variante scura per bordi/testo grande su sfondo chiaro. Contrasto AA solo su testo large/UI (3.98:1) — non usare per body copy piccolo.

### Neutral
- **Nero Inchiostro** (#0A0A0B): sfondo di base di tutto il sito. Non è un nero-carbone da dashboard: è il nero della stampa di precisione.
- **Surface** (#131315) / **Surface-2** (#1C1C1F): rialzi tonali minimi per card e superfici sovrapposte — differenza percepibile solo da vicino, mai un salto di luminosità marcato.
- **Testo Primario** (#F2F0EC): titoli e corpo principale. Bianco caldo, mai bianco puro.
- **Testo Secondario** (#A8A39A): corpo secondario, meta-informazioni, label.
- **Hairline Border** (rgba(255,255,255,0.1)): il bordo standard di ogni card, pill, campo — non il token `--border` CSS pieno, ma un velo di bianco trasparente sopra il nero.
- **Glass Surface** (rgba(255,255,255,0.035)): il "vetro" su cui poggiano quasi tutte le card — quasi impercettibile, dà solo un accenno di superficie sollevata.

### Named Rules
**La Regola della Rarità.** Il champagne non è mai un colore di sfondo esteso. Copre bordi, focus ring, glow, testo attivo, dettagli — mai più del ~10% di una schermata. La sua rarità è il punto: se fosse ovunque, perderebbe l'effetto premium (vedi anche PRODUCT.md, Design Principles §3).

**La Regola del Contrasto Massimo.** L'unica eccezione alla rarità del champagne è la CTA di conversione primaria ("Richiedi consulenza"): bianco puro su nero, non champagne. Il massimo contrasto possibile è riservato all'unica azione che conta davvero; il champagne resta il segnale per tutto il resto.

## 3. Typography

**Display/Body Font:** DM Sans (con fallback `ui-sans-serif, system-ui, -apple-system, sans-serif`) — un'unica famiglia, pesi 300–700, nessun pairing con una seconda famiglia.

**Character:** Un sans geometrico ma caldo, mai tecnico/mono. La voce tipografica preciso-ma-non-clinico di PRODUCT.md si ottiene interamente con peso e letter-spacing, non cambiando famiglia.

### Hierarchy
- **Display** (600, `clamp(3rem, 6vw, 6rem)`, leading 0.96): titolo hero. Line-height quasi serrato (0.96) per un blocco di testo compatto e sicuro di sé.
- **Headline** (600, `clamp(2.25rem, 4vw, 3rem)`, leading 1.02): titoli di sezione.
- **Title** (600, 1.25rem/20px): titoli di card.
- **Body** (400, 1.125rem/18px, leading 1.7–1.8, max ~65ch): paragrafi lead. Corpo secondario scende a 0.875rem/14px con leading 1.5.
- **Label** (600, 0.625–0.6875rem/10–11px, letter-spacing 0.32–0.34em, maiuscolo): sottotitoli di marchio, etichette footer. Il logo wordmark stesso usa tracking 0.18–0.2em — l'incisione è anche tipografica, non solo nel segno.

### Named Rules
**La Regola dell'Incisione.** Ogni etichetta piccola (badge, sottotitoli, eyebrow, wordmark) porta un letter-spacing ampio (≥0.18em). È la firma tipografica del sistema, coerente con il taglio diagonale del logo: precisione, non decorazione.

## 4. Elevation

Il sistema è **piatto con stratificazione tonale**, non a ombre. La profondità nasce da tre soli strumenti: (1) un velo di bianco trasparente (`glass-surface`, 3.5% opacità) sopra il nero come "superficie", (2) un hairline bianco 10% come bordo, (3) un glow champagne — mai un'ombra nera dura — per segnalare rilievo o importanza. Le uniche ombre nere esistenti sono estremamente soffuse e a bassa opacità (blur 100–140px, opacità 0.2–0.6), usate per un'atmosfera di profondità dietro elementi flottanti (es. la card della hero), mai come "elevazione" da material design.

### Shadow Vocabulary
- **Champagne Glow** (`box-shadow: 0 0 34px rgb(var(--glow) / 0.22)`): il segnale di importanza del sistema. Badge, CTA secondarie, logo mark, icone attive.
- **Atmospheric Depth** (`box-shadow: 0 40px 140px rgba(0,0,0,0.6)`): ombra nera larghissima e sfumata dietro elementi flottanti (hero card), mai dietro elementi piatti a filo pagina.
- **Card Ambient** (`shadow-sm` di default su `Card`): quasi invisibile, solo per staccare leggermente dal fondo.

### Named Rules
**La Regola del Bagliore, non dell'Ombra.** Quando un elemento deve "risaltare", il sistema usa un glow color (champagne), non un'ombra nera più scura. Il nero non comunica importanza in questo sistema; il champagne sì.

## 5. Components

### Buttons
- **Shape:** rounded-md (6px), altezza 36–48px secondo size.
- **Primary (champagne):** sfondo Champagne Invecchiato, testo Nero Inchiostro, `shadow-glow`, hover a opacità 90%. Usato per azioni secondarie/di supporto, non per la conversione principale.
- **CTA (bianco):** sfondo bianco puro, testo nero, glow bianco. Riservato all'unica azione di conversione primaria del sito ("Richiedi consulenza") — vedi Regola del Contrasto Massimo.
- **Outline:** bordo bianco 20%, sfondo glass-surface, hover a bianco 8%.
- **Ghost:** trasparente, testo secondario, hover a bianco 6%.
- **Link:** testo champagne, underline on hover.
- **Stato / Focus:** `active:scale-[0.97]` su ogni bottone (feedback al press). `focus-visible:ring-2` color champagne, offset 2px sul nero. Transizione 150ms `ease-out-expo` — mai `transition-all`.

### Badge
- **Style:** rounded-md, padding 4px/12px, testo 12px medium.
- **Default:** bordo champagne 25%, sfondo champagne 10%, testo champagne, glow soffice. Usato per eyebrow ed etichette di stato.
- **Secondary/Outline:** neutro, bianco trasparente, nessun glow — riservato quando il champagne non deve competere con un CTA vicino.

### Cards / Containers
- **Corner Style:** rounded-lg (8px).
- **Background:** glass-surface (bianco 3.5%) su nero inchiostro, mai un grigio pieno.
- **Border:** hairline-border (bianco 10%), diventa `border-primary/25` (champagne) su hover quando la card è interattiva.
- **Shadow Strategy:** vedi Elevation — quasi nessuna, o glow champagne su hover.
- **Internal Padding:** 24px (desktop), scala a 20px su mobile.

### Inputs / Fields
- **Style:** rounded-lg, bordo hairline, sfondo glass-surface, placeholder a testo secondario 70% opacità (non il muted default — deve restare leggibile).
- **Focus:** bordo champagne 40%, `ring-2` champagne 30%. Nessun cambio di sfondo al focus.

### Navigation
- **Style:** pill flottante (rounded-full), bordo hairline, sfondo glass-surface, sticky con `backdrop-blur-2xl`. Link con hover a solo cambio sfondo/testo (bianco 9%) — il champagne è deliberatamente assente qui, riservato al mark e alla CTA.
- **Mobile:** hamburger con icona che ruota/scala in cross-fade (180ms), pannello a comparsa con stesso trattamento hairline.

### Novary Mark (componente firma)
Il logo N è un path SVG vero — due barre argento (`linearGradient` bianco→grigio) e un taglio diagonale champagne — mai un'immagine raster. Nell'hero si "disegna" al primo caricamento di sessione (contorno che traccia in ~420ms, poi si riempie in ~300ms) prima che il resto del contenuto entri in stagger. Rispetta `prefers-reduced-motion` (nessuna animazione, stato finale immediato) e non si ripete nella stessa sessione (sessionStorage).

## 6. Do's and Don'ts

### Do:
- **Do** usare il nero inchiostro (#0A0A0B) come sfondo di base ovunque — mai un grigio-carbone da dashboard generico.
- **Do** riservare il champagne a bordi, focus ring, glow, testo attivo, dettagli — non più del ~10% di superficie per schermata.
- **Do** usare `active:scale-[0.97]` su ogni elemento premibile e `focus-visible:ring` champagne su ogni elemento interattivo, inclusi i link `<a>` nudi (non solo i componenti `Button`).
- **Do** usare glow champagne (non ombra nera) per segnalare importanza/hover.
- **Do** specificare proprietà esplicite nelle transizioni (`transition-[border-color,background-color]`), mai `transition-all`.
- **Do** rispettare `prefers-reduced-motion` su ogni animazione con movimento (non solo su quelle decorative).

### Don't:
- **Don't** usare l'estetica da agenzia generica: layout affollati, gradienti decorativi, hero-metrics, iconografia dimenticabile (PRODUCT.md, Anti-references).
- **Don't** stendere il champagne come colore di sfondo esteso o su bordi/icone ovunque — perde l'effetto premium.
- **Don't** usare `accent-deep` (#8C6A35) per body text piccolo — supera AA solo per testo large/UI (3.98:1).
- **Don't** usare ombre nere dure o `box-shadow` scuro come segnale di elevazione — il sistema comunica rilievo col glow, non con l'ombra.
- **Don't** introdurre una seconda famiglia tipografica: DM Sans porta l'intera gerarchia via peso e letter-spacing.
- **Don't** duplicare i valori hex del token champagne/nero altrove nel codice — riferire sempre le CSS custom properties (`rgb(var(--accent))`, ecc.), mai hex hardcoded, per restare sincronizzati se il brand evolve.

---
target: components/sections/portfolio-section.tsx
total_score: 29
p0_count: 2
p1_count: 1
timestamp: 2026-07-01T08-22-40Z
slug: components-sections-portfolio-section-tsx
---
Method: dual-agent (A: general-purpose design review · B: general-purpose detector/browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover states present; nessuno stato attivo/loading sulla navigazione card |
| 2 | Match System / Real World | 3 | Copy chiara, onesta sui progetti concept |
| 3 | User Control and Freedom | 3 | Navigazione standard a link, nessuna trappola |
| 4 | Consistency and Standards | 1 | Due trattamenti card diversi per lo stesso tipo di contenuto |
| 5 | Error Prevention | 4 | N/A, nessun form in questa sezione |
| 6 | Recognition Rather Than Recall | 3 | Badge/tag aiutano la scansione |
| 7 | Flexibility and Efficiency | 3 | Nessun filtro, ma la dimensione del portfolio non lo richiede |
| 8 | Aesthetic and Minimalist Design | 2 | Card orfana in riga 2, banner chiari rompono la palette scura |
| 9 | Error Recovery | 4 | N/A |
| 10 | Help and Documentation | 3 | Il testo introduttivo imposta bene le aspettative |
| **Total** | | **29/40** | **Good, ma con problemi strutturali gravi in Consistency** |

## Anti-Patterns Verdict

**LLM assessment**: La sezione contiene due sistemi di card strutturalmente e visivamente distinti (`CaseStudyCard` con mockup illustrato vs `LinkedCaseStudyCard` con banner piatto) per lo stesso tipo di contenuto, senza alcuna etichetta che segnali una gerarchia "in evidenza / altri". Legge come due feature mai riconciliate, non come una scelta di design deliberata — il tell più forte di "AI slop" nella sezione.

**Deterministic scan**: `detect.mjs` su portfolio-section.tsx, card.tsx, project-logo.tsx, about-section.tsx → exit 0, **zero findings**. Nessun pattern noto (eyebrow ripetuti, gradient text, side-stripe border in quei file specifici, ecc.) rilevato automaticamente in questi file.

**Browser evidence**: confermato via DOM query — griglia dei 4 progetti extra (`lg:grid-cols-3`, 4 item) produce righe [3, 1] a 1280px e 1440px: **il quarto progetto ("Studio professionale") è orfano da solo in riga 2**. A mobile (375px) entrambe le griglie collassano a 1 colonna, nessun orfano visibile lì. Iniezione di `detect.js` fallita (404 — lo script non esiste su questo server, nessun overlay visivo disponibile).

## Overall Impression

Cutly e Veyra sono il meglio della sezione — mockup illustrati su misura, glow al hover coerente con la Regola del Bagliore di DESIGN.md. Ma gli altri 4 progetti (incluso quello che citavi, "Studio professionale") vivono in un sistema di card più piccolo e povero, con banner di colore incoerenti (due chiari — Orto e Studio — su un sito tutto nero-inchiostro), e il quarto finisce orfano in una griglia a 3 colonne. La causa tecnica è visibile nel codice: `MockupPreview` gestisce solo le varianti "cutly" e "veyra" — per gli altri 4 ritorna `null`, motivo per cui usano il trattamento più semplice.

## What's Working

1. **Mockup di Cutly e Veyra**: illustrazioni fake-UI su misura, palette corrette, ombre soffici — la sezione al suo meglio.
2. **Glow cursor-following sull'hover di `CaseStudyCard`**: esattamente la Regola del Bagliore da DESIGN.md.
3. **Testo di disclosure onesto**: "Progetti dimostrativi, non clienti reali..." — diretto, in voce col brand.

## Priority Issues

**[P0] Card orfana rompe la griglia**
- Perché: comunica "incompiuto" proprio nella sezione che deve essere la prova del lavoro (PRODUCT.md: "il sito è la prova").
- Fix: griglia unica 2 colonne (3 righe da 2) per tutti e 6 i progetti — esattamente quanto richiesto.
- Comando: `/impeccable layout`

**[P0] Due sistemi di card incompatibili per lo stesso tipo di contenuto**
- Perché: viola la consistenza di DESIGN.md, è il tell più forte di "AI slop" nella sezione.
- Fix: un unico componente card (`CaseStudyCard`) per tutti e 6, stessa dimensione di Cutly/Veyra.
- Comando: `/impeccable harden`

**[P1] Banner chiari rompono il sistema nero-inchiostro**
- Perché: Orto (crema) e Studio (grigio chiaro) violano la Regola della Rarità — sembrano colori-cliente non tematizzati, non varietà intenzionale.
- Fix: nuovi `MockupPreview` scuri per Atlas/Orto/Lumen/Studio con glow colorato del brand, coerenti con Cutly/Veyra.
- Comando: `/impeccable colorize`

**[P2] Contrasto tag sotto AA**
- Cosa: `text-muted-foreground/70` su tag 11px in `LinkedCaseStudyCard` ≈ 3.8:1 su #0A0A0B, sotto la soglia AA 4.5:1.
- Fix: risolto di conseguenza eliminando `LinkedCaseStudyCard` in favore del trattamento tag di `CaseStudyCard` (già a piena opacità).
- Comando: `/impeccable harden`

**[P3] Nessuna etichetta distingue "in evidenza" da "altri"**
- Diventa irrilevante una volta unificata la griglia in un unico sistema, come richiesto.

## Persona Red Flags

**Jordan (valutatore scettico, scansiona veloce cercando prova di qualità)**: incontra la card orfana e il caos di colore banner nel primo scroll — mina direttamente "il sito è la prova".

**Riley (fretta, vuole capire al volo)**: due densità/dimensioni di card nella stessa sezione costringe a ricalibrare due volte cosa significhi "case study".

**Casey (attento al dettaglio)**: nota lo scarto tra `rounded-md` (Cutly/Veyra) e `rounded` (gli altri 4) sui tag — legge come mestiere incoerente, l'opposto di "dettaglio invisibile, effetto visibile".

## Minor Observations

- `MockupPreview` gestisce solo "cutly"/"veyra" — conferma che la separazione a due livelli è una scorciatoia tecnica, non una scelta di design.
- L'icona freccia hover è duplicata identica tra i due componenti card — buon candidato per estrazione in sotto-componente condiviso una volta unificati.
- In `about-section.tsx` (file adiacente ispezionato per contesto): `border-l-2 border-primary/30` sui principi è un side-stripe border — uno degli absolute ban espliciti della skill Impeccable. Non nello scope di questa critique ma segnalato.

## Questions to Consider

1. Se solo 2 progetti su 6 hanno il trattamento illustrato completo, cosa comunica silenziosamente sugli altri 4?
2. Una sezione più forte avrebbe tutti e 6 con lo stesso livello di cura, in linea con "essenzialità come forza"?

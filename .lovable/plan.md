

## Plan: Add subheadline with 3 facts below the main headline

Based on the reference image, I'll add a subheadline block between the current headline and the calculation card. It features:

- A bold heading: **"3 coisas que todo dono de pousada precisa saber:"**
- A subtitle: *"Antes de precificar a próxima temporada"*
- 3 numbered items, each with a bold title and a lighter description line
- A bottom arrow text: *"→ A conta precisa ser refeita agora."*

### Changes

**File: `src/components/landing/OTAComparisonSection.tsx`**

Insert a new `reveal` block after the headline `div` (after line 17) and before the calculation card (line 19). The block will contain:

1. Heading `h3` styled with `font-heading`, smaller than the main h2
2. Subtitle in `text-night/50`
3. Three numbered rows, each with:
   - A circular number indicator (styled like the ochre theme)
   - Bold title text
   - Lighter description text
4. Bottom line with arrow: "→ A conta precisa ser refeita agora." in `text-ochre`

Content from the image:
- **1** — "Airbnb cobra 16% de comissão por reserva" / "Direto do valor da diária, antes de qualquer imposto"
- **2** — "Nota fiscal será obrigatória a partir de 2026" / "Reforma Tributária equiparou temporada a hotelaria"
- **3** — "Impostos podem tirar até 20% a mais da diária" / "ISS municipal + novos tributos federais (IBS e CBS)"

Styling follows existing patterns: `bg-cream-dark` background, `font-heading` for bold text, `text-night/50` for descriptions, numbered circles with subtle background.


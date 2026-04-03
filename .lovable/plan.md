

## Plan: Improve all section headlines for better readability and visual hierarchy

Based on the reference image, the headlines should follow a clear pattern: the descriptive/introductory part of the headline is in a **lighter weight** (normal/medium), while the **key phrase** (the shimmer/emphasized text) stays bold — creating strong contrast and easier scanning.

Currently, all headlines use `font-heading` (Playfair Display) without explicit weight differentiation, making them look uniformly heavy and harder to scan.

### What changes

Every section headline (`h2`) across all landing sections will be updated to:

1. **Add `font-normal`** to the `h2` base class (lighter weight for the intro text)
2. **Add `font-bold`** to the `<em>` / `<span>` shimmer text (the key phrase stays punchy)
3. **Increase line-height** to `leading-[1.2]` where it's currently tighter, for better readability
4. Keep font sizes unchanged

### Files to edit (12 sections)

| File | Headline text |
|------|--------------|
| `Hero.tsx` | "Como lotar sua hospedagem em **fins de semana comuns**" |
| `ProblemSection.tsx` | "Sua hospedagem **depende de feriados** para faturar?" |
| `ForWhom.tsx` | "Esse método é para o seu tipo de **hospedagem**" |
| `StepsSection.tsx` | "90 dias para a lapidação e **escala**" |
| `OTAComparisonSection.tsx` | "Quanto custa depender **só do Airbnb**?" |
| `Testimonials.tsx` | "4 Meses de Reservas Vendidas **em Apenas 60 Dias**" |
| `GallerySection.tsx` | "De ponta a ponta do Brasil, **lotando fins de semana**" |
| `ResultsSection.tsx` | "Quem aplica o método, vende. **Todo. Dia.**" |
| `ModulesSection.tsx` | "O plano detalhado... **hospedagem decolar**" |
| `ComparisonTable.tsx` | "O que muda com o **Check-in Lotado**" |
| `PricingSection.tsx` | "Entre no **Check-in Lotado**" |
| `FinalCTA.tsx` | "Não deixe o próximo **fim de semana** passar vazio" |
| `AccordionSection.tsx` | Dynamic headline (via props + dangerouslySetInnerHTML) |

### Implementation detail

For each `h2`, add `font-normal` to the className so the base text is lighter weight. The shimmer `<em>`/`<span>` elements already stand out via the shimmer effect, but will also get `font-bold` explicitly for stronger contrast.

For `AccordionSection.tsx`, update the inline HTML template to wrap the shimmer text with `font-bold`.

For `Hero.tsx`, it already has `font-black` — change to `font-normal` on the `h1`, keep shimmer as `font-black`.


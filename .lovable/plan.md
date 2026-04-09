

## Plan: Redesign the "Entre no Check-in Lotado" section

Inspired by the uploaded reference image, we'll restructure the PricingSection to remove all pricing (R$197, R$497, 12x, etc.) and replace it with a grouped benefits layout similar to the reference — organized into 3 distinct blocks with dividers, each with a bold heading and bullet items with icons. A CTA button at the bottom opens the lead form instead of linking to Kiwify.

### New structure

1. **Header** — Keep "Sua decisão" label + "Entre no Check-in Lotado" title + subtitle
2. **Card with 3 benefit groups** separated by dividers:
   - **"Acesso completo ao método Check-in Lotado"** — grid of items with checkmark icons (curso gravado, método completo, calendário 90 dias, scripts, 10 GPTs, etc.)
   - **"Acesso imediato ao curso e materiais complementares"** — list items with document-style icons (exemplos reais, apostilas, desafios práticos)
   - **"Acesso a comunidade e suporte"** — list items with green check icons (suporte WhatsApp, atualizações, garantia de 14 dias)
3. **CTA button** — "QUERO ENTRAR AGORA →" opens the lead form (via `useLeadForm`)
4. **Guarantee box** — Keep the existing 7-day guarantee block below

### Changes

- **File**: `src/components/landing/PricingSection.tsx`
  - Remove all price-related markup (De R$497, POR R$197, 12x R$20,37)
  - Remove Kiwify link; use `useLeadForm` + `setOpen(true)` on CTA button
  - Reorganize benefits into 3 grouped sections with headings and dividers
  - Use ochre checkmarks/icons consistent with the dark theme
  - Keep the guarantee section as-is


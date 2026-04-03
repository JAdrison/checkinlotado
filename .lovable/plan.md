

## Corrigir Imagens Repetidas + Aumentar Fontes

### Problema 1 — Imagens repetidas no accordion

Os 9 itens do accordion usam apenas 6 imagens, com repetições:
- `module-6.jpg` é cópia idêntica de `module-5.jpg`
- Bônus 01 reutiliza `module-1.jpg`, Bônus 02 reutiliza `module-3.jpg`, Bônus 03 reutiliza `module-5.jpg`

**Solução**: Gerar 4 novas imagens via AI (Nano banana) para os itens que repetem — module-6, bonus-1, bonus-2 e bonus-3. Cada imagem será temática:
- **Módulo 6** (Otimização e Repetição): gráficos/dashboard de análise
- **Bônus 1** (Website com IA): tela de laptop com site de hospedagem
- **Bônus 2** (Instagram): celular com feed do Instagram de pousada
- **Bônus 3** (Google Meu Negócio): mapa/pin de localização de hospedagem

Serão salvas como `module-6.jpg`, `bonus-1.jpg`, `bonus-2.jpg`, `bonus-3.jpg` em `src/assets/` e importadas no `ModulesSection.tsx`.

### Problema 2 — Fontes pequenas na landing page

Texto de corpo em diversas seções usa `text-sm` (14px), `text-[0.78rem]`, `text-[0.9rem]`, `text-[0.92rem]`, `text-[0.95rem]` — difícil de ler.

**Solução**: Aumentar as fontes de corpo em toda a landing page:
- `text-sm` → `text-base` (16px)
- `text-[0.78rem]` → `text-sm` (14px)
- `text-[0.9rem]` / `text-[0.92rem]` → `text-base` (16px)
- `text-[0.95rem]` / `text-[0.97rem]` → `text-lg` (18px)
- Subtítulos/descrições `text-lg` → `text-xl` onde faz sentido
- Accordion: phase label de `text-[0.7rem]` → `text-xs`, desc de `text-sm` → `text-base`

Arquivos afetados:
- `src/components/landing/Hero.tsx`
- `src/components/landing/ProblemSection.tsx`
- `src/components/landing/ForWhom.tsx`
- `src/components/landing/StepsSection.tsx`
- `src/components/landing/Stats.tsx`
- `src/components/landing/Testimonials.tsx`
- `src/components/landing/ModulesSection.tsx`
- `src/components/landing/PricingSection.tsx`
- `src/components/landing/FinalCTA.tsx`
- `src/components/landing/OTAComparisonSection.tsx`
- `src/components/ui/interactive-image-accordion.tsx`


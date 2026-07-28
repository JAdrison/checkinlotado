
# Reconstrução da Landing Check-in Lotado (pós-VSL)

## Princípios inegociáveis
- **Seção 1 (Hero + VSL) permanece intacta**: `src/components/landing/Hero.tsx` não é tocado. Vídeo, thumbnail, headline, subtítulo, bullets, botão, fundo, `YouTubeFacade`, `scrollToSection("comprar")`, tracking — zero alteração.
- **Conteúdo real preservado**: nomes de módulos, bônus, depoimentos, cases (Iparaí, Robelú, etc.), preço, parcelamento, link Kiwify, garantia de 7 dias, FAQ atual, textos das objeções.
- **Sem inventar**: nada de novos números, resultados, depoimentos, bônus ou escassez/cronômetros falsos.
- **Sem tocar**: Meta Pixel, `meta-capi.ts`, eventos, UTMs, âncora `#comprar`, `LeadFormDialog`, integrações Supabase, `client.ts`, `.env`.

## Nova ordem de seções em `src/pages/Index.tsx` (após `<Hero />`)
1. `BenefitsStrip` — faixa 4 ícones dourados lineares (nova)
2. `ProblemSection` — identificação do problema (reaproveitar/reescrever visual; conteúdo já existe)
3. `PerspectiveShift` — Improviso vs Método (nova, 2 colunas)
4. `WhatIsSection` — "O que é o Check-in Lotado" com mockup (nova, usa imagem existente)
5. `WhatYouReceive` — grid de entregáveis reais (aulas, 10 GPTs, módulos, bônus, suporte, garantia — todos já presentes em `Stats.tsx` e `ModulesSection.tsx`)
6. `ForWhom` — mantido, apenas redesenhado
7. `StepsSection` — mantido (já é a metodologia); ajuste visual de timeline
8. `ModulesSection` — mantido, redesenhado em blocos editoriais alternados (esq/dir no desktop)
9. `BeforeAfter` — 2 colunas (nova, usando linguagem operacional)
10. `ResultsSection` + `GallerySection` fundidos em `CaseStudies` premium (mantém logos/imagens atuais)
11. `BonusMaterials` — bônus 1/2/3 reais em mockups (imagens `bonus-1/2/3.webp` existentes)
12. `Authority` — nova, com conteúdo/fotos já presentes no projeto (Testimonials tem base; ou seção dedicada equipe/experiência)
13. `PricingSection` — mantida integralmente (preço, checkout, bônus, garantia), apenas re-skin premium
14. `GuaranteeSection` — bloco dedicado com escudo (extraído/destacado)
15. `AccordionSection` (FAQ) — mantida, com todos os itens `objections + faq` atuais; visual acordeão minimalista
16. `FinalCTA` — mantido com foto premium de hospedagem e CTA para `#comprar`
17. `Footer` — mantido

Ordem final do JSX de `Index.tsx` reflete exatamente essa lista. `Testimonials`, `ComparisonTable`, `OTAComparisonSection` continuam disponíveis: `Testimonials` entra dentro de `CaseStudies`/Authority; `ComparisonTable` e `OTAComparisonSection` são absorvidos em `PerspectiveShift`/`BeforeAfter` (mesma lógica comparativa) para não duplicar mensagem — nenhum conteúdo real perdido.

## Design system (aplicado em `src/index.css` e `tailwind.config.ts`)
Tokens exatos da spec:
```
--background: #080706;
--background-secondary: #11100E;
--surface: #171512;
--gold: #C9973E;
--gold-light: #E4BC6A;
--text-primary: #F6F2E9;
--text-secondary: #C8C1B5;
--border: rgba(201,151,62,0.24);
```
- Headings: Playfair Display (serifada editorial); body: Inter.
- Dourado só em palavras-chave e ícones lineares, nunca em blocos inteiros.
- Botão primário: fundo dourado sólido, texto preto, hover suave (sem pulsar/shimmer contínuo). Botão secundário: transparente + borda dourada.
- Cards: `bg-surface`, borda `--border` 1px, radius discreto, sombra suave.
- Fotografia hoteleira quente (imagens existentes reaproveitadas; sem novos assets grandes).

## Responsividade
Mobile-first testado em 360–430px: 1 coluna, CTAs full-width, sem scroll horizontal, imagens `object-cover` com `aspect-ratio`, sticky CTA já existente (`StickyBar`) mantido.

## Performance
- Mantém `lazy()` + `Suspense` para tudo pós-hero.
- Reutiliza `.webp` já no projeto; nenhuma nova lib.
- Sem animações pesadas, sem autoplay novo.

## Arquivos afetados
- **Editar**: `src/index.css`, `tailwind.config.ts`, `src/pages/Index.tsx`, e re-skin de: `ProblemSection`, `ForWhom`, `StepsSection`, `ModulesSection`, `ResultsSection`, `GallerySection`, `PricingSection`, `AccordionSection`, `FinalCTA`, `Footer`, `Navbar`, `StickyBar`, `Testimonials`, `ComparisonTable`, `OTAComparisonSection`.
- **Criar**: `BenefitsStrip.tsx`, `PerspectiveShift.tsx`, `WhatIsSection.tsx`, `WhatYouReceive.tsx`, `BeforeAfter.tsx`, `CaseStudies.tsx`, `BonusMaterials.tsx`, `Authority.tsx`, `GuaranteeSection.tsx`.
- **Não tocar**: `Hero.tsx`, `meta-capi.ts`, `supabase/*`, `LeadFormDialog.tsx`, `.env`, `index.html` (exceto tags de fonte se necessário).

## Validação
Após implementar: Playwright screenshots em 375px e 1280px, topo/meio/fundo; conferir que Hero está idêntico, link Kiwify e âncora `#comprar` funcionam, evento `PageView` dispara.

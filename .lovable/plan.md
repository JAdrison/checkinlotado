

## Plano: Corrigir botões cortados no mobile

### Problema
O CSS `.btn-cta` tem `white-space: nowrap`, o que impede o texto de quebrar linha. Em telas de 390px, botões com textos longos (como "QUERO LOTAR MINHA HOSPEDAGEM") ultrapassam a largura da tela e ficam com palavras cortadas.

### Botões com problemas identificados

| Seção | Texto | Arquivo | Problema |
|-------|-------|---------|----------|
| Hero | QUERO LOTAR MINHA HOSPEDAGEM | Hero.tsx | Texto cortado à esquerda |
| Testimonials | QUERO LOTAR MINHA HOSPEDAGEM → | Testimonials.tsx | Sem `<span>` responsivo, sem `w-full` |
| Gallery | QUERO O MESMO RESULTADO ↗ | GallerySection.tsx | Seta cortada |

### Solução

**1. Alterar `.btn-cta` no CSS global** (`src/index.css`)
- Trocar `white-space: nowrap` por `white-space: normal` para permitir quebra de linha quando necessário
- Adicionar `text-align: center` para manter centralizado em caso de quebra

**2. Padronizar todos os botões CTA** — garantir que todos usem:
- `w-full sm:w-auto` para ocupar 100% no mobile
- `<span>` com `text-[0.75rem] sm:text-base` para reduzir fonte no mobile
- Isso já foi feito no Hero e Gallery, mas falta em:
  - **Testimonials.tsx** (linha 124-126) — texto direto sem `<span>`
  - **ComparisonTable.tsx** (linha 83-85) — texto direto sem `<span>`
  - **OTAComparisonSection.tsx** (linha 197-199) — texto direto sem `<span>`
  - **AccordionSection.tsx** (linha 65-67) — texto direto sem `<span>`
  - **FinalCTA.tsx** (linha 20-22) — tem `<span>` mas sem classes responsivas

### Arquivos a editar
- `src/index.css` — remover `white-space: nowrap` do `.btn-cta`
- `src/components/landing/Testimonials.tsx` — padronizar botão
- `src/components/landing/ComparisonTable.tsx` — padronizar botão
- `src/components/landing/OTAComparisonSection.tsx` — padronizar botão
- `src/components/landing/AccordionSection.tsx` — padronizar botão
- `src/components/landing/FinalCTA.tsx` — padronizar botão


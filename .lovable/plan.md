

## Redesign da Seção OTA Comparison — Estilo Claro e Premium

### Problema
A seção atual usa fundo preto (`#0F0C06`), vermelhos agressivos (`#E74C3C`), e glassmorphism escuro — completamente fora do padrão visual do resto da landing page que usa tons claros (cream `#F5EFE0`, branco, ochre `#C8943A`).

### Solução
Redesenhar o `OTAComparisonSection.tsx` seguindo exatamente o mesmo padrão visual do `ComparisonTable.tsx` e `PricingSection.tsx`:

- **Fundo**: `cream` (`#F5EFE0`) ou `cream-dark` (`#EAE3CF`)
- **Cards**: Fundo branco com `shadow-[0_2px_20px_rgba(0,0,0,0.06)]` e `rounded-2xl`
- **Cores**: Ochre para positivo, `night/50` ou cinza suave para negativo (sem vermelho agressivo)
- **Tipografia**: `font-heading` com `text-night`, labels com `label-text`, shimmer no destaque
- **Ícones**: Ochre para check, `night/40` para X (tons suaves)

### Estrutura mantida, visual ajustado

1. **Headline** — Mesma estrutura com `label-text` + `font-heading` + `shimmer-text`
2. **Simulação numérica** — Card branco com sombra suave, números em `text-night` e `text-ochre`, valor perdido em `text-night/60` (sem vermelho)
3. **Cards de comparação** — Dois cards brancos lado a lado (igual ComparisonTable): card OTA com ícone `TrendingDown` em tom neutro, card Check-in Lotado com ícone `TrendingUp` em ochre
4. **Bottom text** — `text-night/60` com destaque ochre

### Arquivo modificado
- `src/components/landing/OTAComparisonSection.tsx` — Reescrita completa do estilo, mantendo o mesmo conteúdo/dados




## Plano: Atualizar preço e corrigir logos no mobile

### 1. Atualizar preço em PricingSection.tsx (linhas 41-53)

Alterar de "De R$997" para mostrar:
- "De R$997" rasurado
- "por R$497" como preço à vista
- "ou 12x R$51,40" como parcelamento

### 2. Corrigir logos no mobile em ForWhom.tsx

O problema: cada `LogoItem` tem `width: 280px` fixo. No mobile (~360px de largura), só cabem ~1-2 logos visíveis. O ticker anima, mas o container é muito apertado.

**Solução**: Reduzir o tamanho dos logos no mobile — usar `width: 160px` e `height: 80px` no mobile, e `px-6` em vez de `px-12`. Isso permitirá que mais logos fiquem visíveis simultaneamente durante a animação.

### Arquivos a editar
- `src/components/landing/PricingSection.tsx` — bloco de preço (linhas 41-53)
- `src/components/landing/ForWhom.tsx` — `LogoItem` recebe prop `isMobile` ou usar classes responsivas


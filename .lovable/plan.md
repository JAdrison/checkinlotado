

## Plano: Layout desconstruído na seção Resultados Reais

### Mudanças

Refatorar o grid da `ResultsSection` para um layout masonry/desconstruído com 4 colunas, inspirado na referência:

- **4 colunas** no desktop (em vez de 3), com cards menores
- **Offsets verticais alternados** por coluna usando `margin-top` diferente em cada coluna (ex: col1 = 0, col2 = 60px, col3 = 30px, col4 = 80px) para criar o efeito escalonado
- Trocar de CSS Grid para layout manual por colunas (`flex` com 4 divs verticais), distribuindo os 9 cards entre as colunas (3-2-2-2 ou 2-3-2-2)
- **Responsivo**: 1 coluna mobile, 2 tablet, 4 desktop
- Reduzir o `max-width` do container de cards e diminuir levemente o tamanho dos cards
- Manter headers WhatsApp, placeholders de imagem e footers iguais, apenas menor escala
- Cada coluna terá um `paddingTop` diferente para o efeito staggered

### Arquivo alterado
- `src/components/landing/ResultsSection.tsx`


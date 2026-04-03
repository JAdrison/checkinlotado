

## Títulos verticais nos itens fechados do accordion

Quando um item do accordion está fechado (collapsed), o texto "Fase 03 · Criativos Virais" deve ser exibido na vertical (rotacionado 90° ou com `writing-mode: vertical`), centralizado dentro da barra estreita. Quando aberto, o texto volta ao layout horizontal normal.

### Alterações em `src/components/ui/interactive-image-accordion.tsx`

**No bloco de conteúdo do `AccordionItem`:**

- Quando `isActive = false`: renderizar o phase + title combinados ("Fase 03 · Criativos Virais") com `writing-mode: vertical-rl` e `rotate-180` (para ler de baixo para cima), centralizado vertical e horizontalmente na barra. Esconder a descrição.
- Quando `isActive = true`: manter o layout atual (horizontal, no canto inferior).

Implementação:
- Adicionar um bloco condicional: se `!isActive`, renderizar um `div` centralizado com classe `writing-mode-vertical` (via style inline `writingMode: "vertical-rl"`) e `rotate-180`, exibindo `{item.phase}: {item.title}`.
- Se `isActive`, manter o bloco atual com phase, title e desc no bottom.
- Transições de opacidade para suavizar a troca entre os dois estados.



## Plano: Redesign da seção "O que muda com o Check-in Lotado"

Inspirado na referência enviada, trocar a tabela atual (difícil de ler) por **dois cards lado a lado** — um positivo (com o método) e um negativo (sem o método) — cada um com ícone no topo, título e lista de itens com ícones de check/X.

### Layout proposto

```text
┌─────────────────────────────────────────────────┐
│          O que muda com o Check-in Lotado       │
│                                                 │
│  ┌──────────────────┐  ┌──────────────────┐     │
│  │  [✓ icon verde]  │  │  [✕ icon verm.]  │     │
│  │                  │  │                  │     │
│  │  Com o Check-in  │  │  Sem o           │     │
│  │  Lotado          │  │  método          │     │
│  │                  │  │                  │     │
│  │  ✓ Item 1        │  │  ✕ Item 1        │     │
│  │  ✓ Item 2        │  │  ✕ Item 2        │     │
│  │  ✓ Item 3        │  │  ✕ Item 3        │     │
│  │  ...             │  │  ...             │     │
│  └──────────────────┘  └──────────────────┘     │
└─────────────────────────────────────────────────┘
```

### Alterações em `src/components/landing/ComparisonTable.tsx`

1. **Dados**: Manter os 6 pares de frases existentes, separados em duas listas (`withMethod` e `withoutMethod`).

2. **Card "Com o Check-in Lotado"** (esquerda):
   - Ícone: quadrado arredondado verde (ochre/dourado para manter a identidade) com ícone `TrendingUp` do Lucide
   - Título: "Com o **Check-in Lotado**" (parte em bold com cor ochre)
   - Lista com ícones de check verdes/ochre + texto escuro
   - Background branco, `rounded-2xl`, sombra sutil

3. **Card "Sem o método"** (direita):
   - Ícone: quadrado arredondado vermelho com ícone `TrendingDown`
   - Título: "Sem o método"
   - Lista com ícones X vermelhos + texto cinza médio
   - Background branco, `rounded-2xl`, sombra sutil

4. **Responsivo**: `grid grid-cols-1 md:grid-cols-2 gap-6` — empilha em mobile.

5. **Estilos**: Cada item da lista terá `py-4` com divisor sutil entre itens (`border-b` no último item não). Ícones check/X em círculos coloridos pequenos (como na referência).

Nenhum arquivo adicional necessário — apenas reescrever o componente `ComparisonTable.tsx`.

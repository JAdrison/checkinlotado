

## Plano: Redesign da seção "Trilha de Aprendizado" com timeline vertical

### O que muda

Substituir o layout atual (gráfico SVG horizontal + cards horizontais com scroll GSAP) por uma **timeline vertical zigzag** inspirada nas referências enviadas. Cada fase aparece com animação ao scroll.

### Novo layout

```text
         ┌─────────────────┐
         │  Fase 01         │  ← direita
         │  icon + título   │
         │  descrição        │
    ─────┤  meta + tempo    │
    │    └─────────────────┘
    │
    ┌─────────────────┐
    │  Fase 02         │         ← esquerda
    │  icon + título   │
    │  descrição        │
    │  meta + tempo    ├─────
    └─────────────────┘    │
                           │
              ... alternando ...
```

- Linha vertical central conectando os cards
- Número circular (1, 2, 3...) no ponto de conexão sobre a linha
- Cards alternam esquerda/direita (desktop); empilham à direita no mobile
- Cada card tem um ícone temático (sparkles, calendar, megaphone, message-circle, repeat)
- Fase 05 (highlight) com borda dourada

### Animação

- Cada card usa `IntersectionObserver` para aplicar classe `.in` ao entrar na viewport
- Cards começam com `opacity: 0` e `translateY(30px)`, transicionam suavemente
- Delay escalonado baseado no índice
- A linha vertical "cresce" conforme o scroll (CSS `scaleY` animado)

### Arquivos

| Arquivo | Ação |
|---|---|
| `PhaseCards.tsx` | Reescrever completamente: remover GSAP horizontal, criar timeline vertical com alternância e IntersectionObserver |
| `LearningChart.tsx` | Remover (substituído pela timeline) |
| `ModulesSection.tsx` | Simplificar: remover import do LearningChart, renderizar apenas header + PhaseCards |
| `index.css` | Adicionar estilos da timeline (linha, animações, responsivo) e remover estilos antigos do chart |

### Design dos cards

- Background branco com borda sutil `rgba(200,148,58,0.15)`
- Ícone em círculo com fundo `rgba(200,148,58,0.08)` e cor ochre
- Título em negrito `text-night`
- Descrição em `text-night/85`
- Rodapé com meta e tempo estimado
- Hover com leve elevação (`translateY(-2px)` + shadow)
- Fase 05 com `border-color: ochre` e fundo dourado sutil

### Responsivo

- Desktop (md+): cards alternam esquerda/direita, linha central visível
- Mobile: linha à esquerda, todos os cards à direita, layout compacto


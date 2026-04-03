

## Redesign da Seção de 3 Passos — Visual Premium e Interligado

### Problema Atual
A seção está genérica: cards brancos soltos sobre fundo bege, sem imagens, sem conexão visual entre os passos. Parece um wireframe, não uma landing page premium.

### Nova Abordagem Visual

A seção terá fundo escuro (`#1A1208`) com uma imagem de hospedagem de luxo em background (com overlay escuro), criando contraste dramático com o restante da página. Os 3 passos serão conectados por uma **linha horizontal contínua** que atravessa os círculos numerados (no desktop) ou vertical (no mobile), dando a ideia de jornada/progresso.

```text
┌──────────────────────────────────────────────────────────┐
│  Background: imagem de hospedagem + overlay escuro       │
│                                                          │
│     90 dias para a lapidação e escala                    │
│                                                          │
│   ●──────────────────●──────────────────●                │
│  MÊS 01            MÊS 02            MÊS 03             │
│  ┌──────┐          ┌──────┐          ┌──────┐            │
│  │glass │          │glass │          │glass │            │
│  │card  │          │card  │          │card  │            │
│  └──────┘          └──────┘          └──────┘            │
└──────────────────────────────────────────────────────────┘
```

### Detalhes do Design

1. **Background**: Fundo `#0F0C06` com imagem de hospedagem em `opacity: 0.15`, blur sutil, e gradient overlay — similar ao tom premium do Hero
2. **Linha de conexão**: Uma linha horizontal dourada (`ochre`) com `opacity: 0.3` passando pelo centro dos 3 círculos, criando a sensação de timeline/jornada
3. **Círculos**: Maiores, com borda dourada com glow sutil, fundo com gradiente escuro
4. **Cards**: Estilo glassmorphism escuro — `rgba(255,255,255,0.05)` com `backdrop-blur`, borda dourada sutil, texto claro
5. **Tipografia**: Título em cream/branco, subtítulo ochre, descrições em cream com opacidade
6. **Mobile**: Linha vertical conectando os círculos, cards em coluna

### Arquivos Modificados

- **`src/components/landing/StepsSection.tsx`** — Reescrita completa do componente com:
  - Background escuro com imagem decorativa (usarei uma URL de imagem genérica de hospedagem de luxo via Unsplash)
  - Linha de conexão horizontal/vertical entre os passos
  - Cards com glassmorphism escuro
  - Animação de reveal nos cards


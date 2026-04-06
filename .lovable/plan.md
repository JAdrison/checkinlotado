

## Plano: Melhorar Performance Mobile para 80-90%

### Diagnóstico (dados do Lighthouse atual)

Os maiores gargalos identificados:

1. **LCP 6.1s** — O elemento LCP é a imagem `casa-praia-zcfQlaG-.webp` no CardStack. Tem `loading="lazy"` implícito e nenhum `fetchpriority`. Resource load delay de **2968ms** porque o browser não descobre a imagem cedo o suficiente.
2. **Speed Index 6.6s** — consequência do LCP lento e JS pesado.
3. **Main-thread work 2.4s** — JS bundle principal (153KB) com 55% não utilizado na primeira carga.
4. **Redirect 780ms** — lovable.app → checkinlotado.com.br (fora do nosso controle).
5. **Imagens sem dimensões** — 14 prints no ResultsSection sem `width`/`height`, causando layout shifts.
6. **Preconnects não utilizados** — fonts.googleapis.com e fonts.gstatic.com (fonts já carregam via preload).
7. **Unused CSS 71%** — o CSS bundle tem muito código não usado no carregamento inicial.

### Alterações (priorizadas por impacto)

#### 1. Corrigir LCP — preload da imagem e remover lazy (impacto: ~2-3s)
- **index.html**: Adicionar `<link rel="preload" as="image" href="/assets/casa-praia-*.webp">` (usando o path do build). Como não sabemos o hash, usar `modulepreload` não funciona. Alternativa: injetar preload via Vite plugin ou preload diretamente no componente.
- **card-stack.tsx**: Adicionar `fetchPriority="high"` e `loading="eager"` explícito na imagem do card ativo (index 0). Cards não ativos recebem `loading="lazy"`.
- **ForWhom.tsx**: Marcar a primeira imagem (`imgPraia`, que é `casa-praia.webp`) como eager load.

#### 2. Remover preconnects não utilizados (impacto: elimina warnings)
- **index.html**: Remover `<link rel="preconnect" href="https://fonts.googleapis.com">` e `<link rel="preconnect" href="https://fonts.gstatic.com">` se existirem (o preload já cuida disso).

#### 3. Adicionar width/height às imagens do ResultsSection (impacto: CLS)
- **ResultsSection.tsx**: Adicionar `width={378}` e `height={555}` a cada `<img>` no componente Card.

#### 4. Lazy-load ForWhom (CardStack) — separar do bundle inicial
- O ForWhom já é `lazy()` no Index.tsx, mas o CardStack com framer-motion é pesado. Verificar se o chunk está separado corretamente.

#### 5. Defer Meta Pixel ainda mais (impacto: ~100ms main-thread)
- **index.html**: Aumentar timeout do Meta Pixel de 2000ms para 4000ms, ou usar `requestIdleCallback`.

#### 6. Reduzir CSS não utilizado
- **src/index.css**: O CSS tem ~71% não utilizado. Mover estilos que só se aplicam a seções abaixo do fold (timeline, comparison, accordion, ticker detalhado) para arquivos CSS separados importados nos componentes lazy, ou usar Tailwind `@apply` com purge mais eficiente.

#### 7. Otimizar StepsSection backdrop-filter no mobile
- **StepsSection.tsx**: Remover `backdropFilter: "blur(16px)"` e `"blur(20px)"` nos cards mobile/desktop — já foi feito em outros componentes mas aqui permanece.

### Arquivos a editar
- `index.html` — remover preconnects inutilizados, aumentar defer do pixel
- `src/components/ui/card-stack.tsx` — fetchPriority/loading condicional na imagem ativa
- `src/components/landing/ResultsSection.tsx` — width/height nas imagens
- `src/components/landing/StepsSection.tsx` — remover backdrop-blur
- `src/index.css` — extrair CSS abaixo-do-fold para reduzir CSS crítico

### Impacto esperado
- LCP: 6.1s → ~3-4s (preload + eager + fetchpriority)
- Speed Index: 6.6s → ~4-5s
- CLS melhorado (imagens dimensionadas)
- Performance score: 67 → estimado 75-85


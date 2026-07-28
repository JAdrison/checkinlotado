## Problema identificado

A seção `ProblemSection` está com layout quebrado: aparece a headline, depois um grande espaço vazio, e só muito abaixo os 8 cards aparecem.

**Causa raiz** (em `src/components/landing/ProblemSection.tsx`):

- A `<section>` tem `height: 300vh` (200vh no mobile) com um filho `sticky top-0 h-screen overflow-hidden`.
- O conteúdo interno (label + headline + parágrafo + vídeo + grid de 8 cards + frase final) **não cabe em 100vh**, então o `overflow-hidden` corta e cria a sensação de "vazio".
- O vídeo `/videos/scroll-animation.mp4` (~8 MB) roda um efeito scroll‑scrub que hoje só entrega um retângulo escuro no meio da seção — não agrega valor, atrapalha a leitura e ocupa metade da altura útil.
- Efeito colateral: 300vh de altura força o usuário a rolar 3 telas praticamente vazias entre a Hero e a próxima seção.

## O que fazer

Reescrever apenas o wrapper e remover o mecanismo scroll‑scrub, preservando 100% do conteúdo textual, dos 8 cards e da frase de fechamento.

1. Remover `useRef`, `useEffect`, `useIsMobile`, o `<video>` e o listener de scroll.
2. Trocar o wrapper por uma `<section>` padrão com padding vertical generoso (`py-20 sm:py-28`), sem `height` fixa, sem `sticky`, sem `overflow-hidden`.
3. Manter a mesma cor de fundo (`#080706`), o mesmo `max-w-[900px]`, a mesma tipografia editorial dourada nos destaques e a mesma classe `.reveal` para a animação de entrada.
4. Manter exatamente:
   - label "O PROBLEMA NEM SEMPRE É FALTA DE PROCURA"
   - headline com "mais divulgação" em dourado
   - parágrafo introdutório
   - grid 2×4 (mobile 2 col / desktop 4 col) com os 8 cards existentes, textos idênticos
   - frase final com destaque dourado em "estrutura para planejar, atrair, atender e converter"

## Fora de escopo

- Não alterar Hero, BenefitsStrip nem qualquer outra seção.
- Não mexer em textos, ordem, cores globais, tokens do Tailwind, tracking, links ou checkout.
- Não remover o arquivo `public/videos/scroll-animation.mp4` (pode ser reutilizado depois).

## Detalhe técnico

Arquivo único afetado: `src/components/landing/ProblemSection.tsx` — reescrita completa (componente pequeno). Nenhuma migration, nenhuma dependência nova, nenhuma mudança em `Index.tsx`.

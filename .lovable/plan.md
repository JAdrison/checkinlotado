## Objetivo
Adicionar uma nova seção de case em **vídeo** (arquivo `IMG_5300_1.MOV`, vertical 1080x1920, ~46s) posicionada **antes** de `ResultsSection` e `Testimonials` no `src/pages/Index.tsx`.

## Passos

1. **Preparar o vídeo para web**
   - O arquivo original é HEVC/MOV (120 MB) — não toca na maioria dos navegadores.
   - Transcodificar com `ffmpeg` para MP4 H.264 + AAC, otimizado (`-movflags +faststart`, CRF 26, ~1.5-2 Mbps): resultado esperado ~10-15 MB.
   - Gerar um poster JPG (frame ~1s) para o `poster` do `<video>`.
   - Subir ambos ao CDN via `lovable-assets create`, gravando pointers `.asset.json` em `src/assets/case-video/`.

2. **Criar `src/components/landing/VideoCase.tsx`**
   - Fundo `#050505` para casar com a estética Boutique Sunset.
   - Layout em 2 colunas (empilhado no mobile):
     - **Esquerda**: player em 9:16 com moldura fina em ochre `rgba(230,179,106,0.24)`, cantos `rounded-sm`, poster carregado, `<video controls playsInline preload="metadata">`. Tap-to-play (sem autoplay para respeitar a orientação vertical e a bateria).
     - **Direita**: kicker "Case em vídeo", headline em Cormorant Garamond (ex.: *"O método aplicado na prática"*), 2 parágrafos curtos em Inter e um selo "Depoimento real" em ochre.
   - Reveal on scroll (mesma classe `.reveal` já usada).

3. **Encaixar no `src/pages/Index.tsx`**
   - Importar `VideoCase` como `lazy` (padrão do arquivo).
   - Renderizar **antes** de `<ResultsSection />` (linha 75), mantendo o comentário do bloco "11 — Estudos de caso".

## Fora do escopo
- Não alterar `ResultsSection` nem `Testimonials`.
- Sem métricas/nome de proprietário no card (placeholders neutros); se você quiser texto específico — nome, propriedade, headline, números — mande e eu edito.

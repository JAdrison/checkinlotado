

## Plano: Melhorar Performance Mobile (PageSpeed)

### Diagnóstico — principais gargalos

1. **Google Fonts via `@import` no CSS** — bloqueia renderização. Deve ir para `<link>` no HTML com `display=swap`
2. **`backdrop-blur` no Navbar e StickyBar** — re-amostra pixels a cada frame no mobile. Substituir por cor sólida opaca
3. **Vídeo de fundo no Testimonials** — autoplay de MP4 no mobile consome banda e GPU
4. **ShuffleGrid: 16 imagens + animação a cada 3s** — carrega 16 JPGs e roda framer-motion mesmo fora da tela
5. **Animações CSS contínuas** — `pulseGlow`, `shimmer`, `btnShine`, `floatY` rodam infinitamente em vários elementos
6. **Imagens do Hero (`hero-bg.webp`) sem fetchpriority** — LCP lento

---

### Alterações

#### 1. Mover Google Fonts para `<link>` no `index.html`
- Remover `@import url(...)` do `src/index.css` (linha 5)
- Adicionar `<link rel="preload" as="style" href="...fonts...&display=swap">` no `index.html` com `media="print" onload="this.media='all'"` para carregamento não-bloqueante

#### 2. Substituir `backdrop-blur` por cor sólida
- **Navbar.tsx**: trocar `bg-[rgba(242,237,224,0.96)] backdrop-blur-[20px]` por `bg-[#F2EDE0]`
- **StickyBar** (`index.css` linha 506): remover `backdrop-filter: blur(20px)` e usar `background: #F2EDE0`
- **Testimonials.tsx** (linhas 73, 88): remover `backdropFilter: "blur(12px)"` dos cards de métricas e depoimento, usar `background: rgba(30,25,15,0.75)` sólido

#### 3. Desabilitar vídeo de fundo no mobile (Testimonials)
- Envolver o `<video>` em condição: no mobile, renderizar apenas uma imagem estática de fallback ou cor sólida escura em vez do vídeo autoplay

#### 4. Otimizar ShuffleGrid — pausar quando fora da tela
- Usar `IntersectionObserver` para só rodar o `setTimeout` de shuffle quando o grid está visível
- Adicionar `loading="lazy"` via `<img>` em vez de `backgroundImage` (permite lazy loading nativo)

#### 5. Reduzir animações contínuas no mobile
- No `index.css`, dentro de `@media (max-width: 640px)`:
  - Remover `animation: pulseGlow` dos `.btn-cta`
  - Remover `animation: btnShine` (`.btn-cta::after`)
  - Reduzir `animation: shimmer` para `prefers-reduced-motion` aware

#### 6. Adicionar `fetchpriority="high"` na imagem do Hero
- No `Hero.tsx`, adicionar `fetchpriority="high"` e `loading="eager"` na imagem `hero-bg.webp` para acelerar o LCP

#### 7. Preconnect ao YouTube
- Adicionar `<link rel="preconnect" href="https://www.youtube.com">` no `index.html` para quando o usuário clicar no vídeo

---

### Arquivos a editar
- `index.html` — fonts preload, preconnect YouTube
- `src/index.css` — remover @import fonts, reduzir animações mobile, remover backdrop-blur do sticky bar
- `src/components/landing/Navbar.tsx` — remover backdrop-blur
- `src/components/landing/Testimonials.tsx` — remover backdrop-blur, condicionar vídeo no mobile
- `src/components/ui/shuffle-grid.tsx` — IntersectionObserver + img lazy
- `src/components/landing/Hero.tsx` — fetchpriority na imagem

### Impacto esperado
- Eliminação de render-blocking (fonts)
- Redução de GPU usage (backdrop-blur, animações)
- Menos banda no mobile (vídeo condicional)
- LCP mais rápido (fetchpriority)
- Menos JS main-thread (shuffle pausado)




## Plano: Melhorar Performance Mobile (Lighthouse 57 → 80+)

### Contexto
O Lighthouse mobile aponta score 57 com FCP 4.5s, LCP 8.1s, e Speed Index 6.6s. Os principais gargalos são: fontes render-blocking, imagens pesadas sem otimização, JS não utilizado, e CLS causado por web fonts.

---

### 1. Eliminar Google Fonts render-blocking

**Problema**: A fonte é carregada via `@import url(...)` no CSS (render-blocking) E via `<link>` no HTML. Lighthouse reporta ~1200ms desperdiçados.

**Solução**:
- Remover o `@import url(...)` do `src/index.css` (linha 5)
- No `index.html`, trocar o `<link>` do Google Fonts para carregar de forma assíncrona usando o pattern `media="print" onload="this.media='all'"` + fallback `<noscript>`
- Adicionar `font-display: swap` via parâmetro `&display=swap` (já existe, mas o carregamento assíncrono é o que importa)

**Arquivos**: `index.html`, `src/index.css`

---

### 2. Preconnect para origens críticas

**Problema**: Fontes e Facebook SDK demoram a conectar.

**Solução**: Adicionar `<link rel="preconnect">` para `fonts.googleapis.com` e `fonts.gstatic.com` (já existe no HTML, mas garantir que `crossorigin` está correto). Adicionar preconnect para `connect.facebook.net`.

**Arquivo**: `index.html`

---

### 3. Corrigir LCP — imagem do CardStack sem fetchpriority

**Problema**: O LCP é uma imagem do CardStack (ex: `quarto-privativo`) que carrega com `loading="lazy"`. Lighthouse diz: "fetchpriority=high should be applied" e "lazy load not applied" (deveria ser eager).

**Solução**: No `card-stack.tsx`, a imagem do card ativo (index 0 no initial render) deve ter `loading="eager"` e `fetchpriority="high"`. Passar o estado `active` para `DefaultFanCard` e condicionar.

**Arquivo**: `src/components/ui/card-stack.tsx`

---

### 4. Reduzir CLS de web fonts (0.121)

**Problema**: Quando as fontes carregam, o layout do hero (video-box) se desloca.

**Solução**: Adicionar `font-display: swap` nas declarações de `@font-face` e, mais importante, definir `size-adjust` ou `ascent-override` nas fontes de fallback para minimizar o shift. Alternativa mais simples: reservar espaço fixo para o headline com `min-height` no container do hero text.

**Arquivo**: `src/components/landing/Hero.tsx`, `src/index.css`

---

### 5. Adicionar width/height nas imagens do ResultsSection

**Problema**: 14 imagens de prints sem `width`/`height` explícitos causam layout shifts.

**Solução**: Adicionar `width={378}` e `height={555}` (ou proporção real) nas tags `<img>` do componente `Card` em `ResultsSection.tsx`.

**Arquivo**: `src/components/landing/ResultsSection.tsx`

---

### 6. Defer do Meta Pixel script

**Problema**: O fbevents.js consome ~33KB de JS não utilizado e bloqueia parsing.

**Solução**: Mover o script do Pixel para o final do `<body>` (após o `<div id="root">`) e adicionar `defer` no carregamento. Isso não afeta o tracking pois os eventos são enfileirados.

**Arquivo**: `index.html`

---

### 7. Remover pixel duplicado

**Problema**: Dois pixels inicializados (`945375381767666` e `1666693307683285`) geram eventos duplicados e JS extra.

**Solução**: Remover o pixel `945375381767666` do `index.html`, mantendo apenas o `1666693307683285` que está configurado na CAPI. (Precisa de confirmação do usuário sobre qual manter.)

**Arquivo**: `index.html`

---

### Resumo de impacto esperado

| Métrica | Antes | Meta |
|---------|-------|------|
| FCP | 4.5s | ~2.5s |
| LCP | 8.1s | ~4s |
| CLS | 0.121 | <0.05 |
| Speed Index | 6.6s | ~4s |
| Score | 57 | 75-85 |

### Arquivos a editar
- `index.html` — fonts async, preconnect, pixel defer/cleanup
- `src/index.css` — remover @import de fonts
- `src/components/ui/card-stack.tsx` — fetchpriority na imagem LCP
- `src/components/landing/ResultsSection.tsx` — width/height nas imagens
- `src/components/landing/Hero.tsx` — min-height para reduzir CLS


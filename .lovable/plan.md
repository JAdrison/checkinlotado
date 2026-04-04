

## Plano de Otimização de Performance

### Resumo do problema

A Lighthouse reporta **Performance 67** (desktop). Os maiores gargalos:

- **LCP 3.9s** — o H1 do Hero demora 3.5s para renderizar (element render delay)
- **Speed Index 3.4s** — conteúdo aparece lento
- **TTI 4.3s** — muita coisa carregando ao mesmo tempo
- **~16MB de imagens** sem cache, sem formato moderno, sem dimensões corretas
- **YouTube iframe** carrega ~1.2MB de JS imediatamente (player embeds)
- **Redirect 230ms** (lovable.app → custom domain)

### O que será feito (sem perder conteúdo/qualidade visual)

---

#### 1. Converter PNGs pesados para WebP (maior impacto: ~8MB economia)

Criar um script de build que converte as imagens para WebP com qualidade alta (85-90%). Os arquivos mais pesados:

| Imagem | Atual | Ação |
|---|---|---|
| `forwhom/casa-praia.png` (2MB) | 1200x900 PNG | WebP, redimensionar para 800x600 |
| `forwhom/hotel.png` (1.3MB) | 1200x800 PNG | WebP, redimensionar para 800x533 |
| `logos/iparai.png` (1.2MB) | 1264x848 PNG | WebP, redimensionar para 200x134 |
| `forwhom/apartamento.png` (920KB) | 1000x667 PNG | WebP, redimensionar para 800x533 |
| `forwhom/cabana.png` (980KB) | 1000x563 PNG | WebP, redimensionar para 800x450 |
| `case-study/guilherme-couto.png` (312KB) | 640x640 PNG | WebP, redimensionar para 88x88 |
| `logos/encanto-das-aguas.png` (217KB) | 1920x1759 PNG | WebP, redimensionar para 200x183 |
| `logos/village-choca.png` (157KB) | 1592x1063 PNG | WebP, redimensionar para 200x134 |
| `prints/print-10 a 14` (PNGs ~500KB cada) | 1258x850 | WebP, redimensionar para 500x338 |
| Todos os outros logos | 225x225 | WebP, redimensionar para 128x128 |

Todas as imagens do `forwhom/` CardStack são exibidas no máximo em ~480x320 (desktop). Os logos ficam 64px de altura. Os prints ficam ~230px de largura.

---

#### 2. Lazy-load do YouTube iframe (impacto alto no LCP/TTI)

Substituir o `<iframe>` do YouTube no Hero por uma **thumbnail estática com botão play**. O iframe só carrega ao clicar. Isso elimina ~1.2MB de JS do YouTube no carregamento inicial.

Implementação:
- Usar a thumbnail do YouTube (`https://img.youtube.com/vi/m_EClZVmHXY/maxresdefault.jpg`)
- Mostrar botão de play por cima
- Ao clicar, trocar pela iframe real

---

#### 3. Lazy-load de seções abaixo do fold (React.lazy + Suspense)

Carregar com `React.lazy()` as seções que ficam abaixo do fold:
- `ModulesSection`, `StepsSection`, `ComparisonTable`, `ResultsSection`, `GallerySection`, `OTAComparisonSection`, `PricingSection`, `AccordionSection`, `FinalCTA`, `Footer`

Isso reduz o bundle JS inicial e adia o parsing/execução.

---

#### 4. Adicionar `width` e `height` em todas as imagens sem dimensões

O Lighthouse detectou ~30 imagens sem `width`/`height` explícitos (logos do ticker, prints, whatsapp screenshot, reforma tributária). Adicionar atributos para evitar CLS (layout shifts).

---

#### 5. Lazy-load do vídeo de background (Testimonials)

O `<video src="/videos/iparai-bg.mp4">` carrega imediatamente (~1MB). Usar `preload="none"` e carregar via IntersectionObserver quando a seção entrar no viewport.

---

#### 6. Preconnect para domínios críticos

Adicionar no `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

Remover o preconnect para `i.ytimg.com` que está sendo reportado como não utilizado (será usado só após click com o lazy-load do YouTube).

---

#### 7. Adicionar `loading="lazy"` nas imagens do CardStack e logos

As imagens do `card-stack.tsx` (ForWhom) e logos do ticker não têm `loading="lazy"`. Adicionar em todas exceto a primeira visível.

---

### Detalhes técnicos

- **Conversão de imagens**: Script Python usando Pillow para converter PNG→WebP e redimensionar. Os arquivos originais serão substituídos por versões WebP otimizadas.
- **YouTube facade**: Componente `YouTubeFacade` que renderiza thumbnail + play button, e troca pelo iframe ao clicar.
- **Code splitting**: `React.lazy(() => import(...))` com `<Suspense fallback={null}>` para seções below-the-fold.
- **Nenhum conteúdo removido** — todas as imagens mantêm qualidade visual (WebP 85-90% é visualmente idêntico ao PNG).

### Impacto esperado

- LCP: 3.9s → ~1.5s (eliminando YouTube JS + otimizando imagens)
- Speed Index: 3.4s → ~1.8s
- Performance score: 67 → 85-95


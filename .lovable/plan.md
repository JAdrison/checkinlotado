
# Redesign Premium — Check-in Lotado

Redesign puramente visual. Nenhum texto, seção, ordem, vídeo, link, checkout, formulário, evento (Meta Pixel/UTM), módulo ou depoimento será alterado. Toda mudança fica em CSS/tokens/markup de apresentação.

## Princípios

- Base preto/grafite + dourado discreto + branco suave.
- Fotografia cinematográfica de hotelaria como protagonista.
- Tipografia editorial serifada (títulos) + sans moderna (corpo).
- Animações contidas: fade-up, opacity, leve translateY. Remover shimmer contínuo, pulseGlow e btnShine.
- Mobile-first, sem rolagem horizontal, respeito a `prefers-reduced-motion`.

## 1. Design tokens (base do redesign)

Reescrever `src/index.css` `:root` e utilitários. Mapear tokens semânticos existentes (`--background`, `--foreground`, `--primary`, `--card`, `--border`, `--ring`, etc.) para a nova paleta escura, e adicionar tokens brutos:

```
--background: #080706
--background-secondary: #11100E
--surface: #171512
--surface-soft: #1D1A16
--gold: #C9973E
--gold-light: #E4BC6A
--gold-muted: #9F7734
--text-primary: #F6F2E9
--text-secondary: #C8C1B5
--text-muted: #928B80
--border: rgba(201,151,62,0.25)
--overlay-hero: linear-gradient(90deg, rgba(5,5,4,0.96) 0%, rgba(5,5,4,0.82) 45%, rgba(5,5,4,0.25) 100%)
```

Atualizar `tailwind.config.ts` para expor `bg-surface`, `bg-surface-soft`, `text-gold`, `text-gold-light`, `border-gold/25` etc., mantendo os aliases antigos (`ochre`, `cream`, `night`) apontando para os novos valores para não quebrar componentes ainda não migrados.

Tipografia:
- Headings: Cormorant Garamond (fallback Playfair já carregado).
- Body/UI: Inter (fallback DM Sans já carregado).
- Carregar via `<link rel="preconnect">` + `<link>` em `index.html` mantendo padrão async atual.

## 2. Globais e utilitários

Em `index.css`:
- `body` → `background: var(--background); color: var(--text-primary)`.
- Remover animações `shimmer`, `pulseGlow`, `btnShine` do `.btn-cta` (manter classes e nomes para não quebrar chamadas).
- Novo `.btn-cta`: fundo `--gold`, texto preto, min-height 54px, radius 10px, hover: `translateY(-2px)` + `--gold-light`.
- `.btn-cta-outline` (novo variante): transparente, borda dourada, texto claro.
- `.shimmer-text` → gradiente estático dourado (sem animação), preservando destaque da headline.
- `.landing-card`, `.timeline-card`, `.price-box`, `.acc-item`, `.cmp-row`, `.ticker-wrap`, `.g-circle`, `.video-box`, `.play-btn`, `#sticky-bar` reescritos com paleta escura, bordas `--border`, sombras suaves.
- `.reveal` mantido. Adicionar `@media (prefers-reduced-motion: reduce)` desativando animações decorativas.

## 3. Redesign por seção (sem alterar conteúdo)

Cada item lista apenas mudanças de classes/estrutura visual dentro do componente existente:

- **Navbar** (`Navbar.tsx`): fundo transparente → preto com blur ao rolar, logo clara, CTA pequeno dourado.
- **Hero** (`Hero.tsx`): trocar `hero-bg` por overlay escuro + gradiente `--overlay-hero`. Texto branco, palavra destacada em `--gold`. Moldura do vídeo grafite com borda `1px` dourada translúcida, botão play dourado sem pulsar. Layout desktop 2 colunas opcional (headline+bullets à esquerda, VSL à direita) via `lg:grid-cols-2`; mobile mantém ordem atual (logo/headline/subtítulo/CTA/vídeo/bullets — reordenar CTA para antes do vídeo no mobile via `order-*`).
- **Ticker** (`Ticker.tsx`): faixa preta com texto dourado fino (ou dourado escuro com texto creme), sem CTA de spam.
- **Stats** (`Stats.tsx`): fundo preto, números grandes em `--gold` serif, labels brancas, divisores verticais `1px --border`, sem caixas.
- **Testimonials** (`Testimonials.tsx`): cartão escuro, foto real mantida, aspas em serif, números destaque dourado, borda `--border`. Prints existentes envolvidos em mockup simples (frame grafite arredondado).
- **ForWhom** (`ForWhom.tsx`): fundo com foto de hospedagem + overlay preto, cards em linha com ícones dourados lineares.
- **ModulesSection** (`ModulesSection.tsx`): layout editorial alternado imagem/texto (`even:flex-row-reverse`), número grande dourado semi-transparente, chips de materiais com borda dourada.
- **StepsSection / Timeline**: linha `--gold` fina, nós menores, cards grafite, números dourados.
- **ResultsSection**: fundo com imagem premium + overlay, números dourados grandes, texto branco.
- **ComparisonTable**: duas colunas — "antes" grafite opaco, "depois" borda dourada, ícones simples.
- **GallerySection**: grid editorial com proporções variadas, bordas suaves, zoom leve no hover, mantendo lazy loading.
- **OTAComparisonSection**: fundo grafite, ícones dourados, layout racional.
- **PricingSection**: caixa central `--surface`, borda dourada, título serif, preço grande, checks dourados, botão dourado. Remover selos/gradientes exagerados. Garantia como bloco simples abaixo (ícone escudo + texto).
- **AccordionSection (FAQ)**: itens com linhas divisórias `--border`, pergunta branca, ícone dourado (+/−), resposta em `--text-secondary`. Preservar o fix atual de `.reveal` no container pai.
- **FinalCTA**: imagem de quarto/vista + overlay preto, headline serif branca com palavra dourada, CTA dourado.
- **Footer**: preto sólido, texto pequeno organizado.
- **StickyBar**: preto com blur, texto branco, preço dourado, botão compacto, altura controlada.

## 4. Preservação estrita

- Nenhum `bullets`, headline, preço, link Kiwify, evento `trackEvent`, `scrollToSection("comprar")`, formulário/dialog, VSL YouTube ID, ou ordem de seções em `Index.tsx` será tocado.
- Sem novas dependências. Sem alterar lazy imports, Meta Pixel, UTMs, Supabase, Apps Script.
- IDs de âncora (`#hero`, `#comprar`, etc.) inalterados.

## 5. Performance e a11y

- Manter WebP e `fetchPriority="high"` no hero.
- Adicionar `loading="lazy"` + `width/height` em imagens novas usadas como background decorativo (via `<img>` posicionado absoluto quando possível).
- `prefers-reduced-motion`: desativar reveal/zoom.
- Contraste AA garantido em texto sobre imagens (overlay ≥ 0.7 alpha).

## 6. Ordem de execução

1. Tokens + Tailwind (base para tudo).
2. Utilitários globais em `index.css` (botões, cards, ticker, timeline, sticky, video, accordion, price-box).
3. Hero + Navbar + StickyBar (primeira dobra).
4. Stats, Testimonials, ForWhom.
5. Modules, Steps, Results, Comparison, Gallery, OTA.
6. Pricing + Guarantee + FAQ + FinalCTA + Footer.
7. Passe de QA responsivo (360/375/390/412/430, tablet, desktop) + verificação de CTAs, VSL, checkout, Pixel.

## Detalhes técnicos

- Não editar `src/integrations/supabase/*`, `.env`, `supabase/config.toml`.
- Tokens antigos (`--cream`, `--ochre`, `night`, `deep`) permanecem definidos apontando para novos valores para migração incremental sem regressões.
- Fontes novas carregadas em `index.html` com `rel="preload" as="style"` + swap; fallback para pilha atual.
- Nenhum novo pacote npm.

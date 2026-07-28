## Objetivo

Aplicar a estética **Boutique Sunset** (âmbar quente sobre preto profundo) na página inteira e trocar o fundo do Hero pela imagem escolhida (homem no laptop ao pôr do sol com dashboards).

## O que muda

### 1. Nova imagem de fundo do Hero
- Publicar `user-uploads://08779a37-5269-49e5-9b29-902d21e395e0-2.png` como asset via `lovable-assets` → `src/assets/hero-boutique-sunset.jpg.asset.json` (sem copiar o binário para o repo).
- Usar como imagem de fundo do `<Hero />` com:
  - `background-size: cover; background-position: center right;`
  - camada de gradiente sobreposta preto→transparente da esquerda para a direita (para garantir contraste da headline serifada em cima do dashboard iluminado), e um leve fade preto no rodapé para o VSL destacar.
  - `loading="eager"` + `<link rel="preload">` no `index.html` para a imagem entrar rápido na primeira dobra.

### 2. Nova paleta global (Boutique Sunset)
Substituir os valores atuais dos tokens em `src/index.css` (mantendo os nomes que os componentes já usam — `--night`, `--ochre`, `--ochre-light`, `--ochre-pale`):

- `--background: #050505` (preto profundo)
- `--background-secondary: #0B0908`
- `--surface: #14100C`
- `--surface-2: #1C1610`
- `--night: #F3E6CE` (creme quente que os componentes já leem como "texto")
- `--ochre: #E6B36A` (âmbar quente do sunset)
- `--ochre-light: #F1C989`
- `--ochre-pale: #F8DDB0`
- `--ochre-deep: #B8843A` (para hover / bordas)
- Bordas douradas: `rgba(230,179,106,0.18)` → substituir os `rgba(201,151,62,...)` que aparecem hoje nos cards de várias seções (busca global só em `src/components/landing/`, sem trocar hex fora da landing).

### 3. Tipografia editorial
- Adicionar **Cormorant Garamond** (400/500/600/700 + italic) no `index.html` via `<link>` do Google Fonts, junto com o Inter que já existe.
- Em `tailwind.config.ts`: `fontFamily.heading = ['"Cormorant Garamond"', 'serif']` (o `font-heading` já é usado nos títulos, então propaga automaticamente).
- Manter Inter/sans para corpo, labels, botões e chrome.

### 4. Ajustes finos de acabamento boutique
- Labels (`.label-text`): tracking `0.28em`, uppercase, cor `--ochre` a 90%.
- Botão primário do Hero: gradiente `--ochre` → `--ochre-light`, texto preto profundo, sombra dourada difusa (`0 20px 60px -20px rgba(230,179,106,0.45)`).
- Cards (Problem, ForWhom, WhatYouReceive, Modules, Bonus, Guarantee): fundo `--surface` a 85%, borda dourada 14–18% opacity, cantos `rounded-sm`.
- Divisores entre seções: linha 1px dourada 10% opacity + halo radial sutil âmbar no topo/base para dar sensação de "iluminação de resort".

## Fora de escopo (não muda)

- VSL do Hero: vídeo, thumb, lógica de player, headline/subtítulo/bullets/CTA, Meta Pixel, UTMs, eventos, links do checkout.
- Ordem das seções, textos de qualquer seção, preço, módulos, bônus, depoimentos, garantia, FAQ.
- Nenhuma nova seção, nenhuma remoção, nenhuma mudança de comportamento/animação de scroll.
- Migrations, backend, tracking.

## Arquivos afetados

- `src/index.css` — tokens da paleta
- `tailwind.config.ts` — fontFamily.heading + eventuais valores dos tokens espelhados
- `index.html` — `<link>` Cormorant Garamond + preload da imagem do Hero
- `src/components/landing/Hero.tsx` — nova camada de background + overlay
- `src/assets/hero-boutique-sunset.jpg.asset.json` — novo pointer
- Busca-substituição de `rgba(201,151,62,` → `rgba(230,179,106,` em `src/components/landing/*` (só cor da borda dourada; nada de estrutura)

## Detalhe técnico

Como todos os componentes atuais já referenciam `text-night`, `text-ochre`, `bg-night`, `border-ochre/40` (tokens semânticos), trocar os valores em `index.css` + `tailwind.config.ts` re-tinge a página inteira sem precisar editar cada componente — exceto pelo Hero (nova imagem) e pelas bordas em rgba literal.

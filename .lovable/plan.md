

# Plano: Melhorar contraste visual entre as seções

## Problema
De **ComparisonTable** até **FinalCTA**, são 7 seções consecutivas com fundo creme quase idêntico (#EAE3CF, #F2EDE0, cream-dark). Isso cria monotonia visual e dificulta a separação mental entre blocos.

## Estratégia
Alternar entre 3 tonalidades distintas — **escuro (night)**, **branco/claro**, e **creme** — criando ritmo visual sem fugir da paleta existente.

## Nova sequência de backgrounds

```text
Seção              Antes              Depois
─────────────────────────────────────────────────────
ComparisonTable    cream              #FFFFFF (branco)
ResultsSection     #EAE3CF            #EAE3CF (mantém — creme)
GallerySection     #EAE3CF            #1A1208 (night/escuro) + textos claros
OTAComparison      cream-dark         #FFFFFF (branco)
PricingSection     #EAE3CF            #1A1208 (night/escuro) + textos claros
AccordionSection   #F2EDE0            #F2EDE0 (mantém — creme claro)
FinalCTA           #EAE3CF            #1A1208 (night/escuro) + textos claros
```

## Detalhes por seção

### 1. ComparisonTable → Fundo branco (#FFFFFF)
- Mudar background de `hsl(var(--cream))` para `#FFFFFF`
- Cards internos já são brancos, então adicionar sombra sutil ou borda leve para contraste

### 2. GallerySection → Fundo escuro (#1A1208)
- Background escuro com textos em cream/cream-mid
- Botão CTA mantém estilo ochre
- Cria um bloco de ruptura visual forte entre Results e OTA

### 3. OTAComparisonSection → Fundo branco (#FFFFFF)
- Trocar `bg-cream-dark` por branco
- Cards e badges internos ganham mais destaque sobre fundo limpo

### 4. PricingSection → Fundo escuro (#1A1208)
- Textos em cream, preço em ochre, botão CTA mantém destaque
- Cria urgência e premium feel para a seção de compra
- Card de garantia com borda ochre sutil

### 5. FinalCTA → Fundo escuro (#1A1208)
- Texto em cream, shimmer-text em ochre
- Continuidade com Pricing criando um bloco "decisão" unificado dark

## Resultado visual

```text
... Steps (escuro) ...
ComparisonTable   ██████ BRANCO
ResultsSection    ▓▓▓▓▓▓ CREME
GallerySection    ██████ ESCURO
OTAComparison     ██████ BRANCO
PricingSection    ██████ ESCURO
AccordionSection  ▓▓▓▓▓▓ CREME CLARO
FinalCTA          ██████ ESCURO
Footer            ██████ ESCURO
```

Alternância clara: branco → creme → escuro → branco → escuro → creme → escuro → escuro. Nenhuma cor repete mais que 1x consecutivamente (exceto FinalCTA+Footer, que é intencional para criar bloco de fechamento).

## Arquivos editados
- `src/components/landing/ComparisonTable.tsx` — background
- `src/components/landing/GallerySection.tsx` — background + cores de texto
- `src/components/landing/OTAComparisonSection.tsx` — background
- `src/components/landing/PricingSection.tsx` — background + cores de texto
- `src/components/landing/FinalCTA.tsx` — background + cores de texto


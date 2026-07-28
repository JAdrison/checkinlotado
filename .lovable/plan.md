## Escopo

Reorganizar toda a landing abaixo da VSL na nova sequência de 17 seções, preservando 100% do Hero/VSL, preço, checkout, Pixel, UTMs, eventos, módulos, bônus, garantia, depoimentos e resultados reais. Ajustes de copy, hierarquia e organização — sem inventar dados nem trocar o produto.

---

## Nova ordem em `src/pages/Index.tsx`

```text
1  Hero (VSL) .................... INTACTO
2  BenefitsStrip ................. faixa de validação rápida
3  ProblemSection ................ identificação do problema
4  PerspectiveShift .............. improviso vs método
5  WhatIsSection ................. o que é o Check-in Lotado
6  StepsSection .................. como o método funciona (7 etapas)
7  ForWhom ....................... tipos de hospedagem + situações
8  ModulesSection ................ conteúdo dos módulos (jornada)
9  WhatYouReceive ................ ferramentas e materiais
10 BeforeAfter ................... antes/depois operacional
11 ResultsSection + Testimonials . estudos de caso reais
12 OTAComparisonSection .......... reservas diretas e OTAs (reativar)
13 Authority ..................... quem criou + XPLO
14 PricingSection ................ oferta (preço/checkout intactos)
15 GuaranteeSection .............. garantia 7 dias
16 AccordionSection .............. FAQ (categorizado)
17 FinalCTA ...................... CTA final
18 Footer
```

Remover da ordem atual: `GallerySection` e `BonusMaterials` como blocos isolados — conteúdo real de bônus continua dentro de `WhatYouReceive` e `PricingSection`. Nenhum bônus/material é excluído; apenas deixa de ter seção dedicada duplicada.

---

## Alterações por arquivo

### 1. `Hero.tsx` — INTACTO
Apenas verificar que o CTA principal continua apontando para `#comprar` (âncora da `PricingSection`). Sem mudanças de vídeo, headline, subtítulo, bullets, fundo, Pixel, UTM ou eventos.

### 2. `BenefitsStrip.tsx`
Reduzir para os 4 itens pedidos: Estratégia de ocupação · Campanhas para períodos vazios · Atendimento e conversão · Materiais práticos de aplicação. Desktop 4 col, mobile 2 col. Ícones lineares dourados existentes.

### 3. `ProblemSection.tsx`
- Label: `O PROBLEMA NEM SEMPRE É FALTA DE PROCURA`
- Headline: "Sua hospedagem não precisa apenas de mais divulgação."
- Texto-base do briefing.
- Expandir de 4 para 8 cards de dor (dependência de feriados, dias de semana vazios, promoções sem planejamento, comunicação genérica, tráfego sem estrutura, contatos que não reservam, falta de calendário, dependência de OTAs). Grid 2 col mobile / 4 col desktop.
- Frase de fechamento: "O problema nem sempre é falta de hóspedes. Muitas vezes, falta uma estrutura para planejar, atrair, atender e converter."
- Manter vídeo com scroll (não mexer na lógica de `useEffect`).

### 4. `PerspectiveShift.tsx`
- Headline: "Mais divulgação não corrige uma estratégia desorganizada."
- Duas colunas: IMPROVISO (7 itens do briefing) vs MÉTODO (7 itens do briefing). Mobile empilha.

### 5. `WhatIsSection.tsx`
- Label: `UM MÉTODO CRIADO PARA HOSPEDAGENS`
- Headline: "Transforme temporada em rotina de reservas."
- Texto do briefing + lista de 9 pilares (diagnóstico → mensuração).
- Manter frase dourada: "Da análise da agenda à confirmação da reserva."
- Trocar imagem lateral por mockup de notebook usando asset real existente.

### 6. `StepsSection.tsx`
Reescrever para as 7 etapas do briefing: Diagnosticar · Planejar · Posicionar · Criar · Atrair · Converter · Otimizar. Layout de linha do tempo vertical mobile / horizontal desktop.

### 7. `ForWhom.tsx`
Dividir em dois blocos:
- **TIPOS DE HOSPEDAGEM** — 10 itens (hotéis, pousadas, chalés, flats, casa de praia, casa de serra, casa de temporada, apartamentos, chácaras, quartos privativos).
- **SITUAÇÕES** — 6 itens do briefing.
Reduzir galeria de imagens (menos "galeria extensa").

### 8. `ModulesSection.tsx`
Manter todos os módulos reais. Reformatar cada módulo em bloco grande alternado (imagem esq/dir), com: número · título · problema que resolve · transformação · conteúdos · materiais · imagem. Mobile 1 col.

### 9. `WhatYouReceive.tsx`
- Label: `CONTEÚDO PARA APLICAR`
- Headline: "Você não recebe apenas aulas. Recebe ferramentas para colocar o método em prática."
- Somente materiais reais existentes (templates, 10 GPTs, checklists, cronogramas, calendários, roteiros, scripts, bônus atuais). Mockups reais (notebook/celular/tablet).

### 10. `BeforeAfter.tsx`
Substituir listas pelos 7 pares ANTES/DEPOIS do briefing. Enquadrar como evolução operacional (sem promessa de resultado).

### 11. `ResultsSection.tsx` + `Testimonials.tsx`
- Label: `APLICAÇÃO EM HOSPEDAGENS REAIS`
- Headline: "Resultados que mostram o que acontece quando marketing, oferta e atendimento trabalham juntos."
- Reestruturar cada case existente (Iparaí, Robelú, demais reais) em: Situação anterior · Gargalo · Estratégia · Resultado · Aprendizado. Não inventar números.
- Adicionar linha "Resultado alcançado com aplicação da estratégia e acompanhamento da XPLO." em cases de consultoria.
- Manter `Testimonials` logo em seguida com depoimentos reais atuais.

### 12. `OTAComparisonSection.tsx` (reativar no `Index.tsx`)
- Headline: "Não se trata de abandonar as plataformas. Trata-se de construir um canal próprio."
- Tom equilibrado, sem atacar Booking/Airbnb. Manter dados e comparações atuais.

### 13. `Authority.tsx`
- Label: `QUEM CRIOU O MÉTODO`
- Headline: "Criado por quem trabalha com hospedagens todos os dias."
- Bio XPLO, fotos reais existentes, especialização, motivo de criação do curso.

### 14. `PricingSection.tsx` — preço/checkout INTACTOS
- Headline: "Tenha um plano para aumentar a ocupação durante todo o calendário."
- Texto do briefing.
- Reorganizar bullets por transformação (Diagnóstico · Planejamento · Público/Oferta · Criativos · Tráfego · Atendimento · Ferramentas). Manter os 10 GPTs e os 6 tópicos do "Acesso completo ao método" já ajustados.
- Uma única caixa premium centralizada. Remover cronômetro/escassez/selos excessivos se presentes.
- CTA: "QUERO APLICAR O CHECK-IN LOTADO" (mantém link Kiwify e evento).

### 15. `GuaranteeSection.tsx`
- Headline: "Acesse por 7 dias e conheça o método com tranquilidade."
- Ícone escudo, texto curto de reembolso, política atual preservada.

### 16. `AccordionSection.tsx` (FAQ em `Index.tsx`)
Categorizar em 3 grupos: **Sobre o método** · **Sobre a aplicação** · **Sobre a compra**. Manter perguntas atuais e adicionar as do briefing coerentes com o produto. Sem alterar informações contratuais.

### 17. `FinalCTA.tsx`
- Headline atual mantida ("Pare de esperar o próximo feriado…").
- Texto: "Organize sua agenda, campanhas, comunicação e atendimento com um método criado para a realidade das hospedagens."
- Botão: "QUERO APLICAR O CHECK-IN LOTADO" → `#comprar`.
- Adicionar imagem premium de hospedagem como fundo com overlay escuro.

### 18. `Footer.tsx`
Reorganização visual limpa (marca, contatos, links, termos, políticas). Sem remover informações.

---

## Direção visual (aplicar/consolidar)

Tokens já existentes em `src/index.css` (`--background #080706`, `--surface #171512`, `--gold #C9973E`, etc.) permanecem. Passar pelos componentes reordenados garantindo:
- Serifada editorial (Cormorant/Playfair) só em headlines.
- Dourado apenas em palavras-chave, números, ícones, bordas e CTAs.
- Cards grafite com borda dourada translúcida, ícones lineares.
- Botão principal dourado sólido, texto preto, sem pulsação/brilho contínuo.
- Mobile-first: 1 col, margens 20px, CTAs full-width, sem overflow-x.

---

## O que NÃO será alterado

Hero/VSL completo · preço, parcelamento, condições · URL/params Kiwify · Meta Pixel · UTMs · eventos CAPI · `meta-capi.ts` · `LeadFormDialog` e formulários · integrações · módulos existentes (títulos técnicos originais em `ModulesSection`) · bônus reais · garantia (valor/prazo) · depoimentos (texto) · números dos cases · assets já existentes.

---

## Validação

- Build + preview em 360/375/390/412/430px e desktop 1280+.
- Clique no CTA do Hero e do FinalCTA rola até `#comprar`.
- Clique no botão da oferta abre Kiwify com params preservados.
- Pixel dispara `PageView` no load.
- Sem overflow horizontal em nenhuma largura.
- FAQ abre/fecha em todos os itens (regressão anterior).

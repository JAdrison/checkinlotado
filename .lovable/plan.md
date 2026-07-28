
## Escopo

Apenas ajustes de copy e hierarquia visual (label, headline, subheadline, bullets, CTAs, títulos de seção, cards de dor, etapas do método, antes/depois, oferta, FAQ, CTA final). Nada de estrutura de seções, ordem, integrações, vídeo, preço, checkout, módulos, bônus, depoimentos, garantia, Pixel, UTMs ou links.

Headline escolhida (sem percentual, conforme sua resposta):
> **Aumente a ocupação da sua hospedagem sem baixar o preço ou depender apenas de feriados.**
> Destaque em dourado: "sem baixar o preço".

---

## Alterações por arquivo

### 1. `Hero.tsx` (copy do bloco textual da VSL — vídeo/thumb/lógica/pixel/âncora intactos)
- Label acima da headline → `MÉTODO DE OCUPAÇÃO PARA HOSPEDAGENS` (desktop) / `MÉTODO PARA HOSPEDAGENS` (mobile, via classes responsivas). Pequeno, caixa alta, tracking amplo, dourado discreto (`text-gold/80`).
- Nova headline (sem shimmer/brilho contínuo — remover animações de gradient move sobre o texto se existirem). Destaque dourado apenas em "sem baixar o preço".
- Nova subheadline: "Aplique o Método Check-in Lotado para identificar os períodos vazios, planejar campanhas, atrair o público certo e transformar mais procura em reservas."
- Frase complementar menor abaixo: "Um passo a passo prático para hotéis, pousadas, chalés e casas de temporada que querem vender melhor durante todo o calendário."
- Título dos bullets: **"O que você vai aprender a fazer:"**
- Substituir bullets pelos 6 novos (identificar períodos, criar ofertas, planejar campanhas, atrair público certo, organizar atendimento, acompanhar resultados).
- CTA principal: **QUERO AUMENTAR MINHA OCUPAÇÃO** (mantém `href="#comprar"` e todos os handlers/tracking).
- Micro-texto abaixo do botão: `Acesso imediato • Método passo a passo • Garantia de 7 dias`.
- Nota de disclaimer discreta (fonte pequena, legível, `text-white/50`) abaixo da VSL/CTA: texto sobre variação de resultados (versão sem menção ao 80%, adaptada: "Os resultados variam conforme a estrutura da hospedagem, o mercado, a execução e o ponto de partida.").

### 2. `ProblemSection.tsx` — primeira seção após a VSL
- Label: `O PROBLEMA NEM SEMPRE É FALTA DE PROCURA`
- Headline: "Sua hospedagem pode estar perdendo reservas por falta de planejamento, oferta e acompanhamento."
- Texto de apoio (2 parágrafos conforme briefing).
- 4 cards de dor: Dependência de feriados / Dias de semana vazios / Promoções feitas em cima da hora / Contatos que chegam, mas não reservam. Manter layout de cards atuais; trocar apenas título e descrição curta de cada um.

### 3. `WhatIsSection.tsx`
- Headline: "O que é o Método Check-in Lotado?"
- Texto: definição prática (treinamento de marketing, ocupação e vendas para hospedagens; diagnóstico → público → ofertas → campanhas → atendimento → resultados).
- Frase de destaque em dourado: **"Da análise da agenda à confirmação da reserva."**

### 4. `StepsSection.tsx` (mecanismo do método)
Reescrever as 6 etapas com os títulos e descrições fornecidos:
1. Diagnóstico da ocupação
2. Estratégia e oferta
3. Criativos e divulgação
4. Captação e tráfego
5. Atendimento e conversão
6. Mensuração e melhoria
Manter layout e ícones existentes; ajustar quantidade de cards se hoje for diferente de 6.

### 5. `ForWhom.tsx`
- Headline: "Para quem quer parar de tratar a ocupação como sorte."
- 6 itens do briefing (lotam em feriados / cuidam do próprio marketing / gestores / recebem contatos mas convertem pouco / tipos de hospedagem / querem parar de reduzir diária).

### 6. `BeforeAfter.tsx`
Substituir listas ANTES/DEPOIS pelos 6 pares do briefing.

### 7. `ResultsSection.tsx` (cases)
- Label acima: `APLICAÇÃO EM HOSPEDAGENS REAIS`
- Headline: "Resultados que mostram o que acontece quando marketing, oferta e atendimento trabalham juntos."
- Adicionar linha discreta nos cases cujos resultados vêm de serviço/consultoria da XPLO: "Resultado alcançado com aplicação da estratégia e acompanhamento da XPLO." Não alterar números/dados existentes.

### 8. `PricingSection.tsx` (oferta — preço e checkout intactos)
- Headline: "Tenha um plano para aumentar a ocupação durante todo o calendário."
- Texto de apoio conforme briefing.
- Reorganizar a lista de conteúdos por transformação (Diagnóstico da ocupação, Planejamento de campanhas, Estratégia de público e oferta, Criativos para hospedagens, Tráfego e captação, Atendimento e fechamento, Materiais/templates/ferramentas). Não remover itens de valor (GPTs, garantia etc.) — apenas reordenar/renomear os títulos técnicos existentes para essas transformações; manter bônus e materiais.
- Texto do CTA do card: manter link Kiwify, trocar rótulo para **QUERO APLICAR O CHECK-IN LOTADO** (alinhado ao CTA final) — confirmar mantendo evento de tracking atual.

### 9. `AccordionSection.tsx` (FAQ — via `faq` em `Index.tsx`)
Substituir/adicionar as 4 perguntas do briefing (hospedagem pequena / precisa baixar preço / resultado em 30 dias / 80% garantido). Manter o array `objections`. Atualizar apenas o array `faq` em `src/pages/Index.tsx`.

### 10. `FinalCTA.tsx`
- Headline: "Pare de esperar o próximo feriado para voltar a vender."
- Texto: "Organize sua ocupação, campanhas e atendimento com um método criado para a realidade das hospedagens."
- Botão: **QUERO APLICAR O CHECK-IN LOTADO** (link/tracking atuais preservados).

### 11. Revisão de clareza (passada final em todos os arquivos acima + `PerspectiveShift`, `WhatYouReceive`, `BonusMaterials`, `Authority`, `GuaranteeSection`)
- Remover frases genéricas ("transforme seus resultados", "revolucione", etc.).
- Encurtar parágrafos longos.
- Unificar CTAs para as duas variações: "QUERO AUMENTAR MINHA OCUPAÇÃO" (Hero) e "QUERO APLICAR O CHECK-IN LOTADO" (oferta + CTA final). Demais botões secundários (StickyBar, Navbar) alinhados a um desses dois rótulos.
- Não mexer em: `Hero` (vídeo/thumb/lógica/pixel/eventos/UTM/âncora), `LeadFormDialog`, integrações, preço, checkout, garantia (valor/prazo), depoimentos (texto dos clientes), Meta Pixel, `meta-capi.ts`, links Kiwify/WhatsApp/Instagram.

---

## Não será alterado
- Estrutura/ordem das seções em `Index.tsx`.
- Vídeo VSL, thumbnail, player, lógica de carregamento.
- Preço, parcelas, condições, URL/params do checkout Kiwify.
- Módulos existentes (títulos técnicos originais em `ModulesSection.tsx` permanecem; apenas a **lista dentro do card de oferta** é reagrupada por transformação).
- Bônus (conteúdo/valor), garantia (7 dias), depoimentos, cases (números).
- Meta Pixel, eventos CAPI, UTMs, formulários, `LeadFormDialog`.

## Validação
- Build + preview mobile (375px) e desktop.
- Conferir que headline cabe em ≤4 linhas desktop / ≤5 linhas mobile.
- Confirmar clique em CTAs → âncora `#comprar` e link Kiwify continuam funcionando.
- Confirmar que Pixel/CAPI ainda dispara `PageView` e clique de checkout.

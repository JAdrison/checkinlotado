

# Calculadora interativa de perdas com Airbnb

## O que será feito
Substituir o bloco estático de cálculo (linhas 67-101) por uma calculadora interativa onde o visitante insere valor da diária e quantidade de quartos, e vê em tempo real quanto está perdendo por ano ao depender do Airbnb.

## Lógica da calculadora
- **Inputs**: Valor da diária (default R$300) e Quantidade de quartos (default 6)
- **Cálculo**:
  - Faturamento por diária = valor × quartos
  - Taxa Airbnb (16%) = faturamento × 0.16
  - Imposto NF (8%) = faturamento × 0.08
  - Total perdido por diária = taxa + imposto (24%)
  - Perda anual = total perdido × 200 diárias
- **Exibição**: Breakdown linha a linha + destaque dramático do valor anual perdido

## Design
- Card com fundo `#FAF8F4` e sombra sutil sobre o fundo branco da seção
- 2 inputs lado a lado (slider + campo numérico ou só campos estilizados) com labels claros
- Breakdown animado abaixo dos inputs com linhas tipo extrato:
  - "Faturamento por diária" → R$ X
  - "Comissão Airbnb (16%)" → −R$ X
  - "Imposto NF (8%)" → −R$ X  
  - "Você recebe por diária" → R$ X (em ochre)
- Divisor + bloco de impacto anual com ícone AlertTriangle e valor grande vermelho/ochre
- Valores atualizam em tempo real com `useState`
- Inputs usam range sliders estilizados (diária: R$100-R$1.500, quartos: 1-20) com o valor numérico ao lado

## Arquivo editado
- `src/components/landing/OTAComparisonSection.tsx` — substituir bloco estático (linhas 67-101) pela calculadora com React state


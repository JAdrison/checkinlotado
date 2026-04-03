

# Redesign da Calculadora de Perdas

## Mudanças solicitadas

### 1. Slider da diária até R$ 5.000
- Alterar `max` de 1500 para 5000 e o label "R$ 1.500" para "R$ 5.000"

### 2. Trocar "Quartos" por "Hospedagens"
- Label e referências de "Quartos" → "Hospedagens"

### 3. Valores de perda em vermelho
- Comissão Plataforma e Imposto NF: texto do valor em vermelho (`text-red-600`) em vez de `text-night`
- Valor de perda anual também em vermelho

### 4. Melhorias de design da calculadora

- **Card mais impactante**: fundo com gradiente sutil (cream → branco), borda fina ochre, border-radius maior
- **Sliders**: thumb maior e mais visível, track mais espesso
- **Breakdown**: ícones visuais nas linhas (CheckCircle para faturamento, XCircle vermelho para perdas), tipografia mais contrastada
- **Bloco de perda anual**: fundo vermelho/rose sutil (`bg-red-50`), borda vermelha, ícone AlertTriangle em vermelho, valor grande e bold em vermelho — criando sensação de urgência
- **Linha "Você recebe"**: destaque em ochre com fundo sutil para separar do resto
- **Transição**: adicionar `transition-all duration-300` nos valores para suavizar mudanças
- **Foco na perda por reserva**: reformular o breakdown para mostrar claramente "A cada reserva você perde X" antes do cálculo anual

## Arquivo editado
- `src/components/landing/OTAComparisonSection.tsx`


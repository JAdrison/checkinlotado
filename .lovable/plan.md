

## Plano: Seção "Resultados Reais" + Shimmer em todas as headlines

### 1. Nova seção — ResultsSection

Criar `src/components/landing/ResultsSection.tsx` com o layout da imagem de referência:

- **Header**: Label "RESULTADOS REAIS" (pill com dot dourado), headline "Quem aplica o método, vende." com "Todo. Dia." em shimmer, subtítulo descritivo, e badge "+300 reservas confirmadas"
- **Grid de prints**: Layout 3 colunas (desktop) com 9 cards simulando notificações WhatsApp. Cada card terá:
  - Header com dot verde + tipo (ex: "WhatsApp · Reserva confirmada")
  - Placeholder de imagem (920×1350 aspect ratio) com fundo cinza claro e ícone indicando onde o print será inserido
  - Subtítulo com tipo de hospedagem e localização
- Cards distribuídos em 3 colunas com espaçamento, seguindo o padrão masonry da referência
- Responsivo: 1 coluna mobile, 2 tablet, 3 desktop

### 2. Shimmer em todas as headlines

Substituir `className="text-ochre"` por `className="shimmer-text"` em todos os `<em>` de headlines nos seguintes componentes:

- `ProblemSection.tsx` — "depende de feriados"
- `ForWhom.tsx` — "você?"
- `ModulesSection.tsx` — "Check-in Lotado"
- `ComparisonTable.tsx` — "Check-in Lotado"
- `Testimonials.tsx` — "já aplicou o método"
- `FinalCTA.tsx` — "fim de semana"
- `AccordionSection.tsx` — trocar o `style="color:#C8943A"` inline por classe shimmer-text

### 3. Integração no Index

Importar `ResultsSection` e posicionar após `Testimonials` e antes de `PricingSection` no `Index.tsx`.

### Detalhes técnicos

- Os 9 placeholders de imagem usarão `aspect-ratio: 920/1350` com background `#EAE3CF` e um ícone de imagem centralizado, prontos para receber os prints reais depois
- A classe `.shimmer-text` já existe no CSS com a animação de gradiente dourado passando pelas letras


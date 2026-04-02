

## Landing Page — Check-in Lotado

Reconstrução completa da landing page de vendas do curso "Check-in Lotado" em React + Tailwind, mantendo fielmente o design, conteúdo e animações do HTML original.

### Design System
- **Paleta**: Cream (#F5EFE0 / #F2EDE0 / #EAE3CF), Ochre (#C8943A / #D4A843), Night (#1A1208)
- **Fontes**: Playfair Display (headings), DM Sans (body), Syne (labels/buttons)
- **Estilo**: Elegante, luxo acessível, com efeitos shimmer, pulse glow e float

### Seções da Página

1. **Navbar fixa** — Logo centralizado + botão CTA, com efeito de scroll (blur/background)
2. **Hero** — Título com shimmer dourado, subtítulo, botão CTA com animação de brilho
3. **Ticker animado** — Faixa dourada com texto em loop infinito
4. **Estatísticas** — Cards com números (GPTs, Calendário 90 dias, Suporte WhatsApp, Garantia 7 dias)
5. **Seção de vídeo** — Box com play button animado (placeholder de vídeo)
6. **Gráfico de aprendizado** — SVG com curva ascendente + marcadores das 5 fases com animação reveal
7. **Cards das 5 fases** — Grid com módulos do curso (diagnóstico, estratégia, criativos, WhatsApp, otimização)
8. **Tabela comparativa** — Antes vs Depois lado a lado
9. **Objeções (accordion)** — 5 perguntas com respostas expansíveis
10. **Depoimentos** — 3 cards com avaliações 5 estrelas
11. **Seção de oferta/preço** — R$497, lista de benefícios, botão CTA, garantia 7 dias
12. **FAQ (accordion)** — 4 perguntas frequentes
13. **CTA final** — Seção de fechamento com chamada emocional
14. **Footer** — Logo, suporte, garantia, copyright
15. **Sticky bottom bar** — Barra fixa inferior que aparece ao scrollar

### Animações e Interações
- Scroll reveal (fade up) em todas as seções
- Shimmer text no título principal
- Pulse glow nos botões CTA
- Float suave no botão de play e selo de garantia
- Ticker infinito na faixa dourada
- Chart reveal com overlay animado
- Accordion com transição suave
- Navbar que muda ao scrollar
- Sticky bar aparece após scroll

### Estrutura de Componentes
- `Index.tsx` — página principal orquestrando todas as seções
- Componentes individuais para cada seção (Hero, Ticker, Stats, VideoSection, LearningChart, PhaseCards, ComparisonTable, Objections, Testimonials, PricingSection, FAQ, FinalCTA, Footer, Navbar, StickyBar)


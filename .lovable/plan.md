

## Plano: Logos maiores com carrossel rotativo

### Mudanças

**`src/components/landing/ForWhom.tsx`**:
1. Aumentar o tamanho das logos de `h-14` para `h-20`
2. Adicionar 10 placeholders extras no array `trustedLogos` (com imagem placeholder genérica e texto "Em breve")
3. Implementar um carrossel infinito estilo ticker (overflow hidden + animação CSS `translateX` contínua), duplicando os itens para loop seamless — reutilizando o mesmo padrão do `ticker` já existente no CSS

**`src/index.css`** (ou inline):
- Reutilizar a animação `ticker` já definida (`@keyframes ticker`) para o scroll contínuo das logos

### Resultado
- 11 logos no total (1 real + 10 placeholders)
- Scroll automático infinito da esquerda para direita
- Logos maiores e mais visíveis


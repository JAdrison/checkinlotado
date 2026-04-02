

## Plano: Cortar seção pela metade + botão "Ver +reservas"

### Conceito

Mostrar apenas a primeira "fileira" completa de cards e a segunda fileira cortada ao meio (usando `overflow-hidden` com altura fixa), criando um efeito de "tem mais conteúdo". Abaixo, um botão "Ver +reservas" com seta para baixo.

### Mudanças em `src/components/landing/ResultsSection.tsx`

**Desktop (4 colunas):**
- Envolver o grid de colunas em um container com `max-height` calculado para mostrar ~1.5 fileiras e `overflow: hidden`
- Aplicar um gradiente fade-out na parte inferior (pseudo-elemento ou div com `bg-gradient-to-b from-transparent to-[#EAE3CF]`) para suavizar o corte
- Adicionar botão "Ver +reservas ↓" abaixo, estilizado como pill escuro (similar à referência)
- Ao clicar, expandir para mostrar todos os cards (toggle `max-height` com transição suave)

**Mobile (1 coluna):**
- Mostrar apenas os primeiros 2-3 cards, cortar o próximo pela metade com o mesmo efeito de gradiente
- Mesmo botão "Ver +reservas" abaixo

**Tablet (2 colunas):**
- Mostrar primeira fileira completa (2 cards), segunda cortada, mesmo padrão

### Implementação técnica
- Usar `useState` para controlar expandido/colapsado
- Container com `max-h-[Xpx]` quando colapsado, `max-h-none` quando expandido, com `transition-all duration-700`
- Overlay gradiente posicionado `absolute bottom-0` que desaparece quando expandido
- Botão com ícone de seta que rotaciona quando expandido


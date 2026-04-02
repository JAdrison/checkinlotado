

## Plano: Adicionar setas de navegação ao CardStack

### O que muda
Adicionar dois botões de seta (esquerda/direita) ao lado dos dots de navegação na seção "Qualquer tipo de hospedagem", permitindo navegação manual.

### Mudança em `src/components/ui/card-stack.tsx`

1. Importar `ChevronLeft` e `ChevronRight` de `lucide-react`
2. Adicionar prop `showArrows?: boolean` (default `true`) ao tipo `CardStackProps`
3. Na área dos dots (linhas 233-252), adicionar dois botões de seta — um antes dos dots e outro depois:
   - Botão esquerdo: chama `prev()`, desabilitado quando `!canGoPrev`
   - Botão direito: chama `next()`, desabilitado quando `!canGoNext`
   - Estilo: círculos com borda, ícone `text-night`, hover com fundo escuro

### Mudança em `src/components/landing/ForWhom.tsx`

Nenhuma — o `showArrows` será `true` por padrão, então as setas aparecerão automaticamente.

### Detalhes técnicos
- Layout dos controles: `flex items-center gap-3` com `[←] [dots] [→]`
- Botões: `w-9 h-9 rounded-full border border-night/20 flex items-center justify-center hover:bg-night/10 transition disabled:opacity-30`
- Ícones: `ChevronLeft` / `ChevronRight` com `size={18}`


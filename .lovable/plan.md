

## Scroll-Hijack nas Fases do Método

### O que vai acontecer
Quando o usuário rolar até a seção "Fases do método", o scroll da página será travado. Cada rolada do mouse (ou swipe no mobile) abre a próxima fase, uma por uma. Só depois que todas as 9 fases (incluindo Bônus 03) estiverem abertas, o scroll da página volta ao normal.

### Como funciona tecnicamente

**Arquivo: `src/components/ui/interactive-image-accordion.tsx`**

1. **Detectar quando a seção entra na viewport** — usar `IntersectionObserver` no container para saber quando ativar o hijack
2. **Travar o scroll** — quando a seção estiver visível e nem todas as fases estiverem abertas, fixar a seção na tela com `position: sticky` (ou `position: fixed` + offset) e interceptar eventos de `wheel` e `touchmove`
3. **Abrir fases progressivamente** — cada evento de scroll para baixo adiciona o próximo índice ao `Set` de fases ativas; scroll para cima remove o último índice aberto (permitindo "voltar")
4. **Liberar o scroll** — quando todas as 9 fases estiverem abertas (scroll down) ou quando voltar à fase 0 (scroll up), restaurar o comportamento normal de scroll
5. **Debounce/throttle** — controlar a velocidade para não abrir múltiplas fases de uma vez

**Abordagem técnica (sticky + wheel hijack):**
- Envolver o accordion em um container com `position: sticky; top: 0` e altura do viewport
- Adicionar um "spacer" div abaixo com altura suficiente para criar espaço de scroll proporcional ao número de fases
- Mapear a posição de scroll dentro do spacer para o número de fases abertas
- Alternativa mais simples: `preventDefault` no `wheel`/`touchmove` enquanto há fases para abrir, usando um `revealedCount` como estado

**Comportamento desktop vs mobile:**
- Desktop: mesmo efeito — scroll hijack abre fases uma a uma (hover continua funcionando também)
- Mobile: scroll hijack com touch events

### Arquivos alterados
- `src/components/ui/interactive-image-accordion.tsx` — lógica principal de scroll hijack, estado progressivo, e liberação do scroll




## Plano: Scroll Horizontal com GSAP ScrollTrigger na seção de Módulos

### Resumo
Instalar GSAP + ScrollTrigger e transformar a seção "Método em 5 fases" para que, ao scrollar verticalmente, os 5 cards de fases deslizem horizontalmente na tela — a seção fica "presa" (pinned) enquanto o conteúdo se move de lado.

### O que muda visualmente
- Ao chegar na seção de módulos, a página "trava" e os cards começam a aparecer da direita para a esquerda conforme o usuário scrolla
- Cada fase ocupa boa parte da tela, dando destaque individual
- O LearningChart (gráfico de curva) permanece no topo como header da seção
- Depois que todos os cards passam, o scroll vertical normal retoma

### Implementação

**1. Instalar GSAP**
- `npm install gsap`
- GSAP ScrollTrigger é incluído no pacote base (sem custo extra)

**2. Refatorar `PhaseCards.tsx`**
- Trocar o grid por um container horizontal (`display: flex`, largura = soma dos cards)
- Usar `gsap.to()` com `ScrollTrigger` para animar `x` do container horizontalmente
- Pin da seção pai enquanto o scroll horizontal acontece
- Cada card terá largura fixa (~85vw no mobile, ~450px no desktop)

**3. Ajustar `ModulesSection.tsx`**
- Adicionar `ref` no wrapper da seção para o ScrollTrigger fazer o pin
- Garantir `overflow: hidden` no container dos cards
- O LearningChart fica acima, fora do scroll horizontal

**4. Responsividade**
- No mobile: cards ocupam ~85vw, scroll horizontal funciona igual
- Desabilitar o efeito em telas muito pequenas se necessário (fallback para layout vertical)

### Detalhes técnicos
- `ScrollTrigger.pin()` fixa a seção na viewport
- `scrub: 1` conecta a animação ao scroll (sem auto-play)
- `end: () => "+=" + scrollWidth` define quanto scroll vertical equivale ao deslocamento horizontal
- Cleanup no `useEffect` return para evitar memory leaks


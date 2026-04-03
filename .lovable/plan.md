

## Bônus no Accordion + Nova Seção de Resultados

### Mudança 1 — Bônus dentro do accordion

Mover os 3 bônus para dentro do mesmo `InteractiveImageAccordion`, adicionando-os ao array `modules` como itens 7, 8 e 9:

- **+ Bônus 01** — "Como criar seu website com inteligência artificial"
- **+ Bônus 02** — "Como organizar o perfil do Instagram para vender mais"
- **+ Bônus 03** — "Como configurar o Google Meu Negócio"

Cada um com `phase: "+ Bônus 01"`, etc. Reutilizar imagens existentes (module-1 a module-6) para os bônus, ou gerar 3 novas.

Remover o grid de cards de bônus separado (linhas 104-129).

### Mudança 2 — Substituir seção "3 bônus para acelerar"

Onde estava "Você ainda leva 3 bônus para acelerar seus resultados", substituir por uma lista de benefícios/resultados:

**Label**: "O que você vai conquistar"
**Headline**: "Com o método, você vai conseguir:"

Lista com check/bullet ochre:
- Entrar mais dinheiro mesmo em fins de semana comuns.
- Vender mais diárias sem precisar dar desconto toda hora.
- Parar de depender de feriadão para respirar financeiramente.
- Reduzir a ansiedade de chegar perto do fim de semana com baixa ocupação.
- Fazer a pousada girar melhor também na baixa temporada.

Estilo: cards brancos ou lista simples com ícone check ochre, dentro da mesma section cream-dark.

### Arquivos modificados
- `src/components/landing/ModulesSection.tsx` — adicionar bônus ao array do accordion, substituir grid de bônus por lista de resultados


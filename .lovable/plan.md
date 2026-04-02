

## Plano: Seção Case Study — Chácara Iparaí

### Resumo
Substituir a seção de depoimentos genéricos por uma seção de caso real da Chácara Iparaí, seguindo o layout da referência (image-6): título grande no topo, dois painéis lado a lado — print do WhatsApp à esquerda e métricas + depoimento à direita.

### Layout (baseado na referência)

```text
┌──────────────────────────────────────────────────┐
│  "4 Meses de Reservas Vendidas em Apenas 60 Dias"│
│       Todos os finais de semana esgotados...      │
├──────────────────┬───────────────────────────────┤
│                  │  ✓ 4 Reservas                 │
│   Print do       │  em um único final de semana  │
│   WhatsApp       │                               │
│   (image-5)      │  📅 100%                      │
│                  │  Finais de semana ocupados     │
│                  │                               │
│                  │  〰 2 Meses                    │
│                  │  Para vender 4 meses           │
│                  │                               │
│                  │  [foto perfil] (image-7)       │
│                  │                               │
│                  │  Depoimento do Guilherme...    │
│                  │                               │
│                  │  Guilherme Couto               │
│                  │  Proprietário - Casa Iparaí    │
└──────────────────┴───────────────────────────────┘
```

### O que será feito

**1. Copiar assets para o projeto**
- `image-5.png` → `src/assets/case-study/whatsapp-iparai.png`
- `image-7.png` → `src/assets/case-study/guilherme-couto.jpg`

**2. Reescrever `Testimonials.tsx`**
- Título: "4 Meses de Reservas Vendidas em Apenas 60 Dias"
- Subtítulo: "Todos os finais de semana esgotados até janeiro"
- Layout dois painéis (grid 2 colunas no desktop, empilhado no mobile):
  - **Esquerda**: imagem do print do WhatsApp com bordas arredondadas e sombra
  - **Direita**: 3 cards de métricas (4 Reservas, 100%, 2 Meses) + foto circular do Guilherme + texto do depoimento + nome e cargo
- Manter o estilo visual do projeto (cores cream/ochre/night, tipografia existente)

**3. Métricas com ícones**
- Checkmark para "4 Reservas — em um único final de semana"
- Calendário para "100% — Finais de semana ocupados"
- Onda para "2 Meses — Para vender 4 meses"

**4. Depoimento completo**
- Texto: "Essa semana a gente completa 7 meses e o salto em reservas foi grande, principalmente nesse final de semana. De sábado até agora já finalizei 04 reservas, fora as que ainda estão com pagamento pendente por conta que tão recolhendo valores do grupo. Os anúncios estão bem estratégicos, chegando no público alvo. O site está super funcional, uma ferramenta excepcional que reduz as dúvidas de novos clientes como também a valorização que dá para o negócio. O grupo XPLO está fazendo um ótimo trabalho, obrigado."
- Assinatura: **Guilherme Couto** — Proprietário - Casa Iparaí

### Arquivos afetados
- `src/components/landing/Testimonials.tsx` (reescrita completa)
- 2 novos assets em `src/assets/case-study/`


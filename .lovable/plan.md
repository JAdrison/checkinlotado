

## Nova Seção: Comparação Curso vs OTAs (Airbnb/Booking)

### Conceito
Uma seção impactante antes do pricing que mostra quanto o hoteleiro **perde por ano** com comissões de OTAs, criando o contraste mental para quando ver o valor do curso depois. Inspirada no estilo visual do carrossel (números grandes em destaque, simulações com valores, tons escuros para drama).

### Estrutura Visual

```text
┌─────────────────────────────────────────────────────┐
│  Fundo escuro (#1A1208) + foto hospedagem overlay   │
│                                                     │
│  "Quanto você paga para vender pelo Airbnb?"        │
│                                                     │
│  ┌──────────────────┐    ┌──────────────────┐       │
│  │  AIRBNB / OTAs   │    │  CHECK-IN LOTADO │       │
│  │                  │    │                  │       │
│  │  16% comissão    │    │  Venda direta    │       │
│  │  Nota fiscal     │    │  Sem comissão    │       │
│  │  Sem controle    │    │  Controle total  │       │
│  │                  │    │                  │       │
│  │  ─R$24.000/ano   │    │  Investimento    │       │
│  │  (perdidos)      │    │  único           │       │
│  └──────────────────┘    └──────────────────┘       │
│                                                     │
│  "Em 10 reservas, a plataforma leva R$..."          │
│  "Com o método, você aprende a não depender mais."  │
└─────────────────────────────────────────────────────┘
```

### Layout em 3 blocos

1. **Headline** — Label + título dramático ("Quanto custa depender do Airbnb?")
2. **Simulação numérica** — Caixa estilo slide 4 do carrossel: diária R$500, comissão 16% = R$80/reserva, 300 diárias/ano = **R$24.000 perdidos**. Números grandes em gold/vermelho.
3. **Comparação lado a lado** — Dois cards:
   - **OTAs**: fundo escuro com borda vermelha sutil, lista de desvantagens (comissão, sem controle, dependência)
   - **Check-in Lotado**: fundo escuro com borda gold, lista de vantagens (venda direta, margem, estratégia). **Sem revelar preço** — apenas "investimento único que se paga na primeira reserva direta"

### Detalhes Técnicos

- **Novo arquivo**: `src/components/landing/OTAComparisonSection.tsx`
- **Posição**: Entre `GallerySection` e `PricingSection` no `Index.tsx`
- **Estilo**: Fundo escuro com imagem de hospedagem (Unsplash) + overlay, glassmorphism cards, tipografia Playfair Display para números grandes, cores ochre/gold para destaque positivo e vermelho warm para valores negativos
- **Responsivo**: Cards lado a lado no desktop, empilhados no mobile
- **Animação**: Classes `reveal` existentes


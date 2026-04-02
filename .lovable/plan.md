

## Plano: Escurecer textos secundários em toda a LP

**Problema**: Textos menores usam opacidades baixas (`text-night/40`, `/45`, `/50`, `/55`, `/60`) que dificultam a leitura.

**Solução**: Aumentar a opacidade de todos os textos secundários, mantendo a hierarquia visual:

| Opacidade atual | Nova opacidade | Uso |
|---|---|---|
| `text-night/40` | `text-night/60` | Preços riscados, labels mínimos |
| `text-night/45` | `text-night/65` | Parcelamento, garantia, roles |
| `text-night/50` | `text-night/70` | Itens "sem método" (comparison) |
| `text-night/55` | `text-night/75` | Subtítulos, descrições principais |
| `text-night/60` | `text-night/80` | Bullets, accordion, parágrafos |
| `text-night/70` | `text-night/85` | Depoimento longo |
| `text-night/75` | `text-night/85` | Lista de benefícios pricing |

### Arquivos afetados (13 componentes)
- `Hero.tsx` — subtítulo + bullets
- `ProblemSection.tsx` — parágrafos
- `ForWhom.tsx` — descrição
- `ComparisonTable.tsx` — itens "sem método"
- `Testimonials.tsx` — depoimento, labels, role
- `AccordionSection.tsx` — respostas
- `PricingSection.tsx` — benefícios, preços, garantia
- `ModulesSection.tsx`, `PhaseCards.tsx`, `ResultsSection.tsx`, `GallerySection.tsx`, `FinalCTA.tsx`, `Footer.tsx` — textos secundários

Alteração mecânica: find-and-replace das classes de opacidade em cada arquivo.


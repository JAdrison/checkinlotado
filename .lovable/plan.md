

# Reduzir margens verticais das seções

## Problema
Todas as seções têm padding vertical excessivo (96px, 110px, etc.), criando grandes espaços vazios que quebram a continuidade da página.

## Plano
Reduzir o padding vertical de cada seção para valores mais compactos, mantendo respiro suficiente sem exagerar.

| Seção | Padding atual | Novo padding |
|-------|--------------|--------------|
| Stats | 56px top/bottom | 40px top/bottom |
| ForWhom (cards) | 96px / 48px | 64px / 32px |
| ForWhom (logos) | 0 / 96px | 0 / 48px |
| Testimonials | 64px | 48px |
| ModulesSection | 96px | 64px |
| StepsSection | 100px (desktop) / 64px (mobile) | 64px / 48px |
| ComparisonTable | py-24 (96px) | py-16 (64px) |
| ResultsSection | 96px | 64px |
| GallerySection | py-20 (80px) | py-14 (56px) |
| OTAComparison | py-24 (96px) | py-16 (64px) |
| PricingSection | 96px | 64px |
| AccordionSection | 96px | 64px |
| FinalCTA | 110px | 72px |
| Footer | py-12 (48px) | py-8 (32px) |

## Arquivos editados (14 arquivos)
- `Stats.tsx` — padding inline
- `ForWhom.tsx` — padding inline (2 sections)
- `Testimonials.tsx` — padding inline
- `ModulesSection.tsx` — padding inline
- `StepsSection.tsx` — padding inline
- `ComparisonTable.tsx` — className py
- `ResultsSection.tsx` — padding inline
- `GallerySection.tsx` — className py
- `OTAComparisonSection.tsx` — className py
- `PricingSection.tsx` — padding inline
- `AccordionSection.tsx` — padding inline
- `FinalCTA.tsx` — padding inline
- `Footer.tsx` — className py


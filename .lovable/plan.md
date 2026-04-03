

# Adicionar botões de venda estratégicos na LP

## Situação atual
CTAs existem em: **Hero**, **Gallery**, **Pricing**, **FinalCTA**, **Navbar** e **StickyBar**.

Seções sem CTA: Stats, ForWhom, **Testimonials**, Modules, Steps, **ComparisonTable**, Results, **OTAComparison**, **AccordionSection**.

## Estratégia
Adicionar CTAs nos momentos de maior convicção — logo após provas sociais, comparações e resolução de objeções. Não colocar em todas as seções para evitar saturação.

## Onde adicionar (4 pontos)

| Após seção | Motivo | Texto do botão |
|---|---|---|
| **Testimonials** | Após prova social, o visitante está convencido | "QUERO LOTAR MINHA HOSPEDAGEM →" |
| **ComparisonTable** | Após ver antes vs depois, quer agir | "QUERO ENTRAR AGORA →" |
| **OTAComparisonSection** | Após ver a dor das OTAs, quer a solução | "QUERO VENDER DIRETO →" |
| **AccordionSection** | Dúvidas resolvidas, pronto para decidir | "QUERO ENTRAR AGORA →" |

## Implementação
Cada CTA será um bloco centralizado com o botão `btn-cta btn-cta-lg` + `href="#comprar"`, adicionado ao final do conteúdo de cada componente, antes do fechamento da `</section>`.

### Arquivos editados (4)
- `src/components/landing/Testimonials.tsx` — adicionar CTA ao final
- `src/components/landing/ComparisonTable.tsx` — adicionar CTA ao final
- `src/components/landing/OTAComparisonSection.tsx` — adicionar CTA ao final
- `src/components/landing/AccordionSection.tsx` — adicionar CTA ao final


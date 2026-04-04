

## Plano: Colocar link de afiliado em todos os botões de CTA

### Situação atual
Apenas o botão do PricingSection aponta para o link Kiwify (`https://pay.kiwify.com.br/Y613pR3`). Os demais 9 botões de CTA apontam para `#comprar` (âncora interna).

### O que será feito
Atualizar **todos os botões de CTA** nos seguintes arquivos para abrir o link Kiwify diretamente em nova aba, com tracking de `InitiateCheckout`:

| Arquivo | Botão atual |
|---|---|
| `Hero.tsx` | QUERO LOTAR MINHA HOSPEDAGEM |
| `Navbar.tsx` | QUERO ENTRAR → |
| `StickyBar.tsx` | QUERO ENTRAR → |
| `Testimonials.tsx` | QUERO LOTAR MINHA HOSPEDAGEM → |
| `GallerySection.tsx` | QUERO O MESMO RESULTADO |
| `ComparisonTable.tsx` | QUERO ENTRAR AGORA → |
| `AccordionSection.tsx` | QUERO ENTRAR AGORA → |
| `OTAComparisonSection.tsx` | QUERO VENDER DIRETO → |
| `FinalCTA.tsx` | QUERO ENTRAR AGORA → |

### Mudanças em cada botão
- `href="#comprar"` → `href="https://pay.kiwify.com.br/Y613pR3"`
- Adicionar `target="_blank" rel="noopener noreferrer"`
- Adicionar `onClick` com `trackEvent("InitiateCheckout", ...)` para rastreamento CAPI
- Importar `trackEvent` de `@/lib/meta-capi` nos arquivos que ainda não o importam

O PricingSection já está correto e não será alterado.


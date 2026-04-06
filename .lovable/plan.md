

## Plano: Redirecionar CTAs para a seção de preço

### O que muda
Todos os botões CTA da página passarão a rolar suavemente até a seção de preço (`#comprar`), em vez de abrir o link de checkout. Apenas o botão dentro da seção de preço continuará levando ao checkout externo (Kiwify).

### Arquivos a editar (9 arquivos)

Trocar `href="https://pay.kiwify.com.br/Y613pR3"` por `href="#comprar"` e remover `target="_blank" rel="noopener noreferrer"` nos seguintes componentes:

1. **Hero.tsx** — botão "QUERO LOTAR MINHA HOSPEDAGEM"
2. **Navbar.tsx** — botão "QUERO ENTRAR →"
3. **StickyBar.tsx** — botão "QUERO ENTRAR →"
4. **Testimonials.tsx** — botão "QUERO LOTAR MINHA HOSPEDAGEM →"
5. **ComparisonTable.tsx** — botão "QUERO ENTRAR AGORA →"
6. **GallerySection.tsx** — botão "QUERO O MESMO RESULTADO"
7. **AccordionSection.tsx** — botão "QUERO ENTRAR AGORA →"
8. **FinalCTA.tsx** — botão "QUERO ENTRAR AGORA →"
9. **OTAComparisonSection.tsx** — botão "QUERO VENDER DIRETO →"

### Sem alteração
- **PricingSection.tsx** — o botão aqui continua apontando para `https://pay.kiwify.com.br/Y613pR3`

### Scroll suave
Adicionar `scroll-behavior: smooth` no `html` em `src/index.css` para que a rolagem até `#comprar` seja suave.

### Tracking
O `onClick` com `trackEvent("InitiateCheckout", ...)` será removido dos botões que agora levam à seção de preço (não faz sentido disparar "InitiateCheckout" quando o usuário ainda não está indo ao checkout). O evento será mantido apenas no botão do PricingSection.


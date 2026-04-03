

## Plano: Tornar o site totalmente responsivo para mobile

Após análise completa do site em viewport mobile (375px), identifiquei os seguintes problemas e correções necessárias:

---

### 1. Navbar — Botão CTA cortado no mobile
**Arquivo:** `src/components/landing/Navbar.tsx`
- Reduzir `px-10` para `px-4` em telas pequenas
- Esconder o botão "QUERO ENTRAR →" em telas `< sm` e mostrar apenas o logo centralizado, ou reduzir o tamanho do botão
- Usar classes responsivas: `px-4 sm:px-10`

### 2. Hero — Texto "Assista à aula..." cortado
**Arquivo:** `src/components/landing/Hero.tsx`
- O texto do subtítulo do vídeo está sendo cortado na lateral. Reduzir padding e font-size no mobile
- Ajustar `pt-32` para `pt-24` no mobile (navbar é menor)
- O CTA button `btn-cta-lg` com padding grande precisa de `btn-cta-full` e centralização no mobile

### 3. ForWhom — CardStack overflow
**Arquivo:** `src/components/landing/ForWhom.tsx`
- O `CardStack` tem `cardWidth={480}` fixo, que ultrapassa a tela de 375px
- Adicionar lógica responsiva: usar `cardWidth={320}` e `cardHeight={200}` em mobile

### 4. Testimonials — Layout de 2 colunas no mobile
**Arquivo:** `src/components/landing/Testimonials.tsx`
- O grid `md:grid-cols-2` já é responsivo, mas a imagem do WhatsApp pode ser muito grande. Verificar `max-height` da imagem no mobile

### 5. PricingSection — Garantia layout quebrado
**Arquivo:** `src/components/landing/PricingSection.tsx`
- A seção de garantia usa `flex items-center gap-6` com o círculo e texto lado a lado — no mobile fica apertado
- Mudar para `flex-col sm:flex-row` e centralizar o conteúdo no mobile
- O `price-box` com `p-10` é muito grande no mobile — usar `p-6 sm:p-10`

### 6. GallerySection — Grid de 2 colunas
**Arquivo:** `src/components/landing/GallerySection.tsx`  
- O `lg:grid-cols-2` já funciona (stack no mobile), mas o botão CTA pode precisar de `btn-cta-full` no mobile

### 7. StickyBar — Já funciona bem
- Já esconde o preço com `hidden sm:inline` — OK

### 8. CSS Global — Botões no mobile
**Arquivo:** `src/index.css`
- `.btn-cta-lg` tem `padding: 20px 52px` que é largo demais em telas pequenas
- Adicionar media query mobile para reduzir padding: `padding: 16px 32px`

---

### Resumo das alterações

| Arquivo | Mudança |
|---------|---------|
| `Navbar.tsx` | Padding responsivo, esconder/reduzir CTA no mobile |
| `Hero.tsx` | Reduzir pt-top, centralizar CTA |
| `ForWhom.tsx` | CardStack com dimensões responsivas |
| `PricingSection.tsx` | Garantia flex-col no mobile, padding menor |
| `GallerySection.tsx` | CTA full-width no mobile |
| `index.css` | Btn-cta-lg padding menor no mobile |


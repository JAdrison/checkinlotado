

## Formulário Presell Flutuante

### O que muda
Todos os botões CTA da landing page (Hero, Testimonials, ComparisonTable, GallerySection, OTAComparisonSection, AccordionSection, FinalCTA, Navbar, StickyBar) passarão a abrir um formulário flutuante (Dialog/modal) em vez de rolar para a seção de preços. O botão da PricingSection continua indo direto para o checkout Kiwify.

### Estrutura do formulário (Dialog modal)
1. **Logo** do Check-in Lotado (imagem grande, centralizada)
2. **Headline**: "Preencha o formulário e descubra como faturar alto com a sua hospedagem."
3. **Campos**:
   - Nome (text input)
   - Melhor e-mail (email input)
   - WhatsApp (input com prefixo fixo "+55", máscara de telefone)
   - Tipo de hospedagem (select com opções: Casa de praia, Casa de serra, Pousada, Apartamento, Hotel, Chácara)
4. **Botão de envio** com estilo CTA consistente com a página
5. **Após envio**: salva os dados no banco (tabela `leads`) e redireciona para o checkout Kiwify

### Arquivos envolvidos

| Arquivo | Mudança |
|---|---|
| `src/components/landing/LeadFormDialog.tsx` | **Novo** — componente do modal com logo, headline, formulário e lógica de submit |
| `src/contexts/LeadFormContext.tsx` | **Novo** — context com estado `open`/`setOpen` para abrir o modal de qualquer lugar |
| `src/App.tsx` | Envolve com `LeadFormProvider` e renderiza `<LeadFormDialog />` |
| `src/components/landing/Hero.tsx` | CTA chama `setOpen(true)` em vez de `href="#comprar"` |
| `src/components/landing/Navbar.tsx` | Idem |
| `src/components/landing/StickyBar.tsx` | Idem |
| `src/components/landing/Testimonials.tsx` | Idem |
| `src/components/landing/ComparisonTable.tsx` | Idem |
| `src/components/landing/GallerySection.tsx` | Idem |
| `src/components/landing/OTAComparisonSection.tsx` | Idem |
| `src/components/landing/AccordionSection.tsx` | Idem |
| `src/components/landing/FinalCTA.tsx` | Idem |
| **Migration SQL** | Nova tabela `leads` (id, name, email, whatsapp, accommodation_type, created_at) com RLS aberta para insert anon |

### Detalhes técnicos
- Usa `Dialog` do shadcn/ui para o modal
- Context global para controlar abertura do formulário
- Tabela `leads` no banco com política RLS permitindo insert público (sem autenticação necessária — é um formulário de captura)
- Após submit bem-sucedido, redireciona automaticamente para `https://pay.kiwify.com.br/Y613pR3`
- Validação client-side com estados de erro inline
- Design: fundo escuro (#1A1208), tipografia cream/ochre, consistente com a landing page


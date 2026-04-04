

## Plano: Configurar Meta Conversions API (CAPI)

### O que será feito

Criar uma Edge Function no Lovable Cloud que envia eventos do servidor diretamente para a API de Conversões da Meta, complementando o Pixel do navegador. Isso melhora a precisão do rastreamento (especialmente com bloqueadores de anúncios e restrições de cookies).

### Etapas

1. **Salvar o token como secret**
   - Armazenar `META_CONVERSIONS_TOKEN` como secret seguro no Lovable Cloud (nunca exposto no código)

2. **Criar Edge Function `meta-conversions`**
   - Endpoint: `supabase/functions/meta-conversions/index.ts`
   - Recebe eventos do frontend (PageView, Lead, etc.) via POST
   - Envia para `https://graph.facebook.com/v21.0/{PIXEL_ID}/events` usando o token
   - Pixel ID: `1666693307683285`
   - Inclui CORS headers e validação de input

3. **Criar helper no frontend**
   - Arquivo `src/lib/meta-capi.ts` com função `sendServerEvent(eventName, eventData)`
   - Chama a Edge Function via `supabase.functions.invoke('meta-conversions', ...)`

4. **Integrar eventos na landing page**
   - **PageView**: disparado ao carregar a página (Index.tsx)
   - **Lead / InitiateCheckout**: disparado ao clicar no CTA de compra (link Kiwify `https://pay.kiwify.com.br/Y613pR3`)
   - Atualizar os links `href="#"` no PricingSection e outros CTAs para apontar para o link Kiwify correto

### Detalhes técnicos

- A Edge Function usa `Deno.env.get('META_CONVERSIONS_TOKEN')` para acessar o token
- Eventos enviados incluem: `event_name`, `event_time`, `action_source: "website"`, `event_source_url`, e hash do user agent
- O frontend gera um `event_id` único para deduplicação entre Pixel (browser) e CAPI (servidor)


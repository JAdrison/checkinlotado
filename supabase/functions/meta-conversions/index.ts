import { corsHeaders } from '@supabase/supabase-js/cors'

const PIXEL_ID = '1666693307683285'
const META_API_VERSION = 'v21.0'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const token = Deno.env.get('META_CONVERSIONS_TOKEN')
    if (!token) {
      return new Response(JSON.stringify({ error: 'Missing META_CONVERSIONS_TOKEN' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const body = await req.json()
    const { event_name, event_id, event_source_url, user_data, custom_data } = body

    if (!event_name) {
      return new Response(JSON.stringify({ error: 'event_name is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const eventData: Record<string, unknown> = {
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_id: event_id || crypto.randomUUID(),
      event_source_url: event_source_url || '',
      user_data: user_data || {},
    }

    if (custom_data) {
      eventData.custom_data = custom_data
    }

    const payload = {
      data: [eventData],
    }

    const url = `https://graph.facebook.com/${META_API_VERSION}/${PIXEL_ID}/events?access_token=${token}`

    const metaResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await metaResponse.json()

    return new Response(JSON.stringify(result), {
      status: metaResponse.ok ? 200 : 502,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

import { corsHeaders } from '@supabase/supabase-js/cors'

const PIXEL_ID = '1666693307683285'
const META_API_VERSION = 'v21.0'
const ALLOWED_EVENTS = new Set([
  'PageView',
  'ViewContent',
  'Lead',
  'InitiateCheckout',
  'Purchase',
])

const normalize = (value: unknown) =>
  typeof value === 'string' ? value.trim().toLowerCase() : ''

const normalizePhone = (value: unknown) =>
  typeof value === 'string' ? value.replace(/\D/g, '') : ''

const sha256 = async (value: string) => {
  const bytes = new TextEncoder().encode(value)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')
}

const hashIfPresent = async (value: string) => value ? await sha256(value) : undefined

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

    if (!event_name || !ALLOWED_EVENTS.has(event_name)) {
      return new Response(JSON.stringify({ error: 'invalid event_name' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const forwardedFor = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    const clientIp = req.headers.get('cf-connecting-ip') || forwardedFor
    const matchingData = user_data || {}
    const normalizedUserData: Record<string, string> = {}

    const email = await hashIfPresent(normalize(matchingData.email))
    const phone = await hashIfPresent(normalizePhone(matchingData.phone))
    const firstName = await hashIfPresent(normalize(matchingData.first_name))
    const lastName = await hashIfPresent(normalize(matchingData.last_name))
    const externalId = await hashIfPresent(normalize(matchingData.external_id))

    if (email) normalizedUserData.em = email
    if (phone) normalizedUserData.ph = phone
    if (firstName) normalizedUserData.fn = firstName
    if (lastName) normalizedUserData.ln = lastName
    if (externalId) normalizedUserData.external_id = externalId
    if (matchingData.fbp) normalizedUserData.fbp = matchingData.fbp
    if (matchingData.fbc) normalizedUserData.fbc = matchingData.fbc
    if (matchingData.client_user_agent) {
      normalizedUserData.client_user_agent = matchingData.client_user_agent
    }
    if (clientIp) normalizedUserData.client_ip_address = clientIp

    const eventData: Record<string, unknown> = {
      event_name,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_id: event_id || crypto.randomUUID(),
      event_source_url: event_source_url || '',
      user_data: normalizedUserData,
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

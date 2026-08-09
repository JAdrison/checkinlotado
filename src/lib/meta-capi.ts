import { supabase } from "@/integrations/supabase/client";

/**
 * Sends a server-side event to Meta Conversions API via Edge Function.
 * The event_id is shared with the browser Pixel for deduplication.
 */
export async function sendServerEvent(
  eventName: string,
  options?: {
    eventId?: string;
    customData?: Record<string, unknown>;
  }
) {
  const eventId = options?.eventId || crypto.randomUUID();

  try {
    await supabase.functions.invoke('meta-conversions', {
      body: {
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        user_data: {
          client_user_agent: navigator.userAgent,
        },
        custom_data: options?.customData,
      },
    });
  } catch (e) {
    // Silent fail — tracking should never break the UX
    console.warn('[CAPI]', e);
  }

  return eventId;
}

/**
 * Fire both browser Pixel event and server CAPI event with shared event_id for dedup.
 */
export function trackEvent(
  eventName: string,
  customData?: Record<string, unknown>
) {
  const eventId = crypto.randomUUID();

  // Browser pixel (if fbq is loaded)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, customData || {}, { eventID: eventId });
  }

  // Server-side CAPI
  sendServerEvent(eventName, { eventId, customData });
}

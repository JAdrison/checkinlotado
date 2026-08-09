import { supabase } from "@/integrations/supabase/client";

export type MetaEventName =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "InitiateCheckout"
  | "Purchase";

export type MetaUserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};

export const CHECKIN_PRODUCT_DATA = {
  content_ids: ["checkin-lotado"],
  content_name: "Check-in Lotado",
  content_type: "product",
  currency: "BRL",
} as const;

const EXTERNAL_ID_KEY = "checkin_lotado_external_id";

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;

  const prefix = `${name}=`;
  const cookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix));

  return cookie?.slice(prefix.length);
}

function getOrCreateExternalId() {
  if (typeof window === "undefined") return undefined;

  try {
    const existing = window.localStorage.getItem(EXTERNAL_ID_KEY);
    if (existing) return existing;

    const created = crypto.randomUUID();
    window.localStorage.setItem(EXTERNAL_ID_KEY, created);
    return created;
  } catch {
    return crypto.randomUUID();
  }
}

function getFbc() {
  const cookieValue = getCookie("_fbc");
  if (cookieValue) return cookieValue;
  if (typeof window === "undefined") return undefined;

  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
}

export function getMatchingData(userData?: MetaUserData) {
  return {
    client_user_agent:
      typeof navigator !== "undefined" ? navigator.userAgent : undefined,
    fbp: getCookie("_fbp"),
    fbc: getFbc(),
    external_id: getOrCreateExternalId(),
    email: userData?.email,
    phone: userData?.phone,
    first_name: userData?.firstName,
    last_name: userData?.lastName,
  };
}

/**
 * Sends a server-side event to Meta Conversions API via Edge Function.
 * The event_id is shared with the browser Pixel for deduplication.
 */
export async function sendServerEvent(
  eventName: MetaEventName,
  options?: {
    eventId?: string;
    customData?: Record<string, unknown>;
    userData?: MetaUserData;
  }
) {
  const eventId = options?.eventId || crypto.randomUUID();

  try {
    const { error } = await supabase.functions.invoke("meta-conversions", {
      body: {
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        user_data: getMatchingData(options?.userData),
        custom_data: options?.customData,
      },
    });

    if (error) {
      console.warn("[CAPI]", error.message);
    }
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
  eventName: MetaEventName,
  customData?: Record<string, unknown>,
  userData?: MetaUserData
) {
  const eventId = crypto.randomUUID();

  // Browser pixel (if fbq is loaded)
  const fbq = typeof window !== "undefined"
    ? (window as Window & { fbq?: (...args: unknown[]) => void }).fbq
    : undefined;
  fbq?.("track", eventName, customData || {}, { eventID: eventId });

  // Server-side CAPI
  return sendServerEvent(eventName, { eventId, customData, userData });
}

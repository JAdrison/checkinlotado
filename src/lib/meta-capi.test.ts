import { beforeEach, describe, expect, it, vi } from "vitest";
import { supabase } from "@/integrations/supabase/client";
import { getMatchingData, trackEvent } from "@/lib/meta-capi";

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    functions: {
      invoke: vi.fn().mockResolvedValue({ data: {}, error: null }),
    },
  },
}));

describe("Meta Pixel + CAPI", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.clear();
    document.cookie = "_fbp=fb.1.123.browser; path=/";
    document.cookie = "_fbc=fb.1.123.click; path=/";
    (window as typeof window & { fbq?: ReturnType<typeof vi.fn> }).fbq = vi.fn();
  });

  it("shares the same event id between browser Pixel and CAPI", async () => {
    await trackEvent("ViewContent", { content_ids: ["checkin-lotado"] });

    const fbq = (window as typeof window & { fbq: ReturnType<typeof vi.fn> }).fbq;
    const browserEventId = fbq.mock.calls[0][3].eventID;
    const invoke = vi.mocked(supabase.functions.invoke);
    const serverBody = invoke.mock.calls[0][1]?.body as Record<string, unknown>;

    expect(browserEventId).toBeTruthy();
    expect(serverBody.event_id).toBe(browserEventId);
    expect(serverBody.event_name).toBe("ViewContent");
  });

  it("includes first-party browser identifiers in server matching data", () => {
    const data = getMatchingData({ email: "lead@example.com" });

    expect(data.fbp).toBe("fb.1.123.browser");
    expect(data.fbc).toBe("fb.1.123.click");
    expect(data.external_id).toBeTruthy();
    expect(data.email).toBe("lead@example.com");
  });

  it("keeps the external id stable for the same browser", () => {
    const first = getMatchingData().external_id;
    const second = getMatchingData().external_id;

    expect(second).toBe(first);
  });
});
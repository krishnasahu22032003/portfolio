export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, parameters);
}
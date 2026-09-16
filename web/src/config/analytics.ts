export const GA_TRACKING_ID =
  import.meta.env.PUBLIC_GA_TRACKING_ID || "G-XXXXXXXXXX";

export const analyticsConfig = {
  send_page_view: false,
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false,
  custom_map: {},
};

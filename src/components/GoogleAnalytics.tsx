import Script from "next/script";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // TEMPORARY diagnostic flag — debug_mode marks hits as debug
          // traffic so they show up in GA4 DebugView. Revert this once
          // the "0 events" issue is diagnosed; see docs/analytics-monitoring.md.
          gtag('config', '${GA_MEASUREMENT_ID}', { debug_mode: true });
        `}
      </Script>
    </>
  );
}

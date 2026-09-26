"use client";

import { trackEvent } from "@/lib/gtag";
import { GOOGLE_REVIEW_URL } from "@/lib/reviews";

export default function GoogleReviewButton() {
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("click_google_review")}
      className="mt-6 inline-block rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
    >
      Leave a Google review
    </a>
  );
}

"use client";

import { useState } from "react";

type FaqBlock = string | string[];

type FaqItem = {
  question: string;
  content: FaqBlock[];
};

const faqs: FaqItem[] = [
  {
    question: "What items do you sharpen?",
    content: [
      "Xtra Sharp sharpens:",
      [
        "Kitchen knives",
        "Chef knives",
        "Scissors (household, industrial, grooming)",
        "Clipper blades (pet, horse, shearing)",
        "Chisels and woodworking tools",
        "Plane blades",
        "Specialty tools (quoted individually)",
      ],
      "If you're unsure, send a photo and we'll confirm.",
    ],
  },
  {
    question: "How long does sharpening take?",
    content: [
      "Most items are completed within 1–2 days.",
      "Busy periods may take up to 3 days, depending on workload.",
      "Urgent jobs are available by arrangement.",
    ],
  },
  {
    question: "Do you accept walk-ins?",
    content: [
      "No — Xtra Sharp is appointment-only.",
      "This ensures fast turnaround and consistent quality.",
    ],
  },
  {
    question: "Do you offer pick-up or mail-in services?",
    content: [
      "Yes:",
      [
        "Drop-Off: Appointment required",
        "Mail-In: Australia Post accepted",
        "Local Pick-Up: Available in selected Western Sydney areas",
      ],
      "Return postage or pick-up fees are quoted during booking.",
    ],
  },
  {
    question: "How do I get a quote?",
    content: [
      "Send a message with:",
      [
        "Type of item",
        "Quantity",
        "Any damage or special requirements",
        "Preferred service method (drop-off, mail-in, pick-up)",
      ],
      "You'll receive a clear, upfront quote.",
    ],
  },
  {
    question: "Can you fix damaged blades?",
    content: [
      "Yes — minor chips, bends, and tip damage can usually be repaired.",
      "Severe damage is quoted individually.",
    ],
  },
  {
    question: "Do you sharpen grooming scissors?",
    content: [
      "Yes — grooming scissors and clipper blades are sharpened using calibrated machines for smooth, consistent performance.",
    ],
  },
  {
    question: "How do I pay?",
    content: [
      "Payment is made on collection or before return shipping.",
      "Cash, bank transfer, and other common methods are accepted.",
    ],
  },
  {
    question: "Where are you located?",
    content: ["Campbelltown NSW.", "Full address is provided upon booking."],
  },
  {
    question: "What if I have a large batch?",
    content: [
      "Workshops, schools, grooming salons, and commercial clients are welcome.",
      "Batch pricing is available — just ask.",
    ],
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-metallic/40 overflow-hidden rounded-lg border border-metallic/40 bg-background">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="font-medium text-text">{faq.question}</span>
              <span
                className={`flex-none text-xl leading-none text-accent transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="space-y-3 px-6 pb-5 text-sm text-text/70">
                {faq.content.map((block, blockIndex) =>
                  Array.isArray(block) ? (
                    <ul key={blockIndex} className="space-y-1">
                      {block.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 text-accent">✔</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={blockIndex}>{block}</p>
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    trackEvent("submit_contact_form");
    const subject = encodeURIComponent(`Enquiry from ${name || "website contact form"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:phil@xtrasharp.com.au?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center text-text/80">
        Fill in the form below &mdash; it will open your email app with your
        message ready to send to phil@xtrasharp.com.au.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded-md border border-metallic/40 bg-background px-3 py-2 text-text focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-md border border-metallic/40 bg-background px-3 py-2 text-text focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-1 w-full rounded-md border border-metallic/40 bg-background px-3 py-2 text-text focus:border-accent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

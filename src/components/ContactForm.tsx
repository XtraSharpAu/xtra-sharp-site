"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/gtag";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/contact";

export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (botcheck) {
      return;
    }

    setSending(true);
    setError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from xtrasharp.com.au – ${name}`,
          from_name: "Xtra Sharp website",
          name,
          email,
          phone,
          message,
        }),
      });
      const result = await response.json();

      if (result.success) {
        trackEvent("submit_contact_form");
        router.push("/thank-you");
      } else {
        setError(true);
        trackEvent("contact_form_error");
      }
    } catch {
      setError(true);
      trackEvent("contact_form_error");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <p className="text-center text-text/80">
        Send me a message below and I&apos;ll get back to you as soon as I
        can.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
        <input
          type="checkbox"
          name="botcheck"
          checked={botcheck}
          onChange={(event) => setBotcheck(event.target.checked)}
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
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
          <label htmlFor="phone" className="block text-sm font-medium text-text">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
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
          disabled={sending}
          className="w-full rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ctaRed/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send Message"}
        </button>
        {error && (
          <p className="rounded-md border border-ctaRed/40 bg-ctaRed/5 px-3 py-2 text-sm text-ctaRed">
            Sorry, that didn&apos;t send. Please call or text{" "}
            <a href="tel:0412974277" className="underline">
              0412 974 277
            </a>
            , or email{" "}
            <a href="mailto:phil@xtrasharp.com.au" className="underline">
              phil@xtrasharp.com.au
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/thank-you");
  }

  return (
    <section className="border-t border-metallic/40 px-6 py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center text-3xl font-semibold text-text">
          Send a Message
        </h2>
        <p className="mt-4 text-center text-text/80">
          Prefer to write it down? Fill in the form below and we&apos;ll get
          back to you.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-metallic/40 bg-background px-3 py-2 text-text focus:border-ausBlue focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-metallic/40 bg-background px-3 py-2 text-text focus:border-ausBlue focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-metallic/40 bg-background px-3 py-2 text-text focus:border-ausBlue focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-ctaRed/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

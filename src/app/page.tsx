export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Hero section placeholder
        </h1>
        <p className="max-w-xl text-text/70">
          This is a placeholder for the hero content that will introduce
          Xtra Sharp.
        </p>
        <a
          href="#services"
          className="mt-2 rounded-full bg-ctaRed px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-ctaRed/90"
        >
          Call to action placeholder
        </a>
      </section>

      <section
        id="services"
        className="border-t border-metallic/40 bg-ausBlue/5 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold text-text">
            Services section placeholder
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-metallic/40 bg-background p-6 text-center shadow-sm"
              >
                <h3 className="text-lg font-medium text-text">
                  Service {item}
                </h3>
                <p className="mt-2 text-sm text-text/70">
                  Service description placeholder.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

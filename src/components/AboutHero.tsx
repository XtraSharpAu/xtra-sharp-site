import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="flex flex-col items-center gap-4 px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-text sm:text-5xl">
        About Xtra Sharp
      </h1>
      <p className="text-text/80">
        Professional Knife &amp; Tool Sharpening • Campbelltown NSW
      </p>
      <div className="flex max-w-2xl flex-col items-center gap-6 text-left sm:flex-row sm:items-start">
        <figure className="flex flex-shrink-0 flex-col items-center gap-2">
          <div className="h-40 w-40 overflow-hidden rounded-full shadow-md">
            <Image
              src="/owner-phillip-angland.jpg"
              alt="Phillip Angland — Owner of Xtra Sharp"
              width={512}
              height={512}
              sizes="160px"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="text-sm text-text/70">
            Phillip Angland — Owner &amp; Sharpener
          </figcaption>
        </figure>
        <p className="text-text/70 sm:pt-2">
          Xtra Sharp is a professional knife and tool sharpening service based
          in Woodbine, Campbelltown NSW. We provide reliable sharpening for
          kitchens, salons, schools, workshops, and tradespeople across
          Western Sydney.
        </p>
      </div>
    </section>
  );
}

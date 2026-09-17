type GalleryCategoryProps = {
  icon: string;
  title: string;
  items: string[];
};

export default function GalleryCategory({
  icon,
  title,
  items,
}: GalleryCategoryProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-center text-2xl font-semibold text-text">
        <span aria-hidden="true">{icon}</span> {title}
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-lg border border-metallic/40 bg-background"
          >
            <div
              className="flex aspect-[4/3] items-center justify-center bg-metallic/10 text-4xl text-metallic"
              aria-hidden="true"
            >
              📷
            </div>
            <p className="px-4 py-3 text-sm text-text/80">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

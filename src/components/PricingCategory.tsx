type PricingItem = {
  name: string;
  price: string;
  description: string;
};

type PricingCategoryProps = {
  icon: string;
  title: string;
  items: PricingItem[];
};

export default function PricingCategory({
  icon,
  title,
  items,
}: PricingCategoryProps) {
  return (
    <div className="rounded-lg border border-metallic/40 bg-background p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-text">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="border-t border-metallic/40 pt-4 first:border-t-0 first:pt-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-medium text-text">{item.name}</p>
              <p className="font-semibold text-ctaRed">{item.price}</p>
            </div>
            <p className="mt-1 text-sm text-text/70">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

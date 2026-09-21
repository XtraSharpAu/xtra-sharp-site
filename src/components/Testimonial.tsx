import Image from "next/image";

type TestimonialProps = {
  name: string;
  location?: string;
  text: string;
  image?: string;
};

export default function Testimonial({ name, location, text, image }: TestimonialProps) {
  return (
    <div className="mb-8">
      {image && (
        <Image
          src={image}
          alt="Customer testimonial for Xtra Sharp Campbelltown NSW sharpening service."
          width={96}
          height={96}
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
      )}
      <h3 className="font-semibold text-xl">{name}</h3>
      {location && <p className="text-gray-600">{location}</p>}
      <p className="mt-2 text-gray-700 italic">&quot;{text}&quot;</p>
    </div>
  );
}

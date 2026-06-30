import Link from "next/link";
import Image from "next/image";
import { Category } from "@/types";
import { CATEGORY_PHOTOS, IMAGE_QUALITY, isRemoteImage } from "@/lib/images";

export function CategoryCard({ category }: { category: Category }) {
  const photo =
    CATEGORY_PHOTOS[category.slug as keyof typeof CATEGORY_PHOTOS] ??
    CATEGORY_PHOTOS.tops;

  return (
    <Link
      href={`/clothing?cat=${category.slug}`}
      className="group block relative overflow-hidden bg-anaruz-card"
    >
      <div className="aspect-[3/4] relative">
        <Image
          src={photo}
          alt={category.name}
          fill
          unoptimized={!isRemoteImage(photo)}
          quality={IMAGE_QUALITY.category}
          className="object-cover object-center product-photo transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 50vw, 25vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-anaruz-brown/85 py-3.5 text-center">
        <span className="text-white text-[11px] font-medium tracking-[0.28em] uppercase">
          {category.name}
        </span>
      </div>
    </Link>
  );
}

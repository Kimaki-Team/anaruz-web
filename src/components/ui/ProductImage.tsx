import Image from "next/image";
import { Product } from "@/types";
import { getProductPhoto, IMAGE_QUALITY, isRemoteImage } from "@/lib/images";

type ProductImageProps = {
  type: Product["imageType"];
  alt: string;
  className?: string;
  sizes?: string;
};

export function ProductImage({
  type,
  alt,
  className = "",
  sizes = "(max-width:768px) 50vw, 16vw",
}: ProductImageProps) {
  const src = getProductPhoto(type);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized={!isRemoteImage(src)}
      quality={IMAGE_QUALITY.product}
      className={`object-contain object-center p-3 md:p-4 product-photo ${className}`}
      sizes={sizes}
    />
  );
}

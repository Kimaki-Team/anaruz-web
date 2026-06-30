"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { getProductGallery } from "@/lib/images";
import { Product } from "@/types";
import { iconStroke } from "@/lib/icon-tokens";

export function ProductGallery({ product }: { product: Product }) {
  const images = getProductGallery(product.imageType);
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-2 lg:gap-3 w-full max-w-[440px] lg:max-w-[480px]">
      <div className="hidden sm:flex flex-col gap-1.5 shrink-0">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            className={`relative w-11 h-11 lg:w-12 lg:h-12 bg-anaruz-card overflow-hidden border ${
              active === i ? "border-anaruz-brown" : "border-anaruz-border"
            }`}
          >
            <Image
              src={src}
              alt={`${product.name} view ${i + 1}`}
              fill
              className="object-cover object-center product-photo"
              sizes="48px"
            />
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] aspect-square bg-anaruz-card overflow-hidden">
        <Image
          src={images[active]}
          alt={product.name}
          fill
          priority
          className="object-contain object-center p-3 lg:p-5 product-photo"
          sizes="(max-width:768px) 280px, 420px"
        />
        <div className="absolute top-3 right-3 text-anaruz-muted">
          <ZoomIn className="w-4 h-4" strokeWidth={iconStroke.thin} />
        </div>
      </div>
    </div>
  );
}

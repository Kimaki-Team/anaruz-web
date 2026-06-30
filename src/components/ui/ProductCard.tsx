"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { ProductImage } from "./ProductImage";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-square bg-anaruz-card overflow-hidden">
        <ProductImage
          type={product.imageType}
          alt={product.name}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <button
          type="button"
          className="absolute top-3 right-3 text-anaruz-brown-dark/45 hover:text-anaruz-brown z-10"
          onClick={(e) => e.preventDefault()}
          aria-label="Add to wishlist"
        >
          <Heart className={iconCls.heart} strokeWidth={iconStroke.thin} />
        </button>
      </div>
      <div className="mt-2.5 space-y-0.5">
        <h3 className="font-sans text-[10px] font-medium tracking-[0.05em] uppercase text-anaruz-brown-dark leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="font-sans text-[13px] font-semibold text-anaruz-brown-dark">
          {product.price} DH
        </p>
        {product.colors.length > 1 && (
          <div className="flex items-center gap-1 pt-1">
            {product.colors.map((color) => (
              <span
                key={color.name}
                className="w-2.5 h-2.5 rounded-full border border-anaruz-border"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

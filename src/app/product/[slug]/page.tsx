"use client";

import { notFound, useRouter } from "next/navigation";
import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { StarRating } from "@/components/product/StarRating";
import { ProductTrustBadges } from "@/components/product/ProductTrustBadges";
import {
  getProductBySlug,
  getProductBreadcrumbs,
  getProductMeta,
  getRelatedProducts,
} from "@/data/products";
import { getProductGallery } from "@/lib/images";
import { useCart } from "@/lib/cart-context";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

const TABS = ["DESCRIPTION", "DETAILS", "SIZE & FIT", "SHIPPING & RETURNS"] as const;

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [size, setSize] = useState(product?.sizes.includes("M") ? "M" : product?.sizes[0] ?? "M");
  const [color, setColor] = useState(product?.colors[0]?.name ?? "");
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("DESCRIPTION");

  if (!product) notFound();

  const meta = getProductMeta(product);
  const related = getRelatedProducts(product);
  const detailImage = getProductGallery(product.imageType)[1] ?? getProductGallery(product.imageType)[0];

  const handleAddToCart = () => {
    addItem(product, size, color);
  };

  const handleBuyNow = () => {
    addItem(product, size, color);
    router.push("/cart");
  };

  return (
    <div className="container-anaruz pt-8 pb-16">
      <Breadcrumbs items={getProductBreadcrumbs(product)} />

      {/* Main product area */}
      <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 mt-6 mb-16 items-start">
        <ProductGallery product={product} />

        <div className="lg:pt-2">
          <h1 className="font-sans text-lg lg:text-xl font-semibold tracking-[0.06em] uppercase text-anaruz-brown-dark leading-snug">
            {product.name}
          </h1>
          <p className="font-sans text-2xl font-semibold text-anaruz-brown-dark mt-3 mb-4">
            {product.price} DH
          </p>
          <StarRating rating={meta.rating} reviewCount={meta.reviewCount} />

          <div className="mt-8">
            <p className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-anaruz-brown-dark mb-3">
              COLOR: {color.toUpperCase()}
            </p>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setColor(c.name)}
                  className={`w-7 h-7 rounded-full border-2 ${
                    color === c.name ? "border-anaruz-brown-dark" : "border-anaruz-border"
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <p className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-anaruz-brown-dark">
                SIZE: {size}
              </p>
              <Link
                href="/about#size-guide"
                className="font-sans text-[10px] tracking-[0.12em] uppercase text-anaruz-muted underline underline-offset-4 hover:text-anaruz-brown"
              >
                SIZE GUIDE
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`min-w-[44px] px-3 py-2.5 font-sans text-[11px] tracking-wide border transition-colors ${
                    size === s
                      ? "border-anaruz-brown bg-anaruz-brown text-white"
                      : "border-anaruz-border text-anaruz-brown-dark hover:border-anaruz-brown"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-anaruz-brown text-white py-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-anaruz-brown-dark flex items-center justify-center gap-2"
            >
              <ShoppingBag className={iconCls.heart} strokeWidth={iconStroke.thin} />
              ADD TO CART
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full border border-anaruz-border bg-white py-4 font-sans text-[11px] font-medium tracking-[0.2em] uppercase text-anaruz-brown-dark hover:border-anaruz-brown"
            >
              BUY NOW
            </button>
          </div>

          <ProductTrustBadges />
        </div>
      </div>

      {/* Tabs */}
      <section className="border-t border-anaruz-border pt-10 mb-16">
        <div className="flex flex-wrap gap-6 lg:gap-10 border-b border-anaruz-border mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`font-sans text-[10px] font-semibold tracking-[0.15em] uppercase pb-3 -mb-px transition-colors ${
                activeTab === tab
                  ? "text-anaruz-brown-dark border-b-2 border-anaruz-brown-dark"
                  : "text-anaruz-muted hover:text-anaruz-brown-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="font-sans text-[13px] leading-relaxed text-anaruz-muted space-y-4">
            {activeTab === "DESCRIPTION" && (
              <>
                <p>{meta.description}</p>
                <ul className="space-y-2 list-none">
                  {meta.details.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-anaruz-brown">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {activeTab === "DETAILS" && (
              <ul className="space-y-2">
                {meta.details.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            )}
            {activeTab === "SIZE & FIT" && (
              <p>
                Oversized boxy fit. We recommend ordering your usual size for the intended
                relaxed silhouette. Refer to our size guide for exact measurements.
              </p>
            )}
            {activeTab === "SHIPPING & RETURNS" && (
              <>
                <p>Standard shipping: 2–4 business days within Morocco.</p>
                <p>Free shipping on orders over 1,899 DH.</p>
                <p>Easy returns within 14 days of delivery.</p>
              </>
            )}
          </div>

          <div className="relative aspect-[4/3] max-h-[280px] lg:max-h-[320px] bg-anaruz-card overflow-hidden">
            <Image
              src={detailImage}
              alt={`${product.name} detail`}
              fill
              className="object-cover object-center product-photo"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Related products */}
      <section>
        <h2 className="section-title text-xl mb-8">YOU MAY ALSO LIKE</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

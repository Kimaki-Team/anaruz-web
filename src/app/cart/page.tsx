"use client";

import Link from "next/link";
import { ArrowLeft, Lock, Minus, Plus, RotateCcw, Headphones, Truck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductImage } from "@/components/ui/ProductImage";
import { ProductCard } from "@/components/ui/ProductCard";
import { useCart } from "@/lib/cart-context";
import { getFeaturedProducts } from "@/data/products";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

export default function CartPage() {
  const { items, removeItem, updateQuantity, itemCount } = useCart();
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const recommendations = getFeaturedProducts().slice(0, 6);

  return (
    <div className="container-anaruz pt-10 pb-16">
      <Breadcrumbs items={[{ label: "HOME", href: "/" }, { label: "CART" }]} />

      <div className="flex flex-wrap items-end justify-between gap-4 mt-6 mb-10">
        <div>
          <h1 className="section-title">YOUR CART ({itemCount})</h1>
          <p className="hero-body mt-2">Review your items and proceed to checkout.</p>
        </div>
        <Link
          href="/clothing"
          className="font-sans text-[10px] tracking-[0.15em] uppercase text-anaruz-brown-dark hover:text-anaruz-brown flex items-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={iconStroke.thin} />
          CONTINUE SHOPPING
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="py-16 text-center">
          <p className="hero-body mb-6">Your cart is empty.</p>
          <Link href="/clothing" className="section-link">
            START SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14">
          <div>
            <div className="hidden sm:grid grid-cols-[1fr_80px_120px_80px] gap-4 pb-3 border-b border-anaruz-border font-sans text-[10px] tracking-[0.15em] uppercase text-anaruz-muted">
              <span>PRODUCT</span>
              <span className="text-center">PRICE</span>
              <span className="text-center">QUANTITY</span>
              <span className="text-right">TOTAL</span>
            </div>

            <ul className="divide-y divide-anaruz-border">
              {items.map((item) => (
                <li
                  key={`${item.product.slug}-${item.size}-${item.color}`}
                  className="py-6 grid sm:grid-cols-[1fr_80px_120px_80px] gap-4 items-center"
                >
                  <div className="flex gap-4">
                    <div className="relative w-20 h-20 shrink-0 bg-anaruz-card">
                      <ProductImage type={item.product.imageType} alt={item.product.name} />
                    </div>
                    <div>
                      <p className="font-sans text-[11px] font-medium tracking-wide uppercase text-anaruz-brown-dark">
                        {item.product.name}
                      </p>
                      <p className="font-sans text-[10px] text-anaruz-muted mt-1">
                        SIZE: {item.size}
                      </p>
                      <p className="font-sans text-[10px] text-anaruz-muted">
                        COLOR: {item.color}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.slug, item.size, item.color)}
                        className="font-sans text-[10px] text-anaruz-muted underline mt-2 hover:text-anaruz-brown"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-center">{item.product.price} DH</p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.slug,
                          item.size,
                          item.color,
                          item.quantity - 1
                        )
                      }
                      className="w-7 h-7 border border-anaruz-border flex items-center justify-center hover:border-anaruz-brown"
                    >
                      <Minus className="w-3 h-3" strokeWidth={iconStroke.thin} />
                    </button>
                    <span className="font-sans text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.slug,
                          item.size,
                          item.color,
                          item.quantity + 1
                        )
                      }
                      className="w-7 h-7 border border-anaruz-border flex items-center justify-center hover:border-anaruz-brown"
                    >
                      <Plus className="w-3 h-3" strokeWidth={iconStroke.thin} />
                    </button>
                  </div>
                  <p className="font-sans text-sm font-semibold text-right">
                    {item.product.price * item.quantity} DH
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 border border-anaruz-border bg-anaruz-cream/50 flex items-center gap-4">
              <Truck className={`${iconCls.trustHero} text-anaruz-brown shrink-0`} strokeWidth={iconStroke.regular} />
              <div className="flex-1">
                <p className="font-sans text-[11px] font-medium text-anaruz-brown-dark">
                  Congratulations! You are eligible for free shipping.
                </p>
                <div className="mt-2 h-1.5 bg-anaruz-border rounded-full overflow-hidden">
                  <div className="h-full bg-anaruz-brown w-[85%]" />
                </div>
              </div>
              <span className="font-sans text-[10px] text-anaruz-muted whitespace-nowrap">
                Spend 251 DH more
              </span>
            </div>
          </div>

          <aside>
            <div className="border border-anaruz-border p-6 sticky top-28">
              <h2 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
                ORDER SUMMARY
              </h2>
              <div className="space-y-3 font-sans text-[12px]">
                <div className="flex justify-between text-anaruz-muted">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>{subtotal} DH</span>
                </div>
                <div className="flex justify-between text-anaruz-muted">
                  <span>Shipping</span>
                  <span className="text-green-700 font-medium">FREE</span>
                </div>
                <p className="text-[10px] text-anaruz-muted">Standard Shipping 2-4 business days</p>
              </div>
              <div className="border-t border-anaruz-border mt-4 pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="font-sans text-sm font-semibold uppercase">Total</span>
                  <span className="font-sans text-xl font-bold">{subtotal} DH</span>
                </div>
                <p className="font-sans text-[10px] text-anaruz-muted mt-1">Taxes included</p>
              </div>
              <button
                type="button"
                className="w-full mt-6 bg-anaruz-brown text-white font-sans text-[11px] tracking-[0.15em] uppercase py-4 hover:bg-anaruz-brown-dark flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" strokeWidth={iconStroke.thin} />
                PROCEED TO CHECKOUT
              </button>
              <button
                type="button"
                className="w-full mt-3 border border-anaruz-border py-3 font-sans text-[11px] tracking-wide"
              >
                Buy with Apple Pay
              </button>
              <div className="mt-6 space-y-4 pt-4 border-t border-anaruz-border">
                {[
                  { icon: Lock, title: "SECURE PAYMENT", sub: "100% encrypted" },
                  { icon: RotateCcw, title: "EASY RETURNS", sub: "14-day return policy" },
                  { icon: Headphones, title: "CUSTOMER SUPPORT", sub: "support@anaruz.com" },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-black shrink-0 mt-0.5" strokeWidth={iconStroke.thin} />
                    <div>
                      <p className="font-sans text-[10px] font-semibold tracking-[0.08em] uppercase">{title}</p>
                      <p className="font-sans text-[10px] text-anaruz-muted">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}

      <section className="mt-20 pt-12 border-t border-anaruz-border">
        <div className="flex items-end justify-between mb-8">
          <h2 className="section-title text-xl">YOU MAY ALSO LIKE</h2>
          <Link href="/new-in" className="section-link">
            VIEW ALL
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {recommendations.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

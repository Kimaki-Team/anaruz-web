import { PageHero } from "@/components/layout/PageHero";
import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ProductGridToolbar } from "@/components/shop/ProductGridToolbar";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const clothingCategories = [
  { label: "T-Shirts", href: "/clothing?cat=tops" },
  { label: "Hoodies & Sweatshirts", href: "/clothing?cat=hoodies" },
  { label: "Jackets & Outerwear", href: "/clothing?cat=jackets" },
  { label: "Shirts", href: "/clothing?cat=shirts" },
  { label: "Sweatpants & Shorts", href: "/clothing?cat=bottoms" },
  { label: "Bottoms", href: "/clothing?cat=bottoms" },
  { label: "Sets", href: "/clothing?cat=sets" },
];

export default function ClothingPage() {
  const clothingProducts = products.filter((p) => p.category !== "accessories");

  return (
    <>
      <PageHero
        title="CLOTHING"
        subtitle="Premium streetwear built on heritage, crafted for today, designed to last."
        breadcrumb={[
          { label: "HOME", href: "/" },
          { label: "CLOTHING" },
        ]}
      />

      <div className="container-anaruz py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <ShopSidebar
            title="CATEGORIES"
            items={clothingCategories.map((c) => ({ label: c.label, href: c.href }))}
            activeHref="/clothing?cat=tops"
          />

          <div className="flex-1 min-w-0">
            <ProductGridToolbar count={clothingProducts.length} showFilters />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
              {clothingProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <button
              type="button"
              className="mt-10 w-full border border-anaruz-border py-4 font-sans text-[11px] tracking-[0.2em] uppercase text-anaruz-brown-dark hover:border-anaruz-brown transition-colors"
            >
              LOAD MORE ↓
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

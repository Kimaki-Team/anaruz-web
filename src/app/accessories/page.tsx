import { PageHero } from "@/components/layout/PageHero";
import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ProductGridToolbar } from "@/components/shop/ProductGridToolbar";
import { ProductCard } from "@/components/ui/ProductCard";
import { getAccessoriesProducts } from "@/data/products";

const accessoryCategories = [
  { label: "All Accessories", href: "/accessories" },
  { label: "Caps", href: "/accessories?cat=caps" },
  { label: "Bags", href: "/accessories?cat=bags" },
  { label: "Socks", href: "/accessories?cat=socks" },
  { label: "Belts", href: "/accessories?cat=belts" },
  { label: "Wallets", href: "/accessories?cat=wallets" },
  { label: "Jewelry", href: "/accessories?cat=jewelry" },
  { label: "Phone Cases", href: "/accessories?cat=phone-cases" },
  { label: "Other Accessories", href: "/accessories?cat=other" },
];

export default function AccessoriesPage() {
  const items = getAccessoriesProducts();

  return (
    <>
      <PageHero
        title="ACCESSORIES"
        subtitle="Details that complete the legacy. Premium accessories crafted with purpose, designed to elevate every fit."
        breadcrumb={[
          { label: "HOME", href: "/" },
          { label: "ACCESSORIES" },
        ]}
        cta={{ label: "SHOP ALL ACCESSORIES →", href: "/accessories" }}
      />

      <div className="container-anaruz py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <ShopSidebar
            title="CATEGORIES"
            items={accessoryCategories.map((c) => ({ label: c.label, href: c.href }))}
            activeHref="/accessories"
          />

          <div className="flex-1 min-w-0">
            <h2 className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-anaruz-brown-dark mb-4">
              ALL ACCESSORIES
            </h2>
            <ProductGridToolbar count={items.length} showFilters />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {items.map((p) => (
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

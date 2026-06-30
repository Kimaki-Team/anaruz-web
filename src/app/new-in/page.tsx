import { PageHero } from "@/components/layout/PageHero";
import { ShopSidebar } from "@/components/shop/ShopSidebar";
import { ProductGridToolbar } from "@/components/shop/ProductGridToolbar";
import { ProductCard } from "@/components/ui/ProductCard";
import { getNewProducts, products } from "@/data/products";

const newInCategories = [
  { label: "All New In", href: "/new-in", count: products.filter((p) => p.isNew).length },
  { label: "Hoodies", href: "/new-in?cat=hoodies", count: 2 },
  { label: "Tops", href: "/new-in?cat=tops", count: 1 },
  { label: "Bottoms", href: "/new-in?cat=bottoms", count: 0 },
  { label: "Accessories", href: "/new-in?cat=accessories", count: 0 },
];

export default function NewInPage() {
  const newProducts = getNewProducts();

  return (
    <>
      <PageHero
        title="NEW IN"
        subtitle="The latest drops from ANARUZ. Fresh designs, same heritage quality."
        breadcrumb={[
          { label: "HOME", href: "/" },
          { label: "NEW IN" },
        ]}
      />

      <div className="container-anaruz py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <ShopSidebar
            title="CATEGORIES"
            items={newInCategories.map((c) => ({
              label: c.label,
              href: c.href,
              count: c.count,
            }))}
            activeHref="/new-in"
          />

          <div className="flex-1 min-w-0">
            <ProductGridToolbar count={newProducts.length} showFilters />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
              {newProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

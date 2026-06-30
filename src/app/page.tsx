import Link from "next/link";
import { HomeHero } from "@/components/layout/HomeHero";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { shopCategories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <HomeHero />

      <section className="container-anaruz py-14 lg:py-20">
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <h2 className="section-title">SHOP BY CATEGORY</h2>
          <Link href="/clothing" className="section-link">
            VIEW ALL
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {shopCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      <section className="container-anaruz pb-16 lg:pb-24">
        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <h2 className="section-title">FEATURED PRODUCTS</h2>
          <Link href="/new-in" className="section-link">
            VIEW ALL
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { SearchFiltersSidebar } from "@/components/shop/SearchFiltersSidebar";
import { Pagination } from "@/components/shop/Pagination";
import { searchProducts } from "@/data/products";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

function SearchContent() {
  const params = useSearchParams();
  const router = useRouter();
  const initialQ = params.get("q") ?? "anaruz";
  const [query, setQuery] = useState(initialQ);
  const results = searchProducts(query);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="container-anaruz pt-10 pb-16">
      <h1 className="section-title mb-2">SEARCH RESULTS</h1>
      <p className="hero-body mb-8">Find what you&apos;re looking for.</p>

      <form onSubmit={handleSearch} className="relative mb-12 max-w-3xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full border border-anaruz-border bg-white/50 px-5 py-4 font-sans text-sm text-anaruz-brown-dark outline-none focus:border-anaruz-brown pr-12"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-anaruz-muted hover:text-anaruz-brown"
          aria-label="Search"
        >
          <Search className={iconCls.nav} strokeWidth={iconStroke.thin} />
        </button>
      </form>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        <SearchFiltersSidebar />

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-anaruz-border">
            <p className="font-sans text-[11px] text-anaruz-muted">
              Showing {results.length} results for &ldquo;{query}&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-anaruz-muted">
                SORT BY:
              </span>
              <select className="font-sans text-[10px] tracking-wider uppercase border border-anaruz-border bg-transparent px-3 py-1.5">
                <option>Best Match</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 lg:gap-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  );
}

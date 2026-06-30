"use client";

import { SidebarTrustBadges } from "@/components/ui/SidebarTrustBadges";

const categories = [
  { label: "All Categories", count: 12 },
  { label: "Tops", count: 4 },
  { label: "Hoodies", count: 2 },
  { label: "Bottoms", count: 2 },
  { label: "Accessories", count: 4 },
];

const sizes = [
  { label: "S", count: 3 },
  { label: "M", count: 6 },
  { label: "L", count: 6 },
  { label: "XL", count: 4 },
];

const colors = [
  { name: "Beige", hex: "#D4C4A8", count: 4 },
  { name: "Brown", hex: "#5C4033", count: 4 },
  { name: "Black", hex: "#1C1C1C", count: 3 },
  { name: "Sand", hex: "#C4A882", count: 2 },
];

export function SearchFiltersSidebar() {
  return (
    <aside className="lg:w-[240px] shrink-0 space-y-8">
      <div>
        <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-anaruz-brown-dark mb-4">
          CATEGORIES
        </h3>
        <ul className="space-y-1">
          {categories.map((cat, i) => (
            <li key={cat.label}>
              <button
                type="button"
                className={`w-full text-left font-sans text-[11px] py-2 px-3 ${
                  i === 0
                    ? "bg-anaruz-beige text-anaruz-brown-dark font-medium"
                    : "text-anaruz-muted hover:text-anaruz-brown-dark"
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-anaruz-brown-dark mb-4">
          FILTER BY
        </h3>
        <p className="font-sans text-[10px] font-semibold tracking-wider uppercase text-anaruz-muted mb-2">
          SIZE
        </p>
        <div className="space-y-2 mb-5">
          {sizes.map((s) => (
            <label key={s.label} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-anaruz-brown" />
              <span className="font-sans text-[11px] text-anaruz-muted">
                {s.label} ({s.count})
              </span>
            </label>
          ))}
        </div>
        <p className="font-sans text-[10px] font-semibold tracking-wider uppercase text-anaruz-muted mb-2">
          COLOR
        </p>
        <div className="space-y-2 mb-5">
          {colors.map((c) => (
            <label key={c.name} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-anaruz-brown" />
              <span
                className="w-3 h-3 rounded-full border border-anaruz-border"
                style={{ backgroundColor: c.hex }}
              />
              <span className="font-sans text-[11px] text-anaruz-muted">
                {c.name} ({c.count})
              </span>
            </label>
          ))}
        </div>
        <p className="font-sans text-[10px] font-semibold tracking-wider uppercase text-anaruz-muted mb-2">
          PRICE
        </p>
        <input type="range" min={249} max={999} defaultValue={999} className="w-full mb-1" />
        <div className="flex justify-between font-sans text-[10px] text-anaruz-muted">
          <span>249 DH</span>
          <span>999 DH</span>
        </div>
        <button
          type="button"
          className="mt-5 w-full bg-anaruz-brown text-white font-sans text-[10px] tracking-[0.15em] uppercase py-3 hover:bg-anaruz-brown-dark"
        >
          CLEAR FILTERS
        </button>
      </div>
    </aside>
  );
}

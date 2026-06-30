"use client";

import Link from "next/link";
import { SidebarTrustBadges } from "@/components/ui/SidebarTrustBadges";

type SidebarItem = { label: string; href: string; count?: number };

type ShopSidebarProps = {
  title: string;
  items: SidebarItem[];
  activeHref?: string;
};

export function ShopSidebar({ title, items, activeHref }: ShopSidebarProps) {
  return (
    <aside className="lg:w-[220px] shrink-0">
      <h3 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-anaruz-brown-dark mb-4">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item) => {
          const active = activeHref === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block font-sans text-[11px] tracking-wide py-2 px-3 transition-colors ${
                  active
                    ? "bg-anaruz-beige text-anaruz-brown-dark font-medium"
                    : "text-anaruz-muted hover:text-anaruz-brown-dark"
                }`}
              >
                {item.label}
                {item.count !== undefined && (
                  <span className="text-anaruz-muted"> ({item.count})</span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <SidebarTrustBadges />
    </aside>
  );
}

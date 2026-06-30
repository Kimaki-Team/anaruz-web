"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useCart } from "@/lib/cart-context";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

const navLinks = [
  { href: "/new-in", label: "NEW IN" },
  { href: "/clothing", label: "CLOTHING" },
  { href: "/accessories", label: "ACCESSORIES" },
  { href: "/about", label: "ABOUT US" },
];

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-anaruz-border/50">
      <div className="container-anaruz">
        <div className="flex items-center justify-between h-[88px]">
          <div className="min-w-[160px] shrink-0">
            <Logo size="sm" align="left" />
          </div>

          <nav className="hidden lg:flex items-center gap-10 xl:gap-12">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link font-bold transition-colors ${
                    active
                      ? "text-anaruz-brown-dark underline underline-offset-[10px]"
                      : "text-anaruz-brown-dark/80 hover:text-anaruz-brown-dark"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-8 w-[180px] shrink-0 justify-end">
            <Link href="/search" className="text-black hover:text-anaruz-brown transition-colors" aria-label="Search">
              <Search className={iconCls.nav} strokeWidth={iconStroke.thin} />
            </Link>
            <button type="button" className="text-black hover:text-anaruz-brown transition-colors" aria-label="Account">
              <User className={iconCls.nav} strokeWidth={iconStroke.thin} />
            </button>
            <Link href="/cart" className="relative text-black hover:text-anaruz-brown transition-colors" aria-label="Cart">
              <ShoppingBag className={iconCls.nav} strokeWidth={iconStroke.thin} />
              {mounted && itemCount > 0 && (
                <span className="absolute -top-2 -right-2.5 min-w-[15px] h-[15px] bg-anaruz-brown text-white text-[7px] font-semibold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

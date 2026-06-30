import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { StarIcon } from "@/components/ui/StarIcon";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  );
}

const shopLinks = [
  { href: "/new-in", label: "New In" },
  { href: "/clothing?cat=tops", label: "Tops" },
  { href: "/clothing?cat=hoodies", label: "Hoodies" },
  { href: "/clothing?cat=bottoms", label: "Bottoms" },
  { href: "/accessories", label: "Accessories" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about#size-guide", label: "Size Guide" },
  { href: "/about#shipping", label: "Shipping & Returns" },
  { href: "/about#terms", label: "Terms & Conditions" },
  { href: "/about#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-anaruz-brown text-anaruz-cream">
      <div className="container-anaruz py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div>
            <Logo size="md" />
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[11px] text-anaruz-cream/75 hover:text-anaruz-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-[11px] text-anaruz-cream/75 hover:text-anaruz-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-anaruz-cream/75 hover:text-anaruz-cream">
                <InstagramIcon className={iconCls.social} />
              </a>
              <a href="#" aria-label="TikTok" className="text-anaruz-cream/75 hover:text-anaruz-cream">
                <TikTokIcon className={iconCls.social} />
              </a>
              <a href="#" aria-label="YouTube" className="text-anaruz-cream/75 hover:text-anaruz-cream">
                <YouTubeIcon className={iconCls.social} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
              NEWSLETTER
            </h4>
            <p className="font-sans text-[11px] text-anaruz-cream/70 mb-4 leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex border border-anaruz-cream/25">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-3 py-2.5 font-sans text-[11px] text-anaruz-cream placeholder:text-anaruz-cream/40 outline-none"
              />
              <button
                type="submit"
                className="px-3 text-anaruz-cream/75 hover:text-anaruz-cream"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={iconStroke.thin} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-anaruz-cream/15">
        <div className="container-anaruz py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[10px] tracking-[0.12em] text-anaruz-cream/60 uppercase">
            © 2024 ANARUZ. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-anaruz-cream/60">
            <span className="font-sans text-[10px] tracking-[0.12em] uppercase">
              MADE WITH PRIDE
            </span>
            <StarIcon className="w-2.5 h-2.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

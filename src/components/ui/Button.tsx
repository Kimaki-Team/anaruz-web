import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 bg-anaruz-brown text-white font-sans text-[11px] font-medium tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-anaruz-brown-dark transition-colors"
    >
      {children}
      <ArrowRight className={iconCls.heart} strokeWidth={iconStroke.thin} />
    </Link>
  );
}

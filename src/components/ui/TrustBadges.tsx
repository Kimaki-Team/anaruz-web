import { ShieldCheck, Star, Truck } from "lucide-react";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

const badges = [
  {
    icon: ShieldCheck,
    title: "PREMIUM QUALITY",
    subtitle: "Built to last",
  },
  {
    icon: Star,
    title: "UNIQUE DESIGNS",
    subtitle: "Heritage inspired",
  },
  {
    icon: Truck,
    title: "SECURE SHIPPING",
    subtitle: "Fast & reliable",
  },
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
      {badges.map(({ icon: Icon, title, subtitle }) => (
        <div
          key={title}
          className="trust-box flex items-center gap-4 px-5 py-4 lg:px-6 lg:py-5"
        >
          <Icon
            className={`${iconCls.trustHero} text-black shrink-0`}
            strokeWidth={iconStroke.regular}
          />
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.06em] uppercase text-black leading-tight">
              {title}
            </p>
            <p className="font-sans text-[10px] text-anaruz-muted mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

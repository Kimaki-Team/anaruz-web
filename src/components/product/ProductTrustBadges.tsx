import { ShieldCheck, Lock, Truck } from "lucide-react";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

const badges = [
  { icon: ShieldCheck, title: "PREMIUM QUALITY", sub: "Built to last" },
  { icon: Lock, title: "SECURE PAYMENT", sub: "100% encrypted" },
  { icon: Truck, title: "FAST SHIPPING", sub: "2-4 business days" },
];

export function ProductTrustBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-anaruz-border mt-6">
      {badges.map(({ icon: Icon, title, sub }) => (
        <div key={title} className="flex items-start gap-3">
          <Icon
            className={`${iconCls.trustHero} text-black shrink-0 mt-0.5`}
            strokeWidth={iconStroke.thin}
          />
          <div>
            <p className="font-sans text-[9px] font-semibold tracking-[0.08em] uppercase text-black leading-tight">
              {title}
            </p>
            <p className="font-sans text-[9px] text-anaruz-muted mt-0.5">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

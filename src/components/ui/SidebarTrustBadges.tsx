import { ShieldCheck, Star, Truck } from "lucide-react";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

export function SidebarTrustBadges() {
  const badges = [
    { icon: ShieldCheck, title: "PREMIUM QUALITY", sub: "Built to last" },
    { icon: Star, title: "UNIQUE DESIGNS", sub: "Heritage inspired" },
    { icon: Truck, title: "SECURE SHIPPING", sub: "Fast & reliable" },
  ];

  return (
    <div className="space-y-4 pt-6 border-t border-anaruz-border mt-6">
      {badges.map(({ icon: Icon, title, sub }) => (
        <div key={title} className="flex items-start gap-3">
          <Icon className={`${iconCls.trustHero} text-black shrink-0`} strokeWidth={iconStroke.regular} />
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.08em] uppercase text-black">
              {title}
            </p>
            <p className="font-sans text-[10px] text-anaruz-muted">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";
import { StarIcon, CompassRose } from "@/components/ui/StarIcon";
import { HeroBackground } from "@/components/layout/HeroBackground";
import { ShieldCheck, Truck, Lock, Hexagon, Star } from "lucide-react";
import { ABOUT_GALLERY } from "@/lib/images";
import { iconCls, iconStroke } from "@/lib/icon-tokens";

const values = [
  { title: "Identity (Lhowiya)", Icon: Hexagon },
  { title: "Hope (L'Amal)", Icon: Star },
  { title: "Quality (Ljawda)", Icon: ShieldCheck },
  { title: "Authenticity (L2asala)", Icon: CompassRose },
  { title: "Creativity (Libda3)", Icon: Star },
];

const footerBadges = [
  { icon: ShieldCheck, title: "PREMIUM QUALITY", sub: "Built to last" },
  { icon: Truck, title: "SECURE SHIPPING", sub: "Fast & reliable" },
  { icon: Lock, title: "SECURE PAYMENT", sub: "100% encrypted" },
  { icon: Hexagon, title: "MADE WITH PRIDE", sub: "From Morocco to the world" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — full-width image with story text on the left */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] overflow-hidden">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-r from-background from-0% via-background/92 via-[42%] to-transparent to-[65%] pointer-events-none" />

        <div className="relative z-10 container-anaruz py-10 sm:py-12 lg:py-16">
          <div className="max-w-[420px]">
            <h1 className="section-title text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] mb-5">
              ABOUT US
            </h1>
            <StarIcon className="w-3 h-3 text-anaruz-brown mb-4" />
            <p className="font-sans text-[10px] font-medium tracking-[0.28em] uppercase text-anaruz-muted mb-5">
              OUR STORY
            </p>
            <div className="space-y-4 font-sans text-[13px] leading-[1.85] text-anaruz-muted">
              <p>
                ANARUZ hiya brand d streetwear premium li katji mn lhowiya w
                l&apos;identité dyalna. Kanbnu designs li kaytla9 bin tradition w
                modern style. Kol piece katwri story —
              </p>
              <p className="font-semibold text-anaruz-brown-dark">
                n7afdo 3la lhowiya dyalna w n3tiwha ro7 jdida b style streetwear
                3asri.
              </p>
              <p>
                From the mountains to the streets, we build pieces that tell a
                story. Heritage • Identity • Strength — hadchi li kaymthln.
              </p>
            </div>
            <p className="font-serif italic text-anaruz-brown text-xl mt-8 tracking-wide">
              ANARUZ
            </p>
          </div>
        </div>
      </section>

      {/* Mission · Vision · Values */}
      <section className="bg-background border-y border-anaruz-border">
        <div className="container-anaruz py-14 lg:py-16">
          <div className="grid md:grid-cols-3 gap-10 md:gap-0">
            <div className="md:pr-10 lg:pr-14 md:border-r border-anaruz-border">
              <StarIcon className="w-3 h-3 text-anaruz-brown mb-5" />
              <h2 className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-anaruz-brown-dark mb-5">
                OUR MISSION
              </h2>
              <p className="font-sans text-[13px] leading-relaxed text-anaruz-muted mb-4">
                Kan3tiw design li kaytla9 bin heritage w modern style, w kan7afdo
                3la lquality f kol piece.
              </p>
              <ul className="space-y-2 font-sans text-[13px] text-anaruz-muted">
                <li>• Lhowiya lmaghribiya</li>
                <li>• Lcomfort w lquality</li>
                <li>• Design unique kayban</li>
              </ul>
            </div>

            <div className="md:px-10 lg:px-14 md:border-r border-anaruz-border">
              <StarIcon className="w-3 h-3 text-anaruz-brown mb-5" />
              <h2 className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-anaruz-brown-dark mb-5">
                OUR VISION
              </h2>
              <p className="font-sans text-[13px] leading-relaxed text-anaruz-muted">
                Nbdew brand li kaywsl l&apos;world mn Morocco, w kaykhli kol wahed
                y7ess b lhowiya dylou. Streetwear li kayb9a, li kayt7akam f design.
              </p>
            </div>

            <div className="md:pl-10 lg:pl-14">
              <StarIcon className="w-3 h-3 text-anaruz-brown mb-5" />
              <h2 className="font-sans text-[11px] font-semibold tracking-[0.22em] uppercase text-anaruz-brown-dark mb-5">
                OUR VALUES
              </h2>
              <ul className="space-y-3">
                {values.map(({ title, Icon }) => (
                  <li key={title} className="flex items-center gap-3">
                    {Icon === CompassRose ? (
                      <CompassRose className="w-4 h-4 text-anaruz-brown shrink-0" />
                    ) : (
                      <Icon
                        className="w-4 h-4 text-anaruz-brown shrink-0"
                        strokeWidth={iconStroke.thin}
                      />
                    )}
                    <span className="font-sans text-[12px] text-anaruz-brown-dark">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery row — 5 panels, center is brand statement */}
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
          {[0, 1].map((i) => (
            <div key={i} className="relative aspect-[4/5] md:aspect-[3/4] bg-anaruz-card overflow-hidden">
              <Image
                src={ABOUT_GALLERY[i]}
                alt={`ANARUZ gallery ${i + 1}`}
                fill
                className="object-cover product-photo"
                sizes="20vw"
              />
            </div>
          ))}

          <div className="relative aspect-[4/5] md:aspect-[3/4] bg-anaruz-brown flex flex-col items-center justify-center text-center px-6 py-8 col-span-2 md:col-span-1">
            <span className="font-serif text-lg tracking-[0.35em] uppercase text-anaruz-cream leading-none">
              ANÁRUZ
            </span>
            <StarIcon className="w-3 h-3 text-anaruz-cream/90 mt-2 mb-5" />
            <CompassRose className="w-10 h-10 text-anaruz-cream/70 mb-5" />
            <p className="font-sans text-[9px] sm:text-[10px] font-medium tracking-[0.18em] uppercase text-anaruz-cream/90 leading-relaxed">
              BUILT ON HERITAGE.
              <br />
              DRIVEN BY IDENTITY.
              <br />
              MADE FOR THE BOLD.
            </p>
          </div>

          {[3, 4].map((i) => (
            <div key={i} className="relative aspect-[4/5] md:aspect-[3/4] bg-anaruz-card overflow-hidden">
              <Image
                src={ABOUT_GALLERY[i]}
                alt={`ANARUZ gallery ${i + 1}`}
                fill
                className="object-cover product-photo"
                sizes="20vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-anaruz-border bg-anaruz-cream/30">
        <div className="container-anaruz py-8 lg:py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {footerBadges.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-4">
              <Icon
                className={`${iconCls.trustHero} text-black shrink-0`}
                strokeWidth={iconStroke.regular}
              />
              <div>
                <p className="font-sans text-[10px] font-semibold tracking-[0.08em] uppercase text-black">
                  {title}
                </p>
                <p className="font-sans text-[10px] text-anaruz-muted mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

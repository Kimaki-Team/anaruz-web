import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { CompassRose } from "@/components/ui/StarIcon";
import { HeroBackground } from "./HeroBackground";

export function HomeHero() {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] overflow-hidden">
      <HeroBackground />

      <div className="absolute inset-0 bg-gradient-to-r from-background from-0% via-background/88 via-[36%] to-transparent to-[58%] pointer-events-none" />

      <div className="absolute right-[5%] top-[40%] -translate-y-1/2 text-anaruz-brown/[0.06] hidden xl:block pointer-events-none">
        <CompassRose className="w-[280px] h-[280px]" />
      </div>

      <div className="relative z-10 container-anaruz pt-10 sm:pt-12 lg:pt-14 pb-10 lg:pb-14">
        <p className="hero-tagline mb-4">HERITAGE • IDENTITY • STRENGTH</p>
        <h1 className="hero-headline">
          BUILT DIFFERENT
          <br />
          WORN PROUD
        </h1>
        <p className="hero-body mt-4 max-w-[340px]">
          Premium streetwear inspired by our roots. Made to stand out, built to last.
        </p>
        <div className="mt-6 lg:mt-8">
          <Button href="/clothing">SHOP THE COLLECTION</Button>
        </div>
        <div className="mt-8 lg:mt-10 max-w-[960px]">
          <TrustBadges />
        </div>
      </div>
    </section>
  );
}

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroBackground } from "@/components/layout/HeroBackground";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
  cta?: { label: string; href: string };
};

export function PageHero({ title, subtitle, breadcrumb, cta }: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[380px] lg:min-h-[420px] overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 via-[40%] to-transparent pointer-events-none" />
      <div className="relative z-10 container-anaruz pt-10 lg:pt-12 pb-14 flex flex-col justify-center min-h-[inherit]">
        <Breadcrumbs items={breadcrumb} />
        <h1 className="hero-headline mt-4">{title}</h1>
        {subtitle && <p className="hero-body mt-3 max-w-md">{subtitle}</p>}
        {cta && (
          <a
            href={cta.href}
            className="inline-flex mt-6 bg-anaruz-brown text-white font-sans text-[11px] font-medium tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-anaruz-brown-dark w-fit"
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}

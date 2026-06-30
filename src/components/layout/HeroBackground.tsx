"use client";

import Image from "next/image";
import { IMAGES, IMAGE_QUALITY } from "@/lib/images";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-anaruz-card">
      <div className="hero-bg-animate absolute inset-0">
        <Image
          src={IMAGES.heroPanorama}
          alt="ANARUZ models in mountain landscape"
          fill
          priority
          unoptimized
          quality={IMAGE_QUALITY.hero}
          className="object-cover object-right select-none"
          sizes="100vw"
          draggable={false}
        />
      </div>
    </div>
  );
}

export const IMAGE_QUALITY = {
  hero: 100,
  product: 95,
  category: 95,
} as const;

export const IMAGES = {
  hero: "/images/IMG_3454.png",
  heroPanorama: "/images/hero-panorama.png",
} as const;

/** Placeholder photos from Unsplash */
export const PRODUCT_PHOTOS = {
  hoodie:
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&q=90",
  jersey:
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&q=90",
  tee: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop&q=90",
  pants:
    "https://images.unsplash.com/photo-1473966968600-fa801b869a8a?w=800&h=800&fit=crop&q=90",
  flannel:
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop&q=90",
  jacket:
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop&q=90",
  set: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop&q=90",
  cap: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop&q=90",
  bag: "https://images.unsplash.com/photo-1590874103328-eac915979575?w=800&h=800&fit=crop&q=90",
  accessory:
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop&q=90",
  socks:
    "https://images.unsplash.com/photo-1586350977777-b7600014cbad?w=800&h=800&fit=crop&q=90",
  belt: "https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=800&h=800&fit=crop&q=90",
  wallet:
    "https://images.unsplash.com/photo-1627123424574-10b9956e6458?w=800&h=800&fit=crop&q=90",
  necklace:
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop&q=90",
} as const;

export const CATEGORY_PHOTOS = {
  tops: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&q=90",
  hoodies:
    "https://images.unsplash.com/photo-1578587018453-892b19980379?w=800&h=1000&fit=crop&q=90",
  bottoms:
    "https://images.unsplash.com/photo-1473966968600-fa801b869a8a?w=800&h=1000&fit=crop&q=90",
  accessories:
    "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=1000&fit=crop&q=90",
} as const;

export const ABOUT_GALLERY = [
  "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=400&fit=crop&q=90",
  "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&h=400&fit=crop&q=90",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop&q=90",
  "https://images.unsplash.com/photo-1452860606245-08befc0ff4b9?w=600&h=400&fit=crop&q=90",
  "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop&q=90",
] as const;

export function getProductPhoto(type: string): string {
  return (
    PRODUCT_PHOTOS[type as keyof typeof PRODUCT_PHOTOS] ?? PRODUCT_PHOTOS.hoodie
  );
}

const GALLERY_VARIANTS: Record<string, string[]> = {
  hoodie: [
    PRODUCT_PHOTOS.hoodie,
    "https://images.unsplash.com/photo-1578587018453-892b19980379?w=800&h=800&fit=crop&q=90",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&sat=-20&q=90",
    "https://images.unsplash.com/photo-1578587018453-892b19980379?w=800&h=800&fit=crop&crop=entropy&q=90",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop&crop=top&q=90",
    "https://images.unsplash.com/photo-1578587018453-892b19980379?w=800&h=800&fit=crop&crop=bottom&q=90",
  ],
  flannel: [
    PRODUCT_PHOTOS.flannel,
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop&q=90",
    PRODUCT_PHOTOS.jacket,
    PRODUCT_PHOTOS.flannel,
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop&crop=entropy&q=90",
    PRODUCT_PHOTOS.set,
  ],
};

export function getProductGallery(type: string): string[] {
  const gallery = GALLERY_VARIANTS[type];
  if (gallery) return gallery;
  const base = getProductPhoto(type);
  return Array.from({ length: 6 }, () => base);
}

export function isRemoteImage(src: string): boolean {
  return src.startsWith("http");
}

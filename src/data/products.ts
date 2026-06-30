import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "anaruz-heritage-jersey",
    name: "ANARUZ HERITAGE JERSEY",
    price: 599,
    category: "tops",
    colors: [
      { name: "Black", hex: "#1C1C1C" },
      { name: "Beige", hex: "#D4C4A8" },
    ],
    sizes: ["S", "M", "L", "XL"],
    imageType: "jersey",
  },
  {
    id: "2",
    slug: "heritage-flannel-set-brown",
    name: "FLANNEL SET - BROWN",
    price: 999,
    category: "clothing",
    colors: [{ name: "Brown", hex: "#5C4033" }],
    sizes: ["S", "M", "L", "XL"],
    imageType: "flannel",
  },
  {
    id: "3",
    slug: "zipper-hoodie-sand-mocha",
    name: "ZIPPER HOODIE - SAND/MOCHA",
    price: 899,
    category: "hoodies",
    colors: [
      { name: "Sand/Mocha", hex: "#C4A882" },
      { name: "Brown", hex: "#5C4033" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    rating: 4,
    reviewCount: 32,
    imageType: "hoodie",
    subcategory: "hoodies",
    description:
      "Inspired by the rugged landscapes and rich heritage of our roots, the Zipper Hoodie blends premium craftsmanship with bold streetwear design. The curved color-block panel and embossed sleeve details make this piece unmistakably ANARUZ.",
    details: [
      "Premium heavyweight cotton fleece (460GSM)",
      "Oversized boxy fit",
      "YKK metal zipper",
      "Embroidered ANARUZ logo on chest",
      "Heritage-inspired patterned trim on sleeves",
      "Ribbed cuffs and hem",
    ],
  },
  {
    id: "4",
    slug: "woven-sweatpants-sand",
    name: "WOVEN SWEATPANTS - SAND",
    price: 749,
    category: "bottoms",
    colors: [{ name: "Sand", hex: "#C4A882" }],
    sizes: ["S", "M", "L", "XL", "XXL"],
    imageType: "pants",
  },
  {
    id: "5",
    slug: "embroidered-tee-beige",
    name: "EMBROIDERED TEE - BEIGE",
    price: 399,
    category: "tops",
    colors: [
      { name: "Beige", hex: "#D4C4A8" },
      { name: "Black", hex: "#1C1C1C" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    imageType: "tee",
  },
  {
    id: "6",
    slug: "suede-cap-beige",
    name: "SUEDE CAP - BEIGE",
    price: 249,
    category: "accessories",
    colors: [
      { name: "Beige", hex: "#D4C4A8" },
      { name: "Brown", hex: "#5C4033" },
    ],
    sizes: ["ONE SIZE"],
    imageType: "cap",
  },
  {
    id: "7",
    slug: "heritage-tee-black",
    name: "HERITAGE TEE - BLACK",
    price: 349,
    category: "tops",
    colors: [
      { name: "Black", hex: "#1C1C1C" },
      { name: "Beige", hex: "#D4C4A8" },
    ],
    sizes: ["S", "M", "L", "XL"],
    imageType: "tee",
  },
  {
    id: "8",
    slug: "oversized-hoodie-mocha",
    name: "OVERSIZED HOODIE - MOCHA",
    price: 799,
    category: "hoodies",
    colors: [{ name: "Mocha", hex: "#5C4033" }],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    imageType: "hoodie",
  },
  {
    id: "9",
    slug: "cargo-pants-black",
    name: "CARGO PANTS - BLACK",
    price: 699,
    category: "bottoms",
    colors: [{ name: "Black", hex: "#1C1C1C" }],
    sizes: ["S", "M", "L", "XL"],
    imageType: "pants",
  },
  {
    id: "10",
    slug: "heritage-tote-bag",
    name: "HERITAGE TOTE BAG",
    price: 399,
    category: "accessories",
    colors: [{ name: "Beige", hex: "#D4C4A8" }],
    sizes: ["ONE SIZE"],
    imageType: "bag",
  },
  {
    id: "11",
    slug: "logo-socks-pack",
    name: "LOGO SOCKS - 3 PACK",
    price: 149,
    category: "accessories",
    colors: [
      { name: "Beige", hex: "#D4C4A8" },
      { name: "Black", hex: "#1C1C1C" },
    ],
    sizes: ["S", "M", "L"],
    imageType: "socks",
  },
  {
    id: "12",
    slug: "leather-belt-brown",
    name: "LEATHER BELT - BROWN",
    price: 299,
    category: "accessories",
    colors: [{ name: "Brown", hex: "#5C4033" }],
    sizes: ["S", "M", "L"],
    imageType: "belt",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 6);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getAccessoriesProducts(): Product[] {
  return products.filter((p) => p.category === "accessories");
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q || q === "anaruz") return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.slug.includes(q)
  );
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

const DEFAULT_DESCRIPTION =
  "Premium streetwear inspired by our roots. Crafted with care, built to last, and designed to stand out.";

const DEFAULT_DETAILS = [
  "Premium quality materials",
  "Heritage-inspired design",
  "Comfortable everyday fit",
  "ANARUZ embroidered branding",
];

export function getProductMeta(product: Product) {
  return {
    description: product.description ?? DEFAULT_DESCRIPTION,
    details: product.details ?? DEFAULT_DETAILS,
    rating: product.rating ?? 4,
    reviewCount: product.reviewCount ?? 24,
  };
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.slug !== product.slug).slice(0, limit);
}

export function getProductBreadcrumbs(product: Product) {
  const crumbs: { label: string; href?: string }[] = [
    { label: "HOME", href: "/" },
  ];

  if (product.category === "accessories") {
    crumbs.push({ label: "ACCESSORIES", href: "/accessories" });
  } else {
    crumbs.push({ label: "CLOTHING", href: "/clothing" });
    const sub = product.subcategory ?? product.category;
    if (sub === "hoodies") crumbs.push({ label: "HOODIES", href: "/clothing?cat=hoodies" });
    else if (sub === "tops") crumbs.push({ label: "TOPS", href: "/clothing?cat=tops" });
    else if (sub === "bottoms") crumbs.push({ label: "BOTTOMS", href: "/clothing?cat=bottoms" });
  }

  crumbs.push({ label: product.name });
  return crumbs;
}

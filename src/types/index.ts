export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  subcategory?: string;
  colors: ProductColor[];
  sizes: string[];
  isNew?: boolean;
  rating?: number;
  reviewCount?: number;
  description?: string;
  details?: string[];
  imageType:
    | "hoodie"
    | "jersey"
    | "pants"
    | "cap"
    | "tee"
    | "flannel"
    | "jacket"
    | "set"
    | "bag"
    | "accessory"
    | "socks"
    | "belt"
    | "wallet"
    | "necklace";
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type CartItem = {
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { CartItem, Product } from "@/types";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (product: Product, size: string, color: string) => void;
  removeItem: (slug: string, size: string, color: string) => void;
  updateQuantity: (slug: string, size: string, color: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("anaruz-cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("anaruz-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size: string, color: string) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.product.slug === product.slug &&
          i.size === size &&
          i.color === color
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, size, color, quantity: 1 }];
    });
  };

  const removeItem = (slug: string, size: string, color: string) => {
    setItems((prev) =>
      prev.filter(
        (i) =>
          !(i.product.slug === slug && i.size === size && i.color === color)
      )
    );
  };

  const updateQuantity = (
    slug: string,
    size: string,
    color: string,
    quantity: number
  ) => {
    if (quantity < 1) {
      removeItem(slug, size, color);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.slug === slug && i.size === size && i.color === color
          ? { ...i, quantity }
          : i
      )
    );
  };

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, itemCount, addItem, removeItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

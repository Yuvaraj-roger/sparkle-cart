import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem, Product } from "../types";

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string, size?: string, color?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  lastAdded: Product | null;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "sparklecart_cart_v1";
const WISHLIST_KEY = "sparklecart_wishlist_v1";

const keyFor = (id: string, size?: string, color?: string) => `${id}__${size ?? ""}__${color ?? ""}`;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(WISHLIST_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });
  const [lastAdded, setLastAdded] = useState<Product | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Real-time persistence: every cart change is written straight to storage,
  // so the badge/totals stay in sync instantly across the whole app.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart: CartContextValue["addToCart"] = (product, quantity = 1, size, color) => {
    setItems((prev) => {
      const k = keyFor(product.id, size, color);
      const existing = prev.find((i) => keyFor(i.product.id, i.size, i.color) === k);
      if (existing) {
        return prev.map((i) =>
          keyFor(i.product.id, i.size, i.color) === k ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity, size, color }];
    });
    setLastAdded(product);
    setIsDrawerOpen(true);
  };

  const removeFromCart: CartContextValue["removeFromCart"] = (productId, size, color) => {
    const k = keyFor(productId, size, color);
    setItems((prev) => prev.filter((i) => keyFor(i.product.id, i.size, i.color) !== k));
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (productId, quantity, size, color) => {
    const k = keyFor(productId, size, color);
    setItems((prev) =>
      prev
        .map((i) => (keyFor(i.product.id, i.size, i.color) === k ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]));
  };

  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const totalPrice = useMemo(() => items.reduce((sum, i) => sum + i.quantity * i.product.price, 0), [items]);

  const value: CartContextValue = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    lastAdded,
    wishlist,
    toggleWishlist,
    isDrawerOpen,
    openDrawer: () => setIsDrawerOpen(true),
    closeDrawer: () => setIsDrawerOpen(false)
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

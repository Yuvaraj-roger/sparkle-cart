export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  image: string;
  gallery?: string[];
  rating: number;
  reviews: number;
  stock: number;
  isFlashDeal?: boolean;
  dealEndsAt?: number; // epoch ms, used for real-time countdown
  badge?: string;
  description: string;
  colors?: string[];
  sizes?: string[];
}

export type Category =
  | "Shirts"
  | "Pants"
  | "Trousers"
  | "Shoes"
  | "Jackets"
  | "Accessories";

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface LiveActivity {
  id: string;
  name: string;
  city: string;
  productName: string;
  timestamp: number;
}

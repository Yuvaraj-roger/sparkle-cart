import { Product } from "../types";



// Using Picsum's seeded photo service so every image URL always resolves
// (no broken links) while giving each product a distinct, stable photo.
// Swap `img()` for your real product photography URLs when you go live.
const img = (seed: string, w = 600, h = 750) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const now = Date.now();

export const products: Product[] = [
  {
    id: "sh-001",
    name: "Classic Oxford Cotton Shirt",
    category: "Shirts",
    price: 29.99,
    originalPrice: 39.99,
    image: "/images/shirt1.webp",
    gallery: [img("sparkle-shirt-1"), img("sparkle-shirt-1b"), img("sparkle-shirt-1c")],
    rating: 4.5,
    reviews: 312,
    stock: 42,
    isFlashDeal: true,
    dealEndsAt: now + 1000 * 60 * 60 * 5,
    badge: "Best Seller",
    description:
      "A breathable 100% cotton oxford shirt tailored for an everyday clean look. Pairs perfectly with chinos or denim.",
    colors: ["#1f3a5f", "#ffffff", "#3a3a3a"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "sh-002",
    name: "Slim Fit Linen Shirt",
    category: "Shirts",
    price: 29.5,
    originalPrice: 45.0,
    image: "/images/shirt2.webp",
    rating: 4.3,
    reviews: 158,
    stock: 27,
    badge: "New",
    description: "Lightweight linen blend shirt, ideal for warm weather with a relaxed slim silhouette.",
    colors: ["#e8dcc8", "#7a9e9f", "#26313c"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "sh-003",
    name: "Flannel Check Shirt",
    category: "Shirts",
    price: 21.0,
    image: "/images/shirt3.webp",
    rating: 4.1,
    reviews: 94,
    stock: 60,
    description: "Soft brushed flannel with a classic check pattern for cooler days.",
    colors: ["#7a2e2e", "#2e3d2f"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "sh-004",
    name: "Denim Casual Shirt",
    category: "Shirts",
    price: 27.75,
    originalPrice: 34.0,
    image: "/images/shirt4.webp",
    rating: 4.6,
    reviews: 221,
    stock: 15,
    isFlashDeal: true,
    dealEndsAt: now + 1000 * 60 * 60 * 2,
    description: "Rugged denim shirt with reinforced stitching and chest pockets.",
    colors: ["#3b5a7a", "#22314a"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "pt-001",
    name: "Baggy Jeans",
    category: "Pants",
    price: 30.0,
    originalPrice: 48.0,
    image: "/images/pant1.webp",
    rating: 4.4,
    reviews: 187,
    stock: 38,
    badge: "Top Rated",
    description: "Comfort-stretch chino pants with a modern tapered leg and clean finish.",
    colors: ["#2b2b2b", "#a08a68", "#3f4b3a"],
    sizes: ["30", "32", "34", "36", "38"]
  },
  {
    id: "pt-002",
    name: "Cargo Pants",
    category: "Pants",
    price: 26.4,
    image: "/images/pant2.webp",
    rating: 4.2,
    reviews: 133,
    stock: 51,
    description: "Everyday jogger pants with an elasticated cuff and drawstring waist.",
    colors: ["#1e1e1e", "#5c5c5c"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "pt-003",
    name: "Straight-Fit Pants",
    category: "Pants",
    price: 30,
    originalPrice: 800,
    image: "/images/pant3.webp",
    rating: 4.5,
    reviews: 201,
    stock: 22,
    isFlashDeal: true,
    dealEndsAt: now + 1000 * 60 * 60 * 8,
    description: "Durable cargo pants with multiple pockets, built for all-day movement.",
    colors: ["#5a5a42", "#333333"],
    sizes: ["30", "32", "34", "36"]
  },
    {
    id: "pt-004",
    name: "Formal Pants",
    category: "Pants",
    price: 30,
    originalPrice: 800,
    image: "/images/pant4.webp",
    rating: 4.5,
    reviews: 201,
    stock: 22,
    isFlashDeal: true,
    dealEndsAt: now + 1000 * 60 * 60 * 8,
    description: "Durable cargo pants with multiple pockets, built for all-day movement.",
    colors: ["#5a5a42", "#333333"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: "tr-001",
    name: "Formal Wool-Blend Trousers",
    category: "Trousers",
    price: 39.0,
    originalPrice: 59.0,
    image: "/images/trouser1.webp",
    rating: 4.7,
    reviews: 96,
    stock: 18,
    badge: "Premium",
    description: "Sharp, tailored trousers in a wool blend for office and formal occasions.",
    colors: ["#1c1c1c", "#3a3f4d"],
    sizes: ["30", "32", "34", "36", "38"]
  },
  {
    id: "tr-002",
    name: "Pleated Wide-Leg Trousers",
    category: "Trousers",
    price: 36.25,
    image: "/images/trouser2.webp",
    rating: 4.0,
    reviews: 64,
    stock: 30,
    description: "Relaxed wide-leg trousers with front pleats for a refined, comfortable drape.",
    colors: ["#6e6a5e", "#20232b"],
    sizes: ["S", "M", "L"]
  },
  {
    id: "tr-003",
    name: "Stretch Comfort Trousers",
    category: "Trousers",
    price: 28.6,
    originalPrice: 38.0,
    image: "/images/trouser3.webp",
    rating: 4.3,
    reviews: 112,
    stock: 45,
    description: "Four-way stretch fabric trousers designed for long, active days.",
    colors: ["#28313a", "#4b4b4b"],
    sizes: ["30", "32", "34", "36"]
  },
    {
    id: "tr-004",
    name: "loose fit trousers",
    category: "Trousers",
    price: 28.6,
    originalPrice: 38.0,
    image: "/images/trouser4.webp",
    rating: 4.3,
    reviews: 112,
    stock: 45,
    description: "Four-way stretch fabric trousers designed for long, active days.",
    colors: ["#28313a", "#4b4b4b"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: "sn-001",
    name: "Urban Runner Sneakers",
    category: "Shoes",
    price: 54.99,
    originalPrice: 79.99,
    image: "/images/sneakers1.webp",
    rating: 4.8,
    reviews: 540,
    stock: 12,
    isFlashDeal: true,
    dealEndsAt: now + 1000 * 60 * 60 * 3,
    badge: "Hot",
    description: "Responsive cushioning and breathable mesh for daily runs or street style.",
    colors: ["#ffffff", "#101820", "#c1272d"],
    sizes: ["6", "7", "8", "9", "10", "11"]
  },
  {
    id: "sn-002",
    name: "Classic Leather Derby Shoes",
    category: "Shoes",
    price: 62.0,
    image: "/images/sneakers2.webp",
    rating: 4.6,
    reviews: 178,
    stock: 20,
    badge: "Premium",
    description: "Hand-finished leather derby shoes for formal and business-casual wear.",
    colors: ["#3b2415", "#1a1a1a"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: "sn-003",
    name: "High-Top Canvas Sneakers",
    category: "Shoes",
    price: 38.5,
    originalPrice: 52.0,
    image: "/images/sneakers3.webp",
    rating: 4.2,
    reviews: 261,
    stock: 33,
    description: "Timeless high-top canvas sneakers with a padded collar.",
    colors: ["#101010", "#e5e5e5", "#7a1f1f"],
    sizes: ["6", "7", "8", "9", "10"]
  },
  {
    id: "sn-004",
    name: "Trail Hiking Boots",
    category: "Shoes",
    price: 71.0,
    originalPrice: 95.0,
    image: "/images/sneakers4.webp",
    rating: 4.7,
    reviews: 145,
    stock: 9,
    isFlashDeal: true,
    dealEndsAt: now + 1000 * 60 * 60 * 6,
    description: "Waterproof trail boots with reinforced ankle support and grip sole.",
    colors: ["#4a3728", "#2b2b2b"],
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  {
    id: "jk-001",
    name: "Bomber Jacket",
    category: "Jackets",
    price: 49.0,
    originalPrice: 69.0,
    image: "/images/jackets1.webp",
    rating: 4.5,
    reviews: 202,
    stock: 25,
    description: "Classic bomber silhouette with ribbed cuffs and a durable outer shell.",
    colors: ["#1b1b1b", "#3a5f3a"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "jk-002",
    name: "Denim Jacket",
    category: "Jackets",
    price: 44.5,
    image: "/images/jackets2.webp",
    rating: 4.4,
    reviews: 167,
    stock: 31,
    description: "A wardrobe staple denim jacket with a timeless straight fit.",
    colors: ["#3b5a7a"],
    sizes: ["S", "M", "L", "XL"]
  },
    {
    id: "jk-003",
    name: "Streetwear Denim Jacket",
    category: "Jackets",
    price: 44.5,
    image: "/images/jackets3.webp",
    rating: 4.4,
    reviews: 167,
    stock: 31,
    description: "A wardrobe staple denim jacket with a timeless straight fit.",
    colors: ["#3b5a7a"],
    sizes: ["S", "M", "L", "XL"]
  },
    {
    id: "jk-004",
    name: "Rich-blaze jacket",
    category: "Jackets",
    price: 44.5,
    image: "/images/jackets4.webp",
    rating: 4.4,
    reviews: 167,
    stock: 31,
    description: "A wardrobe staple denim jacket with a timeless straight fit.",
    colors: ["#3b5a7a"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "ac-001",
    name: "Leather Belt",
    category: "Accessories",
    price: 14.99,
    image: "/images/accessories belt1.webp",
    rating: 4.3,
    reviews: 89,
    stock: 70,
    description: "Genuine leather belt with a brushed metal buckle.",
    colors: ["#3b2415", "#1a1a1a"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "ac-002",
    name: "Wool Beanie",
    category: "Accessories",
    price: 9.99,
    originalPrice: 14.99,
    image: "/images/accesories wool 2.webp",
    rating: 4.1,
    reviews: 56,
    stock: 90,
    description: "Soft knit beanie to keep you warm through the season.",
    colors: ["#1a1a1a", "#7a1f1f", "#2e3d2f"],
    sizes: ["One Size"]
  },
  {
    id: "ac-003",
    name: "Canvas Tote Bag",
    category: "Accessories",
    price: 12.5,
    image: "/images/accessories canvas 3.webp",
    rating: 4.0,
    reviews: 41,
    stock: 55,
    description: "Sturdy canvas tote for everyday essentials.",
    colors: ["#e8dcc8", "#1a1a1a"],
    sizes: ["One Size"]
  },
    {
    id: "ac-004",
    name: "Canvas Tote Bag",
    category: "Accessories",
    price: 12.5,
    image: "/images/accessories bracelet4.webp",
    rating: 4.0,
    reviews: 41,
    stock: 55,
    description: "Sturdy canvas tote for everyday essentials.",
    colors: ["#e8dcc8", "#1a1a1a"],
    sizes: ["One Size"]
  }

];

export const categories: { name: Product["category"]; icon: string; image: string }[] = [
  { name: "Shirts", icon: "fa-shirt", image: img("cat-shirts", 300, 300) },
  { name: "Pants", icon: "fa-socks", image: img("cat-pants", 300, 300) },
  { name: "Trousers", icon: "fa-user-tie", image: img("cat-trousers", 300, 300) },
  { name: "Shoes", icon: "fa-shoe-prints", image: img("cat-shoes", 300, 300) },
  { name: "Jackets", icon: "fa-vest", image: img("cat-jackets", 300, 300) },
  { name: "Accessories", icon: "fa-glasses", image: img("cat-accessories", 300, 300) }
];

export const flashDeals = products.filter((p) => p.isFlashDeal);

export const getProductById = (id: string) => products.find((p) => p.id === id);

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category.toLowerCase() === category.toLowerCase());

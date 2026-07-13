# SparkleCart 🛍️

A fashion e-commerce **frontend** (React + TypeScript + Vite) for shirts, pants, trousers, shoes,
jackets and accessories — styled after a warm orange/red marketplace theme, built with Bootstrap 5
and Font Awesome, and wired up with several "real-time" UX patterns.

> This is a **frontend-only** project. There is no backend/API — cart, wishlist and checkout are all
> simulated in the browser (React Context + `localStorage`).

## ✨ Features

- **React Router** routing: Home, Category listing, Product detail, Cart, Checkout, Wishlist, Flash
  Deals, Search results, Account, 404.
- **Real-time UX simulations**
  - Live ticking countdown timers on Flash Deal products (`useCountdown`, updates every second).
  - Simulated live "people viewing this product" + stock-draining counter (`useLiveViewers`, updates
    every ~2.6s to mimic a websocket feed).
  - Live social-proof purchase toasts ("Aarav from Chennai just bought...") streamed every ~8s
    (`useLiveActivityFeed`).
  - Real-time cart badge/totals that update instantly anywhere in the app via Context, and persist to
    `localStorage` so a refresh doesn't lose your cart.
  - Simulated real-time order pipeline animation on checkout (payment authorization → warehouse
    confirmation → order placed).
- **Bootstrap 5** grid/utilities + a custom design-token layer (`src/index.css`) for the brand look.
- **Font Awesome 6** icons throughout.
- Product images via a seeded placeholder photo service so every image URL always resolves — swap
  `img()` in `src/data/products.ts` for your real product photography when going live.
- Fully componentized: every UI piece lives in its own file under `src/components`.

## 📁 Project structure

```
src/
  components/
    Header/       Header.tsx, TopBar.tsx
    Hero/         HeroBanner.tsx, HeroSidePromo.tsx, QuickLinks.tsx
    Categories/   CategoryGrid.tsx
    Products/     ProductCard.tsx, ProductGrid.tsx, FlashDeals.tsx, PromoStrip.tsx
    Cart/         CartSidebar.tsx
    Notifications/LiveNotification.tsx
    Common/       Rating.tsx
    Footer/       Footer.tsx
  pages/          Home.tsx, ProductListing.tsx, ProductDetail.tsx, Cart.tsx, Checkout.tsx,
                  Wishlist.tsx, Deals.tsx, SearchResults.tsx, Account.tsx, NotFound.tsx
  context/        CartContext.tsx      (cart, wishlist, drawer state — the app's "real-time" store)
  hooks/          useCountdown.ts, useLiveViewers.ts, useLiveActivityFeed.ts
  data/           products.ts          (product catalog + categories)
  types/          index.ts
  App.tsx         route definitions
  main.tsx        app bootstrap (Router + CartProvider)
  index.css       design tokens & component styles
```

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## 🎨 Design tokens

Defined at the top of `src/index.css`:

| Token | Value | Use |
|---|---|---|
| `--sc-primary` | `#ff4d23` | Header gradient, buttons, prices |
| `--sc-secondary` | `#b8102f` | Badges, wishlist active state |
| `--sc-gold` | `#ffb200` | Sparkle accent, ratings, countdown highlights |
| `--sc-ink` | `#201510` | Text, footer, flash-deal banner |
| `--sc-cream` | `#fff6ee` | Page background |

## 🔌 Connecting a real backend later

Everything data-related is isolated in `src/data/products.ts` and `src/context/CartContext.tsx`.
To go live, replace the static `products` array with API calls (e.g. `fetch`/`axios` + `useEffect`,
or React Query), and swap the `localStorage`-backed cart for real API calls to your order service —
the component tree won't need to change.

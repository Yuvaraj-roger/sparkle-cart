import React from "react";
import HeroBanner from "../components/Hero/HeroBanner";
import HeroSidePromo from "../components/Hero/HeroSidePromo";
import QuickLinks from "../components/Hero/QuickLinks";
import CategoryGrid from "../components/Categories/CategoryGrid";
import FlashDeals from "../components/Products/FlashDeals";
import PromoStrip from "../components/Products/PromoStrip";
import ProductGrid from "../components/Products/ProductGrid";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Home: React.FC = () => {
  const trending = [...products].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
  const newArrivals = products.filter((p) => p.badge === "New" || p.reviews < 100).slice(0, 8);

  return (
    <div className="container py-3">
      <div className="row g-3 mb-3">
        <div className="col-lg-8"><HeroBanner /></div>
        <div className="col-lg-4"><HeroSidePromo /></div>
      </div>

      <QuickLinks />
      <div className="mt-4">
        <CategoryGrid />
      </div>

      <FlashDeals />
      <PromoStrip />

      <section className="mb-4">
        <div className="sc-section-title">
          <h2><span className="bar" />Trending Now</h2>
          <Link to="/category/shirts">See All <i className="fa-solid fa-chevron-right ms-1" /></Link>
        </div>
        <ProductGrid products={trending} columns={4} />
      </section>

      <section className="mb-4">
        <div className="sc-section-title">
          <h2><span className="bar" />New Arrivals</h2>
          <Link to="/category/shoes">See All <i className="fa-solid fa-chevron-right ms-1" /></Link>
        </div>
        <ProductGrid products={newArrivals} columns={4} />
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import { flashDeals } from "../data/products";
import ProductGrid from "../components/Products/ProductGrid";
import { useCountdown } from "../hooks/useCountdown";

const nearestDealEnd = Math.min(...flashDeals.map((d) => d.dealEndsAt ?? Infinity));

const Deals: React.FC = () => {
  const { hours, minutes, seconds } = useCountdown(nearestDealEnd);

  return (
    <div className="container py-4">
      <div className="sc-flash-banner mb-4">
        <h2><i className="fa-solid fa-bolt" /> All Flash Deals</h2>
        <div className="sc-countdown">
          <span style={{ fontSize: "0.78rem", opacity: 0.8 }}>Next deal ends in</span>
          <span className="unit">{hours}</span><span className="sep">:</span>
          <span className="unit">{minutes}</span><span className="sep">:</span>
          <span className="unit">{seconds}</span>
        </div>
      </div>
      <ProductGrid products={flashDeals} columns={4} />
    </div>
  );
};

export default Deals;

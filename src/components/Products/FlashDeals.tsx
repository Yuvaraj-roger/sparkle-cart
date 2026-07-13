import React from "react";
import { Link } from "react-router-dom";
import { flashDeals } from "../../data/products";
import { useCountdown } from "../../hooks/useCountdown";
import ProductGrid from "./ProductGrid";

const nearestDealEnd = Math.min(...flashDeals.map((d) => d.dealEndsAt ?? Infinity));

const FlashDeals: React.FC = () => {
  const { hours, minutes, seconds, expired } = useCountdown(nearestDealEnd);

  return (
    <section className="mb-4">
      <div className="sc-flash-banner">
        <h2><i className="fa-solid fa-bolt" /> Flash Deal — Live Now</h2>
        <div className="d-flex align-items-center gap-3">
          {!expired ? (
            <div className="sc-countdown">
              <span style={{ fontSize: "0.78rem", opacity: 0.8 }}>Ends in</span>
              <span className="unit">{hours}</span><span className="sep">:</span>
              <span className="unit">{minutes}</span><span className="sep">:</span>
              <span className="unit">{seconds}</span>
            </div>
          ) : (
            <span className="sc-pill">Deal ended — check back soon</span>
          )}
          <Link to="/deals" className="btn btn-sc-outline btn-sm" style={{ borderColor: "#fff", color: "#fff" }}>
            See All
          </Link>
        </div>
      </div>
      <ProductGrid products={flashDeals} columns={4} />
    </section>
  );
};

export default FlashDeals;

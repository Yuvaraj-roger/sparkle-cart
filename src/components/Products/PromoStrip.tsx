import React from "react";
import { Link } from "react-router-dom";

const PromoStrip: React.FC = () => {
  return (
    <section className="row g-3 mb-4">
      <div className="col-md-4">
        <div className="sc-promo-card a">
          <h5 className="mb-1">Up to $50 Off</h5>
          <p className="mb-2" style={{ fontSize: "0.85rem", opacity: 0.9 }}>On orders over $300</p>
          <Link to="/deals" className="btn btn-sm btn-light fw-semibold align-self-start">Claim Now</Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="sc-promo-card b">
          <h5 className="mb-1">Weekend Drop</h5>
          <p className="mb-2" style={{ fontSize: "0.85rem", opacity: 0.9 }}>New sneaker colorways just landed</p>
          <Link to="/category/shoes" className="btn btn-sm btn-light fw-semibold align-self-start">Shop Now</Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="sc-promo-card c">
          <h5 className="mb-1">Mega 30% Off</h5>
          <p className="mb-2" style={{ fontSize: "0.85rem", opacity: 0.85 }}>Plus a free mystery gift</p>
          <Link to="/category/jackets" className="btn btn-sm btn-dark fw-semibold align-self-start">Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default PromoStrip;

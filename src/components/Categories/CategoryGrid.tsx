import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/products";

const CategoryGrid: React.FC = () => {
  return (
    <section className="mb-4">
      <div className="sc-section-title">
        <h2><span className="bar" />Shop by Category</h2>
      </div>
      <div className="row g-2 g-md-3">
        {categories.map((c) => (
          <div className="col-4 col-md-2" key={c.name}>
            <Link to={`/category/${c.name.toLowerCase()}`} className="sc-category-card d-block">
              <img src={c.image} alt={c.name} loading="lazy" />
              <span className="d-block">{c.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;

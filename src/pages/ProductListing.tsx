import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductsByCategory } from "../data/products";
import ProductGrid from "../components/Products/ProductGrid";

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" }
];

const ProductListing: React.FC = () => {
  const { categoryName = "" } = useParams();
  const [sort, setSort] = useState("popular");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [onlyDeals, setOnlyDeals] = useState(false);

  const allProducts = useMemo(() => getProductsByCategory(categoryName), [categoryName]);

  const filtered = useMemo(() => {
    let list = allProducts.filter((p) => p.price <= maxPrice);
    if (onlyDeals) list = list.filter((p) => p.isFlashDeal);

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [allProducts, sort, maxPrice, onlyDeals]);

  const title = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div className="container py-4">
      <nav className="sc-breadcrumb mb-3" style={{ fontSize: "0.85rem" }}>
        <Link to="/">Home</Link> <span className="mx-1 text-muted">/</span> <span>{title}</span>
      </nav>

      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h1 className="mb-0">{title}</h1>
        {/* <select className="form-select w-auto" value={sort} onChange={(e) => setSort(e.target.value)}>
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select> */}
      </div>

      {/* <div className="row g-4">
        <div className="col-lg-3"> */}
          {/* <div className="sc-filter-card mb-3">
            {/* <h6>Price</h6>
            <input
              type="range"
              className="form-range"
              min={5}
              max={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            /> */}
            {/* <div className="d-flex justify-content-between text-muted" style={{ fontSize: "0.8rem" }}>
              <span>$5</span>
              <span>Up to ${maxPrice}</span>
            </div> */}
          {/* </div> */}
          {/* <div className="sc-filter-card"> */}
            {/* <h6>Availability</h6> */}
            {/* <div className="form-check"> */}
              {/* <input
                className="form-check-input"
                type="checkbox"
                id="onlyDeals"
                checked={onlyDeals}
                onChange={(e) => setOnlyDeals(e.target.checked)}
              /> */}
              {/* <label className="form-check-label" htmlFor="onlyDeals">Flash Deals Only</label> */}
            {/* </div>
          </div>
        </div> */}

        <div className="col-lg-9">
          <p className="text-muted mb-3"> products</p>
          <ProductGrid products={filtered} columns={3} />
        </div>
      {/* </div> */}
    </div>
  );
};

export default ProductListing;
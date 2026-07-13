import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductGrid from "../components/Products/ProductGrid";

const SearchResults: React.FC = () => {
  const [params] = useSearchParams();
  const q = (params.get("q") ?? "").toLowerCase();

  const results = useMemo(
    () =>
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      ),
    [q]
  );

  return (
    <div className="container py-4">
      <h2 className="mb-1">Search results for "{q}"</h2>
      <p className="text-muted mb-4">{results.length} products found</p>
      <ProductGrid products={results} columns={4} />
    </div>
  );
};

export default SearchResults;

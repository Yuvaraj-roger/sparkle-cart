import React from "react";
import { Product } from "../../types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4 | 6;
}

const colClass: Record<number, string> = {
  2: "col-6 col-md-6",
  3: "col-6 col-md-4",
  4: "col-6 col-md-3",
  6: "col-6 col-md-2"
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-5 text-muted">
        <i className="fa-solid fa-box-open fa-2x mb-3 d-block" />
        No products found.
      </div>
    );
  }

  return (
    <div className="row g-3">
      {products.map((p) => (
        <div className={colClass[columns]} key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

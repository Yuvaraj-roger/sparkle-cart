import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import ProductGrid from "../components/Products/ProductGrid";

const Wishlist: React.FC = () => {
  const { wishlist } = useCart();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="container py-4">
      <h2 className="mb-4"><i className="fa-solid fa-heart me-2" style={{ color: "var(--sc-secondary)" }} />Your Wishlist</h2>
      {items.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">You haven't saved anything yet.</p>
          <Link to="/" className="btn btn-sc-primary">Discover Products</Link>
        </div>
      ) : (
        <ProductGrid products={items} columns={4} />
      )}
    </div>
  );
};

export default Wishlist;

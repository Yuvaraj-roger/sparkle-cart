import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";
import Rating from "../Common/Rating";
import { useCart } from "../../context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const isWished = wishlist.includes(product.id);
  const discount = product.originalPrice
    ? Math.round(100 - (product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="sc-product-card">
      <div className="sc-product-thumb">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>
        {product.isFlashDeal && <span className="sc-badge deal"><i className="fa-solid fa-bolt me-1" />Flash</span>}
        {!product.isFlashDeal && product.badge && <span className="sc-badge">{product.badge}</span>}
        <button
          className={`sc-wishlist-btn ${isWished ? "active" : ""}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          <i className={isWished ? "fa-solid fa-heart" : "fa-regular fa-heart"} />
        </button>
        <div className="sc-quickadd">
          <button
            className="btn btn-sc-primary w-100 btn-sm"
            onClick={() => addToCart(product, 1)}
          >
            <i className="fa-solid fa-cart-plus me-1" /> Quick Add
          </button>
        </div>
      </div>
      <div className="sc-product-body">
        <span className="sc-product-cat">{product.category}</span>
        <Link to={`/product/${product.id}`} className="sc-product-name">{product.name}</Link>
        <Rating value={product.rating} reviews={product.reviews} />
        <div className="sc-price-row">
          <span className="sc-price">₹{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <>
              <span className="sc-price-old">₹{product.originalPrice.toFixed(2)}</span>
              <span className="sc-pill">-{discount}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

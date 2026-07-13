import React, { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getProductById, products } from "../data/products";
import Rating from "../components/Common/Rating";
import { useCart } from "../context/CartContext";
import { useLiveViewers } from "../hooks/useLiveViewers";
import { useCountdown } from "../hooks/useCountdown";
import ProductGrid from "../components/Products/ProductGrid";

const ProductDetail: React.FC = () => {
  const { id = "" } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string | undefined>(undefined);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const { viewers, stockLeft } = useLiveViewers(product?.id ?? "unknown", product?.stock ?? 10);
  const countdown = useCountdown(product?.dealEndsAt ?? 0);

  if (!product) return <Navigate to="/404" replace />;

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, qty, size, color);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="container py-4">
      <nav className="sc-breadcrumb mb-3" style={{ fontSize: "0.85rem" }}>
        <Link to="/">Home</Link> <span className="mx-1 text-muted">/</span>
        <Link to={`/category/${product.category.toLowerCase()}`}>{product.category}</Link>{" "}
        <span className="mx-1 text-muted">/</span> <span>{product.name}</span>
      </nav>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className="sc-product-thumb mb-2" style={{ borderRadius: "var(--sc-radius-md)" }}>
            <img src={gallery[activeImage]} alt={product.name} />
          </div>
          <div className="d-flex gap-2">
            {gallery.map((g, i) => (
              <button
                key={g + i}
                onClick={() => setActiveImage(i)}
                className="p-0 border-0 bg-transparent"
                style={{ width: 64, height: 76, borderRadius: 8, overflow: "hidden", outline: i === activeImage ? "2px solid var(--sc-primary)" : "none" }}
              >
                <img src={g} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </div>

        <div className="col-lg-7">
          <span className="sc-pill mb-2 d-inline-block">{product.category}</span>
          <h2>{product.name}</h2>
          <div className="d-flex align-items-center gap-3 mb-2">
            <Rating value={product.rating} reviews={product.reviews} size="md" />
            <span className="text-muted" style={{ fontSize: "0.85rem" }}>
              <i className="fa-solid fa-eye me-1" style={{ color: "var(--sc-primary)" }} />
              <span className="sc-live-dot" />{viewers} people viewing now
            </span>
          </div>

          <div className="d-flex align-items-baseline gap-2 mb-3">
            <span className="sc-price fs-3">${product.price.toFixed(2)}</span>
            {product.originalPrice && <span className="sc-price-old fs-6">${product.originalPrice.toFixed(2)}</span>}
          </div>

          {product.isFlashDeal && !countdown.expired && (
            <div className="sc-flash-banner mb-3 py-2 px-3">
              <span style={{ fontSize: "0.85rem" }}><i className="fa-solid fa-bolt me-1" style={{ color: "var(--sc-gold)" }} />Deal ends in</span>
              <div className="sc-countdown">
                <span className="unit">{countdown.hours}</span><span className="sep">:</span>
                <span className="unit">{countdown.minutes}</span><span className="sep">:</span>
                <span className="unit">{countdown.seconds}</span>
              </div>
            </div>
          )}

          <p className="text-muted">{product.description}</p>

          <div className="mb-2" style={{ fontSize: "0.85rem" }}>
            <i className="fa-solid fa-triangle-exclamation me-1" style={{ color: stockLeft < 10 ? "var(--sc-secondary)" : "var(--sc-success)" }} />
            {stockLeft < 10 ? <span className="text-danger fw-semibold">Only {stockLeft} left in stock — updating live</span> : <span>In stock ({stockLeft} available)</span>}
          </div>

          {product.colors && (
            <div className="mb-3">
              <h6 className="fw-semibold mb-2" style={{ fontSize: "0.85rem" }}>Color</h6>
              <div className="d-flex gap-2">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className={`sc-swatch ${color === c ? "active" : ""}`}
                    style={{ background: c }}
                    onClick={() => setColor(c)}
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="mb-3">
              <h6 className="fw-semibold mb-2" style={{ fontSize: "0.85rem" }}>Size</h6>
              <div className="d-flex gap-2 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={`sc-size-btn ${size === s ? "active" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="d-flex align-items-center gap-2">
              <button className="sc-qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
              <span>{qty}</span>
              <button className="sc-qty-btn" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <button className="btn btn-sc-primary flex-grow-1" onClick={handleAdd}>
              {justAdded ? (<><i className="fa-solid fa-check me-1" /> Added!</>) : (<><i className="fa-solid fa-cart-plus me-1" /> Add to Cart</>)}
            </button>
          </div>

          <div className="d-flex gap-4 text-muted" style={{ fontSize: "0.82rem" }}>
            <span><i className="fa-solid fa-truck me-1" /> Free shipping over $50</span>
            <span><i className="fa-solid fa-rotate-left me-1" /> 15-day returns</span>
            <span><i className="fa-solid fa-shield-halved me-1" /> 100% authentic</span>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-5">
          <div className="sc-section-title">
            <h2><span className="bar" />You May Also Like</h2>
          </div>
          <ProductGrid products={related} columns={4} />
        </section>
      )}
    </div>
  );
};

export default ProductDetail;

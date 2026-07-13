import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-5 text-center">
        <i className="fa-solid fa-cart-arrow-down fa-3x text-muted mb-3 d-block" />
        <h3>Your cart is empty</h3>
        <p className="text-muted">Looks like you haven't added anything yet.</p>
        <Link to="/" className="btn btn-sc-primary">Continue Shopping</Link>
      </div>
    );
  }

  const shipping = totalPrice >= 50 ? 0 : 4.99;

  return (
    <div className="container py-4">
      <h2 className="mb-4">Your Cart ({totalItems} items)</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="bg-white rounded-4 p-3 border" style={{ borderColor: "var(--sc-border)" }}>
            {items.map((item) => (
              <div className="sc-cart-item" key={`${item.product.id}-${item.size}-${item.color}`}>
                <img src={item.product.image} alt={item.product.name} style={{ width: 84, height: 100 }} />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <Link to={`/product/${item.product.id}`} className="fw-semibold">{item.product.name}</Link>
                    <button className="btn btn-sm text-muted" onClick={() => removeFromCart(item.product.id, item.size, item.color)}>
                      <i className="fa-solid fa-trash-can" />
                    </button>
                  </div>
                  <div className="text-muted mb-2" style={{ fontSize: "0.82rem" }}>
                    {item.size && <>Size: {item.size} &middot; </>}${item.product.price.toFixed(2)} each
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <button className="sc-qty-btn" onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="sc-qty-btn" onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)}>+</button>
                    </div>
                    <span className="sc-price">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="btn btn-sc-outline btn-sm mt-3" onClick={clearCart}>
              <i className="fa-solid fa-broom me-1" /> Clear Cart
            </button>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="sc-filter-card">
            <h6>Order Summary</h6>
            <div className="d-flex justify-content-between mb-2"><span className="text-muted">Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Shipping</span>
              <span>{shipping === 0 ? <span className="text-success fw-semibold">Free</span> : `$${shipping.toFixed(2)}`}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-3 fs-5 fw-bold">
              <span>Total</span><span>${(totalPrice + shipping).toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn btn-sc-primary w-100">Proceed to Checkout</Link>
            <Link to="/" className="btn btn-sc-outline w-100 mt-2">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

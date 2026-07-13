import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartSidebar: React.FC = () => {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  return (
    <>
      <div className={`sc-cart-overlay ${isDrawerOpen ? "open" : ""}`} onClick={closeDrawer} />
      <aside className={`sc-cart-drawer ${isDrawerOpen ? "open" : ""}`} aria-hidden={!isDrawerOpen}>
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <h5 className="mb-0"><i className="fa-solid fa-cart-shopping me-2" style={{ color: "var(--sc-primary)" }} />Your Cart ({totalItems})</h5>
          <button className="btn-sc-icon" onClick={closeDrawer} aria-label="Close cart"><i className="fa-solid fa-xmark" /></button>
        </div>

        <div className="flex-grow-1 overflow-auto px-3">
          {items.length === 0 ? (
            <div className="text-center text-muted py-5">
              <i className="fa-solid fa-cart-arrow-down fa-2x mb-3 d-block" />
              Your cart is empty.
            </div>
          ) : (
            items.map((item) => (
              <div className="sc-cart-item" key={`${item.product.id}-${item.size}-${item.color}`}>
                <img src={item.product.image} alt={item.product.name} />
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <span className="fw-semibold" style={{ fontSize: "0.88rem" }}>{item.product.name}</span>
                    <button className="btn btn-sm text-muted p-0" onClick={() => removeFromCart(item.product.id, item.size, item.color)}>
                      <i className="fa-solid fa-trash-can" />
                    </button>
                  </div>
                  <div className="text-muted" style={{ fontSize: "0.78rem" }}>
                    {item.size && <>Size: {item.size} </>}{item.color && <>&middot; Color swatch</>}
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="d-flex align-items-center gap-2">
                      <button className="sc-qty-btn" onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="sc-qty-btn" onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)}>+</button>
                    </div>
                    <span className="sc-price">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-3 border-top">
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Subtotal</span>
            <span className="fw-bold fs-5">${totalPrice.toFixed(2)}</span>
          </div>
          <Link
            to="/cart"
            className="btn btn-sc-outline w-100 mb-2"
            onClick={closeDrawer}
          >
            View Cart
          </Link>
          <Link
            to="/checkout"
            className={`btn btn-sc-primary w-100 ${items.length === 0 ? "disabled" : ""}`}
            onClick={closeDrawer}
          >
            Checkout <i className="fa-solid fa-arrow-right ms-1" />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;

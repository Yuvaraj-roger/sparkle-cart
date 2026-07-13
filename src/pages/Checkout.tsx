import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

type Step = "shipping" | "payment" | "review" | "placing" | "done";

const Checkout: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("shipping");
  const [orderId] = useState(() => `SC-${Math.floor(100000 + Math.random() * 900000)}`);
  const [progress, setProgress] = useState(0);

  const shipping = totalPrice >= 50 ? 0 : 4.99;

  // Simulates a real-time order pipeline (payment auth -> packing -> confirmed)
  useEffect(() => {
    if (step !== "placing") return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setStep("done");
          clearCart();
          return 100;
        }
        return p + 20;
      });
    }, 450);
    return () => clearInterval(id);
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  if (items.length === 0 && step !== "done") {
    return (
      <div className="container py-5 text-center">
        <h3>Nothing to check out</h3>
        <p className="text-muted">Your cart is empty.</p>
        <Link to="/" className="btn btn-sc-primary">Back to Shop</Link>
      </div>
    );
  }

  if (step === "done") {
    return (
      <div className="container py-5 text-center">
        <i className="fa-solid fa-circle-check fa-4x mb-3" style={{ color: "var(--sc-success)" }} />
        <h2>Order Confirmed!</h2>
        <p className="text-muted">Order <strong>{orderId}</strong> is being prepared. A live tracking link has been sent to your email.</p>
        <Link to="/" className="btn btn-sc-primary mt-2">Continue Shopping</Link>
      </div>
    );
  }

  const pipelineLabel = progress < 40 ? "Authorizing payment..." : progress < 80 ? "Confirming with warehouse..." : "Finalizing order...";

  return (
    <div className="container py-4">
      <h2 className="mb-4">Checkout</h2>

      <div className="d-flex gap-2 mb-4 flex-wrap">
        {["shipping", "payment", "review"].map((s, i) => (
          <span key={s} className={`sc-pill ${step === s ? "" : ""}`} style={{ opacity: step === s ? 1 : 0.5 }}>
            {i + 1}. {s.charAt(0).toUpperCase() + s.slice(1)}
          </span>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="sc-filter-card">
            {step === "shipping" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep("payment");
                }}
              >
                <h6>Shipping Address</h6>
                <div className="row g-2 mb-3">
                  <div className="col-md-6"><input required className="form-control" placeholder="Full Name" /></div>
                  <div className="col-md-6"><input required type="tel" className="form-control" placeholder="Phone Number" /></div>
                  <div className="col-12"><input required className="form-control" placeholder="Address Line" /></div>
                  <div className="col-md-4"><input required className="form-control" placeholder="City" /></div>
                  <div className="col-md-4"><input required className="form-control" placeholder="State" /></div>
                  <div className="col-md-4"><input required className="form-control" placeholder="PIN Code" /></div>
                </div>
                <button className="btn btn-sc-primary" type="submit">Continue to Payment</button>
              </form>
            )}

            {step === "payment" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep("review");
                }}
              >
                <h6>Payment Method</h6>
                <div className="d-flex gap-2 mb-3">
                  <span className="sc-pill"><i className="fa-brands fa-cc-visa me-1" />Card</span>
                  <span className="sc-pill" style={{ opacity: 0.5 }}>UPI</span>
                  <span className="sc-pill" style={{ opacity: 0.5 }}>Cash on Delivery</span>
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-12"><input required className="form-control" placeholder="Card Number" maxLength={19} /></div>
                  <div className="col-6"><input required className="form-control" placeholder="MM / YY" /></div>
                  <div className="col-6"><input required className="form-control" placeholder="CVV" maxLength={4} /></div>
                </div>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-sc-outline" onClick={() => setStep("shipping")}>Back</button>
                  <button className="btn btn-sc-primary" type="submit">Review Order</button>
                </div>
              </form>
            )}

            {step === "review" && (
              <div>
                <h6>Review Your Order</h6>
                {items.map((i) => (
                  <div key={`${i.product.id}-${i.size}`} className="d-flex justify-content-between py-2 border-bottom">
                    <span>{i.product.name} &times; {i.quantity}</span>
                    <span>${(i.product.price * i.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="d-flex gap-2 mt-3">
                  <button type="button" className="btn btn-sc-outline" onClick={() => setStep("payment")}>Back</button>
                  <button className="btn btn-sc-primary" onClick={() => setStep("placing")}>Place Order</button>
                </div>
              </div>
            )}

            {step === "placing" && (
              <div className="py-4">
                <h6 className="mb-3"><span className="sc-live-dot" />{pipelineLabel}</h6>
                <div className="progress" style={{ height: 10, borderRadius: 8 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress}%`, background: "var(--sc-primary)" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="sc-filter-card">
            <h6>Order Total</h6>
            <div className="d-flex justify-content-between mb-2"><span className="text-muted">Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="d-flex justify-content-between mb-2"><span className="text-muted">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <hr />
            <div className="d-flex justify-content-between fs-5 fw-bold"><span>Total</span><span>${(totalPrice + shipping).toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

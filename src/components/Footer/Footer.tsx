import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="sc-footer pt-5 pb-4 mt-4">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-4">
            <Link to="/" className="sc-logo mb-3 d-inline-flex">
              <i className="fa-solid fa-bolt" /> SparkleCart
            </Link>
            <p style={{ fontSize: "0.88rem" }}>
              Everyday fashion — shirts, pants, trousers and shoes — delivered fast, priced fair, and backed by
              real-time order tracking.
            </p>
            <div className="sc-social">
              <a href="#!"><i className="fa-brands fa-facebook-f" /></a>
              <a href="#!"><i className="fa-brands fa-instagram" /></a>
              <a href="#!"><i className="fa-brands fa-x-twitter" /></a>
              <a href="#!"><i className="fa-brands fa-youtube" /></a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Customer Service</h6>
            <Link to="/account">Live Chat</Link>
            <Link to="/account">Track Order</Link>
            <Link to="/account">Returns</Link>
            <Link to="/account">Shipping Info</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h6>About SparkleCart</h6>
            <Link to="/">Our Story</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Press</Link>
            <Link to="/">Sustainability</Link>
          </div>

          <div className="col-lg-4">
            <h6>Stay in the loop</h6>
            <p style={{ fontSize: "0.85rem" }}>Get real-time drops and flash-deal alerts in your inbox.</p>
            <form className="d-flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                className="form-control"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: 8 }}
              />
              <button type="submit" className="btn btn-sc-primary">Join</button>
            </form>
            {subscribed && (
              <div className="mt-2" style={{ fontSize: "0.8rem", color: "var(--sc-gold)" }}>
                <i className="fa-solid fa-circle-check me-1" /> Subscribed! Watch your inbox.
              </div>
            )}
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <div className="d-flex flex-wrap justify-content-between align-items-center pt-2" style={{ fontSize: "0.8rem" }}>
          <span>&copy; {new Date().getFullYear()} SparkleCart. All rights reserved.</span>
          <div className="d-flex gap-2 fs-5">
            <i className="fa-brands fa-cc-visa" />
            <i className="fa-brands fa-cc-mastercard" />
            <i className="fa-brands fa-cc-paypal" />
            <i className="fa-brands fa-cc-amex" />
            <i className="fa-brands fa-google-pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

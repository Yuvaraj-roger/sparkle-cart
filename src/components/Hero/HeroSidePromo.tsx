import React from "react";
import { Link } from "react-router-dom";

const HeroSidePromo: React.FC = () => {
  return (
    <div className="sc-hero position-relative h-100" style={{ background: "linear-gradient(135deg,#2a1810,#4a281a)" }}>
      <div
        className="sc-hero-bg"
        style={{ backgroundImage: "url(https://picsum.photos/seed/sparkle-promo-side/700/700)", opacity: 0.45 }}
      />
      <div className="sc-hero-content">
        <span className="sc-hero-eyebrow" style={{ background: "rgba(255,255,255,0.15)", color: "#ffd9a8" }}>
          Exclusive Curation
        </span>
        <h1 style={{ color: "#fff" }}>
          Premium <span style={{ color: "var(--sc-gold)" }}>Bundle</span> Deals
        </h1>
        <p style={{ color: "#e9d9cc" }}>Curated outfits, ready to wear. Reserve your set before stock runs out.</p>
        <Link to="/category/jackets" className="btn btn-sc-outline" style={{ borderColor: "#fff", color: "#fff" }}>
          Reserve Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSidePromo;

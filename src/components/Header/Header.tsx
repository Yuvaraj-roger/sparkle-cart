import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import { useCart } from "../../context/CartContext";
import { categories } from "../../data/products";

const Header: React.FC = () => {
  const { totalItems, wishlist, openDrawer } = useCart();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="sc-header">
      <TopBar />
      <div className="container py-3">
        <div className="d-flex align-items-center gap-3 gap-lg-4 flex-wrap flex-lg-nowrap">
          <Link to="/" className="sc-logo">
            <i className="fa-solid fa-bolt" />
            SparkleCart
          </Link>

          <form className="sc-search-form d-flex flex-grow-1 order-3 order-lg-2" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for shirts, shoes, trousers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search products"
            />
            <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
          </form>

          <div className="d-flex align-items-center gap-2 order-2 order-lg-3 ms-auto">
            <Link to="/wishlist" className="btn-sc-icon position-relative" title="Wishlist">
              <i className="fa-solid fa-heart" />
              {wishlist.length > 0 && <span className="sc-badge-dot">{wishlist.length}</span>}
            </Link>
            <button className="btn-sc-icon position-relative" title="Cart" onClick={openDrawer}>
              <i className="fa-solid fa-cart-shopping" />
              {totalItems > 0 && <span className="sc-badge-dot">{totalItems}</span>}
            </button>
            <Link to="/account" className="btn-sc-icon d-none d-sm-inline-flex" title="Account">
              <i className="fa-solid fa-user" />
            </Link>
          </div>
        </div>

        <nav className="sc-navlinks d-none d-lg-flex mt-2">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          {categories.map((c) => (
            <NavLink key={c.name} to={`/category/${c.name.toLowerCase()}`} className={({ isActive }) => (isActive ? "active" : "")}>
              {c.name}
            </NavLink>
          ))}
          <NavLink to="/deals" className={({ isActive }) => (isActive ? "active" : "")}>
            <i className="fa-solid fa-bolt me-1" style={{ color: "var(--sc-gold)" }} />Flash Deals
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

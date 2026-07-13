import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartSidebar from "./components/Cart/CartSidebar";
import LiveNotification from "./components/Notifications/LiveNotification";

import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Deals from "./pages/Deals";
import SearchResults from "./pages/SearchResults";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/account" element={<Account />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <CartSidebar />
      <LiveNotification />
    </div>
  );
};

export default App;

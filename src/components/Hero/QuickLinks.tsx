import React from "react";

const links = [
  { icon: "fa-tags", label: "Favorite Deals" },
  { icon: "fa-shop", label: "Brand Store" },
  { icon: "fa-percent", label: "Limited Offers" },
  { icon: "fa-basket-shopping", label: "Grocery Mart" },
  { icon: "fa-mobile-screen", label: "By Platform" },
  { icon: "fa-scissors", label: "Style 25% Off" },
  { icon: "fa-truck", label: "Delivery & Coupons" },
  { icon: "fa-gift", label: "Special Offers" }
];

const QuickLinks: React.FC = () => {
  return (
    <div className="sc-quicklinks row g-2 mt-1">
      {links.map((l) => (
        <div className="col-3 col-md" key={l.label}>
          <div className="item">
            <div className="icon-wrap"><i className={`fa-solid ${l.icon}`} /></div>
            <span style={{ fontSize: "0.78rem", fontWeight: 500 }}>{l.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;

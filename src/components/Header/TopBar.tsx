import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="sc-topbar py-1">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-none d-md-flex gap-3">
          <span><i className="fa-solid fa-truck-fast me-1" /> Free shipping over $50</span>
         
        </div>
        <div className="d-flex gap-3 ms-auto">
          <a href="#!"><i className="fa-solid fa-location-dot me-1" /> Tiruppur, TN</a>
          <a href="#!"><i className="fa-solid fa-circle-question me-1" /> Help</a>
          <a href="#!"><i className="fa-solid fa-globe me-1" /> EN / USD</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

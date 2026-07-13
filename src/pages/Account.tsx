import React from "react";
import { Link } from "react-router-dom";

const Account: React.FC = () => {
  return (
    <div className="container py-5 text-center">
      <i className="fa-solid fa-circle-user fa-4x mb-3" style={{ color: "var(--sc-primary)" }} />
      <h3>Account & Orders</h3>
      <p className="text-muted">
        This is a frontend-only demo, so sign-in isn't wired up to a server. In a production build this page would show
        your saved addresses, order history, and live delivery tracking.
      </p>
      <Link to="/" className="btn btn-sc-primary">Back to Home</Link>
    </div>
  );
};

export default Account;

import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold" style={{ color: "var(--sc-primary)" }}>404</h1>
      <h4>Page not found</h4>
      <p className="text-muted">The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn btn-sc-primary">Back to Home</Link>
    </div>
  );
};

export default NotFound;

import React from "react";

interface RatingProps {
  value: number;
  reviews?: number;
  size?: "sm" | "md";
}

const Rating: React.FC<RatingProps> = ({ value, reviews, size = "sm" }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={`sc-stars d-flex align-items-center gap-1 ${size === "md" ? "fs-6" : ""}`}>
      {stars.map((s) => {
        const filled = value >= s;
        const half = !filled && value >= s - 0.5;
        const iconClass = filled ? "fa-solid fa-star" : half ? "fa-solid fa-star-half-stroke" : "fa-regular fa-star muted";
        return <i key={s} className={iconClass} />;
      })}
      {typeof reviews === "number" && <span className="text-muted ms-1" style={{ fontSize: "0.78rem" }}>({reviews})</span>}
    </div>
  );
};

export default Rating;
